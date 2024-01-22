'use client'

import { createContext, useContext } from 'react'
import { useAppContext } from '@/app/context'
import { HeroContextType } from '@/types'

interface HomeContextProps {
  hero: HeroContextType
  about: object
  contact: object
}

export const HomeContext = createContext<HomeContextProps | {}>({})

export function HomeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const {
    pages: { home },
  } = useAppContext()

  return (
    <HomeContext.Provider value={{ ...home }}>{children}</HomeContext.Provider>
  )
}

export const useHomeContext = () => useContext(HomeContext)
