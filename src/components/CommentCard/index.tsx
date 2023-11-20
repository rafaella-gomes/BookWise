import {
  AvatarImage,
  Body,
  BookAuthor,
  BookDescription,
  BookDetails,
  BookImage,
  BookInfo,
  BookName,
  CommentContainer,
  Container,
  Day,
  DescriptionText,
  Details,
  Header,
  RatingDiv,
  UserContainer,
  UserName,
  LinkToProfile,
} from './styles'

import Image from 'next/image'

// import Link from 'next/link'
import { Book, User } from '@prisma/client'
import { formatDate } from '@/utils/format-bookcard-date'
import { convertNumberToStars } from '@/utils/convert-number-to-stars'

import avatardefault from '../../assets/User Icon.png'

interface CommentCardProps {
  rating: {
    id: string
    rate: number
    description: string
    created_at: Date
    book_id: string
    user_id: string
  }
  user: User
  book: Book
}

export default function CommentCard({ rating, user, book }: CommentCardProps) {
  return (
    <CommentContainer>
      <Container>
        <Header>
          <AvatarImage>
            <LinkToProfile href={`/profile/${user.id}`}>
              <Image
                src={user.avatar_url || avatardefault}
                width={40}
                height={40}
                alt="avatarImage"
              />
            </LinkToProfile>
          </AvatarImage>
          <Details>
            <UserContainer>
              <LinkToProfile href={`/profile/${user.id}`}>
                <UserName>{user.name}</UserName>
              </LinkToProfile>
              <Day>{formatDate(rating.created_at)}</Day>
            </UserContainer>
            <RatingDiv>{convertNumberToStars(rating.rate)}</RatingDiv>
          </Details>
        </Header>
        <Body>
          <BookImage>
            <Image
              src={book.cover_url}
              width={108}
              height={152}
              alt="bookimage"
            />
          </BookImage>
          <BookDetails>
            <BookInfo>
              <BookName>{book.name} </BookName>
              <BookAuthor>{book.author}</BookAuthor>
            </BookInfo>
            <BookDescription>
              <DescriptionText>{rating.description}</DescriptionText>
            </BookDescription>
          </BookDetails>
        </Body>
      </Container>
    </CommentContainer>
  )
}
