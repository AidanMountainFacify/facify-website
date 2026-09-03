import {
  CalendarClock,
  ClipboardCheck,
  Contact2,
  Gauge,
  Network,
  Plug,
  Radio,
  Users,
} from 'lucide-react'
import dashboardScreenshot from '../assets/dashboard-screenshot.png'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Section from '../components/Section'

const modes = [
  {
    icon: Radio,
    title: 'Active mode',
    body: 'Run a report and execute a targeted campaign right now — a personalized push to a specific list, on demand.',
  },
  {
    icon: CalendarClock,
    title: 'Passive mode',
    body: 'Circuits run in the background, maintaining relationships automatically once a trigger and item are set.',
  },
]

const featureGrid = [
  {
    icon: CalendarClock,
    title: 'Circuits',
    body: 'Assign a trigger — birthday, holiday, or a manually set date — and an item or message upfront. From there, Facify sends automatically. Recipients can live on multiple Circuits at once, and every Circuit is editable at any time.',
  },
  {
    icon: ClipboardCheck,
    title: 'Closed-loop CRM sync',
    body: 'Every send is logged back to your CRM the moment it happens, so managers get reliable activity data without depending on reps to remember.',
  },
  {
    icon: Network,
    title: 'Vendor-agnostic integrations',
    body: "Facify doesn't lock you into one supplier. Use our network of trusted print and promo vendors, or keep the vendor relationships and contracts you already have.",
  },
  {
    icon: Plug,
    title: 'Installs as a CRM plugin',
    body: 'A CRM account is the only hard requirement. No complex IT setup, no infrastructure changes — Facify installs directly into your existing CRM.',
  },
  {
    icon: Contact2,
    title: 'Contacts, unified',
    body: 'Work from the same contact list your team already trusts in your CRM — no separate list to maintain or keep in sync.',
  },
  {
    icon: Gauge,
    title: 'Dashboard & reporting',
    body: 'A milestone scoreboard and Circuit activity view, synced live from your CRM, so managers can see what is scheduled and what already went out.',
  },
]

export default function Features() {
  return (
    <>
      <Section className="pb-10 pt-16 sm:pt-24">
        <div className="max-w-2xl">
          <Eyebrow>Features</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Everything outreach needs, none of the busywork.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Facify turns scattered tools — a contact list, a promo store, a
            print vendor, an email tool — into one automated, self-logging
            system.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <img
          src={dashboardScreenshot}
          alt="Facify dashboard with Circuits and Milestone Scoreboard synced from your CRM"
          className="w-full rounded-xl border border-black/5 shadow-2xl shadow-brand-blue/10"
        />
      </Section>

      <Section className="bg-surface">
        <div className="max-w-2xl">
          <Eyebrow>Two ways to work</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Run outreach right now, or let it run itself.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {modes.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-white">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Under the hood</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built to fit the way your team already sells.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureGrid.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/5 p-7"
            >
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

      <Section className="pt-0">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-surface px-8 py-14 text-center">
          <Users className="text-brand-blue" size={32} />
          <h2 className="max-w-lg text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Ready to see Circuits running against your own CRM data?
          </h2>
          <Button to="/contact">Book a demo</Button>
        </div>
      </Section>
    </>
  )
}
