'use client'

import { useAppContext } from '@/app/context'
import { GlobalProps } from '@/types'
import Container from './Container'
import Link from 'next/link'
import PrimaryButton from '../Buttons/PrimaryButton'

export default function Header() {
  const {
    global: { navigation, brand, header },
  } = useAppContext()

  const navList = Object.keys(navigation)

  return (
    <header className="flex justify-center">
      <Container className="py-4 gap-6 justify-between items-center">
        <div className="flex-auto">
          {!brand.logo && <h1 className="font-bold text-lg">{brand.title}</h1>}
        </div>
        <nav className="flex-1 flex justify-center gap-4">
          {navList.map(navItem => (
            <Link key={navItem} href={navigation[navItem]}>
              {navItem}
            </Link>
          ))}
        </nav>
        <div className="flex-auto flex justify-end">
          <PrimaryButton size="sm">{header.button.primary}</PrimaryButton>
        </div>
      </Container>
    </header>
  )
}
