// pages/api/slack-subscriber.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type SupabaseInsertPayload = {
  type: 'INSERT';
  table: string;
  schema: string;
  record: {
    email?: string;
    source?: string;
    created_at?: string;
  };
  old_record: null;
};

function isAuthorized(req: NextApiRequest, secret: string) {
  const auth = req.headers.authorization;
  const headerSecret = req.headers['x-webhook-secret'];

  return auth === `Bearer ${secret}` || headerSecret === secret;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const webhookSecret = process.env.SUBSCRIBER_WEBHOOK_SECRET;
  if (webhookSecret && !isAuthorized(req, webhookSecret)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const body = req.body as SupabaseInsertPayload;
  if (body.type !== 'INSERT' || body.table !== 'email_subscribers') {
    return res.status(200).json({ skipped: true });
  }

  const slackUrl = process.env.SLACK_SUBSCRIBER_WEBHOOK_URL;
  if (!slackUrl) {
    console.error('SLACK_SUBSCRIBER_WEBHOOK_URL is not configured');
    return res.status(500).json({ error: 'Slack webhook not configured' });
  }

  const { email, source, created_at } = body.record;
  const timestamp = created_at ?? new Date().toISOString();
  const text = `New email subscriber: ${email ?? 'unknown'} (source: ${source ?? 'unknown'})`;

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
                '*New email subscriber*',
                `• *Email:* ${email ?? 'unknown'}`,
                `• *Source:* ${source ?? 'unknown'}`,
                `• *Time:* ${timestamp}`,
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
    console.error('Slack subscriber webhook error:', error);
    return res.status(500).json({ error: 'Failed to send Slack notification' });
  }
}
