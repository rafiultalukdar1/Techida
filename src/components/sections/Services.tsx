import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import { SECTION_INTRO, services } from '../../data/content'
import { reveal } from '../../lib/motion'
import type { ServiceCard } from '../../types'
import { Container } from '../ui/Container'
import { SectionIntro } from '../ui/SectionIntro'

const face =
  'min-h-[260px] rounded-[10px] text-center text-heading shadow-[rgba(149,157,165,0.2)_0px_8px_30px] transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] transform-3d backface-hidden'
const inner =
  'absolute top-1/2 left-0 z-[2] box-border w-full -translate-y-1/2 translate-z-[60px] scale-[0.98] px-[15px]'

/** Card that flips on hover: icon + title on the front, description + link on the back. */
function FlipCard({ service }: { service: ServiceCard }) {
  const Icon = service.icon
  return (
    <div className="group relative perspective-[1000px] transform-3d">
      <div className={`${face} relative bg-page rotate-x-0 group-hover:-rotate-x-180`}>
        <div className={inner}>
          <motion.div
            className="inline-flex h-[100px] w-[100px] items-center justify-center rounded-full bg-primary text-[36px] text-white"
            {...reveal(service.motion)}
          >
            <Icon />
          </motion.div>
          <motion.div className="pt-[22px]" {...reveal(service.motion)}>
            <h3 className="text-[26px] capitalize text-heading max-2xl:text-[24px] max-xl:text-[20px] max-lg:text-[26px] max-md:text-[24px] max-sm:text-[22px]">
              {service.title}
            </h3>
          </motion.div>
        </div>
      </div>
      <div className={`${face} absolute top-0 left-0 w-full bg-primary rotate-x-180 group-hover:rotate-x-0`}>
        <div className={inner}>
          <div className="pb-3">
            <h3 className="text-[28px] font-medium capitalize text-white max-2xl:text-[24px] max-xl:text-[20px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[22px]">
              {service.title}
            </h3>
          </div>
          <p className="text-white lg:max-xl:text-[15px] lg:max-xl:leading-5">{service.description}</p>
          <a
            href="#"
            className="pt-[15px] text-[22px] font-medium text-white max-2xl:text-[20px] max-xl:text-[18px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px]"
          >
            Learn More <FaArrowRight className="ml-[7px] inline text-[16px]" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section className="pt-[55px]">
      <Container>
        <SectionIntro
          label="our services"
          title="What We’re Offering?"
          description={SECTION_INTRO}
          labelClassName=""
          headingClassName="mt-[5px]"
          paragraphClassName="pt-[10px] max-sm:pt-[7px]"
        />
        <div className="grid gap-x-[54px] gap-y-[30px] pt-10 max-lg:pt-[45px] md:grid-cols-2 lg:grid-cols-4 lg:max-2xl:gap-x-11 lg:gap-y-0">
          {services.map((service) => (
            <FlipCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
