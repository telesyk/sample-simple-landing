'use client'

import { GlobalProps } from '@/types'
import { createContext, useContext } from 'react'

const data = {
  global: {
    navigation: [
      {
        title: 'home',
        url: '/',
      },
      {
        title: 'about',
        url: '/about',
      },
      {
        title: 'contact',
        url: '/contact',
      },
    ],
    brand: {
      title: 'Demo Landing',
      logo: '',
      copyright: '©2023 Yourcompany',
    },
    socials: [
      {
        title: 'facebook',
        url: '#',
      },
      {
        title: 'linkedin',
        url: '#',
      },
      {
        title: 'twitter',
        url: '#',
      },
      {
        title: 'youtube',
        url: '#',
      },
      {
        title: 'instagram',
        url: '#',
      },
    ],
    header: {
      button: {
        primary: {
          title: 'Buy Now',
        },
      },
    },
    footer: {
      button: {
        primary: {
          title: 'Purchase Now',
        },
      },
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
        title: 'Light, Fast & Powerful',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        items: [
          {
            icon: '',
            title: 'Creative Design Solutions',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            icon: '',
            title: 'User-Centric Interface',
            description:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            icon: '',
            title: 'Responsive Web Development',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            icon: '',
            title: 'Brand Identity Crafting',
            description:
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ],
      },
      benefit1: {
        title: 'Light, Fast & Powerful',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      benefit2: {
        title: 'Light, Fast & Powerful',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      benefit3: {
        title: 'Light, Fast & Powerful',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        button: {
          primary: {
            title: 'Purchase Now',
            link: null,
          },
        },
      },
      pricing: {
        title: 'A Price To Suit Everyone',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
      },
    },
    about: {},
    contact: {},
  },
}

export const GlobalContext = createContext<GlobalProps>({ ...data.global })
export const PagesContext = createContext({ ...data.pages })

export function PagesProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PagesContext.Provider value={{ ...data.pages }}>
      {children}
    </PagesContext.Provider>
  )
}

export function GlobalProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <GlobalContext.Provider value={{ ...data.global }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
export const usePagesContext = () => useContext(PagesContext)
