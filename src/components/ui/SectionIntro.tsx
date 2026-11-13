import { motion } from 'framer-motion'
import { reveal } from '../../lib/motion'
import { SectionHeading } from './SectionHeading'
import { TextLines } from './TextLines'

interface SectionIntroProps {
  label: string
  title: string
  /** Optional paragraph; "\n" marks a desktop-only line break. */
  description?: string
  /** Extra classes for the label (spacing below it). */
  labelClassName?: string
  /** Extra classes for the heading (spacing above it). */
  headingClassName?: string
  /** Extra classes for the paragraph (top spacing). */
  paragraphClassName?: string
  /** Classes that decide where the paragraph's line break is hidden. */
  breakClassName?: string
  className?: string
}

/** Small green label, big heading and an optional paragraph that slide in from the left. */
export function SectionIntro({
  label,
  title,
  description,
  labelClassName = 'mb-[7px]',
  headingClassName = '',
  paragraphClassName = 'pt-[15px]',
  breakClassName = 'max-md:hidden',
  className = '',
}: SectionIntroProps) {
  return (
    <motion.div className={className} {...reveal('left')}>
      <h6 className={`text-[16px] font-bold uppercase text-primary ${labelClassName}`}>{label}</h6>
      <SectionHeading className={headingClassName}>{title}</SectionHeading>
      {description && (
        <p className={`leading-[30px] capitalize ${paragraphClassName}`}>
          <TextLines text={description} breakClassName={breakClassName} />
        </p>
      )}
    </motion.div>
  )
}
