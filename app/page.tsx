import Nav from '@/components/Nav'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { cases, CaseCard } from '@/components/cases'

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
            Workflow automation and custom tools,{' '}
            <em>built for your operation</em>
          </h1>
          <p className="hero-lead">
            Wind River Advisory helps small businesses and nonprofits simplify workflows, automate reporting and finance
            tasks, and reduce administrative burden, using practical, custom-built tools and AI designed for how you work.
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
            we follow the same process: understand how your organization works, identify the
            highest-impact opportunities, and build solutions that fit.
          </p>
          <div className="how-grid">
            {[
              { n: '01', title: 'Workflow mapping', body: 'We talk to your team and map your processes to understand how work actually gets done and where inefficiency or quality gaps exist.' },
              { n: '02', title: 'Define the opportunity', body: 'We identify where the biggest gains are and what type of solution makes the most sense, whether that\'s an AI tool, a custom-built app, a workflow automation, or some combination.' },
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

      {/* WHAT WE BUILD */}
      <section className="build-bg" id="build">
        <div className="section-inner">
          <p className="section-label">What we build</p>
          <h2 className="section-heading">Practical tools for real operations</h2>
          <p className="section-sub">
            Most of our work falls into four areas. Many engagements combine more than one.
          </p>
          <div className="build-grid">
            {[
              { title: 'Workflow and reporting automation', body: 'Recurring work that runs on its own, from monthly sales tax and margin reports to marketplace profit, pulled from the systems you already use and delivered finished.' },
              { title: 'Custom operations apps', body: 'Browser-based apps that replace scattered spreadsheets, manual tracking, and subscription software, built around how your team already works.' },
              { title: 'AI tools and agents', body: 'AI built into the work your team already does, such as sorting inquiries, drafting first responses, and summarizing information, with a person reviewing what matters.' },
              { title: 'Workshops and training', body: 'Practical, survey-driven sessions that help owners and staff understand what AI and workflow automations can do for their business and how to get started.' },
            ].map((item) => (
              <div className="build-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES (featured) */}
      <section className="cases-bg cases-bg--light" id="work">
        <div className="section-inner">
          <p className="section-label">Our work</p>
          <h2 className="section-heading">Real problems. Custom solutions.</h2>
          <p className="section-sub">
            Every engagement starts with a specific operational problem. Here are a few recent examples.
          </p>
          <div className="cases-grid cases-grid--three">
            <CaseCard c={cases.optics} maxResults={2} />
            <CaseCard c={cases.salesTax} />
            <CaseCard c={cases.academy} />
          </div>
        </div>
      </section>

      {/* WORKSHOPS */}
      <section className="workshop-bg" id="workshops">
        <div className="section-inner workshop-inner">
          <div>
            <p className="section-label">Workshops</p>
            <h2 className="section-heading">AI workshops for small business groups</h2>
          </div>
          <div className="workshop-body">
            <p>
              We recently partnered with a small-business support network at a community college to deliver a
              practical AI for Small Business workshop. Before the session, we surveyed participants about their
              businesses, current use of AI, and biggest obstacles, then built the content around what they
              actually wanted to learn.
            </p>
            <p>
              If you lead a chamber of commerce, business association, or nonprofit network, we can build a
              session around your members.
            </p>
            <a href="#contact" className="btn-primary">Ask about a workshop</a>
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
              <p>Founder Brent Edelman has been on the inside of the AI industry since 2025, training frontier models for three of the five leading AI labs and developing a firsthand understanding of what these tools can and can&apos;t do. He also helps AI developers find out whether their tools can handle real work, pairing them with experienced practitioners who review test cases for realism and spot missing context: the details a professional would know but an AI would not. That work answers the same question every organization faces when deciding how to put AI to work: where is it ready to help, and where does it still need human judgment?</p>
              <p>Brent holds a Ph.D. in Economics and brings two decades of experience designing projects that helped small businesses and institutions thrive across Asia, Africa, and the Pacific. His goal is simple: give small teams access to tools that were previously out of reach, and give them time back to focus on what they do best.</p>
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

      <Footer />
    </>
  )
}
