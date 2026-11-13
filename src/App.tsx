import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { Blog } from './components/sections/Blog'
import { Choose } from './components/sections/Choose'
import { Contact } from './components/sections/Contact'
import { Counter } from './components/sections/Counter'
import { Deal } from './components/sections/Deal'
import { Experience } from './components/sections/Experience'
import { Faq } from './components/sections/Faq'
import { LogoSlider } from './components/sections/LogoSlider'
import { Portfolio } from './components/sections/Portfolio'
import { Pricing } from './components/sections/Pricing'
import { Services } from './components/sections/Services'
import { Team } from './components/sections/Team'
import { Testimonials } from './components/sections/Testimonials'

export default function App() {
  return (
    // overflow-x-clip stops the off-screen start positions of the slide-in animations from creating a horizontal scrollbar.
    <div className="overflow-x-clip">
      <Header />
      <main>
        <Services />
        <Deal />
        <Experience />
        <Counter />
        <Choose />
        <Portfolio />
        <LogoSlider />
        <Pricing />
        <Testimonials />
        <Team />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
