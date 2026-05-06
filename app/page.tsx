import Nav from '@/components/Nav'
import ContactForm from '@/components/ContactForm'

// ── Logo mark SVG (reusable) ───────────────────────────────────────────────

function LogoMark({ width = 44, height = 24, opacity = 1 }: { width?: number; height?: number; opacity?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline
        points="0,52 28,12 44,34 60,6 76,34 92,20 120,52"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={opacity}
      />
      <path
        d="M0,60 Q30,55 60,60 Q90,65 120,60"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity={0.35 * opacity}
      />
    </svg>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="hero-outer">
        <div className="hero-left">
          <p className="hero-eyebrow">Process Improvement &amp; AI Advisory</p>
          <h1>
            Custom tools and AI solutions,{' '}
            <em>built for your operation</em>
          </h1>
          <p className="hero-lead">
            Wind River Advisory partners with small businesses and nonprofits to work smarter, move faster,
            and produce higher-quality results using tailored technology and AI solutions.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Book a discovery call</a>
            <a href="#how" className="btn-secondary">See how it works</a>
          </div>
        </div>
      </div>

      {/* PROCESS STEPS */}
      <section className="how-bg" id="how">
        <div className="section-inner">
          <p className="section-label">The approach</p>
          <h2 className="section-heading">From diagnosis to delivery</h2>
          <p className="section-sub">
            Whether the goal is identifying operational inefficiencies, integrating AI tools, or both,
            we follow the same practical process: understand how your organization works, identify the
            highest-impact opportunities, and build solutions that fit.
          </p>
          <div className="how-grid">
            {[
              { n: '01', title: 'Workflow mapping', body: 'We talk to your team and map your processes to understand how work actually gets done and where inefficiency or quality gaps exist.' },
              { n: '02', title: 'Define the opportunity', body: 'We define where AI-based tools can make the biggest difference, simplifying workflows, reducing manual work, and elevating the quality of what your team produces.' },
              { n: '03', title: 'Tailored solution design', body: 'We design a tech-based solution that fits seamlessly with how you operate.' },
              { n: '04', title: 'Deployment & growth', body: 'We roll out your solution, train your team to own it, and stay engaged to refine what we\'ve built and identify the next opportunity as your business evolves.' },
            ].map((step) => (
              <div className="how-step" key={step.n}>
                <div className="how-step-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="cases-bg" id="work">
        <div className="section-inner">
          <p className="section-label">Our work</p>
          <h2 className="section-heading">Real problems. Custom solutions.</h2>
          <p className="section-sub">
            Every engagement starts with a specific operational problem. Here&apos;s how we&apos;ve approached two current client situations.
          </p>
          <div className="cases-grid">

            <div className="case-card">
              <span className="case-tag">Cardio Tennis · Instruction Business</span>
              <h3>Attendance tracking to unlock revenue growth</h3>
              <div className="case-problem">
                <span className="case-problem-label">The problem</span>
                <p>The business had no reliable way to track class attendance over time. Without that data, it was impossible to identify which sessions were under-attended, when to add capacity, or where revenue was being left on the table.</p>
              </div>
              <span className="case-solution-label">The solution we built</span>
              <p className="case-solution-name">Attendance tracking &amp; revenue dashboard</p>
              <p className="case-solution-body">A custom tool that logs attendance by session, surfaces trends over time, and flags under-utilized capacity, giving the owner clear data to drive scheduling and pricing decisions.</p>
            </div>

            <div className="case-card">
              <span className="case-tag">Education Services</span>
              <h3>Attendance and payment reconciliation in one system</h3>
              <div className="case-problem">
                <span className="case-problem-label">The problem</span>
                <p>Attendance was tracked separately from payments, creating a reconciliation burden each billing cycle. Missed sessions slipped through, payments were hard to verify, and staff spent significant time on manual cross-checking.</p>
              </div>
              <span className="case-solution-label">The solution we built</span>
              <p className="case-solution-name">Integrated attendance + payment reconciliation tool</p>
              <p className="case-solution-body">A unified system that connects attendance records directly to billing, auto-flags discrepancies, and generates a reconciliation report, eliminating the manual cross-check entirely.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-bg" id="about">
        <div className="section-inner">
          <div>
            <div className="about-text">
              <p className="section-label">About</p>
              <h2 className="section-heading">Practical solutions, not just advice</h2>
              <p>We work with small business and nonprofit leaders to identify where process improvements and tech-based solutions can drive the biggest gains in productivity, and where AI tools can simplify workflows and elevate the quality of what their teams produce.</p>
              <p>Our approach is hands-on and collaborative. We start by understanding how your organization actually works, identify the highest-impact opportunities, and design solutions that fit.</p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <img
                  src="/brent-edelman.jpg"
                  alt="Brent Edelman"
                  style={{ width: 80, height: 110, borderRadius: '50%', objectFit: 'cover', objectPosition: '30% 20%', flexShrink: 0, marginTop: 4, filter: 'grayscale(100%)', background: '#e8e4e0' }}
                />
                <p style={{ marginBottom: 0 }}>Founder Brent Edelman has been on the inside of the AI industry since 2025, training frontier models for leading labs and developing a firsthand understanding of what these tools can and can&apos;t do. He brings that knowledge, along with two decades of experience designing projects that helped small businesses and institutions thrive across Asia, Africa, and the Pacific, to building practical, custom AI tools for small businesses and nonprofits around the world. His goal is simple: give small teams access to tools that were previously out of reach, and give them time back to focus on what they do best.</p>
              </div>
              <div className="about-table">
                <p className="about-table-heading">How we work</p>
                {[
                  { label: 'Engagement style', value: 'Project or retainer' },
                  { label: 'Format', value: 'Remote or in-person' },
                  { label: 'Typical engagement', value: '1–3 months' },
                  { label: 'First step', value: 'Free 30-min discovery call' },
                ].map(({ label, value }) => (
                  <div className="aside-item" key={label}>
                    <span className="aside-item-label">{label}</span>
                    <span className="aside-item-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-bg" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-left">
              <p className="section-label">Get in touch</p>
              <h2 className="contact-heading">Let&apos;s start with a conversation</h2>
              <p>
                Book a free 30-minute call — by phone, Zoom, or Google Meet, whatever works best for you.
                The goal is simple: understand what you&apos;re working on, explore whether Wind River Advisory
                is the right fit, and give you a clear sense of what working together would look like.
                You don&apos;t need to have everything figured out before we talk.
              </p>
              <div className="contact-info-item">
                <span className="contact-info-dot" />
                <span>+1 (307) 438-9112</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-dot" />
                <span>brent@windriveradvisory.com</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-dot" />
                <span>Lander, Wyoming — serving clients worldwide</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">
          <svg width="32" height="18" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgba(232,245,242,0.5)' }}>
            <polyline
              points="0,52 28,12 44,34 60,6 76,34 92,20 120,52"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M0,60 Q30,55 60,60 Q90,65 120,60"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              opacity="0.35"
            />
          </svg>
          <span className="footer-name">Wind River Advisory</span>
        </div>
        <p className="footer-copy">© 2026 Wind River Advisory LLC · Lander, Wyoming</p>
      </footer>
    </>
  )
}
