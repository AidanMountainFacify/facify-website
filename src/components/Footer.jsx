import Container from './Container'
import Logo from './Logo'

// The site is a single page for now, so the footer link columns were
// removed — see the note in Navbar.jsx for how to restore the other pages.
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night">
      <Container className="py-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm text-muted">
              Automated, multi-channel outreach that keeps your CRM up to
              date — without the manual busywork.
            </p>
          </div>

          <a
            href="#contact"
            className="text-sm font-semibold text-brand-accent hover:underline"
          >
            Book a demo
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} FACiFY. All rights reserved.</p>
          <p>Built to work with your CRM.</p>
        </div>
      </Container>
    </footer>
  )
}
