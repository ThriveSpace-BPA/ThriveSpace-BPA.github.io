/* nav.js - shared navigation and footer injection */

const NAV_PAGES = [
  { href: 'index.html',    label: 'Home' },
  { href: 'features.html', label: 'Features' },
  { href: 'markets.html',  label: 'Markets' },
  { href: 'pricing.html',  label: 'Pricing' },
  { href: 'about.html',    label: 'About' },
  { href: 'demo.html',     label: 'Demo' },
];

function injectNav(activePage) {
  const links = NAV_PAGES.map(p =>
    `<li><a href="${p.href}"${p.label === activePage ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');

  const el = document.getElementById('nav-placeholder');
  if (!el) return;
  el.innerHTML = `
    <div class="mesh-bg"></div>
    <div class="grid-overlay"></div>
    <nav class="site-nav" id="main-nav">
      <div class="nav-in">
        <a href="index.html" class="nav-logo">
          <div class="nav-logo-mark">T</div>
          Thrive<span>Space</span>
        </a>
        <ul class="nav-links">${links}</ul>
        <a href="demo.html" class="nav-cta">Try Demo</a>
      </div>
    </nav>`;

  window.addEventListener('scroll', () => {
    document.getElementById('main-nav')?.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function injectFooter() {
  const el = document.getElementById('footer-placeholder');
  if (!el) return;
  el.innerHTML = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand-name">ThriveSpace</div>
            <p class="footer-desc">AI-powered mental wellness for students worldwide. Supporting teens aged 12-25 in India, Japan, and the United Kingdom.</p>
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
            <a href="about.html">About</a>
            <a href="about.html#team">Team</a>
            <a href="about.html#timeline">Timeline</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>2026 ThriveSpace. All rights reserved.</span>
          <span class="live-dot">BPA NLC 2026</span>
        </div>
        <div class="footer-disclaimer">
          This website is a prototype created for BPA Global Marketing Team (500) competition purposes only. ThriveSpace is a fictional company. Team: Mithil Gajula, Vikhyat Jilla, Ayush Nanda, Srinesh Toranala. Independence High School. Advisor: Mr. Ryan Schuldt.
        </div>
      </div>
    </footer>`;
}

/* Scroll reveal */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* Animated counters */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const isFloat = el.dataset.float === '1';
      const dur = 1600;
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const v = ease * target;
        el.textContent = (isFloat ? v.toFixed(1) : Math.floor(v).toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(el => obs.observe(el));
}
