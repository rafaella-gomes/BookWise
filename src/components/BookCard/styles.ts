import { styled } from '@/pages/stitches.config'

export const ReadBook = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  maxWidth: '3.3rem',
  padding: '$1 $3',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  background: '$green300',
  color: '$green100',
  fontWeight: '$bold',
  lineHeight: '$shorter',
  fontSize: '$xs',
  borderRadius: '0px 0px 0px 4px',
  marginBottom: '$4',
})

export const CardContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  padding: '$4 $5',
  borderRadius: 8,
  background: '$gray700',
  marginBottom: '$3',
  marginRight: '$3',
  alignItems: 'center',
  border: '2px solid transparent',

  '&:hover': {
    border: '2px solid $gray600',
  },

  variants: {
    Page: {
      Explore: {
        minHeight: 168,
        overflow: 'hidden',

        '@media screen and (min-width: 360px) and (max-width: 767px)': {
          maxWidth: 242,
          maxHeight: 168,
          marginRight: '$2',
        },
      },
      Default: {},
    },
  },
})

export const Container = styled('div', {
  display: 'flex',
  alignSelf: 'stretch',
  marginTop: '$2',
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2 0',
  alignItems: 'flex-start',
  flex: '1 0 0 ',
  justifyContent: 'space-between',
})

export const Rating = styled('div', {
  color: '$purple100',

  variants: {
    Pathname: {
      Profile: {},
      Main: {},
    },
  },
})
