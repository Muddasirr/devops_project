import { db } from '../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Only POST allowed');

  const { product_name, amount } = req.body;

  try {
    const [result] = await db.execute(
      'INSERT INTO sales (product_name, amount) VALUES (?, ?)',
      [product_name, amount]
    );
    res.status(200).json({ message: 'Success', result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'DB Error', error: err });
  }
}
