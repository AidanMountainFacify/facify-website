import { Link } from 'react-router-dom'
import facifyLogo from '../assets/facify-logo.svg'

// The asset is a flat navy fill, so it can't inherit currentColor.
// `brightness-0 invert` drives it to white for the dark theme without
// needing a second file; `className` lets a caller opt out.
export default function Logo({ className = 'brightness-0 invert' }) {
  return (
    <Link to="/" className="flex shrink-0 items-center">
      <img src={facifyLogo} alt="FACiFY" className={`h-11 w-auto ${className}`} />
    </Link>
  )
}
