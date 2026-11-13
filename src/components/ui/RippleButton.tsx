import { useRef, useState, type MouseEvent, type ReactNode } from 'react'

type RipplePhase = 'idle' | 'explode' | 'desplode'

interface RippleButtonProps {
  children: ReactNode
  /** When given the button renders a link, otherwise a plain label (e.g. inside a form button). */
  href?: string
  /** "light" is the inverted style used inside the highlighted pricing card. */
  variant?: 'solid' | 'light'
  className?: string
}

const phaseClass: Record<RipplePhase, string> = {
  idle: '',
  explode: 'animate-explode',
  desplode: 'animate-desplode',
}

/**
 * The site's "join now" button: a dark circle grows from the pointer position on hover
 * and shrinks back towards the pointer on leave.
 */
export function RippleButton({ children, href, variant = 'solid', className = '' }: RippleButtonProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const [phase, setPhase] = useState<RipplePhase>('idle')
  const [origin, setOrigin] = useState<{ left: number; top: number }>({ left: 0, top: 0 })

  const move = (event: MouseEvent, next: RipplePhase): void => {
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect) return
    setOrigin({ left: event.clientX - rect.left, top: event.clientY - rect.top })
    setPhase(next)
  }

  const innerClass = `inline-block rounded-[5px] border-2 border-primary px-[30px] py-[10px] text-center text-[17px] font-semibold capitalize transition-all duration-350 hover:text-white max-sm:px-5 max-sm:py-2 max-sm:text-[15px] ${
    variant === 'light' ? 'rounded-[45px]! bg-panel text-primary' : 'bg-primary text-paper'
  }`

  const content = <span className="relative z-10">{children}</span>

  return (
    <span ref={wrapperRef} className={`relative inline-block overflow-hidden rounded-[40px] ${className}`}>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute h-0 w-0 rounded-full bg-[rgb(99,77,77)] ease-in-out ${phaseClass[phase]}`}
        style={{ left: origin.left, top: origin.top }}
      />
      {href !== undefined ? (
        <a
          href={href}
          className={innerClass}
          onMouseEnter={(event) => move(event, 'explode')}
          onMouseLeave={(event) => move(event, 'desplode')}
        >
          {content}
        </a>
      ) : (
        <span
          className={innerClass}
          onMouseEnter={(event) => move(event, 'explode')}
          onMouseLeave={(event) => move(event, 'desplode')}
        >
          {content}
        </span>
      )}
    </span>
  )
}
