import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Wind River Advisory',
  description:
    'How Wind River Advisory collects, uses, stores, protects, shares and deletes information, including data from Amazon seller accounts.',
  alternates: {
    canonical: 'https://windriveradvisory.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <div className="page-intro">
        <div className="section-inner">
          <p className="section-label">Legal</p>
          <h1 className="page-heading">Privacy Policy</h1>
          <p className="section-sub">Effective October 26, 2026</p>
        </div>
      </div>

      <section className="about-bg policy-section">
        <div className="section-inner">
          <div className="about-text policy-body">
            <p>
              Wind River Advisory LLC (&quot;Wind River Advisory,&quot; &quot;we,&quot; &quot;us&quot;) builds
              workflow and reporting automations for small businesses. This policy explains what information we
              collect, how we use it, where it is stored, how it is protected, who it is shared with, and how it is
              deleted. It covers this website and the services we provide to clients, including Wind River Reporting
              for Amazon Sellers.
            </p>

            <h2>Information we collect</h2>
            <p>
              <strong>Website visitors.</strong> When you use our contact form, we collect your name, email address,
              area of interest and message. We use this only to reply to you.
            </p>
            <p>
              <strong>Client business data.</strong> When a client engages us, we access the business data needed to
              build their reports, such as sales, cost and payout data from systems the client authorizes.
            </p>
            <p>
              <strong>Amazon seller data.</strong> When a seller authorizes Wind River Reporting for Amazon Sellers, we access
              that seller&apos;s financial data through Amazon&apos;s Selling Partner API on a read-only basis:
              financial transactions, fees, settlements and payout balances. We do not request or store Amazon
              buyers&apos; personally identifiable information, such as names, addresses, email addresses or phone
              numbers.
            </p>

            <h2>How we use information</h2>
            <p>
              We use client and Amazon seller data only to produce the reports and automations the client has asked
              for. We do not sell, rent or trade any data, use it for advertising, or combine one client&apos;s data
              with another&apos;s. We do not use Amazon data to contact Amazon buyers or for any purpose other than
              the authorized client&apos;s own reporting.
            </p>

            <h2>Where information is stored</h2>
            <p>
              Reports are written to the client&apos;s own Google Workspace (Google Sheets and Drive). Data is
              processed in a secured cloud automation platform while reports run. Application credentials and access
              tokens are stored encrypted in that platform&apos;s credential store and are never written into reports,
              code, email or shared documents.
            </p>

            <h2>How information is protected</h2>
            <p>
              Data is encrypted in transit using HTTPS. Access to systems that hold client or Amazon data is limited
              to authorized people based on their role, protected by strong passwords and multi-factor
              authentication. We follow a written incident response plan, and we notify affected clients, and Amazon
              where Amazon data is involved, within 24 hours of detecting a security incident.
            </p>

            <h2>Who information is shared with</h2>
            <p>
              We share data only with the client it belongs to and the service providers we use to run the reports:
              our cloud automation platform and Google Workspace. These providers process data on our behalf over
              encrypted connections. We may disclose information if required by law.
            </p>

            <h2>Retention and deletion</h2>
            <p>
              We keep client and Amazon data only as long as needed to provide the reports the client has asked for.
              When an engagement ends, or a client asks us to, we revoke our access and delete any copies we hold
              within 30 days, unless the law requires us to keep them longer. Reports stored in the client&apos;s own
              Google Workspace remain under the client&apos;s control. Sellers can revoke our access to their Amazon
              account at any time from Seller Central.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask us what information we hold about you or your business, ask us to correct it, or ask us to
              delete it, by contacting us using the details below.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The effective date at the top of this page shows when it
              was last changed.
            </p>

            <h2>Contact</h2>
            <p>
              Wind River Advisory LLC, Lander, Wyoming, USA
              <br />
              Email: brent@windriveradvisory.com
              <br />
              Phone: +1 (307) 438-9112
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
