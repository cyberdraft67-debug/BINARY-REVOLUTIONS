import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function useTilt(strength = 10) {
  const ref = useRef(null)
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [strength, -strength]), {
    stiffness: 300,
    damping: 25,
  })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-strength, strength]), {
    stiffness: 300,
    damping: 25,
  })

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onMouseLeave = () => {
    px.set(0)
    py.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}
