'use client'

import { useGlobalContext } from '@/app/context'
import { NavType, GlobalProps } from '@/types'
import Container from './Container'
import Link from 'next/link'
import PrimaryButton from '../Buttons/PrimaryButton'

export default function Header() {
  const { navigation, brand, header }: GlobalProps = useGlobalContext()

  const renderMenu = () => {
    if (navigation.length < 1) return
    return navigation.map((navItem: NavType) => (
      <Link key={navItem.title} href={navItem.url}>
        {navItem.title}
      </Link>
    ))
  }

  return (
    <header className="flex justify-center">
      <Container className="py-4 gap-6 justify-between items-center">
        <div className="flex-auto">
          {!brand.logo && <h1 className="font-bold text-lg">{brand.title}</h1>}
        </div>
        <nav className="flex-1 flex justify-center gap-4">{renderMenu()}</nav>
        <div className="flex-auto flex justify-end">
          <PrimaryButton size="sm">
            {header?.button.primary?.title}
          </PrimaryButton>
        </div>
      </Container>
    </header>
  )
}
