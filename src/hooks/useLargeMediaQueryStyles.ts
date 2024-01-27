/**
 * @param defaultStyles
 * @param largeStyles
 * @returns styles depending on media query screen (min-width: 1024px)
 */
import { useEffect, useState } from 'react'
import useMediaQueryLarge from './useMediaQueryLarge'

type MediaQueryProps = {
  largeStyles: object
  defaultStyles: object
}

export default function useLargeMediaQueryStyles({
  defaultStyles,
  largeStyles,
}: MediaQueryProps) {
  const [styles, setStyles] = useState({})
  const isLargeScreen = useMediaQueryLarge()

  useEffect(() => {
    if (isLargeScreen) {
      setStyles({ ...largeStyles })
    } else {
      setStyles({ ...defaultStyles })
    }
  }, [])

  return styles
}
