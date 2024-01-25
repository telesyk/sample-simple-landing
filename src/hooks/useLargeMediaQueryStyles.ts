/**
 *
 * @param defaultStyles
 * @param largeStyles
 * @returns styles for current media screen (min-width: 1024px) width
 */

import { useEffect, useState } from 'react'

type MediaQueryProps = {
  largeStyles: object
  defaultStyles: object
}

export default function useLargeMediaQueryStyles({
  defaultStyles,
  largeStyles,
}: MediaQueryProps) {
  const [styles, setStyles] = useState({})

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    if (mediaQuery.matches) {
      setStyles({ ...largeStyles })
    } else {
      setStyles({ ...defaultStyles })
    }
  }, [])

  return styles
}
