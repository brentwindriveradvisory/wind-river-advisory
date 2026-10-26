import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const APP_NAME = 'Wind River Reporting for Amazon Sellers'

export const metadata: Metadata = {
  title: `${APP_NAME} | Wind River Advisory`,
  description:
    'Automated sales, fee, margin and payout reporting for Amazon sellers. Read-only access to your seller account, reports delivered on your schedule, no customer personal data collected.',
  alternates: {
    canonical: 'https://windriveradvisory.com/amazon-reporting',
  },
}

const features = [
  {
    title: 'Sales and margin by SKU',
    body: 'Units, product sales, Amazon fees and net proceeds for every SKU, combined with your product costs to show what each item actually earns after fees.',
  },
  {
    title: 'US and Canada in one report',
    body: 'Sales from both marketplaces in a single report, with Canadian amounts converted to US dollars using published daily exchange rates.',
  },
  {
    title: 'Payout balance reconciliation',
    body: 'A month-end snapshot of your Amazon settlements and payout balance, ready for your bookkeeper to reconcile alongside your other sales channels.',
  },
  {
    title: 'Delivered on your schedule',
    body: 'Reports run automatically, weekly, mid-month or monthly, and land in your own Google Sheets with a link sent by email. No downloads or copy-and-paste.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Discovery call',
    body: 'We learn which reports you build today, how often you need them, and which systems hold your product costs.',
  },
  {
    n: '02',
    title: 'You authorize read-only access',
    body: 'The account owner approves our application in Seller Central. Access is limited to financial data, and you can revoke it at any time.',
  },
  {
    n: '03',
    title: 'We build and verify your reports',
    body: 'We build the reports around your layout and check them against your existing numbers before anything goes live.',
  },
  {
    n: '04',
    title: 'Reports run on their own',
    body: 'Finished reports arrive on schedule. We monitor them and adjust as your catalog and marketplaces change.',
  },
]

const dataPoints = [
  { label: 'Access level', value: 'Read-only' },
  { label: 'Data used', value: 'Transactions, fees, settlements, payouts' },
  { label: 'Customer personal data', value: 'Not requested or stored' },
  { label: 'Where reports live', value: 'Your own Google Workspace' },
  { label: 'Credentials', value: 'Encrypted, never in reports or code' },
  { label: 'Revoking access', value: 'Anytime, from Seller Central' },
]

function Mark() {
  return (
    <svg width="72" height="38" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polyline
        points="0,52 28,12 44,34 60,6 76,34 92,20 120,52"
        stroke="#1a6b5a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M0,60 Q30,55 60,60 Q90,65 120,60"
        stroke="#1a6b5a"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
    </svg>
  )
}

export default function AmazonReportingPage() {
  return (
    <>
      <Nav />

      {/* INTRO */}
      <div className="page-intro">
        <div className="section-inner">
          <p className="section-label">Services · Reporting automation</p>
          <div className="service-title">
            <Mark />
            <h1 className="page-heading">{APP_NAME}</h1>
          </div>
          <p className="section-sub">
            Automated sales, fee, margin and payout reporting for Amazon sellers. {APP_NAME} connects to your
            seller account with read-only access and turns your Amazon financial data into finished reports, so
            your team stops downloading and stitching together exports by hand.
          </p>
          <a href="/#contact" className="btn-primary">Request a quote</a>
        </div>
      </div>

      {/* WHAT IT DOES */}
      <section className="build-bg">
        <div className="section-inner">
          <p className="section-label">What it does</p>
          <h2 className="section-heading">The reports you build by hand, built for you</h2>
          <div className="build-grid">
            {features.map((f) => (
              <div className="build-card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-bg">
        <div className="section-inner">
          <p className="section-label">How it works</p>
          <h2 className="section-heading">From first call to finished reports</h2>
          <div className="how-grid">
            {steps.map((s) => (
              <div className="how-step" key={s.n}>
                <div className="how-step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA AND SECURITY */}
      <section className="build-bg" id="data">
        <div className="section-inner service-split">
          <div className="about-text service-text">
            <p className="section-label">Data and security</p>
            <h2 className="section-heading">Your data stays yours</h2>
            <p>
              {APP_NAME} only reads the financial data needed for your reports. It does not create or change
              listings, prices, orders, inventory or shipments, and it never contacts your customers.
            </p>
            <p>
              Reports are written to your own Google Workspace, and access to them is limited to the people you
              choose. For full details on how we collect, use, store, protect and delete data, see our{' '}
              <a href="/privacy" className="text-link">privacy policy</a>.
            </p>
          </div>
          <div className="about-table service-table">
            {dataPoints.map(({ label, value }) => (
              <div className="aside-item" key={label}>
                <span className="aside-item-label">{label}</span>
                <span className="aside-item-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="about-bg" id="pricing">
        <div className="section-inner">
          <div className="about-text service-text">
            <p className="section-label">Pricing</p>
            <h2 className="section-heading">Quote-based, scoped to your reports</h2>
            <p>
              Pricing depends on which reports you need, how many marketplaces you sell in, and where your product
              costs live. After a free 30-minute discovery call, we send a written quote covering the setup and any
              ongoing support, so you know the full cost before any work begins.
            </p>
            <a href="/#contact" className="btn-primary">Book a discovery call</a>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-bg work-cta">
        <div className="section-inner">
          <p className="section-label">Get in touch</p>
          <h2 className="contact-heading">Questions about {APP_NAME}?</h2>
          <p className="work-cta-text">
            Email brent@windriveradvisory.com or call +1 (307) 438-9112.
          </p>
          <a href="/#contact" className="btn-primary">Start a conversation</a>
          <p className="trademark-note">
            Amazon is a trademark of Amazon.com, Inc. or its affiliates. Wind River Advisory is an independent
            company and is not affiliated with or endorsed by Amazon.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
