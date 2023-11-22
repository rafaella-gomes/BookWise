import { styled } from '@/pages/stitches.config'

export const CardContainerProfile = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$4 $5',
  borderRadius: 8,
  background: '$gray700',
  marginBottom: '$3',
  alignItems: 'center',
  gap: '$6',
  maxWidth: '100%',
  minWidth: '20rem',
})

export const ContainerProfile = styled('div', {
  display: 'flex',
  width: '100%',
})
export const BookComment = styled('div', {
  display: 'flex',
  width: '100%',
  color: '$gray300',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
})
