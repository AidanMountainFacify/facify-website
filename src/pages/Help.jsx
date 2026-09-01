import { BookOpen } from 'lucide-react'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Section from '../components/Section'
import { faqCategories, tutorials } from '../data/help'

export default function Help() {
  return (
    <>
      <Section className="pb-10 pt-16 sm:pt-24">
        <div className="max-w-2xl">
          <Eyebrow>Help Center</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Get the most out of Facify.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Tutorials and answers for setting up Circuits, connecting
            Salesforce, and managing outreach day to day.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <Eyebrow>Tutorials</Eyebrow>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink">
          Walkthroughs
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.slug}
              className="rounded-2xl border border-black/5 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <BookOpen size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">
                {tutorial.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {tutorial.summary}
              </p>
              <p className="mt-4 text-xs italic text-muted/70">
                [Full walkthrough coming soon]
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink">
          Frequently asked questions
        </h2>

        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
                {cat.category}
              </h3>
              <div className="mt-4 space-y-5">
                {cat.items.map((item, i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold text-ink">
                      {item.question}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-surface px-8 py-14 text-center">
          <h2 className="max-w-lg text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Can't find what you're looking for?
          </h2>
          <Button to="/contact">Contact support</Button>
        </div>
      </Section>
    </>
  )
}
