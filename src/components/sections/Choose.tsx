import { motion } from 'framer-motion'
import { SECTION_INTRO, chooseReasons } from '../../data/content'
import { reveal } from '../../lib/motion'
import { Container } from '../ui/Container'
import { SectionIntro } from '../ui/SectionIntro'

export function Choose() {
  return (
    <section className="py-[70px]">
      <Container>
        <SectionIntro
          label="why choose us"
          title="why our clients choose us"
          description={SECTION_INTRO}
          labelClassName=""
          headingClassName="mt-[7px]"
          paragraphClassName="pt-[10px]"
        />
        <div className="mt-[35px] grid gap-x-[54px] gap-y-[35px] max-sm:mt-[25px] max-sm:gap-y-[25px] sm:grid-cols-2 lg:grid-cols-3 lg:max-xl:gap-x-11">
          {chooseReasons.map((reason) => (
            <motion.div
              key={reason.number}
              className="rounded-[5px] bg-panel px-5 py-[55px] max-xl:px-[18px] max-xl:py-[35px] max-sm:px-4 max-sm:py-[25px]"
              {...reveal('up')}
            >
              <h2 className="text-[50px] font-bold text-primary max-lg:text-[46px] max-md:text-[40px] max-sm:text-[30px]">
                {reason.number}
              </h2>
              <h4 className="pt-[22px] text-[26px] max-md:pt-[15px] max-md:text-[24px] max-sm:pt-3 max-sm:text-[22px]">
                {reason.title}
              </h4>
              <p className="pt-[15px] leading-[30px] max-sm:pt-[10px]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
