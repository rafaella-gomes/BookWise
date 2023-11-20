import { styled } from '@/pages/stitches.config'

export const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  display: 'none',

  '@media screen and (min-width: 360px) and (max-width: 1200px)': {
    display: 'block',
  },
})

export const HamburguerMenu = styled('div', {
  display: 'none',
  background: 'none',
  color: '$white',
  height: 'min-content',
  top: '$7',

  button: {
    all: 'unset',
  },

  '@media screen and (min-width: 360px) and (max-width: 1200px)': {
    display: 'flex',
  },
})
