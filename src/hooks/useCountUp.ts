import { animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { swing } from '../lib/motion'

/** Counts from 0 to `target` over 2.2s (jQuery "swing" easing) once `start` becomes true. */
export function useCountUp(target: number, start: boolean, durationSeconds = 2.2): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    const controls = animate(0, target, {
      duration: durationSeconds,
      ease: swing,
      onUpdate: (latest) => setValue(Math.floor(latest)),
      onComplete: () => setValue(target),
    })
    return () => controls.stop()
  }, [start, target, durationSeconds])

  return value
}
