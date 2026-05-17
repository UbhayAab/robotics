// ============================================================
// ROBOTICS RESEARCH WEBSITE — INTERACTIVE LOGIC
// Three.js hero, Chart.js visualizations, GSAP animations
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 700, once: true, offset: 80 });
  initHeroCanvas();
  initNavigation();
  initCharts();
  renderComponents();
  initDensityBars();
  initCounters();
});

// ---- THREE.JS PARTICLE HERO ----
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles
  const count = 2000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const cols = new Float32Array(count * 3);
  const cyan = new THREE.Color(0x00d4ff);
  const purple = new THREE.Color(0x7c3aed);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    const c = Math.random() > 0.5 ? cyan : purple;
    cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  const mat = new THREE.PointsMaterial({ size: 0.03, vertexColors: true, transparent: true, opacity: 0.7 });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  // Connecting lines
  const lineGeo = new THREE.BufferGeometry();
  const linePos = new Float32Array(600 * 3);
  for (let i = 0; i < 600; i++) {
    linePos[i * 3] = (Math.random() - 0.5) * 16;
    linePos[i * 3 + 1] = (Math.random() - 0.5) * 16;
    linePos[i * 3 + 2] = (Math.random() - 0.5) * 16;
  }
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.06 });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  camera.position.z = 8;
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.0008;
    points.rotation.x += 0.0003;
    lines.rotation.y += 0.0005;
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// ---- NAVIGATION ----
function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));

  // Active state on scroll
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(s => {
      const top = s.offsetTop;
      const h = s.offsetHeight;
      const id = s.getAttribute('id');
      if (scrollY >= top && scrollY < top + h) {
        navLinks.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) a.classList.add('active');
        });
      }
    });
  });
}

// ---- CHART.JS ----
function initCharts() {
  const defaults = Chart.defaults;
  defaults.color = '#9ca3af';
  defaults.font.family = "'Inter', sans-serif";
  defaults.scale.grid = { color: 'rgba(255,255,255,0.04)' };
  defaults.scale.border = { color: 'rgba(255,255,255,0.06)' };
  defaults.plugins.legend.labels.usePointStyle = true;
  defaults.plugins.legend.labels.pointStyleWidth = 10;

  // Market Growth Chart
  const ctxMarket = document.getElementById('chart-market');
  if (ctxMarket) {
    new Chart(ctxMarket, {
      type: 'line',
      data: {
        labels: MARKET_DATA.globalMarket.labels,
        datasets: [
          { label: 'Total', data: MARKET_DATA.globalMarket.total, borderColor: '#00d4ff', backgroundColor: 'rgba(0,212,255,0.1)', fill: true, tension: 0.4, pointRadius: 4 },
          { label: 'Industrial', data: MARKET_DATA.globalMarket.industrial, borderColor: '#7c3aed', backgroundColor: 'rgba(124,58,237,0.05)', fill: true, tension: 0.4, pointRadius: 3 },
          { label: 'Consumer', data: MARKET_DATA.globalMarket.consumer, borderColor: '#06d6a0', backgroundColor: 'rgba(6,214,160,0.05)', fill: true, tension: 0.4, pointRadius: 3 },
        ]
      },
      options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'USD Billions' } } } }
    });
  }

  // Industry Doughnut
  const ctxInd = document.getElementById('chart-industries');
  if (ctxInd) {
    new Chart(ctxInd, {
      type: 'doughnut',
      data: {
        labels: MARKET_DATA.installationsByIndustry.labels,
        datasets: [{ data: MARKET_DATA.installationsByIndustry.values, backgroundColor: MARKET_DATA.installationsByIndustry.colors, borderWidth: 0, hoverOffset: 8 }]
      },
      options: { responsive: true, maintainAspectRatio: true, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { padding: 12, font: { size: 11 } } } } }
    });
  }

  // RaaS Chart
  const ctxRaas = document.getElementById('chart-raas');
  if (ctxRaas) {
    new Chart(ctxRaas, {
      type: 'bar',
      data: {
        labels: MARKET_DATA.raas.labels,
        datasets: [{ label: 'RaaS Market', data: MARKET_DATA.raas.values, backgroundColor: (ctx) => { const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300); g.addColorStop(0, 'rgba(249,115,22,0.8)'); g.addColorStop(1, 'rgba(239,71,111,0.3)'); return g; }, borderRadius: 6 }]
      },
      options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'USD Billions' } } } }
    });
  }
}

// ---- RENDER DYNAMIC COMPONENTS ----
function renderComponents() {
  // VLA Table
  const tbody = document.getElementById('vla-table-body');
  if (tbody) {
    VLA_MODELS.forEach(m => {
      tbody.innerHTML += `<tr><td class="model-name">${m.name}</td><td>${m.creator}</td><td><span class="model-year">${m.year}</span></td></tr>`;
    });
  }

  // Company Cards
  const compContainer = document.getElementById('company-cards');
  if (compContainer) {
    FUNDING_DATA.topCompanies.forEach(c => {
      compContainer.innerHTML += `
        <div class="glass-card company-card">
          <div class="company-category">${c.category}</div>
          <div class="company-name">${c.name}</div>
          <div class="company-valuation" style="color: ${c.color}">${c.valuation}</div>
          <div class="company-focus">${c.focus}</div>
          <div class="company-meta"><span>📍 ${c.hq}</span><span>🗓 ${c.founded}</span><span>💰 ${c.raised}</span></div>
        </div>`;
    });
  }

  // VC Cards
  const vcContainer = document.getElementById('vc-cards');
  if (vcContainer) {
    FUNDING_DATA.vcFirms.forEach(v => {
      vcContainer.innerHTML += `
        <div class="glass-card vc-card">
          <div class="vc-name">${v.name}</div>
          <div class="vc-thesis">"${v.thesis}"</div>
          <div class="vc-bets">${v.bets.map(b => `<span class="vc-bet-tag">${b}</span>`).join('')}</div>
        </div>`;
    });
  }

  // India Startups
  const indiaContainer = document.getElementById('india-startups');
  if (indiaContainer) {
    INDIA_STARTUPS.forEach(s => {
      indiaContainer.innerHTML += `
        <div class="glass-card startup-card">
          <div class="startup-name">${s.name}</div>
          <div class="startup-location">📍 ${s.location}</div>
          <div class="startup-focus">${s.focus}</div>
          <div class="startup-funding">${s.funding}</div>
        </div>`;
    });
  }

  // Vertical Tabs
  const tabsContainer = document.getElementById('vertical-tabs');
  const contentsContainer = document.getElementById('vertical-contents');
  if (tabsContainer && contentsContainer) {
    VERTICALS.forEach((v, i) => {
      tabsContainer.innerHTML += `<button class="vertical-tab ${i === 0 ? 'active' : ''}" data-id="${v.id}">${v.icon} ${v.title}</button>`;
      contentsContainer.innerHTML += `
        <div class="vertical-content ${i === 0 ? 'active' : ''}" data-id="${v.id}">
          <div class="vertical-detail-grid">
            <div class="glass-card">
              <h3 style="margin-bottom: 12px;">${v.icon} ${v.title}</h3>
              <div class="vertical-metrics">
                <div class="vertical-metric"><div class="metric-label">Market Size</div><div class="metric-value">${v.marketSize}</div></div>
                <div class="vertical-metric"><div class="metric-label">CAGR</div><div class="metric-value">${v.cagr}</div></div>
                <div class="vertical-metric"><div class="metric-label">India Fit</div><div class="metric-value">${v.indiaFit}</div></div>
                <div class="vertical-metric"><div class="metric-label">Capital</div><div class="metric-value">${v.capitalNeeded}</div></div>
              </div>
              <p style="color: var(--text-secondary); margin-bottom: 16px;">${v.description}</p>
              <h4 style="margin-bottom: 8px;">Opportunities</h4>
              <ul class="vertical-list">${v.opportunities.map(o => `<li>${o}</li>`).join('')}</ul>
              ${v.challenges.length ? `<h4 style="margin: 16px 0 8px;">Challenges</h4><ul class="vertical-list">${v.challenges.map(c => `<li>${c}</li>`).join('')}</ul>` : ''}
            </div>
            <div>
              <div class="glass-card" style="margin-bottom: 16px;">
                <h4 style="margin-bottom: 8px;">Key Metric</h4>
                <p style="font-size: 1.3rem; font-weight: 700; color: var(--accent-cyan);">${v.keyMetric}</p>
              </div>
              <div class="glass-card">
                <h4 style="margin-bottom: 8px;">Players</h4>
                <div class="vertical-players">${v.players.map(p => `<span class="vertical-player-tag">${p}</span>`).join('')}</div>
              </div>
            </div>
          </div>
        </div>`;
    });

    // Tab switching
    document.querySelectorAll('.vertical-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.vertical-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.vertical-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.querySelector(`.vertical-content[data-id="${tab.dataset.id}"]`).classList.add('active');
      });
    });
  }

  // Moat Cards
  const moatContainer = document.getElementById('moat-cards');
  if (moatContainer) {
    MOAT_FRAMEWORK.forEach(m => {
      const dots = Array.from({ length: 5 }, (_, i) => `<div class="moat-dot ${i < m.strength ? 'filled' : ''}"></div>`).join('');
      moatContainer.innerHTML += `
        <div class="glass-card moat-card" style="margin-bottom: 12px;">
          <div class="moat-strength">${dots}</div>
          <div class="moat-info">
            <div class="moat-type">${m.type}</div>
            <div class="moat-desc">${m.description}</div>
            <div class="moat-time">Time to build: ${m.timeToBuild}</div>
          </div>
        </div>`;
    });
  }

  // Failure Cards
  const failContainer = document.getElementById('failure-cards');
  if (failContainer) {
    FAILURE_PATTERNS.forEach(f => {
      failContainer.innerHTML += `
        <div class="glass-card failure-card" style="margin-bottom: 12px;">
          <div class="failure-pattern">${f.pattern}</div>
          <div class="failure-desc">${f.description}</div>
          <div class="failure-freq">${f.frequency}</div>
        </div>`;
    });
  }

  // China Comparison
  const chinaContainer = document.getElementById('china-comparison');
  if (chinaContainer) {
    chinaContainer.innerHTML = `
      <div class="comparison-col china">
        <h4 style="color: var(--accent-red);">🇨🇳 China Strengths</h4>
        <ul>${CHINA_COMPARISON.indiaVsChina.china.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>
      <div class="comparison-col india">
        <h4 style="color: var(--accent-green);">🇮🇳 India Must Win On</h4>
        <ul>${CHINA_COMPARISON.indiaVsChina.india.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>`;
  }

  // Case Studies
  const caseContainer = document.getElementById('case-study-cards');
  if (caseContainer) {
    CASE_STUDIES.forEach(c => {
      caseContainer.innerHTML += `
        <div class="glass-card case-study-card">
          <div class="case-name" style="color: ${c.color}">${c.name}</div>
          <div class="case-category">${c.category}</div>
          <div class="case-metrics">
            <div class="case-metric"><div class="value" style="color: ${c.color}">${c.revenue}</div><div class="label">Revenue/Valuation</div></div>
            <div class="case-metric"><div class="value">${c.revenueGrowth}</div><div class="label">Growth</div></div>
            <div class="case-metric"><div class="value">${c.backlog}</div><div class="label">Scale</div></div>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">${c.strategy}</p>
          <div class="case-lesson"><strong>Lesson:</strong> ${c.lesson}</div>
        </div>`;
    });
  }

  // Humanoid Timeline
  const timelineContainer = document.getElementById('humanoid-timeline');
  if (timelineContainer) {
    HUMANOID_TIMELINE.forEach(t => {
      timelineContainer.innerHTML += `
        <div class="glass-card timeline-item">
          <div class="timeline-period">${t.period}</div>
          <div class="timeline-title">${t.status}</div>
          <div class="timeline-desc"><strong>Price:</strong> ${t.price}<br>${t.focus}</div>
        </div>`;
    });
  }

  // Action Plan
  const actionContainer = document.getElementById('action-cards');
  if (actionContainer) {
    ACTION_PLAN.forEach(a => {
      actionContainer.innerHTML += `
        <div class="glass-card action-card">
          <div class="action-icon">${a.icon}</div>
          <div class="action-month">Month ${a.month}</div>
          <div class="action-title">${a.title}</div>
          <div class="action-desc">${a.description}</div>
        </div>`;
    });
  }
}

// ---- DENSITY BARS (animated) ----
function initDensityBars() {
  const container = document.getElementById('density-bars');
  if (!container) return;
  const maxDensity = 1220;
  DENSITY_DATA.countries.forEach(c => {
    const pct = Math.max((c.density / maxDensity) * 100, 5);
    container.innerHTML += `
      <div class="density-bar-row">
        <div class="density-bar-label"><span class="flag">${c.flag}</span>${c.name}</div>
        <div class="density-bar-track">
          <div class="density-bar-fill" style="background: ${c.color}; width: 0;" data-width="${pct}%">${c.density}</div>
        </div>
      </div>`;
  });

  // Animate on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.density-bar-fill').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.width; }, i * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(container);
}

// ---- COUNTER ANIMATION ----
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current);
        }, 20);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}
