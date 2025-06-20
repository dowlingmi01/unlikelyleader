// pages/api/send-notification.ts
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { type, name, email, message, result } = req.body;

  if (!name || !email || (!message && !result)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const emailResponse = await resend.emails.send({
      from: 'no-reply@unlikelyleader.org', // must match verified sender
      to: 'michaeldowling440@gmail.com',         // your receiving email
      subject: type === 'quiz' ? 'New Quiz Submission' : 'New Contact Form Submission',
      html: `
        <h3>${type === 'quiz' ? 'Quiz Submission' : 'Contact Message'}</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        ${result ? `<p><strong>Quiz Result:</strong> ${result}</p>` : ''}
      `,
    });

    return res.status(200).json({ success: true, emailResponse });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send notification' });
  }
}
