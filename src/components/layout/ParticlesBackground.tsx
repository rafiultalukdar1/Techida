import type { Engine } from '@tsparticles/engine'
import { Particles, ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { particlesOptions } from '../../data/particlesOptions'

// Must stay a stable reference for ParticlesProvider.
const registerParticles = async (engine: Engine): Promise<void> => {
  await loadSlim(engine)
}

export function ParticlesBackground() {
  return (
    <ParticlesProvider init={registerParticles}>
      <Particles
        id="particles-container"
        options={particlesOptions}
        className="absolute left-0 top-0 z-[1] h-full w-full"
      />
    </ParticlesProvider>
  )
}
