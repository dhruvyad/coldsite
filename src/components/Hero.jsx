import useInView from '../hooks/useInView'

export default function Hero() {
  const [headlineRef, headlineInView] = useInView()
  const [subtextRef, subtextInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  const fadeUp = (isVisible, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  })

  return (
    <section className="relative pt-32 pb-28 md:pt-44 md:pb-40 px-6 overflow-hidden">
      {/* Emerald radial glow — left side */}
      <div className="hero-glow" />

      {/* Dot grid pattern — right side */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, #3f3f46 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage:
            'linear-gradient(to left, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 40%, transparent 65%)',
          WebkitMaskImage:
            'linear-gradient(to left, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 40%, transparent 65%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-6"
          style={fadeUp(headlineInView)}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
          AI Automation Agency
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
          style={fadeUp(headlineInView)}
        >
          Automate the
          <br />
          <span className="text-emerald">busywork.</span>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="text-lg md:text-xl text-zinc-400/90 max-w-lg leading-relaxed mb-10"
          style={fadeUp(subtextInView, 150)}
        >
          We build AI systems that handle lead routing, data entry, and customer
          support — so your team can do actual work.
        </p>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="https://cal.com/dhruvy/15min"
          className="inline-block bg-emerald hover:bg-emerald-dark text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-colors"
          style={fadeUp(ctaInView, 300)}
        >
          Book a Call
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-zinc-600 hover:text-zinc-300 transition-colors"
        aria-label="Scroll to services"
      >
        <svg
          className="w-4 h-4 animate-bounce-gentle"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  )
}
