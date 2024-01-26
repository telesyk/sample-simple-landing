'use client'

import { createContext, useContext } from 'react'
import { usePagesContext } from '@/app/context'
import { FeaturesContextProps } from '@/types'

interface AboutContextProps {
  features: FeaturesContextProps
  benefit: FeaturesContextProps
}

export const AboutContext = createContext<AboutContextProps | {}>({})

export function AboutProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { about } = usePagesContext()

  return (
    <AboutContext.Provider value={{ ...about }}>
      {children}
    </AboutContext.Provider>
  )
}

export const useAboutContext = () => useContext(AboutContext)
