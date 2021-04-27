import { NextApiRequest, NextApiResponse } from 'next';
import merkle from '../../root.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const proof = merkle.claims[req.query.address.toString()];

  if (!proof) {
    res.status(404).json({ error: 'proof not found' });
    return;
  }

  // Rest of the API logic
  res.json({ proof })
}
