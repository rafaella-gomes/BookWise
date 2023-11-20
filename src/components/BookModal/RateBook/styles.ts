import { styled } from '@/pages/stitches.config'

import { keyframes } from '@stitches/react'

const slideDown = keyframes({
  '0%': { transform: 'translateY(-100%)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
})

export const SlideDownAnimation = styled('div', {
  animation: `${slideDown} 0.5s ease`,
  transformOrigin: 'top',
})

export const RatingContainer = styled('div', {
  display: 'flex',
  padding: '$6',
  borderRadius: 8,
  background: '$gray700',
  marginBottom: '$3',
  width: '100%',
})

export const RatingDiv = styled('div', {
  marginLeft: 'auto',
  color: '$purple100',
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const Header = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  marginBottom: '$6',

  img: {
    objectFit: 'cover',
    borderRadius: '$full',
  },
})
export const UserContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '$4',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '$3',
})

export const StarDiv = styled('div', {
  cursor: 'pointer',
  width: '20px',
  height: '40px',
  display: 'inline-block',

  svg: {
    transition: 'color 0.2s ease-in-out',
    color: '$purple100',
  },

  '&:hover:not(.filled)': {
    svg: {
      color: '$purple200',
    },
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  padding: '$4 $5',
  alignItems: 'flex-start',
  minHeight: '11rem',
  width: '100%',
  gap: '$1',
  background: '$gray800',
  borderRadius: 4,
  border: '1px solid $gray500',

  '&:focus-within': {
    outline: 'none',
    border: '1px solid $green200',
    color: '$green100',
  },

  textarea: {
    all: 'unset',
    color: '$gray400',
    minHeight: '10rem',
    width: '100%',
    resize: 'none',
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    wordWrap: 'break-word',
  },
})

export const Buttons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const ButtonIcons = styled('div', {
  display: 'flex',
  padding: '$2',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
  background: '$gray600',

  '&:hover': {
    background: '$gray500',
  },

  variants: {
    Function: {
      Check: {
        svg: {
          color: '$green100',
        },
      },
      Delete: {
        svg: {
          color: '$purple100',
        },
      },
    },
  },

  button: {
    all: 'unset',
  },
})
