import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import SkillBar from '../components/SkillBar'

const LaserFlow = lazy(() => import('../components/LaserFlow'))

const facts = [
  { label: 'Founded', value: '2012' },
  { label: 'CEO', value: 'Muhammad Waqar' },
]

const skills = [
  { label: 'Frontend', percentage: 60 },
  { label: 'Backend', percentage: 85 },
  { label: 'Mobile Development', percentage: 70 },
  { label: 'Web Development', percentage: 90 },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="Who We Are"
        subtitle="An IT services provider with the skills and expertise to facilitate complex business solutions."
      />

      <section className="relative overflow-hidden bg-[#07080f] light:bg-[#f0f4ff] py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-400 light:text-gray-600">
              Binary Revolutions is an IT services provider with skills and expertise to facilitate
              complex business solutions. We commenced with a small team in 2012 and grew rapidly in
              profits, intellectual capital, and market access.
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-400 light:text-gray-600">
              We believe in delivering a personal, passionate and tailored service to each and every
              one of our clients.
            </p>
          </motion.div>

          <div className="relative">
            {/* Spotlight beam dropping from above onto the At a Glance card */}
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
                  horizontalSizing={0.8}
                />
              </Suspense>
            </div>

            {/* Bright beam shaft */}
            <motion.div
              animate={{ opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-1/2 top-0 z-0 h-[170px] w-2 -translate-x-1/2 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, rgba(27,142,245,0) 0%, rgba(27,142,245,0.5) 45%, #93c5fd 100%)',
                boxShadow: '0 0 40px 10px rgba(27,142,245,0.5), 0 0 90px 30px rgba(27,142,245,0.3)',
              }}
            />

            {/* Radial glow where the beam lands, lighting up the card edges */}
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-1/2 top-[160px] z-0 h-[260px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b8ef5] blur-[110px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glance-card relative z-10 mt-16 rounded-2xl bg-white/[0.02] light:bg-white p-8"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                At a Glance
              </h3>
              <dl className="mt-6 divide-y divide-white/10 light:divide-[#e2e8f0]">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                    <dt className="text-sm text-gray-400 light:text-gray-600">{fact.label}</dt>
                    <dd className="text-base font-semibold text-white light:text-[#0a0f1e]">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 light:border-[#e2e8f0] bg-[#07080f] light:bg-[#f0f4ff] py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Expertise</h2>
            <p className="mt-4 text-gray-400 light:text-gray-600">Where we invest our engineering depth.</p>
          </motion.div>

          <div className="mt-12 space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <SkillBar label={skill.label} percentage={skill.percentage} delay={i * 0.1} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
