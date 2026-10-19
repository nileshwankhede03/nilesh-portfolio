import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const greetings = [
  { word: 'Hello', language: 'ENGLISH' },
  { word: 'नमस्कार', language: 'MARATHI' },
  { word: 'नमस्ते', language: 'HINDI' },
  { word: 'Hola', language: 'SPANISH' },
  { word: 'Bonjour', language: 'FRENCH' },
  { word: 'Ciao', language: 'ITALIAN' },
  { word: 'こんにちは', language: 'JAPANESE' },
]

const INTRO_DURATION = 3300

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [greetingIndex, setGreetingIndex] = useState(0)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const startTime = Date.now()
    let finishTimer

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTime
      const nextProgress = Math.min(100, Math.round((elapsed / INTRO_DURATION) * 100))
      const nextGreeting = Math.min(
        greetings.length - 1,
        Math.floor((elapsed / INTRO_DURATION) * greetings.length),
      )

      setProgress(nextProgress)
      setGreetingIndex(nextGreeting)

      if (nextProgress >= 100) {
        window.clearInterval(interval)
        finishTimer = window.setTimeout(onComplete, 250)
      }
    }, 32)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(finishTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [onComplete])

  const greeting = greetings[greetingIndex]

  return (
    <motion.div
      className="intro-loader"
      role="status"
      aria-label="Loading Nilesh Wankhede's portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="intro-grain" aria-hidden="true" />
      <div className="intro-ambient intro-ambient-one" aria-hidden="true" />
      <div className="intro-ambient intro-ambient-two" aria-hidden="true" />

      <header className="intro-topline">
        <div className="intro-brand">
          <span className="intro-brand-mark">NW</span>
          <span>NILESH WANKHEDE <i>·</i> PORTFOLIO</span>
        </div>
        <span className="intro-location">PUNE, INDIA <ArrowUpRight size={13} /></span>
      </header>

      <main className="intro-center">
        <div className="intro-eyebrow"><span className="intro-live-dot" /> A PERSONAL INTRODUCTION <span className="intro-divider">/</span> 2026</div>
        <div className="intro-greeting-window" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="intro-greeting"
              key={greeting.word}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="intro-language">{greeting.language} <span>— 0{greetingIndex + 1} / 07</span></span>
              <h1>{greeting.word}<span className="intro-period">.</span></h1>
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="intro-subline"><span>नमस्कार</span> — Namaskar from Maharashtra. I’m glad you’re here.</p>
      </main>

      <footer className="intro-footer">
        <div className="intro-progress-meta"><span>PREPARING YOUR EXPERIENCE</span><span>{String(progress).padStart(2, '0')}<i>%</i></span></div>
        <div className="intro-progress-track"><motion.span animate={{ width: `${progress}%` }} transition={{ duration: 0.12, ease: 'linear' }} /></div>
        <div className="intro-bottomline">
          <span>REACT <i>×</i> THREE.JS <i>×</i> MERN</span>
          <button type="button" onClick={onComplete}>SKIP INTRO <ArrowUpRight size={13} /></button>
        </div>
      </footer>
    </motion.div>
  )
}
