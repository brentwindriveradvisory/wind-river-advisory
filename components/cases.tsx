// Case study content shared by the homepage (featured) and the Work page (full set).

export type CaseStudy = {
  id: string
  tag: string
  title: string
  problemLabel?: string
  problem: string
  solutionLabel?: string
  solutionName: string
  solution: string
  results?: string[]
}

export const cases: Record<string, CaseStudy> = {
  optics: {
    id: 'optics',
    tag: 'Outdoor Optics · Consumer Products',
    title: 'Automated profit and margin reporting across every sales channel',
    problem:
      'Knowing what each product actually earned meant hours of spreadsheet wrangling every month: pulling sales and cost data from the inventory system, matching orders to sales channels, and separately piecing together Amazon exports from the US and Canada with fees, currency conversion, and product costs.',
    solutionName: 'Automated margin and marketplace profit reports',
    solution:
      'Two connected automations. The first pulls sales and cost data from the inventory system, matches each order to its sales channel, and delivers a finished monthly margin report by product line, category, and customer segment, with no manual work. The second turns raw Amazon sales exports from the US and Canada into a finished profit report, combining sales, Amazon fees, currency conversion, and product costs.',
    results: [
      'The monthly margin report runs on its own in about two minutes, replacing hours of spreadsheet work',
      'Ties to the penny with their accounting system',
      'The Amazon profit report for the US and Canada is produced in minutes instead of hours',
      'The team sees what each product earns after fees and costs, and uses it to decide where advertising dollars will do the most good',
    ],
  },
  salesTax: {
    id: 'sales-tax',
    tag: 'Online Retail · E-commerce',
    title: 'Monthly sales tax reporting that builds and delivers itself',
    problem:
      'Preparing to file sales tax meant an afternoon of manual exports from Shopify and copy-and-paste into spreadsheets every month, and the by-hand report was prone to errors.',
    solutionName: 'Automated sales tax report',
    solution:
      'Every month, the automation pulls Shopify payouts and orders, builds a shareable spreadsheet with sales tax broken down by state and by county, and emails it to the team. No manual exports or copy-and-paste.',
    results: [
      'Filing sales tax went from an afternoon of spreadsheet work to checking a finished report',
      'Caught errors in the old by-hand report, including orders that had been left out entirely',
    ],
  },
  academy: {
    id: 'academy',
    tag: 'Education Services · Language Academy',
    title: 'A custom web app to run a full multi-subject academy from any phone',
    problem:
      'Running an academy across eight subjects and dozens of classes meant tracking attendance, payments, and teacher hours entirely by hand. Payment reconciliation happened at the end of each month from scattered records, parent notifications required individual messages, and there was no way to see enrollment, revenue, or expenses in one place.',
    solutionName: 'Rise Academy Attendance & Payments, custom operations web app',
    solution:
      "A browser-based app that manages the full operation in one place: attendance with session lock and confirm, automated WhatsApp and email notifications for absences and cancellations, monthly payment tracking with running balances, bank statement import with auto-categorized expenses, and a one-click P&L report. Enrollment stats and per-student attendance percentages update automatically. Monthly schedules self-generate based on each class's recurring pattern. Runs from any phone or computer, no download needed.",
  },
  tennis: {
    id: 'tennis',
    tag: 'Cardio Tennis · Instruction Business',
    title: 'A custom web app to run attendance, emails, and scheduling in one place',
    problem:
      'Coaches were marking attendance manually with no connection to the booking system. Absence and reminder emails had to be written and sent one by one. There was no record of makeup sessions, no way to lock finalized attendance, and no single place to see the full schedule.',
    solutionName: 'Yo! Attend, custom attendance + communications web app',
    solution:
      'A browser-based app (no download needed) that syncs confirmed bookings directly from the existing booking system, lets coaches tap to mark attendance, automates absence and reminder emails, tracks makeup sessions, and exports a full attendance backup with one click; accessible from any phone or computer, with all data saved in real time.',
  },
  workshop: {
    id: 'workshop',
    tag: 'Small Business Education · Workshop',
    title: 'An AI for Small Business workshop built around what owners wanted to learn',
    problemLabel: 'The brief',
    problem:
      'A small-business support network at a community college wanted a practical introduction to AI for local business owners, grounded in their real day-to-day work rather than hype.',
    solutionLabel: 'What we delivered',
    solutionName: 'AI for Small Business workshop',
    solution:
      'Before the session, we surveyed participants about their businesses, current use of AI, and biggest obstacles, then built the content around what they actually wanted to learn, from everyday time-saving tools to getting started on a limited budget.',
  },
}

export function CaseCard({ c, maxResults }: { c: CaseStudy; maxResults?: number }) {
  const results = c.results ? c.results.slice(0, maxResults ?? c.results.length) : []
  return (
    <div className="case-card" id={c.id}>
      <span className="case-tag">{c.tag}</span>
      <h3>{c.title}</h3>
      <div className="case-problem">
        <span className="case-problem-label">{c.problemLabel ?? 'The problem'}</span>
        <p>{c.problem}</p>
      </div>
      <span className="case-solution-label">{c.solutionLabel ?? 'The solution we built'}</span>
      <p className="case-solution-name">{c.solutionName}</p>
      <p className="case-solution-body">{c.solution}</p>
      {results.length > 0 && (
        <div className="case-results">
          <span className="case-solution-label">The result</span>
          <ul>
            {results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
