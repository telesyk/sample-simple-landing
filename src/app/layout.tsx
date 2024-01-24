import type { Metadata } from 'next'
import './globals.css'
import { GlobalProvider, PagesProvider } from './context'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <Header />
          <PagesProvider>{children}</PagesProvider>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  )
}
