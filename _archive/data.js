// ============================================================
// ROBOTICS RESEARCH WEBSITE — STRUCTURED DATA
// ============================================================

const MARKET_DATA = {
  globalMarket: {
    labels: ['2023', '2024', '2025', '2026E', '2027E', '2028E', '2029E', '2030E'],
    total:      [42, 47, 62, 74, 90, 110, 138, 175],
    industrial: [24, 26, 32, 36, 42, 50, 60, 72],
    consumer:   [10, 13, 18, 24, 32, 42, 55, 70],
    cobots:     [1.0, 1.2, 1.5, 2.0, 2.8, 3.8, 5.2, 7.0],
  },
  raas: {
    labels: ['2023', '2024', '2025', '2026E', '2027E', '2028E', '2029E', '2030E'],
    values: [1.4, 1.9, 2.7, 3.5, 4.6, 6.1, 8.0, 10.5],
  },
  installationsByIndustry: {
    labels: ['Electronics', 'Automotive', 'Metal & Machinery', 'Plastic & Chemical', 'Food & Bev', 'Other'],
    values: [24, 23, 16, 5, 4, 28],
    growth: ['+2%', '-5%', '+16%', '+18%', '+42%', '—'],
    colors: ['#00d4ff', '#7c3aed', '#06d6a0', '#ffd166', '#ef476f', '#4a5568'],
  },
  globalInstallations: {
    total: 542076,
    operationalStock: 4660000,
    chinaShare: 54,
    asiaShare: 74,
  }
};

const DENSITY_DATA = {
  countries: [
    { name: 'South Korea',   density: 1220, flag: '🇰🇷', color: '#00d4ff' },
    { name: 'Japan',          density: 446,  flag: '🇯🇵', color: '#7c3aed' },
    { name: 'Germany',        density: 415,  flag: '🇩🇪', color: '#06d6a0' },
    { name: 'W. Europe Avg',  density: 267,  flag: '🇪🇺', color: '#4a90d9' },
    { name: 'North America',  density: 204,  flag: '🇺🇸', color: '#ffd166' },
    { name: 'China',          density: 166,  flag: '🇨🇳', color: '#ef476f' },
    { name: 'Global Average', density: 132,  flag: '🌍', color: '#9ca3af' },
    { name: 'India',          density: 30,   flag: '🇮🇳', color: '#f97316' },
  ],
  indiaGap: {
    vsGlobal: '4.4x',
    vsKorea: '40x',
    vsChina: '5.5x',
  }
};

const FUNDING_DATA = {
  totalVC2025: 27.6, // billion
  worldModelSurge: { from: 1.3, to: 6.5, unit: '€B' },
  topCompanies: [
    {
      name: 'Figure AI',
      valuation: '$39B',
      raised: '>$1.9B',
      focus: 'Humanoid robotics (hardware + AI)',
      founded: '2022',
      hq: 'San Jose, CA',
      color: '#00d4ff',
      category: 'humanoid',
    },
    {
      name: 'Skild AI',
      valuation: '$14B–$15B',
      raised: '~$1.7B',
      focus: 'Universal robot brain (software platform)',
      founded: '2023',
      hq: 'Pittsburgh, PA',
      color: '#7c3aed',
      category: 'software',
    },
    {
      name: 'Physical Intelligence',
      valuation: '$5.6B→$11B',
      raised: '>$1B',
      focus: 'VLA foundation models (π0)',
      founded: '2024',
      hq: 'San Francisco, CA',
      color: '#06d6a0',
      category: 'software',
    },
    {
      name: 'Symbotic',
      valuation: 'Public',
      raised: 'Revenue: $1.82B',
      focus: 'AI warehouse automation',
      founded: '2007',
      hq: 'Wilmington, MA',
      color: '#ffd166',
      category: 'industrial',
    },
    {
      name: 'Locus Robotics',
      valuation: '$2B',
      raised: 'Unicorn',
      focus: 'Collaborative warehouse AMRs',
      founded: '2014',
      hq: 'Wilmington, MA',
      color: '#ef476f',
      category: 'industrial',
    },
    {
      name: '1X (NEO)',
      valuation: '—',
      raised: 'Significant',
      focus: 'Home humanoid ($20K / $499/mo)',
      founded: '2014',
      hq: 'Oslo, Norway',
      color: '#f97316',
      category: 'humanoid',
    },
  ],
  vcFirms: [
    { name: 'Khosla Ventures', thesis: 'Category-defining, edge autonomy', bets: ['Physical Intelligence', 'Field AI', 'Vayu', 'Waabi'] },
    { name: 'Lux Capital', thesis: 'Contrarian deep tech', bets: ['Physical Intelligence', 'Anduril', 'Applied Intuition'] },
    { name: 'Sequoia', thesis: 'Category winners', bets: ['Skild AI', 'Physical Intelligence', 'RobCo', 'AMP Robotics'] },
    { name: 'a16z', thesis: 'American Dynamism', bets: ['Figure AI', 'Physical Intelligence', 'Shield AI', 'Hadrian'] },
    { name: 'SoftBank', thesis: 'Physical AI ecosystem', bets: ['ABB ($5.375B)', 'Skild AI', 'AutoStore', 'Berkshire Grey'] },
  ],
};

const VLA_MODELS = [
  { name: 'RT-2',          creator: 'Google DeepMind',        year: '2023', breakthrough: 'First major VLA — web-scale pretraining + robot actions' },
  { name: 'π0',            creator: 'Physical Intelligence',  year: '2024', breakthrough: 'Flow matching for continuous, high-frequency motor output' },
  { name: 'GR00T N1',      creator: 'NVIDIA',                 year: '2025', breakthrough: 'Open, customizable humanoid foundation model' },
  { name: 'SmolVLA',       creator: 'Hugging Face',           year: '2025', breakthrough: '450M params — efficient VLA for consumer hardware' },
  { name: 'GEN-1',         creator: 'Generalist AI',          year: '2026', breakthrough: '~99% success (vs 64% prior), 3x faster' },
  { name: 'π0.7',          creator: 'Physical Intelligence',  year: '2026', breakthrough: 'Compositional generalization — combines skills for novel tasks' },
  { name: 'Gemini Robotics', creator: 'Google DeepMind',      year: '2026', breakthrough: '3D spatial perception + on-device processing' },
  { name: 'Cosmos',        creator: 'NVIDIA',                 year: '2026', breakthrough: 'World models for synthetic training data generation' },
];

const INDIA_STARTUPS = [
  { name: 'CynLr',        location: 'Bengaluru', focus: 'Visual Object Intelligence for robotic arms', funding: 'Seeking $75M (was $15.2M)', stage: 'Growth', category: 'industrial' },
  { name: 'Ati Motors',    location: 'Bengaluru', focus: 'AMRs for factory material handling', funding: '$20M Series B', stage: 'Series B', category: 'amr' },
  { name: 'Systemantics',  location: 'Bengaluru', focus: 'Affordable cobots (SARYA) for MSMEs', funding: '—', stage: 'Growth', category: 'cobot' },
  { name: 'Addverb',       location: 'Noida', focus: 'Reliance-backed, mobile robots + ASRS', funding: 'Significant', stage: 'Late', category: 'warehouse' },
  { name: 'Perceptyne',    location: 'India', focus: 'AI robotic arms for electronics assembly', funding: '—', stage: 'Early', category: 'industrial' },
  { name: 'Niqo Robotics', location: 'India', focus: 'Precision spraying for agriculture', funding: '—', stage: 'Early', category: 'agriculture' },
  { name: 'GreyOrange',    location: 'Global (Indian-origin)', focus: 'Warehouse automation', funding: 'Late stage', stage: 'Late', category: 'warehouse' },
  { name: 'Nymble',        location: 'Bengaluru', focus: 'Robotic kitchen appliances', funding: '—', stage: 'Early', category: 'consumer' },
  { name: 'Miko',          location: 'Mumbai', focus: 'Companion / education robot', funding: '—', stage: 'Growth', category: 'consumer' },
  { name: 'Botsync',       location: 'India', focus: 'Heavy-duty AMRs for logistics', funding: '—', stage: 'Early', category: 'amr' },
];

const VERTICALS = [
  {
    id: 'agriculture',
    icon: '🌾',
    title: 'Agriculture',
    marketSize: '$630M → $2.65B by 2030',
    cagr: '22.8%',
    capitalNeeded: 'Medium',
    moatPotential: 'High',
    indiaFit: '★★★★★',
    description: 'Precision spraying, weeding, harvesting. Acute labor shortage as rural youth migrate to cities.',
    opportunities: ['RaaS model (pay-per-acre) for smallholders', 'Drone-based spraying services', '40% input cost reduction with precision application', 'Rural entrepreneur income creation'],
    challenges: ['Fragmented landholdings (<2 acres typical)', 'High upfront cost for individual farmers', 'Rural infrastructure gaps (power, internet)'],
    players: ['Niqo Robotics', 'TartanSense', 'Fasal', 'CropIn'],
    keyMetric: '40% input cost reduction',
  },
  {
    id: 'electronics',
    icon: '🔌',
    title: 'Electronics & Semiconductor',
    marketSize: 'Part of $128K unit installs/yr',
    cagr: '15%+',
    capitalNeeded: 'Medium-High',
    moatPotential: 'High',
    indiaFit: '★★★★★',
    description: 'PLI scheme driving massive factory buildout. Foxconn, Tata Electronics need flexible automation.',
    opportunities: ['PCB assembly automation', 'Wafer handling', 'Quality inspection with AI vision', 'System integration for new PLI factories'],
    challenges: ['High precision requirements', 'Competition from established players', 'Component import dependency'],
    players: ['Perceptyne', 'Systemantics', 'ABB', 'FANUC'],
    keyMetric: '#1 industry for robot installs globally',
  },
  {
    id: 'pharma',
    icon: '💊',
    title: 'Pharma & Life Sciences',
    marketSize: 'Multi-billion globally',
    cagr: '12%+',
    capitalNeeded: 'Medium',
    moatPotential: 'Very High',
    indiaFit: '★★★★☆',
    description: 'High-margin, regulated environment. Sterility and traceability requirements create natural switching costs.',
    opportunities: ['Aseptic vial filling', 'High-precision mixing/dosing', 'Quality inspection', 'Sample prep automation'],
    challenges: ['Regulatory compliance (GMP, FDA)', 'Long validation cycles', 'Conservative buyer mindset'],
    players: ['ABB', 'Stäubli', 'Universal Robots'],
    keyMetric: 'Stickiest customers in robotics',
  },
  {
    id: 'textile',
    icon: '🧵',
    title: 'Textile & Garment',
    marketSize: 'India: global hub, near-zero automation',
    cagr: 'Emerging',
    capitalNeeded: 'High',
    moatPotential: 'Very High',
    indiaFit: '★★★★☆',
    description: 'India is a global garment hub with almost zero automation. Deformable objects are a hard robotics problem.',
    opportunities: ['Automated cutting and sewing', 'Fabric handling', 'Defect detection', 'Cycle time: 25-40 days → 15-28 days'],
    challenges: ['Deformable object manipulation (extremely hard)', 'Low-margin industry resists investment', 'Workforce transition concerns'],
    players: ['SoftWear Automation', 'Sewbo', 'Few in India'],
    keyMetric: 'Near-zero automation in $150B industry',
  },
  {
    id: 'construction',
    icon: '🏗️',
    title: 'Construction',
    marketSize: 'Emerging, Bedrock at unicorn',
    cagr: '15%+',
    capitalNeeded: 'High',
    moatPotential: 'High',
    indiaFit: '★★★☆☆',
    description: 'Historically a graveyard for robotics startups, but sensors + autonomy + labor scarcity creating convergence.',
    opportunities: ['Masonry and rebar tying', 'Layout marking/printing', '3D printing of structures', 'Earthmoving autonomy'],
    challenges: ['Unstructured environments', 'Weather/dust/debris', 'Fragmented industry structure', 'Historical failure rate'],
    players: ['Bedrock (unicorn)', 'Built Robotics', 'Dusty Robotics', 'Canvas'],
    keyMetric: 'Massive labor deficit globally',
  },
  {
    id: 'inspection',
    icon: '🔍',
    title: 'Inspection & Maintenance',
    marketSize: 'Fast-growing RaaS segment',
    cagr: '20%+',
    capitalNeeded: 'Medium',
    moatPotential: 'High',
    indiaFit: '★★★★☆',
    description: 'Autonomous rovers and drones for infrastructure inspection. Recurring RaaS contracts.',
    opportunities: ['Power plant inspection', 'Oil refinery monitoring', 'Telecom tower inspection', 'Solar farm maintenance', 'Predictive maintenance AI'],
    challenges: ['Safety certification for hazardous environments', 'Connectivity in remote locations', 'Specialized sensor integration'],
    players: ['ANYbotics', 'Boston Dynamics Spot', 'Gecko Robotics', 'Flyability'],
    keyMetric: 'Recurring revenue via RaaS contracts',
  },
  {
    id: 'defense',
    icon: '🛡️',
    title: 'Defense & Dual-Use',
    marketSize: 'India defense: ₹7.85L Cr budget',
    cagr: '15%+',
    capitalNeeded: 'High',
    moatPotential: 'Very High',
    indiaFit: '★★★★★',
    description: 'Drones, counter-drone, UGVs. Government actively funding indigenous development.',
    opportunities: ['Surveillance UAVs', 'Counter-drone systems (8-10x growth)', 'Loitering munitions', 'Autonomous UGVs for border patrol', 'Defense exports (₹50K Cr target by 2029)'],
    challenges: ['Heavy regulatory burden', 'Long procurement cycles', 'Security clearances', 'Indigenization mandates (advantage if you can meet them)'],
    players: ['Kshatra Labs', 'ideaForge', 'Tonbo Imaging', 'Paras Defence'],
    keyMetric: 'Counter-drone: 8-10x growth',
  },
  {
    id: 'picks',
    icon: '⛏️',
    title: 'Picks & Shovels (Software)',
    marketSize: 'Synthetic data >30% CAGR',
    cagr: '30%+',
    capitalNeeded: 'Low',
    moatPotential: 'Medium-High',
    indiaFit: '★★★★★',
    description: 'Software businesses serving the robotics industry. Lowest capex, rides the wave without hardware risk.',
    opportunities: ['Simulation & synthetic data generation', 'Fleet management platforms', 'Data labeling for robotics', 'Teleoperation tooling', 'Compliance/certification services', 'Workforce training'],
    challenges: ['Lower margins than hardware+software combo', 'Platform risk from NVIDIA/large players', 'Need deep domain expertise'],
    players: ['InOrbit', 'Cogniteam', 'Applied Intuition', 'Fuchsia (YC)'],
    keyMetric: 'Lowest capital, highest capital efficiency',
  },
];

const CASE_STUDIES = [
  {
    name: 'Symbotic',
    category: 'Warehouse Automation',
    revenue: '$1.82B',
    revenueGrowth: '+55% YoY',
    backlog: '$22.7B',
    strategy: 'Anchor customer (Walmart) → expand to Target, food, wholesale. High-density AI-powered ASRS. Software revenue margins.',
    moat: 'Deep integration, proprietary ASRS system, massive backlog',
    lesson: 'Anchor customer + vertical expansion + software margins',
    color: '#ffd166',
  },
  {
    name: 'Locus Robotics',
    category: 'Collaborative AMRs',
    revenue: '$2B valuation',
    revenueGrowth: 'Exponential',
    backlog: '350+ sites, 5B+ picks',
    strategy: 'RaaS model lowered barriers for 3PLs. "People-first" — augment, don\'t replace. No infrastructure changes needed.',
    moat: 'WMS integration, RaaS lock-in, deployment velocity',
    lesson: 'Fit into existing workflows, RaaS > CapEx, collaborative model',
    color: '#ef476f',
  },
  {
    name: 'Covariant',
    category: 'Universal AI Platform',
    revenue: '6x growth in 2022',
    revenueGrowth: 'Rapid expansion',
    backlog: 'Global: Asia, Europe, NA',
    strategy: '"Universal Brain" — AI that manipulates unseen objects. Partner with integrators (Knapp, ABB, Radial). Retrofit existing infrastructure.',
    moat: 'Proprietary AI platform, partner ecosystem, data flywheel',
    lesson: 'AI platform > hardware company. Retrofit > rip-and-replace.',
    color: '#06d6a0',
  },
];

const MOAT_FRAMEWORK = [
  { type: 'Data Flywheel', description: 'Deployed robots collect data → improve models → better robots → more deployments', strength: 5, timeToBuild: 'Long' },
  { type: 'Vertical Specialization', description: 'Deep expertise in one domain creates irreplaceable knowledge', strength: 4, timeToBuild: 'Medium' },
  { type: 'Full-Stack Integration', description: 'Own hardware + software + deployment → unique sensor data', strength: 5, timeToBuild: 'Long' },
  { type: 'Workflow Lock-in', description: 'Integrated into customer MES/ERP/WMS → high switching cost', strength: 4, timeToBuild: 'Medium' },
  { type: 'SLA + Service Network', description: 'Uptime guarantees and after-sales support', strength: 3, timeToBuild: 'Medium' },
  { type: 'Process Power', description: 'Turn messy real-world data into automated improvements', strength: 5, timeToBuild: 'Long' },
];

const HUMANOID_TIMELINE = [
  { period: '2026–2027', status: 'Early Commercial', price: '$50K–$250K enterprise / $4K–$20K entry', focus: 'Factory floors, initial sales' },
  { period: '2028', status: 'Mass Commercial', price: 'Declining', focus: 'Beyond pilots into broader business' },
  { period: '2030', status: 'Scaling', price: '$17K–$37K capable', focus: '38K–1M+ units/year' },
  { period: 'Post-2030', status: 'Household', price: 'Car-priced', focus: 'Home robots emerge' },
];

const ACTION_PLAN = [
  { month: '1–2', title: 'Get Tactile', description: 'Build SO-100 arm. Run SmolVLA/π0. 60 hours of debugging a real robot.', icon: '🔧' },
  { month: '2–3', title: 'Immerse in Industry', description: 'Visit factories in Peenya, Bommasandra. Talk to plant managers about what\'s broken.', icon: '🏭' },
  { month: '3–4', title: 'Build Network', description: 'Connect with ARTPARK. Attend events. 20 coffees with founders, researchers, operators.', icon: '🤝' },
  { month: '4–6', title: 'Pick ONE Vertical', description: 'Choose based on customer pain + your strengths. Build a prototype solving a real problem.', icon: '🎯' },
  { month: '6–9', title: 'Pilot Conversations', description: 'Run 2–3 pilot conversations with potential customers. Get LOIs if possible.', icon: '💬' },
  { month: '9–12', title: 'Walk In Strong', description: 'Join brother\'s venture with: working prototype + vertical thesis + customer conversations.', icon: '🚀' },
];

const FAILURE_PATTERNS = [
  { pattern: 'Demo ≠ Deployment', description: 'Impressive prototype that can\'t survive real-world conditions', frequency: 'Very Common' },
  { pattern: 'No Product-Market Fit', description: 'Cool tech solving a problem nobody will pay for', frequency: 'Very Common' },
  { pattern: 'Funding Cliff', description: '5–8 year dev cycles vs 5–7 year VC fund timelines', frequency: 'Common' },
  { pattern: 'Ignoring Operations', description: 'Building the robot is half; service/maintenance kills you', frequency: 'Common' },
  { pattern: 'Going Full-Stack Alone', description: 'Trying to build everything in-house leads to burnout', frequency: 'Common' },
  { pattern: 'Scaling Too Fast', description: 'Before achieving product-market fit', frequency: 'Moderate' },
];

const CHINA_COMPARISON = {
  chinaShare: '80–90% of humanoid shipments (2025)',
  chinaInstallShare: '54% of all new robot installations',
  keyPlayers: [
    { name: 'AgiBot', strength: 'Volume leader, industrial RaaS' },
    { name: 'Unitree', strength: 'Aggressive pricing, rapid iteration' },
    { name: 'UBTECH', strength: 'Established, enterprise (Airbus)' },
    { name: 'Geek+', strength: 'Global leader goods-to-person AMRs' },
  ],
  indiaVsChina: {
    china: ['Manufacturing scale', 'Component dominance', 'Cost leadership', 'Government subsidies'],
    india: ['Vertical specialization', 'Local service/support', 'Regulatory compliance', 'Indo-specific solutions', 'PLI scheme alignment'],
  },
};

const KEY_STATS = [
  { value: '$62B+', label: 'Global Robotics Market (2025)', icon: '🌐' },
  { value: '542K', label: 'Robots Installed in 2024', icon: '🤖' },
  { value: '4.66M', label: 'Robots Operating Worldwide', icon: '⚙️' },
  { value: '$27.6B', label: 'VC Investment in 2025', icon: '💰' },
  { value: '40x', label: 'India vs Korea Density Gap', icon: '📊' },
  { value: '22.8%', label: 'India AgriBot CAGR', icon: '🌱' },
];
