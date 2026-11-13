import { FaMoon, FaSun } from 'react-icons/fa6'

interface DarkModeButtonProps {
  isDark: boolean
  onToggle: () => void
}

export function DarkModeButton({ isDark, onToggle }: DarkModeButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="ml-3 inline-flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border border-primary text-[18px] text-ink!"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  )
}
