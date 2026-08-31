import { Link } from 'react-router-dom'
import logoMark from '../assets/logo-mark.svg'

export default function Logo({ dark = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <img src={logoMark} alt="Facify logo" className="h-9 w-9" />
      <span
        className={`text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}
      >
        Facify
      </span>
    </Link>
  )
}
