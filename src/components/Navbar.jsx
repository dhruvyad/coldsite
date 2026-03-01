import { useState, useEffect } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'Process' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b transition-colors duration-300 ${
          scrolled ? 'border-white/[0.1]' : 'border-white/[0.06]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Wordmark */}
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            NoClick
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald hover:bg-emerald-dark text-white px-5 py-2 rounded-lg font-medium transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-lg flex flex-col">
          {/* Header row with close button */}
          <div className="flex items-center justify-between px-6 py-4">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white"
              onClick={() => setMobileOpen(false)}
            >
              NoClick
            </a>
            <button
              className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Nav links stacked */}
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-medium text-zinc-300 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald hover:bg-emerald-dark text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-colors mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </>
  )
}
