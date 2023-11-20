import {
  BookAuthor,
  BookImage,
  BookInfo,
  BookName,
} from '../CommentCard/styles'
import {
  CardContainer,
  Container,
  BookDetails,
  Rating,
  ReadBook,
} from './styles'
import Image from 'next/image'
import { convertNumberToStars } from '@/utils/convert-number-to-stars'
import { Book } from '@prisma/client'

export interface BookCardProps {
  book: Book & { rate: number }
  explorePage: boolean
  bookRead?: boolean | undefined
}

export default function BookCard({
  book,
  explorePage = false,
  bookRead,
}: BookCardProps) {
  const stars = convertNumberToStars(book.rate)

  return (
    <CardContainer Page={explorePage ? 'Explore' : 'Default'}>
      {bookRead && <ReadBook>Lido</ReadBook>}
      <Container>
        <BookImage>
          <Image
            src={`${book.cover_url}`}
            width={64}
            height={94}
            alt="bookimage"
            priority
          />
        </BookImage>
        <BookDetails>
          <BookInfo>
            <BookName>{book.name} </BookName>
            <BookAuthor>{book.author}</BookAuthor>
          </BookInfo>
          <Rating>{stars}</Rating>
        </BookDetails>
      </Container>
    </CardContainer>
  )
}
