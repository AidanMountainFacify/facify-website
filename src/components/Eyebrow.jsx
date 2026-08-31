export default function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-block rounded-full bg-brand-blue-light/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue ${className}`}
    >
      {children}
    </span>
  )
}
