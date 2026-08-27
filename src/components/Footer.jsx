import { Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
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
    label: 'Dribbble',
    path: 'M12 2a10 10 0 100 20 10 10 0 000-20zm6.53 4.61a8.34 8.34 0 011.86 5.19c-.27-.06-2.97-.6-5.7-.26-.06-.14-.11-.29-.17-.44-.17-.4-.36-.8-.55-1.19 3.02-1.23 4.4-3 4.56-3.3zM12 3.68a8.3 8.3 0 015.55 2.13c-.14.26-1.34 2.14-4.27 3.24-1.33-2.45-2.8-4.46-3.03-4.77.57-.4 1.15-.6 1.75-.6zM8.5 4.3c.22.29 1.66 2.28 3.01 4.68-3.79 1.01-7.14 1-7.5.99a8.35 8.35 0 014.49-5.67zM3.68 12v-.28c.35 0 4.29.06 8.34-1.15.23.45.45.9.65 1.35-.11.03-.21.07-.32.1-4.19 1.35-6.42 5.06-6.6 5.36A8.32 8.32 0 013.68 12zm8.32 8.32a8.28 8.28 0 01-5.16-1.79c.14-.29 1.79-3.5 6.36-5.11l.09-.03c1.13 3.09 1.6 5.69 1.71 6.4a8.3 8.3 0 01-3 .53zm4.79-1.29c-.08-.47-.51-2.9-1.55-5.94 2.58-.41 4.83.26 5.12.36a8.35 8.35 0 01-3.57 5.58z',
  },
  {
    label: 'LinkedIn',
    path: 'M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07080f]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Link to="/">
              <Logo />
            </Link>
            <a
              href="mailto:info@binaryrevolutions.com"
              className="mt-4 inline-block text-sm text-gray-400 transition-colors hover:text-[#1b8ef5]"
            >
              info@binaryrevolutions.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Links</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
              {links.map((link) => (
                <Link key={link.label} to={link.to} className="w-fit transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Follow Us</h4>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-[#1b8ef5]/50 hover:text-[#1b8ef5]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">Copyrights © 2019 Binary Revolutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
