import { Gauge, RefreshCcw, Target } from 'lucide-react'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Section from '../components/Section'

const values = [
  {
    icon: RefreshCcw,
    title: 'Consistency by default',
    body: 'Because logging happens automatically, managers get reliable activity data without depending on reps to remember to log things.',
  },
  {
    icon: Gauge,
    title: 'Speed that compounds',
    body: 'What used to take a rep an entire campaign cycle to coordinate manually now happens in the time it takes to set a trigger.',
  },
  {
    icon: Target,
    title: 'Vendor-agnostic, always',
    body: "We never lock a customer into a supplier. Keep the vendor relationships you've built, or use our trusted network — the choice stays yours.",
  },
]

export default function About() {
  return (
    <>
      <Section className="pb-10 pt-16 sm:pt-24">
        <div className="max-w-2xl">
          <Eyebrow>About Facify</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            We build the connective tissue between your CRM and real-world
            outreach.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Facify started with a simple observation: sales teams already
            have the contact data they need in their CRM, but everything
            that happens after — the sending, the tracking, the follow-up —
            still happens by hand, in a different tool, and often doesn't
            make it back into the CRM at all.
          </p>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="max-w-2xl">
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Personal outreach shouldn't require a manual process to stay
            personal.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built to install into the systems you already run.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A CRM account is the only hard requirement to get
              started — no complex IT setup or infrastructure changes.
              Facify installs directly as a plugin inside your existing
              CRM environment, and works alongside the print and
              promo vendors you already trust.
            </p>
            <div className="mt-8">
              <Button to="/contact">Talk to our team</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 bg-surface p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Technical requirements
            </p>
            <ul className="mt-5 space-y-4 text-sm text-ink">
              <li>— An existing CRM account</li>
              <li>— No infrastructure or IT changes required</li>
              <li>— Installs directly as a CRM plugin</li>
              <li>— Works with your existing vendors, or ours</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
