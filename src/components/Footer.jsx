export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: 'mailto:hello@noclickautomation.com' },
  ]

  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-zinc-500">NoClick Automation</span>
          <span className="text-zinc-500 text-sm">
            &copy; {year} NoClick Automation
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
