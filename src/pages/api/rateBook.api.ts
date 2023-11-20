import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { bookId, rate, userId, description } = req.body
  console.log('Request data:', bookId, rate, userId, description)

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).end()
  }

  const existingRating = await prisma.rating.findFirst({
    where: {
      book_id: bookId,
      user_id: userId,
    },
  })

  if (existingRating) {
    const updatedRating = await prisma.rating.update({
      where: { id: existingRating.id },
      data: { rate },
    })
    return res.json(updatedRating)
  } else {
    const newRating = await prisma.rating.create({
      data: {
        rate,
        description,
        book: { connect: { id: bookId } },
        user: { connect: { id: userId } },
      },
      include: {
        user: true,
      },
    })

    console.log('New Rating:', newRating)
    return res.json(newRating)
  }
}
