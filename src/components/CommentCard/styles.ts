import { styled } from '@/pages/stitches.config'
import Link from 'next/link'

export const CommentContainer = styled('div', {
  display: 'flex',
  padding: '$6',
  borderRadius: 8,
  background: '$gray700',
  marginBottom: '$3',

  variants: {
    isUserLogged: {
      true: {
        background: '$gray600',
        transition: 'background-color 2s',
      },
      false: { background: '$gray700' },
    },
  },
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '100%',
})

export const Header = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  marginBottom: '$8',

  img: {
    objectFit: 'cover',
    borderRadius: '$full',
  },
})

export const AvatarImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$full',
  background: '$gradient-vertical',

  width: '43px',
  height: '43px',
  overflow: 'hidden',
})

export const LinkToProfile = styled(Link, {
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Details = styled('div', {
  display: 'flex',
  flex: '1',
})
export const UserContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '$4',
})

export const UserName = styled('span', {
  fontWeight: '$bold',
  fontSize: '$md',
  lineHeight: '$short',
  color: '$gray100',
})

export const Day = styled('span', {
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray400',
})

export const RatingDiv = styled('div', {
  marginLeft: 'auto',
  color: '$purple100',
})

export const Body = styled('div', {
  display: 'flex',
})

export const BookImage = styled('div', {
  display: 'flex',
  marginRight: '$5',
  borderRadius: 8,
})
export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$5',
})

export const BookName = styled('span', {
  fontWeight: '$bold',
  fontSize: '$md',
  lineHeight: '$short',
  color: '$gray100',
})

export const BookAuthor = styled('span', {
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray400',
})

export const BookDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const DescriptionText = styled('span', {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray300',
  alignSelf: 'stretch',
  wordBreak: 'break-word',
  maxWidth: '450px',

  a: {
    marginLeft: '$2',
    textDecoration: 'none',
    cursor: 'pointer',
    color: '$purple100',
  },
})
