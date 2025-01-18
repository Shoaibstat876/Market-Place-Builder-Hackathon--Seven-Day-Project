// /src/pages/api/subscribe.ts

import type { NextApiRequest, NextApiResponse } from 'next';

interface SubscriptionRequestBody {
  email: string;
}

const isValidEmail = (email: string): boolean => {
  // Simple email regex validation (can be more sophisticated if needed)
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email }: SubscriptionRequestBody = req.body;

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
      // Simulate saving email to database or third-party service
      console.log(`Email subscribed: ${email}`);

      // Example: Call an external service (this should be in a try-catch block)
      // await someService.saveEmail(email);

      res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Error subscribing:', error);
      res.status(500).json({ error: 'Failed to subscribe' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
