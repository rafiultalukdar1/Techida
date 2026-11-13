import { useCallback, useEffect, useState } from 'react'

interface ThemeState {
  isDark: boolean
  toggleTheme: () => void
}

/** Light/dark switch. Dark mode swaps the colour variables through a `dark` class on <html>. */
export function useTheme(): ThemeState {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = useCallback(() => setIsDark((current) => !current), [])

  return { isDark, toggleTheme }
}
