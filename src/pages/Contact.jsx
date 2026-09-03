import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Section from '../components/Section'

const inputClasses =
  'w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-blue'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  // NOTE: this form is not wired to a backend yet. Connect it to your
  // provider of choice (e.g. Formspree, HubSpot, a custom API route)
  // before shipping to production.
  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section className="pb-24 pt-16 sm:pt-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Let's get Facify running in your org.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Tell us a bit about your team and how you send outreach today.
            We'll follow up to schedule a walkthrough.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-sm font-semibold text-ink">Email</dt>
              <dd className="mt-1 text-sm text-muted">hello@facify.io</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">For teams already using a CRM</dt>
              <dd className="mt-1 text-sm text-muted">
                Facify installs directly into your existing CRM — no
                infrastructure changes required.
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-black/5 bg-surface p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="text-brand-green" size={40} />
              <h2 className="mt-4 text-xl font-semibold text-ink">
                Thanks — we'll be in touch.
              </h2>
              <p className="mt-2 text-sm text-muted">
                We usually reply within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="name">
                    Full name
                  </label>
                  <input id="name" name="name" required className={inputClasses} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="company">
                    Company
                  </label>
                  <input id="company" name="company" required className={inputClasses} />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="message">
                  What does your outreach process look like today?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClasses}
                />
              </div>

              <Button type="submit" className="w-full justify-center">
                Request a demo
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
