import { motion } from 'framer-motion'

const BINARY = 'BINARY'.split('')
const REVOLUTIONS = 'REVOLUTIONS'.split('')

const LETTER_STEP = 0.05
const BINARY_START = 0.5
const REVOLUTIONS_START = BINARY_START + BINARY.length * LETTER_STEP + 0.05

export default function SplashScreen() {
  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#000000' }}
      className="flex flex-col items-center justify-center overflow-hidden"
    >
      {/* B icon mark */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        width="64"
        height="64"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="splash-bgrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1B8EF5" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        <rect x="7" y="5" width="4" height="30" fill="url(#splash-bgrad)" />
        <path
          d="M11 5 L25 5 C28 5 30 7 30 10 C30 13 28 15 25 15 L11 15Z"
          fill="url(#splash-bgrad)"
        />
        <path
          d="M11 17 L26 17 C30 17 32 19 32 23 C32 27 29 29 26 29 L11 29Z"
          fill="url(#splash-bgrad)"
        />
        <rect x="15" y="11" width="10" height="4" fill="#000000" />
        <rect x="15" y="21" width="11" height="4" fill="#000000" />
      </motion.svg>

      {/* Typed wordmark */}
      <div className="mt-6 text-center">
        <div
          className="flex justify-center"
          style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '0.3em' }}
        >
          {BINARY.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: BINARY_START + i * LETTER_STEP }}
              style={{ color: '#ffffff' }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div
          className="mt-2 flex justify-center"
          style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '0.45em' }}
        >
          {REVOLUTIONS.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: REVOLUTIONS_START + i * LETTER_STEP }}
              style={{ color: '#1b8ef5' }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Glowing line sweep */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: 'easeOut' }}
        style={{
          transformOrigin: 'center',
          marginTop: '2.5rem',
          height: '2px',
          width: '220px',
          background: 'linear-gradient(90deg, transparent, #1b8ef5, #93c5fd, #1b8ef5, transparent)',
          boxShadow: '0 0 20px 4px rgba(27,142,245,0.8)',
        }}
      />
    </motion.div>
  )
}
