import useTypewriter from '../hooks/useTypewriter'

const LINES = [
  'Building enterprise solutions',
  'Web ✓',
  'Mobile ✓',
  'IT Infrastructure ✓',
  'Ready to deploy...',
]

export default function TerminalWindow() {
  const { completedLines, currentLine } = useTypewriter(LINES)

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-[#1b8ef5]/25 bg-[#0a0f1e] shadow-[0_0_50px_rgba(27,142,245,0.15)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-gray-500">terminal</span>
      </div>
      <div className="min-h-[220px] p-6 font-mono text-sm leading-relaxed">
        {completedLines.map((line, i) => (
          <div key={i} className="text-[#93c5fd]">
            <span className="mr-2 text-[#1b8ef5]">&gt;</span>
            {line}
          </div>
        ))}
        <div className="text-[#93c5fd]">
          <span className="mr-2 text-[#1b8ef5]">&gt;</span>
          {currentLine}
          <span className="cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-[#1b8ef5] align-middle" />
        </div>
      </div>
    </div>
  )
}
