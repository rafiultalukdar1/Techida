import { useEffect, useState } from 'react'

/** True once the window has been scrolled further than `threshold` pixels. */
export function useScrollPast(threshold: number): boolean {
  const [past, setPast] = useState<boolean>(() => window.scrollY > threshold)

  useEffect(() => {
    const onScroll = (): void => setPast(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return past
}
