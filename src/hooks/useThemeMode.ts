import { useState, useEffect } from 'react'
import { ThemeModeType } from '@/types'

export default function useThemeMode(mode: ThemeModeType) {
  const [themeMode, setThemeMode] = useState<ThemeModeType>()

  useEffect(() => {
    const rootNode = window.document.firstElementChild
    mode === 'dark'
      ? rootNode?.classList.add('dark')
      : rootNode?.classList.remove('dark')
    setThemeMode(mode === 'dark' ? 'dark' : 'light')
  }, [mode])

  return themeMode
}
