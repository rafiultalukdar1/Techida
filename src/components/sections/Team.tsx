import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { SECTION_INTRO, teamMembers } from '../../data/content'
import { reveal } from '../../lib/motion'
import { Container } from '../ui/Container'
import { SectionIntro } from '../ui/SectionIntro'

const socials = [
  { label: 'Facebook', icon: FaFacebookF },
  { label: 'Instagram', icon: FaInstagram },
  { label: 'X (Twitter)', icon: FaXTwitter },
  { label: 'LinkedIn', icon: FaLinkedin },
]

export function Team() {
  return (
    <section className="py-[70px] max-md:py-[50px] max-sm:py-[35px]">
      <Container>
        <SectionIntro
          label="team"
          title="our team"
          description={SECTION_INTRO}
          paragraphClassName="pt-[15px] max-lg:pt-[7px]"
        />
        <div className="mt-[30px] grid gap-x-11 gap-y-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <motion.div className="group relative overflow-hidden" {...reveal('up')}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="block w-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ul className="flex gap-1">
                    {socials.map(({ label, icon: Icon }) => (
                      <li key={label}>
                        <a
                          href="#"
                          aria-label={label}
                          className="mx-[3px] inline-flex h-10 w-10 scale-0 items-center justify-center rounded-[4px] border border-white text-[20px] text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 hover:bg-white hover:text-black lg:max-xl:h-9 lg:max-xl:w-9 lg:max-xl:text-[18px] sm:max-md:h-8 sm:max-md:w-8 sm:max-md:text-[18px] max-sm:h-[35px] max-sm:w-[35px] max-sm:text-[18px]"
                        >
                          <Icon />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div className="w-full bg-panel py-5 text-center max-sm:py-3" {...reveal('up')}>
                <h4 className="text-[26px] font-bold capitalize max-xl:text-[24px] max-md:text-[22px]">{member.name}</h4>
                <h6 className="pt-[5px] text-[18px] font-medium text-para capitalize max-xl:text-[17px] max-md:text-[16px]">
                  {member.role}
                </h6>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
