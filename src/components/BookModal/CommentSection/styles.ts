import { styled } from '@/pages/stitches.config'

export const DescriptionText = styled('span', {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray300',
  alignSelf: 'stretch',
  wordWrap: 'break-word',
  maxWidth: '450px',

  a: {
    marginLeft: '$2',
    textDecoration: 'none',
    cursor: 'pointer',
    color: '$purple100',
  },
})
