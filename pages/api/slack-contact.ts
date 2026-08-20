// pages/api/slack-contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type SupabaseInsertPayload = {
  type: 'INSERT';
  table: string;
  schema: string;
  record: {
    name?: string;
    email?: string;
    message?: string;
    source?: string;
    created_at?: string;
  };
  old_record: null;
};

function normalizeSecret(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw?.trim();
}

function secretsMatch(provided: string | undefined, expected: string) {
  if (!provided) return false;

  const normalizedProvided = provided.trim();
  const normalizedExpected = expected.trim();

  if (normalizedProvided === normalizedExpected) return true;

  const bearerMatch = normalizedProvided.match(/^Bearer\s+(.+)$/i);
  return bearerMatch?.[1]?.trim() === normalizedExpected;
}

function isAuthorized(req: NextApiRequest, secret: string) {
  const auth = normalizeSecret(req.headers.authorization);
  const headerSecret = normalizeSecret(req.headers['x-webhook-secret']);
  const querySecret = normalizeSecret(req.query.secret);

  return (
    secretsMatch(auth, secret) ||
    secretsMatch(headerSecret, secret) ||
    secretsMatch(querySecret, secret)
  );
}

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1)}…`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const webhookSecret =
    process.env.CONTACT_WEBHOOK_SECRET || process.env.SUBSCRIBER_WEBHOOK_SECRET;
  if (webhookSecret && !isAuthorized(req, webhookSecret)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const body = req.body as SupabaseInsertPayload;
  if (body.type !== 'INSERT' || body.table !== 'contact_messages') {
    return res.status(200).json({ skipped: true });
  }

  const slackUrl =
    process.env.SLACK_CONTACT_WEBHOOK_URL || process.env.SLACK_SUBSCRIBER_WEBHOOK_URL;
  if (!slackUrl) {
    console.error('SLACK_CONTACT_WEBHOOK_URL is not configured');
    return res.status(500).json({ error: 'Slack webhook not configured' });
  }

  const { name, email, message, source, created_at } = body.record;
  const timestamp = created_at ?? new Date().toISOString();
  const safeMessage = truncate(message?.trim() || 'unknown', 2500);
  const text = `New contact message from ${name ?? 'unknown'} (${email ?? 'unknown'})`;

  try {
    const slackResponse = await fetch(slackUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: [
                '*New contact message*',
                `• *Name:* ${name ?? 'unknown'}`,
                `• *Email:* ${email ?? 'unknown'}`,
                `• *Source:* ${source ?? 'unknown'}`,
                `• *Time:* ${timestamp}`,
                `• *Message:* ${safeMessage}`,
              ].join('\n'),
            },
          },
        ],
      }),
    });

    if (!slackResponse.ok) {
      const errorBody = await slackResponse.text();
      console.error('Slack delivery failed:', slackResponse.status, errorBody);
      return res.status(502).json({ error: 'Slack delivery failed' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Slack contact webhook error:', error);
    return res.status(500).json({ error: 'Failed to send Slack notification' });
  }
}
