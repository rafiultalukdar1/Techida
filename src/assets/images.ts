import logo from './images/logo.png'
import heroImage from './images/hero-image.png'
import dealImage from './images/image.png'
import experienceImage from './images/image2.png'
import faqImage from './images/faq-image.png'
import portfolio1 from './images/portfolio-image.png'
import portfolio2 from './images/portfolio-image2.png'
import portfolio3 from './images/portfolio-image3.png'
import portfolio4 from './images/portfolio-image4.png'
import portfolio5 from './images/portfolio-image5.png'
import portfolio6 from './images/portfolio-image6.png'
import slider1 from './images/slider-image1.png'
import slider2 from './images/slider-image2.png'
import slider3 from './images/slider-image3.png'
import slider4 from './images/slider-image4.png'
import slider5 from './images/slider-image5.png'
import slider6 from './images/slider-image6.png'
import slider7 from './images/slider-image7.png'
import profile1 from './images/testimonials-profile-image.jpg'
import profile2 from './images/testimonials-profile-image2.jpg'
import profile3 from './images/testimonials-profile-image3.jpg'
import profile4 from './images/testimonials-profile-image4.jpg'
import team1 from './images/team-image.jpg'
import team2 from './images/team-image2.jpg'
import team3 from './images/team-image3.jpg'
import team4 from './images/team-image4.jpg'
import blog1 from './images/blog-image.jpg'
import blog2 from './images/blog-image2.jpg'
import blog3 from './images/blog-image3.jpg'

export const images = {
  logo,
  heroImage,
  dealImage,
  experienceImage,
  faqImage,
  portfolio: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6],
  sliders: [slider1, slider2, slider3, slider4, slider5, slider6, slider7],
  profiles: [profile1, profile2, profile3, profile4],
  team: { team1, team2, team3, team4 },
  blog: [blog1, blog2, blog3],
} as const
