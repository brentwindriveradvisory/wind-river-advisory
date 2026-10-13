import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { cases, CaseCard, type CaseStudy } from '@/components/cases'

export const metadata: Metadata = {
  title: 'Our Work | Wind River Advisory',
  description:
    'Case studies from Wind River Advisory: workflow and reporting automation, custom operations apps, and practical AI workshops for small businesses and nonprofits.',
  alternates: {
    canonical: 'https://windriveradvisory.com/work',
  },
}

const groups: { label: string; heading: string; items: CaseStudy[] }[] = [
  {
    label: 'Workflow and reporting automation',
    heading: 'Reports that build themselves',
    items: [cases.optics, cases.salesTax],
  },
  {
    label: 'Custom operations apps',
    heading: 'Apps built around how the team works',
    items: [cases.academy, cases.tennis],
  },
  {
    label: 'Workshops and training',
    heading: 'Practical AI education',
    items: [cases.workshop],
  },
]

export default function WorkPage() {
  return (
    <>
      <Nav />

      <div className="page-intro">
        <div className="section-inner">
          <p className="section-label">Our work</p>
          <h1 className="page-heading">Real problems. Custom solutions.</h1>
          <p className="section-sub">
            Every engagement starts with a specific operational problem. Here is a closer look at what we&apos;ve
            built and delivered, grouped by the kind of work involved.
          </p>
        </div>
      </div>

      {groups.map((g, i) => (
        <section className={`cases-bg${i % 2 === 1 ? ' cases-bg--light' : ''}`} key={g.label}>
          <div className="section-inner">
            <p className="section-label">{g.label}</p>
            <h2 className="section-heading">{g.heading}</h2>
            <div className="cases-grid">
              {g.items.map((c) => (
                <CaseCard c={c} key={c.id} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="contact-bg work-cta">
        <div className="section-inner">
          <p className="section-label">Get in touch</p>
          <h2 className="contact-heading">Have a problem like these?</h2>
          <p className="work-cta-text">
            Book a free 30-minute call to talk through what you&apos;re working on.
          </p>
          <a href="/#contact" className="btn-primary">Start a conversation</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
