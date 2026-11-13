import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CollapseProps {
  isOpen: boolean
  children: ReactNode
  /** Slide duration in seconds. */
  duration?: number
  className?: string
}

/** Height-animated show/hide panel (replacement for jQuery slideDown / slideUp). */
export function Collapse({ isOpen, children, duration = 0.3, className = '' }: CollapseProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="panel"
          className={`overflow-hidden ${className}`}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
