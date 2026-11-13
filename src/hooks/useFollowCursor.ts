import { useEffect, useRef, type RefObject } from 'react'

const clamp = (value: number, limit: number): number => Math.min(limit, Math.max(-limit, value))

/**
 * Tilts an element in 3D so it follows the cursor while the pointer moves over it
 * (replacement for followCursor.js). `scale` is the maximum rotation in degrees.
 * Like the original, the last tilt is kept when the pointer leaves.
 */
export function useFollowCursor<T extends HTMLElement>(scale = 10): RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const onMouseMove = (event: MouseEvent): void => {
      // Measure the untransformed box so the tilt doesn't feed back into its own measurement.
      const currentTransform = element.style.transform
      element.style.transform = 'none'
      const box = element.getBoundingClientRect()
      element.style.transform = currentTransform
      const xPos = (event.clientX - box.left) / box.width
      const yPos = (event.clientY - box.top) / box.height
      const rotateY = clamp(-scale + xPos * scale * 2, scale)
      const rotateX = clamp(scale - yPos * scale * 2, scale)
      element.style.transform = `perspective(${box.height}px) rotateY(${rotateY.toFixed(3)}deg) rotateX(${rotateX.toFixed(3)}deg)`
    }

    element.addEventListener('mousemove', onMouseMove)
    return () => element.removeEventListener('mousemove', onMouseMove)
  }, [scale])

  return ref
}
