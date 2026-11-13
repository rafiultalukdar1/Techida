import { motion } from 'framer-motion'
import { images } from '../../assets/images'
import { dealFeatures } from '../../data/content'
import { reveal } from '../../lib/motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { TextLines } from '../ui/TextLines'

export function Deal() {
  return (
    <section className="pt-[70px] pb-[35px]">
      <Container>
        <div className="grid items-center gap-x-6 lg:grid-cols-2">
          <motion.div {...reveal('left')}>
            <img src={images.dealImage} alt="" className="max-w-full" />
          </motion.div>
          <motion.div className="max-lg:pt-[30px]" {...reveal('up')}>
            <SectionHeading variant="compact">
              We Deal With The Aspects Of Professional <span className="text-primary">IT Services</span>
            </SectionHeading>
            <p className="py-[7px] leading-[28px] capitalize lg:max-xl:pt-[5px] lg:max-xl:pb-0">
              <TextLines
                text={'Although, final stages of the internal network gives a complete\nexperience of The Parameter of Speculative Environment'}
                breakClassName="max-sm:hidden"
              />
            </p>
            <div className="grid grid-flow-col grid-rows-2 gap-x-9 pr-3 max-sm:grid-flow-row max-sm:grid-cols-1 max-sm:grid-rows-none">
              {dealFeatures.map(({ label, icon: Icon }) => (
                <h6
                  key={label}
                  className="group relative z-[1] mt-3 w-full overflow-hidden rounded-[6px] bg-panel px-5 py-[25px] text-[18px] font-bold transition-all duration-300 after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-0 after:rounded-[11px] after:bg-primary after:transition-all after:duration-400 after:content-[''] hover:text-white hover:after:w-full lg:max-xl:px-3 lg:max-xl:py-5 lg:max-xl:text-[17px] sm:max-md:px-[18px] sm:max-md:py-5 sm:max-md:text-[17px]"
                >
                  <Icon className="mr-[15px] inline text-[32px] text-primary transition-colors duration-300 group-hover:text-white lg:max-xl:mr-[7px] lg:max-xl:text-[28px] sm:max-md:mr-[7px] sm:max-md:text-[28px]" />
                  {label}
                </h6>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
