import { Book, Category, Rating, User } from '@prisma/client'

type FunctionProps =
  | (User & {
      ratings: Array<Rating & { book: Book & { categories: Category[] } }>
    })
  | null

export function findMostCommomCategory(user: FunctionProps) {
  const booksCategories = user?.ratings
    .map((rating) => rating.book.categories)
    .flat() as Category[]

  const categoryCounts = booksCategories.reduce((acc, category) => {
    const categoryName = category.name
    const count = acc.get(categoryName) || 0
    acc.set(categoryName, count + 1)
    return acc
  }, new Map<string, number>())

  let maxCategory = ''
  let maxCount = 0

  categoryCounts.forEach((count, category) => {
    if (count > maxCount) {
      maxCount = count
      maxCategory = category
    }
  })

  return maxCategory
}
