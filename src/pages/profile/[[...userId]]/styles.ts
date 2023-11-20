import { styled } from '../../stitches.config'

export const ProfileContainer = styled('div', {
  display: 'flex',
  flex: '1',

  '@media screen and (min-width: 360px) and (max-width: 1200px)': {
    marginTop: '$8',
  },
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginRight: '$8',
  flex: '1.5',
})

export const ProfileHeader = styled('div', {
  display: 'flex',
  gap: '$3',
  marginBottom: '$10',

  span: {
    fontWeight: '$bold',
    fontSize: '$2xl',
    lineHeight: '$short',
    color: '$gray100',
  },

  variants: {
    Page: {
      UserIdProfile: {
        flexDirection: 'column',
        padding: '$1 $2',
        maxWidth: 'fit-content',
        borderRadius: 4,
        '&:hover': {
          background: '$gray700',
          transition: 'background 0.3s ease-in-out',
        },
        a: {
          textDecoration: 'none',
          cursor: 'pointer',
          display: 'flex',
          width: '100%',
          fontWeight: '$bold',
          fontSize: '$md',
          lineHeight: '$base',
          alignItems: 'center',
          color: '$gray200',
          marginRight: '$2',
        },
      },
      Default: {
        alignItems: 'center',
        svg: {
          color: '$green100',
        },
      },
    },
  },
})

export const InputDiv = styled('div', {
  svg: {
    marginLeft: '-2rem',
    color: '$gray500',
  },
})

export const Input = styled('input', {
  padding: '$4 $5',
  minWidth: '100%',
  gap: '$2',
  flexShrink: '0',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  background: '$gray800',
  color: '$gray400',
  textTransform: 'capitalize',
  marginBottom: '$8',

  '&:focus': {
    outline: 'none',
    border: '1px solid $green200',
    color: '$green100',

    '+ svg': {
      color: '$green200',
    },
  },
})

export const FeedsContainerProfile = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})

export const FeedBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const FeedBoxTitle = styled('span', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray300',
})
