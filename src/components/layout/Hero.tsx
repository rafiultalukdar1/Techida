import { motion } from 'framer-motion'
import { images } from '../../assets/images'
import { heroSocialLinks } from '../../data/navigation'
import { useFollowCursor } from '../../hooks/useFollowCursor'
import { reveal } from '../../lib/motion'
import { Container } from '../ui/Container'
import { RippleButton } from '../ui/RippleButton'
import { SectionHeading } from '../ui/SectionHeading'
import { TextLines } from '../ui/TextLines'

const HERO_TEXT =
  'At any rate, Lorem ipsum dolor sit amet consectetur\nadipisicing elit. Eaque amet, quod doloribus the framework\nof the essence represents a bond between the flexible\nproduction planning.'

export function Hero() {
  const heroImageRef = useFollowCursor<HTMLImageElement>()

  return (
    <Container>
      <div className="grid items-center gap-x-6 pt-[195px] pb-[35px] max-xl:pt-[190px] max-lg:pt-[150px] max-lg:pb-[25px] max-md:pt-[135px] max-sm:pt-[120px] lg:grid-cols-2">
        <motion.div {...reveal('up')}>
          <ul className="flex gap-1">
            {heroSocialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-[5px] bg-panel text-[20px] text-para transition-all duration-300 hover:bg-primary hover:text-paper max-sm:mr-[7px] max-sm:h-9 max-sm:w-9 max-sm:text-[18px]"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
          <SectionHeading className="mt-5 max-xl:mt-[15px]">
            Excellent IT <span className="text-primary">solutions</span>
            <br className="max-lg:hidden" /> for your success
          </SectionHeading>
          <p className="pt-3 leading-[30px] capitalize lg:max-xl:pt-[7px] lg:max-xl:leading-[25px] max-sm:pt-[7px]">
            <TextLines text={HERO_TEXT} breakClassName="max-lg:hidden" />
          </p>
          <RippleButton href="#" className="relative z-[1] mt-[15px]">
            join now
          </RippleButton>
        </motion.div>

        <motion.div className="text-center max-lg:pt-[30px] max-md:pt-5 max-sm:pt-[25px]" {...reveal('right')}>
          <img
            ref={heroImageRef}
            src={images.heroImage}
            alt=""
            className="h-auto max-w-full max-lg:max-w-[90%] max-sm:max-w-[95%]"
          />
        </motion.div>
      </div>
    </Container>
  )
}
