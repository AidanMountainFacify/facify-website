import {
  CalendarClock,
  Gauge,
  Plug,
  RefreshCcw,
  Send,
} from 'lucide-react'
import Button from '../components/Button'
import ContactSection from '../components/ContactSection'
import Eyebrow from '../components/Eyebrow'
import FacifyLockup from '../components/FacifyLockup'
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
    body: 'Without FACiFY, reps juggle your CRM, a promo store, a print vendor, and an email tool independently — time-consuming and error-prone.',
  },
  {
    icon: RefreshCcw,
    title: 'No closed-loop reporting',
    body: "After sending something manually, reps have to remember to log it back in your CRM. Many don't — leaving managers with unreliable activity data.",
  },
  {
    icon: Gauge,
    title: "Outreach doesn't scale",
    body: 'Manual processes mean personalized outreach only happens occasionally. FACiFY removes the bottleneck so it can happen more often, to larger lists.',
  },
]

const features = [
  {
    icon: CalendarClock,
    title: 'Circuits',
    body: 'Set a trigger — birthday, holiday, or a custom date — and FACiFY sends the right thing to the right person automatically. Editable any time.',
  },
  {
    icon: Plug,
    title: 'CRM Connected',
    body: 'A CRM account is the only requirement. FACiFY reports back to your CRM to maintain accurate and consistent activity records automatically.',
  },
]

// Sections are all white now, so the cards carry their own definition
// via border and resting shadow rather than contrast against a tint.
const cardClasses =
  'group rounded-2xl border border-black/10 bg-white p-7 shadow-[0_4px_16px_-12px_rgba(2,8,23,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-[0_16px_32px_-16px_rgba(48,81,163,0.2)]'

const iconClasses =
  'flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-transform duration-300 group-hover:scale-110'

export default function Home() {
  return (
    <>
      {/* Light hero: the gradient is a soft wash bleeding in behind the
          content rather than a block, so the page stays bright. The copy
          sits in the first column so its left edge lands on the same
          container gutter as every section below it — a logo column here
          would push the headline inward and make the page jump on scroll. */}
      <Section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-56 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(31,95,224,0.20)_0%,rgba(31,95,224,0.07)_45%,rgba(31,95,224,0)_72%)]"
        />
        {/* There was a second wash in the lower left. It sat far enough
            below the section that `overflow-hidden` sliced it mid-falloff,
            so it read as a hard-edged block rather than a glow. The single
            top-right glow carries the effect on its own. */}

        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <Reveal className="text-center lg:text-left">
            <Eyebrow>Built to work with your CRM</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Let FACiFY orchestrate your engagement.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              FACiFY eliminates the manual coordination between your CRM
              and outreach execution, giving salespeople a fast,
              multi-channel sending tool that logs itself.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button href="#contact">Book a demo</Button>
              <Button href="#how-it-works" variant="secondary">
                See how it works
              </Button>
            </div>

            {/* The channels sit directly under the CTAs as proof of the
                multi-channel claim made in the paragraph above. */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                One tool, five channels
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
                {touchpoints.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-2.5 rounded-full border border-black/5 bg-white py-1.5 pl-1.5 pr-4 shadow-[0_4px_12px_-4px_rgba(2,8,23,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-[0_12px_24px_-12px_rgba(48,81,163,0.25)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-transform duration-300 group-hover:scale-110">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm font-semibold text-ink">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="flex justify-center">
            <FacifyLockup className="text-brand-blue" />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Outreach today is manual, fragmented, and impossible to track.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, body }, i) => (
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

      <Section id="how-it-works" className="scroll-mt-20">
        <Reveal className="max-w-2xl">
          <Eyebrow>How FACiFY helps</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            One-time setup becomes ongoing, passive relationship maintenance.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Recipients can sit on multiple Circuits at once — birthday and
            holiday, for example — and every Circuit stays editable, so
            swapping an item or adjusting a list is never a rebuild.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
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
          <div className="relative overflow-hidden rounded-3xl bg-brand-blue px-8 py-16 text-center sm:px-16">
            <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let FACiFY orchestrate your outreach.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/80">
              Reliable outreach that runs itself, and never misses a beat.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Button
                href="#contact"
                variant="white"
                className="transition-transform duration-300 hover:scale-105"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <ContactSection id="contact" />
    </>
  )
}
