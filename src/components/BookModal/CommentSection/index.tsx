import {
  AvatarImage,
  BookDescription,
  CommentContainer,
  Container,
  Day,
  Details,
  Header,
  RatingDiv,
  UserContainer,
  UserName,
} from '@/components/CommentCard/styles'
import { DescriptionText } from './styles'
import Image from 'next/image'
import { Rating, User } from '@prisma/client'
import { convertNumberToStars } from '@/utils/convert-number-to-stars'
import { formatDate } from '@/utils/format-bookcard-date'

import avatardefault from '../../../assets/User Icon.png'

interface CommentSectionProps {
  rating: Rating
  user: User
  logedUserId: string | undefined
}

export default function CommentSection({
  rating,
  user,
  logedUserId,
}: CommentSectionProps) {
  const isCurrentUser = user.id === logedUserId

  return (
    <CommentContainer isUserLogged={isCurrentUser ? 'true' : 'false'}>
      <Container key={rating.id}>
        <Header>
          <AvatarImage>
            <Image
              src={user.avatar_url || avatardefault}
              width={40}
              height={40}
              alt="avatarImage"
            />
          </AvatarImage>
          <Details>
            <UserContainer>
              <UserName>{user.name}</UserName>
              <Day>{formatDate(rating.created_at)}</Day>
            </UserContainer>
            <RatingDiv>{convertNumberToStars(rating.rate)}</RatingDiv>
          </Details>
        </Header>
        <BookDescription>
          <DescriptionText>{rating.description}</DescriptionText>
        </BookDescription>
      </Container>
    </CommentContainer>
  )
}
