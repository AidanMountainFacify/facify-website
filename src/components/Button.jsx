import { Link } from 'react-router-dom'

// Every variant declares its own border colour. The width lives in `base`
// so all variants stay the same height, but no two border-colour classes
// ever land on one element — with no tailwind-merge, competing utilities
// would otherwise resolve by stylesheet order rather than class order.
const base =
  'inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-colors px-5 py-3 text-sm'

const variants = {
  // Electric rather than the brand navy: a #3051a3 fill goes muddy
  // against the near-black page and stops reading as an action.
  primary:
    'border-brand-electric bg-brand-electric text-white hover:border-brand-blue hover:bg-brand-blue',
  secondary:
    'border-white/25 bg-transparent text-ink hover:border-white/50 hover:bg-white/5',
  ghost: 'border-transparent text-ink hover:bg-surface',
  // Sits on the blue CTA banner, so it stays a white chip.
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
