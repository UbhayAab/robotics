// sections-1.jsx - sections 01-06 (Hook, Why Now, Consumer, Manufacturing, Humanoids, Non-humanoid)

const { useState: useS1, useEffect: useE1, useRef: useR1, useMemo: useM1 } = React;

/* ============================================================
   SECTION 01 - HOOK
   ============================================================ */
function S01_Hook({ motion }) {
  const stageRef = useR1(null);
  const [scroll, setScroll] = useS1(0);
  useE1(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const parallax = scroll * 0.25 * motion;

  return (
    <section id="hook" data-section="01" data-screen-label="01 Hook" style={{ minHeight: '100vh', position: 'relative', padding: '90px 0 80px', overflow: 'hidden' }}>
      {/* Background grid of dots */}
      <DotField motion={motion} />

      <div className="page" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 36 }}>
          <Kicker>Field Notes / Vol. 01</Kicker>
          <span className="meta">May 2026 · Working Draft · v0.5</span>
        </Reveal>

        <h1 className="h-hero" style={{ marginBottom: 28, transform: `translateY(${-parallax * 0.3}px)` }}>
          <Reveal mode="fade" delay={100}>The next</Reveal><br/>
          <Reveal delay={250} style={{ display: 'inline-block' }}>
            platform
          </Reveal>{' '}
          <Reveal delay={400} style={{ display: 'inline-block' }}>
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>has hands.</span>
          </Reveal>
        </h1>

        <div className="col-12" style={{ marginTop: 40 }}>
          <Reveal delay={600} style={{ gridColumn: '1 / span 7' }}>
            <p className="lead">
              A field guide for builders looking at robotics in India in 2026. Global robotics is a
              <strong> $74B market growing 18.4% a year to $280B by 2032</strong>. India sits at
              <strong> $3.59B today, on track to $8.26B by 2030</strong> - but only #6 globally in installs and
              dead last in the G20 on density (7 vs Korea's 1,012). That gap is the entire opportunity.
              This is a memo about how to enter the industry, ship profitable boring SKUs, and use the
              cashflow to fund the R&amp;D that compounds. Compiled from IFR data, founder interviews,
              and obsessive reading.
              Built to be argued with.
            </p>
          </Reveal>
          <Reveal delay={800} style={{ gridColumn: '9 / span 4', alignSelf: 'end' }}>
            <div className="stack-s" style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 18 }}>
              <span className="meta">Reading time</span>
              <span className="serif" style={{ fontSize: 32, lineHeight: 1 }}>~45 min</span>
              <span className="meta dim">13 chapters · 24 charts · 60+ embeds</span>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 90 }}></div>

        {/* Big stat strip */}
        <Reveal delay={400}>
          <div className="stat-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
            <BigStat n={1} label="India robot density / 10k mfg workers" value={7} motion={motion} sub="vs Korea 1,012 · global avg 162 · IFR 2024"/>
            <BigStat n={2} label="India robotics market, 2030" value={8.26} suffix="B" prefix="$" decimals={2} motion={motion} sub="from $3.59B in 2023 · 12.6% CAGR"/>
            <BigStat n={3} label="Indian robotics startups tracked" value={184} motion={motion} sub="up from 36 in 2018 · Inc42 / Tracxn"/>
            <BigStat n={4} label="Cost of a 6-DOF arm, 2015 → 2025" value={-78} suffix="%" motion={motion} sub="median COGS, sub-10kg payload"/>
          </div>
        </Reveal>

        <div style={{ height: 70 }}></div>

        <div className="row" style={{ justifyContent: 'space-between' }}>
          <Reveal>
            <span className="scroll-cue"><span>Scroll to read</span><span className="line"></span></span>
          </Reveal>
          <Reveal delay={200}>
            <span className="meta">13 chapters · ~42 min · last updated 2026-05-17</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BigStat({ n, label, value, prefix = '', suffix = '', decimals = 0, sub, motion }) {
  return (
    <div style={{ padding: '28px 24px', borderRight: n < 4 ? '1px solid var(--rule)' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
        <span className="meta">0{n}</span>
        <span className="meta" style={{ color: 'var(--accent)' }}>●</span>
      </div>
      <div className="serif tnum bigstat-val" style={{ fontSize: 52, lineHeight: 1, letterSpacing: '-0.025em', marginBottom: 14 }}>
        <Counter value={value} prefix={prefix} suffix={suffix} decimals={decimals} motion={motion}/>
      </div>
      <div className="meta" style={{ marginBottom: 6, color: 'var(--ink)' }}>{label}</div>
      {sub && <div style={{ fontSize: 12, color: 'var(--ink-low)', fontFamily: 'var(--f-mono)' }}>{sub}</div>}
    </div>
  );
}

function DotField({ motion }) {
  // Animated dot field background - uses CSS only, very cheap
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(var(--ink-fade) 1px, transparent 1px)',
      backgroundSize: '36px 36px',
      maskImage: 'radial-gradient(ellipse at 70% 40%, black 0%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, black 0%, transparent 70%)',
      opacity: 0.35,
      animation: motion > 0 ? `drift ${30/Math.max(0.2,motion)}s linear infinite` : 'none'
    }}>
      <style>{`@keyframes drift { from { background-position: 0 0; } to { background-position: 36px 36px; } }`}</style>
    </div>
  );
}

/* ============================================================
   SECTION 02 - WHY NOW (horizontal scroll-pinned)
   ============================================================ */
const TAILWINDS = [
  { n: '01', tag: 'CAPABILITY', title: 'Foundation models can finally talk to motors.',
    body: 'Transformer-based VLAs (vision-language-action models) closed the perception-to-action loop that hand-engineered stacks fought for two decades. A single network now ingests language instructions, video frames, and proprioception - and emits joint torques.',
    proof: [
      { k: 'RT-2 → π0 → GR00T', v: '2023-2025' },
      { k: 'Generalist demos', v: '8× yoy' },
      { k: 'Tele-op data, public', v: '~2.4M hrs' }
    ],
    chart: 'capability' },
  { n: '02', tag: 'HARDWARE', title: 'The bill of materials is collapsing.',
    body: 'Cycloidal reducers, harmonic drives, IMUs, LiDAR, BLDC motors - every line item is a fraction of its 2015 price. Chinese supply chains pulled actuator costs down a textbook learning curve; battery energy density nearly doubled.',
    proof: [
      { k: 'Harmonic drive', v: '−72%' },
      { k: 'Solid-state LiDAR', v: '−91%' },
      { k: '6-DOF arm', v: '−78%' }
    ],
    chart: 'cost' },
  { n: '03', tag: 'DEMOGRAPHICS', title: 'The labor math finally inverted.',
    body: 'Working-age population is shrinking in every G7 economy plus China. Wage inflation in logistics and elder-care is structural, not cyclical. For the first time, robots are cheaper than the median worker on more than half of physical-labor tasks.',
    proof: [
      { k: 'Japan, 65+ share', v: '29.1%' },
      { k: 'US warehouse wage CAGR', v: '+6.2%' },
      { k: 'China working-age peak', v: '2011' }
    ],
    chart: 'demo' },
  { n: '04', tag: 'CAPITAL', title: 'Capital believes again, but selectively.',
    body: 'After the 2018-22 hardware winter, capital re-entered with sharper theses: foundation-model robotics, vertical AMRs, and humanoid platforms. Mega-rounds (>$200M) returned. Strategics - auto OEMs, hyperscalers, defense primes - are anchoring.',
    proof: [
      { k: '2024 robotics funding', v: '$6.4B' },
      { k: 'Median Series A', v: '$24M' },
      { k: 'Strategic-led rounds', v: '38%' }
    ],
    chart: 'cap' },
  { n: '05', tag: 'POLICY', title: 'Reshoring + sovereignty turned subsidies on.',
    body: 'CHIPS, IRA, EU Chips Act, India PLI, Japan METI: every major economy is paying for automated domestic manufacturing. Industrial robotics moved from CFO discretion to national-security capex. Defense robotics is a separate, larger budget line.',
    proof: [
      { k: 'India PLI, robotics-adj', v: '$24B' },
      { k: 'US DoD autonomy R&D', v: '$1.8B' },
      { k: 'EU AI Act exemptions', v: 'Industrial: yes' }
    ],
    chart: 'policy' },
  { n: '06', tag: 'INDIA', title: 'And in India, four preconditions finally landed at once.',
    body: 'A 40× density gap to Korea. PLI dollars flowing into electronics, semicon, EV, and drones. EMS plants (Foxconn-IN, Tata Electronics, Dixon) coming online at world-class quality. And a returning diaspora of robotics talent from Google X, BD, Tesla, Skydio. The asymmetry has never been this lopsided - and nobody has priced it in.',
    proof: [
      { k: 'India density / 10K', v: '7' },
      { k: 'Gap vs Korea', v: '174×' },
      { k: 'India in global installs', v: '#6' }
    ],
    chart: 'india' },
];

function S02_WhyNow({ motion }) {
  const wrapRef = useR1(null);
  const trackRef = useR1(null);
  const [progress, setProgress] = useS1(0);

  useE1(() => {
    let raf = 0;
    const isMobile = () => window.matchMedia('(max-width: 820px)').matches;
    const tick = () => {
      raf = 0;
      const el = wrapRef.current; if (!el) return;
      if (isMobile()) {
        // CSS converts to vertical stack; don't drive transforms
        const track = trackRef.current;
        if (track) track.style.transform = '';
        setProgress(0);
        return;
      }
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const t = Math.min(1, Math.max(0, -r.top / (r.height - vh)));
      setProgress(t);
      const track = trackRef.current;
      if (track) {
        const max = track.scrollWidth - window.innerWidth;
        track.style.transform = `translate3d(${-t * max}px, 0, 0)`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); raf && cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="why-now" data-section="02" data-screen-label="02 Why Now"
      ref={wrapRef}
      className="h-pin"
      style={{ height: `${TAILWINDS.length * 110}vh` }}>
      <div className="h-pin-stage" style={{ background: 'var(--paper)' }}>
        {/* Header overlay */}
        <div style={{ position: 'absolute', top: 24, left: 56, right: 56, zIndex: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="row" style={{ gap: 18 }}>
            <span className="meta" style={{ color: 'var(--accent)' }}>§ 02 - Why Now</span>
            <span className="meta">Five structural tailwinds, ordered by causal weight</span>
          </div>
          <span className="meta">{Math.round(progress * 100)}%</span>
        </div>

        {/* progress strip */}
        <div style={{ position: 'absolute', top: 56, left: 56, right: 56, height: 2, background: 'var(--rule)', zIndex: 5 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${progress * 100}%`, background: 'var(--accent)' }}></div>
        </div>

        <div ref={trackRef} className="h-pin-track" style={{ width: `${TAILWINDS.length * 100}vw` }}>
          {TAILWINDS.map((t, i) => (
            <TailwindSlide key={i} t={t} motion={motion} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TailwindSlide({ t, motion, idx }) {
  return (
    <div className="h-slide" style={{ padding: '120px 80px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 380px', gap: 48, height: '100%' }}>
        {/* Number */}
        <div>
          <div className="serif tnum" style={{ fontSize: 132, lineHeight: 1, color: 'var(--ink-fade)' }}>{t.n}</div>
          <div className="meta" style={{ marginTop: 8 }}>Tailwind</div>
        </div>

        {/* Title + body */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 720 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 22 }}>{t.tag}</div>
            <h2 className="h1" style={{ marginBottom: 28 }}>{t.title}</h2>
            <p className="lead" style={{ maxWidth: 580 }}>{t.body}</p>
          </div>
          <div style={{ display: 'flex', gap: 24, paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
            {t.proof.map((p, i) => (
              <div key={i} style={{ flex: 1 }}>
                <div className="meta" style={{ marginBottom: 6 }}>{p.k}</div>
                <div className="serif tnum" style={{ fontSize: 24, color: 'var(--accent)' }}>{p.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <TailwindChart kind={t.chart} motion={motion} />
        </div>
      </div>
    </div>
  );
}

function TailwindChart({ kind, motion }) {
  if (kind === 'capability') {
    return (
      <div className="panel flush">
        <div className="panel-hd"><span className="ttl">Robot policy SOTA · success rate</span><span>2020 - 2026</span></div>
        <div style={{ padding: 18 }}>
          <AreaChart
            series={[
              { label: 'New tasks (zero-shot)', data: [4, 7, 11, 18, 31, 47, 62], color: 'var(--accent)', fill: true },
              { label: 'In-distribution', data: [22, 31, 44, 58, 71, 82, 89], color: 'var(--ink)' }
            ]}
            labels={['2020', '21', '22', '23', '24', '25', '26']}
            yFmt={(v) => `${Math.round(v)}%`}
            motion={motion}
            height={220}
          />
        </div>
      </div>
    );
  }
  if (kind === 'cost') {
    return (
      <div className="panel">
        <div className="meta" style={{ marginBottom: 12 }}>Component cost index · 2015 = 100</div>
        <BarChart
          data={[
            { label: '6-DOF arm', value: 22, color: 'var(--accent)', note: '−78%' },
            { label: 'Harmonic drive', value: 28, note: '−72%' },
            { label: 'IMU 9-axis', value: 14, note: '−86%' },
            { label: 'Solid-state LiDAR', value: 9, note: '−91%' },
            { label: 'BLDC actuator', value: 31, note: '−69%' },
            { label: 'Compute / TOPS', value: 6, note: '−94%' }
          ]}
          max={100} motion={motion}
          format={(v) => `${v}`}
        />
      </div>
    );
  }
  if (kind === 'demo') {
    return (
      <div className="panel flush">
        <div className="panel-hd"><span className="ttl">Working-age population</span><span>2000-2050 idx</span></div>
        <div style={{ padding: 18 }}>
          <AreaChart
            series={[
              { label: 'Japan', data: [100, 96, 92, 87, 82, 76, 70, 64, 59, 54, 50], color: 'var(--accent)' },
              { label: 'China', data: [86, 92, 98, 102, 100, 96, 91, 84, 76, 68, 60], color: 'var(--ink)' },
              { label: 'India', data: [60, 68, 76, 84, 91, 96, 99, 100, 99, 96, 92], color: 'var(--ink-mid)' }
            ]}
            labels={['00','05','10','15','20','25','30','35','40','45','50']}
            yFmt={(v) => v}
            motion={motion}
            height={220}
          />
        </div>
      </div>
    );
  }
  if (kind === 'cap') {
    return (
      <div className="panel flush">
        <div className="panel-hd"><span className="ttl">Robotics venture capital, USD B</span><span>2015-2025</span></div>
        <div style={{ padding: 18 }}>
          <StackedBars
            labels={['15','16','17','18','19','20','21','22','23','24','25']}
            series={[
              { label: 'Seed/A', data: [0.4,0.6,0.8,1.1,1.4,1.6,2.2,1.8,1.2,1.6,2.1], color: 'var(--accent)' },
              { label: 'B+', data: [0.8,1.2,1.6,2.8,3.4,2.6,5.6,4.2,2.4,3.8,4.6], color: 'var(--ink)' },
              { label: 'Strategic', data: [0.2,0.3,0.6,0.9,1.2,0.9,1.4,1.6,1.1,1.0,1.8], color: 'var(--ink-mid)' }
            ]}
            yFmt={(v) => `$${v.toFixed(1)}B`}
            motion={motion}
            height={220}
          />
        </div>
      </div>
    );
  }
  if (kind === 'policy') {
    return (
      <div className="panel">
        <div className="meta" style={{ marginBottom: 14 }}>Sovereign robotics-adjacent allocations</div>
        <BarChart
          data={[
            { label: 'US (CHIPS+IRA, robotics-eligible)', value: 52, color: 'var(--accent)', note: '$52B' },
            { label: 'EU Chips Act, automation', value: 43, note: '$43B' },
            { label: 'China Made-in-China 2025', value: 38, note: '$38B' },
            { label: 'India PLI, electronics+robotics', value: 24, note: '$24B' },
            { label: 'Japan METI moonshot', value: 12, note: '$12B' },
            { label: 'S. Korea K-Robotics', value: 8,  note: '$8B' }
          ]}
          max={60} motion={motion}
          format={() => ''}
        />
      </div>
    );
  }
  if (kind === 'india') {
    return (
      <div className="panel">
        <div className="meta" style={{ marginBottom: 14 }}>Robot density / 10k mfg workers · IFR 2024</div>
        <BarChart
          data={[
            { label: 'South Korea', value: 1220, note: '174×' },
            { label: 'Japan',       value: 446 },
            { label: 'Germany',     value: 415 },
            { label: 'China',       value: 470, note: '67×' },
            { label: 'US',          value: 295 },
            { label: 'Global avg',  value: 162 },
            { label: 'India',       value: 7, color: 'var(--accent)', note: 'gap = bet' }
          ]}
          max={1300} motion={motion}
          format={(v) => v}
        />
      </div>
    );
  }
  return null;
}

/* ============================================================
   SECTION 03 - CONSUMER ROBOTICS
   ============================================================ */
function S03_Consumer({ motion }) {
  return (
    <section id="consumer" data-section="03" data-screen-label="03 Consumer" className="section-pad">
      <div className="page">
        <SectionTag n="03" title="Consumer robotics - a ranked menu of wedges, parked at month 18" source="Roborock IR, Counterpoint India 2024, Whisker, Mammotion, IDC consumer hardware"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              The global consumer category works. Roborock did <em style={{ color: 'var(--accent)' }}>¥11.95B</em> revenue at <em>50% gross / 16.5% net</em>. Whisker bootstrapped to <em>$1B+</em> selling a cat-litter robot. <br/>But this is not where India enters.
            </h2>
            <p className="lead">
              Consumer robotics is real, profitable, and global. The market is <strong>$9.31B in robot
              vacuums alone (20.6M units, +11% YoY)</strong>; <strong>$9.33B → $21.97B in robotic lawn
              mowers</strong> by 2033; <strong>$401M TTM in pool robots</strong>; ~$1B in pet-tech.
              Four of the top five vacuum brands are Chinese and four of those five print cash. India's
              own robot-vacuum market is <strong>$195M growing to $353M by 2031 (10.4% CAGR)</strong>,
              and every brand sold here is a rebadged Chinese ODM. The wedge exists - but a first-time
              Indian builder has no edge in the four games this category is decided on: Shenzhen BOM
              cost, Amazon/Flipkart shelf placement, RMA economics, and unboxing-video distribution.
              So Section 03 is the parking lot - eight ranked wedges I might revisit at month 18 once
              the industrial business in Section 04 is throwing off cash to fund the R&amp;D.
            </p>
          </Reveal>
          <Reveal delay={200} style={{ gridColumn: '9 / span 4', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 16 }}>
            <Kpi label="Global robot-vacuum 2024 sales" value={9.31} prefix="$" suffix="B" decimals={2} sub="20.6M units · +11.2% YoY · IDC" motion={motion}/>
            <Kpi label="India robot-vacuum TAM, 2031" value={353} prefix="$" suffix="M" sub="from $195M 2025 · 10.4% CAGR · TechSci" motion={motion}/>
            <Kpi label="Top 3 brands' share of India" value={62} suffix="%" sub="Xiaomi, Eureka Forbes, ECOVACS" motion={motion}/>
          </Reveal>
        </div>

        <div style={{ height: 64 }}></div>

        {/* THE WEDGE RANKER - 8 ranked opportunities */}
        <Reveal>
          <Kicker>The menu</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 8px' }}>Eight consumer / SMB wedges, ranked.</h3>
          <p className="meta" style={{ marginBottom: 12, color: 'var(--ink-low)', maxWidth: 720 }}>
            India 5-year TAM in INR Cr; BOM at scale (1K units); difficulty captures incumbent strength + go-to-market friction. Two are marked ★ - they have <strong>zero Chinese incumbent in India</strong>, contract-based recurring revenue, and Day-1 unit economics.
          </p>
          <WedgeRanker rows={[
            { wedge: 'Solar-panel cleaning robot - rooftop + utility-scale', tam: '₹500-800 Cr', bom: '~$300', retail: '₹60-80K', difficulty: 'Medium', recommended: true,
              verdict: 'Ecoppia-clone with Indian water/manpower economics. PLI-aligned. Recurring service contracts. Airtouch Solar already at ₹68.4 Cr FY24 doing this.' },
            { wedge: 'Overhead-tank cleaning robot - RWAs + builders', tam: '₹300-500 Cr', bom: '~$200', retail: '₹40-60K + ₹1.5K/clean', difficulty: 'Medium', recommended: true,
              verdict: 'Untapped, high willingness to pay (₹1.5-3K manual today, dangerous), fits the distribution thesis. No incumbent.' },
            { wedge: 'SMB floor-scrubber - gyms, salons, schools, MSME factories', tam: '₹400-600 Cr', bom: '~$700', retail: '₹2.5L', difficulty: 'Medium',
              verdict: 'Peppermint owns malls/airports. The 200-2000 sq ft tier is wide open. RaaS-friendly.' },
            { wedge: 'Window/façade-cleaning robot - high-rise apartments', tam: '₹200-300 Cr', bom: '~$130', retail: '₹25-35K', difficulty: 'Medium-High',
              verdict: 'Real demand in Mumbai/Gurgaon high-rises. Vividobots already at it B2B-only. SKU-down for prosumers.' },
            { wedge: 'Pet litter robot - urban cat parents', tam: '₹150-200 Cr', bom: '~$80', retail: '₹19,999 + ₹399/mo', difficulty: 'Medium',
              verdict: 'Whisker-style moat possible. 2.5M Indian pet cats, 15% YoY. Consumables compound.' },
            { wedge: 'Pool-cleaning robot - clubs + villas', tam: '₹100-150 Cr', bom: '~$120', retail: '₹35-45K', difficulty: 'Low',
              verdict: 'Niche but high-margin B2B. Dolphin-clone at half price. Hotel/club budget.' },
            { wedge: 'Wet-mop + dry-vac for ₹19,999 - Tier-1 metros', tam: '₹2,000-3,000 Cr', bom: '~$95', retail: '₹19,999', difficulty: 'High',
              verdict: 'Huge TAM but saturated. Only if we out-design Xiaomi on Indian dust + mop self-clean. Risky.' },
            { wedge: 'Autonomous fogger / mosquito drone - gated communities', tam: '₹100 Cr', bom: '~$100', retail: '₹15-20K', difficulty: 'Low',
              verdict: 'Easy hardware, marketing-led category creation. Could be a Genrobotics-style govt-procurement adjacency.' }
          ]}/>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Indian pain points & global proof in 2 columns */}
        <div className="col-2">
          <Reveal>
            <div className="panel">
              <Kicker>India-specific pain</Kicker>
              <h3 className="h3" style={{ margin: '12px 0 14px' }}>What the consumer forums and Reddit threads actually say.</h3>
              <ul style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6, paddingLeft: 18, display: 'grid', gap: 10 }}>
                <li><strong>Maid attrition</strong> - 12-18% YoY wage inflation in metros. #1 grievance on r/india / Quora "robot vacuum India" threads. Festival absenteeism is the killer.</li>
                <li><strong>Dust + PM2.5</strong> - Indian floors get filthier per dollar of vacuum than US homes. Self-empty + auto-wash docks more valuable here.</li>
                <li><strong>Hard water</strong> - limescale on tiles, taps, glass. <em>Adjacent wedge with no solution</em>.</li>
                <li><strong>Overhead tank cleaning</strong> - done manually 1-2× a year, dangerous, ₹1.5-3K/visit. Open whitespace.</li>
                <li><strong>Stray-dog / monkey deterrence</strong> - RWAs pay security for this. Ultrasonic + visual deterrent = real B2B.</li>
                <li><strong>Solar panel dust</strong> - every Indian rooftop solar install loses 15-25% output. Ecoppia is the proof point.</li>
                <li><strong>Mosquito fogging</strong> - Mosquitron is junk. Real wedge with marketing.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="panel" style={{ background: 'var(--bg-deep)' }}>
              <Kicker>Global proof - the unit economics work</Kicker>
              <h3 className="h3" style={{ margin: '12px 0 14px' }}>This is not a category - it is a print-money playbook.</h3>
              <FinancialsTable
                cols={[
                  { label: 'Company', key: 'co', w: '1.4fr' },
                  { label: '2024 Revenue', key: 'rev', w: '1fr', numeric: true, accent: true, alwaysAccent: true },
                  { label: 'Gross %', key: 'gm', w: '0.7fr', numeric: true },
                  { label: 'Net %', key: 'nm', w: '0.7fr', numeric: true },
                  { label: 'Note', key: 'note', w: '1.6fr', muted: true }
                ]}
                rows={[
                  { co: 'Roborock', rev: '¥11.95B (~$1.65B)', gm: '50.4%', nm: '16.5%', note: 'STAR 688169 · #1 global GMV 23.4%' },
                  { co: 'Ecovacs', rev: '¥16.5B (~$2.3B)', gm: '~45%', nm: '~5%', note: 'Profitable, margin compressed by price war' },
                  { co: 'Whisker (Litter-Robot)', rev: '~$1B+', gm: 'n/a', nm: 'profitable', note: 'Bootstrapped from $7M in 2015' },
                  { co: 'Mammotion', rev: '700 retail stores, est. $300M+', gm: 'n/a', nm: 'profitable', note: 'TIME Best Invention 2024 + 2025' },
                  { co: 'Maytronics (Dolphin)', rev: '$401M TTM', gm: 'n/a', nm: 'declining', note: 'Lost 90% mcap; Aiper ate cordless' },
                  { co: 'iRobot', rev: '$890M (-)', gm: '22-25%', nm: '-$285M loss', note: 'Carlyle debt; Amazon deal killed by EU' }
                ]}
                footnote="Sources: Yicai Global / 36Kr (Roborock), Hong Kong Stock Exchange filings, iRobot 8-K, Whisker Manufacturing Today profile, Maytronics Calcalist."
              />
            </div>
          </Reveal>
        </div>

        <div style={{ height: 48 }}></div>

        {/* Tighter 4-reason rejection block */}
        <Reveal>
          <div className="panel" style={{ borderLeft: '3px solid var(--accent)' }}>
            <Kicker>Why not phase 1</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 14px' }}>Four reasons consumer is not the opening move - and exactly when it flips.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
              {[
                ['Hardware cost is set in Shenzhen', 'Indian BOM lands 20-35% above Chinese-OEM imports. Cannot win on price until we ship 50K+ units to negotiate Yangtze River Delta volume tooling. Flips at scale, not at start.'],
                ['Distribution = paid retail shelf', 'Amazon/Flipkart Top Brand placement is bought, not earned. Croma/Reliance Digital demand demo associates + co-marketing. No first-time brand wins it without ₹80-120 Cr marketing burn.'],
                ['Returns + after-sales is the brand killer', 'Indian D2C-hardware failures (Noise, boAt missteps) die on RMA, not product. 30-city service partnership is the actual moat - and it takes 18+ months to build.'],
                ['No data flywheel at small scale', 'Roborock has floor maps from 20M households. A cobot in 200 Indian factories starts compounding parts-pose data immediately. Industrial data is denser and stickier per unit.']
              ].map(([t, b], i) => (
                <div key={i}>
                  <div className="h4" style={{ marginBottom: 6 }}>{t}</div>
                  <div style={{ color: 'var(--ink-mid)', fontSize: 14 }}>{b}</div>
                </div>
              ))}
            </div>
            <hr className="hr-dash" style={{ margin: '20px 0' }}/>
            <div style={{ fontSize: 14, color: 'var(--ink-mid)' }}>
              <span style={{ color: 'var(--accent)' }}>The flip condition: </span>
              once the industrial integrator business is at ₹20-30 Cr ARR with 80+ deployed
              units, we have (a) the cashflow to subsidize a consumer SKU's first 24 months, (b) the
              EMS relationships in Pune/Bengaluru to take BOM down 30%, (c) a 30-city service network
              already amortized, and (d) the deeptech-India brand to skip Amazon's first 6 months of
              authority-building. At that point, the top-ranked wedges above become real. Not before.
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        <Reveal>
          <Pull attrib="Internal Roborock OKR · Jan 2025">
            The robot that wins the home is not the one with the best motors. It is the one that
            requires the fewest decisions from the human.
          </Pull>
        </Reveal>

        <div style={{ height: 48 }}></div>

        {/* Video study: what global incumbents look like */}
        <Reveal>
          <VideoStudy
            url="https://www.youtube.com/watch?v=Q39DjMfO9NA"
            title="Why Roborock is dominating robot vacuums - Acquired adjacent breakdown"
            channel="YouTube · Vacuum Wars"
            summary="Roborock's playbook is not a product story, it is a manufacturing-iteration story: 1,043 R&D engineers (40% of staff), 6-month hardware cycle, in-house mechanical + software co-iteration. iRobot outsourced to Jabil and lost the BOM-iteration speed game. Same lesson applies to anyone trying to enter consumer robotics from India - without local manufacturing intimacy, you ship a slow product."
            takeaways={[
              '50% gross margin is structurally available at the $300-1,500 retail tier',
              'iRobot is the cautionary tale: outsourcing manufacturing kills the iteration loop',
              'India route would require 18+ months of EMS partnership work BEFORE shipping'
            ]}
          />
        </Reveal>

        <div style={{ height: 32 }}></div>

        <Reveal>
          <VideoReel
            title="Watch · consumer robotics in the wild"
            sub="6 videos · so we know exactly what we revisit at month 18"
            items={[
              { label: 'Roborock Saros 10R - auto-empty + mop wash demo', source: 'YouTube · Vacuum Wars', url: 'https://www.youtube.com/watch?v=ksaSXJjW7nA' },
              { label: 'Mammotion LUBA 2 AWD - wire-free RTK lawn robot', source: 'YouTube · EasyLawnMowing', url: 'https://www.youtube.com/watch?v=Ivw9qUdSK3g' },
              { label: 'Whisker Litter-Robot 4 - the cat-litter moat', source: 'YouTube · Whisker', url: 'https://www.youtube.com/watch?v=XSC4_8myD2k' },
              { label: 'Aiper Scuba S1 Pro - pool robot taking Maytronics share', source: 'YouTube · Aiper', url: 'https://www.youtube.com/watch?v=S96qnUWypwo' },
              { label: 'Dreame X40 Ultra - auto-fill / auto-empty + hot water mop', source: 'YouTube · Vacuum Wars', url: 'https://www.youtube.com/watch?v=S6tcM1U9f8s' },
              { label: 'Eufy S1 Pro - Anker top-tier robovac', source: 'YouTube · Anker', url: 'https://www.youtube.com/watch?v=gxGNC_bXwZs' }
            ]}/>
        </Reveal>

      </div>
    </section>
  );
}

/* ============================================================
   SECTION 04 - MANUFACTURING / INDUSTRIAL
   ============================================================ */
function S04_Manufacturing({ motion }) {
  return (
    <section id="manufacturing" data-section="04" data-screen-label="04 Manufacturing" className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="page">
        <SectionTag n="04" title="Manufacturing & industrial - the boring, profitable engine" source="IFR World Robotics 2024, MIR + AutoStore filings, Inc42 India"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 8' }}>
            <h2 className="h2" style={{ marginBottom: 28 }}>
              Industrial robotics is a <em>$78B</em> business growing at 11% a year. India is <em style={{ color: 'var(--accent)' }}>0.5%</em> of it. That arithmetic is the entire opportunity.
            </h2>
            <p className="lead" style={{ maxWidth: 820 }}>
              The mistake tech-Twitter makes is reading "robotics" and thinking humanoids. The actual
              robotics economy lives inside cobots welding car frames, AMRs ferrying totes in fulfilment
              centres, vision systems inspecting PCBs, and palletisers stacking pharma cartons. It is
              unsexy. It is profitable. It has 11% global CAGR for two decades through every AI hype
              cycle. And in India, it has barely begun.
            </p>
          </Reveal>
        </div>

        <div style={{ height: 24 }}></div>

        {/* Dashboard grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
          {/* Density map */}
          <Reveal style={{ gridColumn: 'span 7' }}>
            <div className="panel flush" style={{ height: '100%' }}>
              <div className="panel-hd"><span className="ttl">Robot density · units per 10,000 manufacturing workers</span><span>2024 · IFR</span></div>
              <div style={{ padding: 22 }}>
                <BarChart
                  data={[
                    { label: 'South Korea', value: 1220, color: 'var(--accent)', note: '#1 · 174× India' },
                    { label: 'Singapore',   value: 770, note: '#2' },
                    { label: 'China',       value: 470, note: '#3 · 67× India' },
                    { label: 'Germany',     value: 415, note: '#4' },
                    { label: 'Japan',       value: 446 },
                    { label: 'United States', value: 295 },
                    { label: 'Global average', value: 162 },
                    { label: 'India',       value: 7, color: 'var(--accent-deep)', note: 'the bet' }
                  ]}
                  max={1300} motion={motion}
                  format={(v) => v}
                />
              </div>
            </div>
          </Reveal>

          {/* KPIs stack */}
          <div style={{ gridColumn: 'span 5', display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: 16 }}>
            <Reveal delay={100}>
              <div className="panel" style={{ height: '100%' }}>
                <div className="meta" style={{ marginBottom: 10 }}>Global installs · units</div>
                <AreaChart
                  series={[
                    { label: 'Industrial', data: [304, 254, 422, 517, 553, 590, 612], color: 'var(--accent)', fill: true },
                    { label: 'Service', data: [82, 96, 118, 158, 198, 246, 312], color: 'var(--ink)' }
                  ]}
                  labels={['18','19','20','21','22','23','24']}
                  yFmt={(v) => `${Math.round(v)}k`}
                  height={180} motion={motion}
                />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="panel" style={{ height: '100%' }}>
                <div className="meta" style={{ marginBottom: 14 }}>Top 5 industrial OEMs · market share '24</div>
                <Donut
                  data={[
                    { label: 'FANUC', value: 21, color: 'var(--accent)' },
                    { label: 'ABB', value: 16 },
                    { label: 'YASKAWA', value: 15 },
                    { label: 'KUKA (Midea)', value: 13 },
                    { label: 'Mitsubishi', value: 8 },
                    { label: 'Others', value: 27, color: 'var(--rule)' }
                  ]}
                  size={180} thick={22} motion={motion}
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div style={{ height: 56 }}></div>

        {/* Two callouts: cobots vs traditional */}
        <div className="col-2">
          <Reveal>
            <div className="panel">
              <Kicker>The boring growth</Kicker>
              <h3 className="h3" style={{ margin: '14px 0 12px' }}>Cobots quietly ate the bottom of the market.</h3>
              <p style={{ color: 'var(--ink-mid)' }}>
                <Gloss term="Cobot" def="Collaborative robot - a force-limited arm safe to operate without a safety cage. Lower payload, lower speed, but trivial to deploy.">Collaborative arms</Gloss> went from 4% to 21% of new industrial installations in seven years. Universal Robots, Doosan, and Techman are the silent compounders.
              </p>
              <div style={{ marginTop: 18 }}>
                <Sparkline data={[4,5,7,10,13,16,18,21]} width={520} height={48} color="var(--accent)" fill motion={motion}/>
              </div>
              <div className="meta" style={{ marginTop: 8 }}>Cobot share of industrial installs · 2017-2024</div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="panel">
              <Kicker>The big platform plays</Kicker>
              <h3 className="h3" style={{ margin: '14px 0 12px' }}>Warehouse automation became its own megacycle.</h3>
              <p style={{ color: 'var(--ink-mid)' }}>
                AutoStore IPO'd at $12B. Symbotic crossed $40B. Locus, Geek+, GreyOrange, AutoX - AMRs and goods-to-person are the largest revenue pool in robotics today. Amazon alone deploys ~750k.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 18 }}>
                {[['Amazon AMRs', '750k'], ['AutoStore bins', '900k+'], ['US fulfillment $/order', '−18%']].map((k, i) => (
                  <div key={i}>
                    <div className="meta">{k[0]}</div>
                    <div className="serif tnum" style={{ fontSize: 26, color: 'var(--accent)' }}>{k[1]}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        {/* India buyers panel */}
        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <div className="panel">
              <Kicker>Who pays the bill in India</Kicker>
              <h3 className="h3" style={{ margin: '12px 0 16px' }}>The buyer list. Not hypothetical - already procuring automation today.</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
                {[
                  ['Tata Electronics', 'iPhone enclosure plants Hosur/Bengaluru; semicon fab Dholera. Cobots + AMRs at scale.'],
                  ['Foxconn India', 'Sriperumbudur, Sunguvarchatram; new Bengaluru iPhone plant. Local cobots competing with Chinese imports.'],
                  ['Reliance (via Addverb)', 'JioMart, Ajio, Netmeds - Addverb-built AMR fleets across 60+ DCs.'],
                  ['Bajaj Auto / Hero / Maruti', 'Auto remains India\'s #1 robot industry (45% share, 2024 IFR). Welding, press shop, paint.'],
                  ['Sun Pharma, Dr Reddy\'s, Cipla', 'Aseptic vial filling, pack lines. Highest margins. Stickiest customers.'],
                  ['Ola Electric, Ather', 'Greenfield EV plants - automation-first by design. Faster procurement than legacy auto.'],
                  ['Adani, ITC, DMart', 'FMCG palletising; cold-chain DCs; outbound sortation.'],
                  ['Mahindra, L&T, Bharat Forge', 'Heavy fabrication; autonomous welding has a 10× productivity story here.']
                ].map(([co, b], i) => (
                  <div key={i} style={{ borderTop: '1px dashed var(--rule)', paddingTop: 10 }}>
                    <div className="h4" style={{ marginBottom: 4, color: 'var(--accent)' }}>{co}</div>
                    <div style={{ color: 'var(--ink-mid)', fontSize: 13, lineHeight: 1.5 }}>{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Forum complaints */}
          <Reveal delay={150} style={{ gridColumn: '8 / span 5' }}>
            <div className="panel" style={{ height: '100%', background: 'var(--bg-deep)' }}>
              <Kicker>Heard in the field</Kicker>
              <h3 className="h3" style={{ margin: '12px 0 14px' }}>What Indian manufacturers actually complain about online.</h3>
              <p className="meta" style={{ marginBottom: 16, color: 'var(--ink-low)' }}>Quotes paraphrased from LinkedIn posts, r/PLC, Indian operations forums.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['"German cobots are fine but service takes 6 weeks. We need spares in 3 days, not 30."', 'Plant head, Tier-1 auto supplier'],
                  ['"FANUC integration cost ate 40% of project. Made the ROI laughable."', 'Operations director, white goods OEM'],
                  ['"Nobody in India trains cobot programmers. We hire kids and teach them ourselves."', 'GM, MSME injection-moulding'],
                  ['"Our PCB inspection line is 4 imported cameras + 4 vendors + 4 firmwares. We need one stack."', 'Quality lead, EMS factory'],
                  ['"Chinese AMRs work fine until firmware update breaks WMS integration. Then you wait."', '3PL operations']
                ].map(([q, a], i) => (
                  <div key={i} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 12 }}>
                    <div className="serif" style={{ fontSize: 14.5, lineHeight: 1.45, color: 'var(--ink)', fontStyle: 'italic' }}>{q}</div>
                    <div className="meta" style={{ marginTop: 6 }}>- {a}</div>
                  </div>
                ))}
              </div>
              <hr className="hr-dash" style={{ margin: '18px 0 14px' }}/>
              <div style={{ fontSize: 13, color: 'var(--ink-mid)' }}>
                The pattern: <span style={{ color: 'var(--accent)' }}>service, integration, talent, software-stitching</span>.
                Hardware is the smallest of the four pains. A local, software-first integrator wins on all four.
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        {/* Cobot ROI calculator preview */}
        <Reveal>
          <div className="panel">
            <Kicker>Unit economics</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 14px' }}>The boring math that closes the buyer.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
              <Kpi label="Cobot arm landed cost, India" value={28} prefix="$" suffix="K" motion={motion} sub="UR10e-class · incl. duties + EOAT"/>
              <Kpi label="Integration + commissioning" value={9} prefix="$" suffix="K" motion={motion} sub="~30% of project · local integrator"/>
              <Kpi label="Worker cost replaced (3-shift)" value={6.8} prefix="₹" suffix="L/yr" decimals={1} motion={motion} sub="fully loaded · tier-1 supplier"/>
              <Kpi label="Payback period" value={14} suffix=" months" motion={motion} sub="median · 95% uptime SLA"/>
            </div>
            <div className="meta" style={{ marginTop: 14, color: 'var(--ink-low)' }}>
              Sources: UR / Doosan India distributor quotes (2025), Inc42 cobot ROI study, internal model.
              Live model in Section 10.
            </div>
          </div>
        </Reveal>

        <div style={{ height: 64 }}></div>

        {/* ───────── THE INDIAN ENGINE - companies already doing this profitably ───────── */}
        <Reveal>
          <Kicker>The Indian engine</Kicker>
          <h2 className="h2" style={{ margin: '12px 0 16px', maxWidth: 900 }}>
            Eleven Indian robotics companies. <em style={{ color: 'var(--accent)' }}>Already shipping. Already revenue.</em> Already what we're competing with or selling alongside.
          </h2>
          <p style={{ color: 'var(--ink-mid)', maxWidth: 900, marginBottom: 8 }}>
            FY24 financials pulled from PrivateCircle, Tracxn, and MCA filings via Tofler. This is not a hype list -
            every company below has a real customer, a real product line, and a real revenue number. They have
            also already mapped most of the pain points an Indian builder would otherwise discover the hard way.
          </p>
          <FinancialsTable
            caption="Indian robotics - FY24 revenue + valuation, ranked"
            cols={[
              { label: 'Company', key: 'co', w: '1.5fr' },
              { label: 'Founded', key: 'fy', w: '0.6fr', numeric: true },
              { label: 'FY24 Revenue', key: 'rev', w: '1fr', numeric: true, accent: true, alwaysAccent: true },
              { label: 'Valuation', key: 'val', w: '1fr', numeric: true },
              { label: 'Focus', key: 'focus', w: '2.4fr', muted: true }
            ]}
            rows={[
              { co: 'Addverb Technologies', fy: '2016', rev: '₹290.6 Cr', val: '₹2,591 Cr', focus: 'AMRs, ASRS, Carton Shuttles · Reliance-backed · Bot-Verse Noida (100K bots/yr)' },
              { co: 'SS Innovation', fy: '2019', rev: '₹120.8 Cr', val: '₹2,140.6 Cr', focus: 'SSI Mantra - indigenous modular surgical robot' },
              { co: 'ParcRobotics', fy: '2018', rev: '₹90.9 Cr', val: 'private', focus: 'Robotic weld lines, custom SPMs for industrial automation' },
              { co: 'Airtouch Solar India', fy: '2020', rev: '₹68.4 Cr', val: '₹7.3 Cr', focus: 'Waterless robotic solar panel cleaning · utility-scale farms' },
              { co: 'Janyu Technologies', fy: '2016', rev: '₹25.8 Cr', val: '₹22.0 Cr', focus: 'Defense robotics, ROVs, security automation' },
              { co: 'Genrobotics', fy: '2017', rev: '₹21.8 Cr', val: '₹196.5 Cr', focus: 'Bandicoot manhole robot · 500+ units · 19 states · Anand Mahindra-backed' },
              { co: 'Rapyuta Robotics', fy: '2016', rev: '₹15.8 Cr', val: '₹4.2 Cr', focus: 'Cloud robotics platform · RaaS warehouse AMRs' },
              { co: 'Aegeus Technologies', fy: '2017', rev: '₹15.3 Cr', val: '₹41.1 Cr', focus: 'Robotic surveillance, UGVs, solar cleaning' },
              { co: 'Peppermint Robotics', fy: '2019', rev: '₹6.26 Cr', val: 'private', focus: 'Commercial floor scrubber-dryers SD20/SD45 · GMR Aviation deal · SINE IIT-B' },
              { co: 'Niqo Robotics (TartanSense)', fy: '2015', rev: '₹6.96 Cr (FY25)', val: '$22.2M raised', focus: 'Precision spot-spray cameras · 140K acres · 99.3% accuracy' },
              { co: 'Miko (RN Chidakashi)', fy: '2015', rev: 'private', val: '$86-102M raised', focus: 'Kids companion robot · 500K+ units · Costco + iHeart distribution' }
            ]}
            footnote="Sources: PrivateCircle Top 10 Robotics FY24, Tracxn, Tofler MCA filings, founder interviews. Genrobotics FY25 revenue reported as ₹32.5 Cr."
          />
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Deep-dive: ADDVERB */}
        <Reveal>
          <Kicker>Deep-dive · 01</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 4px' }}>Addverb - the scaled Indian intralogistics platform</h3>
          <div className="meta" style={{ marginBottom: 18, color: 'var(--ink-low)' }}>Founded 2016 · Noida · Reliance Industries acquired strategic stake · CEO Sangeet Kumar</div>
          <div className="col-12">
            <div style={{ gridColumn: '1 / span 7' }}>
              <VideoStudy
                url="https://www.youtube.com/watch?v=YeY7QvSGdEs"
                title="Dynamo - Autonomous Mobile Robot · Material Movement"
                channel="Addverb Technologies"
                summary="The Dynamo is Addverb's flagship AMR - 2,500 kg payload, 2 m/s operating speed, 8-hour runtime on an 8-minute fast charge, pivot-turning for tight aisles. The architecture uses LiDAR-based natural navigation and SLAM, so warehouses don't need magnetic tape, QR codes, or fixed infrastructure. This is what 'software-defined hardware' looks like in B2B logistics: the hardware is buildable in 4 quarters; the moat is the orchestration layer that talks to a customer's WMS and ERP."
                takeaways={[
                  'FY24 revenue ₹290.6 Cr; valued ₹2,591 Cr after $132M Reliance round (~$270M valuation)',
                  '2,000+ robots deployed globally; clients include Amazon, Flipkart, Coca-Cola, PepsiCo, Maersk, Unilever',
                  'Bot-Verse Noida: 2.5-acre, ₹75 Cr facility capable of 100,000 robots/year - vertical integration that no Indian competitor matches',
                  'Strategy: 60% revenue target from international markets - proves Indian software + assembly + global GTM works'
                ]}
              />
            </div>
            <div style={{ gridColumn: '8 / span 5' }}>
              <div className="panel" style={{ height: '100%' }}>
                <Kicker>What MNCs are buying from Addverb</Kicker>
                <h4 className="h4" style={{ margin: '10px 0 14px' }}>The orchestration software, not the metal.</h4>
                <ul style={{ fontSize: 13.5, color: 'var(--ink-mid)', lineHeight: 1.6, paddingLeft: 18, display: 'grid', gap: 8 }}>
                  <li><strong>Synergy of perception, cognition, and precision</strong> - the AMRs are commoditizing; what isn't is the fleet management software talking to SAP, Oracle WMS, and Manhattan.</li>
                  <li><strong>Vertical hardware suite</strong> - carton shuttles + ASRS + multi-carton picking + AMR/AGV fork trucks. Single vendor across the warehouse beats stitching 4.</li>
                  <li><strong>RaaS option</strong> - clients can OpEx instead of CapEx. Day-1 positive cashflow vs traditional ASRS payback of 4-6 years.</li>
                </ul>
                <hr className="hr-dash" style={{ margin: '14px 0' }}/>
                <div className="meta" style={{ fontSize: 11.5 }}>Latest videos to watch:</div>
                <div style={{ display: 'grid', gap: 6, marginTop: 8 }}>
                  <a href="https://www.youtube.com/watch?v=NkbDqkfsiI4" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>→ Wooster Brush autonomous deployment</a>
                  <a href="https://www.youtube.com/watch?v=oG8FQH4_-eA" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>→ Inside Bot-Verse · world's largest mobile robot factory</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Deep-dive: ATI MOTORS */}
        <Reveal>
          <Kicker>Deep-dive · 02</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 4px' }}>Ati Motors - rugged AMRs for legacy factory floors</h3>
          <div className="meta" style={{ marginBottom: 18, color: 'var(--ink-low)' }}>Founded 2017 · Bengaluru · $20M Series B 2024 · CEO Saurabh Chandra (ex-Niki.ai)</div>
          <div className="col-12">
            <div style={{ gridColumn: '1 / span 7' }}>
              <VideoStudy
                url="https://www.youtube.com/watch?v=viys3uYGWMQ"
                title="Sherpa Tug - autonomous tugger through unstructured factory"
                channel="Ati Motors"
                summary="The Sherpa Tug is engineered for the chaos that traditional AGVs cannot navigate. Pristine floors and magnetic tape aren't options in legacy Indian and US manufacturing. Sherpa Tug uses 3D LiDAR + camera vision + high ground-clearance suspension to handle ramps, speed bumps, and outdoor terrain. Up to 1,000 kg payload. The Sherpa 10K variant handles 10,000 lbs (~4,600 kg). The Sherpa Mecha adds dual-armed mobile manipulation for machine tending and bin handling."
                takeaways={[
                  'Clients: Hyundai, Forvia, 70+ facilities globally',
                  'Average ROI under 6 months in high-labor-cost US/EU markets',
                  '"Ati Flow" - fleet orchestration software with multi-vendor integration (talks to other AMRs, not just Ati)',
                  'Zero infrastructure changes required - direct sell to plant managers, bypasses 18-month CapEx cycles'
                ]}
              />
            </div>
            <div style={{ gridColumn: '8 / span 5' }}>
              <VideoStudy
                url="https://www.youtube.com/watch?v=Mosg_p9YgBA"
                title="Sherpa Mecha - the dual-armed robot revolutionizing US manufacturing"
                channel="Ati Robotics"
                summary="The Mecha sits on the Sherpa base but adds two arms for picking and machine tending. This is the form factor MNCs will pay for - the AMR is the platform, the arms are the configurable workload. Operates 24 hours, replaces 2-3 shifts of low-skill labor."
                takeaways={[
                  'Sherpa Mecha pilots at Fortune 500 automotive plants',
                  'Indian product, US revenue - the export model that Aayush should care about'
                ]}
              />
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Deep-dive: CYNLR */}
        <Reveal>
          <Kicker>Deep-dive · 03</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 4px' }}>CynLr - physical AI from IISc, deployed at Audi</h3>
          <div className="meta" style={{ marginBottom: 18, color: 'var(--ink-low)' }}>Founded 2018 · Bengaluru · $10M+ raised · Nikhil Ramaswamy + Gokul NA</div>
          <div className="col-12">
            <div style={{ gridColumn: '1 / span 8' }}>
              <VideoStudy
                url="https://www.youtube.com/watch?v=h7qwcLV2adI"
                title="CyRo - Real-time Object Intelligence · AI Impact Summit"
                channel="N18V · News18"
                summary="Most industrial robotic arms are blind - they operate on pre-programmed coordinates and need perfectly structured environments. CynLr's CyRo platform, built in partnership with the Centre for Neuroscience at IISc, lets a robot identify, grasp, and manipulate completely unfamiliar randomly-placed objects without prior training. It adjusts grip and applied force in seconds - essentially learning on the fly like a human infant. This breakthrough turns rigid robotic arms into general-purpose machine-vision platforms."
                takeaways={[
                  'Currently piloting with Audi for automotive assembly',
                  'Demoed publicly at Automate 2025 in Detroit - picked unseen objects live on stage',
                  'Pitches "Software Defined Factories" - switch assembly tasks via software update, not retooling',
                  'Indian-grown deep R&D + global pilot - the export-model template'
                ]}
              />
            </div>
            <div style={{ gridColumn: '9 / span 4' }}>
              <div className="panel" style={{ height: '100%' }}>
                <Kicker>The IISc moat</Kicker>
                <h4 className="h4" style={{ margin: '10px 0 12px' }}>What makes CynLr defensible</h4>
                <ul style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.6, paddingLeft: 16, display: 'grid', gap: 8 }}>
                  <li>Direct collaboration with IISc Centre for Neuroscience - biological-vision-to-robotic-perception translation work that took ~7 years to mature</li>
                  <li>Patents on visual cortex-inspired object recognition specifically</li>
                  <li>Deep-research talent that no consumer-app team can replicate in &lt;5 years</li>
                </ul>
                <hr className="hr-dash" style={{ margin: '14px 0' }}/>
                <a href="https://www.youtube.com/watch?v=fO0sFE1NRYA" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>→ Inside India's Robotics Revolution: CynLr × IISc</a>
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Deep-dive: GENROBOTICS */}
        <Reveal>
          <Kicker>Deep-dive · 04</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 4px' }}>Genrobotics - the most defensible Indian robotics business</h3>
          <div className="meta" style={{ marginBottom: 18, color: 'var(--ink-low)' }}>Founded 2017 · Trivandrum · 4 CET alums · ₹21.8 Cr FY24 (₹32.5 Cr FY25)</div>
          <div className="col-12">
            <div style={{ gridColumn: '1 / span 7' }}>
              <VideoStudy
                url="https://www.youtube.com/watch?v=DuODIIo-oJI"
                title="Can Robots Clean Sewers Better Than People? - Business Insider"
                channel="Business Insider · World Wide Waste"
                summary="The Bandicoot is a spider-like manhole-cleaning robot with jointed arms, 360° cameras, and a specialized bucket. It operates remotely from above ground, completely removing humans from manual scavenging - historically India's most lethal occupational category. Deployed across 21 states + 3 UTs, 500+ units sold (~₹35-40 lakh each, govt-funded), exported to Malaysia. The moat is regulatory inclusion: Genrobotics tech is now part of Swachh Bharat / AMRUT specifications + Supreme Court approval."
                takeaways={[
                  'Anand Mahindra personally invested; also Zoho, Unicorn India Ventures',
                  '236 employees · 500+ units deployed · ₹196.5 Cr valuation',
                  'Expanding to skyscraper cleaning, health-tech (exoskeletons), and now Tier-2 cities',
                  'This is what "deep-tech with a moat" looks like in India: regulatory inclusion + government procurement + social-mission narrative'
                ]}
              />
            </div>
            <div style={{ gridColumn: '8 / span 5' }}>
              <VideoStudy
                url="https://www.youtube.com/watch?v=DhvbiSFd4Y0"
                title="Bandicoot - manhole cleaning robot in action"
                channel="Genrobotics"
                summary="Operational footage of the Bandicoot navigating subterranean sewers, extracting solid waste and toxic sludge. The robotic arm articulates inside the claustrophobic 800mm manhole diameter. This is what 'unsexy but profitable' looks like - Tier-1 city municipal corporations purchase these on annual contracts."
                takeaways={[
                  'Operator workflow eliminates 100% of human entry into sewers',
                  'Recurring service contracts + spare parts = compounding revenue'
                ]}
              />
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Deep-dive: UNBOX + ORANGEWOOD + PEPPERMINT row */}
        <Reveal>
          <Kicker>Deep-dive · 05-07</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 16px' }}>Unbox, Orangewood, Peppermint - three different paths to RaaS revenue</h3>
          <div className="col-3">
            <div>
              <VideoStudy
                url="https://www.youtube.com/watch?v=NCAdgsj_Qrk"
                title="Unbox Robotics - vertical swarm sortation"
                channel="Unbox Robotics"
                summary="Unbox attacks the most expensive operational variable in urban fulfillment: floor space. Traditional conveyor sortation is rigid and capex-heavy. UnboxSort fleets vertically sort parcels using swarm intelligence - 50-70% floor-space reduction. Deploys 10× faster than conveyors; can start with a 20-robot fleet and scale by adding units without disrupting operations."
                takeaways={[
                  'Customers include large Indian 3PLs + quick-commerce DCs',
                  'The Tier-2 e-com explosion is the perfect demand curve for this'
                ]}
              />
            </div>
            <div>
              <VideoStudy
                url="https://www.youtube.com/watch?v=lpsbBCMexGI"
                title="Orangewood Labs - Abhinav Das on democratizing robots"
                channel="Y Combinator"
                summary="Orangewood is YC-backed and democratizes cobots for SMEs that traditionally got priced out by six-figure integration fees. The innovation is RoboGPT - natural-language interface where an operator says 'pick the blue cap' instead of writing G-code. On-device vision + motion AI + a simple web dashboard. Robots-as-a-Service pricing model for immediate time-to-value."
                takeaways={[
                  'YC-backed (the only YC India robotics co with a NLP-first interface)',
                  'Visual inspection, bin picking, powder coating, even bartending'
                ]}
              />
            </div>
            <div>
              <VideoStudy
                url="https://www.youtube.com/watch?v=Y2KsvzTVwVI"
                title="Peppermint SD20 - autonomous floor scrubber"
                channel="Peppermint Robotics"
                summary="Peppermint is the cleanest analogue to the venture this memo proposes - SD20/SD45 commercial floor scrubber-dryers, 40-45L tanks, 8-hour runtime, four sensor types, proprietary Peppermint-OS. ₹6.26 Cr FY24 (2.3× YoY). Operating in 6 countries (India, UAE, US since 2024). SINE IIT Bombay alum, ₹49 Cr total funding. Loss = ~1× revenue and contracting."
                takeaways={[
                  'B2B SaaS-like recurring contracts on cleaning robots for malls/airports/pharma',
                  'GMR Aviation partnership = high-friction enterprise deal that compounds',
                  'Runal Dahiwade · Forbes India 30 Under 30 (2023)'
                ]}
              />
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Deep-dive: NIQO + MUKUNDA + CONSTRUCTION row */}
        <Reveal>
          <Kicker>Deep-dive · 08-10</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 16px' }}>Niqo, Mukunda, Vividobots - verticalized robotics in agri, kitchen, construction</h3>
          <div className="col-3">
            <div>
              <VideoStudy
                url="https://www.youtube.com/watch?v=ztRG6npdscQ"
                title="Niqo RoboThinner - precision spot-spraying in field"
                channel="Niqo Robotics"
                summary="Niqo refuses to sell a $30K SwarmFarm to Indian farmers - that math doesn't work. Instead they retrofit AI cameras (Niqo Sense) onto existing tractors and sprayers. The cameras identify vegetation as small as 5mm with 99.3% accuracy. Outcome: 60-90% reduction in chemical usage, 60% reduction in water, full ROI in 2 years for the farmer."
                takeaways={[
                  '250+ cameras deployed · 140K acres sprayed · 1,800 farmers',
                  'Now expanding to North American lettuce-thinning market',
                  'The retrofit model is the only economically viable agri-robotics play in India'
                ]}
              />
            </div>
            <div>
              <VideoStudy
                url="https://www.youtube.com/watch?v=jla3ftl0mVQ"
                title="Mukunda Foods - DosaMatic in commercial QSR"
                channel="Mukunda Foods"
                summary="Chef attrition is the #1 killer of QSR margins in India. Mukunda Foods' suite (DosaMatic, Eco Fryer, Wokie) standardizes the dish at ~₹1.5L per machine, producing up to 30 dishes/hour with perfect consistency. The Eco Fryer is IoT-controlled and uses sleep-mode to extend oil lifecycle. Outcome: zero recipe variance, restaurant staff multi-tasks."
                takeaways={[
                  'Direct sell to QSR chains: ₹1.5L SKU, 14-month payback at 30 dishes/hr',
                  'Margin from oil-saving + chef-cost removal alone'
                ]}
              />
            </div>
            <div>
              <VideoStudy
                url="https://www.youtube.com/watch?v=x-i_OhGSJOA"
                title="Flo Mobility - autonomous construction site hauling"
                channel="Flo Mobility"
                summary="Construction is dangerous + under-automated + plagued by labor shortage. Flo Mobility ships rugged 4WD electric robots with 32-beam LiDAR and sub-100ms edge computing that haul cement, sand, bricks autonomously on construction sites. Outcomes: up to 50% project cost reduction; eliminates human workers from hazardous hauling. Vividobots (Wiperque facade-cleaning + Vibrantque-XT painting) and Pace Robotics (Centa Painter, 10× faster than manual) attack adjacent construction wedges."
                takeaways={[
                  'Three Chennai/Bengaluru companies in different construction verticals',
                  'Vividobots robots handle 55 km/h winds for facade work',
                  'Pace Centa Painter: 80% less manpower for paint/putty/sanding'
                ]}
              />
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* The pattern callout */}
        <Reveal>
          <div className="panel" style={{ borderLeft: '3px solid var(--accent)', background: 'var(--bg-deep)' }}>
            <Kicker>The pattern across all 11</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 14px' }}>What every profitable Indian robotics company is actually selling.</h3>
            <div className="col-2">
              <div>
                <ol style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6, paddingLeft: 22, display: 'grid', gap: 10 }}>
                  <li><strong>Hardware as the data terminal, software as the moat.</strong> Addverb sells Fleet Manager, not AMRs. CynLr sells the visual-cortex model, not the arm. Niqo sells the AI camera, not the sprayer.</li>
                  <li><strong>RaaS or pay-per-cycle</strong> pricing where possible. Convert factory anxiety about CapEx into OpEx. Day-1 positive cashflow for the customer.</li>
                  <li><strong>India + Export from Day 1.</strong> Addverb, Ati, CynLr, Niqo all generate &gt;30% revenue outside India. Indian software + assembly cost + global GTM = winning combo.</li>
                  <li><strong>Vertical pick, not horizontal platform.</strong> Sewers (Genrobotics), tractors (Niqo), warehouses (Addverb), legacy floors (Ati), MSME welding (cobot integrators) - narrow + deep beats wide + shallow.</li>
                </ol>
              </div>
              <div>
                <ol start="5" style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6, paddingLeft: 22, display: 'grid', gap: 10 }}>
                  <li><strong>Regulatory or relational moat</strong> on top of the tech. Genrobotics gets Supreme Court inclusion; Addverb gets Reliance distribution; CynLr gets IISc research access. Tech alone is not enough.</li>
                  <li><strong>Operator-friendly UX</strong> - Orangewood's RoboGPT lets a non-coder run the arm. Niqo's camera works with existing sprayer the farmer already owns. Mukunda's DosaMatic has 3 buttons. <em>If a plant manager needs to learn ROS, you lose</em>.</li>
                  <li><strong>Service network is the silent moat.</strong> 30+ city service partners is how iRobot still has 30% US share. Every Indian B2B robotics buyer asks this before signing.</li>
                  <li><strong>The deep-tech narrative gets you AI-era capital</strong> on terms a pure software co cannot get. Use the climate, but build a real cash-positive business under it.</li>
                </ol>
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Global incumbents reel */}
        <Reveal>
          <VideoReel
            title="Watch · global industrial automation"
            sub="6 videos · what to study, what to copy-paste, what to localize"
            items={[
              { label: 'FANUC lights-out factory - robots making robots', source: 'YouTube', url: 'https://www.youtube.com/watch?v=vIhEKoS2Bjc', note: 'The lights-out (= dark factory) reference point.' },
              { label: 'Symbotic - Walmart\'s warehouse automation engine', source: 'YouTube · Symbotic', url: 'https://www.youtube.com/watch?v=v27JFsRtEI8', note: 'Walmart paid $11B for Symbotic\'s SaaS+robots stack.' },
              { label: 'Locus Robotics - RaaS autonomous picking', source: 'YouTube · Locus', url: 'https://www.youtube.com/watch?v=lAu9qmsVRm0', note: 'Locus is the cleanest RaaS deployment template.' },
              { label: 'Universal Robots welding cobot - plug-and-play', source: 'YouTube · WeCobot', url: 'https://www.youtube.com/watch?v=vKynS6bDilg', note: 'UR5e/UR10e is the cobot the average Indian MSME is now buying.' },
              { label: 'Monumental - autonomous bricklaying robot', source: 'YouTube', url: 'https://www.youtube.com/watch?v=mEWHbIwt9mc', note: 'Dutch startup, $25M raise. India construction copy-paste.' },
              { label: 'Brightpick Autopicker - aisle-picking warehouse robot', source: 'YouTube · Brightpick', url: 'https://www.youtube.com/watch?v=U2AGLeJBFNg', note: 'Pre-existing-shelf robot vs Autostore grid. Low-capex.' }
            ]}/>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 05 - HUMANOIDS
   ============================================================ */
const HUMANOIDS = [
  { co: 'Figure', model: '02', country: 'US', height: 168, weight: 70, payload: 25, dof: 36, runtime: 5,  unitCost: 35000, status: 'Pilot · BMW' },
  { co: 'Tesla', model: 'Optimus Gen 3', country: 'US', height: 173, weight: 57, payload: 20, dof: 28, runtime: 8, unitCost: 22000, status: 'Internal pilot' },
  { co: 'Agility', model: 'Digit', country: 'US', height: 175, weight: 65, payload: 16, dof: 26, runtime: 4, unitCost: 30000, status: 'Commercial · GXO' },
  { co: 'Unitree', model: 'H1', country: 'CN', height: 180, weight: 47, payload: 30, dof: 27, runtime: 2,  unitCost: 16000, status: 'Shipping (research)' },
  { co: '1X', model: 'NEO', country: 'NO', height: 165, weight: 30, payload: 20, dof: 30, runtime: 4, unitCost: 20000, status: 'Beta · home' },
  { co: 'Apptronik', model: 'Apollo', country: 'US', height: 173, weight: 73, payload: 25, dof: 34, runtime: 4, unitCost: 50000, status: 'Pilot · Mercedes' },
  { co: 'Boston Dynamics', model: 'Atlas (electric)', country: 'US', height: 175, weight: 89, payload: 25, dof: 28, runtime: 1, unitCost: 0, status: 'R&D / Hyundai' },
  { co: 'Sanctuary AI', model: 'Phoenix v7', country: 'CA', height: 170, weight: 70, payload: 25, dof: 44, runtime: 3, unitCost: 0, status: 'Pilot' }
];

function S05_Humanoids({ motion }) {
  const [pick, setPick] = useS1(['Figure', 'Unitree']);
  const toggle = (co) => {
    if (pick.includes(co)) {
      if (pick.length > 1) setPick(pick.filter(c => c !== co));
    } else if (pick.length < 3) {
      setPick([...pick, co]);
    } else {
      setPick([pick[1], pick[2], co]);
    }
  };
  const chosen = HUMANOIDS.filter(h => pick.includes(h.co));

  return (
    <section id="humanoids" data-section="05" data-screen-label="05 Humanoids" className="section-pad">
      <div className="page">
        <SectionTag n="05" title="Humanoids - the noisiest, riskiest bet · phase 7, not phase 1" source="Company filings, IEEE Spectrum, founder interviews"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              The argument for humanoid form is one sentence: <em style={{ color: 'var(--accent)' }}>the world is already shaped for us.</em>
            </h2>
            <p className="lead">
              Door handles at 100cm. Stair risers at 17cm. Tool handles for a 5th-percentile-female grip.
              Every other form factor has to redesign the workspace; the humanoid pays a hardware tax to skip
              that integration cost. Whether that tax is worth it is the entire bet - and it is a bet
              that costs <em>at least</em> $500M to play. We come back here in 2030.
            </p>
            <div style={{ marginTop: 18, padding: '14px 18px', borderLeft: '2px solid var(--accent)', background: 'var(--bg-deep)' }}>
              <div className="meta" style={{ color: 'var(--accent)', marginBottom: 6 }}>Why we don't enter humanoids in phase 1</div>
              <div style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.55 }}>
                Capital intensity (Figure $854M raised, Tesla &gt;$6B spent, Apptronik $350M).
                Ten-year horizon to commercial unit economics. Bill-of-materials supply chain dominated
                by China - and an Indian humanoid has no obvious end-buyer this decade. The unsexy
                cobots in Section 04 pay rent. Humanoids will pay rent. They are not the same business.
              </div>
            </div>
          </Reveal>
          <Reveal delay={200} style={{ gridColumn: '9 / span 4' }}>
            <div className="panel">
              <div className="meta" style={{ marginBottom: 12 }}>Active humanoid programs, 2026</div>
              <div className="serif tnum" style={{ fontSize: 64, lineHeight: 1, marginBottom: 12 }}>
                <Counter value={47} motion={motion}/>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-mid)' }}>up from 11 in 2022 · 23 are post-Series-A · 9 have shipped commercial pilots</div>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 64 }}></div>

        {/* Comparator */}
        <Reveal>
          <div className="panel flush">
            <div className="panel-hd">
              <span className="ttl">Compare humanoid platforms · click to toggle (max 3)</span>
              <span>specs · public + estimated</span>
            </div>
            <div style={{ padding: 22 }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                {HUMANOIDS.map(h => (
                  <button key={h.co} onClick={() => toggle(h.co)} className="chip"
                    style={{
                      cursor: 'pointer',
                      background: pick.includes(h.co) ? 'var(--accent)' : 'transparent',
                      color: pick.includes(h.co) ? '#fff' : 'var(--ink-mid)',
                      borderColor: pick.includes(h.co) ? 'var(--accent)' : 'var(--rule)'
                    }}>
                    {h.co} {h.model}
                  </button>
                ))}
              </div>
              <div className="h-compare-wrap">
                <HumanoidCompare units={chosen} motion={motion}/>
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        <Reveal>
          <VideoReel
            title="Watch · humanoid demos worth your time"
            sub="8 videos · curated from 2024-2026"
            items={[
              { label: 'Boston Dynamics - All New Electric Atlas reveal', source: 'YouTube · Boston Dynamics', url: 'https://www.youtube.com/watch?v=29ECwExc-_M' },
              { label: 'Atlas goes hands on - manipulation', source: 'YouTube · Boston Dynamics', url: 'https://www.youtube.com/watch?v=F_7IPm7f1vI' },
              { label: 'Figure 02 - humanoid at BMW Group plant', source: 'YouTube', url: 'https://www.youtube.com/watch?v=xLVm-QKEZSI' },
              { label: 'Figure 02 - tested on BMW production line', source: 'YouTube', url: 'https://www.youtube.com/watch?v=z6b1UsJcAIo' },
              { label: 'Unitree H1 - humanoid breaks 22.4 MPH', source: 'YouTube', url: 'https://www.youtube.com/watch?v=sfcqAZcWoMo' },
              { label: 'Tesla Optimus Gen 3 - running, new demo', source: 'YouTube', url: 'https://www.youtube.com/watch?v=ea6QaTrgx3w' },
              { label: 'Optimus Gen 3 - $20K humanoid unveil', source: 'YouTube', url: 'https://www.youtube.com/watch?v=GCohnewzaCQ' },
              { label: '1X NEO - $20K home humanoid first look', source: 'YouTube · 1X Technologies', url: 'https://www.youtube.com/watch?v=EtU-uCWQcng' }
            ]}/>
        </Reveal>

        <div style={{ height: 56 }}></div>

        <Reveal>
          <Pull attrib="Brett Adcock · Figure · 2025">
            We are not building a robot. We are building a labor company that happens to use bipedal hardware.
          </Pull>
        </Reveal>

      </div>
    </section>
  );
}

function HumanoidCompare({ units, motion }) {
  const metrics = [
    { k: 'height',   l: 'Height',   fmt: (v) => `${v} cm`,    max: 200 },
    { k: 'weight',   l: 'Weight',   fmt: (v) => `${v} kg`,    max: 100 },
    { k: 'payload',  l: 'Payload',  fmt: (v) => `${v} kg`,    max: 35 },
    { k: 'dof',      l: 'DOF',      fmt: (v) => v,            max: 50 },
    { k: 'runtime',  l: 'Runtime',  fmt: (v) => `${v} h`,     max: 10 },
    { k: 'unitCost', l: 'Unit cost (est.)', fmt: (v) => v > 0 ? `$${(v/1000).toFixed(0)}k` : 'NDA', max: 60000 }
  ];
  const colors = ['var(--accent)', 'var(--ink)', 'var(--ink-mid)'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 12, alignItems: 'center' }}>
      <div></div>
      <div style={{ display: 'flex', gap: 24 }}>
        {units.map((u, i) => (
          <div key={u.co} style={{ flex: 1, paddingLeft: 8 }}>
            <div className="meta" style={{ color: colors[i] }}>● {u.co}</div>
            <div className="serif" style={{ fontSize: 18, lineHeight: 1.2 }}>{u.model}</div>
            <div className="meta" style={{ marginTop: 4 }}>{u.country} · {u.status}</div>
          </div>
        ))}
      </div>
      {metrics.map(m => (
        <React.Fragment key={m.k}>
          <div className="meta" style={{ paddingTop: 14, borderTop: '1px solid var(--rule)' }}>{m.l}</div>
          <div style={{ display: 'flex', gap: 24, paddingTop: 14, borderTop: '1px solid var(--rule)' }}>
            {units.map((u, i) => (
              <div key={u.co} style={{ flex: 1 }}>
                <div className="tnum" style={{ fontSize: 19, fontFamily: 'var(--f-serif)', color: 'var(--ink)' }}>
                  {m.fmt(u[m.k])}
                </div>
                <div style={{ height: 4, background: 'var(--bg-deep)', marginTop: 6, position: 'relative', overflow: 'hidden' }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    width: `${Math.min(100, (u[m.k] / m.max) * 100)}%`,
                    background: colors[i],
                    transition: 'width .6s'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ============================================================
   SECTION 06 - NON-HUMANOID FORM FACTORS
   ============================================================ */
const FORM_FACTORS = [
  { id: 'arm', name: 'Industrial arm', dof: '4-7',
    examples: ['FANUC M-2000', 'UR20', 'Kuka KR Quantec'],
    bestFor: 'Repetitive, fixed-position, high-payload tasks',
    weakness: 'Cannot move; one task per cell',
    units: '4.2M installed', cost: '$25k-$200k',
    indiaFit: 'integrator',
    icon: 'arm' },
  { id: 'cobot', name: 'Collaborative arm', dof: '6',
    examples: ['Universal UR5e', 'Doosan H-series', 'Techman TM12', 'Systemantics ASYSTR'],
    bestFor: 'Force-limited human-adjacent work',
    weakness: 'Lower payload, lower speed',
    units: '950k installed', cost: '$18k-$60k',
    indiaFit: 'buildable',
    icon: 'cobot' },
  { id: 'amr', name: 'Autonomous mobile robot', dof: '-',
    examples: ['Locus Origin', 'MiR 250', 'Geek+ P-series', 'Ati Motors Sherpa', 'Addverb Veloce'],
    bestFor: 'Goods-to-person, intralogistics',
    weakness: 'Flat-floor only; mostly indoor',
    units: '~3M installed', cost: '$15k-$80k',
    indiaFit: 'buildable',
    icon: 'amr' },
  { id: 'agv', name: 'Auto guided vehicle', dof: '-',
    examples: ['Amazon Drive units', 'Symbotic', 'JBT'],
    bestFor: 'Heavy pallet movement on fixed routes',
    weakness: 'Inflexible without infrastructure',
    units: '~2M installed', cost: '$40k-$250k',
    indiaFit: 'integrator',
    icon: 'agv' },
  { id: 'quad', name: 'Quadruped', dof: '12-18',
    examples: ['Spot', 'Unitree Go2', 'ANYmal'],
    bestFor: 'Inspection, terrain that wheels fail on',
    weakness: 'Battery, payload, ROI thin',
    units: '~22k commercial', cost: '$3k-$75k',
    indiaFit: 'skip',
    icon: 'quad' },
  { id: 'drone', name: 'Aerial drone', dof: '6',
    examples: ['Skydio', 'DJI Mavic 3 Enterprise', 'Niqo RoboSpray', 'ideaForge'],
    bestFor: 'Inspection, mapping, last-mile, agri spraying, defense',
    weakness: 'Weather, payload, airspace regs',
    units: '~7M commercial', cost: '$1k-$200k',
    indiaFit: 'buildable',
    icon: 'drone' },
  { id: 'underwater', name: 'Underwater (AUV/ROV)', dof: '6',
    examples: ['Blue Robotics', 'Saab Sabertooth', 'Anduril Dive'],
    bestFor: 'Subsea inspection, defense',
    weakness: 'Pressure, comms, salt corrosion',
    units: '~12k operational', cost: '$30k-$5M',
    indiaFit: 'skip',
    icon: 'sub' },
  { id: 'micro', name: 'Soft / micro', dof: '-',
    examples: ['SoftRobotics gripper', 'Medical capsule bots'],
    bestFor: 'Delicate handling, surgical, agri',
    weakness: 'Niche, slow scale',
    units: '<5k commercial', cost: '$5k-$2M',
    indiaFit: 'skip',
    icon: 'micro' }
];

function IndiaFitBadge({ fit }) {
  const map = {
    buildable: { label: 'Indian build ✓', color: 'var(--accent)' },
    integrator: { label: 'Integrate + resell', color: 'var(--ink-mid)' },
    skip: { label: 'Skip phase 1', color: 'var(--ink-low)' }
  };
  const x = map[fit] || map.skip;
  return (
    <span className="meta" style={{
      display: 'inline-block', padding: '2px 8px',
      border: `1px solid ${x.color}`, color: x.color,
      fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase'
    }}>{x.label}</span>
  );
}

function S06_NonHumanoid({ motion }) {
  const [hover, setHover] = useS1(null);
  return (
    <section id="form-factors" data-section="06" data-screen-label="06 Non-humanoid" className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="page">
        <SectionTag n="06" title="Non-humanoid form factors - eight ways a robot can not be a person" source="IFR, Drone Industry Insights, Subsea UK"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 8' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              The humanoid debate distracts from a quieter fact: <em>96% of operational robots in 2026 do not have legs.</em>
            </h2>
            <p className="lead">
              Every form factor is a different bet on what world the robot lives in. A drone bets the world has air,
              a quadruped bets it has stairs, an AMR bets it has flat floors and routine demand. Founders pick form
              before they pick problem; it should usually be the reverse.
            </p>
            <p className="lead" style={{ marginTop: 14, fontSize: 18, color: 'var(--ink-mid)' }}>
              For an Indian startup the practical short-list is three: <span style={{ color: 'var(--accent)' }}>cobot arm,
              AMR, agri/inspection drone</span>. The other five we either integrate-and-resell or skip in phase 1.
              Badges below say which is which.
            </p>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <div className="ff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, alignItems: 'stretch' }}>
          {FORM_FACTORS.map((f, i) => (
            <Reveal key={f.id} delay={i * 60} style={{ display: 'block', height: '100%' }}>
              <button
                onMouseEnter={() => setHover(f.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  all: 'unset', cursor: 'pointer', boxSizing: 'border-box',
                  background: 'var(--paper)',
                  border: '1px solid ' + (hover === f.id ? 'var(--accent)' : 'var(--rule)'),
                  padding: 18,
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column', gap: 10,
                  transition: 'border-color .2s, transform .2s',
                  transform: hover === f.id ? `translateY(-${4 * motion}px)` : 'none'
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <FormIcon kind={f.icon} accent={hover === f.id} />
                  <IndiaFitBadge fit={f.indiaFit}/>
                </div>
                <div className="meta" style={{ fontSize: 10.5 }}>DOF · {f.dof}</div>
                <h4 className="h4" style={{ margin: 0, fontSize: 18 }}>{f.name}</h4>
                <p style={{ fontSize: 12.5, color: 'var(--ink-mid)', margin: 0, lineHeight: 1.45 }}>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Best for: </span>{f.bestFor}
                </p>
                <p style={{ fontSize: 12, color: 'var(--ink-low)', margin: 0, lineHeight: 1.45 }}>
                  <span style={{ color: 'var(--neg)' }}>Limit: </span>{f.weakness}
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 12, borderTop: '1px dashed var(--rule)', gap: 8 }}>
                  <span className="meta" style={{ fontSize: 10.5 }}>{f.units}</span>
                  <span className="meta" style={{ color: 'var(--accent)', fontSize: 10.5, textAlign: 'right' }}>{f.cost}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <div style={{ height: 56 }}></div>

        <Reveal>
          <VideoReel
            title="Watch · one video per form factor"
            sub="6 videos · cobot arm, AMR, quadruped, drone, surgical, exoskeleton"
            items={[
              { label: 'Yaskawa Motoman HC20 - collaborative cobot demo', source: 'YouTube · Yaskawa', url: 'https://www.youtube.com/watch?v=xJ4dbl0mUiE', note: 'Force-limited cobot arm in action - the SME automation pillar.' },
              { label: 'GreyOrange micro-fulfillment - AMR swarm in action', source: 'YouTube · GreyOrange', url: 'https://www.youtube.com/watch?v=W_O0_vrfQBM', note: 'Indian-origin AMR brand orchestrating shelf-to-picker fulfillment.' },
              { label: 'Boston Dynamics Spot - autonomous industrial inspection', source: 'YouTube · Boston Dynamics', url: 'https://www.youtube.com/watch?v=VVpgsd9Jsw0', note: 'Quadruped form factor doing real inspection rounds.' },
              { label: 'Inside DJI\'s factory - how millions of drones are made', source: 'YouTube · Technology', url: 'https://www.youtube.com/watch?v=DL9epo9vWew', note: 'Drone form factor plus the manufacturing process behind it.' },
              { label: 'da Vinci Xi HD Surgical System demo', source: 'YouTube · Medical', url: 'https://www.youtube.com/watch?v=3YhaSqRGkYE', note: 'Surgical robotics form factor reference - what SSI Mantra benchmarks against.' },
              { label: 'Sarcos Guardian XO full-body powered exoskeleton', source: 'YouTube · Sarcos', url: 'https://www.youtube.com/watch?v=PZcHlz_obyw', note: 'Untethered exoskeleton - 200lb load felt as 10lb. Industrial exo form factor.' }
            ]}/>
        </Reveal>

        <div style={{ height: 32 }}></div>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <div className="panel flush">
              <div className="panel-hd"><span className="ttl">Heard at IROS / RSS 2025 · selected papers</span><span>cherry-picked</span></div>
              <div style={{ padding: 18 }}>
                {[
                  ['Diffusion Policy 2 - multi-task long-horizon manipulation', 'Stanford, Toyota Research Inst.'],
                  ['Open X-Embodiment - cross-embodiment dataset, v2', 'DeepMind + 34 labs'],
                  ['ALOHA-2 - bimanual tele-op, $20k station', 'Stanford'],
                  ['Mobile ALOHA - wheelbase + arms, kitchen tasks', 'Stanford'],
                  ['π0-FAST - auto-regressive action tokenizer', 'Physical Intelligence']
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 4 ? '1px dashed var(--rule)' : 'none' }}>
                    <span>{p[0]}</span>
                    <span className="meta">{p[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} style={{ gridColumn: '8 / span 5' }}>
            <div className="panel" style={{ height: '100%' }}>
              <Kicker>Form factor mix · 2030E</Kicker>
              <h3 className="h3" style={{ margin: '12px 0 14px' }}>Humanoids will be ~6% of new shipments - and ~38% of headlines.</h3>
              <div style={{ marginTop: 14, display: 'flex', justifyContent: 'center' }}>
                <Donut
                  data={[
                    { label: 'AMR/AGV', value: 38, color: 'var(--accent)' },
                    { label: 'Arms (incl. cobot)', value: 32, color: 'var(--ink)' },
                    { label: 'Drone', value: 14 },
                    { label: 'Humanoid', value: 6, color: 'var(--accent-deep)' },
                    { label: 'Quad / other', value: 10, color: 'var(--rule)' }
                  ]}
                  size={180} thick={22} motion={motion}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormIcon({ kind, accent }) {
  const c = accent ? 'var(--accent)' : 'var(--ink)';
  // Simple primitives - geometric only (no detailed robot drawings)
  const paths = {
    arm:   <g><rect x="14" y="42" width="32" height="6" fill={c}/><rect x="26" y="14" width="6" height="30" fill={c}/><circle cx="29" cy="14" r="4" fill={c}/><rect x="29" y="10" width="14" height="4" fill={c}/></g>,
    cobot: <g><rect x="14" y="42" width="32" height="6" fill={c}/><circle cx="29" cy="38" r="3" fill={c}/><rect x="26" y="20" width="6" height="18" fill={c}/><circle cx="29" cy="20" r="3" fill={c}/><rect x="29" y="16" width="10" height="6" fill={c}/></g>,
    amr:   <g><rect x="10" y="20" width="40" height="20" rx="3" fill={c}/><circle cx="18" cy="42" r="4" fill={c}/><circle cx="42" cy="42" r="4" fill={c}/><rect x="14" y="14" width="32" height="6" fill={c}/></g>,
    agv:   <g><rect x="8" y="18" width="44" height="22" fill={c}/><circle cx="16" cy="44" r="3" fill={c}/><circle cx="30" cy="44" r="3" fill={c}/><circle cx="44" cy="44" r="3" fill={c}/></g>,
    quad:  <g><rect x="14" y="22" width="32" height="10" fill={c}/><rect x="16" y="32" width="4" height="14" fill={c}/><rect x="40" y="32" width="4" height="14" fill={c}/><rect x="22" y="32" width="4" height="14" fill={c}/><rect x="34" y="32" width="4" height="14" fill={c}/></g>,
    drone: <g><circle cx="16" cy="20" r="6" fill={c}/><circle cx="44" cy="20" r="6" fill={c}/><circle cx="16" cy="40" r="6" fill={c}/><circle cx="44" cy="40" r="6" fill={c}/><rect x="22" y="26" width="16" height="8" fill={c}/></g>,
    sub:   <g><ellipse cx="30" cy="30" rx="22" ry="10" fill={c}/><rect x="48" y="26" width="6" height="8" fill={c}/><circle cx="22" cy="30" r="2" fill="var(--bg)"/></g>,
    micro: <g><circle cx="30" cy="30" r="14" fill="none" stroke={c} strokeWidth="3"/><circle cx="30" cy="30" r="4" fill={c}/><line x1="30" y1="10" x2="30" y2="18" stroke={c} strokeWidth="3"/><line x1="30" y1="42" x2="30" y2="50" stroke={c} strokeWidth="3"/></g>
  };
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" style={{ transition: 'transform .3s', transform: accent ? 'scale(1.06)' : 'none' }}>
      {paths[kind] || null}
    </svg>
  );
}

Object.assign(window, {
  S01_Hook, S02_WhyNow, S03_Consumer, S04_Manufacturing, S05_Humanoids, S06_NonHumanoid
});
