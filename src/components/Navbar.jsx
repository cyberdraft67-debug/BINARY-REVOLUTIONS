import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlowButton from './GlowButton'
import Logo from './Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[#07080f]/60 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300 ${
        scrolled ? 'border-white/10' : 'border-transparent'
      }`}
    >
      {/* Glass sheen highlight along the top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `relative text-sm transition-colors group ${
                  isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-px bg-[#1b8ef5] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="hidden md:block">
          <GlowButton className="px-5 py-2 text-sm">Let's Talk</GlowButton>
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#07080f]/95 backdrop-blur-lg border-b border-white/10 px-6 pb-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="w-full rounded-full bg-[#1b8ef5] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_15px_rgba(27,142,245,0.5)]">
              Let's Talk
            </button>
          </Link>
        </motion.div>
      )}
    </header>
  )
}
