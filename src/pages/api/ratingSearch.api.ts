import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  try {
    const ratings = await prisma.rating.findMany({})

    return res.json(ratings)
  } catch (error) {
    console.error('Erro ao buscar os ratings:', error)
    return res.status(500).json({ error: 'Erro no servidor' })
  }
}
