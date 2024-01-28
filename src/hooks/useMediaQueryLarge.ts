/**
 *
 * @returns FALSE or TRUE for media query screen (min-width: 1024px)
 */
import { useState, useEffect } from 'react'
import { largeScreenMediaQuery } from '@/constants'

export default function useMediaQueryLarge() {
  const [state, setState] = useState<null | boolean>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(${largeScreenMediaQuery})`)
    mediaQuery.matches ? setState(true) : setState(false)
  }, [])

  return state
}
