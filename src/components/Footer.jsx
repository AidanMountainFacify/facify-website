import { Link } from 'react-router-dom'
import Container from './Container'
import Logo from './Logo'

const columns = [
  {
    title: 'Product',
    links: [
      { to: '/features', label: 'Features' },
      { to: '/pricing', label: 'Pricing' },
      { to: '/contact', label: 'Book a demo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-surface">
      <Container className="py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm text-muted">
              Automated, multi-channel outreach for Salesforce teams —
              without the manual busywork.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted hover:text-brand-blue"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Facify. All rights reserved.</p>
          <p>Built for Salesforce teams.</p>
        </div>
      </Container>
    </footer>
  )
}
