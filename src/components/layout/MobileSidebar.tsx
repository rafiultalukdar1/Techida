import { useState, type MouseEvent } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import type { NavItem } from '../../types'
import { Collapse } from '../ui/Collapse'
import { RippleButton } from '../ui/RippleButton'
import { DarkModeButton } from './DarkModeButton'

interface MobileSidebarProps {
  items: NavItem[]
  isOpen: boolean
  isDark: boolean
  onToggleTheme: () => void
}

const itemLink = 'py-[5px] pl-[18px] font-semibold text-secondary transition-colors duration-300 hover:text-primary'

export function MobileSidebar({ items, isOpen, isDark, onToggleTheme }: MobileSidebarProps) {
  const [openLabel, setOpenLabel] = useState<string | null>(null)

  const toggle = (event: MouseEvent<HTMLAnchorElement>, label: string, hasChildren: boolean): void => {
    event.preventDefault()
    if (hasChildren) setOpenLabel((current) => (current === label ? null : label))
  }

  return (
    <aside
      aria-label="Mobile menu"
      className={`fixed bottom-0 z-[99] h-[calc(100vh-80px)] w-[310px] bg-panel pt-5 transition-all duration-400 ease-in-out ${
        isOpen ? 'left-0' : '-left-[310px]'
      }`}
    >
      {items.map((item) => {
        const isActive = openLabel === item.label
        return (
          <div key={item.label}>
            <a href={item.href} className={`group ${itemLink}`} onClick={(event) => toggle(event, item.label, Boolean(item.children))}>
              {item.children ? (
                <>
                  <span className="pr-[7px]">{item.label}</span>
                  <FaCaretDown
                    className={`inline text-[12px] text-secondary transition-all duration-300 group-hover:text-primary ${isActive ? 'rotate-180' : ''}`}
                  />
                </>
              ) : (
                item.label
              )}
            </a>
            {item.children && (
              <Collapse isOpen={isActive} duration={0.4}>
                <div className="m-[10px] rounded-xl py-2 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} className={`block py-1 pl-[30px] font-semibold text-secondary hover:text-primary`}>
                      {child.mobileLabel}
                    </a>
                  ))}
                </div>
              </Collapse>
            )}
          </div>
        )
      })}
      <div className="flex items-center pt-8 pl-[18px] md:max-lg:hidden">
        <RippleButton href="#">join now</RippleButton>
        <DarkModeButton isDark={isDark} onToggle={onToggleTheme} />
      </div>
    </aside>
  )
}
