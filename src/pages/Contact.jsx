import { useState } from 'react'
import { motion } from 'framer-motion'
import StatCounter from '../components/StatCounter'
import AnimatedGradientBackground from '../components/AnimatedGradientBackground'
import { useTheme } from '../context/ThemeContext'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkjwdygy'
const EMAIL = 'info@binaryrevolutions.com'

const inputClass =
  'w-full rounded-lg border border-white/15 light:border-[#e2e8f0] bg-white/[0.03] light:bg-white text-white light:text-[#0a0f1e] px-4 py-3 text-sm placeholder:text-gray-500 light:placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#1b8ef5] focus:shadow-[0_0_20px_rgba(27,142,245,0.35)]'

const labelClass = 'mb-2 block text-sm font-medium text-gray-300 light:text-gray-600'

const stats = [
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime' },
]

const socials = [
  {
    label: 'Facebook',
    path: 'M13.5 21v-7.5h2.5l.5-3H13.5V8.25c0-.87.24-1.46 1.49-1.46H16.5V4.14C16.24 4.1 15.35 4 14.31 4 12.14 4 10.66 5.32 10.66 7.76V10.5H8.25v3h2.41V21h2.84z',
  },
  {
    label: 'Twitter',
    path: 'M22 5.92c-.66.29-1.36.49-2.1.58a3.62 3.62 0 001.6-2.02c-.71.42-1.49.72-2.32.89a3.6 3.6 0 00-6.14 3.28A10.22 10.22 0 014.1 4.9a3.6 3.6 0 001.11 4.8 3.56 3.56 0 01-1.63-.45v.05a3.6 3.6 0 002.89 3.53 3.6 3.6 0 01-1.62.06 3.6 3.6 0 003.36 2.5A7.23 7.23 0 012 16.41a10.18 10.18 0 005.52 1.62c6.62 0 10.25-5.49 10.25-10.25l-.01-.47A7.3 7.3 0 0022 5.92z',
  },
  {
    label: 'LinkedIn',
    path: 'M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z',
  },
  {
    label: 'Dribbble',
    path: 'M12 2a10 10 0 100 20 10 10 0 000-20zm6.53 4.61a8.34 8.34 0 011.86 5.19c-.27-.06-2.97-.6-5.7-.26-.06-.14-.11-.29-.17-.44-.17-.4-.36-.8-.55-1.19 3.02-1.23 4.4-3 4.56-3.3zM12 3.68a8.3 8.3 0 015.55 2.13c-.14.26-1.34 2.14-4.27 3.24-1.33-2.45-2.8-4.46-3.03-4.77.57-.4 1.15-.6 1.75-.6zM8.5 4.3c.22.29 1.66 2.28 3.01 4.68-3.79 1.01-7.14 1-7.5.99a8.35 8.35 0 014.49-5.67zM3.68 12v-.28c.35 0 4.29.06 8.34-1.15.23.45.45.9.65 1.35-.11.03-.21.07-.32.1-4.19 1.35-6.42 5.06-6.6 5.36A8.32 8.32 0 013.68 12zm8.32 8.32a8.28 8.28 0 01-5.16-1.79c.14-.29 1.79-3.5 6.36-5.11l.09-.03c1.13 3.09 1.6 5.69 1.71 6.4a8.3 8.3 0 01-3 .53zm4.79-1.29c-.08-.47-.51-2.9-1.55-5.94 2.58-.41 4.83.26 5.12.36a8.35 8.35 0 01-3.57 5.58z',
  },
]

function CopyableEmail() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <div className="flex items-center gap-3">
      <a
        href={`mailto:${EMAIL}`}
        className="text-base text-gray-300 light:text-gray-700 transition-colors hover:text-[#1b8ef5]"
      >
        {EMAIL}
      </a>
      <motion.button
        type="button"
        onClick={handleCopy}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Copy email address"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 light:border-[#e2e8f0] text-gray-400 light:text-gray-500 transition-colors hover:border-[#1b8ef5]/50 hover:text-[#1b8ef5]"
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-[#1b8ef5]">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />
          </svg>
        )}
      </motion.button>
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const optionStyle = { backgroundColor: isLight ? '#ffffff' : '#0a0f1e', color: isLight ? '#0a0f1e' : '#ffffff' }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#07080f] light:bg-[#f0f4ff] py-24">
      {/* Subtle animated gradient background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <AnimatedGradientBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals || 0}
              label={stat.label}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Two-column contact section */}
        <div className="mt-24 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white light:text-[#0a0f1e] sm:text-5xl">
              Let's Build Something Great
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-400 light:text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <div className="mt-8">
              <CopyableEmail />
            </div>

            <div className="mt-8 flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 light:border-[#e2e8f0] text-gray-400 light:text-gray-500 transition-all duration-300 hover:border-[#1b8ef5]/60 hover:text-[#1b8ef5] hover:shadow-[0_0_20px_rgba(27,142,245,0.5)]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="rounded-2xl border border-white/10 light:border-[#e2e8f0] bg-white/[0.02] light:bg-white p-8 shadow-[0_0_60px_rgba(27,142,245,0.1)] light:shadow-[0_8px_30px_rgba(15,23,42,0.08)] sm:p-10"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1b8ef5]/15 text-[#1b8ef5]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-white light:text-[#0a0f1e]">
                  Thanks! We'll be in touch within 24 hours.
                </h2>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className={inputClass}
                    style={{ colorScheme: isLight ? 'light' : 'dark' }}
                  >
                    <option value="" disabled style={optionStyle}>
                      Select a service
                    </option>
                    <option value="Web Solution" style={optionStyle}>
                      Web Solution
                    </option>
                    <option value="Mobile Solution" style={optionStyle}>
                      Mobile Solution
                    </option>
                    <option value="IT Consultancy" style={optionStyle}>
                      IT Consultancy
                    </option>
                    <option value="Enterprise Software" style={optionStyle}>
                      Enterprise Software
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className={labelClass}>
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="date" className={labelClass}>
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className={inputClass}
                    style={{ colorScheme: isLight ? 'light' : 'dark' }}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  animate={{
                    boxShadow: [
                      '0 0 14px rgba(27,142,245,0.45), 0 0 0px rgba(27,142,245,0)',
                      '0 0 30px rgba(27,142,245,0.85), 0 0 54px rgba(27,142,245,0.35)',
                      '0 0 14px rgba(27,142,245,0.45), 0 0 0px rgba(27,142,245,0)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                  className="w-full rounded-full bg-[#1b8ef5] px-6 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Your Request'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
