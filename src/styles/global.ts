import { globalCss } from '../pages/stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$black',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body,input,textarea,button': {
    fontFamily: '$default',
  },
})
