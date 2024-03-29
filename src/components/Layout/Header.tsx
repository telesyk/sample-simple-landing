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
import LoadingHeader from './LoadingHeader'

interface HeaderProps {
  mobileMenuClass: string
  isMenuDisplayed: boolean
  menuPreloadClass: string
  isMounted: boolean
}

const cssMenuOpen = 'opacity-100 rotate-y-0 z-40 max-w-xs right-0'
const cssMenuHide = 'opacity-0 rotate-y-90 -z-10 max-w-80 -right-[140px]'

export default function Header() {
  const [state, setState] = useState<HeaderProps>({
    mobileMenuClass: '',
    isMenuDisplayed: false,
    menuPreloadClass: 'hidden',
    isMounted: false,
  })
  const { navigation, brand }: GlobalProps = useGlobalContext()
  const { themeMode, handleThemeChange } = useThemeContext()
  const isLargeScreen = useLargeScreen()

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      menuPreloadClass: '',
      isMounted: true,
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
    'fixed lg:static top-0 ' +
    'py-16 lg:p-0 w-full lg:w-auto lg:max-w-auto h-screen lg:h-auto ' +
    'flex flex-col lg:flex-row gap-6 lg:gap-2 items-center justify-center ' +
    'bg-slate-100 dark:bg-blue-950 shadow-2xl lg:shadow-none ' +
    'lg:bg-transparent lg:dark:bg-transparent ' +
    'transform-gpu transition-all ' +
    state.mobileMenuClass

  const menuItemClass =
    'relative py-2.5 px-6 text-lg lg:text-base uppercase lg:capitalize ' +
    'transition-colors text-blue-900/60 hover:text-blue-800/90 ' +
    'dark:text-blue-100 hover:dark:text-blue-200 ' +
    'after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 ' +
    'after:w-1/3 after:h-3 after:rounded-full after:shadow-xl after:shadow-sky-700 ' +
    'after:bg-sky-500/5 after:opacity-0 hover:after:opacity-100'

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
            <TbSquareX className="w-8 h-8" />
          </button>
        </li>
        {navigation.map((navItem: NavType) => (
          <li key={navItem.title} className="inline-block">
            <Link
              onClick={handleMenu}
              href={navItem.url}
              className={menuItemClass}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  if (!state.isMounted) return <LoadingHeader />

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur bg-blue-100/15 dark:bg-blue-950/15 shadow flex justify-center">
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
          <div
            className={`w-0 lg:w-auto lg:flex lg:flex-1 lg:justify-end ${state.menuPreloadClass}`}
          >
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
