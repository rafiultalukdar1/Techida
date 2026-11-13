import { motion } from 'framer-motion'
import { FaRegCircleCheck, FaRegCircleXmark } from 'react-icons/fa6'
import { SECTION_INTRO, pricingPlans } from '../../data/content'
import { reveal } from '../../lib/motion'
import type { PricingPlan } from '../../types'
import { Container } from '../ui/Container'
import { RippleButton } from '../ui/RippleButton'
import { SectionIntro } from '../ui/SectionIntro'

function PricingCard({ plan }: { plan: PricingPlan }) {
  const Icon = plan.icon
  const muted = plan.featured ? 'text-[#d8d8d8]' : 'text-para'
  const planName = 'text-[25px] font-semibold capitalize max-xl:text-[20px] max-md:text-[18px]'

  return (
    <motion.div
      className={`rounded-[8px] py-[35px] text-center max-sm:py-7 ${plan.featured ? 'bg-primary' : 'bg-panel'}`}
      {...reveal('up')}
    >
      <strong className="block">
        <Icon
          className={`mx-auto mb-[25px] text-[55px] lg:max-xl:mb-[18px] lg:max-xl:text-[48px] md:max-lg:mb-[15px] md:max-lg:text-[45px] sm:max-md:mb-[15px] sm:max-md:text-[40px] max-sm:mb-5 max-sm:text-[42px] ${muted}`}
        />
      </strong>
      <h6 className={`${planName} ${muted}`}>{plan.name}</h6>
      <h2
        className={`pt-[22px] pb-3 text-[55px] font-bold max-2xl:pt-[15px] max-2xl:pb-[9px] max-2xl:text-[52px] max-xl:pt-3 max-xl:pb-[7px] max-xl:text-[46px] max-lg:pt-[10px] max-lg:text-[42px] max-md:text-[38px] max-sm:text-[32px] ${
          plan.featured ? 'text-[#f3f3f3]' : 'text-primary'
        }`}
      >
        {plan.price}
      </h2>
      <h6 className={`${planName} ${muted}`}>per project</h6>
      <ul className="pt-5">
        {plan.features.map((feature) => (
          <li
            key={feature.label}
            className={`block py-1 text-[20px] capitalize max-2xl:py-[3px] max-xl:text-[18px] md:max-lg:py-1 max-sm:text-[16px] ${muted}`}
          >
            {feature.included ? (
              <FaRegCircleCheck className={`mr-[5px] inline ${plan.featured ? 'text-[#202020]' : 'text-primary'}`} />
            ) : (
              <FaRegCircleXmark className="mr-[5px] inline text-[#864141]" />
            )}
            {feature.label}
          </li>
        ))}
      </ul>
      <RippleButton href="#" variant={plan.featured ? 'light' : 'solid'} className="z-[1] mt-[30px] max-sm:mt-5">
        join now
      </RippleButton>
    </motion.div>
  )
}

export function Pricing() {
  return (
    <section className="py-[70px] max-md:py-[50px] max-sm:py-[35px]">
      <Container>
        <SectionIntro label="pricing" title="our pricing" description={SECTION_INTRO} />
        <div className="mt-[30px] grid gap-x-11 gap-y-[30px] max-sm:mt-[22px] max-sm:gap-y-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}
