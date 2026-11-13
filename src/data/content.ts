import {
  FaAndroid,
  FaCircleDollarToSlot,
  FaCode,
  FaGamepad,
  FaHeadset,
  FaMagnifyingGlassPlus,
  FaMap,
  FaMoneyCheckDollar,
  FaPalette,
  FaSackDollar,
  FaStar,
  FaCartShopping,
  FaEnvelope,
  FaSquarePhone,
  FaLocationDot,
  FaSquareInstagram,
} from 'react-icons/fa6'
import { images } from '../assets/images'
import type {
  BlogPost,
  ChooseReason,
  ContactDetail,
  CounterStat,
  DealFeature,
  FaqEntry,
  PortfolioItem,
  PortfolioTab,
  PricingPlan,
  ServiceCard,
  Skill,
  TeamMember,
  Testimonial,
} from '../types'

const LOREM_SERVICE =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde, nesciunt quibusdam quis tempore quas tenetur'

export const SECTION_INTRO =
  'As a matter of fact the unification of the coherent software provides a strict control over The\nAccomplishment of Intended Estimation'

export const services: ServiceCard[] = [
  { title: 'web developement', description: LOREM_SERVICE, icon: FaCode, motion: 'up' },
  { title: 'apps developement', description: LOREM_SERVICE, icon: FaAndroid, motion: 'down' },
  { title: 'graphic design', description: LOREM_SERVICE, icon: FaPalette, motion: 'up' },
  { title: 'digital marketing', description: LOREM_SERVICE, icon: FaMagnifyingGlassPlus, motion: 'down' },
]

/** Listed column by column, as in the original markup. */
export const dealFeatures: DealFeature[] = [
  { label: 'Worldwide Services', icon: FaMap },
  { label: 'Easy To Reach', icon: FaGamepad },
  { label: 'Support 24h/24', icon: FaHeadset },
  { label: 'First On Field', icon: FaStar },
]

export const skills: Skill[] = [
  { label: 'App Development', percent: 70 },
  { label: 'UI/UX Design', percent: 35 },
  { label: 'Web Development', percent: 80 },
]

export const counterStats: CounterStat[] = [
  { label: 'happy clients', value: 500, motion: 'up' },
  { label: 'hard worker', value: 60, motion: 'down' },
  { label: 'complete project', value: 800, motion: 'up' },
  { label: 'Years Of Exprience', value: 30, motion: 'down' },
]

const LOREM_CHOOSE =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde, exped ita nesciunt quibusdam quis tempore quas tenetur'

export const chooseReasons: ChooseReason[] = [
  { number: '01.', title: 'Latest Technologies', description: LOREM_CHOOSE },
  { number: '02.', title: 'Uniqe Solutions', description: LOREM_CHOOSE },
  { number: '03.', title: 'Powerful Strategies', description: LOREM_CHOOSE },
]

export const portfolioTabs: { id: PortfolioTab; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'data', label: 'Data' },
  { id: 'web', label: 'Web' },
]

const [p1, p2, p3, p4, p5, p6] = images.portfolio

/** Each tab keeps its own items and tags exactly as written in the original panels. */
export const portfolioPanels: Record<PortfolioTab, PortfolioItem[]> = {
  all: [
    { image: p1, title: 'tansiApp', category: 'mobile application', tags: ['#React', '#HTML', '#next_js', '#Node'] },
    { image: p2, title: 'tansiApp', category: 'mobile application', tags: ['#Js', '#HTML', '#next_js', '#Node'] },
    { image: p3, title: 'imolas', category: 'mobile application', tags: ['#redux', '#HTML', '#next_js', '#gsap'] },
    { image: p4, title: 'abertonApp', category: 'mobile application', tags: ['#react', '#HTML', '#next_js', '#Node'] },
    { image: p5, title: 'Fitnessapp', category: 'web application', tags: ['#react', '#HTML', '#PHP', '#Node'] },
    { image: p6, title: 'Spark', category: 'web application', tags: ['#react', '#HTML', '#ruby', '#Node'] },
  ],
  mobile: [
    { image: p1, title: 'tansiApp', category: 'mobile application', tags: ['#React', '#HTML', '#next_js', '#Node'] },
    { image: p2, title: 'tansiApp', category: 'mobile application', tags: ['#Js', '#HTML', '#next_js', '#Node'] },
  ],
  data: [
    { image: p4, title: 'abertonApp', category: 'mobile application', tags: ['#React', '#HTML', '#next_js', '#Node'] },
    { image: p6, title: 'Spark', category: 'web application', tags: ['#Js', '#HTML', '#next_js', '#Node'] },
  ],
  web: [
    { image: p3, title: 'imolas', category: 'mobile application', tags: ['#React', '#HTML', '#next_js', '#Node'] },
    { image: p4, title: 'abertonApp', category: 'mobile application', tags: ['#Js', '#HTML', '#next_js', '#Node'] },
    { image: p5, title: 'Fitnessapp', category: 'web application', tags: ['#Js', '#HTML', '#next_js', '#Node'] },
  ],
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'free',
    price: '00$',
    icon: FaCartShopping,
    features: [
      { label: 'single user', included: true },
      { label: 'no updates', included: true },
      { label: 'limited acces library', included: true },
      { label: 'lorem ipsum', included: true },
      { label: 'dolor sit amet', included: true },
    ],
  },
  {
    name: 'basic',
    price: '19$',
    icon: FaCircleDollarToSlot,
    features: [
      { label: 'single user', included: true },
      { label: 'no updates', included: true },
      { label: 'limited acces library', included: true },
      { label: 'lorem ipsum', included: true },
      { label: 'dolor sit amet', included: false },
    ],
  },
  {
    name: 'Standerd',
    price: '39$',
    icon: FaMoneyCheckDollar,
    featured: true,
    features: [
      { label: 'single user', included: true },
      { label: 'no updates', included: true },
      { label: 'limited acces library', included: true },
      { label: 'lorem ipsum', included: false },
      { label: 'dolor sit amet', included: false },
    ],
  },
  {
    name: 'pro',
    price: '99$',
    icon: FaSackDollar,
    features: [
      { label: 'single user', included: true },
      { label: 'no updates', included: true },
      { label: 'limited acces library', included: false },
      { label: 'lorem ipsum', included: false },
      { label: 'dolor sit amet', included: false },
    ],
  },
]

const LOREM_TESTIMONIAL =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, labore dolore laborum dolorum culpa ducimus ipsam quo, veniam animi pariatur facilis tempora incidunt nostrum quisquam, cum quasi laudantium? Voluptates, sequi? Possimus ipsa, excepturi praesentium dolore quae placeat voluptatem doloremque deserunt?'

export const testimonials: Testimonial[] = [
  { name: 'ahmad errami', avatar: images.profiles[0], fullStars: 3, text: LOREM_TESTIMONIAL },
  { name: 'john wick', avatar: images.profiles[1], fullStars: 3, text: LOREM_TESTIMONIAL },
  { name: 'saul goodman', avatar: images.profiles[2], fullStars: 5, text: LOREM_TESTIMONIAL },
  { name: 'adam smith', avatar: images.profiles[3], fullStars: 5, text: LOREM_TESTIMONIAL },
]

export const teamMembers: TeamMember[] = [
  { name: 'ahmad errami', role: 'back-end developer', image: images.team.team2 },
  { name: 'bodih dgmas', role: 'front-end developer', image: images.team.team4 },
  { name: 'john smith', role: 'web designer', image: images.team.team1 },
  { name: 'satoshi nakamoto', role: 'CEO founder', image: images.team.team3 },
]

const LOREM_BLOG =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo earum id assumenda ad neque recusandae, quasi deleniti voluptatum eos vel quas molestias?'

export const blogPosts: BlogPost[] = [
  {
    image: images.blog[0],
    author: 'admin',
    date: '27/05/2024',
    category: 'web dev',
    title: 'how to learn javascript easily with this method',
    excerpt: LOREM_BLOG,
  },
  {
    image: images.blog[1],
    author: 'admin',
    date: '27/03/2024',
    category: 'web dev',
    title: 'why you should learn this new javascript framework',
    excerpt: LOREM_BLOG,
  },
  {
    image: images.blog[2],
    author: 'admin',
    date: '20/04/2024',
    category: 'marketing',
    title: 'What is digital marketing and why is important ?',
    excerpt: LOREM_BLOG,
  },
]

const LOREM_FAQ =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ullam earum itaque, quas labore illo eligendi iure asperiores, modi veniam molestiae vero quasi. Ex, alias modi voluptates aspernatur consequuntur facere? '

export const faqEntries: FaqEntry[] = [
  { question: 'On-site and remote IT support?', answer: LOREM_FAQ },
  { question: 'what is techida ?', answer: LOREM_FAQ },
  { question: 'Is There Any Updates In The Future?', answer: LOREM_FAQ },
  { question: 'How Much For The Service?', answer: LOREM_FAQ },
]

export const contactDetails: ContactDetail[] = [
  { icon: FaEnvelope, text: 'example@example.com', href: '#' },
  { icon: FaSquarePhone, text: '+123 456 6789', href: '#' },
  { icon: FaLocationDot, text: 'A108 Adam Street, New York, NY 535022' },
  { icon: FaSquareInstagram, text: 'techida-company', href: '#' },
]

export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8886883188484!2d-0.1445943230999197!3d51.51525811012886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2zT3hmb3JkIFN0LCBMb25kb24sIOCmr-CngeCmleCnjeCmpOCmsOCmvuCmnOCnjeCmrw!5e0!3m2!1sbn!2sbd!4v1737997335285!5m2!1sbn!2sbd'
