// charts.jsx - SVG chart primitives. All draw-in animated on scroll.

const { useState: useStateC, useEffect: useEffectC, useRef: useRefC, useMemo: useMemoC } = React;

/* Hook: animated path-draw progress when element enters viewport */
function useDrawIn(motion = 1) {
  const ref = useRefC(null);
  const [p, setP] = useStateC(0);
  useEffectC(() => {
    if (!ref.current) return;
    let raf, start;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (motion <= 0) { setP(1); return; }
      const dur = 1200 / Math.max(0.2, motion);
      const tick = (now) => {
        if (!start) start = now;
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        setP(eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => { io.disconnect(); raf && cancelAnimationFrame(raf); };
  }, [motion]);
  return [ref, p];
}

/* ---------- Sparkline (mini line for inline use) ---------- */
function Sparkline({ data, width = 120, height = 32, color = 'currentColor', motion = 1, fill = false }) {
  const [ref, p] = useDrawIn(motion);
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * (width - 2) + 1;
    const y = height - 1 - ((v - min) / range) * (height - 2);
    return [x, y];
  });
  const path = pts.map((pt, i) => (i === 0 ? `M${pt[0]},${pt[1]}` : `L${pt[0]},${pt[1]}`)).join(' ');
  const visiblePts = pts.slice(0, Math.max(2, Math.floor(pts.length * p)));
  const visiblePath = visiblePts.map((pt, i) => (i === 0 ? `M${pt[0]},${pt[1]}` : `L${pt[0]},${pt[1]}`)).join(' ');
  return (
    <svg ref={ref} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none"
         style={{ display: 'block', width: '100%', maxWidth: width, height: height, overflow: 'visible' }}>
      {fill && p > 0.5 && (
        <path d={`${visiblePath} L${visiblePts[visiblePts.length-1][0]},${height} L${visiblePts[0][0]},${height} Z`}
              fill={color} opacity="0.12" />
      )}
      <path d={visiblePath} fill="none" stroke={color} strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
      {p > 0.95 && (
        <circle cx={pts[pts.length-1][0]} cy={pts[pts.length-1][1]} r="2.4" fill={color} />
      )}
    </svg>
  );
}

/* ---------- Bar chart (horizontal) ---------- */
function BarChart({ data, max, height, barH = 22, gap = 4, color = 'var(--ink)', motion = 1, format = (v) => v }) {
  const [ref, p] = useDrawIn(motion);
  const m = max || Math.max(...data.map(d => d.value));
  return (
    <div ref={ref} className="bar-chart" style={{ display: 'flex', flexDirection: 'column', gap, fontFamily: 'var(--f-mono)', fontSize: 11 }}>
      {data.map((d, i) => {
        const w = (d.value / m) * 100 * p;
        return (
          <div key={i} className="bar-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(80px, 132px) minmax(0,1fr) minmax(52px, 78px)', alignItems: 'center', gap: 10 }}>
            <div className="bar-label" style={{ color: 'var(--ink-mid)', textTransform: 'uppercase', letterSpacing: '.08em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.label}</div>
            <div style={{ background: 'var(--bg-deep)', height: barH, position: 'relative', overflow: 'hidden', minWidth: 0 }}>
              <div style={{ position: 'absolute', inset: 0, width: `${w}%`, background: d.color || color, transition: 'width .4s ease-out' }}></div>
              {d.note && <div style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', color: 'var(--bg)', mixBlendMode: 'difference', fontSize: 10, letterSpacing: '.08em' }}>{d.note}</div>}
            </div>
            <div className="tnum" style={{ color: 'var(--ink)', textAlign: 'right' }}>{format(d.value)}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Area / Line chart ---------- */
function AreaChart({
  series, width = 600, height = 220, labels, yTicks = 4, motion = 1,
  yFmt = (v) => v, showDots = true, padding = { l: 44, r: 16, t: 16, b: 28 }
}) {
  const [ref, p] = useDrawIn(motion);
  const allVals = series.flatMap(s => s.data);
  const max = Math.max(...allVals);
  const min = Math.min(0, ...allVals);
  const w = width - padding.l - padding.r;
  const h = height - padding.t - padding.b;
  const n = series[0].data.length;
  const x = (i) => padding.l + (i / (n - 1)) * w;
  const y = (v) => padding.t + h - ((v - min) / (max - min || 1)) * h;
  const ticks = Array.from({ length: yTicks + 1 }, (_, i) => min + (i / yTicks) * (max - min));
  return (
    <svg ref={ref} viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', display: 'block', fontFamily: 'var(--f-mono)' }}>
      {/* grid */}
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={padding.l} x2={width - padding.r} y1={y(t)} y2={y(t)} stroke="var(--rule)" strokeWidth="0.5" strokeDasharray="2 3" />
          <text x={padding.l - 8} y={y(t) + 3} textAnchor="end" fontSize="9.5" fill="var(--ink-low)">{yFmt(t)}</text>
        </g>
      ))}
      {/* x labels */}
      {labels && labels.map((l, i) => {
        if (i % Math.ceil(labels.length / 8) !== 0 && i !== labels.length - 1) return null;
        return <text key={i} x={x(i)} y={height - padding.b + 14} textAnchor="middle" fontSize="9.5" fill="var(--ink-low)">{l}</text>;
      })}
      {/* series */}
      {series.map((s, si) => {
        const path = s.data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(v)}`).join(' ');
        const areaPath = `${path} L${x(n-1)},${y(min)} L${x(0)},${y(min)} Z`;
        const color = s.color || (si === 0 ? 'var(--accent)' : 'var(--ink)');
        return (
          <g key={si} clipPath={`inset(0 ${(1 - p) * 100}% 0 0)`} style={{ clipPath: `inset(0 ${(1 - p) * 100}% 0 0)` }}>
            {s.fill && <path d={areaPath} fill={color} opacity="0.10" />}
            <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
            {showDots && p > 0.9 && s.data.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r="2" fill={color} />
            ))}
          </g>
        );
      })}
      {/* legend */}
      {series.length > 1 && (
        <g transform={`translate(${padding.l + 4}, ${padding.t + 4})`}>
          {series.map((s, i) => (
            <g key={i} transform={`translate(${i * 110}, 0)`}>
              <rect width="10" height="2" y="5" fill={s.color || (i === 0 ? 'var(--accent)' : 'var(--ink)')} />
              <text x="16" y="9" fontSize="10" fill="var(--ink-mid)" style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}

/* ---------- Stacked Bar (years × categories) ---------- */
function StackedBars({ labels, series, height = 220, motion = 1, yFmt = (v) => v, padding = { l: 44, r: 16, t: 16, b: 28 } }) {
  const [ref, p] = useDrawIn(motion);
  const totals = labels.map((_, i) => series.reduce((sum, s) => sum + s.data[i], 0));
  const max = Math.max(...totals);
  const width = 600;
  const w = width - padding.l - padding.r;
  const h = height - padding.t - padding.b;
  const bw = (w / labels.length) * 0.62;
  const x = (i) => padding.l + (i + 0.5) * (w / labels.length) - bw / 2;
  return (
    <svg ref={ref} viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', display: 'block', fontFamily: 'var(--f-mono)' }}>
      {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
        <g key={i}>
          <line x1={padding.l} x2={width - padding.r} y1={padding.t + h * (1 - t)} y2={padding.t + h * (1 - t)} stroke="var(--rule)" strokeWidth="0.5" strokeDasharray="2 3" />
          <text x={padding.l - 8} y={padding.t + h * (1 - t) + 3} textAnchor="end" fontSize="9.5" fill="var(--ink-low)">{yFmt(max * t)}</text>
        </g>
      ))}
      {labels.map((lbl, i) => {
        let yCursor = padding.t + h;
        return (
          <g key={i}>
            {series.map((s, si) => {
              const segH = (s.data[i] / max) * h * p;
              const rectY = yCursor - segH;
              const out = (
                <rect key={si} x={x(i)} y={rectY} width={bw} height={segH}
                      fill={s.color || `hsl(${20 + si*40}, 30%, ${30 + si*8}%)`} />
              );
              yCursor = rectY;
              return out;
            })}
            <text x={padding.l + (i + 0.5) * (w / labels.length)} y={height - padding.b + 14} textAnchor="middle" fontSize="9.5" fill="var(--ink-low)">{lbl}</text>
          </g>
        );
      })}
      <g transform={`translate(${padding.l}, ${padding.t - 4})`}>
        {series.map((s, i) => (
          <g key={i} transform={`translate(${i * 92}, 0)`}>
            <rect width="9" height="9" fill={s.color || `hsl(${20 + i*40}, 30%, ${30 + i*8}%)`} />
            <text x="14" y="8" fontSize="9.5" fill="var(--ink-mid)" style={{ textTransform: 'uppercase', letterSpacing: '.08em' }}>{s.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ---------- Donut ---------- */
function Donut({ data, size = 180, thick = 22, motion = 1 }) {
  const [ref, p] = useDrawIn(motion);
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = size / 2 - thick / 2;
  const C = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ overflow: 'visible' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--rule)" strokeWidth={thick * 0.4} />
      {data.map((d, i) => {
        const len = (d.value / total) * C * p;
        const dashArr = `${len} ${C}`;
        const el = (
          <circle key={i} cx={size/2} cy={size/2} r={r}
                  fill="none"
                  stroke={d.color || `hsl(${15 + i*30}, ${35 - i*5}%, ${30 + i*8}%)`}
                  strokeWidth={thick}
                  strokeDasharray={dashArr}
                  strokeDashoffset={-offset}
                  transform={`rotate(-90 ${size/2} ${size/2})`} />
        );
        offset += (d.value / total) * C;
        return el;
      })}
      <text x={size/2} y={size/2 - 2} textAnchor="middle" fontFamily="var(--f-serif)" fontSize="22" fill="var(--ink)">{total.toLocaleString()}</text>
      <text x={size/2} y={size/2 + 14} textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9" fill="var(--ink-low)" style={{ textTransform: 'uppercase', letterSpacing: '.14em' }}>total</text>
    </svg>
  );
}

/* ---------- Dot grid (used for "n-of-1000" visualizations) ---------- */
function DotGrid({ rows = 10, cols = 25, filled, color = 'var(--accent)', empty = 'var(--rule)', motion = 1, dotSize = 5, gap = 6 }) {
  const [ref, p] = useDrawIn(motion);
  const total = rows * cols;
  const fc = Math.round(filled * p);
  const dots = [];
  for (let i = 0; i < total; i++) {
    const r = Math.floor(i / cols);
    const c = i % cols;
    dots.push(
      <circle key={i}
        cx={c * (dotSize + gap) + dotSize/2}
        cy={r * (dotSize + gap) + dotSize/2}
        r={dotSize/2}
        fill={i < fc ? color : empty} />
    );
  }
  return (
    <svg ref={ref}
      width={cols * (dotSize + gap)}
      height={rows * (dotSize + gap)}
      style={{ display: 'block', maxWidth: '100%' }}>
      {dots}
    </svg>
  );
}

/* ---------- Heat strip (small monthly heatmap) ---------- */
function HeatStrip({ data, motion = 1, cellH = 14, gap = 2, max }) {
  const [ref, p] = useDrawIn(motion);
  const m = max || Math.max(...data.map(d => d.v));
  return (
    <div ref={ref} style={{ display: 'flex', gap, alignItems: 'flex-end' }}>
      {data.map((d, i) => {
        const intensity = d.v / m;
        return (
          <div key={i} title={`${d.l}: ${d.v}`} style={{
            width: 12, height: cellH,
            background: `color-mix(in oklab, var(--accent) ${Math.round(intensity * p * 100)}%, var(--rule-soft))`,
            opacity: i / data.length < p ? 1 : 0,
            transition: 'opacity .3s'
          }}/>
        );
      })}
    </div>
  );
}

/* ---------- Big number radial ---------- */
function Gauge({ value, max = 100, size = 140, motion = 1, label, suffix = '' }) {
  const [ref, p] = useDrawIn(motion);
  const r = size/2 - 10;
  const C = Math.PI * r;
  const v = (value / max) * p;
  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <svg width={size} height={size/2 + 12} viewBox={`0 0 ${size} ${size/2 + 12}`} style={{ overflow: 'visible' }}>
        <path d={`M 10,${size/2} A ${r},${r} 0 0 1 ${size-10},${size/2}`} fill="none" stroke="var(--rule)" strokeWidth="6"/>
        <path d={`M 10,${size/2} A ${r},${r} 0 0 1 ${size-10},${size/2}`}
              fill="none" stroke="var(--accent)" strokeWidth="6"
              strokeDasharray={`${C * v} ${C}`} />
        <text x={size/2} y={size/2 - 2} textAnchor="middle" fontFamily="var(--f-serif)" fontSize="28" fill="var(--ink)">
          {Math.round(value * p)}{suffix}
        </text>
      </svg>
      {label && <div className="meta">{label}</div>}
    </div>
  );
}

Object.assign(window, {
  Sparkline, BarChart, AreaChart, StackedBars, Donut, DotGrid, HeatStrip, Gauge, useDrawIn
});
