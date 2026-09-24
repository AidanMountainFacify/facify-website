import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'

// The site is a single page for now, so there are no nav links — just
// the logo and the two actions. The Features, Pricing, About, Help, and
// Blog pages still live in src/pages; restoring any of them means adding
// a links array back here and its route in App.jsx.
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/80 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-4">
        <Logo />

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" href="https://app.facify.io/auth/sign-in">
            Sign in
          </Button>
          <Button href="#contact">Book a demo</Button>
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
        <div className="border-t border-white/10 bg-night md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            <Button
              variant="ghost"
              href="https://app.facify.io/auth/sign-in"
              className="justify-center"
              onClick={() => setOpen(false)}
            >
              Sign in
            </Button>
            <Button href="#contact" className="justify-center" onClick={() => setOpen(false)}>
              Book a demo
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
