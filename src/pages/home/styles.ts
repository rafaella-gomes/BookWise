import { styled } from '../stitches.config'
import Image from 'next/image'

export const Container = styled('div', {
  width: '100%',
  padding: '$6',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$10',
  alignItems: 'center',
  justifyContent: 'center',

  '@media screen and (min-width: 360px) and (max-width: 1100px)': {
    gridTemplateColumns: '1fr',
  },

  '@media screen and (min-width:1200px) ': {
    height: '100vh',
  },
})

export const Preview = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3 $4',
  position: 'relative ',
})

export const PreviewImage = styled(Image, {
  borderRadius: '$md',
  width: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  zIndex: 1,
  '@media screen and (min-width: 360px) and (max-width: 767px)': {
    maxHeight: '5rem',
  },
  '@media screen and (min-width: 768px) and (max-width: 1100px)': {
    maxHeight: '8rem',
  },
})

export const PreviewLogo = styled(Image, {
  display: 'inline-flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 2,
  // width: '$10',

  '@media screen and (min-width: 360px) and (max-width: 767px)': {
    width: '14rem',
    height: '2.9rem',
  },
  '@media screen and (min-width: 768px) and (max-width: 1100px)': {
    width: '20rem',
    height: '5rem',
  },
})

export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$4',
})

export const LoginBox = styled('div', {})

export const LoginHead = styled('div', {
  fontFamily: '$default',
  marginBottom: '$4',

  h1: {
    fontSize: '$2xl',
    lineHeight: '$short',
    color: '$gray100',
    marginBottom: '$1',
  },

  p: {
    fontSize: '$md',
    fontWeight: '$regular',
    color: '$gray200',
    lineHeight: '$base',
  },

  '@media screen and (min-width: 360px) and (max-width: 767px)': {
    h1: {
      fontSize: '$xl',
    },
    p: {
      fontSize: '$md',
    },
  },
  '@media screen and (min-width: 768px) and (max-width: 1100px)': {
    h1: {
      fontSize: '$3xl',
    },
    p: {
      fontSize: '$xl',
    },
  },
})

export const LoginButton = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '& button, & a': {
    display: 'flex',
    minWidth: 372,
    maxWidth: 472,
    fontFamily: '$default',
    fontSize: '$lg',
    fontWeight: '$bold',
    lineHeight: '$base',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$md',
    color: '$gray200',
    background: '$gray600',
    border: 'none',
    cursor: 'pointer',
    padding: '$5 $6',
    gap: '$5',
    textDecoration: 'none',
  },

  '@media screen and (min-width: 360px) and (max-width: 767px) ': {
    '& button, & a': {
      minWidth: 300,
      fontSize: '$md',
    },
  },

  '@media screen and (min-width: 768px) and (max-width: 1200px) ': {
    '& button, & a': {
      minWidth: 500,
      fontSize: '$2xl',
    },
  },
})
