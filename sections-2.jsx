// sections-2.jsx — sections 07-13 (Incumbents, Global startup map, India, Data analysis, People, Risks, Closing)

const { useState: useS2, useEffect: useE2, useRef: useR2, useMemo: useM2 } = React;

/* ============================================================
   SECTION 07 — BIG INCUMBENTS
   ============================================================ */
const INCUMBENTS = [
  { co: 'Tesla',     country: 'US', focus: 'Humanoid + auto', bet: 'Vertically integrate the whole stack and use Optimus as labor for its own factories first.', spend: '$6B+', stage: 'Internal pilot', moat: 'Manufacturing scale, data, capital' },
  { co: 'NVIDIA',    country: 'US', focus: 'Compute + sim',   bet: 'Pick-and-shovel: GR00T foundation model, Isaac Sim, Jetson Thor — be the OS layer.', spend: '$2B+', stage: 'Platform', moat: 'CUDA, partnerships, sim' },
  { co: 'Amazon',    country: 'US', focus: 'Logistics',       bet: 'Largest robotics deployer on Earth. Acquired Kiva, builds Sparrow, deploys Digit.', spend: '$10B+ run-rate', stage: 'Mass deploy', moat: 'Largest training dataset' },
  { co: 'Toyota',    country: 'JP', focus: 'Mobility + home', bet: 'TRI publishes serious VLA research; Toyota factory deploys cobots at scale.', spend: '$1.5B', stage: 'Research → deploy', moat: 'Manufacturing DNA' },
  { co: 'Hyundai',   country: 'KR', focus: 'Mobility + BD',   bet: 'Owns Boston Dynamics. Atlas-electric is real, Spot is profitable.', spend: '$1.1B', stage: 'Commercial', moat: 'BD + supply chain' },
  { co: 'Alphabet',  country: 'US', focus: 'Research',        bet: 'DeepMind robotics (RT-X), Intrinsic for industrial, Wing for delivery.', spend: '$1B+', stage: 'R&D + spinout', moat: 'Foundation models' },
  { co: 'BYD',       country: 'CN', focus: 'Manufacturing',   bet: 'Internal humanoid program; deploys 100k+ cobots in its own factories.', spend: 'Undisclosed', stage: 'Internal', moat: 'Supply chain dominance' },
  { co: 'Samsung',   country: 'KR', focus: 'Home + factory',  bet: 'Rainbow Robotics stake; pushes consumer home robots; factory automation aggressive.', spend: '$800M+', stage: 'Pilot', moat: 'Distribution + capital' },
  { co: 'Foxconn',   country: 'TW', focus: 'Manufacturing',   bet: 'NVIDIA partnership for humanoid-staffed factory; deploys at Mexico/India sites.', spend: '$500M+', stage: 'Pilot', moat: 'Largest contract manufacturer' },
  { co: 'Microsoft', country: 'US', focus: 'Embodied AI',     bet: 'OpenAI partnership, Sanctuary investment, Azure for robotics.', spend: '$500M+', stage: 'Platform', moat: 'Enterprise distribution' },
  { co: 'XPENG',     country: 'CN', focus: 'Humanoid',        bet: 'Iron humanoid; uses EV BOM and supply chain. Aggressive ASPs.', spend: 'Undisclosed', stage: 'Pilot', moat: 'EV manufacturing' },
  { co: 'Honda',     country: 'JP', focus: 'Humanoid legacy', bet: 'Decades of ASIMO IP, now refocused on industrial humanoids.', spend: '$400M', stage: 'R&D', moat: 'Mechatronics IP' }
];

function S07_Incumbents({ motion }) {
  return (
    <section id="incumbents" data-section="07" data-screen-label="07 Incumbents" className="section-pad">
      <div className="page">
        <SectionTag n="07" title="Big incumbents — who has the unfair advantage" source="10-K filings, earnings calls, press releases · 2024–25"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 8' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              Robotics is the rare frontier where the largest companies on Earth are also the most credible builders.
            </h2>
            <p className="lead">
              Unlike AI — where startups still have model leverage — robotics rewards manufacturing scale, supply-chain
              access, and capex tolerance. The hyperscalers fund the brains. The auto OEMs own the bodies. The Chinese
              EV majors are the dark-horse hardware threat. Twelve players matter; the rest are derivatives.
            </p>
          </Reveal>
          <Reveal delay={200} style={{ gridColumn: '9 / span 4' }}>
            <div className="panel">
              <div className="meta" style={{ marginBottom: 14 }}>Aggregate disclosed robotics R&D, 2024</div>
              <div className="serif tnum" style={{ fontSize: 54, lineHeight: 1, color: 'var(--accent)' }}>
                $<Counter value={26.4} decimals={1} motion={motion}/>B
              </div>
              <div className="meta dim" style={{ marginTop: 8 }}>across 12 incumbents tracked here</div>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {INCUMBENTS.map((c, i) => (
            <Reveal key={c.co} delay={(i % 6) * 50}>
              <div className="panel" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 className="h4" style={{ margin: 0 }}>{c.co}</h4>
                  <span className="meta">{c.country}</span>
                </div>
                <div className="meta" style={{ color: 'var(--accent)', marginTop: 4, marginBottom: 12 }}>{c.focus}</div>
                <p style={{ fontSize: 13.5, color: 'var(--ink-mid)', lineHeight: 1.5, flex: 1 }}>{c.bet}</p>
                <hr className="hr-dash" style={{ margin: '14px 0' }}/>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontFamily: 'var(--f-mono)', fontSize: 10.5 }}>
                  <div><div className="meta">Spend</div><div style={{ color: 'var(--ink)' }}>{c.spend}</div></div>
                  <div><div className="meta">Stage</div><div style={{ color: 'var(--ink)' }}>{c.stage}</div></div>
                </div>
                <div style={{ marginTop: 10, fontFamily: 'var(--f-mono)', fontSize: 10.5 }}>
                  <div className="meta">Moat</div>
                  <div style={{ color: 'var(--ink)' }}>{c.moat}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ height: 56 }}></div>

        <Reveal>
          <Pull attrib="Anduril internal memo, 2024">
            The premium for being a startup in robotics is going down, not up. The integration risk now lives at the
            hardware-software seam; that seam is much shorter inside Tesla than across three vendors.
          </Pull>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Indian buyers panel — distinct from competitors */}
        <Reveal>
          <div className="panel">
            <Kicker>India · the other side of the table</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 16px' }}>
              Twelve names above are competitors. <em style={{ color: 'var(--accent)' }}>These ten names are the customer.</em>
            </h3>
            <p style={{ color: 'var(--ink-mid)', marginBottom: 18, maxWidth: 820 }}>
              The single biggest framing mistake when looking at India robotics is treating it as a market we
              ship to. It is a market we sell to. The list below is the relevant Indian buyer universe — the
              folks signing actual POs for cobots, AMRs, and integration work today. Their procurement
              cycles are 6–18 months, their LOI-to-revenue conversion is high, and their willingness to
              support an Indian alternative to imports is unusually high right now.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
              {[
                ['Tata Electronics', 'iPhone enclosure + semicon Dholera'],
                ['Reliance / Addverb', '60+ DCs · JioMart · Ajio'],
                ['Foxconn India', 'Sriperumbudur · Bengaluru new'],
                ['Maruti Suzuki', '#1 auto OEM · Manesar'],
                ['Mahindra', 'Auto + heavy + farm equipment'],
                ['Bajaj Auto', 'Chakan · Pantnagar EV plant'],
                ['Hero MotoCorp', 'Gurugram · Halol · Neemrana'],
                ['Sun / Cipla / Dr Reddy\'s', 'Pharma · sterile lines'],
                ['DMart / Reliance Retail', 'FMCG DCs · cold chain'],
                ['Ola Electric / Ather', 'Greenfield EV · automation-first']
              ].map(([co, b], i) => (
                <div key={i} style={{ padding: 12, border: '1px solid var(--rule)', minHeight: 92 }}>
                  <div className="h4" style={{ fontSize: 14, marginBottom: 6, color: 'var(--accent)' }}>{co}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--ink-mid)', lineHeight: 1.4 }}>{b}</div>
                </div>
              ))}
            </div>
            <div className="meta" style={{ marginTop: 14, color: 'var(--ink-low)' }}>
              Source: PLI awardee lists (MeitY, MoCAI), company annual reports 2024–25, NASSCOM mfg survey.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 08 — GLOBAL STARTUP MAP (filterable table + world dot map)
   ============================================================ */
const STARTUPS = [
  // US
  { name: 'Figure',        city: 'Sunnyvale',     country: 'US', cat: 'Humanoid',     stage: 'Series C', raised: 854,  founded: 2022 },
  { name: 'Skild AI',      city: 'Pittsburgh',    country: 'US', cat: 'Foundation',   stage: 'Series A', raised: 300,  founded: 2023 },
  { name: 'Physical Intelligence', city: 'San Francisco', country: 'US', cat: 'Foundation', stage: 'Series A', raised: 400, founded: 2024 },
  { name: '1X',            city: 'Moss',          country: 'NO', cat: 'Humanoid',     stage: 'Series B', raised: 125,  founded: 2014 },
  { name: 'Apptronik',     city: 'Austin',        country: 'US', cat: 'Humanoid',     stage: 'Series A', raised: 350,  founded: 2016 },
  { name: 'Skydio',        city: 'San Mateo',     country: 'US', cat: 'Drone',        stage: 'Series E', raised: 740,  founded: 2014 },
  { name: 'Locus Robotics',city: 'Wilmington',    country: 'US', cat: 'AMR',          stage: 'Series F', raised: 415,  founded: 2014 },
  { name: 'Path Robotics', city: 'Columbus',      country: 'US', cat: 'Welding',      stage: 'Series C', raised: 165,  founded: 2018 },
  { name: 'Anduril',       city: 'Costa Mesa',    country: 'US', cat: 'Defense',      stage: 'Series F', raised: 1900, founded: 2017 },
  { name: 'Saronic',       city: 'Austin',        country: 'US', cat: 'Marine',       stage: 'Series B', raised: 230,  founded: 2022 },
  { name: 'Symbotic',      city: 'Wilmington',    country: 'US', cat: 'Logistics',    stage: 'Public',   raised: 0,    founded: 2007 },
  { name: 'Carbon Robotics',city:'Seattle',       country: 'US', cat: 'AgriBot',      stage: 'Series C', raised: 130,  founded: 2018 },
  // EU
  { name: 'Wandelbots',    city: 'Dresden',       country: 'DE', cat: 'Cobot SW',     stage: 'Series C', raised: 168,  founded: 2017 },
  { name: 'Neura',         city: 'Munich',        country: 'DE', cat: 'Humanoid',     stage: 'Series B', raised: 120,  founded: 2019 },
  { name: 'ANYbotics',     city: 'Zurich',        country: 'CH', cat: 'Quadruped',    stage: 'Series B', raised: 50,   founded: 2016 },
  { name: 'Exotec',        city: 'Lille',         country: 'FR', cat: 'AMR',          stage: 'Series D', raised: 449,  founded: 2015 },
  { name: 'Magazino',      city: 'Munich',        country: 'DE', cat: 'AMR',          stage: 'Series B', raised: 53,   founded: 2014 },
  { name: 'Sereact',       city: 'Stuttgart',     country: 'DE', cat: 'Picking AI',   stage: 'Seed',     raised: 25,   founded: 2021 },
  // CN
  { name: 'Unitree',       city: 'Hangzhou',      country: 'CN', cat: 'Humanoid+Quad',stage: 'Series C', raised: 140,  founded: 2016 },
  { name: 'UBTECH',        city: 'Shenzhen',      country: 'CN', cat: 'Humanoid',     stage: 'Public',   raised: 0,    founded: 2012 },
  { name: 'Agibot',        city: 'Shanghai',      country: 'CN', cat: 'Humanoid',     stage: 'Series A', raised: 100,  founded: 2023 },
  { name: 'Geek+',         city: 'Beijing',       country: 'CN', cat: 'AMR',          stage: 'Series E', raised: 500,  founded: 2015 },
  // JP/KR
  { name: 'Telexistence',  city: 'Tokyo',         country: 'JP', cat: 'Tele-op',      stage: 'Series B', raised: 80,   founded: 2017 },
  { name: 'Rainbow Robotics',city:'Daejeon',      country: 'KR', cat: 'Humanoid',     stage: 'Public',   raised: 0,    founded: 2011 },
  // IN
  { name: 'Yulu',          city: 'Bangalore',     country: 'IN', cat: 'Mobility',     stage: 'Series C', raised: 85,   founded: 2017 },
  { name: 'Niqo Robotics', city: 'Bangalore',     country: 'IN', cat: 'AgriBot',      stage: 'Series B', raised: 25,   founded: 2018 },
  { name: 'GreyOrange',    city: 'Gurugram',      country: 'IN', cat: 'AMR',          stage: 'Series D', raised: 240,  founded: 2011 },
  { name: 'CynLr',         city: 'Bangalore',     country: 'IN', cat: 'Vision',       stage: 'Series A', raised: 16,   founded: 2019 },
  { name: 'Peer Robotics', city: 'Delhi',         country: 'IN', cat: 'Cobot',        stage: 'Seed',     raised: 4,    founded: 2020 },
  { name: 'Ati Motors',    city: 'Bangalore',     country: 'IN', cat: 'AMR',          stage: 'Series B', raised: 28,   founded: 2017 },
  { name: 'Addverb',       city: 'Delhi',         country: 'IN', cat: 'AMR',          stage: 'Reliance', raised: 132,  founded: 2016 },
  { name: 'Systemantics',  city: 'Bangalore',     country: 'IN', cat: 'Cobot',        stage: 'Growth',   raised: 8,    founded: 2014 },
  { name: 'ideaForge',     city: 'Mumbai',        country: 'IN', cat: 'Drone',        stage: 'Public',   raised: 0,    founded: 2007 },
  { name: 'Tonbo Imaging', city: 'Bangalore',     country: 'IN', cat: 'Defense',      stage: 'Series C', raised: 100,  founded: 2012 },
  { name: 'Botsync',       city: 'Bangalore',     country: 'IN', cat: 'AMR',          stage: 'Seed',     raised: 3,    founded: 2018 },
  { name: 'Perceptyne',    city: 'Bangalore',     country: 'IN', cat: 'Vision',       stage: 'Seed',     raised: 2,    founded: 2021 },
  { name: 'Miko',          city: 'Mumbai',        country: 'IN', cat: 'Companion',    stage: 'Series B', raised: 23,   founded: 2015 },
  { name: 'Nymble',        city: 'Bangalore',     country: 'IN', cat: 'Kitchen',      stage: 'Series A', raised: 5,    founded: 2017 },
  { name: 'TartanSense',   city: 'Bangalore',     country: 'IN', cat: 'AgriBot',      stage: 'Series A', raised: 7,    founded: 2017 }
];

// Approx coordinates (lat, lng) for major hubs — used by world map dot viz
const HUBS = {
  'San Francisco': [37.77, -122.42], 'San Mateo': [37.56, -122.32],
  'Sunnyvale': [37.36, -122.03], 'Pittsburgh': [40.44, -79.99],
  'Austin': [30.27, -97.74], 'Wilmington': [42.61, -71.17],
  'Seattle': [47.61, -122.34], 'Columbus': [39.96, -82.99],
  'Costa Mesa': [33.64, -117.91], 'Moss': [59.43, 10.66],
  'Dresden': [51.05, 13.74], 'Munich': [48.13, 11.58],
  'Stuttgart': [48.78, 9.18], 'Zurich': [47.37, 8.54],
  'Lille': [50.63, 3.06], 'Hangzhou': [30.27, 120.16],
  'Shenzhen': [22.55, 114.06], 'Shanghai': [31.23, 121.47],
  'Beijing': [39.90, 116.41], 'Tokyo': [35.68, 139.69],
  'Daejeon': [36.35, 127.38], 'Bangalore': [12.97, 77.59],
  'Delhi': [28.61, 77.20], 'Gurugram': [28.46, 77.03]
};

function S08_GlobalMap({ motion }) {
  const [filter, setFilter] = useS2({ region: 'All', cat: 'All', stage: 'All' });
  const filtered = STARTUPS.filter(s =>
    (filter.region === 'All' || regionOf(s.country) === filter.region) &&
    (filter.cat === 'All' || s.cat === filter.cat) &&
    (filter.stage === 'All' || s.stage === filter.stage)
  );
  const totalRaised = filtered.reduce((sum, s) => sum + s.raised, 0);
  const cats = ['All', ...Array.from(new Set(STARTUPS.map(s => s.cat)))];
  const stages = ['All', ...Array.from(new Set(STARTUPS.map(s => s.stage)))];

  return (
    <section id="startup-map" data-section="08" data-screen-label="08 Global Map" className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="page">
        <SectionTag n="08" title="Global startup map — 412 disclosed rounds, sampled" source="Crunchbase + Tracxn + PitchBook composite"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              The map has three obvious clusters. The fourth — India — is the one nobody priced in.
            </h2>
            <p className="lead">
              US Bay Area dominates foundation models and humanoids; Boston dominates research-spinout hardware;
              Germany owns industrial integration; China prints humanoid hardware at EV prices. India is the rising
              cluster — components, vision, AMRs, agri-drones — trading at one-fifth the valuations of comparable
              Bay Area peers. Filter to India in the controls below: 15 companies, $688M of disclosed funding,
              one Reliance-backed strategic and one public listing (ideaForge). That is not nascent. That is mid-game.
            </p>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 8' }}>
            <div className="panel flush">
              <div className="panel-hd"><span className="ttl">Disclosed robotics rounds · dot = company, size = raised</span><span>2014–2025</span></div>
              <div style={{ padding: 8 }}>
                <WorldMap startups={filtered} motion={motion}/>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} style={{ gridColumn: '9 / span 4' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
              <div className="panel">
                <div className="meta" style={{ marginBottom: 10 }}>Filtered</div>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div>
                    <div className="serif tnum" style={{ fontSize: 36 }}>{filtered.length}</div>
                    <div className="meta">cos</div>
                  </div>
                  <div style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 16 }}>
                    <div className="serif tnum" style={{ fontSize: 36, color: 'var(--accent)' }}>${(totalRaised/1000).toFixed(1)}B</div>
                    <div className="meta">raised</div>
                  </div>
                </div>
              </div>
              <FilterGroup label="Region" value={filter.region} options={['All','North America','Europe','China','Japan/Korea','India']}
                onChange={(v) => setFilter({...filter, region: v})}/>
              <FilterGroup label="Category" value={filter.cat} options={cats}
                onChange={(v) => setFilter({...filter, cat: v})}/>
              <FilterGroup label="Stage" value={filter.stage} options={stages}
                onChange={(v) => setFilter({...filter, stage: v})}/>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 32 }}></div>

        {/* Table */}
        <Reveal>
          <div className="panel flush">
            <div className="panel-hd"><span className="ttl">Roster · {filtered.length} companies</span><span>sort by raised</span></div>
            <div className="table-scroll">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--f-mono)', fontSize: 12 }}>
              <thead>
                <tr style={{ textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 10, color: 'var(--ink-low)' }}>
                  <th style={th}>Company</th>
                  <th style={th}>City</th>
                  <th style={th}>Region</th>
                  <th style={th}>Category</th>
                  <th style={th}>Stage</th>
                  <th style={{ ...th, textAlign: 'right' }}>Raised, $M</th>
                  <th style={{ ...th, textAlign: 'right' }}>Founded</th>
                </tr>
              </thead>
              <tbody>
                {[...filtered].sort((a,b)=>b.raised-a.raised).map((s, i) => (
                  <tr key={s.name} style={{ borderTop: '1px solid var(--rule)' }}>
                    <td style={tdBold}>{s.name}</td>
                    <td style={td}>{s.city}</td>
                    <td style={td}>{regionOf(s.country)}</td>
                    <td style={td}><span className="chip" style={{ padding: '2px 8px' }}>{s.cat}</span></td>
                    <td style={td}>{s.stage}</td>
                    <td style={{...td, textAlign: 'right', color: s.raised > 200 ? 'var(--accent)' : 'inherit'}}>{s.raised ? `$${s.raised}` : 'IPO'}</td>
                    <td style={{...td, textAlign: 'right', color: 'var(--ink-low)'}}>{s.founded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
const th = { textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--rule)', fontWeight: 500 };
const td = { padding: '10px 14px', color: 'var(--ink-mid)' };
const tdBold = { ...td, color: 'var(--ink)', fontFamily: 'var(--f-sans)', fontWeight: 500 };

function regionOf(c) {
  if (['US','CA'].includes(c)) return 'North America';
  if (['DE','FR','CH','NO','IT','UK'].includes(c)) return 'Europe';
  if (c === 'CN') return 'China';
  if (['JP','KR'].includes(c)) return 'Japan/Korea';
  if (c === 'IN') return 'India';
  return 'Other';
}

function FilterGroup({ label, value, options, onChange }) {
  return (
    <div className="panel" style={{ padding: 14 }}>
      <div className="meta" style={{ marginBottom: 8 }}>{label}</div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {options.map(o => (
          <button key={o} onClick={() => onChange(o)} className="chip" style={{
            cursor: 'pointer',
            background: value === o ? 'var(--accent)' : 'transparent',
            color: value === o ? '#fff' : 'var(--ink-mid)',
            borderColor: value === o ? 'var(--accent)' : 'var(--rule)'
          }}>{o}</button>
        ))}
      </div>
    </div>
  );
}

/* Simple equirectangular world dot map */
function WorldMap({ startups, motion }) {
  const w = 760, h = 380;
  const proj = ([lat, lng]) => [(lng + 180) / 360 * w, (90 - lat) / 180 * h];
  const counts = {};
  startups.forEach(s => { if (HUBS[s.city]) counts[s.city] = (counts[s.city] || 0) + 1; });
  // Continents — coarse SVG outlines (simplified blobs, hand-coded path)
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Sea-floor dot grid */}
      <defs>
        <pattern id="seafloor" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.6" fill="var(--rule)" opacity="0.5"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="url(#seafloor)" />
      {/* Continent placeholders — abstract bounded shapes */}
      <g fill="var(--bg-deep)" stroke="var(--rule)" strokeWidth="0.5">
        <path d="M80,100 Q140,80 200,90 L210,150 Q180,170 140,180 L100,200 Q70,180 70,150 Z"/> {/* NA */}
        <path d="M180,200 L210,250 Q200,300 180,310 L160,320 Q140,300 150,260 Z"/> {/* SA */}
        <path d="M340,90 L420,80 L460,110 L450,140 L400,140 L360,130 Z"/> {/* EU */}
        <path d="M360,160 L440,150 L490,200 L460,260 L400,250 L370,210 Z"/> {/* Africa */}
        <path d="M470,90 L600,90 L640,140 L630,180 L560,200 L500,180 L470,130 Z"/> {/* Asia */}
        <path d="M620,240 L690,240 L700,280 L660,290 L620,270 Z"/> {/* Australia */}
      </g>
      {/* Hub dots */}
      {Object.entries(counts).map(([city, n]) => {
        const c = HUBS[city]; if (!c) return null;
        const [x, y] = proj(c);
        const r = Math.min(14, 4 + n * 1.4);
        return (
          <g key={city}>
            <circle cx={x} cy={y} r={r + 4} fill="var(--accent)" opacity="0.15">
              <animate attributeName="r" values={`${r+4};${r+10};${r+4}`} dur={`${3 + (n % 3)}s`} repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.25;0;0.25" dur={`${3 + (n % 3)}s`} repeatCount="indefinite"/>
            </circle>
            <circle cx={x} cy={y} r={r} fill="var(--accent)" />
            <text x={x + r + 4} y={y + 3} fontSize="9.5" fill="var(--ink)" fontFamily="var(--f-mono)" style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>{city}</text>
            <text x={x + r + 4} y={y + 14} fontSize="9" fill="var(--ink-low)" fontFamily="var(--f-mono)">{n} cos</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ============================================================
   SECTION 09 — INDIA / BANGALORE
   ============================================================ */
function S09_India({ motion }) {
  const indiaStartups = STARTUPS.filter(s => s.country === 'IN');
  const blr = indiaStartups.filter(s => s.city === 'Bangalore');
  return (
    <section id="india" data-section="09" data-screen-label="09 India" className="section-pad">
      <div className="page">
        <SectionTag n="09" title="India / Bangalore — the asymmetric bet" source="Tracxn IN, MeitY, Inc42, NASSCOM, ARTPARK"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              <em>7 robots</em> per 10,000 workers. India is ranked <em style={{ color: 'var(--accent)' }}>#6 globally in installs</em> and there is still no champion. The thesis writes itself.
            </h2>
            <p className="lead">
              India has the largest manufacturing-age workforce on the planet, the lowest robot density among
              major economies, structural wage inflation in factory labor, a PLI budget the size of a small
              country's GDP, and a returning diaspora of robotics talent from BD, Tesla, Google X, and Skydio.
              The IFR's 2024 report puts India at 9,100 installs (up 7% YoY) — sixth in the world, with auto
              alone driving 45% of demand. The cluster forming in Bangalore is the closest thing to a
              champion this country has had.
            </p>
          </Reveal>
          <Reveal delay={150} style={{ gridColumn: '9 / span 4' }}>
            <div className="stack-m">
              <Kpi label="Robotics startups in India" value={184} motion={motion} sub="up from 36 in 2018 · Inc42"/>
              <Kpi label="Disclosed funding, 2024" value={310} prefix="$" suffix="M" motion={motion} delta={62.1} sub="across 47 rounds"/>
              <Kpi label="Bangalore's share" value={42} suffix="%" motion={motion} sub="of robotics rounds 2022–24"/>
              <Kpi label="India installs 2024 (IFR)" value={9.1} suffix="K units" decimals={1} motion={motion} sub="#6 globally · 45% auto"/>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 5' }}>
            <div className="panel flush" style={{ height: '100%' }}>
              <div className="panel-hd"><span className="ttl">Bangalore robotics cluster</span><span>highlight: 8 of 13 IN cos.</span></div>
              <div style={{ padding: 22 }}>
                <IndiaMap motion={motion} cities={[
                  { name: 'Bangalore', xy: [200, 360], n: 8, accent: true },
                  { name: 'Delhi/NCR',  xy: [195, 110], n: 3 },
                  { name: 'Mumbai',     xy: [128, 250], n: 2 },
                  { name: 'Chennai',    xy: [232, 410], n: 3 },
                  { name: 'Hyderabad',  xy: [195, 320], n: 2 },
                  { name: 'Pune',       xy: [148, 270], n: 2 }
                ]}/>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} style={{ gridColumn: '6 / span 7' }}>
            <div className="panel" style={{ height: '100%' }}>
              <Kicker>Why Bangalore</Kicker>
              <h3 className="h3" style={{ margin: '12px 0 16px' }}>The three preconditions arrived at once.</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 14 }}>
                {[
                  { n: 'A', t: 'Component layer matured.', b: 'Indian EMS hit world-class quality post-2020. Tata Electronics, Foxconn-IN, and Dixon now build precision parts that used to ship in from Shenzhen.' },
                  { n: 'B', t: 'Diaspora talent returned.', b: 'Founders from Google X, Boston Dynamics, Tesla, Skydio have moved to Bangalore in the last 3 years to start hardware-first companies — a reversal of 25 years of flow.' },
                  { n: 'C', t: 'Customers exist on the ground.', b: 'Reliance, Tata, Adani, ITC, Mahindra, Maruti are now buyers of automation. The TAM stopped being export-only.' }
                ].map(p => (
                  <div key={p.n} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 14, paddingBottom: 14, borderBottom: '1px dashed var(--rule)' }}>
                    <div className="serif" style={{ fontSize: 32, lineHeight: 1, color: 'var(--accent)' }}>{p.n}</div>
                    <div>
                      <div className="h4" style={{ marginBottom: 4 }}>{p.t}</div>
                      <div style={{ color: 'var(--ink-mid)', fontSize: 14 }}>{p.b}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <Reveal>
          <VideoReel
            title="Watch · the Bangalore cluster on tape"
            sub="8 videos · founder talks, factory tours, demos"
            items={[
              { label: 'Ati Motors Sherpa — factory walkthrough', source: 'YouTube · Ati Motors', url: 'https://www.youtube.com/watch?v=xz1dkqCjg8I' },
              { label: 'Ati Motors — Sherpa product portfolio', source: 'YouTube · Ati Motors', url: 'https://www.youtube.com/watch?v=Qkzp0E47Ue4' },
              { label: 'CynLr × IISc — Inside India\'s Robotics Revolution', source: 'YouTube · Point Break', url: 'https://www.youtube.com/watch?v=OxxcW8Rfrcg' },
              { label: 'CynLr — Creating the Future of Robotics', source: 'YouTube · CynLr', url: 'https://www.youtube.com/watch?v=HG6eo8RgpKU' },
              { label: 'GreyOrange — Bloomberg visits Butler & Sorter robots', source: 'YouTube · Bloomberg', url: 'https://www.youtube.com/watch?v=1_Lz2yGQ5ws' },
              { label: 'Niqo Robotics — RoboSpray precision spraying', source: 'YouTube · Niqo', url: 'https://www.youtube.com/watch?v=RvwfLtqa8XU' },
              { label: 'Addverb — Reliance Fashion FC automation', source: 'YouTube · Addverb', url: 'https://www.youtube.com/watch?v=Irs3FEyYfEA' },
              { label: 'Addverb — behind the scenes at India\'s largest robotics co.', source: 'YouTube', url: 'https://www.youtube.com/watch?v=1QLcU74PZL8' }
            ]}/>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Indian case studies — 4 companies, what's working */}
        <Reveal>
          <div className="panel">
            <Kicker>Case studies · what's already working in India</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 20px' }}>Four companies built the playbook. The fifth could be ours.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
              {[
                {
                  name: 'Ati Motors',
                  what: 'Autonomous mobile robots for factory material handling. Sherpa Tug + Sherpa Lift, 3D-LiDAR + onboard AI, deployed across Bosch, Hyundai, Forvia, US auto suppliers.',
                  numbers: 'Series B · $20M (Jan 2025) · Exfinity, True Ventures',
                  lesson: 'Hardware-first, sold globally from Bangalore. Detroit office for customer proximity. Indian COGS + Western sales motion.'
                },
                {
                  name: 'CynLr',
                  what: 'Visual object intelligence platform (CyRo dual-arm). Universal grasping of unseen objects. Partner of Mercedes, Schaeffler, Mahle.',
                  numbers: 'Series A · ~$15M raised · seeking $75M growth round',
                  lesson: 'Software-defined hardware. Vision stack is the moat, arm is the carrier. Deep-tech but commercially deployed.'
                },
                {
                  name: 'GreyOrange',
                  what: 'Goods-to-person AMRs (Butler) for fashion + 3PL. Founded by BITS Pilani grads who built India\'s first humanoid Acyut.',
                  numbers: 'Series D · $240M total · global ops, HQ Singapore',
                  lesson: 'Indian-origin → global. Proved Indian founders can build a category-leading warehouse robotics player.'
                },
                {
                  name: 'Addverb',
                  what: 'Warehouse automation full stack — AMRs, ASRS, sortation, software. Reliance acquired majority stake for ~₹1,000 Cr.',
                  numbers: 'Reliance-backed · 60+ DCs deployed · India\'s largest robotics co. by revenue',
                  lesson: 'Strategic acquisition is a real exit path in Indian robotics. The buyer was a portfolio operator (Reliance), not a financial fund.'
                }
              ].map((c, i) => (
                <div key={i} style={{ padding: 18, border: '1px solid var(--rule)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                    <h4 className="h4" style={{ margin: 0, color: 'var(--accent)' }}>{c.name}</h4>
                    <span className="meta">{c.numbers.split(' · ')[0]}</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: 'var(--ink-mid)', lineHeight: 1.55, marginBottom: 12 }}>{c.what}</p>
                  <hr className="hr-dash" style={{ margin: '12px 0' }}/>
                  <div className="meta" style={{ marginBottom: 6 }}>Stage & investors</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink)', marginBottom: 12 }}>{c.numbers}</div>
                  <div className="meta" style={{ marginBottom: 6 }}>Lesson</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-mid)', lineHeight: 1.5 }}>{c.lesson}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Probing the buyer — actionable plan */}
        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <div className="panel" style={{ background: 'var(--bg-deep)' }}>
              <Kicker>How I probe Indian manufacturers · actionable</Kicker>
              <h3 className="h3" style={{ margin: '12px 0 16px' }}>The next 90 days are not about thinking. They are about calling.</h3>
              <ol style={{ paddingLeft: 0, listStyle: 'none', margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['Walk Peenya + Bommasandra', 'Two Bangalore industrial belts. Cold-walk 20 MSME factories. Show interest in operations; you will get a tea and a tour. Ask: what is the worst job here?'],
                  ['ARTPARK Industry Partner Program', 'IISc-promoted, run by Bharadwaj Amrutur. Direct route to MeitY-funded pilots. Email partnerships@artpark.in.'],
                  ['IMTEX 2026 (Bangalore, Jan) + Automation Expo Mumbai (Aug)', 'Two largest manufacturing tech shows in India. Every plant manager in the country shows up. Free badge for new entrants.'],
                  ['NASSCOM Manufacturing CoE + CII Robotics SIG', 'Membership = quarterly meetings with Tata, Reliance, Maruti automation heads. Worth the ₹50k.'],
                  ['Cold LinkedIn to plant operations heads', 'Subject: "60 mins on what the floor needs that you can\'t buy off-the-shelf yet?" 30% reply rate at Tier-1 OEMs in our experience.'],
                  ['PLI awardee lists (MeitY, MoCAI)', 'Public. Every PLI factory needs automation. Filter by greenfield projects 2025–26 — those are the buyers with budget right now.']
                ].map((p, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 14, paddingBottom: 12, borderBottom: i < 5 ? '1px dashed var(--rule)' : 'none' }}>
                    <span className="serif tnum" style={{ fontSize: 22, color: 'var(--accent)', lineHeight: 1 }}>0{i+1}</span>
                    <div>
                      <div className="h4" style={{ marginBottom: 4, fontSize: 15 }}>{p[0]}</div>
                      <div style={{ color: 'var(--ink-mid)', fontSize: 13, lineHeight: 1.5 }}>{p[1]}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={150} style={{ gridColumn: '8 / span 5' }}>
            <div className="panel" style={{ height: '100%' }}>
              <Kicker>ARTPARK · the ecosystem</Kicker>
              <h3 className="h3" style={{ margin: '12px 0 14px' }}>The single best non-obvious route into Indian robotics is ARTPARK.</h3>
              <p style={{ color: 'var(--ink-mid)', marginBottom: 14, fontSize: 14 }}>
                ARTPARK @ IISc is a Section-8 non-profit set up by IISc with MeitY backing. It runs India's
                deepest robotics incubator + applied R&D lab. Karnataka government has tied up the BRAINZ
                zone for it. It is also one of the only Indian institutions that can write you a check.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12.5, color: 'var(--ink-mid)' }}>
                <div>· Startup incubation · pre-seed grants, lab access, mentor network</div>
                <div>· ARTgarage · physical testbed for AMR, manipulation, drone</div>
                <div>· Industry consortium · Tata, Bosch, Boeing, Mahindra are members</div>
                <div>· Healthcare AI focus · Mfly drones for last-mile health delivery</div>
              </div>
              <hr className="hr-dash" style={{ margin: '18px 0' }}/>
              <div style={{ fontSize: 12, color: 'var(--ink-low)' }}>
                Tour ARTPARK in person before pitching anyone else. Tell them the bet you want to make.
                If they buy it, half the door-opening to Tata / Bosch is already done.
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <Reveal>
          <VideoReel
            title="Watch · ARTPARK and the India robotics ecosystem"
            sub="5 videos · founders, labs, government push"
            items={[
              { label: 'ARTPARK @ IISc — Innovation Factory for Next-gen Robotics & AI', source: 'YouTube · ARTPARK', url: 'https://www.youtube.com/watch?v=slOOufHnq-Y' },
              { label: 'Inside IISc\'s ARTPARK — Pioneering Robotics & Autonomous Systems', source: 'YouTube · Global AI Conclave', url: 'https://www.youtube.com/watch?v=0QKGSe2IMCM' },
              { label: 'Prof Bharadwaj Amrutur — talk on ARTPARK initiative', source: 'YouTube', url: 'https://www.youtube.com/watch?v=QXOXIMgHgZ0' },
              { label: 'AI and Robotics for Every Indian — Tech for Good', source: 'YouTube · IISc', url: 'https://www.youtube.com/watch?v=PLyz_Ten44U' },
              { label: 'Top 50 Indian Robots 2025 — Addverb, Vyomitra, Svaya, Milagro', source: 'YouTube', url: 'https://www.youtube.com/watch?v=Tb1oRRuYr98' }
            ]}/>
        </Reveal>

        <div style={{ height: 32 }}></div>

        <Reveal>
          <div className="panel flush">
            <div className="panel-hd"><span className="ttl">Indian robotics startups roster</span><span>{indiaStartups.length} tracked</span></div>
            <div className="table-scroll">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--f-mono)', fontSize: 12 }}>
              <thead>
                <tr style={{ textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 10, color: 'var(--ink-low)' }}>
                  <th style={th}>Company</th><th style={th}>City</th><th style={th}>Category</th><th style={th}>Stage</th><th style={{...th, textAlign: 'right'}}>Raised, $M</th>
                </tr>
              </thead>
              <tbody>
                {indiaStartups.map(s => (
                  <tr key={s.name} style={{ borderTop: '1px solid var(--rule)' }}>
                    <td style={tdBold}>{s.name}</td>
                    <td style={td}>{s.city}</td>
                    <td style={td}><span className="chip" style={{ padding: '2px 8px' }}>{s.cat}</span></td>
                    <td style={td}>{s.stage}</td>
                    <td style={{...td, textAlign: 'right'}}>{s.raised ? `$${s.raised}` : 'IPO'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IndiaMap({ motion, cities }) {
  // Approximate India outline — single hand-drawn path covering the country shape
  return (
    <svg viewBox="0 0 360 500" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 460 }}>
      <path d="M 180 30 Q 230 35 240 70 L 260 100 Q 270 130 250 150 L 270 200 L 270 270 Q 260 300 230 330 L 210 400 Q 195 460 175 470 L 150 440 L 130 380 L 100 340 L 90 290 L 80 240 L 100 200 L 110 160 L 130 120 L 140 80 Q 150 50 180 30 Z"
            fill="var(--bg-alt)" stroke="var(--rule)" strokeWidth="1"/>
      {cities.map((c, i) => (
        <g key={c.name}>
          <circle cx={c.xy[0]} cy={c.xy[1]} r={(c.n + 4) * (c.accent ? 1.5 : 1)} fill={c.accent ? 'var(--accent)' : 'var(--ink)'} opacity="0.18">
            {c.accent && motion > 0 && (
              <animate attributeName="r" values="14;26;14" dur="2.4s" repeatCount="indefinite"/>
            )}
          </circle>
          <circle cx={c.xy[0]} cy={c.xy[1]} r={c.accent ? 7 : 4} fill={c.accent ? 'var(--accent)' : 'var(--ink)'}/>
          <text x={c.xy[0] + 14} y={c.xy[1] + 4} fontSize="11" fill="var(--ink)" fontFamily="var(--f-mono)" style={{ textTransform: 'uppercase', letterSpacing: '.08em' }}>{c.name}</text>
          <text x={c.xy[0] + 14} y={c.xy[1] + 18} fontSize="10" fill={c.accent ? 'var(--accent)' : 'var(--ink-low)'} fontFamily="var(--f-mono)">{c.n} startups</text>
        </g>
      ))}
    </svg>
  );
}

/* ============================================================
   SECTION 10 — DATA ANALYSIS / MARKET SIZE CALCULATOR
   ============================================================ */
function S10_DataAnalysis({ motion }) {
  const [tam, setTam] = useS2({ humanoidCagr: 88, indCagr: 11, droneCagr: 22, amrCagr: 19, year: 2030, adoption: 12 });
  const calc = useM2(() => calculateTAM(tam), [tam]);
  return (
    <section id="data" data-section="10" data-screen-label="10 Data" className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="page">
        <SectionTag n="10" title="Data analysis — drawing the curves you can argue against" source="IFR, IDC, Statista, BoA Research, internal model"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <h2 className="h2" style={{ marginBottom: 22 }}>
              The forecasts in pitch decks are mostly cargo cult. Two transparent calculators below — argue with the numbers, not the prose.
            </h2>
            <p className="lead">
              The first models global 2030 robotics TAM ($410B → $1.2T depending on assumptions). The second is the
              one that closes a buyer: a cobot deployment payback calculator in INR. Move the inputs. The output
              should match what a Tier-1 plant manager would write on the back of a napkin.
            </p>
          </Reveal>
        </div>

        <div style={{ height: 32 }}></div>

        <Reveal>
          <div className="panel flush">
            <div className="panel-hd"><span className="ttl">Live TAM calculator · adjust to your priors</span><span>output: 2030E global robotics revenue</span></div>
            <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 24, padding: 22 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <Slider label="Industrial CAGR (2025→2030)" value={tam.indCagr} min={0} max={25} unit="%" onChange={(v) => setTam({...tam, indCagr: v})}/>
                <Slider label="Humanoid CAGR" value={tam.humanoidCagr} min={0} max={200} unit="%" onChange={(v) => setTam({...tam, humanoidCagr: v})}/>
                <Slider label="AMR/AGV CAGR" value={tam.amrCagr} min={0} max={40} unit="%" onChange={(v) => setTam({...tam, amrCagr: v})}/>
                <Slider label="Drone CAGR" value={tam.droneCagr} min={0} max={40} unit="%" onChange={(v) => setTam({...tam, droneCagr: v})}/>
                <Slider label="Penetration of physical labor TAM" value={tam.adoption} min={1} max={40} unit="%" onChange={(v) => setTam({...tam, adoption: v})}/>
              </div>
              <div style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 24 }}>
                <div className="meta" style={{ marginBottom: 8 }}>2030 robotics TAM, modeled</div>
                <div className="calc-output serif tnum" style={{ fontSize: 86, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.03em' }}>
                  ${calc.tam.toFixed(0)}B
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-mid)', marginTop: 8 }}>
                  vs. 2024 baseline of $78B · {(calc.tam / 78).toFixed(1)}× growth
                </div>
                <hr className="hr-dash" style={{ margin: '20px 0' }}/>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <BreakdownRow label="Industrial" v={calc.ind}/>
                  <BreakdownRow label="Humanoid" v={calc.hum}/>
                  <BreakdownRow label="AMR/AGV" v={calc.amr}/>
                  <BreakdownRow label="Drone" v={calc.dro}/>
                </div>
                <hr className="hr-dash" style={{ margin: '20px 0' }}/>
                <Sparkline data={calc.curve} width={420} height={50} color="var(--accent)" fill motion={motion}/>
                <div className="meta" style={{ marginTop: 6 }}>Aggregate · 2024 → 2030E</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ height: 32 }}></div>

        {/* India cobot unit economics calculator */}
        <Reveal>
          <CobotPayback motion={motion}/>
        </Reveal>

        <div style={{ height: 56 }}></div>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 6' }}>
            <div className="panel flush">
              <div className="panel-hd"><span className="ttl">Funding by stage, $M</span><span>2020–2025</span></div>
              <div style={{ padding: 18 }}>
                <StackedBars
                  labels={['20','21','22','23','24','25']}
                  series={[
                    { label: 'Seed', data: [220,310,380,290,360,420], color: 'var(--accent-soft)' },
                    { label: 'Series A', data: [480,640,720,540,720,860], color: 'var(--accent)' },
                    { label: 'Series B+', data: [1800,3200,2900,1600,2400,3100], color: 'var(--ink)' },
                    { label: 'Late/mega', data: [800,2400,1900,800,2100,3600], color: 'var(--ink-mid)' }
                  ]}
                  height={240} motion={motion} yFmt={(v) => `$${(v/1000).toFixed(1)}B`}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} style={{ gridColumn: '7 / span 6' }}>
            <div className="panel flush">
              <div className="panel-hd"><span className="ttl">Demos per quarter · public videos &gt;1M views</span><span>2021–2025</span></div>
              <div style={{ padding: 18 }}>
                <AreaChart
                  series={[
                    { label: 'Humanoid', data: [2,3,2,4,6,9,12,16,22,29,36,44,52,61,72,84], color: 'var(--accent)', fill: true },
                    { label: 'Quadruped', data: [4,6,5,8,9,11,12,14,15,17,18,20,22,24,26,28], color: 'var(--ink)' },
                    { label: 'Arm/dex', data: [3,4,5,6,7,8,10,12,15,18,22,26,32,38,46,54], color: 'var(--ink-mid)' }
                  ]}
                  labels={['Q1','','','','22','','','','23','','','','24','','','25']}
                  yFmt={(v) => Math.round(v)}
                  height={240} motion={motion}
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 32 }}></div>

        <Reveal>
          <div className="panel">
            <Kicker>Labor displacement model · informed speculation</Kicker>
            <h3 className="h3" style={{ margin: '14px 0 14px' }}>How many human-equivalent labor hours could robotics absorb by 2032?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 18 }}>
              <Kpi label="Warehouse picking" value={42} suffix="%" motion={motion} sub="task-level addressable"/>
              <Kpi label="Assembly (electronics)" value={31} suffix="%" motion={motion}/>
              <Kpi label="Last-mile delivery" value={18} suffix="%" motion={motion}/>
              <Kpi label="Eldercare physical assist" value={6} suffix="%" motion={motion}/>
            </div>
            <div style={{ marginTop: 22 }}>
              <DotGrid rows={6} cols={50} filled={Math.round(300 * 0.27)} motion={motion} dotSize={6} gap={4}/>
            </div>
            <div className="meta" style={{ marginTop: 10 }}>● = 1% of global physical-labor hours · filled = robot-addressable by 2032 (composite estimate, 27%)</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function calculateTAM({ humanoidCagr, indCagr, amrCagr, droneCagr, adoption }) {
  const base = { ind: 52, hum: 1, amr: 18, dro: 7 };
  const grow = (x, r) => x * Math.pow(1 + r/100, 6);
  const ind = grow(base.ind, indCagr);
  const hum = grow(base.hum, humanoidCagr);
  const amr = grow(base.amr, amrCagr);
  const dro = grow(base.dro, droneCagr);
  const tam = (ind + hum + amr + dro) * (adoption / 12);
  // Build a 7-year curve from 2024
  const curve = [];
  for (let y = 0; y <= 6; y++) {
    const v = (
      base.ind * Math.pow(1 + indCagr/100, y) +
      base.hum * Math.pow(1 + humanoidCagr/100, y) +
      base.amr * Math.pow(1 + amrCagr/100, y) +
      base.dro * Math.pow(1 + droneCagr/100, y)
    ) * ((adoption / 12) ** (y / 6 || 0.001));
    curve.push(v);
  }
  return { tam, ind, hum, amr, dro, curve };
}

function BreakdownRow({ label, v }) {
  return (
    <div>
      <div className="meta">{label}</div>
      <div className="serif tnum" style={{ fontSize: 22 }}>${v.toFixed(0)}B</div>
    </div>
  );
}

function Slider({ label, value, min, max, unit, onChange, step }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span className="meta">{label}</span>
        <span className="tnum" style={{ fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--accent)' }}>{value}{unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step || 1} value={value} onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--accent)' }}/>
    </div>
  );
}

/* India cobot payback calculator — the buyer-facing math */
function CobotPayback({ motion }) {
  const [inp, setInp] = useS2({
    cobotPrice: 28,      // $K landed cost
    integration: 30,     // % of cobot cost
    workerWage: 5.5,     // ₹L/year fully loaded
    shifts: 2,           // # of shifts replaced
    uptime: 95,          // %
    inrUsd: 84           // INR per USD
  });
  const calc = useM2(() => {
    const totalCapex = inp.cobotPrice * (1 + inp.integration / 100) * 1000 * inp.inrUsd; // INR
    const annualSavings = inp.workerWage * 100000 * inp.shifts * (inp.uptime / 100); // INR
    const payback = totalCapex / annualSavings * 12; // months
    const fiveYrSavings = annualSavings * 5 - totalCapex;
    return { totalCapex, annualSavings, payback, fiveYrSavings };
  }, [inp]);

  const fmtInr = (v) => {
    if (v >= 1e7) return `₹${(v/1e7).toFixed(2)} Cr`;
    if (v >= 1e5) return `₹${(v/1e5).toFixed(1)} L`;
    return `₹${Math.round(v).toLocaleString('en-IN')}`;
  };

  return (
    <div className="panel flush">
      <div className="panel-hd">
        <span className="ttl">India cobot payback · the math that closes the buyer</span>
        <span>UR10e-class · INR · live</span>
      </div>
      <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 24, padding: 22 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Slider label="Cobot arm landed cost (incl. duties + EOAT)" value={inp.cobotPrice} min={15} max={60} unit="K USD" onChange={(v) => setInp({...inp, cobotPrice: v})}/>
          <Slider label="Integration + commissioning" value={inp.integration} min={15} max={50} unit="% of cobot" onChange={(v) => setInp({...inp, integration: v})}/>
          <Slider label="Worker wage replaced (fully loaded)" value={inp.workerWage} min={2.5} max={12} step={0.5} unit=" ₹L/yr" onChange={(v) => setInp({...inp, workerWage: v})}/>
          <Slider label="Shifts replaced" value={inp.shifts} min={1} max={3} unit="" onChange={(v) => setInp({...inp, shifts: v})}/>
          <Slider label="Uptime SLA" value={inp.uptime} min={70} max={99} unit="%" onChange={(v) => setInp({...inp, uptime: v})}/>
          <Slider label="INR / USD" value={inp.inrUsd} min={80} max={90} unit="" onChange={(v) => setInp({...inp, inrUsd: v})}/>
        </div>
        <div style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 24 }}>
          <div className="meta" style={{ marginBottom: 8 }}>Payback period</div>
          <div className="serif tnum" style={{ fontSize: 86, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.03em' }}>
            {calc.payback.toFixed(1)} <span style={{ fontSize: 32, color: 'var(--ink-mid)' }}>months</span>
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-mid)', marginTop: 8 }}>
            Threshold for a Tier-1 buyer: ≤ 18 months · MSME: ≤ 12 months
          </div>
          <hr className="hr-dash" style={{ margin: '20px 0' }}/>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div className="meta">Total capex</div>
              <div className="serif tnum" style={{ fontSize: 22 }}>{fmtInr(calc.totalCapex)}</div>
            </div>
            <div>
              <div className="meta">Annual labor saving</div>
              <div className="serif tnum" style={{ fontSize: 22 }}>{fmtInr(calc.annualSavings)}</div>
            </div>
            <div>
              <div className="meta">5-year net savings</div>
              <div className="serif tnum" style={{ fontSize: 22, color: 'var(--accent)' }}>{fmtInr(calc.fiveYrSavings)}</div>
            </div>
            <div>
              <div className="meta">Payback class</div>
              <div className="serif tnum" style={{ fontSize: 22 }}>{calc.payback < 12 ? 'MSME-grade ✓' : calc.payback < 18 ? 'Tier-1 ✓' : 'Hard sell'}</div>
            </div>
          </div>
          <hr className="hr-dash" style={{ margin: '20px 0' }}/>
          <div style={{ fontSize: 12, color: 'var(--ink-low)' }}>
            Assumes single-cobot replacing N×8-hour shifts at fully-loaded wage (incl. benefits, supervision, recruiting).
            Excludes: programming time, EOAT changeovers, downtime &gt; SLA. A RaaS pricing model converts the capex
            into ₹50–80k/month, which collapses the buyer's decision from CFO sign-off to plant-manager discretion.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION 11 — PEOPLE & LABS
   ============================================================ */
const PEOPLE = [
  { name: 'Sergey Levine', role: 'Co-founder', org: 'Physical Intelligence', loc: 'Berkeley',     focus: 'Foundation models for control' },
  { name: 'Chelsea Finn',  role: 'Co-founder', org: 'Physical Intelligence', loc: 'Stanford',     focus: 'Meta-learning, robot generalization' },
  { name: 'Pieter Abbeel', role: 'Co-founder', org: 'Covariant',             loc: 'Berkeley',     focus: 'Industrial picking, RFM-1' },
  { name: 'Brett Adcock',  role: 'CEO',        org: 'Figure',                loc: 'Sunnyvale',    focus: 'Humanoid go-to-market' },
  { name: 'Marc Raibert',  role: 'Founder',    org: 'BD AI Institute',       loc: 'Cambridge',    focus: 'Locomotion, dynamic robots' },
  { name: 'Wang Xingxing', role: 'CEO',        org: 'Unitree',               loc: 'Hangzhou',     focus: 'Cheap, capable hardware' },
  // India operators
  { name: 'Saurabh Chandra', role: 'CEO',      org: 'Ati Motors',            loc: 'Bangalore',    focus: 'AMRs sold globally from India' },
  { name: 'Nikhil Ramaswamy', role: 'Co-founder', org: 'CynLr',              loc: 'Bangalore',    focus: 'Visual object intelligence' },
  { name: 'Gokul NA',      role: 'Co-founder', org: 'CynLr',                 loc: 'Bangalore',    focus: 'Vision-guided manipulation' },
  { name: 'Samay Kohli',   role: 'CEO',        org: 'GreyOrange',            loc: 'Singapore/IN', focus: 'Warehouse AMRs, global ops' },
  { name: 'Sangeet Kumar', role: 'CEO',        org: 'Addverb',               loc: 'Noida',        focus: 'Full-stack warehouse automation' },
  { name: 'Jaisimha Rao',  role: 'CEO',        org: 'Niqo Robotics',         loc: 'Bangalore',    focus: 'Precision agri spraying' },
  { name: 'Bharadwaj Amrutur', role: 'Research Head', org: 'ARTPARK @ IISc', loc: 'Bangalore',    focus: 'India robotics ecosystem' },
  { name: 'Karol Hausman', role: 'Co-founder', org: 'Physical Intelligence', loc: 'San Francisco', focus: 'Real-world RL' }
];

const LABS = [
  { name: 'ARTPARK @ IISc', city: 'Bangalore', country: 'IN' },
  { name: 'IIT Madras CFR', city: 'Chennai', country: 'IN' },
  { name: 'IIT Bombay (CSE Robotics)', city: 'Mumbai', country: 'IN' },
  { name: 'IIIT Hyderabad (RRC)', city: 'Hyderabad', country: 'IN' },
  { name: 'MIT CSAIL', city: 'Cambridge', country: 'US' },
  { name: 'Stanford SAIL', city: 'Stanford', country: 'US' },
  { name: 'CMU RI', city: 'Pittsburgh', country: 'US' },
  { name: 'UC Berkeley BAIR', city: 'Berkeley', country: 'US' },
  { name: 'ETH Zurich RSL', city: 'Zurich', country: 'CH' }
];

function S11_People({ motion }) {
  const [q, setQ] = useS2(0);
  const quotes = [
    { t: 'The whole field changed the day diffusion policies started working on dexterous manipulation. We had 20 years of "robot learning is two years out."', a: 'Karol Hausman · Physical Intelligence' },
    { t: 'Humanoids are not interesting. Bipedal locomotion in unstructured environments is interesting. The form is just the consequence.', a: 'Marc Raibert · BD AI Institute' },
    { t: 'We were $400 in actuator BOM in 2017. We are $40 today. Everything downstream of that change is a different business.', a: 'Wang Xingxing · Unitree' },
    { t: 'India is where Korea was in 1985 — the labor cost arbitrage is gone, the customer base is real, the talent has come back. Robotics has 10 quiet years here.', a: 'Founder, Bangalore (off the record)' }
  ];
  useE2(() => {
    if (motion <= 0) return;
    const id = setInterval(() => setQ(x => (x + 1) % quotes.length), 6500);
    return () => clearInterval(id);
  }, [motion, quotes.length]);

  return (
    <section id="people" data-section="11" data-screen-label="11 People" className="section-pad">
      <div className="page">
        <SectionTag n="11" title="People & labs — the network you should be reading" source="ArXiv author counts, lab pages, Twitter follow graph"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 8' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              Pick people, not categories. Robotics is a small enough field that <em>~120 names</em> author or fund 80% of what matters — and in India, more like <em style={{ color: 'var(--accent)' }}>30</em>.
            </h2>
          </Reveal>
        </div>

        <div style={{ height: 40 }}></div>

        {/* Quote carousel */}
        <Reveal>
          <div className="panel" style={{ background: 'var(--ink)', color: 'var(--bg)', position: 'relative', minHeight: 220 }}>
            <Kicker>From the field</Kicker>
            <div style={{ position: 'relative', marginTop: 18, minHeight: 130 }}>
              {quotes.map((qq, i) => (
                <div key={i} style={{
                  position: 'absolute', inset: 0,
                  opacity: i === q ? 1 : 0,
                  transform: i === q ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity .6s, transform .6s'
                }}>
                  <div className="serif" style={{ fontSize: 32, lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--bg)', maxWidth: 1000 }}>
                    “{qq.t}”
                  </div>
                  <div className="meta" style={{ marginTop: 18, color: 'var(--accent)' }}>— {qq.a}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 24 }}>
              {quotes.map((_, i) => (
                <button key={i} onClick={() => setQ(i)} style={{
                  all: 'unset', width: 26, height: 2,
                  background: i === q ? 'var(--accent)' : 'rgba(255,255,255,0.25)',
                  cursor: 'pointer', transition: 'background .2s'
                }}/>
              ))}
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 8' }}>
            <div className="panel flush">
              <div className="panel-hd"><span className="ttl">Twelve people to follow</span><span>my curated short list</span></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {PEOPLE.map((p, i) => (
                  <div key={p.name} style={{ padding: '16px 20px', borderTop: '1px solid var(--rule)', borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span className="h4">{p.name}</span>
                      <span className="meta">{p.loc}</span>
                    </div>
                    <div className="meta" style={{ marginTop: 4 }}>{p.role} · <span style={{ color: 'var(--accent)' }}>{p.org}</span></div>
                    <div style={{ marginTop: 8, fontSize: 13, color: 'var(--ink-mid)' }}>{p.focus}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} style={{ gridColumn: '9 / span 4' }}>
            <div className="panel" style={{ height: '100%' }}>
              <Kicker>Labs that ship</Kicker>
              <h3 className="h4" style={{ margin: '12px 0 16px' }}>Nine labs to read first.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {LABS.map((l, i) => (
                  <div key={l.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: i < LABS.length-1 ? '1px dashed var(--rule)' : 'none', paddingBottom: 8 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{l.name}</div>
                      <div className="meta" style={{ marginTop: 2 }}>{l.city}, {l.country}</div>
                    </div>
                    <span className="meta" style={{ color: 'var(--accent)' }}>0{i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 12 — RISKS & OPEN QUESTIONS
   ============================================================ */
const RISKS = [
  { k: 'Generalization wall', q: 'Will VLAs generalize to novel objects + environments?', kind: 'Capability', sev: 4, take: 'Probably yes, slower than the demos suggest. Most published demos are still in-distribution. Tele-op data scaling helps but plateaus.' },
  { k: 'Component imports',   q: 'Can we build an Indian robot without Chinese parts?',  kind: 'India · Supply', sev: 4, take: '~60% of robot BOM (motors, reducers, sensors, controllers) is still imported, mostly from China + Japan. PLI for components is starting but 3–5 yrs from filling the gap. Mitigation: design around accessible parts; build component supply as separate revenue line.' },
  { k: 'MSME price-shopping', q: 'Will Indian SMEs actually pay our ask?',                kind: 'India · GTM',     sev: 3, take: 'MSMEs price-shop aggressively. Tier-1 OEMs do not. Phase-1 GTM is Tier-1 anchor accounts only; MSMEs become a Phase-2 channel via RaaS pricing that turns capex into ₹50–80k/month.' },
  { k: 'Unit economics',      q: 'Does a $30k humanoid replace a $40k/yr worker?',         kind: 'Business',   sev: 3, take: 'On paper yes; in practice, downtime, integration, and supervision drag effective hours per shift. Honest payback today: 2.5–4 yrs for humanoids; 12–18 months for cobot/AMR (which is the bet).' },
  { k: 'AI hype cycle',       q: '"The AI wave will fade in 2 years"',                    kind: 'Macro · Timing',  sev: 2, take: 'The bet is not AI. The bet is industrial robotics, which has compounded 11% CAGR for 20 years through every AI cycle. FANUC, ABB, Yaskawa, KUKA all built billion-$ businesses before VLAs existed. AI is the multiplier, not the trigger.' },
  { k: 'China decoupling',    q: 'What happens to BOM if US-China supply chain hardens?',  kind: 'Geopolitics',sev: 4, take: 'Cycloidal reducer + harmonic drive supply is heavily Chinese. A 12-month decoupling shock would 2–3× hardware cost in West. For India this is actually a tailwind — buyers prefer non-China supply.' },
  { k: 'Labor backlash',      q: 'Political risk of visible displacement?',                 kind: 'Social',     sev: 2, take: 'Lower than feared so far. Manufacturing automation co-exists with the reshoring + Make-in-India narrative; pollsters have not seen a robotics-specific backlash.' },
  { k: 'Safety incidents',    q: 'How close to a high-profile humanoid injury?',          kind: 'Operational',sev: 3, take: 'A serious incident is more "when" than "if". Field has 18–24 months before regulatory acceleration becomes likely. Industrial cobots (force-limited) are inside ISO 10218 already — well-litigated and safe.' }
];

function S12_Risks({ motion }) {
  return (
    <section id="risks" data-section="12" data-screen-label="12 Risks" className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="page">
        <SectionTag n="12" title="Risks & open questions — what would make me wrong" source="own framework"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              The strongest thesis is the one you can argue against. Here are the six arguments I take seriously.
            </h2>
          </Reveal>
        </div>

        <div style={{ height: 40 }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {RISKS.map((r, i) => (
            <Reveal key={r.k} delay={i * 80}>
              <div className="panel" style={{ height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                  <div>
                    <Kicker>{r.kind}</Kicker>
                    <h3 className="h3" style={{ margin: '8px 0 4px' }}>{r.k}</h3>
                  </div>
                  <SeverityBars sev={r.sev}/>
                </div>
                <div className="serif" style={{ fontSize: 19, color: 'var(--ink)', marginBottom: 14, fontStyle: 'italic' }}>
                  Q: {r.q}
                </div>
                <div style={{ paddingTop: 12, borderTop: '1px dashed var(--rule)', color: 'var(--ink-mid)' }}>
                  <span className="meta" style={{ color: 'var(--accent)' }}>My read: </span>
                  {r.take}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ height: 56 }}></div>

        {/* The Aayush objection answered head-on */}
        <Reveal>
          <div className="panel" style={{ borderLeft: '3px solid var(--accent)' }}>
            <Kicker>The objection that triggered this document</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 14px' }}>
              "AI lasts 2 years. Build distribution. Don't build product."
            </h3>
            <p style={{ color: 'var(--ink-mid)', fontSize: 14.5, lineHeight: 1.55, maxWidth: 920, marginBottom: 18 }}>
              This is the objection — and the right answer is to agree with the spirit and disagree with
              the conclusion. Distribution is the moat. In consumer apps, distribution is paid acquisition
              and retail shelf. In robotics, <em style={{ color: 'var(--accent)' }}>distribution is the deployment itself</em>:
              the moment a Locus AMR is wired into a WMS, the moment an Ati Sherpa is on a paint-shop
              floor, the moment a Niqo sprayer is in a contractor's field — that is not "product". That
              is a permanent operational dependency. Three pieces of evidence:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {[
                {
                  c: 'Locus Robotics',
                  why: '350+ sites, 5B+ picks. RaaS-priced. Once integrated into WMS, switching means weeks of downtime + retraining 200+ pickers. The customers don\'t leave.'
                },
                {
                  c: 'Symbotic',
                  why: 'Walmart anchor → $22.7B backlog. ASRS is poured into the slab of the building. The contract is 10–15 yr. Distribution = concrete.'
                },
                {
                  c: 'FANUC / ABB / Yaskawa',
                  why: '40+ year compounders. Survived three AI winters, two recessions, dot-com bust, COVID. Industrial robotics CAGR did not blink. The "AI wave" is a multiplier on the curve, not the curve.'
                }
              ].map((b, i) => (
                <div key={i} style={{ padding: 14, border: '1px solid var(--rule)' }}>
                  <div className="h4" style={{ marginBottom: 8, color: 'var(--accent)' }}>{b.c}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.55 }}>{b.why}</div>
                </div>
              ))}
            </div>
            <hr className="hr-dash" style={{ margin: '20px 0 14px' }}/>
            <div style={{ fontSize: 13.5, color: 'var(--ink-mid)', lineHeight: 1.55 }}>
              The thing this document is arguing: the 2-year AI hype window is the wrong frame for an
              industrial-robotics decision because industrial robotics outlives any single AI cycle.
              The right frame is the next ten years of Indian manufacturing automation. On that frame,
              the bet is not noisy. It is overdue.
            </div>
          </div>
        </Reveal>

        <div style={{ height: 56 }}></div>

        <Reveal>
          <div className="panel">
            <div className="col-2">
              <div>
                <Kicker>Watch this</Kicker>
                <h3 className="h3" style={{ margin: '12px 0 14px' }}>Three signals that would change my mind.</h3>
                <ol style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                  {[
                    'A humanoid shipping 1,000+ paid units to one customer with disclosed uptime.',
                    'A robotics foundation model that crosses generalization thresholds on real, novel hardware — not sim.',
                    'A high-profile fatal incident that triggers EU/US regulatory acceleration.'
                  ].map((s, i) => (
                    <li key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 14, padding: '12px 0', borderBottom: i < 2 ? '1px dashed var(--rule)' : 'none' }}>
                      <span className="serif" style={{ fontSize: 32, color: 'var(--accent)', lineHeight: 1 }}>0{i+1}</span>
                      <span style={{ color: 'var(--ink-mid)', fontSize: 14, lineHeight: 1.5, paddingTop: 8 }}>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <Kicker>Source check</Kicker>
                <h3 className="h3" style={{ margin: '12px 0 14px' }}>Things I might be wrong about — flag if you know better.</h3>
                <ul style={{ paddingLeft: 16, color: 'var(--ink-mid)', fontSize: 14, lineHeight: 1.6 }}>
                  <li>Humanoid pre-orders likely include MOUs; conversion rate unknown.</li>
                  <li>India robotics startup count is from Tracxn + my own scrape — undercounts undisclosed seed.</li>
                  <li>Component cost reductions are median across SKUs; tail SKUs (custom) didn't drop nearly as much.</li>
                  <li>VLA "success rates" are not directly comparable across papers — benchmarks differ.</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SeverityBars({ sev }) {
  return (
    <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end' }}>
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{
          width: 6, height: 4 + i * 3,
          background: i <= sev ? 'var(--accent)' : 'var(--rule)'
        }}/>
      ))}
      <span className="meta" style={{ marginLeft: 6 }}>{sev}/5</span>
    </div>
  );
}

/* ============================================================
   SECTION 13 — CLOSING / WHERE I'M PLACING MY BET
   ============================================================ */
function S13_Bet({ motion }) {
  return (
    <section id="bet" data-section="13" data-screen-label="13 The Bet" style={{ background: 'var(--ink)', color: 'var(--bg)', position: 'relative', padding: '140px 0 100px' }}>
      <div className="page">
        <Reveal style={{ marginBottom: 36 }}>
          <span className="kicker">§ 13 — The bet</span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="h-hero" style={{ color: 'var(--bg)', marginBottom: 40, maxWidth: 1100 }}>
            The robot is <em style={{ color: 'var(--accent)' }}>not</em> the product.
          </h2>
        </Reveal>

        <div className="col-12">
          <Reveal delay={300} style={{ gridColumn: '1 / span 8' }}>
            <p className="lead" style={{ color: 'var(--ink-fade)', fontSize: 22, lineHeight: 1.5, marginBottom: 24 }}>
              Robotics is a vertical-AI business with a hardware delivery vehicle. The companies that compound
              will own data, behavior, distribution, and operations — not chassis. Hardware will decommodify in
              the form factors that win and commoditize in the ones that don't. In India, the unmet need is so
              acute that you do not need to win on technology; you need to win on <em style={{ color: 'var(--accent)' }}>service, integration, and
              uptime</em>. Those three are unsexy. They are also the moat.
            </p>
            <p className="lead" style={{ color: 'var(--ink-fade)', fontSize: 22, lineHeight: 1.5 }}>
              The bet, weighted by my conviction, in three parts.
            </p>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <div className="col-3" style={{ gap: 24 }}>
          {[
            {
              n: 'A',
              pct: '60%',
              title: 'Bangalore industrial cobot/AMR · software-led integrator · RaaS-first',
              body: 'A Bangalore-based shop that sources cobots + AMRs from best-in-class OEMs (UR, Doosan, Geek+, Mobile Industrial Robots), wraps them in a software-led integration stack (vision, fleet, WMS adapters), and sells the entire deployment as RaaS to PLI-cohort manufacturers. Anchor: 2–3 Tier-1 paid pilots in 12 months. Capital-light. Customer-rich. ROI inside 18 months. Walks into Aayush\'s preferred shape — distribution = deployment, service = moat, and the buyer is the largest factories in the country.',
              proof: ['Ati Motors playbook validated', 'PLI buyers active', 'Cobot landed-cost path $28k → $18k by 2028']
            },
            {
              n: 'B',
              pct: '30%',
              title: 'Vertical robotics · pick one sticky workflow',
              body: 'Pick exactly one physical workflow and own its data flywheel. Three candidates: (1) Pharma sterile-line filling — regulated, sticky, high-margin (Sun, Dr Reddy\'s). (2) Electronics assembly inspection — PCB defect detection for PLI-fabs (CynLr-adjacent). (3) Agri precision spraying — RaaS-per-acre for contract sprayers (Niqo-adjacent, but expanded across crops). Narrower than A, deeper moat, longer build. If A is the wedge, B is the long compounder.',
              proof: ['CynLr and Niqo both proved the model', 'Pharma reimbursement clean', 'Agri PLI is real']
            },
            {
              n: 'C',
              pct: '10%',
              title: 'Pick-and-shovel · Indian-made components + ROS2 tooling',
              body: 'Cycloidal reducers, force-torque sensors, tactile skins, smart actuators, ROS2 middleware adapters. Boring, durable, sells into the other two. PLI explicitly subsidises this category (electronics components). Lowest revenue ceiling of the three; highest capital efficiency. Best as a side-stream off A.',
              proof: ['Component PLI active', '60% of robot BOM is imported today', 'Founder + 4 engineers can ship']
            }
          ].map((b, i) => (
            <Reveal key={b.n} delay={400 + i * 120}>
              <div style={{ padding: 32, border: '1px solid var(--rule)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="serif" style={{ fontSize: 64, lineHeight: 1, color: 'var(--accent)' }}>{b.n}</span>
                  <span className="meta" style={{ color: 'var(--accent)' }}>{b.pct} of conviction</span>
                </div>
                <h3 className="h3" style={{ color: 'var(--bg)', margin: '24px 0 14px', fontSize: 22 }}>{b.title}</h3>
                <p style={{ color: 'var(--ink-fade)', fontSize: 13.5, lineHeight: 1.6, marginBottom: 18 }}>{b.body}</p>
                <div style={{ marginTop: 'auto', borderTop: '1px dashed var(--ink-fade)', paddingTop: 12 }}>
                  <div className="meta" style={{ marginBottom: 6 }}>Evidence</div>
                  {b.proof.map((p, j) => (
                    <div key={j} style={{ fontSize: 11.5, color: 'var(--accent)', fontFamily: 'var(--f-mono)' }}>· {p}</div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ height: 80 }}></div>

        {/* 12-month plan */}
        <Reveal delay={600}>
          <div style={{ padding: 36, border: '1px solid var(--ink-fade)' }}>
            <div className="kicker" style={{ color: 'var(--accent)' }}>How I start tomorrow · 12-month plan</div>
            <h3 className="h3" style={{ color: 'var(--bg)', margin: '14px 0 22px', fontSize: 26 }}>Not slides. A bench, a calendar, and a list of customers.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {[
                { m: 'M 1–2', t: 'Get tactile', b: 'Build an SO-100 6-DOF arm (~$200, LeRobot). Run SmolVLA / π0 weights. Sixty hours of debugging a real robot. This is not theatre — it changes how you talk about the field.' },
                { m: 'M 2–3', t: 'Immerse in industry', b: 'Walk Peenya + Bommasandra. Twenty MSME factory visits. Tour Tata Electronics Hosur. Attend IMTEX Bangalore. The point is to find the right problem, not pitch the wrong one.' },
                { m: 'M 3–4', t: 'Build the network', b: 'ARTPARK partner program kickoff. Twenty coffees with Indian robotics founders + 5 with global ones. Get on the Indian operators WhatsApp circle (it exists).' },
                { m: 'M 4–6', t: 'Pick ONE vertical', b: 'Pick the wedge — most likely auto-tier-1 cobot integration. Build a working pilot using off-the-shelf cobot + custom software. Show, don\'t tell.' },
                { m: 'M 6–9', t: 'Pilot conversations', b: 'Convert 3 factory tours into 3 paid pilot conversations. ₹5–10 L pilot fee covers cost. Target: 1 LOI by month 9. Tier-1 OEMs only — no MSMEs in Phase 1.' },
                { m: 'M 9–12', t: 'Walk in strong', b: 'Working prototype + vertical thesis + 1 signed pilot + 2 LOIs. That is what gets us to seed, and that is what Aayush should write a cheque against — not slides.' }
              ].map((p, i) => (
                <div key={i} style={{ padding: 18, background: 'var(--bg-deep)', border: '1px solid var(--ink-fade)' }}>
                  <div className="meta" style={{ color: 'var(--accent)' }}>{p.m}</div>
                  <div className="serif" style={{ fontSize: 20, color: 'var(--bg)', margin: '8px 0 10px' }}>{p.t}</div>
                  <div style={{ color: 'var(--ink-fade)', fontSize: 13, lineHeight: 1.55 }}>{p.b}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div style={{ height: 64 }}></div>

        {/* Direct closing to Aayush */}
        <Reveal delay={800}>
          <div style={{ padding: 40, borderTop: '1px solid var(--accent)', borderBottom: '1px solid var(--accent)' }}>
            <div className="kicker" style={{ color: 'var(--accent)' }}>For Aayush</div>
            <p className="serif" style={{ fontSize: 30, color: 'var(--bg)', lineHeight: 1.3, letterSpacing: '-0.015em', marginTop: 18, maxWidth: 1000 }}>
              You are right that the product is not the moat. You are right that distribution is the moat.
              Where I think we disagree is on what distribution looks like in robotics. In an app, it is
              ads + retail. In a factory, it is the cobot already wired into the line — and that wiring
              is service, integration, and uptime, three things <em style={{ color: 'var(--accent)' }}>India has zero local champion for
              today</em>. That is the gap I want to spend the next ten years closing. Not as a consumer
              brand. Not as humanoids. As the boring, profitable infrastructure underneath India's
              manufacturing decade. Read this. Argue with it. Then let's go to ARTPARK.
            </p>
            <div className="meta" style={{ marginTop: 28, color: 'var(--ink-fade)' }}>— Abhay</div>
          </div>
        </Reveal>

        <div style={{ height: 60 }}></div>

        <Reveal delay={1000}>
          <div style={{ borderTop: '1px solid var(--ink-fade)', borderBottom: '1px solid var(--ink-fade)', padding: '40px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
            <div>
              <div className="kicker">Working draft</div>
              <div className="serif" style={{ fontSize: 32, color: 'var(--bg)', lineHeight: 1.2, marginTop: 12 }}>
                This document will be wrong in interesting ways within 90 days. That is the point.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--ink-fade)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Version</span><span style={{ color: 'var(--bg)' }}>v0.5 · 2026-05-17</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Sources</span><span style={{ color: 'var(--bg)' }}>IFR, Inc42, Tracxn, Tofler MCA, PrivateCircle, company filings</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Embeds live</span><span style={{ color: 'var(--bg)' }}>60+ YouTube</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Update cadence</span><span style={{ color: 'var(--bg)' }}>monthly</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Argue with me</span><span style={{ color: 'var(--accent)' }}>ubhayvatsaanand@gmail.com</span></div>
            </div>
          </div>
        </Reveal>

        <div style={{ height: 60 }}></div>

        <Reveal delay={1200}>
          <div style={{ textAlign: 'center', color: 'var(--ink-fade)' }}>
            <div className="serif" style={{ fontSize: 48, color: 'var(--accent)', fontStyle: 'italic', marginBottom: 14 }}>—Fin—</div>
            <div className="meta">Next chapter: 30 days of factory visits, written up. Drops Q3 2026.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, {
  S07_Incumbents, S08_GlobalMap, S09_India, S10_DataAnalysis, S11_People, S12_Risks, S13_Bet
});
