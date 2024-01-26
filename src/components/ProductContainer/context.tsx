'use client'

import { createContext, useContext } from 'react'
import { usePagesContext } from '@/app/context'
import { FeaturesContextProps } from '@/types'

interface ProductContextProps {
  features: FeaturesContextProps
  pricing: FeaturesContextProps
}

export const ProductContext = createContext<ProductContextProps | {}>({})

export function ProductProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { product } = usePagesContext()

  return (
    <ProductContext.Provider value={{ ...product }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)
