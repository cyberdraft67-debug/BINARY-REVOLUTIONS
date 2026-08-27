import { useScroll, useTransform } from 'framer-motion'

export default function useParallax(speed = 0.3) {
  const { scrollY } = useScroll()
  return useTransform(scrollY, (v) => v * speed)
}
