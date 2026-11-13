import { motion } from 'framer-motion'
import { FaArrowRightLong, FaCalendar, FaTag, FaUser } from 'react-icons/fa6'
import { SECTION_INTRO, blogPosts } from '../../data/content'
import { reveal } from '../../lib/motion'
import type { BlogPost } from '../../types'
import { Container } from '../ui/Container'
import { SectionIntro } from '../ui/SectionIntro'

const metaIcon = 'mr-[7px] inline text-[17px] text-primary lg:max-xl:mr-[3px] max-sm:text-[15px]'
const metaText = 'text-[16px] capitalize lg:max-xl:text-[15px]!'

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <motion.div
        className="relative overflow-hidden after:absolute after:-top-full after:-left-full after:h-full after:w-full after:rounded-[4px] after:bg-black/40 after:transition-all after:duration-200 after:ease-in-out after:content-[''] hover:after:top-0 hover:after:left-0"
        {...reveal('up')}
      >
        <img src={post.image} alt="" className="block w-full rounded-[4px]" />
      </motion.div>
      <motion.div
        className="w-full rounded-[4px] bg-panel px-5 py-[30px] lg:max-xl:px-3 lg:max-xl:py-5 md:max-lg:px-4 md:max-lg:py-5 sm:max-md:px-[18px] sm:max-md:py-5 max-sm:px-3 max-sm:py-[18px]"
        {...reveal('up')}
      >
        <div className="flex items-center justify-between">
          <p className={metaText}>
            <FaUser className={metaIcon} />
            {post.author}
          </p>
          <p className={metaText}>
            <FaCalendar className={metaIcon} />
            {post.date}
          </p>
          <p className={metaText}>
            <FaTag className={metaIcon} />
            {post.category}
          </p>
        </div>
        <h3 className="pt-[15px] text-[26px] leading-[38px] font-bold capitalize xl:max-2xl:text-[24px] lg:max-xl:pt-[10px] lg:max-xl:text-[21px] lg:max-xl:leading-8 md:max-lg:text-[22px] md:max-lg:leading-8 sm:max-md:pt-3 sm:max-md:text-[22px] sm:max-md:leading-[30px] max-sm:pt-3 max-sm:text-[20px] max-sm:leading-[30px]">
          {post.title}
        </h3>
        <p className="pt-3 leading-[30px] capitalize xl:max-2xl:pt-[7px] xl:max-2xl:leading-[28px] lg:max-xl:pt-[9px] lg:max-xl:leading-[26px] md:max-lg:pt-[10px] md:max-lg:leading-[26px] max-md:pt-[7px] max-sm:leading-[26px]">
          {post.excerpt}
        </p>
        <a
          href="#"
          className="group/link mt-[18px] text-[20px] font-bold text-primary hover:underline lg:max-xl:mt-3 lg:max-xl:text-[18px] md:max-lg:mt-[15px] md:max-lg:text-[18px] sm:max-md:mt-[10px] sm:max-md:text-[18px] max-sm:mt-3 max-sm:text-base"
        >
          Read More{' '}
          <FaArrowRightLong className="ml-[7px] inline text-[16px] transition-transform duration-300 group-hover/link:translate-x-[3px]" />
        </a>
      </motion.div>
    </article>
  )
}

export function Blog() {
  return (
    <section className="py-[70px] max-lg:py-[50px] max-sm:py-[35px]">
      <Container>
        <SectionIntro
          label="blog"
          title="our blog"
          description={SECTION_INTRO}
          paragraphClassName="pt-[15px] max-lg:pt-[9px]"
        />
        <div className="mt-[35px] grid gap-x-12 gap-y-[35px] max-sm:mt-[22px] max-sm:gap-y-[22px] md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}
