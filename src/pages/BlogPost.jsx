import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Section from '../components/Section'
import { formatPostDate, getPostBySlug } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <Section className="pt-16 text-center sm:pt-24">
        <h1 className="text-3xl font-bold text-ink">Post not found</h1>
        <div className="mt-6">
          <Button to="/blog">Back to blog</Button>
        </div>
      </Section>
    )
  }

  return (
    <Section className="pb-10 pt-16 sm:pt-24">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline"
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <Eyebrow className="mt-6">{post.category}</Eyebrow>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        <time className="mt-4 block text-sm text-muted">
          {formatPostDate(post.date)}
        </time>

        <p className="mt-8 text-lg leading-relaxed text-muted">
          {post.excerpt}
        </p>

        <div className="mt-8 rounded-xl border border-dashed border-black/10 bg-surface p-6 text-sm text-muted">
          This is placeholder post content. Replace this section with the
          full article when it's ready.
        </div>
      </div>
    </Section>
  )
}
