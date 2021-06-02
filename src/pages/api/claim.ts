import { NextApiRequest, NextApiResponse } from 'next'
import merkles from 'src/constants/roots.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const proof = merkles[req.body.chainId.toString()].map((merkle) => {
    return merkle.claims[req.body.address.toString()]
  })
  // Rest of the API logic
  res.json(proof)
}
