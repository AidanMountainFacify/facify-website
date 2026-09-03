import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import Section from '../components/Section'
import { formatPostDate, posts } from '../data/posts'

export default function Blog() {
  return (
    <>
      <Section className="pb-10 pt-16 sm:pt-24">
        <div className="max-w-2xl">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Notes on outreach, CRM data, and staying in touch at scale.
          </h1>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-black/5 p-7 transition-colors hover:border-brand-blue/30"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                {post.category}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-ink group-hover:text-brand-blue">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <time className="mt-5 text-xs text-muted">
                {formatPostDate(post.date)}
              </time>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
