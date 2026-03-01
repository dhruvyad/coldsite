import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-zinc-500 text-sm">
          &copy; {year} NoClick Automation
        </span>

        <nav className="flex items-center gap-6">
          <Link
            to="/privacy"
            className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
          >
            Terms
          </Link>
          <a
            href="https://cal.com/dhruvy/15min"
            className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
