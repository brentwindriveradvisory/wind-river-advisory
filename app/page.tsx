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
            Wind River Advisory helps small businesses and nonprofits simplify workflows, reduce administrative burden,
            and automate repetitive tasks, using practical, custom-built AI tools designed for how you actually work.
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
              { n: '02', title: 'Define the opportunity', body: 'We identify where the biggest gains are and what type of solution makes the most sense, whether that\'s an AI tool, a custom-built app, a workflow redesign, or some combination.' },
              { n: '03', title: 'Tailored solution design', body: 'We design a tech-based solution that fits seamlessly with how you operate. This could be either AI-based or a tool that requires no AI at all.' },
              { n: '04', title: 'Deployment & growth', body: 'We roll out your solution and train your team to use it. We stay engaged after launch to refine and improve based on real-world use, and to identify the next opportunity as your business evolves.' },
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
              <h3>A custom web app to run attendance, emails, and scheduling in one place</h3>
              <div className="case-problem">
                <span className="case-problem-label">The problem</span>
                <p>Coaches were marking attendance manually with no connection to the booking system. Absence and reminder emails had to be written and sent one by one. There was no record of makeup sessions, no way to lock finalized attendance, and no single place to see the full schedule.</p>
              </div>
              <span className="case-solution-label">The solution we built</span>
              <p className="case-solution-name">Yo! Attend, custom attendance + communications web app</p>
              <p className="case-solution-body">A browser-based app (no download needed) that syncs confirmed bookings directly from the existing booking system, lets coaches tap to mark attendance, automates absence and reminder emails, tracks makeup sessions, and exports a full attendance backup with one click; accessible from any phone or computer, with all data saved in real time.</p>
            </div>

            <div className="case-card">
              <span className="case-tag">Education Services · Language Academy</span>
              <h3>A custom web app to run a full multi-subject academy from any phone</h3>
              <div className="case-problem">
                <span className="case-problem-label">The problem</span>
                <p>Running an academy across eight subjects and dozens of classes meant tracking attendance, payments, and teacher hours entirely by hand. Payment reconciliation happened at the end of each month from scattered records, parent notifications required individual messages, and there was no way to see enrollment, revenue, or expenses in one place.</p>
              </div>
              <span className="case-solution-label">The solution we built</span>
              <p className="case-solution-name">Rise Academy Attendance & Payments, custom operations web app</p>
              <p className="case-solution-body">A browser-based app that manages the full operation in one place: attendance with session lock and confirm, automated WhatsApp and email notifications for absences and cancellations, monthly payment tracking with running balances, bank statement import with auto-categorized expenses, and a one-click P&amp;L report. Enrollment stats and per-student attendance percentages update automatically. Monthly schedules self-generate based on each class&apos;s recurring pattern. Runs from any phone or computer, no download needed.</p>
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
              <p>Most small businesses and nonprofits don&apos;t need expensive enterprise AI systems. The biggest gains usually come from redesigning a few core workflows using existing AI tools, or building something custom that fits exactly how your team works. Wind River Advisory bridges that gap, acting as a translator between what AI can actually do and how your organization operates.</p>
              <p>We work hands-on with clients to map their workflows, identify the highest-impact opportunities, and build solutions that fit. We also help cut through the noise of AI hype. If you have questions about cost, data privacy, security, or vendor lock-in, those are exactly the right questions to ask, and we&apos;ll give you straight answers.</p>
              <p>Founder Brent Edelman has been on the inside of the AI industry since 2025, training frontier models for three of the five leading AI labs and developing a firsthand understanding of what these tools can and can&apos;t do. He holds a Ph.D. in Economics and brings two decades of experience designing projects that helped small businesses and institutions thrive across Asia, Africa, and the Pacific. His goal is simple: give small teams access to tools that were previously out of reach, and give them time back to focus on what they do best.</p>
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
                Book a free 30-minute call, by phone, Zoom, or Google Meet, whatever works best for you.
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
                <span>Lander, Wyoming, serving clients worldwide</span>
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
