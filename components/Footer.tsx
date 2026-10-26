export default function Footer() {
  return (
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
      <nav className="footer-links" aria-label="Footer">
        <a href="/amazon-reporting">Reporting for Amazon Sellers</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
      <p className="footer-copy">© 2026 Wind River Advisory LLC · Lander, Wyoming</p>
    </footer>
  )
}
