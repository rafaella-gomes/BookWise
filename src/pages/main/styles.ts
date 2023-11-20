import Link from 'next/link'
import { styled } from '../stitches.config'

export const PageContainer = styled('div', {
  width: '100%',
  height: '100vh',
  padding: '$6',
  gap: '$10',

  '@media (min-width: 1200px)': {
    justifyContent: 'center',
    display: 'flex',
  },
})
export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',

  '@media screen and (min-width: 360px) and (max-width: 1200px)': {
    marginTop: '$8',
  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$10',

  span: {
    fontWeight: '$bold',
    fontSize: '$2xl',
    lineHeight: '$short',
    color: '$gray100',
  },

  svg: {
    color: '$green100',
  },
})

export const Container = styled('div', {
  display: 'flex',
})

export const FeedsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '2',
  marginRight: '$8',
  gap: '$6',
})

export const FeedofLastReads = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ListOfLastReads = styled('div', {})

export const Title = styled('div', {
  fontSize: '$sm',
  lineHeight: '$base',
  fontWeight: '$regular',
  color: '$gray100',
  flex: 1,
})

export const Links = styled('div', {
  display: 'flex',
  padding: '$1 $2',
  alignItems: 'center',
  gap: '$2',
  borderRadius: '$sm',

  fontWeight: '$bold',
  fontSize: '$sm',
  lineHeight: '$base',

  '&:hover': {
    background: '$gray700',
    transition: 'background 0.3s ease-in-out',
  },

  svg: {
    color: '$purple100',
  },
})
export const LinkTitle = styled(Link, {
  textDecoration: 'none',
  color: '$purple100',
})

export const FeedContainer = styled('div', {
  marginTop: '$4',
})

export const ListOfComments = styled('div', {
  marginTop: '$4',
})

export const RightContainer = styled('div', {
  flex: '1',
  marginLeft: '$8',
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: '1',
  marginBottom: '$4',
})

export const ListofBooks = styled('div', {})

export const PlainButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  width: '100%',
  height: '100%',
})
