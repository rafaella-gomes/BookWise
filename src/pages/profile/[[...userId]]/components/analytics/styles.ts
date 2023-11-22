import { styled } from '@/pages/stitches.config'
import Image from 'next/image'

export const RightContainerProfile = styled('div', {
  flex: '1',
  marginLeft: '$8',
  borderLeft: '1px solid $gray700',

  '@media screen and (min-width: 360px) and (max-width: 768px)': {
    marginLeft: 0,
    marginRight: '$1',
  },
})

export const UserContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '$5',
  overflow: 'hidden',
  borderRadius: '$full',
  background: '$gradient-vertical',

  width: '76px',
  height: '76px',
})

export const UserAvatar = styled(Image, {
  borderRadius: '$full',
  objectFit: 'cover',
})

export const Division = styled('div', {
  display: 'flex',
  width: '32px',
  height: '4px',
  background: '$gradient-horizontal',
  borderRadius: '$full',
  margin: '$4',
})

export const NavigationInfos = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$8',
  padding: '$10 $5',
  marginLeft: '$4',
})

export const NavigationImagesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3.2rem',
  height: '100%',

  '@media screen and (min-width: 360px) and (max-width: 767px)': {
    gap: '5.5rem',
  },
})

export const NavigationImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '34px',
  width: '34px',
  svg: {
    margin: 0,
    padding: 0,
    color: '$green100',
  },
})

export const NavigationInfosContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  '@media screen and (min-width: 360px) and (max-width: 767px)': {
    gap: '$12',
  },
})

export const Infos = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    Local: {
      User: {
        marginBottom: '$5',
        justifyContent: 'center',
        alignItems: 'center',
      },
      Navigation: {},
    },
  },
})

export const Titles = styled('span', {
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray100',

  variants: {
    Local: {
      UserName: {
        fontSize: '$xl',
      },
      Navigation: {
        fontSize: '$md',
      },
    },
  },
})

export const Texts = styled('span', {
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',

  variants: {
    Local: {
      Membership: {
        color: '$gray400',
      },
      Navigation: {
        color: '$gray300',
      },
    },
  },
})
