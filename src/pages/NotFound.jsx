import Button from '../components/Button'
import Section from '../components/Section'

export default function NotFound() {
  return (
    <Section className="py-32 text-center">
      <p className="text-sm font-semibold text-brand-blue">404</p>
      <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 text-muted">
        The page you're looking for doesn't exist.
      </p>
      <div className="mt-8">
        <Button to="/">Back to home</Button>
      </div>
    </Section>
  )
}
