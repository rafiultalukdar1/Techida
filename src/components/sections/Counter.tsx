import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { counterStats } from '../../data/content'
import { useCountUp } from '../../hooks/useCountUp'
import { reveal } from '../../lib/motion'
import type { CounterStat } from '../../types'
import { Container } from '../ui/Container'

function CounterItem({ stat, start }: { stat: CounterStat; start: boolean }) {
  const value = useCountUp(stat.value, start)
  return (
    <motion.div className="max-lg:pt-[30px]" {...reveal(stat.motion)}>
      <h2 className="text-[60px] font-bold text-primary max-2xl:text-[52px] max-xl:text-[50px] max-lg:text-[44px] max-md:text-[40px] max-sm:text-[38px]">
        {value}
      </h2>
      <h6 className="pt-[7px] text-[26px] font-bold capitalize text-[#f9f9f9] max-2xl:pt-[5px] max-2xl:text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px]">
        {stat.label}
      </h6>
    </motion.div>
  )
}

export function Counter() {
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true })

  return (
    <section className="bg-[#202020] py-[70px] max-2xl:py-[62px] max-xl:py-[60px] max-lg:p-[30px] max-lg:pb-[55px]">
      <Container>
        <div ref={gridRef} className="grid gap-x-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {counterStats.map((stat) => (
            <CounterItem key={stat.label} stat={stat} start={isInView} />
          ))}
        </div>
      </Container>
    </section>
  )
}
