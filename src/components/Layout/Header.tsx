'use client'

import { useGlobalContext } from '@/app/context'
import { NavType, GlobalProps } from '@/types'
import Link from 'next/link'
import { TbBrandAbstract } from 'react-icons/tb'
import Container from './Container'
import PrimaryButton from '../Buttons/PrimaryButton'
import Image from 'next/image'

export default function Header() {
  const { navigation, brand, header }: GlobalProps = useGlobalContext()

  const renderMenu = () => {
    if (navigation.length < 1) return
    return navigation.map((navItem: NavType) => (
      <Link
        key={navItem.title}
        href={navItem.url}
        className="py-2.5 px-6 transition-colors text-blue-900/60 hover:text-blue-800/90 capitalize"
      >
        {navItem.title}
      </Link>
    ))
  }

  return (
    <header className="flex justify-center">
      <Container className="py-2 gap-6 justify-between items-center">
        <div className="flex-auto flex gap-1 items-center">
          {!brand.logo ? (
            <TbBrandAbstract className="w-10 h-10 stroke-blue-900" />
          ) : (
            <Image src={brand.logo} alt={brand.title} width={64} height={64} />
          )}
          <h1 className="font-bold text-lg text-blue-800">{brand.title}</h1>
        </div>
        <nav className="flex-1 flex justify-center gap-2">{renderMenu()}</nav>
        <div className="flex-auto flex justify-end">
          <PrimaryButton size="sm">
            {header?.button.primary?.title}
          </PrimaryButton>
        </div>
      </Container>
    </header>
  )
}
