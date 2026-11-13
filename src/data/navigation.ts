import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import type { NavItem, SocialLink } from '../types'

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '#',
    children: [
      { label: 'Home One', mobileLabel: 'Home One', href: '#' },
      { label: 'Home Tow', mobileLabel: 'Home Tow', href: '#' },
      { label: 'Home Three', mobileLabel: 'Home Three', href: '#' },
    ],
  },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'Pages 1', mobileLabel: 'Pages One', href: '#' },
      { label: 'Pages 2', mobileLabel: 'Pages Tow', href: '#' },
      { label: 'Pages 3', mobileLabel: 'Pages Three', href: '#' },
      { label: 'Pages 4', mobileLabel: 'Pages Four', href: '#' },
    ],
  },
  { label: 'Portfolio', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '#' },
]

export const heroSocialLinks: SocialLink[] = [
  { label: 'Facebook', href: '#', icon: FaFacebook },
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'X (Twitter)', href: '#', icon: FaXTwitter },
  { label: 'YouTube', href: '#', icon: FaYoutube },
]
