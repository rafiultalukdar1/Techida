import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { images } from '../../assets/images'
import { skills } from '../../data/content'
import { reveal, swing } from '../../lib/motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { TextLines } from '../ui/TextLines'

const skillText =
  'text-[20px] lg:max-xl:text-[18px] sm:max-md:text-[18px] max-sm:text-[17px]'

export function Experience() {
  const listRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(listRef, { once: true })

  return (
    <section className="py-[55px]">
      <Container>
        <div className="grid items-center gap-x-6 lg:grid-cols-2">
          <motion.div className="max-lg:order-2 max-lg:pt-10 max-md:pt-[30px]" {...reveal('up')}>
            <SectionHeading variant="compact">
              We Are Here To IT Solution With 20 Years Of <span className="text-primary">Experience</span>
            </SectionHeading>
            <p className="pt-3 leading-[30px] capitalize lg:max-2xl:pt-[7px] lg:max-2xl:leading-[27px]">
              <TextLines
                text={'Although, final stages of the internal network gives a complete\nexperience of The Parameter of Speculative Environment'}
                breakClassName="max-sm:hidden"
              />
            </p>
            <div ref={listRef}>
              {skills.map((skill) => (
                <motion.div
                  key={skill.label}
                  className="pt-[22px] xl:max-2xl:pt-3 lg:max-xl:pt-[10px]"
                  {...reveal('up')}
                >
                  <div className="flex items-center justify-between">
                    <h6 className={skillText}>{skill.label}</h6>
                    <span className={`${skillText} text-heading`}>{skill.percent}%</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={skill.label}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.percent}
                    className="my-3 block h-[7px] w-full rounded-[5px] bg-panel lg:max-xl:my-[9px] max-md:my-[5px]"
                  >
                    <motion.div
                      className="h-full rounded-[5px] bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${skill.percent}%` : 0 }}
                      transition={{ duration: 2, ease: swing }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="max-lg:order-1" {...reveal('right')}>
            <img src={images.experienceImage} alt="" className="max-w-full" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
