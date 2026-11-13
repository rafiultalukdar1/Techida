interface HamburgerButtonProps {
  isOpen: boolean
  onToggle: () => void
}

const bar = 'absolute block h-[3px] rounded-[9px] bg-primary transition-all duration-250 ease-in-out'
const full = 'left-0 w-full'
const collapsed = 'left-1/2 w-0 top-[18px]'

/** Animated three-bar menu button that turns into a cross while the sidebar is open. */
export function HamburgerButton({ isOpen, onToggle }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="relative hidden h-[22px] w-8 cursor-pointer max-lg:block"
    >
      <span className={`${bar} ${isOpen ? collapsed : `${full} top-0`}`} />
      <span className={`${bar} ${full} top-2 ${isOpen ? 'rotate-45' : ''}`} />
      <span className={`${bar} ${full} top-2 ${isOpen ? '-rotate-45' : ''}`} />
      <span className={`${bar} ${isOpen ? collapsed : `${full} top-4`}`} />
    </button>
  )
}
