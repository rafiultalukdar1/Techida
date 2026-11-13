import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Centered page container with the same max-widths and gutter as the Bootstrap 5 container. */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] ${className}`}
    >
      {children}
    </div>
  )
}
