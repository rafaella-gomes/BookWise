import { HamburguerMenu, Overlay } from './styles'
import { List } from 'phosphor-react'

import { Session } from 'next-auth'
import { useState } from 'react'
import { SideBarContent } from './components/SideBarContent'

export interface SidebarProps {
  session: Session | null
}

export function SideBar({ session }: SidebarProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const handleOverlayClick = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      {isSidebarOpen && <Overlay onClick={handleOverlayClick} />}
      <HamburguerMenu>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <List size={30} />
        </button>
      </HamburguerMenu>
      <SideBarContent session={session} isOpen={isSidebarOpen} />
    </>
  )
}
