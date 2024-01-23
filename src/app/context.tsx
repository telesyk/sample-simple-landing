'use client'

import { createContext, useContext } from 'react'

const data = {
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
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
      youtube: '#',
      instagram: '#',
    },
    button: {
      primary1: 'Buy Now',
      primary2: 'Purchase Now',
      primary3: 'Purchase UI Kit',
      secondary: 'Learn More',
    },
    pricing: [
      {
        title: 'UI Design Kit',
        description: 'See, One price. Simple.',
        value: '40',
      },
    ],
  },
  pages: {
    home: {
      hero: {
        title: 'Introduce Your Product Quickly & Effectively',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        button: {
          primary: {
            title: 'Purchase UI Kit',
            link: null,
          },
          secondary: {
            title: 'Learn More',
            link: '/about',
          },
        },
      },
      features: {
        title: '',
        content: '',
        items: [],
      },
      benefit1: {
        title: '',
        content: '',
      },
      benefit2: {
        title: '',
        content: '',
      },
      benefit3: {
        title: '',
        content: '',
        button: {
          primary: {
            title: 'Purchase Now',
            link: null,
          },
        },
      },
      pricing: {
        title: '',
        content: '',
      },
    },
    about: {},
    contact: {},
  },
}

export const AppContext = createContext({ ...data })

export function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppContext.Provider value={{ ...data }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
