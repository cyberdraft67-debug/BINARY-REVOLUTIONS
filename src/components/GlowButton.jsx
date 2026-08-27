import { motion } from 'framer-motion'

const breathe = [0.4, 0, 0.2, 1]

export default function GlowButton({ children, className = '', as: Component = motion.button, ...props }) {
  return (
    <Component
      animate={{
        boxShadow: [
          '0 0 14px rgba(27,142,245,0.45), 0 0 0px rgba(27,142,245,0)',
          '0 0 30px rgba(27,142,245,0.85), 0 0 54px rgba(27,142,245,0.35)',
          '0 0 14px rgba(27,142,245,0.45), 0 0 0px rgba(27,142,245,0)',
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: breathe }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full bg-[#1b8ef5] font-semibold text-white transition ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
