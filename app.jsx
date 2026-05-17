// app.jsx — top-level composition

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": false,
  "accent": "#B5471F",
  "motion": 1.0
}/*EDITMODE-END*/;

const SECTIONS = [
  { id: 'hook',           label: 'Hook' },
  { id: 'why-now',        label: 'Why now' },
  { id: 'consumer',       label: 'Consumer' },
  { id: 'manufacturing',  label: 'Manufacturing' },
  { id: 'humanoids',      label: 'Humanoids' },
  { id: 'form-factors',   label: 'Form factors' },
  { id: 'incumbents',     label: 'Incumbents' },
  { id: 'startup-map',    label: 'Startup map' },
  { id: 'india',          label: 'India' },
  { id: 'data',           label: 'Data' },
  { id: 'people',         label: 'People' },
  { id: 'risks',          label: 'Risks' },
  { id: 'bet',            label: 'The bet' }
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.dataset.theme  = t.dark ? 'dark' : 'light';
    document.documentElement.dataset.motion = t.motion;
    document.documentElement.style.setProperty('--motion', t.motion);
    document.documentElement.style.setProperty('--accent', t.accent);
    // derived deep accent
    const deep = t.accent;
    document.documentElement.style.setProperty('--accent-deep',
      `color-mix(in oklab, ${deep} 70%, #000 30%)`);
    document.documentElement.style.setProperty('--accent-soft',
      `color-mix(in oklab, ${deep} 25%, transparent)`);
  }, [t.dark, t.motion, t.accent]);

  React.useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const sc = window.scrollY;
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docH > 0 ? sc / docH : 0);
        // figure out active section by which one's top is just above 30% of viewport
        const mid = window.innerHeight * 0.3;
        let best = 0;
        SECTIONS.forEach((s, i) => {
          const el = document.getElementById(s.id);
          if (!el) return;
          const r = el.getBoundingClientRect();
          if (r.top - mid <= 0) best = i;
        });
        setActive(best);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="row" style={{ gap: 14 }}>
          <span className="pulse"></span>
          <span className="brand">Why Robotics, Why Now</span>
          <span>· Field Notes Vol. 01</span>
        </div>
        <div className="row" style={{ gap: 18 }}>
          <span>{SECTIONS[active].label}</span>
          <span style={{ color: 'var(--ink-fade)' }}>·</span>
          <span className="tnum">{String(active+1).padStart(2,'0')} / {SECTIONS.length}</span>
        </div>
        <div className="progress" style={{ width: `${progress * 100}%` }}></div>
      </div>

      {/* Side rails */}
      <div className="rail-l">
        <div className="rail-tick" style={{ marginTop: 64 }}>Vol. 01 · 2026</div>
        <div style={{ flex: 1 }}></div>
        <div className="rail-tick" style={{ marginBottom: 16 }}>Working draft v0.5</div>
      </div>
      <div className="rail-r">
        <div className="rail-tick" style={{ marginTop: 64 }}>{Math.round(progress * 100)}% read</div>
        <div style={{ flex: 1 }}></div>
        <div className="rail-tick" style={{ marginBottom: 16 }}>↓ scroll</div>
      </div>

      {/* Sticky TOC */}
      <TableOfContents sections={SECTIONS} active={active}/>

      {/* Main content */}
      <main style={{ position: 'relative' }}>
        <div style={{ paddingTop: 44 }}></div>
        <S01_Hook motion={t.motion}/>
        <Marquee items={[
          { label: 'IFR.WORLD.24', value: '542K installs', delta: +9.0 },
          { label: 'INDIA.RANK', value: '#6 globally', delta: +1.0 },
          { label: 'INDIA.DENSITY', value: '7 / 10K', delta: 0.0 },
          { label: 'KOREA.DENSITY', value: '1,220 / 10K', delta: +5.0 },
          { label: 'INDIA.PLI', value: '$24B', delta: 0.0 },
          { label: 'COBOT.SHARE', value: '21%', delta: +2.4 },
          { label: 'INDIA.STARTUPS', value: '184', delta: +18.0 },
          { label: 'VC.ROBO.25', value: '$27.6B', delta: +24.0 },
          { label: 'ATI.MOTORS', value: '$20M B', delta: 0.0 },
          { label: 'ADDVERB.RIL', value: 'acquired', delta: 0.0 }
        ]}/>
        <S02_WhyNow motion={t.motion}/>
        <S03_Consumer motion={t.motion}/>
        <S04_Manufacturing motion={t.motion}/>
        <S05_Humanoids motion={t.motion}/>
        <S06_NonHumanoid motion={t.motion}/>
        <S07_Incumbents motion={t.motion}/>
        <S08_GlobalMap motion={t.motion}/>
        <S09_India motion={t.motion}/>
        <S10_DataAnalysis motion={t.motion}/>
        <S11_People motion={t.motion}/>
        <S12_Risks motion={t.motion}/>
        <S13_Bet motion={t.motion}/>
      </main>

      {/* Tweaks */}
      <TweaksPanel>
        <TweakSection label="Display"/>
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak('dark', v)}/>
        <TweakColor label="Accent" value={t.accent}
          options={['#B5471F', '#C25A2E', '#7F4A1F', '#3C5F4A', '#1F4F7F']}
          onChange={(v) => setTweak('accent', v)}/>
        <TweakSection label="Motion"/>
        <TweakSlider label="Animation intensity" value={t.motion}
          min={0} max={2} step={0.1} unit="×"
          onChange={(v) => setTweak('motion', v)}/>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
