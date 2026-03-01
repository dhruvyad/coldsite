import useInView from '../hooks/useInView'

export default function CTA() {
  const [ref, isInView] = useInView()

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      {/* Radial glow background */}
      <div className="cta-glow" aria-hidden="true" />

      <div
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ease-out ${
          isInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Ready to stop doing it manually?
        </h2>
        <p className="text-zinc-400 text-lg mb-8">
          Most automations go live within two weeks.
        </p>
        <a
          href="mailto:hello@noclickautomation.com"
          className="inline-block bg-emerald hover:bg-emerald-dark text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
        >
          Book a Call
        </a>
      </div>
    </section>
  )
}
