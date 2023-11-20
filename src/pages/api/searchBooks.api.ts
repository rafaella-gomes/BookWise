import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('Recebido pedido de pesquisa:', req.query)

  if (req.method !== 'GET') {
    console.log('Método não permitido')
    return res.status(405).end()
  }

  const { query, user } = req.query

  try {
    console.log('Pesquisando livros para o usuário:', user)

    const userRatings = await prisma.rating.findMany({
      where: {
        user_id: user as string,
        book: {
          name: {
            contains: query as string,
          },
        },
      },
      include: {
        book: true,
      },
    })
    console.log('Livros encontrados:', userRatings)

    return res.json(userRatings)
  } catch (error) {
    console.error('Erro ao executar a pesquisa', error)
    res.status(500).json({ error: 'Erro na pesquisa' })
  }
}
