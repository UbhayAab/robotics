// lib.jsx - shared hooks + atoms. Exports to window for cross-file sharing.

const { useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect } = React;

/* ---------- Hooks ---------- */

function useInView(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.15, ...opts });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen];
}

function useScrollProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height - vh;
      const t = Math.min(1, Math.max(0, -r.top / total));
      setP(t);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
}

function useCountUp(target, { duration = 1400, decimals = 0, motion = 1 } = {}) {
  const [ref, seen] = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (motion <= 0) { setVal(target); return; }
    const dur = duration / Math.max(0.2, motion);
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
  }, [seen, target, duration, motion]);
  const display = useMemo(() => {
    const n = Number(val.toFixed(decimals));
    return decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString();
  }, [val, decimals]);
  return [ref, display, seen];
}

/* Format helpers */
const fmtUsd = (n) => {
  if (n >= 1e9) return `$${(n/1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n/1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n/1e3).toFixed(1)}K`;
  return `$${n}`;
};
const fmtNum = (n) => n.toLocaleString();
const fmtPct = (n, d=1) => `${n>0?'+':''}${n.toFixed(d)}%`;

/* ---------- Atoms ---------- */

function Kicker({ children }) {
  return <span className="kicker">{children}</span>;
}

function Meta({ children }) {
  return <span className="meta">{children}</span>;
}

function Chip({ children, kind, ...rest }) {
  return <span className={`chip${kind ? ' '+kind : ''}`} {...rest}>{children}</span>;
}

function Counter({ value, prefix = '', suffix = '', decimals = 0, motion = 1 }) {
  const [ref, display] = useCountUp(value, { decimals, motion });
  return <span ref={ref} className="count tnum">{prefix}{display}{suffix}</span>;
}

function Reveal({ as = 'div', mode, delay = 0, children, className = '', style, ...rest }) {
  const Tag = as;
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.18 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      data-reveal={mode || true}
      style={{ ...(style||{}), '--reveal-delay': delay }}
      className={className}
      {...rest}
    >{children}</Tag>
  );
}

function SectionTag({ n, title, source }) {
  return (
    <div className="section-tag">
      <span className="num">§ {n}</span>
      <span className="ttl">{title}</span>
      <span style={{ flex: 1 }}></span>
      {source && <span>Source / {source}</span>}
    </div>
  );
}

/* Convert a YouTube watch URL (or any reasonable variant) to an embed URL */
function toYouTubeEmbed(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    let id = null;
    if (u.hostname.includes('youtu.be')) {
      id = u.pathname.replace(/^\//, '');
    } else if (u.hostname.includes('youtube.com')) {
      if (u.pathname === '/watch') id = u.searchParams.get('v');
      else if (u.pathname.startsWith('/embed/')) id = u.pathname.replace('/embed/', '');
      else if (u.pathname.startsWith('/shorts/')) id = u.pathname.replace('/shorts/', '');
    }
    if (!id) return null;
    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  } catch (e) {
    return null;
  }
}

/* Slot - labeled placeholder OR real embed when url is provided */
function Slot({ kind = 'video', label, source, url, aspect = '16/9', children, height, style }) {
  const embedUrl = kind === 'video' && url ? toYouTubeEmbed(url) : null;
  const isArticle = kind === 'article' && url;

  return (
    <div className={`slot ${kind}${url ? ' has-url' : ''}`}
         style={{ aspectRatio: !height ? aspect : undefined, height, position: 'relative', ...style }}>
      {embedUrl && (
        <iframe
          src={embedUrl}
          title={label || 'video'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      )}
      {isArticle && (
        <a href={url} target="_blank" rel="noopener noreferrer"
           style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', padding: '24px 28px', textDecoration: 'none',
                    color: 'var(--ink)', background: 'var(--paper)' }}>
          <span className="kicker" style={{ color: 'var(--accent)', marginBottom: 10 }}>Article · {source || 'read'}</span>
          <span className="serif" style={{ fontSize: 22, lineHeight: 1.25, color: 'var(--ink)' }}>{label}</span>
          <span className="meta" style={{ marginTop: 14, color: 'var(--ink-low)' }}>{(()=>{ try { return new URL(url).hostname.replace(/^www\./,''); } catch { return url; } })()} ↗</span>
        </a>
      )}
      {!embedUrl && !isArticle && children}
      {!embedUrl && !isArticle && (
        <div className="slot-meta">
          <span className="badge">●</span>
          <span>{kind === 'video' ? 'YouTube' : kind === 'article' ? 'Article' : kind === 'image' ? 'Image' : kind}</span>
          <span style={{ color: 'var(--ink-low)' }}>/</span>
          <span style={{ color: 'var(--ink)' }}>{label || 'Paste embed / link here'}</span>
          {source && <span style={{ color: 'var(--ink-low)' }}>· {source}</span>}
        </div>
      )}
    </div>
  );
}

/* KPI block */
function Kpi({ label, value, suffix = '', prefix = '', delta, sub, decimals = 0, motion = 1 }) {
  return (
    <div className="kpi">
      <div className="lbl">{label}</div>
      <div className="val">
        <Counter value={value} prefix={prefix} suffix={suffix} decimals={decimals} motion={motion} />
      </div>
      {(sub || delta != null) && (
        <div className="sub">
          {delta != null && (
            <span className={`delta ${delta >= 0 ? 'pos' : 'neg'}`}>
              {delta >= 0 ? '▲' : '▼'} {Math.abs(delta).toFixed(1)}%
            </span>
          )}{delta != null && sub && ' · '}
          {sub}
        </div>
      )}
    </div>
  );
}

/* Glossary tooltip */
function Gloss({ term, def, children }) {
  return (
    <span className="gloss">
      {children || term}
      <span className="gloss-pop">
        <span style={{ display: 'block', fontFamily: 'var(--f-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--accent-soft)', marginBottom: 4 }}>{term}</span>
        {def}
      </span>
    </span>
  );
}

/* Pull quote */
function Pull({ children, attrib }) {
  return (
    <Reveal className="pull" style={{ borderLeft: '3px solid var(--accent)', padding: '8px 0 8px 22px', margin: '24px 0' }}>
      <div className="serif" style={{ fontSize: 28, lineHeight: 1.25, letterSpacing: '-0.015em' }}>
        “{children}”
      </div>
      {attrib && <div className="meta" style={{ marginTop: 12 }}>- {attrib}</div>}
    </Reveal>
  );
}

/* Marquee ticker */
function Marquee({ items }) {
  const content = items.map((it, i) => (
    <span key={i} style={{ display: 'inline-flex', gap: 12, alignItems: 'baseline' }}>
      <span style={{ color: 'var(--ink-low)' }}>●</span>
      <span style={{ color: 'var(--ink)' }}>{it.label}</span>
      <span className="numeral" style={{ color: 'var(--ink-mid)' }}>{it.value}</span>
      {it.delta != null && (
        <span style={{ color: it.delta >= 0 ? 'var(--pos)' : 'var(--neg)' }}>
          {it.delta >= 0 ? '▲' : '▼'} {Math.abs(it.delta).toFixed(1)}%
        </span>
      )}
    </span>
  ));
  return (
    <div className="marquee">
      <div className="marquee-track">
        {content}{content}
      </div>
    </div>
  );
}

/* Sticky page index */
function TableOfContents({ sections, active }) {
  return (
    <nav className="toc">
      {sections.map((s, i) => (
        <a key={s.id} href={`#${s.id}`} className={active === i ? 'active' : ''}>
          <span className="n">0{i+1}</span>
          <span className="bar"></span>
          <span>{s.label}</span>
        </a>
      ))}
    </nav>
  );
}

/* ---------- VideoReel: horizontal video carousel with snap ---------- */
function VideoReel({ title, sub, items, cardWidth }) {
  const trackRef = useRef(null);
  const [pos, setPos] = useState({ scrollLeft: 0, scrollWidth: 1, clientWidth: 1 });
  const recompute = useCallback(() => {
    const el = trackRef.current; if (!el) return;
    setPos({ scrollLeft: el.scrollLeft, scrollWidth: el.scrollWidth, clientWidth: el.clientWidth });
  }, []);
  useEffect(() => {
    const el = trackRef.current; if (!el) return;
    recompute();
    el.addEventListener('scroll', recompute, { passive: true });
    window.addEventListener('resize', recompute);
    return () => {
      el.removeEventListener('scroll', recompute);
      window.removeEventListener('resize', recompute);
    };
  }, [recompute]);
  const scrollBy = (dir) => {
    const el = trackRef.current; if (!el) return;
    const step = el.clientWidth * 0.82;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };
  const atStart = pos.scrollLeft <= 4;
  const atEnd   = pos.scrollLeft + pos.clientWidth >= pos.scrollWidth - 4;
  const progPct = pos.scrollWidth > pos.clientWidth
    ? (pos.scrollLeft / (pos.scrollWidth - pos.clientWidth)) * 100
    : 0;
  const windowPct = pos.scrollWidth > 0 ? (pos.clientWidth / pos.scrollWidth) * 100 : 100;

  return (
    <div className="reel">
      <div className="reel-hd">
        <span className="ttl">{title || `${items.length} videos`}</span>
        <span style={{ flex: 1 }}></span>
        {sub && <span className="sub">{sub}</span>}
        <span className="sub" style={{ color: 'var(--accent)' }}>swipe / drag →</span>
        <div className="reel-nav">
          <button className="reel-btn" onClick={() => scrollBy(-1)} disabled={atStart} aria-label="prev">←</button>
          <button className="reel-btn" onClick={() => scrollBy(1)} disabled={atEnd} aria-label="next">→</button>
        </div>
      </div>
      <div ref={trackRef} className="reel-track">
        {items.map((v, i) => (
          <div key={i} className="reel-card" style={cardWidth ? { flexBasis: cardWidth } : undefined}>
            <Slot kind={v.kind || 'video'} label={v.label} source={v.source} url={v.url} aspect={v.aspect || '16/9'}/>
            <div className="reel-cap">
              <span className="idx tnum">{String(i+1).padStart(2, '0')}/{String(items.length).padStart(2, '0')}</span>
              <span style={{ color: 'var(--ink)' }}>{v.title || v.label}</span>
              {v.note && <span className="src">{v.note}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="reel-progress">
        <span style={{ left: `${progPct * (100 - windowPct) / 100}%`, width: `${windowPct}%` }}></span>
      </div>
    </div>
  );
}

/* ---------- VideoStudy: hero video + heavy summary below ---------- */
function VideoStudy({ url, title, channel, summary, takeaways = [], source, aspect = '16/9' }) {
  return (
    <div className="video-study" style={{ margin: '24px 0' }}>
      <Slot kind="video" label={title} url={url} aspect={aspect} source={source}/>
      <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', flexWrap: 'wrap' }}>
          <span className="kicker" style={{ color: 'var(--accent)' }}>Watch · {channel || 'YouTube'}</span>
          <span className="serif" style={{ fontSize: 19, lineHeight: 1.25, color: 'var(--ink)' }}>{title}</span>
        </div>
        {summary && (
          <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-mid)' }}>{summary}</div>
        )}
        {takeaways.length > 0 && (
          <ul style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink-mid)', margin: 0, paddingLeft: 18, display: 'grid', gap: 4 }}>
            {takeaways.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ---------- FinancialsTable: clean financial data table ---------- */
function FinancialsTable({ cols, rows, caption, footnote }) {
  const minW = Math.max(560, cols.length * 110);
  return (
    <div className="fin-table" style={{ margin: '20px 0' }}>
      {caption && <div className="kicker" style={{ marginBottom: 10, color: 'var(--accent)' }}>{caption}</div>}
      <div className="fin-scroll" style={{ border: '1px solid var(--rule)', borderRadius: 4, overflowX: 'auto', WebkitOverflowScrolling: 'touch', background: 'var(--paper-2, var(--paper))' }}>
        <div className="fin-inner" style={{ minWidth: minW }}>
          <div style={{ display: 'grid', gridTemplateColumns: cols.map(c => c.w || '1fr').join(' '),
                        padding: '12px 16px', background: 'var(--ink)', color: 'var(--bg)',
                        fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', gap: 12 }}>
            {cols.map((c, i) => <div key={i} style={{ textAlign: c.align || 'left' }}>{c.label}</div>)}
          </div>
          {rows.map((r, ri) => (
            <div key={ri}
                 style={{ display: 'grid', gridTemplateColumns: cols.map(c => c.w || '1fr').join(' '),
                          padding: '14px 16px', borderTop: ri > 0 ? '1px solid var(--rule)' : 'none',
                          fontSize: 13, color: 'var(--ink-mid)', gap: 12, alignItems: 'baseline' }}>
              {cols.map((c, ci) => {
                const v = r[c.key];
                const isAccent = c.accent && (ri === 0 || c.alwaysAccent);
                return (
                  <div key={ci} style={{
                    textAlign: c.align || 'left',
                    fontFamily: c.numeric ? 'var(--f-mono)' : 'inherit',
                    color: c.highlight && r._highlight ? 'var(--accent)' : isAccent ? 'var(--accent)' : c.muted ? 'var(--ink-low)' : 'inherit',
                    fontWeight: c.bold ? 600 : 400
                  }}>{v}</div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {footnote && <div className="meta" style={{ marginTop: 8, fontStyle: 'italic' }}>{footnote}</div>}
    </div>
  );
}

/* ---------- BOMBreakdown: visual stacked bar with line items ---------- */
function BOMBreakdown({ title, items, total, unit = '$', footnote }) {
  const sum = items.reduce((a, b) => a + b.cost, 0);
  return (
    <div className="bom" style={{ margin: '20px 0' }}>
      {title && <div className="kicker" style={{ marginBottom: 10, color: 'var(--accent)' }}>{title}</div>}
      {/* Stacked bar */}
      <div style={{ display: 'flex', height: 36, borderRadius: 4, overflow: 'hidden', border: '1px solid var(--rule)' }}>
        {items.map((it, i) => (
          <div key={i} style={{
            width: `${(it.cost / sum * 100).toFixed(2)}%`,
            background: it.color || `hsl(${(i * 47) % 360}, 35%, ${50 + (i % 3) * 8}%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--bg)', fontFamily: 'var(--f-mono)', fontSize: 10,
            borderRight: i < items.length - 1 ? '1px solid rgba(0,0,0,0.15)' : 'none'
          }}>
            {(it.cost / sum * 100) > 8 ? `${(it.cost / sum * 100).toFixed(0)}%` : ''}
          </div>
        ))}
      </div>
      {/* Line items */}
      <div style={{ marginTop: 14, display: 'grid', gap: 6 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '14px 1fr auto auto', gap: 12, alignItems: 'baseline', fontSize: 13 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: it.color || `hsl(${(i * 47) % 360}, 35%, ${50 + (i % 3) * 8}%)` }}></div>
            <div style={{ color: 'var(--ink)' }}>{it.label}<span className="meta" style={{ marginLeft: 8, color: 'var(--ink-low)' }}>{it.note}</span></div>
            <div style={{ fontFamily: 'var(--f-mono)', color: 'var(--ink-mid)' }}>{unit}{it.cost.toLocaleString()}</div>
            <div style={{ fontFamily: 'var(--f-mono)', color: 'var(--ink-low)', textAlign: 'right', minWidth: 50 }}>
              {(it.cost / sum * 100).toFixed(1)}%
            </div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid var(--ink)', marginTop: 6, paddingTop: 8,
                      display: 'grid', gridTemplateColumns: '14px 1fr auto auto', gap: 12, alignItems: 'baseline', fontSize: 13 }}>
          <div></div>
          <div style={{ color: 'var(--ink)', fontWeight: 600 }}>Total</div>
          <div style={{ fontFamily: 'var(--f-mono)', color: 'var(--accent)', fontWeight: 600 }}>{unit}{(total || sum).toLocaleString()}</div>
          <div style={{ fontFamily: 'var(--f-mono)', color: 'var(--ink-low)', textAlign: 'right', minWidth: 50 }}>100%</div>
        </div>
      </div>
      {footnote && <div className="meta" style={{ marginTop: 12, fontStyle: 'italic' }}>{footnote}</div>}
    </div>
  );
}

/* ---------- WedgeRanker: ranked-list table for opportunity wedges ---------- */
function WedgeRanker({ rows }) {
  return (
    <div className="wedge-ranker" style={{ margin: '24px 0' }}>
      <div className="wedge-scroll" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', border: '1px solid var(--rule)' }}>
        <div className="wedge-inner" style={{ minWidth: 820 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '36px 2fr 1.2fr 1fr 0.9fr 0.9fr 1.4fr', gap: 12,
                        padding: '10px 14px', background: 'var(--ink)', color: 'var(--bg)',
                        fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase' }}>
            <div>#</div><div>Wedge</div><div>India TAM (5-yr)</div><div>BOM</div><div>ASP</div><div>Difficulty</div><div>Verdict</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 2fr 1.2fr 1fr 0.9fr 0.9fr 1.4fr', gap: 12,
                                  padding: '14px', borderTop: '1px solid var(--rule)', fontSize: 13, alignItems: 'baseline',
                                  background: r.recommended ? 'var(--accent-soft)' : 'transparent' }}>
              <div style={{ fontFamily: 'var(--f-mono)', color: 'var(--accent)', fontWeight: 600 }}>{String(i+1).padStart(2,'0')}</div>
              <div style={{ color: 'var(--ink)' }}>{r.wedge}{r.recommended && <span className="meta" style={{ color: 'var(--accent)', marginLeft: 8 }}>★ pick</span>}</div>
              <div style={{ fontFamily: 'var(--f-mono)', color: 'var(--ink-mid)' }}>{r.tam}</div>
              <div style={{ fontFamily: 'var(--f-mono)', color: 'var(--ink-mid)' }}>{r.bom}</div>
              <div style={{ fontFamily: 'var(--f-mono)', color: 'var(--ink-mid)' }}>{r.retail}</div>
              <div style={{ fontFamily: 'var(--f-mono)', color: r.difficulty === 'High' ? 'var(--neg)' : r.difficulty === 'Low' ? 'var(--pos)' : 'var(--ink-mid)' }}>{r.difficulty}</div>
              <div style={{ color: 'var(--ink-mid)', fontSize: 12, lineHeight: 1.4 }}>{r.verdict}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- ColdCallScript: 4-stage talk track ---------- */
function ColdCallScript({ stages }) {
  return (
    <div style={{ margin: '24px 0', display: 'grid', gap: 14 }}>
      {stages.map((s, i) => (
        <div key={i} style={{ border: '1px solid var(--rule)', borderLeft: '3px solid var(--accent)', padding: '16px 18px', background: 'var(--paper-2, var(--paper))' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', marginBottom: 8 }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '.1em' }}>STAGE {String(i+1).padStart(2,'0')}</span>
            <span className="serif" style={{ fontSize: 18, color: 'var(--ink)' }}>{s.name}</span>
            <span className="meta" style={{ marginLeft: 'auto', color: 'var(--ink-low)' }}>{s.goal}</span>
          </div>
          <div style={{ fontFamily: 'var(--f-serif, serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.55,
                        padding: '10px 14px', borderLeft: '2px solid var(--ink-fade)', background: 'var(--bg)' }}>
            "{s.script}"
          </div>
          {s.note && <div className="meta" style={{ marginTop: 8, color: 'var(--ink-low)' }}>{s.note}</div>}
        </div>
      ))}
    </div>
  );
}

/* ---------- DiscoveryFramework: 5-phase card grid ---------- */
function DiscoveryFramework({ phases }) {
  return (
    <div style={{ margin: '24px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
      {phases.map((p, i) => (
        <div key={i} style={{ border: '1px solid var(--rule)', padding: 16, background: 'var(--paper-2, var(--paper))' }}>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em', marginBottom: 8 }}>PHASE {String(i+1).padStart(2,'0')}</div>
          <div className="serif" style={{ fontSize: 17, color: 'var(--ink)', lineHeight: 1.25, marginBottom: 8 }}>{p.title}</div>
          <div className="meta" style={{ marginBottom: 12, color: 'var(--ink-low)' }}>{p.goal}</div>
          <ul style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--ink-mid)', margin: 0, paddingLeft: 16, display: 'grid', gap: 4 }}>
            {p.questions.map((q, qi) => <li key={qi}>"{q}"</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ---------- CompactStat row of small stat cards ---------- */
function CompactStats({ items }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 0, border: '1px solid var(--rule)' }}>
      {items.map((it, i) => (
        <div key={i} style={{ padding: '18px 20px', borderRight: i < items.length - 1 ? '1px solid var(--rule)' : 'none' }}>
          <div className="kicker" style={{ color: 'var(--ink-low)', marginBottom: 6 }}>{it.label}</div>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: 22, color: 'var(--accent)', fontWeight: 600 }}>{it.value}</div>
          {it.sub && <div className="meta" style={{ marginTop: 4 }}>{it.sub}</div>}
        </div>
      ))}
    </div>
  );
}

/* ---------- DetailModal: centered popover with rich content ---------- */
function DetailModal({ open, onClose, data }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open || !data) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.55)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '40px 16px', overflow: 'auto',
        backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--paper)',
          maxWidth: 900, width: '100%',
          border: '1px solid var(--rule)',
          borderRadius: 0,
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.3)'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 14, right: 14, zIndex: 2,
            background: 'var(--ink)', color: 'var(--bg)',
            border: 0, width: 32, height: 32, fontSize: 18,
            cursor: 'pointer', fontFamily: 'var(--f-mono)'
          }}
        >×</button>

        {/* Header */}
        <div style={{ padding: '32px 36px 20px', borderBottom: '1px solid var(--rule)' }}>
          {data.kind && <div className="kicker" style={{ color: 'var(--accent)', marginBottom: 6 }}>{data.kind}</div>}
          <div className="serif" style={{ fontSize: 32, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--ink)', marginBottom: 8 }}>
            {data.title}
          </div>
          {data.subtitle && (
            <div style={{ fontSize: 14, color: 'var(--ink-mid)', marginBottom: 6 }}>{data.subtitle}</div>
          )}
          {data.meta && (
            <div className="meta" style={{ marginTop: 8, color: 'var(--ink-low)' }}>{data.meta}</div>
          )}
        </div>

        {/* Stats row */}
        {data.stats && data.stats.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${data.stats.length}, 1fr)`, borderBottom: '1px solid var(--rule)' }}>
            {data.stats.map((s, i) => (
              <div key={i} style={{ padding: '16px 20px', borderRight: i < data.stats.length - 1 ? '1px solid var(--rule)' : 'none' }}>
                <div className="meta" style={{ marginBottom: 4, color: 'var(--ink-low)' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 18, color: 'var(--accent)', fontWeight: 600 }}>{s.value}</div>
                {s.sub && <div style={{ fontSize: 11, color: 'var(--ink-low)', marginTop: 2 }}>{s.sub}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div style={{ padding: '24px 36px 32px' }}>
          {data.body && (
            <div style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--ink-mid)', marginBottom: 18 }}>
              {typeof data.body === 'string'
                ? data.body.split('\n').filter(p => p.trim()).map((p, i) => <p key={i} style={{ margin: '0 0 10px' }}>{p}</p>)
                : data.body}
            </div>
          )}

          {/* Products / pricing */}
          {data.products && data.products.length > 0 && (
            <div style={{ marginBottom: 22 }}>
              <div className="kicker" style={{ color: 'var(--accent)', marginBottom: 10 }}>Products + pricing</div>
              <div style={{ display: 'grid', gap: 8 }}>
                {data.products.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, padding: '10px 12px', background: 'var(--bg-alt)', border: '1px solid var(--rule)' }}>
                    <div>
                      <div style={{ fontSize: 13.5, color: 'var(--ink)', fontWeight: 500 }}>{p.name}</div>
                      {p.spec && <div style={{ fontSize: 12, color: 'var(--ink-mid)', marginTop: 3 }}>{p.spec}</div>}
                    </div>
                    {p.price && (
                      <div style={{ fontFamily: 'var(--f-mono)', fontSize: 13, color: 'var(--accent)', fontWeight: 600, alignSelf: 'center' }}>{p.price}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Customers */}
          {data.customers && (
            <div style={{ marginBottom: 22 }}>
              <div className="kicker" style={{ color: 'var(--accent)', marginBottom: 8 }}>Key customers</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-mid)', lineHeight: 1.55 }}>{data.customers}</div>
            </div>
          )}

          {/* Videos */}
          {data.videos && data.videos.length > 0 && (
            <div style={{ marginBottom: 22 }}>
              <div className="kicker" style={{ color: 'var(--accent)', marginBottom: 10 }}>Watch</div>
              <div style={{ display: 'grid', gap: 14 }}>
                {data.videos.map((v, i) => (
                  <div key={i}>
                    <Slot kind="video" url={v.url} label={v.title} aspect="16/9"/>
                    <div style={{ fontSize: 12.5, color: 'var(--ink-mid)', marginTop: 6, lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent)', fontFamily: 'var(--f-mono)', marginRight: 8 }}>{String(i+1).padStart(2,'0')}</span>
                      {v.title}
                      {v.note && <span style={{ display: 'block', fontSize: 11.5, color: 'var(--ink-low)', marginTop: 2 }}>{v.note}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {data.links && data.links.length > 0 && (
            <div style={{ marginBottom: 14 }}>
              <div className="kicker" style={{ color: 'var(--accent)', marginBottom: 10 }}>Links</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {data.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--f-mono)', fontSize: 11.5,
                      padding: '6px 12px', border: '1px solid var(--accent)',
                      color: 'var(--accent)', textDecoration: 'none',
                      letterSpacing: '.08em', textTransform: 'uppercase'
                    }}
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Sources */}
          {data.sources && (
            <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px dashed var(--rule)', fontSize: 11.5, color: 'var(--ink-low)', fontFamily: 'var(--f-mono)' }}>
              Sources: {data.sources}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- ClickableCard: any card that opens a modal on click ---------- */
function ClickableCard({ data, children, style }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true); }}
        style={{
          cursor: 'pointer', position: 'relative',
          transition: 'border-color .18s, transform .18s',
          ...(style || {})
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; }}
      >
        {children}
        <div style={{
          position: 'absolute', top: 10, right: 10,
          fontFamily: 'var(--f-mono)', fontSize: 9.5,
          color: 'var(--accent)', letterSpacing: '.1em',
          opacity: 0.7, pointerEvents: 'none'
        }}>CLICK ↗</div>
      </div>
      <DetailModal open={open} onClose={() => setOpen(false)} data={data}/>
    </>
  );
}

Object.assign(window, {
  useInView, useScrollProgress, useCountUp,
  fmtUsd, fmtNum, fmtPct,
  Kicker, Meta, Chip, Counter, Reveal,
  SectionTag, Slot, Kpi, Gloss, Pull, Marquee, TableOfContents, VideoReel,
  VideoStudy, FinancialsTable, BOMBreakdown, WedgeRanker, ColdCallScript, DiscoveryFramework, CompactStats,
  DetailModal, ClickableCard,
});
