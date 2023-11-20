/* eslint-disable camelcase */
import { SideBar } from '@/components/Sidebar'
import { PageContainer } from '../../main/styles'

import { CaretLeft, MagnifyingGlass, User } from 'phosphor-react'

import {
  FeedBox,
  FeedBoxTitle,
  FeedsContainerProfile,
  Container,
  Input,
  InputDiv,
  ProfileContainer,
  ProfileHeader,
} from './styles'
import BookCardProfile from './components/bookcardprofile'
import { GetServerSideProps } from 'next'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth].api'
import Analytics from './components/analytics'
import { prisma } from '@/lib/prisma'
import { Book, Rating, Category } from '@prisma/client'
import { formatDate } from '@/utils/format-bookcard-date'
import { ChangeEvent, useState } from 'react'
import { api } from '../../../lib/axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

type User = {
  id: string
  name: string
  avatar_url: string | null
  created_at: Date
}

interface ProfilePage {
  session: Session
  user:
    | (User & {
        ratings: Array<Rating & { book: Book & { categories: Category[] } }>
      })
    | null
}

export default function Profile({ session, user }: ProfilePage) {
  const initialRatingsToShow = user?.ratings
  const router = useRouter()

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(initialRatingsToShow)

  const handleSearchBook = async () => {
    try {
      console.log({ searchTerm })
      const userId = router.query.userId || session.user.id
      const response = await api.get(
        `/searchBooks?query=${searchTerm}&user=${userId}`,
      )
      const data = response.data
      setSearchResults(data)
    } catch (error) {
      console.error('Erro ao executar a pesquisa', error)
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSearchBook()
    }
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
    handleSearchBook()
  }

  return (
    <PageContainer>
      <SideBar session={session} />
      <ProfileContainer>
        <Container>
          {router.query.userId ? (
            <ProfileHeader Page={'UserIdProfile'}>
              <Link href={'/profile'}>
                {' '}
                <CaretLeft width={20} height={20} />
                Voltar
              </Link>
            </ProfileHeader>
          ) : (
            <ProfileHeader Page={'Default'}>
              <User width={32} height={32} />
              <span>Perfil</span>
            </ProfileHeader>
          )}
          <InputDiv>
            <Input
              type="text"
              placeholder="Buscar livro avaliado"
              value={searchTerm}
              onChange={onChange}
              onKeyDown={handleKeyPress}
            />
            <MagnifyingGlass onClick={handleSearchBook} />
          </InputDiv>
          <FeedsContainerProfile>
            {searchResults && searchResults.length > 0 ? (
              searchResults?.map((rating, index) => {
                const { created_at, book, rate, description } = rating || {}

                return (
                  <FeedBox key={index}>
                    <FeedBoxTitle>{formatDate(created_at)} </FeedBoxTitle>
                    <BookCardProfile
                      book={book}
                      rate={rate}
                      description={description}
                    />
                  </FeedBox>
                )
              })
            ) : (
              <FeedBox>
                <FeedBoxTitle>
                  Nenhum livro encontrado para a pesquisa.
                </FeedBoxTitle>
              </FeedBox>
            )}
          </FeedsContainerProfile>
        </Container>
        <Analytics user={user} />
      </ProfileContainer>
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const session = await getServerSession(req, res, authOptions)
  const paramsUserId = params?.userId?.at(0)

  const userId = paramsUserId ?? session?.user.id

  if (!userId) {
    return {
      redirect: {
        destination: '/main',
        permanent: false,
      },
    }
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: { categories: true },
          },
        },
        take: 5,
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  return {
    props: {
      session: JSON.parse(JSON.stringify(session)) as Session,
      user: JSON.parse(JSON.stringify(user)),
    },
  }
}
