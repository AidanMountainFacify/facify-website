// Placeholder posts — swap in real articles when ready.
export const posts = [
  {
    slug: 'closing-the-crm-logging-gap',
    title: 'Closing the CRM logging gap: why manual activity tracking fails',
    excerpt:
      'When reps have to remember to log every touch, managers end up with incomplete pipelines. Here is what closed-loop logging actually fixes.',
    date: '2026-07-14',
    category: 'Product',
  },
  {
    slug: 'birthday-and-holiday-outreach-that-scales',
    title: 'Birthday and holiday outreach that actually scales',
    excerpt:
      'Personal touches build relationships, but they rarely survive contact with a growing book of business. Here is how automated Circuits change that math.',
    date: '2026-06-02',
    category: 'Sales Strategy',
  },
  {
    slug: 'vendor-agnostic-by-design',
    title: 'Why we built Facify to be vendor-agnostic',
    excerpt:
      'Locking customers into one print or promo vendor creates friction. Here is our approach to integrating with the vendors you already trust.',
    date: '2026-04-21',
    category: 'Company',
  },
]

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

// Parse "YYYY-MM-DD" as a local date rather than UTC, so the displayed
// date can't shift a day back in timezones behind UTC.
export function formatPostDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)
  return dateFormatter.format(new Date(year, month - 1, day))
}
