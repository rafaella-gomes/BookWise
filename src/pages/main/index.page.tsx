import { SideBar } from '../../components/Sidebar'
import {
  FeedContainer,
  FeedofLastReads,
  FeedsContainer,
  ListofBooks,
  MainContainer,
  PageContainer,
  RightContainer,
  Container,
  ListOfComments,
  Header,
  Title,
  Links,
  LinkTitle,
  ListOfLastReads,
  HeaderContainer,
  PlainButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import CommentCard from '@/components/CommentCard'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import BookCard from '@/components/BookCard'
import { GetServerSideProps } from 'next'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth].api'
import BookCardMain from './components/BookCardMain'
import { Book, Category, Rating, User } from '@prisma/client'
import { prisma } from '@/lib/prisma'

import { BookModal } from '@/components/BookModal'

interface MainPage {
  session: Session | null
  recentRatings: Array<Rating & { book: Book; user: User }>
  recentUserRatings: Array<Rating & { book: Book }>
  topRatedBooks: Array<
    Book & {
      rate: number
      categories: Category[]
      ratings: Array<Rating & { user: User }>
    }
  >
}

export default function Main({
  session,
  recentUserRatings,
  recentRatings,
  topRatedBooks,
}: MainPage) {
  const isSignedIn = session !== null

  return (
    <PageContainer>
      <SideBar session={session} />
      <MainContainer>
        <Header>
          <ChartLineUp width={32} height={32} />
          <span>Início</span>
        </Header>
        <Container>
          <FeedsContainer>
            {isSignedIn ? (
              <FeedofLastReads>
                <HeaderContainer>
                  <Title>
                    <span>Sua última leitura</span>
                  </Title>
                  <Links>
                    <LinkTitle href={`/profile`}>Ver Todas</LinkTitle>
                    <CaretRight width={16} height={16} />
                  </Links>
                </HeaderContainer>
                <ListOfLastReads>
                  {recentUserRatings.map((rating, index) => (
                    <BookCardMain
                      key={index}
                      rating={rating}
                      book={rating.book}
                    />
                  ))}
                </ListOfLastReads>
              </FeedofLastReads>
            ) : null}
            <FeedContainer>
              <Title>
                <span>Avaliações mais recentes</span>
              </Title>
              <ListOfComments>
                {recentRatings.map((rating, index) => (
                  <CommentCard
                    key={index}
                    rating={rating}
                    user={rating.user}
                    book={rating.book}
                  />
                ))}
              </ListOfComments>
            </FeedContainer>
          </FeedsContainer>
          <RightContainer>
            <HeaderContainer>
              <Title>
                <span>Livros Populares</span>
              </Title>{' '}
              <Links>
                <LinkTitle href={`/explore`}>Ver Todos</LinkTitle>{' '}
                <CaretRight width={16} height={16} />
              </Links>
            </HeaderContainer>
            <ListofBooks>
              {topRatedBooks.map((book) => (
                <Dialog.Root key={book.id}>
                  <Dialog.Trigger asChild>
                    <PlainButton>
                      <BookCard book={book} explorePage={false} />
                    </PlainButton>
                  </Dialog.Trigger>
                  <BookModal book={book} session={session} />
                </Dialog.Root>
              ))}
            </ListofBooks>
          </RightContainer>
        </Container>
      </MainContainer>
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  const recentRatings = await prisma.rating.findMany({
    where: {
      user_id: { not: session?.user.id },
    },
    include: {
      user: true,
      book: true,
    },
    take: 5,
    orderBy: {
      created_at: 'desc',
    },
  })

  const topRatedBookRatings = await prisma.rating.groupBy({
    by: 'book_id',
    _avg: {
      rate: true,
    },
    orderBy: {
      _avg: {
        rate: 'desc',
      },
    },
    take: 5,
  })

  const topRatedBooks = await prisma.book.findMany({
    where: {
      id: {
        in: topRatedBookRatings.map((rating) => rating.book_id),
      },
    },
    include: {
      categories: true,
      ratings: { include: { user: true } },
    },
  })

  const topRatedBooksWithRating = topRatedBookRatings.map((rating) => ({
    rate: rating._avg.rate,
    ...topRatedBooks.find((book) => book.id === rating.book_id),
  }))

  const recentUserRatings = await getRecentUserRatings(session)

  return {
    props: {
      session: JSON.parse(JSON.stringify(session)) as Session | null,
      recentUserRatings: JSON.parse(JSON.stringify(recentUserRatings)),
      recentRatings: JSON.parse(JSON.stringify(recentRatings)),
      topRatedBooks: JSON.parse(JSON.stringify(topRatedBooksWithRating)),
    },
  }
}

function getRecentUserRatings(session: Session | null) {
  if (!session) return []

  return prisma.rating.findMany({
    where: {
      user_id: session.user.id,
    },
    include: {
      book: true,
    },
    take: 1,
    orderBy: {
      created_at: 'desc',
    },
  })
}
