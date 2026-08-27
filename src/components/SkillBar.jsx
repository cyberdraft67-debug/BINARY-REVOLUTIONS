import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

export default function SkillBar({ label, percentage, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, percentage, {
      duration: 1.2,
      delay,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, percentage, delay])

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-white">{label}</span>
        <span className="font-semibold text-[#1b8ef5]">{display}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #1b8ef5, #0ea5e9)' }}
        />
      </div>
    </div>
  )
}
