import { motion } from 'framer-motion'
import { useState } from 'react'
import { portfolioPanels, portfolioTabs } from '../../data/content'
import { reveal } from '../../lib/motion'
import type { PortfolioItem, PortfolioTab } from '../../types'
import { Container } from '../ui/Container'
import { SectionIntro } from '../ui/SectionIntro'

function ProjectCard({ item, animated }: { item: PortfolioItem; animated: boolean }) {
  return (
    <motion.div
      className="group relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:z-[1] after:block after:h-full after:w-full after:bg-linear-to-t after:from-black/80 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:after:opacity-100"
      {...(animated ? reveal('up') : {})}
    >
      <img src={item.image} alt={item.title} className="max-w-full rounded-[6px]" />
      <div className="absolute bottom-0 left-0 z-[2] w-full p-[25px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:max-md:p-3">
        <h4 className="text-[24px] font-bold text-[#f9f9f9] uppercase max-xl:text-[22px] max-md:text-[20px]">{item.title}</h4>
        <h6 className="py-[7px] text-[17px] text-[#f9f9f9] capitalize max-xl:py-[3px] max-xl:text-[15px] max-md:text-[14px] max-sm:py-[5px] max-sm:text-[16px]">
          {item.category}
        </h6>
        <div className="flex flex-wrap gap-x-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="mr-[5px] cursor-pointer text-[16px] font-extrabold text-primary capitalize sm:max-md:mr-[3px] sm:max-md:text-[14px] max-sm:text-[15px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="mt-[10px] inline-block w-full rounded-[4px] bg-panel py-2 text-center text-[16px] font-bold text-primary capitalize max-xl:py-[7px] max-xl:text-[14px] max-md:text-[13px] max-sm:py-2 max-sm:text-[14px]"
        >
          view project
        </a>
      </div>
    </motion.div>
  )
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('all')

  return (
    <section className="py-[70px] max-xl:py-[55px] max-md:py-[50px] max-sm:py-[35px]">
      <Container>
        <SectionIntro label="portfolio" title="our portfolio" />
        <div className="pt-[45px] max-lg:pt-[30px]">
          <motion.div role="tablist" aria-label="Portfolio categories" className="flex gap-1" {...reveal('left')}>
            {portfolioTabs.map((tab) => (
              <button
                key={tab.id}
                id={`portfolio-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`portfolio-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`mr-[7px] inline-block cursor-pointer rounded-[4px] px-[18px] py-[7px] text-[18px] font-bold shadow-[rgba(149,157,165,0.6)_0px_7px_20px] transition-all duration-300 ${
                  activeTab === tab.id ? 'bg-panel text-heading' : 'bg-primary text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {portfolioTabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <motion.div
                key={tab.id}
                id={`portfolio-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`portfolio-tab-${tab.id}`}
                className={`mb-[25px] pt-5 max-lg:pt-[9px] ${isActive ? '' : 'hidden'}`}
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: isActive ? 1 : 0 }}
              >
                <div className="mt-[25px] grid gap-x-11 gap-y-[25px] sm:grid-cols-2 lg:grid-cols-3">
                  {portfolioPanels[tab.id].map((item, index) => (
                    <ProjectCard key={`${item.title}-${index}`} item={item} animated={tab.id === 'all'} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
