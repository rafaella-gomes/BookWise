import { styled } from '@/pages/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.60)',
  flexShrink: 0,
})

export const ModalContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  minWidth: '30rem',
  maxWidth: '40rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.50)',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  maxHeight: '100vh',

  '&::-webkit-scrollbar': {
    width: '8px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: '$full',
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray700',
    borderRadius: '$full',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: '$gray600',
  },

  strong: {
    fontWeight: 'bold',
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },
})

export const ModalClose = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray400',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
  flexShrink: 0,
  cursor: 'pointer',
})

export const BookContainer = styled('div', {
  display: 'flex',
  padding: '$6 $8 $4 $8',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$10',
  background: '$gray700',
  borderRadius: 10,
  maxWidth: 564,
})
export const BookDetail = styled('div', {
  display: 'flex',
  gap: '$8',
})

export const BookImage = styled('div', {
  display: 'flex',
  marginRight: '$5',
  borderRadius: 8,
  border: '1px solid $gradient-vertical',
})
export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingTop: '$1',
  alignItems: 'flex-start',
  flex: ' 1 0 0',
})
export const BookInfoHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$5',
  gap: '$1',
})

export const BookInfoFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  svg: {
    color: '$purple100',
  },

  span: {
    color: '$gray400',
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const BookName = styled('span', {
  fontWeight: '$bold',
  fontSize: '$lg',
  lineHeight: '$short',
  color: '$gray100',
})

export const BookAuthor = styled('span', {
  fontWeight: '$regular',
  fontSize: '$md',
  lineHeight: '$base',
  color: '$gray400',
})

export const BookAboutContainer = styled('div', {
  display: 'flex',
  padding: '$6 0',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$10',
  background: '$gray700',
  width: ' 100%',
  borderTop: '1px solid $gray600',
})

export const BookAbout = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginLeft: '$1',
  flex: 1,

  svg: {
    color: '$green100',
  },
  variants: {
    Class: {
      Category: {
        marginRight: '$2',
      },
      Pages: {
        marginLeft: '$2',
      },
    },
  },
})

export const AboutIcon = styled('div', {
  display: 'flex',
  padding: 0,
})

export const AboutInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

export const AboutTitle = styled('span', {
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray300',
})

export const AboutDiv = styled('div', {
  display: 'flex',
  gap: '$1',
})
export const AboutDetail = styled('span', {
  fontWeight: '$bold',
  fontSize: '$md',
  lineHeight: '$short',
  color: '$gray200',
})

export const Scrollbar = styled('div', {
  '&::after': {
    width: '6px',
    position: 'absolute',
    right: '0',
    top: '0',
    bottom: '0',
    background: '$gray600',
    borderRadius: '$full',
  },
})

export const FeedContainer = styled('div', {
  marginTop: '$4',
})

export const Title = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$4',
  marginTop: '$10',

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    fontWeight: '$regular',
    color: '$gray100',
  },
})

export const LinkContainer = styled('div', {
  display: 'flex',
  padding: '$1 $2',
  alignItems: 'center',
  borderRadius: 4,
  '&:hover': {
    background: '$gray700',
    transition: 'background 0.3s ease-in-out',
  },

  a: {
    textDecoration: 'none',
    color: '$purple100',
  },

  button: {
    all: 'unset',
    color: '$purple100',
    fontSize: '$sm',
    lineHeight: '$base',
    fontWeight: '$bold',
    cursor: 'pointer',
  },
})
