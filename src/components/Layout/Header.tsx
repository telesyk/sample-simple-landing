'use client'

import { useEffect, useState } from 'react'
import { useGlobalContext, useThemeContext } from '@/app/context'
import { NavType, GlobalProps } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import {
  TbBrandAbstract,
  TbMenu,
  TbSquareX,
  TbMoonStars,
  TbSun,
} from 'react-icons/tb'
import { Container, LoadingMenu } from '@/components'
import { useLargeScreen } from '@/hooks'

interface HeaderProps {
  mobileMenuClass: string
  isMenuDisplayed: boolean
  menuPreloadClass: string
}

const cssMenuOpen = 'opacity-100 rotate-y-0 z-50 w-screen'
const cssMenuHide = 'opacity-0 rotate-y-90 -z-10 w-80'

export default function Header() {
  const [state, setState] = useState<HeaderProps>({
    mobileMenuClass: '',
    isMenuDisplayed: false,
    menuPreloadClass: 'hidden',
  })
  const { navigation, brand }: GlobalProps = useGlobalContext()
  const { themeMode, handleThemeChange } = useThemeContext()
  const isLargeScreen = useLargeScreen()

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      menuPreloadClass: '',
    }))
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
    'fixed lg:static top-0 right-0 ' +
    'py-16 lg:p-0 lg:w-auto h-screen lg:h-auto ' +
    'flex flex-col lg:flex-row gap-6 lg:gap-2 items-center justify-center ' +
    'bg-slate-100/95 dark:bg-blue-950/95 backdrop-blur lg:backdrop-blur-none ' +
    'lg:bg-transparent lg:dark:bg-transparent ' +
    'transform-gpu transition-all ' +
    state.mobileMenuClass

  const renderMenu = () => {
    if (!navigation) return <LoadingMenu />
    return (
      <ul className={menuListClass.trim()}>
        <li className="inline-block lg:hidden shadow">
          <button
            onClick={handleMenu}
            title="Close menu"
            className="text-blue-900/60 hover:text-blue-800/90 dark:text-blue-100 dark:hover:text-blue-200"
          >
            <TbSquareX className="w-8 h-8" />
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
    <header className="fixed w-full top-0 z-10 backdrop-blur bg-blue-100/15 dark:bg-blue-950/15 shadow flex justify-center">
      <Container className="flex-1 lg:overflow-hidden">
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
          <div className="basis-[40px] inline-flex justify-end items-center">
            <button
              onClick={handleThemeChange}
              className="inline-flex justify-end items-center"
            >
              {themeMode === 'light' ? (
                <TbMoonStars className="w-8 h-8 stroke-blue-900 dark:stroke-blue-100" />
              ) : (
                <TbSun className="w-8 h-8 stroke-blue-900 dark:stroke-blue-100" />
              )}
            </button>
          </div>
          <div className="basis-[40px] inline-flex justify-end lg:hidden">
            <button
              onClick={handleMenu}
              className="rounded border-2 border-blue-900 hover:border-blue-800 dark:border-blue-100 hover:dark:border-blue-200 transition relative z-10"
            >
              <TbMenu className="w-8 h-8 stroke-blue-900 dark:stroke-blue-100" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
