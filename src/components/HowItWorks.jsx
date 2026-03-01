import useInView from '../hooks/useInView'

const steps = [
  {
    num: '01',
    title: 'You tell us what sucks',
    desc: 'A 30-minute call. Walk us through the manual stuff eating your time.',
  },
  {
    num: '02',
    title: 'We build it',
    desc: 'Custom automation, tested with your real data. Usually live in two weeks.',
  },
  {
    num: '03',
    title: 'You stop thinking about it',
    desc: 'It runs. We monitor. You get your hours back.',
  },
]

export default function HowItWorks() {
  const [headingRef, headingInView] = useInView()
  const [stepsRef, stepsInView] = useInView()

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          ref={headingRef}
          className={`transition-all duration-700 ease-out ${
            headingInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">How it works</h2>
        </div>

        <div
          ref={stepsRef}
          className={`transition-all duration-700 ease-out ${
            stepsInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.num}>
                <div className="relative flex items-center mb-5">
                  <div
                    className={`relative z-10 w-10 h-10 shrink-0 rounded-full border-2 bg-emerald/5 flex items-center justify-center transition-colors duration-700 ${
                      stepsInView
                        ? 'border-emerald/30'
                        : 'border-white/[0.06]'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <span className="text-emerald text-sm font-medium">{step.num}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="h-px bg-white/[0.06] flex-1 ml-3 -mr-4" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-5 top-10 bottom-10 w-px bg-white/[0.06]" />

              <div className="flex flex-col gap-12">
                {steps.map((step, index) => (
                  <div key={step.num} className="relative flex gap-6">
                    <div
                      className={`relative z-10 w-10 h-10 shrink-0 rounded-full border-2 bg-emerald/5 flex items-center justify-center bg-[#0A0A0A] transition-colors duration-700 ${
                        stepsInView
                          ? 'border-emerald/30'
                          : 'border-white/[0.06]'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <span className="text-emerald text-sm font-medium">{step.num}</span>
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
