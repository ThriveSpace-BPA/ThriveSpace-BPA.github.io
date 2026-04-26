// Inject nav
function injectNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'features.html', label: 'Features' },
    { href: 'markets.html', label: 'Markets' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'about.html', label: 'About' },
    { href: 'demo.html', label: 'Try Demo' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-mark">T</div>
        ThriveSpace
      </a>
      <ul class="nav-links">${links}</ul>
      <a href="demo.html" class="btn btn-primary" style="font-size:0.85rem;padding:9px 20px;">Try Free Demo →</a>
    </nav>`;
  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.boxShadow = window.scrollY > 10 ? 'var(--shadow-md)' : 'none';
  });
}

// Inject footer
function injectFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">🌿 ThriveSpace</div>
            <p class="footer-desc">AI-powered mental wellness for students worldwide. Supporting teens in India, Japan, and the UK.</p>
          </div>
          <div class="footer-col">
            <h5>Product</h5>
            <a href="features.html">Features</a>
            <a href="pricing.html">Pricing</a>
            <a href="demo.html">Try Demo</a>
          </div>
          <div class="footer-col">
            <h5>Markets</h5>
            <a href="markets.html#india">India</a>
            <a href="markets.html#japan">Japan</a>
            <a href="markets.html#uk">United Kingdom</a>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <a href="about.html">About Us</a>
            <a href="about.html#mission">Our Mission</a>
            <a href="about.html#team">Team</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 ThriveSpace · All rights reserved</span>
          <span>Privacy · Terms · Data Security</span>
        </div>
        <div class="footer-disclaimer">
          ⚠️ This website is a prototype created for BPA Global Marketing Team (500) competition purposes only. ThriveSpace is a fictional company created for the Business Professionals of America National Leadership Conference. Team: Mithil Gajula, Vikhyat Jilla, Ayush Nanda, Srinesh Toranala · Independence High School.
        </div>
      </div>
    </footer>`;
}
