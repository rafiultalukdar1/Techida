import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import type { FooterColumn, SocialLink } from '../types'

export const footerSocialLinks: SocialLink[] = [
  { label: 'Facebook', href: '#', icon: FaFacebookF },
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'X (Twitter)', href: '#', icon: FaXTwitter },
  { label: 'YouTube', href: '#', icon: FaYoutube },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'site map',
    links: [
      { label: 'home', href: '#' },
      { label: 'about', href: '#' },
      { label: 'services', href: '#' },
      { label: 'contact', href: '#' },
    ],
  },
  {
    title: 'follow us',
    links: [
      { label: 'facebook', href: '#' },
      { label: 'instagram', href: '#' },
      { label: 'linkedin', href: '#' },
      { label: 'x', href: '#' },
    ],
  },
  {
    title: 'our services',
    links: [
      { label: 'digital marketing', href: '#' },
      { label: 'web developement', href: '#' },
      { label: 'cyber security', href: '#' },
      { label: 'graphic design', href: '#' },
    ],
  },
]
