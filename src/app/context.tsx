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
      primary: 'Buy Now',
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
