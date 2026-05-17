// sections-2.jsx - sections 07-13 (Incumbents, Global startup map, India, Data analysis, People, Risks, Closing)

const { useState: useS2, useEffect: useE2, useRef: useR2, useMemo: useM2 } = React;

/* ============================================================
   SECTION 07 - BIG INCUMBENTS
   ============================================================ */
const INCUMBENTS = [
  { co: 'Tesla',     country: 'US', focus: 'Humanoid + auto', bet: 'Vertically integrate the whole stack and use Optimus as labor for its own factories first.', spend: '$6B+', stage: 'Internal pilot', moat: 'Manufacturing scale, data, capital' },
  { co: 'NVIDIA',    country: 'US', focus: 'Compute + sim',   bet: 'Pick-and-shovel: GR00T foundation model, Isaac Sim, Jetson Thor - be the OS layer.', spend: '$2B+', stage: 'Platform', moat: 'CUDA, partnerships, sim' },
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
        <SectionTag n="07" title="Big incumbents - who has the unfair advantage" source="10-K filings, earnings calls, press releases · 2024-25"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 8' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              Robotics is the rare frontier where the largest companies on Earth are also the most credible builders.
            </h2>
            <p className="lead">
              Unlike AI - where startups still have model leverage - robotics rewards manufacturing scale, supply-chain
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

        {/* Indian buyers panel - distinct from competitors */}
        <Reveal>
          <div className="panel">
            <Kicker>India · the other side of the table</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 16px' }}>
              Twelve names above are competitors. <em style={{ color: 'var(--accent)' }}>These ten names are the customer.</em>
            </h3>
            <p style={{ color: 'var(--ink-mid)', marginBottom: 18, maxWidth: 820 }}>
              The single biggest framing mistake when looking at India robotics is treating it as a market we
              ship to. It is a market we sell to. The list below is the relevant Indian buyer universe - the
              folks signing actual POs for cobots, AMRs, and integration work today. Their procurement
              cycles are 6-18 months, their LOI-to-revenue conversion is high, and their willingness to
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
              Source: PLI awardee lists (MeitY, MoCAI), company annual reports 2024-25, NASSCOM mfg survey.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 08 - GLOBAL STARTUP MAP (filterable table + world dot map)
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
  // IN - verified financials from PrivateCircle FY24, Tracxn, Inc42, Tofler MCA filings
  { name: 'Addverb',       city: 'Noida',         country: 'IN', cat: 'AMR + ASRS',   stage: 'Reliance', raised: 132,  founded: 2016 },
  { name: 'GreyOrange',    city: 'Gurugram',      country: 'IN', cat: 'AMR',          stage: 'Series D', raised: 315,  founded: 2011 },
  { name: 'Ati Motors',    city: 'Bangalore',     country: 'IN', cat: 'AMR',          stage: 'Series B', raised: 37,   founded: 2017 },
  { name: 'Unbox Robotics',city: 'Pune',          country: 'IN', cat: 'Sortation',    stage: 'Series B', raised: 28,   founded: 2019 },
  { name: 'CynLr',         city: 'Bangalore',     country: 'IN', cat: 'Vision',       stage: 'Series A', raised: 15,   founded: 2019 },
  { name: 'ideaForge',     city: 'Mumbai',        country: 'IN', cat: 'Drone (def)',  stage: 'Public',   raised: 0,    founded: 2007 },
  { name: 'Tonbo Imaging', city: 'Bangalore',     country: 'IN', cat: 'Defense',      stage: 'Series D', raised: 44,   founded: 2012 },
  { name: 'SS Innovations',city: 'Gurugram',      country: 'IN', cat: 'Surgical',     stage: 'NASDAQ',   raised: 0,    founded: 2019 },
  { name: 'Niqo Robotics', city: 'Bangalore',     country: 'IN', cat: 'AgriBot',      stage: 'Series B', raised: 22,   founded: 2015 },
  { name: 'NewSpace',      city: 'Bangalore',     country: 'IN', cat: 'Drone (def)',  stage: 'Bridge',   raised: 52,   founded: 2017 },
  { name: 'Garuda Aero',   city: 'Chennai',       country: 'IN', cat: 'Drone',        stage: 'Series B', raised: 50,   founded: 2015 },
  { name: 'Detect Tech',   city: 'Chennai',       country: 'IN', cat: 'Industrial AI',stage: 'Series B', raised: 46,   founded: 2016 },
  { name: 'Asteria Aero',  city: 'Bangalore',     country: 'IN', cat: 'Drone',        stage: 'Reliance', raised: 30,   founded: 2011 },
  { name: 'Miko',          city: 'Mumbai',        country: 'IN', cat: 'Companion',    stage: 'Series D', raised: 102,  founded: 2015 },
  { name: 'Orangewood',    city: 'Gurugram',      country: 'IN', cat: 'Cobot',        stage: 'YC seed',  raised: 10,   founded: 2018 },
  { name: 'Genrobotics',   city: 'Trivandrum',    country: 'IN', cat: 'Sanitation',   stage: 'Series A', raised: 6,    founded: 2017 },
  { name: 'Mukunda Foods', city: 'Bangalore',     country: 'IN', cat: 'Kitchen',      stage: 'Zomato A', raised: 8,    founded: 2009 },
  { name: 'Peppermint',    city: 'Pune',          country: 'IN', cat: 'Cleaning',     stage: 'Series A', raised: 6,    founded: 2019 },
  { name: 'Perceptyne',    city: 'Hyderabad',     country: 'IN', cat: 'Vision',       stage: 'Seed',     raised: 4,    founded: 2021 },
  { name: 'TSAW Drones',   city: 'Noida',         country: 'IN', cat: 'Drone',        stage: 'Bridge',   raised: 5,    founded: 2019 },
  { name: 'Botsync',       city: 'Bangalore',     country: 'IN', cat: 'AMR',          stage: 'Series A', raised: 5,    founded: 2017 },
  { name: 'Janyu Tech',    city: 'Coimbatore',    country: 'IN', cat: 'Defense',      stage: 'Series A', raised: 1,    founded: 2016 },
  { name: 'Aegeus Tech',   city: 'Bangalore',     country: 'IN', cat: 'Solar clean',  stage: 'Debt',     raised: 1,    founded: 2017 },
  { name: 'Flo Mobility',  city: 'Bangalore',     country: 'IN', cat: 'Construction', stage: 'Pre-A',    raised: 3,    founded: 2021 },
  { name: 'Pace Robotics', city: 'Bangalore',     country: 'IN', cat: 'Construction', stage: 'Pidilite', raised: 1,    founded: 2020 },
  { name: 'Vividobots',    city: 'Chennai',       country: 'IN', cat: 'Facade clean', stage: 'Seed',     raised: 1,    founded: 2021 },
  { name: 'ParcRobotics',  city: 'Pune',          country: 'IN', cat: 'Welding',      stage: 'Boot',     raised: 0,    founded: 2018 },
  { name: 'Solinas',       city: 'Chennai',       country: 'IN', cat: 'Sanitation',   stage: 'Seed',     raised: 2,    founded: 2018 },
  { name: 'Yulu',          city: 'Bangalore',     country: 'IN', cat: 'Mobility',     stage: 'Series C', raised: 85,   founded: 2017 },
  { name: 'Systemantics',  city: 'Bangalore',     country: 'IN', cat: 'Cobot',        stage: 'Growth',   raised: 8,    founded: 2014 },
  { name: 'Svaya Robotics',city: 'Hyderabad',     country: 'IN', cat: 'Cobot',        stage: 'Boot',     raised: 0,    founded: 2018 },
  { name: 'Sastra Robotics',city:'Kochi',         country: 'IN', cat: 'Test auto',    stage: 'Grants',   raised: 1,    founded: 2013 },
  { name: 'Sirena Tech',   city: 'Bangalore',     country: 'IN', cat: 'Education',    stage: 'Seed',     raised: 3,    founded: 2014 },
  { name: 'Asimov Robotics',city:'Kochi',         country: 'IN', cat: 'Service',      stage: 'Zoho acq', raised: 2,    founded: 2012 },
  { name: 'Aerobotics7',   city: 'Ahmedabad',     country: 'IN', cat: 'Drone (def)',  stage: 'Seed',     raised: 1,    founded: 2016 },
  { name: 'Airtouch Solar',city: 'Pune',          country: 'IN', cat: 'Solar clean',  stage: 'Revenue',  raised: 0,    founded: 2020 },
  { name: 'Skilancer Solar',city:'Gurgaon',       country: 'IN', cat: 'Solar clean',  stage: 'Series A', raised: 4,    founded: 2018 }
];

// Approx coordinates (lat, lng) for major hubs - used by world map dot viz
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
  'Delhi': [28.61, 77.20], 'Gurugram': [28.46, 77.03],
  'Noida': [28.53, 77.39], 'Pune': [18.52, 73.85], 'Mumbai': [19.07, 72.87],
  'Chennai': [13.08, 80.27], 'Hyderabad': [17.38, 78.49], 'Trivandrum': [8.52, 76.94],
  'Kochi': [9.93, 76.27], 'Coimbatore': [11.01, 76.96], 'Ahmedabad': [23.02, 72.57],
  'Gurgaon': [28.46, 77.03]
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
        <SectionTag n="08" title="Global startup map - 412 disclosed rounds, sampled" source="Crunchbase + Tracxn + PitchBook composite"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              The map has three obvious clusters. The fourth - India - is the one nobody priced in.
            </h2>
            <p className="lead">
              US Bay Area dominates foundation models and humanoids; Boston dominates research-spinout hardware;
              Germany owns industrial integration; China prints humanoid hardware at EV prices. India is the rising
              cluster - components, vision, AMRs, agri-drones - trading at one-fifth the valuations of comparable
              Bay Area peers. Filter to India in the controls below: 15 companies, $688M of disclosed funding,
              one Reliance-backed strategic and one public listing (ideaForge). That is not nascent. That is mid-game.
            </p>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 8' }}>
            <div className="panel flush">
              <div className="panel-hd"><span className="ttl">Disclosed robotics rounds · by region cluster</span><span>2014-2026</span></div>
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
  // Cluster visualization (replaces the fake-blob world map).
  // Honest ranked bars beat a cartoon Earth.
  const regionForCountry = (c) => {
    if (c === 'US') return 'North America';
    if (c === 'NO' || c === 'DE' || c === 'FR' || c === 'CH' || c === 'GB') return 'Europe';
    if (c === 'CN') return 'China';
    if (c === 'JP' || c === 'KR') return 'Japan / Korea';
    if (c === 'IN') return 'India';
    return 'Other';
  };

  const groups = {};
  startups.forEach(s => {
    const r = regionForCountry(s.country);
    if (!groups[r]) groups[r] = { name: r, count: 0, raised: 0, cities: {} };
    groups[r].count += 1;
    groups[r].raised += s.raised || 0;
    if (!groups[r].cities[s.city]) groups[r].cities[s.city] = 0;
    groups[r].cities[s.city] += 1;
  });

  const ordered = Object.values(groups).sort((a, b) => b.raised - a.raised);
  const maxRaised = Math.max(1, ...ordered.map(g => g.raised));

  return (
    <div className="cluster-map" style={{ padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="meta" style={{ color: 'var(--ink-low)' }}>
        Regional clusters · {startups.length} companies · ${(ordered.reduce((a, g) => a + g.raised, 0) / 1000).toFixed(2)}B raised
      </div>
      {ordered.map((g, i) => {
        const isIndia = g.name === 'India';
        const topCities = Object.entries(g.cities).sort((a, b) => b[1] - a[1]).slice(0, 4);
        const pct = (g.raised / maxRaised) * 100;
        return (
          <div key={g.name} style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: 16, alignItems: 'start' }}>
            <div>
              <div style={{
                fontFamily: 'var(--f-mono)', fontSize: 13,
                color: isIndia ? 'var(--accent)' : 'var(--ink)',
                textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 600
              }}>
                {g.name}{isIndia && <span style={{ marginLeft: 6 }}>★</span>}
              </div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-low)', marginTop: 4 }}>
                {g.count} cos · <span style={{ color: isIndia ? 'var(--accent)' : 'var(--ink-mid)' }}>${(g.raised / 1000).toFixed(2)}B</span>
              </div>
            </div>
            <div>
              <div style={{ position: 'relative', height: 28, background: 'var(--rule)', borderRadius: 3 }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: `${pct}%`,
                  background: isIndia ? 'var(--accent)' : 'var(--ink)',
                  borderRadius: 3,
                  transition: motion > 0 ? 'width 1.2s cubic-bezier(.2,.8,.2,1)' : 'none'
                }}/>
                <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: pct > 30 ? 'var(--bg)' : 'var(--ink-mid)', fontFamily: 'var(--f-mono)', fontSize: 11 }}>
                  ${(g.raised / 1000).toFixed(2)}B
                </div>
              </div>
              <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {topCities.map(([city, n]) => (
                  <span key={city} style={{
                    fontFamily: 'var(--f-mono)', fontSize: 10.5,
                    padding: '3px 8px', border: `1px solid var(--rule)`,
                    color: 'var(--ink-mid)', background: 'var(--paper)',
                    textTransform: 'uppercase', letterSpacing: '.06em'
                  }}>
                    {city} · {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ============================================================
   SECTION 09 - INDIA / BANGALORE
   ============================================================ */
function S09_India({ motion }) {
  const indiaStartups = STARTUPS.filter(s => s.country === 'IN');
  const blr = indiaStartups.filter(s => s.city === 'Bangalore');
  return (
    <section id="india" data-section="09" data-screen-label="09 India" className="section-pad">
      <div className="page">
        <SectionTag n="09" title="India / Bangalore - the asymmetric bet" source="Tracxn IN, MeitY, Inc42, NASSCOM, ARTPARK"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              <em>7 robots</em> per 10,000 workers. India is ranked <em style={{ color: 'var(--accent)' }}>#6 globally in installs</em> and there is still no champion. The thesis writes itself.
            </h2>
            <p className="lead">
              India has the largest manufacturing-age workforce on the planet, the lowest robot density among
              major economies, structural wage inflation in factory labor, a PLI budget the size of a small
              country's GDP, and a returning diaspora of robotics talent from BD, Tesla, Google X, and Skydio.
              The IFR's 2024 report puts India at 9,100 installs (up 7% YoY) - sixth in the world, with auto
              alone driving 45% of demand. The cluster forming in Bangalore is the closest thing to a
              champion this country has had.
            </p>
          </Reveal>
          <Reveal delay={150} style={{ gridColumn: '9 / span 4' }}>
            <div className="stack-m">
              <Kpi label="Robotics startups in India" value={184} motion={motion} sub="up from 36 in 2018 · Inc42"/>
              <Kpi label="Disclosed funding, 2024" value={310} prefix="$" suffix="M" motion={motion} delta={62.1} sub="across 47 rounds"/>
              <Kpi label="Bangalore's share" value={42} suffix="%" motion={motion} sub="of robotics rounds 2022-24"/>
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
                  { n: 'B', t: 'Diaspora talent returned.', b: 'Founders from Google X, Boston Dynamics, Tesla, Skydio have moved to Bangalore in the last 3 years to start hardware-first companies - a reversal of 25 years of flow.' },
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
            title="Watch · the Bangalore cluster founders speak"
            sub="8 videos · founder-led interviews and India-specific deployments (unique to this section)"
            items={[
              { label: 'Young Turks Reloaded × Addverb - Inside India\'s Largest Robotics Factory', source: 'YouTube · CNBC-TV18', url: 'https://www.youtube.com/watch?v=I6_iM1oi-1s', note: 'Studio tour of Bot Valley + Sangeet Kumar on the humanoid bet.' },
              { label: 'Saurabh Chandra - Founder, Ati Motors (full podcast)', source: 'YouTube · Founders Podcast', url: 'https://www.youtube.com/watch?v=ndYik5XgFlM', note: 'Self-driving-car-inspired stack for industrial AMRs.' },
              { label: 'Making Robots Human - Nikhil + Gokul (CynLr) founder talk', source: 'YouTube · Founders Podcast', url: 'https://www.youtube.com/watch?v=VBewEmL3RXU', note: 'The bet on visual intelligence over end-effector fanciness.' },
              { label: 'Niqo Robotics on BBC Click - India-builds-for-world agri robotics', source: 'YouTube · BBC Click', url: 'https://www.youtube.com/watch?v=gk4cIK0BUm8', note: 'BBC feature on AI spot-spray cutting agrochemicals by 70%.' },
              { label: 'Meet Bandicoot - India\'s robot that can end manual scavenging', source: 'YouTube · NDTV', url: 'https://www.youtube.com/watch?v=VChT60sTZSU', note: 'Uniquely Indian social-impact robotics story.' },
              { label: 'India AI Summit - Addverb Trakr indigenous quadruped', source: 'YouTube · CNBC-TV18', url: 'https://www.youtube.com/watch?v=vJBo_jjp5rA', note: 'Indian-built quadruped for hazardous-environment inspection.' },
              { label: 'GreyOrange Butler - Bloomberg factory tour', source: 'YouTube · Bloomberg', url: 'https://www.youtube.com/watch?v=1_Lz2yGQ5ws', note: 'How an Indian-origin founder built a 6,000-unit global AMR business.' },
              { label: 'Talk by Prof Bharadwaj Amrutur on ARTPARK (IISc)', source: 'YouTube · IISc', url: 'https://www.youtube.com/watch?v=QXOXIMgHgZ0', note: 'The genesis story of India\'s flagship robotics CoE.' }
            ]}/>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* Indian case studies - 4 companies, what's working */}
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
                  what: 'Warehouse automation full stack - AMRs, ASRS, sortation, software. Reliance acquired majority stake for ~₹1,000 Cr.',
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

        {/* Probing the buyer - actionable plan */}
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
                  ['PLI awardee lists (MeitY, MoCAI)', 'Public. Every PLI factory needs automation. Filter by greenfield projects 2025-26 - those are the buyers with budget right now.']
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

        {/* ───────── CUSTOMER DISCOVERY FRAMEWORK ───────── */}
        <Reveal>
          <Kicker>Customer discovery · 5-phase framework</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 8px' }}>Before bending any metal - map the floor.</h3>
          <p style={{ color: 'var(--ink-mid)', maxWidth: 900, marginBottom: 12 }}>
            Building hardware in isolation produces engineering marvels with no product-market fit.
            The explicit goal of customer discovery is to map the physical workflows of the factory floor,
            identify where labor is bottlenecked, and quantify the financial cost of that bottleneck.
            A real signal of product-market fit: if the plant manager has already <em>built a hack</em>
            (a custom jig, an Excel script, a temp-worker overflow line) to brute-force around the problem.
            If they complain but haven't built anything to work around it, it's not a tier-1 pain.
          </p>
          <DiscoveryFramework phases={[
            {
              title: 'Current Workflow Mapping',
              goal: 'Deconstruct the exact physical process from initiation to completion',
              questions: [
                'Walk me through the last time you did this specific task on the floor.',
                'What is the very first step?',
                'Where do components usually get stuck or delayed?'
              ]
            },
            {
              title: 'Pain Points & Financial Impact',
              goal: 'Quantify the bottleneck in rupees, hours, or rejection rate',
              questions: [
                'What parts of this process require the most back-and-forth?',
                'What mistakes happen most often?',
                'What is the explicit cost in time, wasted materials, or missed shipments?'
              ]
            },
            {
              title: 'Workarounds & Hacks',
              goal: 'Find the true proof of demand - what they\'ve actually paid for',
              questions: [
                'How are you currently solving this today?',
                'What crude tools, custom jigs, or extra labor have you deployed?',
                'What do you dislike about these temporary solutions?'
              ]
            },
            {
              title: 'Buying Committee Architecture',
              goal: 'Map the internal decision matrix and budget ownership',
              questions: [
                'Who has to approve capital or operational purchases for the factory floor?',
                'Are there procurement protocols or engineering validations required?',
                'What was the last automation purchase greenlit here, and who signed?'
              ]
            },
            {
              title: 'The Magic Wand Scenario',
              goal: 'Uncover the desired outcome with no technological constraint',
              questions: [
                'If you could wave a magic wand and fix one thing tomorrow, what?',
                'What is the worst job on the floor today?',
                'If a robot vendor said yes to one thing, what would you ask?'
              ]
            }
          ]}/>
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* ───────── COLD CALL ARCHITECTURE ───────── */}
        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <Kicker>Cold call · structured talk track</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 8px' }}>The 4-stage call that books a 15-minute factory visit.</h3>
            <p style={{ color: 'var(--ink-mid)', maxWidth: 720, marginBottom: 12 }}>
              Indian plant managers are skeptical of AI buzzwords and cold outreach. Unspecialized agencies
              get ~2% meeting conversion. The objective of the first call is <em>not to sell</em> - it is to
              qualify baseline interest, uncover an active operational pain, and secure a low-friction
              next step (15-min technical call with a solutions engineer, or an on-site visit).
            </p>
            <ColdCallScript stages={[
              {
                name: 'The Hook',
                goal: 'first 5 seconds - earn 30 more',
                script: "Hi [Name], this is from [Company]. I know I'm catching you right in the middle of a shift, so I'll be brief. We currently assist manufacturers similar to [Local Competitor Name] in reducing downtime on their end-of-line packaging operations. May I have thirty seconds of your time?",
                note: 'Lead with peer reference. Local competitor names build instant credibility.'
              },
              {
                name: 'The Value Statement',
                goal: 'pitch the outcome, not the hardware spec',
                script: "We help mid-size fabrication units automate their welding lines. Most of the facility managers we work with are actively trying to maintain consistent bead quality and reduce operator fatigue, without having to expand their physical facility footprint. Is that something that aligns with your current operational priorities?",
                note: 'Never lead with LiDAR range or payload kg. Lead with bead quality, throughput, rejection rate.'
              },
              {
                name: 'The Discovery Question',
                goal: 'open the floor - let them speak',
                script: "How are you currently handling that specific material movement (or welding process, or palletizing, or inspection step) on the floor today?",
                note: 'One open-ended question. Then shut up for 60 seconds.'
              },
              {
                name: 'The CTA',
                goal: 'propose education, not a hard pitch',
                script: "I am absolutely not trying to pitch you right now. I'd love to schedule a brief, fifteen-minute call with our lead automation engineer simply to see if our mobile robots would even be a geographic and spatial fit for your factory floor. What does your calendar look like for Thursday?",
                note: 'Permission-based, low-friction, specific day proposed.'
              }
            ]}/>
          </Reveal>

          <Reveal delay={150} style={{ gridColumn: '8 / span 5' }}>
            <div className="panel" style={{ height: '100%' }}>
              <Kicker>Tactical objection handling</Kicker>
              <h4 className="h4" style={{ margin: '10px 0 14px' }}>What to say when they push back.</h4>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  {
                    o: '"We already have a vendor."',
                    r: '"Most of our partners had systems before they switched to us. Out of curiosity - is there a gap in your current system\'s throughput or maintenance you wish they\'d address?"'
                  },
                  {
                    o: '"I don\'t have time right now."',
                    r: '"No problem. Would it help if I emailed a one-page technical overview and followed up next quarter when things cool down?"'
                  },
                  {
                    o: '"We\'re not interested."',
                    r: '"That\'s alright. Before I let you go - are you planning any CapEx investments in facility upgrades or capacity expansion over the next fiscal year?"'
                  }
                ].map((x, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 12.5, color: 'var(--accent)', fontFamily: 'var(--f-mono)', marginBottom: 6 }}>OBJECTION {String(i+1).padStart(2,'0')}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--ink)', fontStyle: 'italic', marginBottom: 8 }}>{x.o}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.55, borderLeft: '2px solid var(--accent-soft)', paddingLeft: 10 }}>{x.r}</div>
                  </div>
                ))}
              </div>
              <hr className="hr-dash" style={{ margin: '14px 0' }}/>
              <div style={{ fontSize: 12, color: 'var(--ink-low)' }}>
                Cold calls never stand alone. Weave into a multi-channel sequence: LinkedIn to plant managers + procurement leads, email with vertical-specific messaging, and physical mail for high-value targets to bypass inbox fatigue.
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <Reveal>
          <VideoReel
            title="Watch · ARTPARK and the India robotics ecosystem"
            sub="5 videos · government push, ROSCon, ecosystem (no overlap with above reel)"
            items={[
              { label: 'Explained: ARTPARK launches robotics + AI lab at IISc', source: 'YouTube · NewsX', url: 'https://www.youtube.com/watch?v=TYzXNTIms14', note: 'ARTPARK launch coverage at IISc.' },
              { label: 'Bharadwaj Amrutur ROSCon India 2024 keynote', source: 'YouTube · ROSCon India', url: 'https://www.youtube.com/watch?v=tXrCAo12qi4', note: 'Infrastructure-aided autonomy + wireless edge compute for robot fleets in India.' },
              { label: 'Inside IISc\'s ARTPARK - Pioneering Robotics & Autonomous Systems', source: 'YouTube · Global AI Conclave', url: 'https://www.youtube.com/watch?v=0QKGSe2IMCM', note: 'Survey of ARTPARK leadership + portfolio startups.' },
              { label: 'AI and Robotics for Every Indian - Tech for Good', source: 'YouTube · IISc', url: 'https://www.youtube.com/watch?v=PLyz_Ten44U', note: 'IISc and ARTPARK push for socially-relevant robotics.' },
              { label: 'Top 50 Indian Robots 2025 - Addverb, Vyomitra, Svaya, Milagro', source: 'YouTube · Indian Robotics', url: 'https://www.youtube.com/watch?v=Tb1oRRuYr98', note: 'Survey of 50 notable Indian robots beyond the named cluster.' }
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
  // Indian robotics cluster - labeled bars ranked by startup count.
  // Honest data viz beats a fake country outline.
  const total = cities.reduce((a, c) => a + c.n, 0);
  const sorted = [...cities].sort((a, b) => b.n - a.n);
  const max = sorted[0]?.n || 1;
  return (
    <div className="india-cluster" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '4px 0' }}>
      <div className="meta" style={{ marginBottom: 6, color: 'var(--ink-low)' }}>India robotics cluster, by city ({total} tracked)</div>
      {sorted.map((c, i) => {
        const pct = (c.n / max) * 100;
        const isTop = i === 0;
        return (
          <div key={c.name} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 56px', gap: 12, alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 12, color: isTop ? 'var(--accent)' : 'var(--ink)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{c.name}</div>
            <div style={{ position: 'relative', height: 22, background: 'var(--rule)', borderRadius: 3 }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: `${pct}%`,
                background: isTop ? 'var(--accent)' : 'var(--ink)',
                borderRadius: 3,
                transition: motion > 0 ? 'width 1.2s cubic-bezier(.2,.8,.2,1)' : 'none'
              }}></div>
              {isTop && motion > 0 && (
                <div style={{
                  position: 'absolute', left: `${pct}%`, top: -3, bottom: -3,
                  width: 4, background: 'var(--accent)', opacity: 0.4,
                  animation: 'pulse 1.6s ease-in-out infinite'
                }}></div>
              )}
            </div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 14, color: isTop ? 'var(--accent)' : 'var(--ink-mid)', textAlign: 'right', fontWeight: isTop ? 600 : 400 }}>
              {c.n}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 8, padding: '12px 14px', border: '1px solid var(--rule)', borderLeft: '3px solid var(--accent)', background: 'var(--bg-alt)' }}>
        <div className="meta" style={{ color: 'var(--ink-low)', marginBottom: 4 }}>The cluster fact</div>
        <div style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.5 }}>
          Bangalore concentrates <strong style={{ color: 'var(--accent)' }}>{Math.round((sorted[0].n / total) * 100)}%</strong> of India's tracked robotics startups,
          driven by IISc + ARTPARK, returning diaspora, and 3 of the 4 deep-tech VCs on the ground.
          The next 4 cities combined still don't match it.
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION 10 - DATA ANALYSIS / MARKET SIZE CALCULATOR
   ============================================================ */
function S10_DataAnalysis({ motion }) {
  const [tam, setTam] = useS2({ humanoidCagr: 88, indCagr: 11, droneCagr: 22, amrCagr: 19, year: 2030, adoption: 12 });
  const calc = useM2(() => calculateTAM(tam), [tam]);
  return (
    <section id="data" data-section="10" data-screen-label="10 Data" className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="page">
        <SectionTag n="10" title="Data analysis - drawing the curves you can argue against" source="IFR, IDC, Statista, BoA Research, internal model"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <h2 className="h2" style={{ marginBottom: 22 }}>
              The forecasts in pitch decks are mostly cargo cult. Two transparent calculators below - argue with the numbers, not the prose.
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

        {/* ───────── BOM BREAKDOWN AT 10-UNIT SCALE ───────── */}
        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <Kicker>Build cost · 10-unit prototype batch</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 8px' }}>What a small mobile robot actually costs to make in India.</h3>
            <p style={{ color: 'var(--ink-mid)', maxWidth: 700, marginBottom: 12 }}>
              Total cost per unit at N=10 is heavily burdened by lack of economies of scale.
              <code style={{ fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--accent)' }}> C_unit = C_BOM + C_assembly + (C_NRE / N) </code>
              The $950 below excludes NRE (engineering, firmware, mech-design). Hardware is fiercely expensive at low volume - this is why Miko needed to scale past 500K units before unit cost worked out.
            </p>
            <BOMBreakdown
              title="Bill of materials · educational/light-commercial AMR · 10 units"
              unit="$"
              items={[
                { label: 'PCBA & Electronics', cost: 200, color: '#B5471F', note: 'Custom 4-layer board, MCU, motor drivers, SMT labor' },
                { label: 'Sensors & Vision', cost: 150, color: '#C25A2E', note: 'Slamtec RPLIDAR C1 ToF · ~12m range' },
                { label: 'Motors & Drive', cost: 170, color: '#A33D1B', note: '2× 24V 100W BLDC hub motors + 12-bit encoders' },
                { label: 'Power System', cost: 120, color: '#7F4A1F', note: '24V Li-ion + BMS + charger' },
                { label: 'Chassis / Enclosure', cost: 250, color: '#3C5F4A', note: 'SLA 3D printed ABS-like polymer, post-processed' },
                { label: 'Miscellaneous', cost: 60, color: '#5C5C5C', note: 'Fasteners, wiring harnesses, casters, basic LCD' }
              ]}
              total={950}
              footnote="Sources: WintechPCB 2025 assembly cost guide, Slamtec OEM list, AliExpress Brushless DC motor wholesale, ALLPCB. NRE excluded (~$45K-$120K depending on complexity)."
            />
          </Reveal>

          {/* BOM at scale projection */}
          <Reveal delay={150} style={{ gridColumn: '8 / span 5' }}>
            <Kicker>Same BOM · scaled production</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 8px' }}>Where the unit cost actually breaks.</h3>
            <p style={{ color: 'var(--ink-mid)', marginBottom: 12, fontSize: 13.5 }}>
              The crossover where injection molding beats SLA 3D printing is ~5,000 units (tooling: $25-60K). Once you cross that, you're competing on Yangtze River Delta wholesale, not on prototyping rates.
            </p>
            <FinancialsTable
              cols={[
                { label: 'Scale', key: 'n', w: '1fr', numeric: true, bold: true },
                { label: 'PCBA', key: 'pcb', w: '1fr', numeric: true },
                { label: 'LiDAR', key: 'lidar', w: '1fr', numeric: true },
                { label: 'Motors', key: 'mot', w: '1fr', numeric: true },
                { label: 'Chassis', key: 'chs', w: '1fr', numeric: true },
                { label: 'Total', key: 'tot', w: '1fr', numeric: true, accent: true, alwaysAccent: true }
              ]}
              rows={[
                { n: '10 units', pcb: '$200', lidar: '$150', mot: '$170', chs: '$250 SLA', tot: '$950' },
                { n: '100 units', pcb: '$140', lidar: '$130', mot: '$140', chs: '$160 SLA+CNC', tot: '$690' },
                { n: '1,000 units', pcb: '$60', lidar: '$95', mot: '$95', chs: '$95 low-vol mold', tot: '$415' },
                { n: '10,000 units', pcb: '$32', lidar: '$70', mot: '$58', chs: '$45 production mold', tot: '$245' },
                { n: '100,000 units', pcb: '$18', lidar: '$48', mot: '$36', chs: '$22 Yangtze ODM', tot: '$144' }
              ]}
              footnote="Estimates extrapolated from JerryRig + ChargerLAB consumer-vacuum teardowns + Slamtec OEM volume tiers."
            />
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        {/* ───────── COST OF PRODUCTION BY ROBOT CATEGORY ───────── */}
        <Reveal>
          <Kicker>Cost of production · category by category</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 8px' }}>The full pricing menu, in INR, for every relevant robot category.</h3>
          <p style={{ color: 'var(--ink-mid)', maxWidth: 920, marginBottom: 12 }}>
            Verified against distributor pricing (Active Robot, Vec Systems, RobotShop India, 13sqft, IndiaMART) and OEM disclosures, May 2026.
            CapEx is the buyer's all-in cost in India after duties + GST + integration; RaaS converts that to monthly OpEx for 36-60 month contracts.
            BOM costs are at-volume (1K-unit production) estimates.
          </p>
          <FinancialsTable
            cols={[
              { label: 'Category', key: 'cat', w: '1.5fr', bold: true },
              { label: 'India CapEx', key: 'capex', w: '1.2fr', numeric: true, accent: true, alwaysAccent: true },
              { label: 'BOM (1K vol)', key: 'bom', w: '0.9fr', numeric: true },
              { label: 'RaaS/month', key: 'raas', w: '1fr', numeric: true },
              { label: 'Payback', key: 'pay', w: '0.8fr', numeric: true },
              { label: 'Indian builders', key: 'ind', w: '2fr', muted: true }
            ]}
            rows={[
              { cat: 'Cobot arm (UR5e/UR10e class)', capex: '₹18-32 L', bom: '~$22K', raas: '₹45-75K', pay: '14-22 mo', ind: 'Difacto/Systemantics, Addverb Heal, TAL BRABO, UR India' },
              { cat: 'Industrial arm (FANUC LR Mate)', capex: '₹8-18 L', bom: '~$8K', raas: '₹30-55K', pay: '10-18 mo', ind: 'No volume Indian OEM; FANUC/Yaskawa/KUKA/ABB local assembly' },
              { cat: 'AMR standard (Sherpa Tug 1T class)', capex: '₹12-22 L', bom: '~$10K', raas: '₹55-90K', pay: '18-30 mo', ind: 'Addverb Dynamo, GreyOrange, Hi-Tech, Anscer Robotics' },
              { cat: 'AMR heavy-duty (Dynamo 2.5T)', capex: '₹28-45 L', bom: '~$22K', raas: '₹1.1-1.6 L', pay: '24-36 mo', ind: 'Addverb Dynamo 2T, GreyOrange Ranger, Falcon, Novus Hi-Tech' },
              { cat: 'AGV (magnetic-tape legacy)', capex: '₹4-9 L', bom: '~$3.5K', raas: '₹20-35K', pay: '10-16 mo', ind: 'Movel.in, Sastra Robotics, EcoSys, Yashashvi Industries' },
              { cat: 'Floor scrubber (Peppermint SD45)', capex: '₹7-14 L', bom: '~$5.5K', raas: '₹35-55K', pay: '16-24 mo', ind: 'Peppermint, Milagrow, SoftBank Whiz (Lionsbot dist)' },
              { cat: 'Industrial drone (survey/spray)', capex: '₹4-25 L', bom: '~$2.8K', raas: '₹25-80K', pay: '8-14 mo', ind: 'ideaForge, Garuda, Asteria, NewSpace, Niqo (retrofit)' },
              { cat: 'Welding cobot cell', capex: '₹28-55 L', bom: '$22K', raas: '₹80K-1.4 L', pay: '14-22 mo', ind: 'Difacto, Addverb Veloce, Hi-Tech, Carl Cloos, Panasonic' },
              { cat: 'Vision inspection (CyRo class)', capex: '₹35-90 L', bom: '~$25K', raas: '₹2-4 L', pay: '24-36 mo', ind: 'CynLr, Detect Technologies, Qualitas, Tvarit, Vimaan' },
              { cat: 'Surgical robot (SSI Mantra)', capex: '₹4-7 Cr', bom: '~$280K', raas: '₹50K-1.2 L/proc', pay: '30-48 mo', ind: 'SS Innovations (vs da Vinci ₹18-25 Cr import)' },
              { cat: 'Solar panel cleaning (autonomous)', capex: '₹1.5-15 L', bom: '~$3K', raas: '₹18-35K /MW', pay: '24-30 mo', ind: 'Airtouch, Skilancer, Taypro, Aegeus, NoCo, iSPRING' },
              { cat: 'Manhole/sewer (Bandicoot)', capex: '₹18-40 L', bom: '~$11K', raas: '₹1.2-2.5 L', pay: '18-24 mo', ind: 'Genrobotics, Solinas Integrity (IIT-M spin-off)' },
              { cat: 'Robotic vacuum (consumer)', capex: '₹18K-95K', bom: '~$180', raas: 'n/a', pay: 'lifestyle', ind: 'Milagrow (Chinese ODM); no Indian builder' },
              { cat: 'Pet litter robot', capex: '₹75K-1.1 L', bom: '~$220', raas: 'n/a', pay: 'lifestyle', ind: 'Grey-channel only; no Indian builder yet' },
              { cat: 'Pool cleaner (Dolphin class)', capex: '₹65K-3.5 L', bom: '~$280', raas: 'AMC bundles', pay: '24-36 mo (B2B)', ind: 'All imported; no Indian OEM' },
              { cat: 'Lawn mower (LUBA/Husqvarna)', capex: '₹1.2-4.5 L', bom: '~$650', raas: 'n/a', pay: '18-30 mo', ind: 'All imported; no Indian builder' }
            ]}
            footnote="Sources: Distributor pricing (May 2026), Mercom India 2024 reports, Inc42, IndiaMART, Tracxn. Import duty stack: 7.5% BCD + 18% IGST + 10% SWS ~= 28-30% landed premium on industrial robots (HSN 84795000)."
          />
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* ───────── RaaS vs CapEx comparison ───────── */}
        <Reveal>
          <Kicker>Pricing structure · the deal that closes the buyer</Kicker>
          <h3 className="h3" style={{ margin: '12px 0 8px' }}>Why RaaS works in India when CapEx pitches die.</h3>
          <p style={{ color: 'var(--ink-mid)', maxWidth: 900, marginBottom: 12 }}>
            Indian MSME plant managers do not have ₹40 lakh of discretionary capex sitting in a drawer.
            They have ₹3-5 lakh/month of labor cost they would happily convert into automation. RaaS
            (Robotics-as-a-Service) reframes the same robot from CFO sign-off to plant-manager discretion.
            Day-1 positive cashflow makes the math undeniable.
          </p>
          <FinancialsTable
            cols={[
              { label: '', key: 'item', w: '1.2fr', bold: true },
              { label: 'Traditional CapEx', key: 'cap', w: '1.3fr', numeric: true },
              { label: 'RaaS (the pitch)', key: 'raas', w: '1.3fr', numeric: true, accent: true, alwaysAccent: true },
              { label: 'Customer outcome', key: 'out', w: '2fr', muted: true }
            ]}
            rows={[
              { item: 'Cobot welding cell', cap: '₹35 L upfront', raas: '₹65K / month', out: 'No CFO sign-off, no procurement freeze. Plant manager owns the decision.' },
              { item: 'AMR (4× units)', cap: '₹1.2 Cr upfront + integration', raas: '₹2.4 L / month bundle', out: 'Replaces 12 forklift operators (3 shifts × 4 units). Day-1 cashflow +ve.' },
              { item: 'Floor scrubber (₹2.5L SKU)', cap: '₹2.5L + ₹50K AMC', raas: '₹15K / month + spares', out: 'Equivalent to one housekeeping FTE in Tier-1; pure swap.' },
              { item: 'Solar panel cleaner', cap: '₹80K / panel-array', raas: '₹0.18 / kWh cleaned', out: 'Outcome-based pricing. Customer pays only for output recovery.' },
              { item: 'Vision inspection arm', cap: '₹40L + integration', raas: '₹1.1 L / month', out: 'Pharma + electronics buyer signs purely on rejection-rate improvement.' }
            ]}
            footnote="RaaS pricing reflects 24-month contract, includes spares, software updates, predictive maintenance, and SLA. The startup owns the hardware on its balance sheet. Industry comp: Locus Robotics, Berkshire Grey, Avidbots."
          />
        </Reveal>

        <div style={{ height: 56 }}></div>

        {/* ───────── Density bar chart and regional context ───────── */}
        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 7' }}>
            <Kicker>Robot density · the lopsided asymmetry</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 8px' }}>Where every G20 country sits on the density curve.</h3>
            <p style={{ color: 'var(--ink-mid)', fontSize: 13.5, marginBottom: 12 }}>
              Density = installed industrial robots per 10,000 manufacturing workers. The Korea-vs-India gap is 145×. China is 67× India. Even the global average is 23× India. This is the entire arbitrage thesis on one chart.
            </p>
            <div className="panel flush" style={{ height: 'auto' }}>
              <div style={{ padding: 22 }}>
                <BarChart
                  data={[
                    { label: 'South Korea', value: 1012, color: 'var(--accent)', note: '#1 · 145× India' },
                    { label: 'Singapore', value: 770, note: '#2 · 110× India' },
                    { label: 'China', value: 470, note: '67× India' },
                    { label: 'Japan', value: 446, note: 'Toyota / FANUC / Yaskawa home base' },
                    { label: 'Germany', value: 415, note: 'KUKA + Bosch' },
                    { label: 'United States', value: 295 },
                    { label: 'Italy', value: 224 },
                    { label: 'Sweden', value: 343 },
                    { label: 'Global average', value: 162 },
                    { label: 'Mexico', value: 47, note: 'pre-2024 reshoring wave' },
                    { label: 'India', value: 7, color: 'var(--accent-deep)', note: 'the entire opportunity' }
                  ]}
                  max={1100} motion={motion}
                  format={(v) => v}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} style={{ gridColumn: '8 / span 5' }}>
            <Kicker>Component supply chain · the China dependency</Kicker>
            <h3 className="h3" style={{ margin: '12px 0 8px' }}>Where the actuators actually come from.</h3>
            <p style={{ color: 'var(--ink-mid)', fontSize: 13.5, marginBottom: 12 }}>
              China controls ~26% of the global actuator market vs the US at 5%. The Yangtze River Delta is the most vertically integrated robotics supply chain on the planet - every EV crossover component flows back into robotics BOM.
            </p>
            <CompactStats items={[
              { label: 'CN actuator share', value: '26%', sub: 'Of global market · 5× US' },
              { label: 'BLDC unit price 1K vol', value: '$41-87', sub: 'AliExpress · Yangtze River Delta' },
              { label: 'Rare earth element', value: '60%', sub: 'China share of global supply' }
            ]}/>
            <div style={{ height: 14 }}></div>
            <CompactStats items={[
              { label: 'India PLI IT-HW', value: '₹17K Cr', sub: '6-10% BOM rebate if registered' },
              { label: 'EMS partners IN', value: '5+', sub: 'Dixon, Bharat FIH, Syrma, Foxconn-IN, Tata Electronics' },
              { label: 'India robot install', value: '#6 global', sub: 'Up from #10 in 2018' }
            ]}/>
          </Reveal>
        </div>

        <div style={{ height: 56 }}></div>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 6' }}>
            <div className="panel flush">
              <div className="panel-hd"><span className="ttl">Funding by stage, $M</span><span>2020-2025</span></div>
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
              <div className="panel-hd"><span className="ttl">Demos per quarter · public videos &gt;1M views</span><span>2021-2025</span></div>
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

/* India cobot payback calculator - the buyer-facing math */
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
            into ₹50-80k/month, which collapses the buyer's decision from CFO sign-off to plant-manager discretion.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION 11 - PEOPLE & LABS
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

/* Deep-dive details per person - opens in modal on click */
const PEOPLE_DETAILS = {
  'Saurabh Chandra': {
    kind: 'Founder · Bangalore · India',
    title: 'Saurabh Chandra',
    subtitle: 'Co-founder + CEO, Ati Motors',
    meta: 'IIT-BHU Varanasi B.Tech Mechanical (1997-2001) · Serial entrepreneur',
    stats: [
      { label: 'Funding raised', value: '$37M+', sub: 'Series B Jan 2025: $20M' },
      { label: 'Customers', value: '50+', sub: 'Hyundai, Forvia, Bosch, TVS' },
      { label: 'Robots deployed', value: '500K+ km', sub: 'logged across 70+ facilities' }
    ],
    body: 'Saurabh Chandra co-founded Ati Motors in 2017 after a stint building Strand Life Sciences and earlier software ventures. His thesis: legacy factories are dynamic and chaotic; magnetic-tape AGVs are useless there. Ati builds 3D-LiDAR + vision-guided AMRs that navigate without any infrastructure changes. The Sherpa Tug (1,000kg), Sherpa 10K (10,000lbs), and Sherpa Mecha (dual-arm) are deployed at Fortune 500 plants in the US, EU, and India. Average customer ROI under 6 months in US/EU. Indian product, Western revenue - the export-from-India template every Indian robotics co should study.',
    products: [
      { name: 'Sherpa Tug', spec: '1,000 kg payload · 3D LiDAR + vision · 8-hr runtime · 1,395×640×1,096mm', price: '₹17.70 L (incl. GST)' },
      { name: 'Sherpa 10K', spec: '10,000 lbs (~4,600 kg) heavy tug · launched 2025', price: '$70-90K' },
      { name: 'Sherpa Mecha', spec: 'Dual-armed mobile manipulator · 12kg @ 1m reach · machine tending', price: '$120K+ pilot' }
    ],
    customers: 'Hyundai, Forvia, Bosch, TVS Motors, CEAT - 70+ facilities globally',
    videos: [
      { url: 'https://www.youtube.com/watch?v=ndYik5XgFlM', title: 'Saurabh Chandra - founder podcast, full interview', note: 'Self-driving-car-inspired stack for industrial AMRs.' },
      { url: 'https://www.youtube.com/watch?v=viys3uYGWMQ', title: 'Sherpa Tug field demo - unstructured factory navigation' },
      { url: 'https://www.youtube.com/watch?v=Mosg_p9YgBA', title: 'Sherpa Mecha - dual-armed robot revolutionizing US manufacturing' }
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saurabhchandra/' },
      { label: 'atimotors.com', url: 'https://atimotors.com/' },
      { label: 'Robot Report Series B', url: 'https://www.therobotreport.com/ati-motors-brings-in-20m-expands-presence-u-s-apac/' }
    ],
    sources: 'Crunchbase, The Robot Report, Electrek, getlatka.com, 13sqft distributor listing'
  },
  'Nikhil Ramaswamy': {
    kind: 'Founder · Bangalore · India',
    title: 'Nikhil Ramaswamy',
    subtitle: 'Co-founder + CEO, CynLr (Cybernetics Laboratory)',
    meta: 'Ex-National Instruments (Intel, GE, Bosch, Honeywell key accounts) · Founded 2019',
    stats: [
      { label: 'Funding', value: '$15.3M', sub: 'Series A $10M Nov 2024' },
      { label: '2025 Revenue', value: '~$5.8M', sub: '2027 target $22M' },
      { label: 'BOM components', value: '400+', sub: 'across 14-country supply chain' }
    ],
    body: 'Nikhil and Gokul NA partnered with IISc Centre for Neuroscience to translate biological vision into robotic perception. The CyRo platform is "physical AI" - it identifies, grasps, and manipulates UNFAMILIAR objects without prior training, adjusting grip in real-time. Demoed live at Automate 2025 Detroit picking unseen objects. Currently piloting with Audi and luxury automotive brands. The thesis is "Software Defined Factories" where assembly tasks switch via software, not retooling.',
    products: [
      { name: 'CyRo Platform', spec: '3-arm modular robot · CLX-01 Event Imaging vision · lighting-agnostic · handles transparent/reflective objects', price: '$150-180K + AMC' }
    ],
    customers: 'Luxury automotive brands (incl. Audi pilot), semiconductor automation firms - Cybernetics H.I.V.E. demo lab',
    videos: [
      { url: 'https://www.youtube.com/watch?v=VBewEmL3RXU', title: 'Making Robots Human - Nikhil + Gokul, founders interview', note: 'The bet on visual intelligence over end-effector fanciness.' },
      { url: 'https://www.youtube.com/watch?v=h7qwcLV2adI', title: 'CyRo - Real-time Object Intelligence · AI Impact Summit' }
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhilramaswamy/' },
      { label: 'cynlr.com', url: 'https://www.cynlr.com/' },
      { label: 'Robot Report Series A', url: 'https://www.therobotreport.com/cynlr-raises-series-a-funding-to-realize-robot-vision-for-universal-factory/' }
    ],
    sources: 'Speciale Invest, The Robot Report, BusinessToday, getlatka.com'
  },
  'Gokul NA': {
    kind: 'Founder · Bangalore · India',
    title: 'Gokul N A',
    subtitle: 'Co-founder + CTO, CynLr',
    meta: 'Ex-National Instruments Staff Specialist Vision/RF/Embedded · Built JLR-scale V&V architecture',
    stats: [
      { label: 'Funding', value: '$15.3M' },
      { label: 'Patents filed', value: '12+' }
    ],
    body: 'Gokul leads CynLr\'s vision and embedded engineering. Before founding CynLr in 2019 with Nikhil, he built validation architecture at scale for Jaguar Land Rover at National Instruments. The patent stack is built on visual-cortex-inspired object recognition - work that took ~7 years to mature. Gokul is the technical face for trade shows like Automate; if you talk to anyone at CynLr about the math, it\'s him.',
    videos: [
      { url: 'https://www.youtube.com/watch?v=VBewEmL3RXU', title: 'CynLr founders interview' }
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/n-a-gokul/' },
      { label: 'cynlr.com', url: 'https://www.cynlr.com/' }
    ],
    sources: 'BusinessToday, CynLr team page'
  },
  'Sangeet Kumar': {
    kind: 'Founder · Noida · India',
    title: 'Sangeet Kumar',
    subtitle: 'Co-founder + CEO, Addverb Technologies',
    meta: 'IIT Kharagpur B.Tech Chemical (1998-2002) · 10+ years at Asian Paints automating factories',
    stats: [
      { label: 'FY24 Revenue', value: '₹290.6 Cr', sub: 'FY25 ~₹330 Cr; FY27 target ₹1,400 Cr' },
      { label: 'Reliance stake', value: '54%', sub: '$132M for majority Jan 2022' },
      { label: 'Capacity', value: '10K bots/yr', sub: 'Bot-Verse Noida · scaling to 50K/yr' }
    ],
    body: 'Sangeet Kumar spent a decade at Asian Paints automating their factories before co-founding Addverb in 2016 with Satish Shukla. The thesis was simple: India deserves a homegrown intralogistics platform. The Reliance Industries investment in 2022 ($132M for 54%) gave Addverb scale and a captive customer (JioMart, Reliance Retail). Now exports 60%+ revenue outside India. Bot-Verse Noida is a 2.5-acre ₹75 Cr facility - one of the world\'s largest mobile-robot factories. Latest move: humanoid robot (Elixis) and Trakr quadruped.',
    products: [
      { name: 'Dynamo AMR', spec: '100-2,500 kg payloads · 1.5 m/s · 3D LiDAR + vision · 4hr runtime on 30min charge', price: '₹14-22L (per unit; varies by payload)' },
      { name: 'Quadron carton shuttle', spec: 'Up to 50kg/carton · 90m aisle · 16-level vertical · double-deep storage', price: 'Project-based' },
      { name: 'Veloce sortation', spec: 'Cross-belt high-speed parcel sorter', price: 'Project-based' },
      { name: 'Trakr quadruped', spec: 'Indigenous quadruped for hazardous-environment inspection', price: 'Pilot phase' }
    ],
    customers: 'Reliance Retail, Unilever, Flipkart, Coca-Cola, PepsiCo, Maersk, J&J, PAR Pharma - 300+ clients',
    videos: [
      { url: 'https://www.youtube.com/watch?v=I6_iM1oi-1s', title: 'Young Turks Reloaded × Addverb - inside Bot Valley factory', note: 'Sangeet Kumar interview on humanoid bet + manufacturing scale.' },
      { url: 'https://www.youtube.com/watch?v=gzAbYzEhVvM', title: 'Dynamo - Autonomous Mobile Robot · Material Movement' },
      { url: 'https://www.youtube.com/watch?v=vJBo_jjp5rA', title: 'India AI Summit - Addverb Trakr quadruped' }
    ],
    links: [
      { label: 'LinkedIn', url: 'https://in.linkedin.com/in/sangeetsingh' },
      { label: 'addverb.com', url: 'https://addverb.com/' },
      { label: 'Inc42 Reliance backstory', url: 'https://inc42.com/features/addverbs-humanoid-bet-how-this-noida-robotics-startup-is-building-physical-ai/' }
    ],
    sources: 'PrivateCircle FY24, Inc42, Outlook Business, Reliance disclosure, robotics247.com'
  },
  'Jaisimha Rao': {
    kind: 'Founder · Bangalore · India',
    title: 'Jaisimha Rao',
    subtitle: 'Founder + CEO, Niqo Robotics (formerly TartanSense)',
    meta: 'Carnegie Mellon BS ECE (2003-07) · VP at BlackRock (2007-13) · Founded TartanSense 2015',
    stats: [
      { label: 'Funding', value: '$22.2M', sub: 'Series B $13M Apr 2024' },
      { label: 'Acres covered', value: '148K+', sub: '3,000+ farmers' },
      { label: 'FY25 Revenue', value: '₹6.96 Cr', sub: 'profitability target FY26' }
    ],
    body: 'Jaisimha left a VP role at BlackRock to start TartanSense in 2015. After realizing Indian farmers cannot afford a $30K SwarmFarm robot, he pivoted from full-robot to retrofit AI cameras (Niqo Sense) that mount on existing tractors and sprayers. Outcome: 60-90% chemical savings, 99.3% precision, 2-year farmer ROI. Now expanding to North America for lettuce thinning. Investors: Nexus, Omnivore, FMC, Blume, Bidra (OCP Morocco CVC).',
    products: [
      { name: 'Niqo Sense', spec: 'AI camera retrofit for existing sprayers · green-on-green vision · 5mm vegetation detection · 99.3% accuracy', price: 'Per-acre subscription' },
      { name: 'RoboSpray', spec: 'Spot-spray boom integrated on self-propelled sprayers · cotton + chili focus (India)', price: 'Per-acre service' },
      { name: 'RoboThinner', spec: 'Tractor-retrofit for lettuce thinning · 97% accuracy · 7 acres/hr', price: '$250K (~₹2.1 Cr per unit, US market)' }
    ],
    customers: '3,000+ farmers · 148K+ acres India · 50+ India units · 11 US units (CA, AZ, GA)',
    videos: [
      { url: 'https://www.youtube.com/watch?v=gk4cIK0BUm8', title: 'Niqo Robotics on BBC Click - India-builds-for-world agri robotics', note: 'BBC feature on AI spot-spray cutting agrochemical use by 70%.' },
      { url: 'https://www.youtube.com/watch?v=ztRG6npdscQ', title: 'Niqo RoboThinner - lettuce thinning precision demo' },
      { url: 'https://www.youtube.com/watch?v=RvwfLtqa8XU', title: 'Niqo RoboSpray - sustainable spot-spray robot in field' }
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jaisimha-rao-b37a466b' },
      { label: 'niqorobotics.com', url: 'https://niqorobotics.com/' },
      { label: 'AgFunder profile', url: 'https://agfundernews.com/niqo-robotics-expands-reach-targets-profitability-in-2026-7-farmers-dont-want-ai-hype-they-want-roi' }
    ],
    sources: 'AgFunder, Tracxn, Blume, ContentMedia, BBC Click'
  },
  'Bharadwaj Amrutur': {
    kind: 'Researcher · Bangalore · India',
    title: 'Bharadwaj Amrutur',
    subtitle: 'Research Head, ARTPARK @ IISc',
    meta: 'Stanford PhD · IISc faculty · ARTPARK is India\'s flagship robotics CoE',
    stats: [
      { label: 'ARTPARK budget', value: '₹240+ Cr', sub: 'MeitY NM-ICPS + Karnataka govt' },
      { label: 'Portfolio startups', value: '50+', sub: 'Robotics + AI' },
      { label: 'Industry partners', value: '20+', sub: 'Tata, Bosch, Boeing, Mahindra' }
    ],
    body: 'Bharadwaj Amrutur runs ARTPARK at IISc - the single most important non-VC institution in Indian robotics. It is a Section-8 non-profit set up by IISc + MeitY + Karnataka government, with an applied R&D lab, an incubator, ARTgarage testbed, healthcare-AI focus, and an industry consortium. ARTPARK has funded or incubated 50+ robotics startups and runs the Industry Partner Program. Most India robotics founders either passed through ARTPARK or wish they had. The single best non-obvious door into the Indian ecosystem.',
    videos: [
      { url: 'https://www.youtube.com/watch?v=QXOXIMgHgZ0', title: 'Talk by Prof Bharadwaj Amrutur on ARTPARK - new IISc initiative', note: 'The "why ARTPARK exists" canonical video.' },
      { url: 'https://www.youtube.com/watch?v=tXrCAo12qi4', title: 'Bharadwaj Amrutur ROSCon India 2024 keynote', note: 'Infrastructure-aided autonomy, wireless + edge compute for robot fleets.' }
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/bharadwajamrutur' },
      { label: 'artpark.in', url: 'https://www.artpark.in/' },
      { label: 'IISc page', url: 'https://ece.iisc.ac.in/~amrutur/' }
    ],
    sources: 'ARTPARK website, IISc faculty pages, ROSCon India 2024'
  },
  'Samay Kohli': {
    kind: 'Founder · Singapore/India',
    title: 'Samay Kohli',
    subtitle: 'CEO, GreyOrange',
    meta: 'BITS Pilani · founder of Acyut humanoid (India\'s first) · Founded GreyOrange 2011',
    stats: [
      { label: 'Funding', value: '~$315M', sub: 'SoftBank Vision Fund $140M Series C' },
      { label: 'Robots deployed', value: '~6,000', sub: 'Butler AMRs globally' },
      { label: 'India FY24', value: '₹340 Cr', sub: 'PAT ₹10.8 Cr · India entity' }
    ],
    body: 'Samay built India\'s first humanoid (Acyut) as a BITS Pilani student, then pivoted to warehouse AMRs with the Butler product line. GreyOrange became the most-funded Indian-origin robotics company before relocating HQ to Atlanta/Singapore for global scale. Now pivoting toward SaaS (GreyMatter platform). Customers include Walmart, H&M, Williams-Sonoma. Reportedly preparing an $80M round.',
    products: [
      { name: 'Butler', spec: 'Goods-to-person AMR for fashion + 3PL · ~6,000 units deployed', price: '$18-24 L per unit (India)' },
      { name: 'GreyMatter platform', spec: 'Fulfillment OS · SaaS layer above any hardware', price: 'Per-warehouse subscription' }
    ],
    customers: 'Walmart, H&M, Williams-Sonoma, Flipkart, Myntra',
    videos: [
      { url: 'https://www.youtube.com/watch?v=W_O0_vrfQBM', title: 'GreyOrange Micro Fulfillment in action', note: 'AMRs orchestrating shelf-to-picker fulfillment in micro-cell.' }
    ],
    links: [
      { label: 'greyorange.com', url: 'https://www.greyorange.com/' }
    ],
    sources: 'Crunchbase, GreyOrange filings, Inc42'
  },
  'Sergey Levine': {
    kind: 'Researcher · Berkeley',
    title: 'Sergey Levine',
    subtitle: 'Co-founder, Physical Intelligence · Professor at UC Berkeley',
    meta: 'Foundation models for robot control - π0, RT-2 lineage',
    body: 'Sergey Levine is one of two faces of foundation-model robotics. His Berkeley lab + Physical Intelligence (PI) are pushing the thesis that generalist VLA (vision-language-action) models are 2 years out, not 20. If you care about where industrial robotics will be in 2030, you read his papers.',
    videos: [
      { url: 'https://www.youtube.com/watch?v=48pxVdmkMIE', title: 'Sergey Levine on Dwarkesh - autonomous robots much closer than you think' },
      { url: 'https://www.youtube.com/watch?v=5mY71rGXAkM', title: 'π0 Foundation Model for Robotics - technical deep dive' }
    ],
    links: [
      { label: 'BAIR page', url: 'https://people.eecs.berkeley.edu/~svlevine/' },
      { label: 'Physical Intelligence', url: 'https://www.physicalintelligence.company/' }
    ]
  },
  'Brett Adcock': {
    kind: 'Founder · Sunnyvale',
    title: 'Brett Adcock',
    subtitle: 'CEO, Figure',
    meta: 'Serial founder (Vettery, Archer Aviation) · Founded Figure 2022',
    body: 'Brett Adcock is the public face of the humanoid GTM bet. Figure raised at ~$2.6B valuation, deployed Figure 02 at BMW Spartanburg, announced 8-hour autonomous shifts, and unveiled Figure 03 engineered for 100K-unit annual production. The biggest counter to "humanoids are 10 years out."',
    videos: [
      { url: 'https://www.youtube.com/watch?v=og0VF9-XCSs', title: 'Brett Adcock on Figure\'s 8-hour autonomous shift', note: 'The single best 2026 datapoint that Figure has crossed from demo to deployment.' },
      { url: 'https://www.youtube.com/watch?v=nRS-iB8YRJQ', title: 'Figure 03 reveal - humanoid built for home + work' },
      { url: 'https://www.youtube.com/watch?v=hHA4-nEBer8', title: 'Brett Adcock A360 2025 keynote - humanoids in every home' }
    ],
    links: [
      { label: 'figure.ai', url: 'https://www.figure.ai/' },
      { label: 'X / @adcock_brett', url: 'https://x.com/adcock_brett' }
    ]
  },
  'Wang Xingxing': {
    kind: 'Founder · Hangzhou',
    title: 'Wang Xingxing',
    subtitle: 'CEO, Unitree',
    meta: 'Founded Unitree 2016 · The brain behind cheap, capable Chinese hardware',
    body: 'Wang Xingxing built the quadruped market into something affordable - the Unitree Go2 starts at ~$1,600. Now leads the humanoid push with H1 ($16K) and G1 (sub-$10K), iterating faster than any Western competitor. His quote "$400 actuator BOM in 2017 became $40 today" is the entire China-cost-arbitrage thesis in one sentence.',
    videos: [
      { url: 'https://www.youtube.com/watch?v=Nkh6RUocD8c', title: 'Unitree G1 humanoid - world\'s first kip-up', note: 'China\'s rapid humanoid hardware catch-up to Boston Dynamics-level athletics.' }
    ],
    links: [
      { label: 'unitree.com', url: 'https://www.unitree.com/' }
    ]
  },
  'Marc Raibert': {
    kind: 'Researcher · Cambridge MA',
    title: 'Marc Raibert',
    subtitle: 'Founder, Boston Dynamics → BD AI Institute',
    meta: 'CMU robotics legend · founded BD 1992 · sold to Hyundai 2021',
    body: 'Marc Raibert built Boston Dynamics from a CMU spin-off into the company that defined what dynamic robotics could look like. Now runs the BD AI Institute - a $400M Hyundai-funded research lab applying AI + control to legged locomotion. The "humanoids are not interesting, bipedal locomotion in unstructured environments is interesting" line is his.',
    videos: [
      { url: 'https://www.youtube.com/watch?v=VVpgsd9Jsw0', title: 'Boston Dynamics Spot industrial inspection' }
    ],
    links: [
      { label: 'BD AI Institute', url: 'https://theaiinstitute.com/' }
    ]
  },
  'Pieter Abbeel': {
    kind: 'Researcher · Berkeley',
    title: 'Pieter Abbeel',
    subtitle: 'Co-founder, Covariant · Professor at UC Berkeley',
    meta: 'Robot learning pioneer · Covariant industrial picking · RFM-1 foundation model',
    body: 'Pieter Abbeel runs Berkeley\'s RAIL lab and co-founded Covariant in 2017 to apply RL to industrial picking. Covariant\'s RFM-1 was one of the first robotics foundation models. Acquired by Amazon Aug 2024 - validating both the technical bet and the industrial-applications-first GTM.',
    links: [
      { label: 'Berkeley page', url: 'https://people.eecs.berkeley.edu/~pabbeel/' }
    ]
  },
  'Chelsea Finn': {
    kind: 'Researcher · Stanford',
    title: 'Chelsea Finn',
    subtitle: 'Co-founder, Physical Intelligence · Professor at Stanford',
    meta: 'Meta-learning pioneer · MAML algorithm · Robot generalization',
    body: 'Chelsea Finn co-founded Physical Intelligence with Sergey Levine and Karol Hausman. Her MAML algorithm changed how robots learn from few examples. PI is the most-watched foundation-models-for-robots company - $400M raised, every Bay Area teleop dataset flows through them.',
    links: [
      { label: 'Stanford page', url: 'https://ai.stanford.edu/~cbfinn/' },
      { label: 'Physical Intelligence', url: 'https://www.physicalintelligence.company/' }
    ]
  },
  'Karol Hausman': {
    kind: 'Founder · San Francisco',
    title: 'Karol Hausman',
    subtitle: 'Co-founder, Physical Intelligence',
    meta: 'Ex-Google DeepMind · Stanford · Diffusion policy lineage',
    body: 'Karol Hausman is the third co-founder of Physical Intelligence and the public quote machine. His line "we had 20 years of \'robot learning is two years out\' until diffusion policies started working on dexterous manipulation" captures the regime change of 2023-25.',
    links: [
      { label: 'Physical Intelligence', url: 'https://www.physicalintelligence.company/' }
    ]
  }
};

function S11_People({ motion }) {
  const [q, setQ] = useS2(0);
  const quotes = [
    { t: 'The whole field changed the day diffusion policies started working on dexterous manipulation. We had 20 years of "robot learning is two years out."', a: 'Karol Hausman · Physical Intelligence' },
    { t: 'Humanoids are not interesting. Bipedal locomotion in unstructured environments is interesting. The form is just the consequence.', a: 'Marc Raibert · BD AI Institute' },
    { t: 'We were $400 in actuator BOM in 2017. We are $40 today. Everything downstream of that change is a different business.', a: 'Wang Xingxing · Unitree' },
    { t: 'India is where Korea was in 1985 - the labor cost arbitrage is gone, the customer base is real, the talent has come back. Robotics has 10 quiet years here.', a: 'Founder, Bangalore (off the record)' }
  ];
  useE2(() => {
    if (motion <= 0) return;
    const id = setInterval(() => setQ(x => (x + 1) % quotes.length), 6500);
    return () => clearInterval(id);
  }, [motion, quotes.length]);

  return (
    <section id="people" data-section="11" data-screen-label="11 People" className="section-pad">
      <div className="page">
        <SectionTag n="11" title="People & labs - the network you should be reading" source="ArXiv author counts, lab pages, Twitter follow graph"/>

        <div className="col-12">
          <Reveal style={{ gridColumn: '1 / span 8' }}>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              Pick people, not categories. Robotics is a small enough field that <em>~120 names</em> author or fund 80% of what matters - and in India, more like <em style={{ color: 'var(--accent)' }}>30</em>.
            </h2>
          </Reveal>
        </div>

        <div style={{ height: 40 }}></div>

        {/* Quote carousel */}
        <Reveal>
          <div className="panel" style={{ background: 'var(--bg-deep)', position: 'relative', minHeight: 220, borderLeft: '3px solid var(--accent)' }}>
            <Kicker>From the field</Kicker>
            <div style={{ position: 'relative', marginTop: 18, minHeight: 130 }}>
              {quotes.map((qq, i) => (
                <div key={i} style={{
                  position: 'absolute', inset: 0,
                  opacity: i === q ? 1 : 0,
                  transform: i === q ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity .6s, transform .6s'
                }}>
                  <div className="serif" style={{ fontSize: 30, lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--ink)', maxWidth: 1000 }}>
                    "{qq.t}"
                  </div>
                  <div className="meta" style={{ marginTop: 18, color: 'var(--accent)' }}>- {qq.a}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 24 }}>
              {quotes.map((_, i) => (
                <button key={i} onClick={() => setQ(i)} style={{
                  all: 'unset', width: 26, height: 2,
                  background: i === q ? 'var(--accent)' : 'var(--ink-fade)',
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
                {PEOPLE.map((p, i) => {
                  const detail = PEOPLE_DETAILS[p.name];
                  const cardInner = (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span className="h4">{p.name}</span>
                        <span className="meta">{p.loc}</span>
                      </div>
                      <div className="meta" style={{ marginTop: 4 }}>{p.role} · <span style={{ color: 'var(--accent)' }}>{p.org}</span></div>
                      <div style={{ marginTop: 8, fontSize: 13, color: 'var(--ink-mid)' }}>{p.focus}</div>
                    </>
                  );
                  if (!detail) {
                    return (
                      <div key={p.name} style={{ padding: '16px 20px', borderTop: '1px solid var(--rule)', borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none' }}>
                        {cardInner}
                      </div>
                    );
                  }
                  return (
                    <ClickableCard key={p.name} data={detail} style={{ padding: '16px 20px', borderTop: '1px solid var(--rule)', borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none' }}>
                      {cardInner}
                    </ClickableCard>
                  );
                })}
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
   SECTION 12 - RISKS & OPEN QUESTIONS
   ============================================================ */
const RISKS = [
  { k: 'Generalization wall', q: 'Will VLAs generalize to novel objects + environments?', kind: 'Capability', sev: 4, take: 'Probably yes, slower than the demos suggest. Most published demos are still in-distribution. Tele-op data scaling helps but plateaus.' },
  { k: 'Component imports',   q: 'Can we build an Indian robot without Chinese parts?',  kind: 'India · Supply', sev: 4, take: '~60% of robot BOM (motors, reducers, sensors, controllers) is still imported, mostly from China + Japan. PLI for components is starting but 3-5 yrs from filling the gap. Mitigation: design around accessible parts; build component supply as separate revenue line.' },
  { k: 'MSME price-shopping', q: 'Will Indian SMEs actually pay our ask?',                kind: 'India · GTM',     sev: 3, take: 'MSMEs price-shop aggressively. Tier-1 OEMs do not. Phase-1 GTM is Tier-1 anchor accounts only; MSMEs become a Phase-2 channel via RaaS pricing that turns capex into ₹50-80k/month.' },
  { k: 'Unit economics',      q: 'Does a $30k humanoid replace a $40k/yr worker?',         kind: 'Business',   sev: 3, take: 'On paper yes; in practice, downtime, integration, and supervision drag effective hours per shift. Honest payback today: 2.5-4 yrs for humanoids; 12-18 months for cobot/AMR (which is the bet).' },
  { k: 'AI hype cycle',       q: '"The AI wave will fade in 2 years"',                    kind: 'Macro · Timing',  sev: 2, take: 'The bet is not AI. The bet is industrial robotics, which has compounded 11% CAGR for 20 years through every AI cycle. FANUC, ABB, Yaskawa, KUKA all built billion-$ businesses before VLAs existed. AI is the multiplier, not the trigger.' },
  { k: 'China decoupling',    q: 'What happens to BOM if US-China supply chain hardens?',  kind: 'Geopolitics',sev: 4, take: 'Cycloidal reducer + harmonic drive supply is heavily Chinese. A 12-month decoupling shock would 2-3× hardware cost in West. For India this is actually a tailwind - buyers prefer non-China supply.' },
  { k: 'Labor backlash',      q: 'Political risk of visible displacement?',                 kind: 'Social',     sev: 2, take: 'Lower than feared so far. Manufacturing automation co-exists with the reshoring + Make-in-India narrative; pollsters have not seen a robotics-specific backlash.' },
  { k: 'Safety incidents',    q: 'How close to a high-profile humanoid injury?',          kind: 'Operational',sev: 3, take: 'A serious incident is more "when" than "if". Field has 18-24 months before regulatory acceleration becomes likely. Industrial cobots (force-limited) are inside ISO 10218 already - well-litigated and safe.' }
];

function S12_Risks({ motion }) {
  return (
    <section id="risks" data-section="12" data-screen-label="12 Risks" className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="page">
        <SectionTag n="12" title="Risks & open questions - what would make me wrong" source="own framework"/>

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
              This is the objection - and the right answer is to agree with the spirit and disagree with
              the conclusion. Distribution is the moat. In consumer apps, distribution is paid acquisition
              and retail shelf. In robotics, <em style={{ color: 'var(--accent)' }}>distribution is the deployment itself</em>:
              the moment a Locus AMR is wired into a WMS, the moment an Ati Sherpa is on a paint-shop
              floor, the moment a Niqo sprayer is in a contractor's field - that is not "product". That
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
                  why: 'Walmart anchor → $22.7B backlog. ASRS is poured into the slab of the building. The contract is 10-15 yr. Distribution = concrete.'
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
                    'A robotics foundation model that crosses generalization thresholds on real, novel hardware - not sim.',
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
                <h3 className="h3" style={{ margin: '12px 0 14px' }}>Things I might be wrong about - flag if you know better.</h3>
                <ul style={{ paddingLeft: 16, color: 'var(--ink-mid)', fontSize: 14, lineHeight: 1.6 }}>
                  <li>Humanoid pre-orders likely include MOUs; conversion rate unknown.</li>
                  <li>India robotics startup count is from Tracxn + my own scrape - undercounts undisclosed seed.</li>
                  <li>Component cost reductions are median across SKUs; tail SKUs (custom) didn't drop nearly as much.</li>
                  <li>VLA "success rates" are not directly comparable across papers - benchmarks differ.</li>
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
   SECTION 13 - CLOSING / WHERE I'M PLACING MY BET
   ============================================================ */
function S13_Bet({ motion }) {
  return (
    <section id="bet" data-section="13" data-screen-label="13 The Bet" className="section-pad" style={{ background: 'var(--bg-alt)', position: 'relative' }}>
      <div className="page">
        <SectionTag n="13" title="The bet - what I want to spend the next ten years doing" source="Synthesized across §01-§12"/>

        <Reveal delay={100}>
          <h2 className="h-hero" style={{ marginBottom: 40, maxWidth: 1100 }}>
            The robot is <em style={{ color: 'var(--accent)' }}>not</em> the product.
          </h2>
        </Reveal>

        <div className="col-12">
          <Reveal delay={300} style={{ gridColumn: '1 / span 8' }}>
            <p className="lead" style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 24 }}>
              Robotics is a vertical-AI business with a hardware delivery vehicle. The companies that compound
              will own data, behavior, distribution, and operations - not chassis. Hardware will decommodify in
              the form factors that win and commoditize in the ones that don't. In India, the unmet need is so
              acute that you do not need to win on technology; you need to win on <em style={{ color: 'var(--accent)' }}>service, integration, and
              uptime</em>. Those three are unsexy. They are also the moat.
            </p>
            <p className="lead" style={{ fontSize: 22, lineHeight: 1.5 }}>
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
              body: 'A Bangalore-based shop that sources cobots + AMRs from best-in-class OEMs (UR, Doosan, Geek+, Mobile Industrial Robots), wraps them in a software-led integration stack (vision, fleet, WMS adapters), and sells the entire deployment as RaaS to PLI-cohort manufacturers. Anchor: 2-3 Tier-1 paid pilots in 12 months. Capital-light. Customer-rich. ROI inside 18 months. Walks into Aayush\'s preferred shape - distribution = deployment, service = moat, and the buyer is the largest factories in the country.',
              proof: ['Ati Motors playbook validated', 'PLI buyers active', 'Cobot landed-cost path $28k → $18k by 2028']
            },
            {
              n: 'B',
              pct: '30%',
              title: 'Vertical robotics · pick one sticky workflow',
              body: 'Pick exactly one physical workflow and own its data flywheel. Three candidates: (1) Pharma sterile-line filling - regulated, sticky, high-margin (Sun, Dr Reddy\'s). (2) Electronics assembly inspection - PCB defect detection for PLI-fabs (CynLr-adjacent). (3) Agri precision spraying - RaaS-per-acre for contract sprayers (Niqo-adjacent, but expanded across crops). Narrower than A, deeper moat, longer build. If A is the wedge, B is the long compounder.',
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
              <div className="panel" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="serif" style={{ fontSize: 64, lineHeight: 1, color: 'var(--accent)' }}>{b.n}</span>
                  <span className="meta" style={{ color: 'var(--accent)' }}>{b.pct} of conviction</span>
                </div>
                <h3 className="h3" style={{ margin: '24px 0 14px', fontSize: 22 }}>{b.title}</h3>
                <p style={{ color: 'var(--ink-mid)', fontSize: 13.5, lineHeight: 1.6, marginBottom: 18 }}>{b.body}</p>
                <div style={{ marginTop: 'auto', borderTop: '1px dashed var(--rule)', paddingTop: 12 }}>
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
          <div className="panel" style={{ padding: 36 }}>
            <div className="kicker" style={{ color: 'var(--accent)' }}>How I start tomorrow · 12-month plan</div>
            <h3 className="h3" style={{ margin: '14px 0 22px', fontSize: 26 }}>Not slides. A bench, a calendar, and a list of customers.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {[
                { m: 'M 1-2', t: 'Get tactile', b: 'Build an SO-100 6-DOF arm (~$200, LeRobot). Run SmolVLA / π0 weights. Sixty hours of debugging a real robot. This is not theatre - it changes how you talk about the field.' },
                { m: 'M 2-3', t: 'Immerse in industry', b: 'Walk Peenya + Bommasandra. Twenty MSME factory visits. Tour Tata Electronics Hosur. Attend IMTEX Bangalore. The point is to find the right problem, not pitch the wrong one.' },
                { m: 'M 3-4', t: 'Build the network', b: 'ARTPARK partner program kickoff. Twenty coffees with Indian robotics founders + 5 with global ones. Get on the Indian operators WhatsApp circle (it exists).' },
                { m: 'M 4-6', t: 'Pick ONE vertical', b: 'Pick the wedge - most likely auto-tier-1 cobot integration. Build a working pilot using off-the-shelf cobot + custom software. Show, don\'t tell.' },
                { m: 'M 6-9', t: 'Pilot conversations', b: 'Convert 3 factory tours into 3 paid pilot conversations. ₹5-10 L pilot fee covers cost. Target: 1 LOI by month 9. Tier-1 OEMs only - no MSMEs in Phase 1.' },
                { m: 'M 9-12', t: 'Walk in strong', b: 'Working prototype + vertical thesis + 1 signed pilot + 2 LOIs. That is what gets us to seed, and that is what Aayush should write a cheque against - not slides.' }
              ].map((p, i) => (
                <div key={i} style={{ padding: 18, background: 'var(--bg-deep)', border: '1px solid var(--rule)' }}>
                  <div className="meta" style={{ color: 'var(--accent)' }}>{p.m}</div>
                  <div className="serif" style={{ fontSize: 20, color: 'var(--ink)', margin: '8px 0 10px' }}>{p.t}</div>
                  <div style={{ color: 'var(--ink-mid)', fontSize: 13, lineHeight: 1.55 }}>{p.b}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div style={{ height: 64 }}></div>

        {/* Direct closing to Aayush */}
        <Reveal delay={800}>
          <div className="panel" style={{ padding: 40, borderTop: '3px solid var(--accent)', borderBottom: '3px solid var(--accent)', background: 'var(--bg-deep)' }}>
            <div className="kicker" style={{ color: 'var(--accent)' }}>For Aayush</div>
            <p className="serif" style={{ fontSize: 28, color: 'var(--ink)', lineHeight: 1.3, letterSpacing: '-0.015em', marginTop: 18, maxWidth: 1000 }}>
              You are right that the product is not the moat. You are right that distribution is the moat.
              I think the distribution in robotics is more hard. In an app, it is
              ads + retail. In a factory, it is the cobot already wired into the line - and that wiring
              is service, integration, and uptime, three things <em style={{ color: 'var(--accent)' }}>India has zero local champion for
              today</em>. That is the gap I want to spend the next ten years closing. Not as a consumer
              brand. Not as humanoids. As the boring, profitable infrastructure underneath India's
              manufacturing decade. Read this. Argue with it. Then let's go to ARTPARK.
            </p>
            <div className="meta" style={{ marginTop: 28, color: 'var(--ink-mid)' }}>- Ubhay</div>
          </div>
        </Reveal>

        <div style={{ height: 60 }}></div>

        <Reveal delay={1000}>
          <div style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '40px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
            <div>
              <div className="kicker">Working draft</div>
              <div className="serif" style={{ fontSize: 32, color: 'var(--ink)', lineHeight: 1.2, marginTop: 12 }}>
                This document will be wrong in interesting ways within 90 days. That is the point.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--ink-low)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Version</span><span style={{ color: 'var(--ink)' }}>v0.5 · 2026-05-17</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Sources</span><span style={{ color: 'var(--ink)' }}>IFR, Inc42, Tracxn, Tofler MCA, PrivateCircle, company filings</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Embeds live</span><span style={{ color: 'var(--ink)' }}>60+ YouTube</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Update cadence</span><span style={{ color: 'var(--ink)' }}>monthly</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Argue with me</span><span style={{ color: 'var(--accent)' }}>ubhayvatsaanand@gmail.com</span></div>
            </div>
          </div>
        </Reveal>

        <div style={{ height: 60 }}></div>

        <Reveal delay={1200}>
          <div style={{ textAlign: 'center', color: 'var(--ink-fade)' }}>
            <div className="serif" style={{ fontSize: 48, color: 'var(--accent)', fontStyle: 'italic', marginBottom: 14 }}>-Fin-</div>
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
