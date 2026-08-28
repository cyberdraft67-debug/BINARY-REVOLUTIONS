export default function AnimatedGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#07080f] light:bg-[#f0f4ff]">
      <div
        className="absolute -left-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-[#1b3a63] light:bg-[#a8c5f5] opacity-25 light:opacity-40 blur-[120px]"
        style={{ animation: 'drift-a 24s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[70%] w-[70%] rounded-full bg-[#0c4a6e] light:bg-[#bcd6f7] opacity-20 light:opacity-35 blur-[130px]"
        style={{ animation: 'drift-b 28s ease-in-out infinite' }}
      />
      <div
        className="absolute left-1/3 top-1/3 h-[55%] w-[55%] rounded-full bg-[#1e3a8a] light:bg-[#cfe0fb] opacity-[0.12] light:opacity-30 blur-[140px]"
        style={{ animation: 'drift-a 32s ease-in-out infinite reverse' }}
      />
    </div>
  )
}
