import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper/types'
import { SECTION_INTRO, testimonials } from '../../data/content'
import { reveal } from '../../lib/motion'
import type { Testimonial } from '../../types'
import { Container } from '../ui/Container'
import { SectionIntro } from '../ui/SectionIntro'
import { SliderDots } from '../ui/SliderDots'

const STAR_COUNT = 5
const starClass = 'text-[20px] text-[#b8b800] md:max-xl:text-[18px] max-sm:text-[18px]'

function Stars({ fullStars }: { fullStars: number }) {
  return (
    <div className="mt-[5px] flex gap-1" aria-label={`${fullStars} out of ${STAR_COUNT} stars`}>
      {Array.from({ length: STAR_COUNT }, (_, index) =>
        index < fullStars ? <FaStar key={index} className={starClass} /> : <FaStarHalfStroke key={index} className={starClass} />,
      )}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-[8px] bg-panel p-5">
      <div className="flex items-center">
        <div className="pr-[30px] md:max-xl:pr-[22px]">
          <img src={testimonial.avatar} alt={testimonial.name} className="h-[62px] w-[62px] rounded-full object-cover" />
        </div>
        <div className="pr-[30px] md:max-xl:pr-[22px]">
          <h4 className="text-[20px] font-bold capitalize md:max-xl:text-[19px] max-sm:text-[18px]">{testimonial.name}</h4>
          <Stars fullStars={testimonial.fullStars} />
        </div>
      </div>
      <p className="pt-[15px] leading-[30px] md:max-2xl:leading-[26px]">{testimonial.text}</p>
    </div>
  )
}

export function Testimonials() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-[70px] max-md:py-[50px] max-sm:py-[35px]">
      <Container>
        <SectionIntro label="testimonials" title="Customers Testmonials" description={SECTION_INTRO} />
        <motion.div className="pt-[30px]" {...reveal('up')}>
          <Swiper
            modules={[Autoplay]}
            loop
            speed={250}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 375: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
            onSwiper={setSwiper}
            onRealIndexChange={(instance) => setActiveIndex(instance.realIndex)}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderDots
            count={testimonials.length}
            activeIndex={activeIndex}
            onSelect={(index) => swiper?.slideToLoop(index)}
            className="mt-[35px] max-sm:mt-5"
          />
        </motion.div>
      </Container>
    </section>
  )
}
