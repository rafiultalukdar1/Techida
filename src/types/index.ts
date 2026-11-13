import type { IconType } from 'react-icons'

export interface NavSubItem {
  label: string
  /** Label shown in the mobile sidebar (the original used slightly different wording). */
  mobileLabel: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavSubItem[]
}

export interface SocialLink {
  label: string
  href: string
  icon: IconType
}

export interface ServiceCard {
  title: string
  description: string
  icon: IconType
  /** Direction of the original entrance animation. */
  motion: 'up' | 'down'
}

export interface DealFeature {
  label: string
  icon: IconType
}

export interface Skill {
  label: string
  percent: number
}

export interface CounterStat {
  label: string
  value: number
  motion: 'up' | 'down'
}

export interface ChooseReason {
  number: string
  title: string
  description: string
}

export type PortfolioTab = 'all' | 'mobile' | 'data' | 'web'

export interface PortfolioItem {
  image: string
  title: string
  category: string
  tags: string[]
}

export interface PricingFeature {
  label: string
  included: boolean
}

export interface PricingPlan {
  name: string
  price: string
  icon: IconType
  features: PricingFeature[]
  featured?: boolean
}

export interface Testimonial {
  name: string
  avatar: string
  /** Number of full stars; the remainder up to five are half stars (as in the original). */
  fullStars: number
  text: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
}

export interface BlogPost {
  image: string
  author: string
  date: string
  category: string
  title: string
  excerpt: string
}

export interface FaqEntry {
  question: string
  answer: string
}

export interface ContactDetail {
  icon: IconType
  text: string
  href?: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}
