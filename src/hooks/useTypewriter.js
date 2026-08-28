import { useEffect, useState } from 'react'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default function useTypewriter(lines, { charDelay = 35, lineDelay = 450, restartDelay = 2600 } = {}) {
  const [completedLines, setCompletedLines] = useState([])
  const [currentLine, setCurrentLine] = useState('')

  useEffect(() => {
    let cancelled = false

    async function run() {
      while (!cancelled) {
        setCompletedLines([])
        setCurrentLine('')

        for (const line of lines) {
          let acc = ''
          for (const char of line) {
            if (cancelled) return
            acc += char
            setCurrentLine(acc)
            await sleep(charDelay)
          }
          if (cancelled) return
          setCompletedLines((prev) => [...prev, line])
          setCurrentLine('')
          await sleep(lineDelay)
        }

        if (cancelled) return
        await sleep(restartDelay)
      }
    }

    run()
    return () => {
      cancelled = true
    }
    // Intentionally run once: `lines` is the terminal's static script, not
    // expected to change after mount. Re-running on every render (e.g. if a
    // caller passes an inline array literal) would restart the loop endlessly.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { completedLines, currentLine }
}
