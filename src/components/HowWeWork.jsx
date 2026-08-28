import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Find New Ideas',
    description: 'Mining insights from raw data with years of experience.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    ),
  },
  {
    title: 'Diagnosis & Analysis',
    description: 'Deep analysis of your requirements and infrastructure.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    ),
  },
  {
    title: 'Implement & Result',
    description: 'Delivering results with precision and expertise.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
]

export default function HowWeWork() {
  return (
    <section className="relative border-t border-white/10 light:border-[#e2e8f0] bg-[#07080f] light:bg-[#f0f4ff] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">How We Work</h2>
          <p className="mt-4 text-gray-400 light:text-gray-600">
            A proven process that turns requirements into shipped, reliable software.
          </p>
        </motion.div>

        <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[#1b8ef5]/40 to-transparent md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.2 + 0.15 }}
                className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#1b8ef5]/40 bg-[#07080f] light:bg-[#f0f4ff] text-[#1b8ef5] shadow-[0_0_30px_rgba(27,142,245,0.35)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
                  {step.icon}
                </svg>
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#1b8ef5] text-xs font-bold text-white">
                  {i + 1}
                </span>
              </motion.div>
              <h3 className="text-xl font-semibold text-white light:text-[#0a0f1e]">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400 light:text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
