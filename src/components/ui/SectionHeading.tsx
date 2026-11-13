import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  /** "compact" is the slightly smaller heading used beside images (deal / experience). */
  variant?: 'default' | 'compact'
  className?: string
}

const sizes: Record<NonNullable<SectionHeadingProps['variant']>, string> = {
  default: 'text-[52px] max-2xl:text-[50px] max-xl:text-[46px] max-lg:text-[42px]! max-md:text-[36px]! max-sm:text-[30px]!',
  compact: 'text-[48px] max-2xl:text-[42px] max-xl:text-[38px] max-lg:text-[40px]! max-md:text-[36px]! max-sm:text-[30px]!',
}

/** Section title with the soft green gradient bar behind its first letters. */
export function SectionHeading({ children, variant = 'default', className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={`relative font-bold capitalize ${sizes[variant]} after:absolute after:left-0 after:top-[7px] after:block after:h-[50px] after:w-[10%] after:bg-linear-to-r after:from-[rgba(31,168,79,0.2)] after:to-transparent after:content-[''] max-xl:after:h-[44px] max-xl:after:w-[11%] max-lg:after:h-[42px] max-lg:after:w-[7%] max-md:after:top-[5px] max-md:after:h-[36px] max-md:after:w-[8%] max-sm:after:h-[27px] max-sm:after:w-[10%] ${className}`}
    >
      {children}
    </h2>
  )
}
