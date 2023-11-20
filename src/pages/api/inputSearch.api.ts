import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { query } = req.query

  try {
    const books = await prisma.book.findMany({
      where: {
        OR: [
          { name: { contains: query as string } },
          { author: { contains: query as string } },
        ],
      },
    })

    if (books && books.length > 0) {
      return res.json(books)
    } else {
      return res.json([])
    }
  } catch (error) {
    console.error('Erro ao executar a pesquisa', error)
    res.status(500).json({ error: 'Erro na pesquisa' })
  }
}
