import { useTheme } from '../context/ThemeContext'

const Logo = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  // Matches whatever surface this logo sits on (navbar/footer), so the
  // notch cutouts keep reading as transparent rather than a dark blob.
  const notchFill = isLight ? '#ffffff' : '#07080F'
  const wordmarkColor = isLight ? '#0a0f1e' : '#ffffff'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* B icon mark */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1B8EF5" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        {/* B shape - bold geometric */}
        <path d="M7 5 L7 35 L24 35 C30 35 35 31 35 25 C35 21 33 18 29 17 C32 15 34 12 34 8 C34 5 31 4 27 4 L7 5Z" fill="none" />
        <rect x="7" y="5" width="4" height="30" fill="url(#bgrad)" />
        <path d="M11 5 L25 5 C28 5 30 7 30 10 C30 13 28 15 25 15 L11 15Z" fill="url(#bgrad)" />
        <path d="M11 17 L26 17 C30 17 32 19 32 23 C32 27 29 29 26 29 L11 29Z" fill="url(#bgrad)" />
        {/* notch cutout for B middle */}
        <rect x="15" y="11" width="10" height="4" fill={notchFill} />
        <rect x="15" y="21" width="11" height="4" fill={notchFill} />
      </svg>

      {/* Vertical divider */}
      <div
        style={{
          width: '1px',
          height: '34px',
          background: 'linear-gradient(to bottom, transparent, #1B8EF5, transparent)',
        }}
      />

      {/* Text lockup */}
      <div style={{ lineHeight: 1.15 }}>
        <div
          style={{
            color: wordmarkColor,
            fontWeight: '800',
            fontSize: '17px',
            letterSpacing: '2px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          BINARY
        </div>
        <div
          style={{
            color: '#1B8EF5',
            fontWeight: '500',
            fontSize: '9px',
            letterSpacing: '5px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          REVOLUTIONS
        </div>
      </div>
    </div>
  )
}

export default Logo
