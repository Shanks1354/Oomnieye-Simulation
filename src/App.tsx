import ScrollAnimation from "./ScrollAnimation";
const assetPath = "/assets"

const assets = {
  map: `${assetPath}/659e2.png`,
  metrics: `${assetPath}/aebcf.png`,
  glowTop: `${assetPath}/e6ed5.svg`,
  glowBottom: `${assetPath}/1fc36.svg`,
  arrow: `${assetPath}/ed666.svg`,
  location: `${assetPath}/b1ce8.svg`,
  online: `${assetPath}/b96b1.svg`,
  activity: `${assetPath}/3ccd7.svg`,
  divider: `${assetPath}/1986a.svg`,
  moon: `${assetPath}/e3727.svg`,
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="OOMNIEYE home">
        <span className="brand-mark">
          <span />
        </span>
        <span>OOMNIEYE</span>
      </a>

      <nav className="primary-nav" aria-label="Primary navigation">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#solutions">Solutions</a>
        <a href="#platform">Platform</a>
      </nav>

      <div className="header-actions">
        <button
          className="theme-button"
          type="button"
          aria-label="Change theme"
        >
          <img src={assets.moon} alt="" />
        </button>
        <a className="demo-link" href="#demo">
          Request Demo
        </a>
        <a className="signin-link" href="#signin">
          Sign in
        </a>
      </div>
    </header>
  )
}

function Dashboard() {
  return (
    <section className="dashboard" aria-label="Live analytics dashboard">
      <div className="dashboard-header">
        <img className="location-icon" src={assets.location} alt="" />
        <span className="live-feed">Live Feed</span>
        <img className="online-dot" src={assets.online} alt="" />
        <span className="online-label">Online</span>
      </div>

      <img
        className="map-panel"
        src={assets.map}
        alt="Live location activity map"
      />
      <img
        className="metrics-panel"
        src={assets.metrics}
        alt="Live analytics metrics"
      />

      <div className="activity-card">
        <img src={assets.activity} alt="" />
        <div>
          <strong>Recent Activity</strong>
          <span>3 new events</span>
        </div>
      </div>

      <div className="anomaly-card">
        <p>AI&nbsp;&nbsp; . &nbsp;&nbsp;ANOMALY</p>
        <p>Pump P-102 bearing temperature</p>
        <p>18% above normal band-rising 0.4C/min. Recommend feed reduction.</p>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <div className="stats" aria-label="Company statistics">
      <div className="stat">
        <strong>2,800+</strong>
        <span>HAPPY CUSTOMERS</span>
      </div>
      <img src={assets.divider} alt="" />
      <div className="stat">
        <strong>46+</strong>
        <span>COUNTRIES</span>
      </div>
      <img src={assets.divider} alt="" />
      <div className="stat">
        <strong>1M+</strong>
        <span>DATA POINTS DAILY</span>
      </div>
    </div>
  )
}

function TransitionStrip() {
  return (
    <section className="transition-strip">
      <h2>Experience Oomnieye</h2>
      <p>Scroll to explore the physical world through a live digital twin.</p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <img className="glow footer-glow" src={assets.glowTop} alt="" />
      <div className="footer-content">
        <a className="brand" href="#" aria-label="OOMNIEYE home">
          <span className="brand-mark">
            <span />
          </span>
          <span>OOMNIEYE</span>
        </a>
        <p>&copy; {new Date().getFullYear()} Oomnieye Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
    <main className="page" id="home">
      <img className="glow glow-top" src={assets.glowTop} alt="" />
      <img className="glow glow-bottom" src={assets.glowBottom} alt="" />
      <Header />

      <div className="hero-copy">
        <p className="eyebrow">AI-Powered analytics</p>
        <h1>Digital intelligence for the real world</h1>
        <p className="intro">
          Capture, analyze and act, in real time and across locations. Built for
          what’s next.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#live-twin">
            <span>Enter the live twin</span>
            <img src={assets.arrow} alt="" />
          </a>
          <a className="secondary-button" href="#products">
            See all products
          </a>
        </div>
      </div>

      <Dashboard />
      <Stats />
      
      <TransitionStrip />
    </main>
      
    {/* Scroll Animation added below the homepage */}
    <ScrollAnimation />

    <Footer />
  </>
  )
}
