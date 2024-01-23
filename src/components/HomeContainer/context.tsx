'use client'

import { createContext, useContext } from 'react'
import { useAppContext } from '@/app/context'
import { HeroContextProps, FeaturesContextProps } from '@/types'

interface HomeContextProps {
  hero: HeroContextProps
  features: FeaturesContextProps
  benefit1: object
  benefit2: object
  benefit3: object
  pricing: object
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
