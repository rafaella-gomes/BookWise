import { Book, Rating, User } from '@prisma/client'

interface FunctionProps {
  user: (User & { ratings: Array<Rating & { book: Book }> }) | null
}

export function calculateTotalBooksPagesRead(user: FunctionProps): number {
  const userRatings = user.user?.ratings

  if (userRatings && userRatings.length > 0) {
    const totalPagesRead = userRatings.reduce((total, rating) => {
      if (rating.book && rating.book.total_pages) {
        return total + rating.book.total_pages
      }
      return total
    }, 0)

    return totalPagesRead
  }

  return 0
}
