import type { MotionProps } from 'framer-motion'

export type RevealDirection = 'up' | 'down' | 'left' | 'right'

const offsets: Record<RevealDirection, { x: string | number; y: string | number }> = {
  up: { x: 0, y: '100%' },
  down: { x: 0, y: '-100%' },
  left: { x: '-100%', y: 0 },
  right: { x: '100%', y: 0 },
}

/**
 * Scroll-triggered entrance equivalent to WOW.js + animate.css fadeInUp/Down/Left/Right:
 * fades in while travelling 100% of the element's own size, over one second, once.
 *
 * The horizontal root margin matters: an element translated sideways by 100% sits fully
 * outside the viewport, so it would never intersect and never animate without it.
 */
export function reveal(direction: RevealDirection): MotionProps {
  const { x, y } = offsets[direction]
  return {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: '0px 100% 0px 100%' },
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  }
}

/** jQuery's default "swing" easing, used by the original scroll, counter and progress animations. */
export const swing = (progress: number): number => 0.5 - Math.cos(progress * Math.PI) / 2
