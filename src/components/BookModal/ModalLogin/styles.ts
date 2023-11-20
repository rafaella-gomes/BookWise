import { styled } from '@/pages/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  minHeight: '100vh',
  margin: 0,
})

export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$10 $10',
  gap: '$10',
  background: '$gray700',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
  position: 'relative',
  borderRadius: '$md',
  margin: '$2',
})

export const LoginHead = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '$10',

  p: {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray200',
    lineHeight: '$short',
  },
})

export const Close = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray400',
  position: 'absolute',
  top: '0.7rem',
  right: '0.7rem',
  flexShrink: 0,
  cursor: 'pointer',
})
