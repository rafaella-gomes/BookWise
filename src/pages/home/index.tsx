import Image from 'next/image'
import {
  Container,
  LoginBox,
  LoginButton,
  LoginContainer,
  LoginHead,
  Preview,
  PreviewImage,
  PreviewLogo,
} from './styles'

import previewImage from '../../assets/previewImage.png'
import logo from '../../assets/Logo.png'
import googleImage from '../../assets/logos_google-icon.png'
import gitHubImage from '../../assets/akar-icons_github-fill.png'
import rocketImage from '../../assets/RocketLaunch.png'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  async function handleAuthentication(provider: string) {
    try {
      await signIn(provider)
    } catch (error) {
      alert('Não foi possível autenticar')
      console.log(error)
    }
  }

  return (
    <Container>
      <Preview>
        <PreviewImage
          src={previewImage}
          quality={100}
          alt="Imagem de uma mulher lendo Livro "
        />

        <PreviewLogo src={logo} alt="logo" />
      </Preview>

      <LoginContainer>
        <LoginBox>
          <LoginHead>
            <h1>Boas Vindas!</h1>
            <p>Faça seu login ou acesse como visitante </p>
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
            <Link href="/main">
              <Image
                src={rocketImage}
                width={32}
                height={32}
                alt="ícone google "
              />
              Acessar como visitante
            </Link>
          </LoginButton>
        </LoginBox>
      </LoginContainer>
    </Container>
  )
}
