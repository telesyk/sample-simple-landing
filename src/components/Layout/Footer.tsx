'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useGlobalContext } from '@/app/context'
import { GlobalProps, NavType, SocialItemType } from '@/types'
import { Container, PrimaryButton, LoadingMenu } from '@/components'

interface StateProps {
  socialList: SocialItemType[] | [] | undefined
  navList: NavType[] | [] | undefined
}

export default function Footer() {
  const [state, setState] = useState<StateProps>({
    socialList: [],
    navList: [],
  })
  const { navigation, brand, socials, footer }: GlobalProps = useGlobalContext()

  useEffect(() => {
    setState({ socialList: socials, navList: navigation })
  }, [navigation, socials])

  const renderSocialMenu = () => {
    if (!state.socialList) return <LoadingMenu />
    return (
      <ul className="flex flex-col lg:flex-row justify-center lg:justify-end gap-2 lg:gap-4">
        {state.socialList.map((socialItem: SocialItemType) => (
          <li key={socialItem.title} className="inline-block">
            <Link
              href={socialItem.url}
              title={socialItem.title}
              className="py-2.5 px-6 lg:pr-0 text-sm transition-colors text-blue-900/60 hover:text-blue-800/90 dark:text-blue-100 hover:dark:text-blue-200 capitalize"
            >
              {socialItem.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  const renderMenu = () => {
    if (!state.navList) return <LoadingMenu />
    return (
      <ul className="flex flex-col lg:flex-row justify-center lg:justify-start gap-2 lg:gap-4">
        {state.navList.map((navItem: NavType) => (
          <li key={navItem.title} className="inline-block">
            <Link
              href={navItem.url}
              className="py-2.5 px-6 lg:pl-0 text-sm transition-colors text-blue-900/60 hover:text-blue-800/90 dark:text-blue-100 hover:dark:text-blue-200 capitalize"
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="flex justify-center bg-blue-300/30">
      <Container className="flex-col py-4 lg:py-6">
        <div className="py-7 lg:py-9 flex flex-col lg:flex-row justify-center gap-8 lg:justify-between">
          <div className="flex-auto flex justify-center lg:order-2">
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              {brand.title}
            </p>
          </div>
          <div className="flex-auto flex justify-center lg:justify-end lg:order-3">
            <PrimaryButton size="sm">
              {footer?.button.primary?.title}
            </PrimaryButton>
          </div>
          <div className="text-center flex-auto lg:order-1 lg:text-start">
            <p className="text-zinc-400 font-medium text-sm">
              {brand.copyright}
            </p>
          </div>
        </div>
        <div className="py-3 lg:py-5 flex border-t border-zinc-300">
          <nav className="flex-auto">{renderMenu()}</nav>
          <nav className="flex-auto">{renderSocialMenu()}</nav>
        </div>
      </Container>
    </div>
  )
}
