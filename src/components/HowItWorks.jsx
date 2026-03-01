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
  const [ref, isInView] = useInView()

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">How it works</h2>

        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Desktop layout */}
          <div className="hidden md:block">
            <div className="relative grid grid-cols-3 gap-8">
              {/* Connecting lines between step circles */}
              {/* Line between step 1 and step 2 */}
              <div
                className="absolute top-5 h-px bg-gradient-to-r from-emerald/20 via-emerald/10 to-emerald/20"
                style={{ left: 'calc(33.333% * 0 + 40px)', right: 'calc(100% - 33.333% * 1)' }}
              />
              {/* Line between step 2 and step 3 */}
              <div
                className="absolute top-5 h-px bg-gradient-to-r from-emerald/20 via-emerald/10 to-emerald/20"
                style={{ left: 'calc(33.333% + 40px)', right: 'calc(100% - 33.333% * 2)' }}
              />

              {steps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-emerald/30 bg-emerald/5 flex items-center justify-center mb-5">
                    <span className="text-emerald text-sm font-medium">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-5 top-10 bottom-10 w-px bg-gradient-to-b from-emerald/20 via-emerald/10 to-emerald/20" />

              <div className="flex flex-col gap-12">
                {steps.map((step) => (
                  <div key={step.num} className="relative flex gap-6">
                    <div className="relative z-10 w-10 h-10 shrink-0 rounded-full border-2 border-emerald/30 bg-emerald/5 flex items-center justify-center bg-[#0A0A0A]">
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
