import {
  Button,
  Indicator,
  SideBarContainer,
  SideBarImage,
  SideBarImageContainer,
  Item,
  SideBarItems,
  ItemLink,
  SideBarListOfItems,
  ButtonImage,
} from './styles'
import logo from '../../../../assets/Logo.png'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Session } from 'next-auth'
import Image from 'next/image'

export interface SidebarContentProps {
  session: Session | null
  isOpen: boolean
}

export function SideBarContent({ session, isOpen }: SidebarContentProps) {
  const router = useRouter()
  const isSignedIn = session !== null

  const firstName = session?.user.name.split(' ')[0] || ''

  async function handleLogOut() {
    const data = await signOut({ redirect: false, callbackUrl: '/' })
    router.push(data.url)
  }

  async function handleLogIn() {
    router.push('/')
  }

  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarItems>
        <SideBarImageContainer>
          <SideBarImage src={logo} alt="logo da BookWise" />
        </SideBarImageContainer>

        <SideBarListOfItems>
          <Item>
            {router.pathname === '/main' ? <Indicator /> : null}
            <ItemLink isActive={router.pathname === '/main'} href={`/main`}>
              <ChartLineUp width={24} height={24} />
              Início
            </ItemLink>
          </Item>
          <Item>
            {router.pathname === '/explore' ? <Indicator /> : null}
            <ItemLink
              isActive={router.pathname === '/explore'}
              href={`/explore`}
            >
              <Binoculars width={24} height={24} />
              Explorar
            </ItemLink>
          </Item>

          {isSignedIn ? (
            <>
              <Item>
                {router.pathname === '/profile' ? <Indicator /> : null}
                <ItemLink
                  isActive={router.pathname === '/profile'}
                  href={`/profile`}
                >
                  <User width={24} height={24} />
                  Perfil
                </ItemLink>
              </Item>
              <Button onClick={() => handleLogOut()} LogStatus={'LogOut'}>
                <ButtonImage>
                  <Image
                    src={session?.user.avatar_url}
                    alt="Avatar"
                    width={32}
                    height={32}
                  />
                </ButtonImage>

                <span>{firstName}</span>
                <SignOut size={20} />
              </Button>
            </>
          ) : (
            <Button onClick={() => handleLogIn()} LogStatus={'LogIn'}>
              Fazer Login
              <SignIn size={20} />
            </Button>
          )}
        </SideBarListOfItems>
      </SideBarItems>
    </SideBarContainer>
  )
}
