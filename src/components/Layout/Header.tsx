'use client'

import { useEffect, useState } from 'react'
import { useGlobalContext } from '@/app/context'
import { NavType, GlobalProps } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { TbBrandAbstract, TbMenu } from 'react-icons/tb'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { Container, PrimaryButton, LoadingMenu } from '@/components'
import { useLargeScreen } from '@/hooks'

const cssMenuOpen = 'opacity-100 translate-x-0'
const cssMenuHide = 'opacity-0 translate-x-full'

export default function Header() {
  const [state, setState] = useState({
    mobileMenuClass: '',
    isMenuDisplayed: false,
    menuPreloadClass: 'hidden',
  })
  const { navigation, brand, header }: GlobalProps = useGlobalContext()
  const isLargeScreen = useLargeScreen()

  useEffect(() => {
    setState(prevState => ({ ...prevState, menuPreloadClass: '' }))
  }, [])

  useEffect(() => {
    if (!isLargeScreen) {
      handleMobileMenuCssChange()
    }
  }, [isLargeScreen])

  const handleMobileMenuCssChange = () => {
    setState(prevState => ({
      ...prevState,
      mobileMenuClass: state.isMenuDisplayed ? cssMenuOpen : cssMenuHide,
    }))
  }

  const handleMenu = () => {
    if (!isLargeScreen) {
      setState(prevState => ({
        ...prevState,
        isMenuDisplayed: !prevState.isMenuDisplayed,
      }))
      handleMobileMenuCssChange()
    }
  }

  const menuListClass =
    'px-8 py-16 lg:p-0 w-screen lg:max-w-auto lg:w-auto h-screen lg:h-auto ' +
    'flex flex-col lg:flex-row gap-6 lg:gap-2 items-center justify-center ' +
    'bg-slate-100/70 dark:bg-blue-900/70 backdrop-blur lg:bg-transparent lg:dark:bg-transparent ' +
    'fixed lg:relative z-50 top-0 right-0 ' +
    'transition ' +
    state.mobileMenuClass

  const renderMenu = () => {
    if (!navigation) return <LoadingMenu />
    return (
      <ul className={menuListClass.trim()}>
        <li className="inline-block lg:hidden">
          <button
            onClick={handleMenu}
            title="Close menu"
            className="text-blue-900/60 hover:text-blue-800/90 dark:text-blue-100 dark:hover:text-blue-200"
          >
            <IoMdCloseCircleOutline className="w-8 h-8" />
          </button>
        </li>
        {navigation.map((navItem: NavType) => (
          <li key={navItem.title} className="inline-block">
            <Link
              onClick={handleMenu}
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
      <Container className="lg:overflow-hidden">
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
          <div className={`w-0 lg:w-auto lg:flex-1 ${state.menuPreloadClass}`}>
            {renderMenu()}
          </div>
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
