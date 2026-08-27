import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlowButton from './GlowButton'
import useParallax from '../hooks/useParallax'

const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero() {
  const sceneY = useParallax(0.22)

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100dvh - 68px)',
        minHeight: 640,
        overflow: 'hidden',
        backgroundColor: '#07080f',
      }}
    >
      {/* Floating 3D particles background */}
      <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', y: sceneY }}>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </motion.div>

      {/* Hero text on top */}
      <div
        style={{ position: 'relative', zIndex: 10 }}
        className="flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1b8ef5]/40 bg-[#1b8ef5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#93c5fd]"
        >
          Digital Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-gradient max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          Enterprise Software Development
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="mt-7 max-w-xl text-lg text-gray-300 sm:text-xl"
        >
          Web Solutions. Mobile Apps. IT Consultancy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link to="/contact">
            <GlowButton className="px-8 py-3.5 text-sm">Let's Talk</GlowButton>
          </Link>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgba(27,142,245,1)' }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              View Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
