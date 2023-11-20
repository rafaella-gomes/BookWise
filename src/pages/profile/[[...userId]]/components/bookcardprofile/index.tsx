import {
  BookAuthor,
  BookImage,
  BookInfo,
  BookName,
} from '../../../../../components/CommentCard/styles'
import { BookDetails, Rating } from '../../../../../components/BookCard/styles'
import Image from 'next/image'

import { BookComment, CardContainerProfile, ContainerProfile } from './styles'
import { Book } from '@prisma/client'
import { convertNumberToStars } from '@/utils/convert-number-to-stars'

interface BookCardProfileProps {
  book: Book
  rate: number
  description: string
}

export default function BookCardProfile({
  book,
  rate,
  description,
}: BookCardProfileProps) {
  return (
    <CardContainerProfile>
      <ContainerProfile>
        <BookImage>
          <Image src={book.cover_url} width={98} height={134} alt="bookimage" />
        </BookImage>
        <BookDetails>
          <BookInfo>
            <BookName>{book.name} </BookName>
            <BookAuthor>{book.author}</BookAuthor>
          </BookInfo>
          <Rating>{convertNumberToStars(rate)}</Rating>
        </BookDetails>
      </ContainerProfile>
      <BookComment>{description}</BookComment>
    </CardContainerProfile>
  )
}
