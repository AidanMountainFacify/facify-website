import { Link } from 'react-router-dom'

// Every variant declares its own border colour. The width lives in `base`
// so all variants stay the same height, but no two border-colour classes
// ever land on one element — with no tailwind-merge, competing utilities
// would otherwise resolve by stylesheet order rather than class order.
const base =
  'inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-colors px-5 py-3 text-sm'

const variants = {
  primary:
    'border-brand-blue bg-brand-blue text-white hover:border-brand-blue-dark hover:bg-brand-blue-dark',
  secondary:
    'border-brand-blue/35 bg-white text-brand-blue hover:border-brand-blue hover:bg-brand-blue-light/10',
  ghost: 'border-transparent text-ink hover:bg-surface',
  white: 'border-white bg-white text-brand-blue hover:border-white/90 hover:bg-white/90',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
