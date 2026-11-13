import { Suspense, lazy, useState } from 'react'
import { images } from '../../assets/images'
import { navItems } from '../../data/navigation'
import { useScrollPast } from '../../hooks/useScrollPast'
import { useTheme } from '../../hooks/useTheme'
import { Container } from '../ui/Container'
import { RippleButton } from '../ui/RippleButton'
import { DarkModeButton } from './DarkModeButton'
import { DesktopNav } from './DesktopNav'
import { HamburgerButton } from './HamburgerButton'
import { Hero } from './Hero'
import { MobileSidebar } from './MobileSidebar'

// The particle engine is large and purely decorative, so it loads after the first paint.
const ParticlesBackground = lazy(() =>
  import('./ParticlesBackground').then((module) => ({ default: module.ParticlesBackground })),
)

export function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const isSticky = useScrollPast(110)

  return (
    <header className="relative h-screen md:max-lg:h-[115vh]">
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <div className="relative z-[2]">
        <div
          className={`flex min-h-[80px] items-center transition-all duration-400 max-lg:bg-panel ${
            isSticky ? 'fixed top-0 left-0 z-[2] w-full animate-slide-down bg-panel' : ''
          }`}
        >
          <Container>
            <div className="flex items-center justify-between">
              <a href="#">
                <img src={images.logo} alt="Techida" className="w-[130px]" />
              </a>
              <DesktopNav items={navItems} />
              <div className="flex items-center max-md:hidden">
                <RippleButton href="#">join now</RippleButton>
                <DarkModeButton isDark={isDark} onToggle={toggleTheme} />
              </div>
              <HamburgerButton isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen((open) => !open)} />
            </div>
          </Container>
        </div>
        <Hero />
      </div>
      <MobileSidebar items={navItems} isOpen={isSidebarOpen} isDark={isDark} onToggleTheme={toggleTheme} />
    </header>
  )
}
