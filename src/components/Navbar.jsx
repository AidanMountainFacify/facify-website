import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'

const links = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/help', label: 'Help' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-blue ${
                  isActive ? 'text-brand-blue' : 'text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" href="#">
            Sign in
          </Button>
          <Button to="/contact">Book a demo</Button>
        </div>

        <button
          className="p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-surface text-brand-blue' : 'text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-2 justify-center" onClick={() => setOpen(false)}>
              Book a demo
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
