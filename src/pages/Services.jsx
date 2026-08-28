import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import useTilt from '../hooks/useTilt'

const LaserFlow = lazy(() => import('../components/LaserFlow'))

const services = [
  {
    title: 'Web Solution',
    description:
      'Technology on its own cannot deem a website successful. It takes skilled and experienced web developers to structure a sound website that functions smoothly.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
      />
    ),
  },
  {
    title: 'Mobile Solution',
    description:
      'Our online applications provide tailored eCommerce solutions allowing rapid development and deployment of your requirements.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
      />
    ),
  },
  {
    title: 'IT Consultancy',
    description:
      'Outsource your IT infrastructure and we will manage, implement, deploy and administer your entire IT environment.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
      />
    ),
  },
  {
    title: 'Enterprise Software Development',
    description:
      'We specialize in building complex enterprise-grade software solutions tailored to your business needs.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    ),
  },
  {
    title: 'Offshore Software Development',
    description:
      'We provide reliable offshore development services with a team of skilled professionals.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    ),
  },
]

function ServiceCard({ service, index }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(8)

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
      whileHover={{ y: -6 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative overflow-hidden rounded-2xl bg-white/[0.02] light:bg-white p-px shadow-[0_0_35px_rgba(27,142,245,0.14)] light:shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
    >
      {/* Static border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 light:border-[#e2e8f0] transition-opacity duration-500 group-hover:opacity-0" />

      {/* Animated rotating gradient border, revealed on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, #1b8ef5 15%, transparent 30%)',
          }}
        />
      </div>

      {/* Outer glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[#1b8ef5]/20" />

      <div
        style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
        className="relative z-10 h-full rounded-[15px] bg-[#07080f] light:bg-white p-8"
      >
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#1b8ef5]/40 bg-[#1b8ef5]/10 text-[#1b8ef5]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
            {service.icon}
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white light:text-[#0a0f1e]">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400 light:text-gray-600">{service.description}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What We Do"
        subtitle="End-to-end enterprise software, from strategy to deployment."
      />

      <section
        className="relative overflow-hidden bg-[#07080f] light:bg-[#f0f4ff] py-24"
        style={{ perspective: 1200 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            {/* Spotlight beam dropping from above, landing centered over the cards */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[300px]"
              style={{ transform: 'rotate(180deg)' }}
            >
              <Suspense fallback={null}>
                <LaserFlow
                  color="#1b8ef5"
                  horizontalBeamOffset={0.0}
                  verticalBeamOffset={-0.5}
                  mouseTiltStrength={0}
                  wispIntensity={5}
                  fogIntensity={0.6}
                  verticalSizing={2.0}
                  horizontalSizing={0.75}
                />
              </Suspense>
            </div>

            {/* Bright beam shaft, glowing brightest where it lands on the cards */}
            <motion.div
              animate={{ opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-1/2 top-0 z-0 h-[160px] w-2 -translate-x-1/2 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, rgba(27,142,245,0) 0%, rgba(27,142,245,0.5) 45%, #93c5fd 100%)',
                boxShadow: '0 0 40px 10px rgba(27,142,245,0.5), 0 0 90px 30px rgba(27,142,245,0.3)',
              }}
            />

            {/* Radial glow where the beam lands, spreading across the cards */}
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-1/2 top-[150px] z-0 h-[320px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b8ef5] blur-[120px]"
            />

            <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
