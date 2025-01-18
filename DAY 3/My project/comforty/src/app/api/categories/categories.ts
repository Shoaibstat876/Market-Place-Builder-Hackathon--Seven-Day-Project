// pages/api/categories.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const categories = [
      { name: 'Laptops', href: '/products?category=laptops', description: 'Find the best laptops for all your needs' },
      { name: 'Headphones', href: '/products?category=headphones', description: 'Noise-cancelling, wireless, and more' },
      { name: 'Smartwatches', href: '/products?category=smartwatches', description: 'Stay connected on the go' },
      { name: 'Cameras', href: '/products?category=cameras', description: 'Capture high-quality photos and videos' },
      { name: 'Monitors', href: '/products?category=monitors', description: 'High-resolution and great performance' },
      { name: 'Accessories', href: '/products?category=accessories', description: 'Enhance your tech experience' },
    ];

    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
}
