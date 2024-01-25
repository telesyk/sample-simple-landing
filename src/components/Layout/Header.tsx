'use client'

import { useGlobalContext } from '@/app/context'
import { NavType, GlobalProps } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { TbBrandAbstract, TbMenu } from 'react-icons/tb'
import { Container, PrimaryButton, LoadingMenu } from '@/components'

export default function Header() {
  const { navigation, brand, header }: GlobalProps = useGlobalContext()

  const renderMenu = () => {
    if (!navigation) return <LoadingMenu />
    return (
      <ul className="flex flex-col lg:flex-row justify-center gap-2">
        {navigation.map((navItem: NavType) => (
          <li key={navItem.title} className="inline-block">
            <Link
              href={navItem.url}
              className="py-2.5 px-6 transition-colors text-blue-900/60 hover:text-blue-800/90 capitalize"
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <header className="flex justify-center">
      <Container>
        <nav className="w-full inline-flex py-2 gap-6 justify-between items-center">
          <div className="flex-1 inline-flex gap-1 items-center">
            {!brand.logo ? (
              <TbBrandAbstract className="w-10 h-10 stroke-blue-900" />
            ) : (
              <Image
                src={brand.logo}
                alt={brand.title}
                width={64}
                height={64}
              />
            )}
            <h1 className="hidden sm:inline-block font-bold text-lg text-blue-800">
              {brand.title}
            </h1>
          </div>
          <div className="flex-1 hidden lg:block">{renderMenu()}</div>
          <div className="inline-flex justify-end">
            <PrimaryButton size="sm">
              {header?.button.primary?.title}
            </PrimaryButton>
          </div>
          <div className="inline-flex justify-end lg:hidden">
            <button className="rounded border-2 border-blue-900 hover:border-blue-800 transition">
              <TbMenu className="w-8 h-8 stroke-blue-900" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
