import { motion } from 'framer-motion'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { images } from '../../assets/images'
import { reveal } from '../../lib/motion'
import { Container } from '../ui/Container'

export function LogoSlider() {
  return (
    <section className="bg-panel py-[70px] max-md:py-[50px] max-sm:py-[35px]">
      <Container>
        <motion.div {...reveal('up')}>
          <Swiper
            modules={[Autoplay]}
            loop
            speed={250}
            autoplay={{ delay: 1600, disableOnInteraction: false }}
            spaceBetween={12}
            slidesPerView={2}
            breakpoints={{
              375: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
              1400: { slidesPerView: 6 },
            }}
          >
            {images.sliders.map((logo, index) => (
              <SwiperSlide key={logo}>
                <img src={logo} alt={`Partner logo ${index + 1}`} className="block w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  )
}
