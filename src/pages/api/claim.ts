import { NextApiRequest, NextApiResponse } from 'next'
import merkle from 'src/constants/roots.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const proof =
    merkle[req.body.chainId.toString()].claims[req.body.address.toString()]
  if (!proof) {
    res.status(404).json({ error: 'proof not found' })
    return
  }

  // Rest of the API logic
  res.json(proof)
}
