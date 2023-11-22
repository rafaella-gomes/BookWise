import { styled } from '../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@media screen and (min-width: 360px) and (max-width: 1200px)': {
    marginTop: '$8',
  },
})

export const PageHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '$2',
})
export const Input = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '$6',

  svg: {
    marginLeft: '-2rem',
    color: '$gray500',
  },

  '@media screen and (min-width: 360px) and (max-width: 768px)': {
    marginLeft: '$5',
  },
})

export const InputHeader = styled('input', {
  padding: '$4 $5',
  minWidth: '22rem',
  gap: '$2',
  flexShrink: '0',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  background: '$gray800',
  color: '$gray400',
  textTransform: 'capitalize',

  '&:focus': {
    outline: 'none',
    border: '1px solid $green200',
    color: '$green100',

    '+ svg': {
      color: '$green200',
    },
  },
})

export const Categories = styled('div', {
  display: 'flex',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$base',
  gap: '$2',  
  alignItems: 'center',
  marginBottom: '$5',
  minWidth: 'max-content',
})

export const Tag = styled('button', {
  all: 'unset',
  padding: '$1 $4',
  background: 'none',
  borderRadius: '$full',
  border: '1px solid $purple100',
  color: '$purple100',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
    background: '$purple200',
    border: '1px solid $purple100',
  },

  variants: {
    active: {
      true: {
        background: '$purple200',
        color: '$gray100',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

export const RowofBooks = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gap: '$3',
  '@media screen and (min-width: 360px) and (max-width: 1199px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

export const PlainButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  width: '100%',
  height: '100%',
})
