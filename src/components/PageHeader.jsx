import { motion } from 'framer-motion'
import useParallax from '../hooks/useParallax'

export default function PageHeader({ eyebrow, title, subtitle }) {
  const dotsY = useParallax(0.05)
  const glowY = useParallax(0.18)

  return (
    <section className="relative overflow-hidden border-b border-white/10 light:border-[#e2e8f0] bg-[#07080f] light:bg-[#f0f4ff] py-24">
      <motion.div
        style={{ y: dotsY }}
        className="dot-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_100%)]"
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b8ef5] opacity-20 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1b8ef5]/40 bg-[#1b8ef5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#93c5fd] light:text-[#1d4ed8]"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gradient text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-gray-400 light:text-gray-600"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
