import Nav from '@/components/Nav'
import ContactForm from '@/components/ContactForm'

// ── Icons ─────────────────────────────────────────────────────────────────

function IconClipboard() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  )
}

function IconCash() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
    </svg>
  )
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
    </svg>
  )
}

function IconArrows() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  )
}

function IconTrend() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  )
}

function IconCog() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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
        <div className="hero">
          <div className="hero-single">
            <p className="hero-eyebrow">Process Improvement &amp; AI Advisory</p>
            <h1>Custom tools and AI solutions, built for your operation</h1>
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
      </div>

      {/* HOW IT WORKS */}
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
              { n: '02', title: 'Pinpoint the opportunity', body: 'We pinpoint where AI-based tools can make the biggest difference, simplifying workflows, reducing manual work, and elevating the quality of what your team produces.' },
              { n: '03', title: 'Tailored solution design', body: 'We design a tech-based solution that fits seamlessly with how you operate.' },
              { n: '04', title: 'Deployment, training & growth', body: 'We roll out your solution, train your team to own it, and stay engaged to refine what we\'ve built and identify the next opportunity as your business evolves.' },
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
          <h2 className="section-heading">Real problems.<br />Custom solutions.</h2>
          <p className="section-sub">
            Every engagement starts with a specific operational problem. Here&apos;s how we&apos;ve approached two current client situations.
          </p>
          <div className="cases-grid">

            <div className="case-card">
              <div className="case-header">
                <span className="case-industry">Cardio Tennis</span>
                <h3>Attendance tracking to unlock revenue growth</h3>
                <p className="case-sub">Cardio tennis instruction company</p>
              </div>
              <div className="case-body">
                <div className="case-problem">
                  <p className="case-problem-label">The problem</p>
                  <p>The business had no reliable way to track class attendance over time. Without that data, it was impossible to identify which sessions were under-attended, when to add capacity, or where revenue was being left on the table.</p>
                </div>
                <p className="case-solution-label">The solution we built</p>
                <div className="case-tool">
                  <IconClipboard />
                  <div className="case-tool-text">
                    <h5>Attendance tracking &amp; revenue dashboard</h5>
                    <p>A custom tool that logs attendance by session, surfaces trends over time, and flags under-utilized capacity, giving the owner clear data to drive scheduling and pricing decisions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-card">
              <div className="case-header">
                <span className="case-industry">Education Services</span>
                <h3>Attendance and payment reconciliation in one system</h3>
                <p className="case-sub">Education services company</p>
              </div>
              <div className="case-body">
                <div className="case-problem">
                  <p className="case-problem-label">The problem</p>
                  <p>Attendance was tracked separately from payments, creating a reconciliation burden each billing cycle. Missed sessions slipped through, payments were hard to verify, and staff spent significant time on manual cross-checking.</p>
                </div>
                <p className="case-solution-label">The solution we built</p>
                <div className="case-tool">
                  <IconCash />
                  <div className="case-tool-text">
                    <h5>Integrated attendance + payment reconciliation tool</h5>
                    <p>A unified system that connects attendance records directly to billing, auto-flags discrepancies, and generates a reconciliation report, eliminating the manual cross-check entirely.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-bg" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-text">
              <p className="section-label">About</p>
              <h2 className="section-heading">Practical solutions, not just advice</h2>
              <p>We work with small business and nonprofit leaders to identify where process improvements and tech-based solutions can drive the biggest gains in productivity, and where AI tools can simplify workflows and elevate the quality of what their teams produce.</p>
              <p>Our approach is hands-on and collaborative. We start by understanding how your organization actually works, identify the highest-impact opportunities, and design solutions that fit, not generic tools forced into the wrong context.</p>
            </div>
            <div>
              <div className="about-aside">
                <h4>How we work</h4>
                {[
                  { label: 'Engagement style', value: 'Project or retainer' },
                  { label: 'Client size', value: '1–50 employees' },
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
              </p>
              <p>
                The goal is simple: understand what you&apos;re working on, explore whether Wind River Advisory
                is the right fit, and give you a clear sense of what working together would look like.
                You don&apos;t need to have everything figured out before we talk.
              </p>
              <div className="contact-info-item">
                <IconPin />
                <span>Lander, Wyoming, serving clients worldwide</span>
              </div>
              <div className="contact-info-item">
                <IconEmail />
                <span>brent@windriveradvisory.com</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <img src="/logo-dark.png" alt="Wind River Advisory" className="footer-logo" />
        <p className="footer-copy">© 2026 Wind River Advisory LLC · Lander, Wyoming</p>
      </footer>
    </>
  )
}
