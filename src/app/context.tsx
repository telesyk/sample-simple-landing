'use client'

import { GlobalProps, ThemeModeType } from '@/types'
import { createContext, useContext, useState } from 'react'
import { useThemeMode } from '@/hooks'
import { darkModeSelector } from '@/constants'

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
        title: 'product',
        url: '/product',
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
        button: {
          primary: {
            title: 'Purchase Now',
          },
        },
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
        title: 'Empowering Brands at Warp Speed',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      benefit2: {
        title: 'Illuminating Your Global Presence with Dynamic',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      benefit3: {
        title: 'A Symphony of Creativity and Precision',
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
    about: {
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
      benefit: {
        title: 'A Symphony of Creativity and Precision',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        button: {
          primary: {
            title: 'Purchase Now',
            link: null,
          },
        },
      },
    },
    product: {
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
      pricing: {
        title: 'A Price To Suit Everyone',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
      },
    },
  },
}

const isDarkMode =
  typeof window !== 'undefined' && window.matchMedia(darkModeSelector).matches

export const GlobalContext = createContext<GlobalProps>({ ...data.global })
export const PagesContext = createContext({ ...data.pages })
export const ThemeContext = createContext<any>({})

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

export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [themeMode, setThemeMode] = useState<ThemeModeType>(
    isDarkMode ? 'dark' : 'light'
  )
  const userTheme = useThemeMode(themeMode)

  const handleThemeChange = () => {
    setThemeMode((prev: string | boolean) =>
      prev === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <ThemeContext.Provider value={{ themeMode: userTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
export const usePagesContext = () => useContext(PagesContext)
export const useThemeContext = () => useContext(ThemeContext)
