import { useEffect, useState } from 'react'
import { motion, animate } from 'framer-motion'

export default function StatCounter({ value, suffix = '', decimals = 0, label, delay = 0 }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.8,
      delay,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [value, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative overflow-hidden rounded-2xl border border-[#1b8ef5]/30 bg-white/[0.02] light:bg-white p-6 text-center shadow-[0_0_30px_rgba(27,142,245,0.1)] light:shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
    >
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 rounded-2xl border border-[#1b8ef5]/50"
      />
      <div className="text-3xl font-extrabold text-white light:text-[#0a0f1e] sm:text-4xl">
        {display.toFixed(decimals)}
        <span className="text-[#1b8ef5]">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-gray-400 light:text-gray-600">{label}</div>
    </motion.div>
  )
}
