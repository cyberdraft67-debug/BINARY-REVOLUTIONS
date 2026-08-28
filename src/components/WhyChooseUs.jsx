import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const StatRing3D = lazy(() => import('./StatRing3D'))

const stats = [
  { label: 'Frontend', percentage: 60 },
  { label: 'Backend', percentage: 85 },
  { label: 'Mobile Development', percentage: 70 },
  { label: 'Web Development', percentage: 90 },
]

function RingFallback({ label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[110px] w-[110px] rounded-full border border-[#1a2440] light:border-[#e2e8f0]" />
      <span className="mt-4 text-center text-sm font-medium text-white light:text-[#0a0f1e]">{label}</span>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#07080f] light:bg-[#f0f4ff] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Discover Revenue Growth for Your Business
          </h2>
          <p className="mt-4 text-gray-400 light:text-gray-600">
            Years of engineering discipline, distilled into measurable delivery capability.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Suspense key={stat.label} fallback={<RingFallback label={stat.label} />}>
              <StatRing3D percentage={stat.percentage} label={stat.label} delay={i * 0.15} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  )
}
