import { useState } from 'react'
import { FaAngleRight, FaMinus, FaPlus } from 'react-icons/fa6'
import { images } from '../../assets/images'
import { footerColumns, footerSocialLinks } from '../../data/footer'
import type { FooterColumn } from '../../types'
import { Collapse } from '../ui/Collapse'
import { Container } from '../ui/Container'

const linkClass =
  'text-base font-normal text-[#ddd] capitalize transition-all duration-300 hover:translate-x-[3px] hover:text-primary'

function FooterLinks({ column }: { column: FooterColumn }) {
  return (
    <ul>
      {column.links.map((link) => (
        <li key={link.label} className="block py-2">
          <a href={link.href} className={linkClass}>
            <FaAngleRight className="mr-[5px] inline text-[14px]" />
            {link.label}{' '}
          </a>
        </li>
      ))}
    </ul>
  )
}

/** Footer columns collapse into an accordion on phones (the first one starts open). */
function MobileFooterAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="pt-[25px] md:hidden">
      {footerColumns.map((column, index) => {
        const isOpen = openIndex === index
        const Icon = isOpen ? FaMinus : FaPlus
        return (
          <div key={column.title} className="mb-[15px]">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-center justify-between rounded-[2px] bg-primary px-3 py-[10px]"
            >
              <span className="text-[20px] font-semibold text-white capitalize max-sm:text-[18px]">{column.title}</span>
              <Icon className="text-[18px] text-white max-sm:text-base" />
            </button>
            <Collapse isOpen={isOpen} duration={0.4}>
              <div className="p-[7px]">
                <FooterLinks column={column} />
              </div>
            </Collapse>
          </div>
        )
      })}
    </div>
  )
}

export function Footer() {
  return (
    <>
      <footer className="bg-[#1c1d1c] py-[50px]">
        <Container>
          <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:col-span-3 md:max-lg:mt-[22px] lg:col-span-1">
              <div className="w-[95%] rounded-[4px] bg-[#202020] p-5 max-lg:w-full lg:max-xl:p-[15px]">
                <img src={images.logo} alt="Techida" className="max-w-[100px]" />
                <p className="pt-3 leading-[30px] text-[#a2a1a1] capitalize lg:max-xl:pt-[9px] lg:max-xl:leading-[26px]">
                  Lorem ipsum dolor sit amet aspernatur exercitationem fugiat.
                </p>
                <h6 className="pt-[22px] text-[18px] text-[#a2a1a1] capitalize">follow us</h6>
                <ul className="flex gap-1 pt-3">
                  {footerSocialLinks.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        className="mr-[7px] inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-primary text-white hover:scale-110 lg:max-xl:mr-[5px] lg:max-xl:h-[35px] lg:max-xl:w-[34px]"
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {footerColumns.map((column) => (
              <div key={column.title} className="pl-10 max-md:hidden md:max-lg:mt-[22px] md:max-lg:pl-0">
                <h6 className="text-[20px] font-semibold text-[#b6b6b6] capitalize">{column.title}</h6>
                <div className="pt-[18px]">
                  <FooterLinks column={column} />
                </div>
              </div>
            ))}
            <div className="md:col-span-3 lg:col-span-4">
              <MobileFooterAccordion />
            </div>
          </div>
        </Container>
      </footer>
      <footer className="border-t border-[#b1b1b1] bg-[#1c1d1c] py-4">
        <Container>
          <div className="flex items-center justify-between max-sm:flex-col">
            <p className="text-[17px] capitalize max-xl:text-base max-lg:text-[15px] max-md:text-sm">
              © 2024 Created by:{' '}
              <a href="#" className="font-medium text-[#d8d8d8] hover:text-primary">
                erramix
              </a>
            </p>
            <p className="text-[17px] capitalize max-xl:text-base max-lg:text-[15px] max-md:text-sm max-sm:pt-[5px]">
              <a href="terms-of-use.html" className="font-medium text-[#d8d8d8] hover:text-primary">
                Terms of Use{' '}
              </a>{' '}
              |{' '}
              <a href="privacy-policy.html" className="font-medium text-[#d8d8d8] hover:text-primary">
                Privacy Policy
              </a>
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}
