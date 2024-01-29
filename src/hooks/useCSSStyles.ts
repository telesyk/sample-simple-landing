/**
 * @param defaultStyles
 * @param largeStyles
 * @returns styles depending on media query screen (min-width: 1024px)
 */
import { useEffect, useState } from 'react'
import useLargeScreen from './useLargeScreen'

type MediaQueryProps = {
  largeStyles: object
  defaultStyles: object
}

export default function useCSSStyles({
  defaultStyles,
  largeStyles,
}: MediaQueryProps) {
  const [styles, setStyles] = useState({})
  const isLargeScreen = useLargeScreen()

  useEffect(() => {
    !isLargeScreen
      ? setStyles({ ...defaultStyles })
      : setStyles({ ...largeStyles })
  }, [isLargeScreen])

  return styles
}
