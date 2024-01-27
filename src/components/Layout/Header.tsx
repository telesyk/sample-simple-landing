'use client'

import { useGlobalContext } from '@/app/context'
import { NavType, GlobalProps } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { TbBrandAbstract, TbMenu } from 'react-icons/tb'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { Container, PrimaryButton, LoadingMenu } from '@/components'
import { useEffect, useState } from 'react'
import useMediaQueryLarge from '@/hooks/useMediaQueryLarge'

export default function Header() {
  const [state, setState] = useState({
    mobileMenuClass: '',
    isMenuDisplayed: false,
  })
  const { navigation, brand, header }: GlobalProps = useGlobalContext()

  const isLargeScreen = useMediaQueryLarge()

  useEffect(() => {
    if (!isLargeScreen) {
      state.isMenuDisplayed
        ? setState(prevState => ({
            ...prevState,
            mobileMenuClass:
              'opacity-100 translate-x-0 bg-slate-100/95 dark:bg-blue-950/95',
          }))
        : setState(prevState => ({
            ...prevState,
            mobileMenuClass:
              'opacity-0 translate-x-full bg-slate-100/95 dark:bg-blue-950/95',
          }))
    }
  }, [state.isMenuDisplayed])

  const handleMenu = () =>
    setState(prevState => ({
      ...prevState,
      isMenuDisplayed: !prevState.isMenuDisplayed,
    }))

  const renderMenu = () => {
    if (!navigation) return <LoadingMenu />
    return (
      <ul
        className={`px-8 py-16 lg:p-0 transition fixed lg:relative z-50 top-0 left-0 w-screen lg:w-auto h-screen lg:h-auto flex flex-col gap-6 lg:gap-2 items-center justify-center lg:flex-row ${state.mobileMenuClass}`}
      >
        <li className="inline-block lg:hidden">
          <button
            onClick={handleMenu}
            className="text-blue-900/60 hover:text-blue-800/90 dark:text-blue-100 dark:hover:text-blue-200"
          >
            <IoMdCloseCircleOutline className="w-8 h-8" />
          </button>
        </li>
        {navigation.map((navItem: NavType) => (
          <li key={navItem.title} className="inline-block">
            <Link
              href={navItem.url}
              className="py-2.5 px-6 text-lg lg:text-base uppercase lg:capitalize transition-colors text-blue-900/60 hover:text-blue-800/90 dark:text-blue-100 hover:dark:text-blue-200"
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <header className="flex justify-center bg-transparent">
      <Container>
        <nav className="w-full inline-flex py-2 gap-6 justify-between items-center">
          <div className="flex-1 inline-flex gap-1 items-center">
            {!brand.logo ? (
              <TbBrandAbstract className="w-10 h-10 stroke-blue-900 dark:stroke-blue-100" />
            ) : (
              <Image
                src={brand.logo}
                alt={brand.title}
                width={64}
                height={64}
              />
            )}
            <h1 className="hidden sm:inline-block font-bold text-lg text-blue-800 dark:text-blue-100">
              {brand.title}
            </h1>
          </div>
          <div className="w-0 lg:w-auto lg:flex-1 lg:block">{renderMenu()}</div>
          <div className="inline-flex justify-end">
            <PrimaryButton size="sm">
              {header?.button.primary?.title}
            </PrimaryButton>
          </div>
          <div className="inline-flex justify-end lg:hidden">
            <button
              onClick={handleMenu}
              className="rounded border-2 border-blue-900 hover:border-blue-800 dark:border-blue-100 hover:dark:border-blue-200 transition"
            >
              <TbMenu className="w-8 h-8 stroke-blue-900 dark: dark:stroke-blue-100" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
