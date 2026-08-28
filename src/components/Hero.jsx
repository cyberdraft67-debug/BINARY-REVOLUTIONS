import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlowButton from './GlowButton'
import AnimatedGradientBackground from './AnimatedGradientBackground'
import TerminalWindow from './TerminalWindow'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#07080f] light:bg-[#f0f4ff] lg:h-[calc(100dvh-68px)] lg:min-h-[640px]">
      {/* Subtle animated gradient background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <AnimatedGradientBackground />
      </div>

      {/* Subtle perspective grid floor, fading into the distance */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[55%] overflow-hidden"
        style={{ perspective: '600px' }}
      >
        <div
          className="perspective-grid absolute inset-x-[-50%] bottom-0 h-[200%] w-[200%]"
          style={{
            transform: 'rotateX(75deg)',
            transformOrigin: 'bottom',
            maskImage: 'linear-gradient(to top, black 0%, transparent 75%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 75%)',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 py-20 lg:h-full lg:justify-center lg:py-0">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left: badge, headline, subtext, buttons */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1b8ef5]/40 bg-[#1b8ef5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#93c5fd] light:text-[#1d4ed8]"
            >
              Digital Agency
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="text-gradient text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Enterprise Software Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="mx-auto mt-7 max-w-xl text-lg text-gray-300 light:text-gray-600 sm:text-xl lg:mx-0"
            >
              Web Solutions. Mobile Apps. IT Consultancy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link to="/contact">
                <GlowButton className="px-8 py-3.5 text-sm">Let's Talk</GlowButton>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: 'rgba(27,142,245,1)' }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full border border-white/20 light:border-black/15 px-8 py-3.5 text-sm font-semibold text-white light:text-[#0a0f1e] transition hover:bg-white/5 light:hover:bg-black/5"
                >
                  View Projects
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right: animated terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <TerminalWindow />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
