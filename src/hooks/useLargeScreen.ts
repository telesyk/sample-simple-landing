/**
 * @returns FALSE or TRUE for screen width (min-width: 1024px)
 */
import { useState, useEffect } from 'react'
import { largeScreenMediaQuery } from '@/constants'

export default function useLargeScreen() {
  const [isLarge, setIsLarge] = useState(
    typeof window !== 'undefined' &&
      window.matchMedia(`(${largeScreenMediaQuery})`).matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(${largeScreenMediaQuery})`)
    const handleScreenResize = () => setIsLarge(mediaQuery.matches)

    window.addEventListener('resize', handleScreenResize)
    return () => window.removeEventListener('resize', handleScreenResize)
  }, [isLarge])

  return isLarge
}
