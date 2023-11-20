import * as Dialog from '@radix-ui/react-dialog'
import {
  BookAbout,
  BookDetail,
  BookInfo,
  BookAuthor,
  BookName,
  ModalClose,
  ModalContent,
  Overlay,
  BookImage,
  BookContainer,
  BookInfoHeader,
  BookInfoFooter,
  BookAboutContainer,
  AboutIcon,
  AboutInfo,
  AboutTitle,
  AboutDetail,
  AboutDiv,
  FeedContainer,
  Title,
  LinkContainer,
} from './styles'
import { BookOpen, BookmarkSimple, X } from 'phosphor-react'
import Image from 'next/image'
import { convertNumberToStars } from '@/utils/convert-number-to-stars'
import CommentSection from './CommentSection'
import { ListOfComments } from '@/pages/main/styles'
// import Link from 'next/link'
import RateBookSection from './RateBook'
import ModalLogin from './ModalLogin'
import { Book, Category, Rating, User } from '@prisma/client'
import { Session } from 'next-auth'
import { useState } from 'react'

type BookWithDetails = Book & {
  ratings: Array<Rating & { user: User }>
  categories: Category[]
  rate: number
}

interface BookModalProps {
  book: BookWithDetails
  session: Session | null
}

export const BookModal = ({ book, session }: BookModalProps) => {
  const [showRatingModal, setShowRatingModal] = useState(false)

  const stars = convertNumberToStars(book.rate)

  const isSignedIn = session !== null

  const handleAvaliate = () => {
    setShowRatingModal(true)
  }

  const handleCloseRatingModal = () => {
    setShowRatingModal(false)
  }

  const initialRatings =
    (book.ratings &&
      book.ratings.filter((rating) => rating.book_id === book.id)) ??
    []
  const [filteredRatings, setFilteredRatings] = useState(initialRatings)

  const hasUserRated = filteredRatings.some(
    (rating) => rating.user_id === session?.user.id,
  )

  return (
    <Dialog.Portal>
      <Overlay />
      <ModalContent>
        <BookContainer>
          <BookDetail>
            <BookImage>
              <Image
                src={`${book.cover_url}`}
                width={172}
                height={242}
                alt="bookimage"
                priority
              />
            </BookImage>
            <BookInfo>
              <BookInfoHeader>
                <BookName>{book.name}</BookName>
                <BookAuthor>{book.author}</BookAuthor>
              </BookInfoHeader>
              <BookInfoFooter>
                <div>{stars}</div>

                <span>
                  {' '}
                  {book.ratings && book.ratings.length}{' '}
                  {book.ratings && book.ratings.length === 1
                    ? 'avaliação'
                    : 'avaliações'}
                </span>
              </BookInfoFooter>
            </BookInfo>
          </BookDetail>
          <BookAboutContainer>
            <BookAbout Class="Category">
              <AboutIcon>
                <BookmarkSimple width={24} height={24} />
              </AboutIcon>
              <AboutInfo>
                <AboutTitle>Categoria</AboutTitle>
                <AboutDiv>
                  {book.categories &&
                    book.categories.map((category, index) => (
                      <AboutDetail key={category.id}>
                        {category.name}
                        {index < book.categories.length - 1 && ','}
                      </AboutDetail>
                    ))}
                </AboutDiv>
              </AboutInfo>
            </BookAbout>
            <BookAbout Class="Pages">
              <AboutIcon>
                <BookOpen width={24} height={24} />
              </AboutIcon>
              <AboutInfo>
                <AboutTitle>Páginas</AboutTitle>
                <AboutDetail>{book.total_pages}</AboutDetail>
              </AboutInfo>
            </BookAbout>
          </BookAboutContainer>
        </BookContainer>
        <FeedContainer>
          <Title>
            <span>Avaliações</span>
            {isSignedIn ? (
              !hasUserRated &&
              !showRatingModal && (
                <LinkContainer>
                  <button onClick={handleAvaliate}>Avaliar</button>
                </LinkContainer>
              )
            ) : (
              <LinkContainer>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button>Avaliar</button>
                  </Dialog.Trigger>
                  <ModalLogin />
                </Dialog.Root>
              </LinkContainer>
            )}
          </Title>
          {showRatingModal && (
            <RateBookSection
              session={session}
              bookId={book.id}
              onClose={handleCloseRatingModal}
              setFilteredRatings={setFilteredRatings}
              filteredRatings={filteredRatings}
            />
          )}
          <ListOfComments>
            {filteredRatings
              .sort(
                (a, b) =>
                  new Date(b.created_at).getTime() -
                  new Date(a.created_at).getTime(),
              )
              .map((rating) => (
                <CommentSection
                  key={rating.id}
                  rating={rating}
                  user={rating.user}
                  logedUserId={session?.user.id}
                />
              ))}
          </ListOfComments>
        </FeedContainer>
        <ModalClose>
          <X width={24} height={24} />
        </ModalClose>
      </ModalContent>
    </Dialog.Portal>
  )
}
