import { styled } from '@/pages/stitches.config'

export const CardContainerMain = styled('div', {
  display: 'flex',
  padding: '$4 $5',
  borderRadius: 8,
  background: '$gray600',
  marginBottom: '$3',
  alignItems: 'center',
  border: '2px solid transparent',

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const ContainerMain = styled('div', {
  display: 'flex',
  width: '100%',
})

export const BookDetailsMain = styled('div', {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  padding: '2 0',
})

export const HeaderDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '$3',
})

export const DateDetails = styled('div', {
  display: 'flex',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray300',
})

export const BookImageMain = styled('div', {
  display: 'flex',

  marginRight: '$5',
  borderRadius: 8,
})

export const RatingMain = styled('div', {
  color: '$purple100',
})

export const BookSummary = styled('div', {
  display: 'flex',
  marginTop: '$6',
  color: '$gray300',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
})
