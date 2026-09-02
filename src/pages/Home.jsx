import {
  CalendarClock,
  ClipboardCheck,
  Gauge,
  Plug,
  RefreshCcw,
  Send,
} from 'lucide-react'
import Button from '../components/Button'
import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import {
  CardsIcon,
  EmailIcon,
  FoodBeverageIcon,
  LiteratureIcon,
  PromoItemsIcon,
} from '../components/icons/TouchpointIcons'
import Reveal from '../components/Reveal'
import Section from '../components/Section'

const touchpoints = [
  { icon: EmailIcon, label: 'Email' },
  { icon: CardsIcon, label: 'Cards' },
  { icon: PromoItemsIcon, label: 'Promotional Items' },
  { icon: LiteratureIcon, label: 'Sales Literature' },
  { icon: FoodBeverageIcon, label: 'Food & Beverage' },
]

const problems = [
  {
    icon: Send,
    title: 'Manual, fragmented outreach',
    body: 'Without Facify, reps juggle Salesforce, a promo store, a print vendor, and an email tool independently — time-consuming and error-prone.',
  },
  {
    icon: RefreshCcw,
    title: 'No closed-loop reporting',
    body: "After sending something manually, reps have to remember to log it back in Salesforce. Many don't — leaving managers with unreliable activity data.",
  },
  {
    icon: Gauge,
    title: "Outreach doesn't scale",
    body: 'Manual processes mean personalized outreach only happens occasionally. Facify removes the bottleneck so it can happen more often, to larger lists.',
  },
]

const features = [
  {
    icon: CalendarClock,
    title: 'Circuits',
    body: 'Set a trigger — birthday, holiday, or a custom date — and Facify sends the right thing to the right person automatically. Editable any time.',
  },
  {
    icon: ClipboardCheck,
    title: 'Closed-loop logging',
    body: 'Every send is logged back to Salesforce automatically, so managers get reliable activity data without depending on reps to remember.',
  },
  {
    icon: Plug,
    title: 'Installs into Salesforce',
    body: 'A Salesforce account is the only requirement. Facify installs as a plugin — no complex IT setup or infrastructure changes.',
  },
]

const cardClasses =
  'group rounded-2xl border border-black/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-[0_16px_32px_-16px_rgba(48,81,163,0.2)]'

const iconClasses =
  'flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-transform duration-300 group-hover:scale-110'

export default function Home() {
  return (
    <>
      <Section className="pb-10 pt-16 sm:pt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Built for Salesforce teams</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Multi-channel outreach that keeps your CRM up to date —
            automatically.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Facify eliminates the manual coordination between Salesforce
            and outreach execution, giving salespeople a fast,
            multi-channel sending tool that logs itself.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button to="/contact">Book a demo</Button>
            <Button to="/features" variant="secondary">
              See how it works
            </Button>
          </div>
        </Reveal>
      </Section>

      <Reveal>
        <div className="border-y border-black/5 bg-brand-blue-light/5 py-8">
          <Container className="flex flex-wrap items-center justify-center gap-4">
            {touchpoints.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-3 rounded-full border border-black/5 bg-white py-2 pl-2 pr-5 shadow-[0_1px_3px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-[0_12px_24px_-12px_rgba(48,81,163,0.25)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-semibold text-ink">{label}</span>
              </div>
            ))}
          </Container>
        </div>
      </Reveal>

      <Section className="bg-surface">
        <Reveal className="max-w-2xl">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Outreach today is manual, fragmented, and impossible to track.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className={`${cardClasses} bg-white`}>
                <div className={iconClasses}>
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <Eyebrow>How Facify helps</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            One-time setup becomes ongoing, passive relationship maintenance.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Recipients can sit on multiple Circuits at once — birthday and
            holiday, for example — and every Circuit stays editable, so
            swapping an item or adjusting a list is never a rebuild.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className={cardClasses}>
                <div className={iconClasses}>
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#3051a3_0%,#2a4691_60%,#22397a_100%)] px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_70%)]" />
            <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let Facify orchestrate your outreach.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/80">
              Reliable outreach that runs itself, and never misses a beat.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Button
                to="/contact"
                variant="white"
                className="transition-transform duration-300 hover:scale-105"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
