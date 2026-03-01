import useInView from '../hooks/useInView'

const stats = [
  { value: '50+', label: 'Automations Shipped' },
  { value: '12,000+', label: 'Hours Saved' },
  { value: '98%', label: 'Client Retention' },
]

export default function Stats() {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      className="border-y border-white/[0.06] py-16 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
        {stats.map((stat, i) => (
          <div key={stat.label} className="contents">
            {i > 0 && (
              <div className="hidden md:block w-px h-12 bg-white/[0.06]" />
            )}
            <div
              className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="text-5xl md:text-6xl font-bold tracking-tight text-emerald">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
