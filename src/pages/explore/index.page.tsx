import { SideBar } from '@/components/Sidebar'
import { Header, PageContainer } from '../main/styles'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import BookCard from '@/components/BookCard'
import {
  Container,
  Categories,
  InputHeader,
  PageHeader,
  RowofBooks,
  Tag,
  Input,
  PlainButton,
} from './styles'
import { Session, getServerSession } from 'next-auth'
import { GetServerSideProps } from 'next'
import { authOptions } from '../api/auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'
import { Book, Category, Rating, User } from '@prisma/client'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import { api } from '@/lib/axios'
import * as Dialog from '@radix-ui/react-dialog'
import { BookModal } from '@/components/BookModal'

interface ExplorePage {
  session: Session | null
  categories: (Category & {
    books: Book[]
  })[]
  books: (Book & {
    ratings: Array<Rating & { user: User }>
    categories: Category[]
    rate: number
    showReadBookFlag: boolean | undefined
  })[]
}

export default function Explore({ session, categories, books }: ExplorePage) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const categoryQuery = searchParams.get('category')

  const category = categories.find(
    (category) => category.name === categoryQuery,
  )
  const bookIdsInCategory = category?.books.map((book) => book.id)

  const initialBooks = categoryQuery
    ? books.filter((book) => bookIdsInCategory?.includes(book.id))
    : books

  const [filteredBooks, setFilteredBooks] = useState(initialBooks)

  const [searchQuery, setSearchQuery] = useState('')

  const specificCategories = [
    'Tudo',
    'Programação',
    'Educação',
    'Fantasia',
    'Ficção científica',
    'Terror',
    'HQs',
    'Suspense',
  ]

  function filterBook(categoryId: string) {
    const category = categories.find((category) => category.id === categoryId)

    if (!category) {
      setFilteredBooks(books)
      setSearchQuery('')
      router.push(`/explore`)
      return
    }

    const bookIdsInCategory = category.books.map((book) => book.id)

    const categorizedBooks = books.filter((book) =>
      bookIdsInCategory.includes(book.id),
    )

    setFilteredBooks(categorizedBooks)
    setSearchQuery('')
    router.push(`/explore?category=${category.name}`)
  }

  async function handleSearchBooks() {
    try {
      const response = await api.get(`/inputSearch?query=${searchQuery}`)

      const searchResults = response.data

      if (searchResults.length > 0) {
        setFilteredBooks(searchResults)
      } else {
        setFilteredBooks(initialBooks)
      }
    } catch (error) {
      console.error('Erro na pesquisa:', error)
    }
  }
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSearchBooks()
    }
  }

  return (
    <PageContainer>
      <SideBar session={session} />
      <Container>
        <PageHeader>
          <Header>
            <Binoculars width={32} height={32} />
            <span>Explore</span>
          </Header>
          <Input>
            <InputHeader
              type="text"
              placeholder="Buscar livro ou autor"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <MagnifyingGlass onClick={handleSearchBooks} />
          </Input>
        </PageHeader>
        <Categories>
          <Tag
            active={!categoryQuery}
            onClick={() => filterBook('all')}
            type="button"
          >
            Tudo
          </Tag>
          {categories
            .filter((category) => specificCategories.includes(category.name))
            .map((category) => (
              <Tag
                type="button"
                active={category.name === categoryQuery}
                onClick={() => filterBook(category.id)}
                key={category.id}
              >
                {category.name}
              </Tag>
            ))}
        </Categories>
        <RowofBooks>
          {filteredBooks.map((book) => (
            <Dialog.Root key={book.id}>
              <Dialog.Trigger asChild>
                <PlainButton>
                  <BookCard
                    book={book}
                    explorePage={true}
                    bookRead={book.showReadBookFlag}
                  />
                </PlainButton>
              </Dialog.Trigger>
              <BookModal book={book} session={session} />
            </Dialog.Root>
          ))}
        </RowofBooks>
      </Container>
    </PageContainer>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  const userId = session?.user?.id

  const categories = await prisma.category.findMany({
    include: {
      books: true,
    },
  })

  const averageBooksRatings = await prisma.rating.groupBy({
    by: 'book_id',
    _avg: {
      rate: true,
    },
  })

  const books = await prisma.book.findMany({
    include: {
      categories: true,
      ratings: { include: { user: true } },
    },
  })

  const booksWithAverageRating = averageBooksRatings.map((rating) => ({
    rate: rating._avg.rate,
    ...books.find((book) => book.id === rating.book_id),
  }))

  const booksWithReadBookFlag = booksWithAverageRating.map((book) => {
    const userRating = book?.ratings?.find(
      (rating) => rating.user.id === userId,
    )

    return {
      ...book,
      showReadBookFlag: userRating !== undefined,
    }
  })

  return {
    props: {
      session: JSON.parse(JSON.stringify(session)) as Session | null,
      categories: JSON.parse(JSON.stringify(categories)),
      books: JSON.parse(JSON.stringify(booksWithReadBookFlag)),
    },
  }
}
