import { LoginBox, LoginButton } from '@/pages/home/styles'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import googleImage from '../../../assets/logos_google-icon.png'
import gitHubImage from '../../../assets/akar-icons_github-fill.png'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Overlay } from '../styles'
import { Content, LoginContainer, Close, LoginHead } from './styles'

export default function ModalLogin() {
  async function handleAuthentication(provider: string) {
    try {
      await signIn(provider)
    } catch (error) {
      alert('Não foi possível autenticar')
      console.log(error)
    }
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <LoginContainer>
          <LoginBox>
            <LoginHead>
              <p>Faça login para deixar sua avaliação </p>
            </LoginHead>
            <LoginButton>
              <button onClick={() => handleAuthentication('google')}>
                {' '}
                <Image
                  src={googleImage}
                  width={32}
                  height={32}
                  alt="ícone google "
                />
                Entrar com Google
              </button>
              <button onClick={() => handleAuthentication('github')}>
                <Image
                  src={gitHubImage}
                  width={32}
                  height={32}
                  alt="ícone google "
                />
                Entrar com Github
              </button>
            </LoginButton>
          </LoginBox>
          <Close>
            <X width={24} height={24} />
          </Close>
        </LoginContainer>
      </Content>
    </Dialog.Portal>
  )
}
