import './App.css'

const services = [
  {
    title: 'Lead Routing',
    desc: 'Inbound leads scored, enriched, and routed to the right rep — before they finish their coffee.',
    icon: (
      <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    span: 'md:col-span-2',
  },
  {
    title: 'Data Entry',
    desc: 'Pull from forms, emails, and docs — push to your CRM, ERP, or wherever it needs to go.',
    icon: (
      <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125" />
      </svg>
    ),
    span: '',
  },
  {
    title: 'Customer Support',
    desc: 'AI handles the repetitive tickets. Your team handles the ones that actually need a human.',
    icon: (
      <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    span: '',
  },
  {
    title: 'Reporting',
    desc: 'Auto-generated dashboards and summaries from the data you already have. No more spreadsheet wrangling.',
    icon: (
      <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    span: 'md:col-span-2',
  },
]

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

const stats = [
  { value: '50+', label: 'Automations Shipped' },
  { value: '12,000+', label: 'Hours Saved' },
  { value: '98%', label: 'Client Retention' },
]

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          NoClick
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
          <a
            href="#contact"
            className="bg-emerald hover:bg-emerald-dark text-white px-5 py-2 rounded-lg font-medium transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
      <div className="hero-glow" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-6 animate-fade-up">
          Automate the<br />busywork.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed mb-10 animate-fade-up animation-delay-150">
          We build AI systems that handle lead routing, data entry, and customer support — so your team can do actual work.
        </p>
        <a
          href="#contact"
          className="inline-block bg-emerald hover:bg-emerald-dark text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-colors animate-fade-up animation-delay-300"
        >
          Book a Call
        </a>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">What we automate</h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-lg">
          The stuff nobody should be doing by hand.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className={`bento-card bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 ${s.span}`}
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">How it works</h2>
        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-5 left-[16.67%] right-[16.67%] h-px bg-white/[0.06]" />
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-sm font-medium text-emerald mb-3">{step.num}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="py-16 px-6 border-y border-white/[0.06]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold tracking-tight mb-1">{s.value}</div>
            <div className="text-sm text-zinc-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Ready to stop doing it manually?
        </h2>
        <a
          href="mailto:hello@noclickautomation.com"
          className="inline-block bg-emerald hover:bg-emerald-dark text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-colors"
        >
          Book a Call
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} NoClick Automation
        </div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
          <a href="mailto:hello@noclickautomation.com" className="hover:text-zinc-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
