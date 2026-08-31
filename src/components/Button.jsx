import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors px-5 py-3 text-sm'

const variants = {
  primary: 'bg-brand-blue text-white hover:bg-brand-blue-dark',
  secondary: 'bg-brand-blue-light/10 text-brand-blue hover:bg-brand-blue-light/20',
  outline: 'border border-white/40 text-white hover:bg-white/10',
  ghost: 'text-ink hover:bg-surface',
  white: 'bg-white text-brand-blue hover:bg-white/90',
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
