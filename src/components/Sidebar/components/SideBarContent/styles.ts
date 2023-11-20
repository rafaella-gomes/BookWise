import Link from 'next/link'
import Image from 'next/image'
import { styled } from '@/pages/stitches.config'
import background from '../../../../assets/Background.jpg'

export const SideBarContainer = styled('div', {
  background: `url('${background.src}') no-repeat`,
  backgroundSize: 'cover',
  borderRadius: '$md',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',

  variants: {
    isOpen: {
      true: {
        display: 'flex',

        '@media screen and (min-width: 360px) and (max-width: 1200px)': {
          zIndex: 1000,
          position: 'absolute',
          top: '$13',
          minHeight: 600,
          minWidth: 220,
        },

        '@media screen and (min-width: 1200px)': {
          display: 'flex',
          minHeight: 400,
          minWidth: 250,
          maxWidth: 250,
          height: '100%',
          padding: 0,
          flex: '1',
        },
      },
      false: {
        display: 'none',

        '@media screen and (min-width: 1200px)': {
          display: 'flex',
          minHeight: 400,
          minWidth: 250,
          maxWidth: 250,
          height: '100%',
          padding: 0,
          flex: '1',
        },
      },
    },
  },
})

export const SideBarItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '$6',
  gap: '$8',
  justifyContent: 'space-between',
  flex: 1,
})

export const SideBarImageContainer = styled('div', {
  marginBottom: '$10',
})

export const SideBarImage = styled(Image, {
  opacity: 0.9,
  height: '$10',
  width: 'auto',
})

export const SideBarListOfItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '$6',
  gap: '$4',
  flex: '1',
})
export const Indicator = styled('div', {
  width: 4,
  height: '$6',
  borderRadius: '$full',
  background: '$gradient-vertical',
})

export const Item = styled('div', {
  padding: '$2 0',
  display: 'flex',
  gap: '$4',
})

export const ItemLink = styled(Link, {
  textDecoration: 'none',
  color: '$gray400',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    isActive: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
      },
    },
  },
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',
  marginBottom: '$6',
  padding: '$1',
  gap: '$3',

  lineHeight: '$base',
  border: 'none',
  cursor: 'pointer',
  background: 'none',
  color: '$gray200',
  borderRadius: '$sm',

  '&:hover': {
    background: '#e6e8f20a',
    transition: 'background 0.3s ease-in-out',
  },

  variants: {
    LogStatus: {
      LogIn: {
        fontSize: '$md',
        fontWeight: '$bold',
        svg: {
          color: '$green100',
        },
      },
      LogOut: {
        fontSize: '$sm',
        fontWeight: '$regular',
        svg: {
          color: '#F75A68',
        },
      },
    },
  },
})

export const ButtonImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$full',
  background: '$gradient-vertical',

  width: '35px',
  height: '35px',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
    borderRadius: '$full',
  },
})
