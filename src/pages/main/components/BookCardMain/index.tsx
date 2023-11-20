import { BookAuthor, BookInfo, BookName } from '@/components/CommentCard/styles'
import {
  BookDetailsMain,
  BookImageMain,
  BookSummary,
  CardContainerMain,
  ContainerMain,
  DateDetails,
  HeaderDetails,
  RatingMain,
} from './styles'
import Image from 'next/image'
import { Book, Rating } from '@prisma/client'
import { formatDate } from '@/utils/format-bookcard-date'
import { convertNumberToStars } from '@/utils/convert-number-to-stars'

interface BookCardMainProps {
  rating: Rating
  book: Book
}

export default function BookCardMain({ rating, book }: BookCardMainProps) {
  return (
    <CardContainerMain>
      <ContainerMain>
        <BookImageMain>
          <Image
            src={book.cover_url}
            width={108}
            height={152}
            alt="bookimage"
          />
        </BookImageMain>
        <BookDetailsMain>
          <HeaderDetails>
            <DateDetails>
              <span>{formatDate(rating.created_at)} </span>
            </DateDetails>
            <RatingMain>{convertNumberToStars(rating.rate)}</RatingMain>
          </HeaderDetails>
          <BookInfo>
            <BookName>{book.name} </BookName>
            <BookAuthor>{book.author}</BookAuthor>
          </BookInfo>
          <BookSummary>
            <span>{book.summary}</span>
          </BookSummary>
        </BookDetailsMain>
      </ContainerMain>
    </CardContainerMain>
  )
}
