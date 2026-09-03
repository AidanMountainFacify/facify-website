import { Check } from 'lucide-react'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Section from '../components/Section'

const tiers = [
  {
    name: 'Starter',
    description: 'For individual reps getting Circuits running for the first time.',
    features: [
      'CRM plugin install',
      'Up to 3 active Circuits',
      'Closed-loop activity logging',
      'Standard vendor network access',
    ],
  },
  {
    name: 'Growth',
    description: 'For teams that want outreach running across a full book of business.',
    features: [
      'Everything in Starter',
      'Unlimited Circuits',
      'Active + Passive mode campaigns',
      'Team-level reporting dashboard',
      'Bring-your-own vendor integrations',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For orgs with custom vendor contracts, security, or rollout needs.',
    features: [
      'Everything in Growth',
      'Custom vendor & contract integrations',
      'Advanced admin & permission controls',
      'Dedicated onboarding',
    ],
  },
]

export default function Pricing() {
  return (
    <>
      <Section className="pb-10 pt-16 text-center sm:pt-24">
        <Eyebrow>Pricing</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Plans that scale with your team.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Every plan installs directly into your existing CRM. Talk to us
          for a quote sized to your team and vendor setup.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                tier.highlighted
                  ? 'border-brand-blue bg-brand-blue text-white shadow-xl'
                  : 'border-black/5 bg-white'
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  tier.highlighted ? 'text-white' : 'text-ink'
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  tier.highlighted ? 'text-white/80' : 'text-muted'
                }`}
              >
                {tier.description}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        tier.highlighted ? 'text-white' : 'text-brand-green'
                      }`}
                    />
                    <span className={tier.highlighted ? 'text-white/90' : 'text-ink'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                to="/contact"
                variant={tier.highlighted ? 'white' : 'secondary'}
                className="mt-8 justify-center"
              >
                Talk to sales
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Pricing is scoped per team based on seats and vendor integrations —{' '}
          <a href="/contact" className="font-medium text-brand-blue hover:underline">
            contact us
          </a>{' '}
          for a quote.
        </p>
      </Section>
    </>
  )
}
