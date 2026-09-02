import { Link } from 'react-router-dom'
import facifyLogo from '../assets/facify-logo.svg'

export default function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center">
      <img src={facifyLogo} alt="Facify" className="h-11 w-auto" />
    </Link>
  )
}
