import { AvatarImage, Details, UserName } from '@/components/CommentCard/styles'
import { Check, Star, X } from 'phosphor-react'
import Image from 'next/image'
import {
  Buttons,
  ButtonIcons,
  FormContainer,
  TextContainer,
  UserContainer,
  RatingContainer,
  Container,
  Header,
  SlideDownAnimation,
  StarDiv,
  RatingDiv,
} from './styles'
import { Session } from 'next-auth'

import avatardefault from '../../../assets/User Icon.png'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { api } from '@/lib/axios'
import { Rating, User } from '@prisma/client'

interface ModalRatingProps {
  session: Session | null
  bookId: string
  onClose: () => void
  setFilteredRatings: React.Dispatch<
    React.SetStateAction<Array<Rating & { user: User }>>
  >
  filteredRatings: Rating[]
}

export default function RateBookSection({
  session,
  bookId,
  onClose,
  setFilteredRatings,
  filteredRatings,
}: ModalRatingProps) {
  const userName = session?.user.name

  const avatar = session?.user.avatar_url
  const { register, handleSubmit } = useForm()

  const [ratings, setRatings] = useState([false, false, false, false, false])

  const handleStarClick = (index: number) => {
    const updatedRatings = [...ratings]

    // Se a última estrela for clicada
    if (index === 4) {
      // Inverte o preenchimento da última estrela
      updatedRatings[4] = !updatedRatings[4]

      // Se a última estrela for clicada para preencher, preenche as anteriores
      if (updatedRatings[4]) {
        for (let i = 0; i < 4; i++) {
          updatedRatings[i] = true
        }
      }
    } else {
      // Se qualquer outra estrela for clicada
      updatedRatings[index] = !updatedRatings[index]

      // Se a estrela for clicada para desmarcar
      if (!updatedRatings[index]) {
        // Desmarca todas as estrelas à direita
        for (let i = index + 1; i < 5; i++) {
          updatedRatings[i] = false
        }
      } else {
        // Preencha todas as estrelas à esquerda
        for (let i = 0; i < index; i++) {
          updatedRatings[i] = true
        }
      }
    }

    setRatings(updatedRatings)
  }

  async function handleAddRating(data: Record<string, string>) {
    try {
      const rate = ratings.lastIndexOf(true) + 1 || 0
      const requestData = {
        rate,
        description: data.Comment,
        bookId,
        userId: session?.user.id,
      }

      console.log('Payload da requisição:', requestData)

      const response = await api.post('/rateBook', requestData)

      console.log('Rating criado com sucesso:', response.data)
      const newRating = response.data

      setFilteredRatings([...filteredRatings, newRating])

      onClose()
    } catch (error) {
      console.error('Erro ao criar rating:', error)
    }
  }

  return (
    <SlideDownAnimation>
      <RatingContainer>
        <Container>
          <Header>
            <AvatarImage>
              <Image
                src={avatar || avatardefault}
                width={40}
                height={40}
                alt="avatarImage"
              />
            </AvatarImage>
            <Details>
              <UserContainer>
                <UserName>{userName}</UserName>
              </UserContainer>
              <RatingDiv>
                {ratings.map((filled, index) => (
                  <StarDiv
                    key={index}
                    onClick={() => handleStarClick(index)}
                    className={filled ? 'filled' : ''}
                  >
                    {filled ? (
                      <Star weight="fill" size={20} />
                    ) : (
                      <Star size={20} />
                    )}
                  </StarDiv>
                ))}
              </RatingDiv>
            </Details>
          </Header>
          <FormContainer onSubmit={handleSubmit(handleAddRating)}>
            <TextContainer>
              <textarea
                placeholder="Escreva sua avaliação"
                {...register('Comment')}
              ></textarea>
            </TextContainer>
            <Buttons>
              <ButtonIcons Function={'Delete'} onClick={() => onClose()}>
                <X width={24} height={24} />
              </ButtonIcons>
              <ButtonIcons Function={'Check'}>
                <button type="submit">
                  <Check width={24} height={24} />
                </button>
              </ButtonIcons>
            </Buttons>
          </FormContainer>
        </Container>
      </RatingContainer>
    </SlideDownAnimation>
  )
}
