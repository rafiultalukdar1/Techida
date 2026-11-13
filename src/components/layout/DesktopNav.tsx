import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import type { NavItem } from '../../types'

const linkClass = 'px-2 font-semibold text-secondary transition-colors duration-300 hover:text-primary'

function NavEntry({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false)
  const { children } = item

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
      }}
    >
      <a href={item.href} className={linkClass} aria-haspopup={children ? 'menu' : undefined} aria-expanded={children ? isOpen : undefined}>
        {item.label}
        {children && <FaCaretDown className="ml-[5px] inline text-[12px]" />}
      </a>
      {children && (
        <ul
          className={`absolute flex translate-y-[5px] flex-col rounded-[5px] bg-panel py-[5px] ${
            isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          {children.map((child) => (
            <li key={child.label}>
              <a href={child.href} className={`${linkClass} inline-block w-[120px] py-[5px] pr-[7px] pl-3`}>
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <nav aria-label="Main" className="max-lg:hidden">
      <ul className="flex gap-1">
        {items.map((item) => (
          <NavEntry key={item.label} item={item} />
        ))}
      </ul>
    </nav>
  )
}
