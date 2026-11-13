import { AnimatePresence, animate, motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa6'
import { useScrollPast } from '../../hooks/useScrollPast'
import { swing } from '../../lib/motion'

const ring = 'pointer-events-none absolute top-1/2 left-1/2 h-8 w-8 rounded-full bg-primary'

/** Floating "back to top" button that appears after 500px of scrolling. */
export function ScrollToTop() {
  const isVisible = useScrollPast(500)

  const scrollToTop = (): void => {
    animate(window.scrollY, 0, {
      duration: 1.2,
      ease: swing,
      onUpdate: (latest) => window.scrollTo(0, latest),
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-[25px] bottom-[22px] z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="relative inline-flex h-8 w-8 animate-float cursor-pointer items-center justify-center rounded-full bg-primary text-[14px] text-white"
          >
            <span aria-hidden="true" className={`${ring} animate-pulse-ring`} />
            <span aria-hidden="true" className={`${ring} animate-pulse-ring-slow`} />
            <FaArrowUp className="relative" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
