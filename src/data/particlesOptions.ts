import type { ISourceOptions } from '@tsparticles/engine'

/** Same look as the original particles.js configuration. */
export const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  detectRetina: true,
  particles: {
    number: { value: 80, density: { enable: true, width: 1000, height: 800 } },
    color: { value: '#C1C0BF' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: { min: 0.5, max: 3 } },
    links: { enable: true, distance: 150, color: '#C1C0BF', opacity: 0.2, width: 2 },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: false,
      straight: false,
      outModes: { default: 'out' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: true, mode: 'push' },
    },
    modes: { push: { quantity: 4 } },
  },
}
