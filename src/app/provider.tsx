'use client'

import { useState, createContext } from 'react'

const AppContext = createContext({})

export function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [state, setState] = useState({
    global: {
      navigation: {
        home: '/',
        about: '/about',
        contact: '/contact',
      },
      brand: {
        title: 'Demo Landing',
        logo: '',
        copyright: '©2023 Yourcompany',
      },
      socials: {
        facebook: '#',
        linkedin: '#',
        twitter: '#',
        youtube: '#',
        instagram: '#',
      },
      buttons: {
        primary1: 'Buy Now',
        primary2: 'Purchase Now',
        primary3: 'Purchase UI Kit',
        secondary: 'Learn More',
      },
    },
    pages: {
      home: {
        hero: {
          title: 'Introduce Your Product Quickly & Effectively',
          content:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
      },
      about: {},
      contact: {},
    },
  })

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}
