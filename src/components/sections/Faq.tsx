import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { images } from '../../assets/images'
import { SECTION_INTRO, faqEntries } from '../../data/content'
import { useFollowCursor } from '../../hooks/useFollowCursor'
import { reveal } from '../../lib/motion'
import { Collapse } from '../ui/Collapse'
import { Container } from '../ui/Container'
import { SectionIntro } from '../ui/SectionIntro'

const columnPadding = 'pt-[55px] max-xl:pt-[35px] max-lg:pt-5 max-sm:pt-[18px]'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const imageRef = useFollowCursor<HTMLImageElement>()

  return (
    <section className="overflow-hidden py-[70px] max-md:py-[50px] max-sm:py-[35px]">
      <Container>
        <SectionIntro label="faq" title="Frequently Asked Questions" description={SECTION_INTRO} />
        <div className="grid items-center gap-x-16 max-xl:gap-x-12 lg:grid-cols-2">
          <motion.div className={`${columnPadding} max-lg:text-center`} {...reveal('up')}>
            <img ref={imageRef} src={images.faqImage} alt="" className="h-auto max-w-[95%]" />
          </motion.div>
          <div className={columnPadding}>
            {faqEntries.map((entry, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={entry.question}
                  className="mb-[18px] rounded-[4px] bg-panel px-5 py-[15px] max-md:mb-3 max-sm:mb-[10px]"
                  {...reveal('up')}
                >
                  <h4 className="text-[22px] capitalize max-xl:text-[20px] max-md:text-[18px] max-sm:text-[17px]">
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full cursor-pointer items-center justify-between text-left capitalize"
                    >
                      {entry.question}
                      <FaChevronDown
                        className={`shrink-0 text-heading transition-transform duration-400 max-md:text-base max-sm:text-sm ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </h4>
                  <Collapse isOpen={isOpen}>
                    <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} className="px-[5px]">
                      <p className="pt-3 leading-[30px] capitalize">{entry.answer}</p>
                    </div>
                  </Collapse>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
