import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'
import {
  Division,
  ImageContainer,
  Infos,
  NavigationImageContainer,
  NavigationInfos,
  NavigationImagesContainer,
  NavigationInfosContainer,
  RightContainerProfile,
  Texts,
  Titles,
  UserAvatar,
  UserContainer,
} from './styles'
import { Book, Category, Rating, User } from '@prisma/client'
import dayjs from 'dayjs'
import { calculateTotalBooksPagesRead } from '@/utils/calculate-total-books-pages-read'
import { findMostCommomCategory } from '@/utils/find-most-common-category'
import avatardefault from '../../../../../assets/User Icon.png'

interface AnalyticsProps {
  user:
    | (User & {
        ratings: Array<Rating & { book: Book & { categories: Category[] } }>
      })
    | null
}

export default function Analytics({ user }: AnalyticsProps) {
  // console.log(JSON.stringify({ user }, null, 2))
  const totalPagesRead = calculateTotalBooksPagesRead({ user })

  const booksAuthor = user?.ratings.map((rating) => rating.book.author)
  const uniquebooksAuthorsList = Array.from(new Set(booksAuthor))

  const mostCommonCategory = findMostCommomCategory(user)

  return (
    <RightContainerProfile>
      <UserContainer>
        <ImageContainer>
          <UserAvatar
            src={user?.avatar_url || avatardefault}
            alt="Avatar"
            width={72}
            height={72}
          />
        </ImageContainer>
        <Infos Local={'User'}>
          <Titles Local={'UserName'}>{user?.name}</Titles>
          <Texts Local={'Membership'}>
            Membro desde {dayjs(user?.created_at).format('YYYY')}
          </Texts>
        </Infos>
        <Division />
      </UserContainer>

      <NavigationInfos>
        <NavigationImagesContainer>
          <NavigationImageContainer>
            <BookOpen width={32} height={32} />
          </NavigationImageContainer>
          <NavigationImageContainer>
            <Books width={32} height={32} />
          </NavigationImageContainer>
          <NavigationImageContainer>
            <UserList width={32} height={32} />
          </NavigationImageContainer>
          <NavigationImageContainer>
            <BookmarkSimple width={32} height={32} />
          </NavigationImageContainer>
        </NavigationImagesContainer>
        <NavigationInfosContainer>
          <Infos Local={'Navigation'}>
            <Titles Local={'Navigation'}>{totalPagesRead}</Titles>
            <Texts Local={'Navigation'}>Páginas Lidas</Texts>
          </Infos>
          <Infos Local={'Navigation'}>
            <Titles Local={'Navigation'}>{user?.ratings.length}</Titles>
            <Texts Local={'Navigation'}>Livros Avaliados</Texts>
          </Infos>
          <Infos Local={'Navigation'}>
            <Titles Local={'Navigation'}>
              {uniquebooksAuthorsList.length}
            </Titles>
            <Texts Local={'Navigation'}>Autores Lidos</Texts>
          </Infos>
          <Infos Local={'Navigation'}>
            <Titles Local={'Navigation'}>{mostCommonCategory}</Titles>
            <Texts Local={'Navigation'}>Categoria mais lida</Texts>
          </Infos>
        </NavigationInfosContainer>
      </NavigationInfos>
    </RightContainerProfile>
  )
}
