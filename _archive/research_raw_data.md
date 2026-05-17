# Robotics Industry Deep Research — Raw Data Compilation
*Last updated: May 16, 2026*

---

## 1. GLOBAL MARKET SIZE & GROWTH

### Overall Robotics Market
| Metric | 2025 Estimate | 2030 Projection | CAGR |
|--------|--------------|-----------------|------|
| Total Robotics | $50B–$74B | $111B–$218B | 7%–20% |
| Industrial Robotics | $27B–$38B | $60B–$78B | 7%–13% |
| Consumer Robotics | $18.4B | ~$70B | ~30% |
| Cobots | ~$1.5B | $3.4B–$7.2B | 19%–28% |
| RaaS | $2.4B–$3.1B | Scaling fast | 18%–24% |
| AMR/Warehouse | Growing fast | ~$60B | High |

### Robot Installations (IFR World Robotics 2025, 2024 data)
- **Global installations:** 542,076 units
- **Operational stock:** ~4.66 million robots (+9% YoY)
- **Asia:** 74% of global installations
- **China alone:** 54% (295,000 units)

### Installations by Industry (2024)
| Industry | Share | Units | YoY Growth |
|----------|-------|-------|------------|
| Electrical/Electronics | 24% | 128,899 | +2% |
| Automotive | 23% | Declining | Negative |
| Metal & Machinery | 16% | 88,777 | +16% |
| Plastic & Chemical | 5% | — | +18% |
| Food & Beverage | 4% | — | +42% |

**Key insight:** Electronics overtook automotive as #1 customer. "General industry" growth offsets auto decline. Food & bev surging at 42%.

---

## 2. ROBOT DENSITY BY COUNTRY (per 10,000 manufacturing employees)

| Country | Density | Context |
|---------|---------|---------|
| South Korea | 1,220 | World leader — electronics/auto |
| Japan | 446 | Major robot manufacturer |
| Germany | ~415 | European leader |
| Western Europe avg | 267 | — |
| North America avg | 204 | — |
| China | 166 | Largest stock (2M units), 54% of new installs |
| Global Average | 132 | — |
| **India** | **~30** | **Massive gap = massive opportunity** |

**Critical insight for India:** At density of 30 vs global average 132, India has a 4.4x gap. Vs South Korea's 1,220, it's a 40x gap. This is the single biggest structural argument for robotics in India.

---

## 3. FUNDING & INVESTMENT LANDSCAPE

### Global Robotics Funding
- **2025 VC investment:** ~$27.6B (PitchBook) / $13.8B (Crunchbase)
- Capital highly concentrated in mega-rounds
- Investment in world models: €1.3B (2024) → €6.5B (2025) — 5x surge

### Top Funded Companies (2025–2026)

| Company | Valuation | Total Raised | Focus |
|---------|-----------|-------------|-------|
| Figure AI | $39B | >$1.9B | Humanoid hardware + AI |
| Skild AI | $14B–$15B | ~$1.7B | Universal robot brain (software) |
| Physical Intelligence | $5.6B→$11B | >$1B | VLA foundation models |
| 1X (NEO) | — | Significant | Home humanoid ($20K / $499/mo) |
| Agility Robotics | — | — | Digit humanoid (GXO/Amazon) |
| Symbotic | Public | — | Warehouse (revenue $1.82B, backlog $22.7B) |
| Locus Robotics | $2B unicorn | — | Collaborative warehouse AMRs |

### Key VC Firms in Robotics

| VC Firm | Thesis | Notable Bets |
|---------|--------|-------------|
| Khosla Ventures | Category-defining, edge autonomy | Physical Intelligence, Field AI, Vayu, Waabi |
| Lux Capital | Contrarian deep tech | Physical Intelligence, Anduril, Applied Intuition |
| Sequoia | Category winners | Skild AI, Physical Intelligence, RobCo |
| a16z | American Dynamism | Figure AI, Physical Intelligence, Shield AI |
| SoftBank | Physical AI ecosystem | ABB ($5.375B), Skild, AutoStore, Berkshire Grey |

### Major M&A
- **SoftBank → ABB Robotics:** $5.375B (Oct 2025, closing mid-2026). Building Physical AI ecosystem.
- **Hugging Face → Pollen Robotics:** Open-source robot hardware
- **Franka Emika → Siling Robotics:** Post-insolvency acquisition

---

## 4. THE TECHNOLOGY SHIFT: VLA FOUNDATION MODELS

### What Changed
Until ~2023: robots programmed task-by-task with separate perception/planning/control modules.
Now: **Vision-Language-Action (VLA)** models unify everything. Single model takes camera images + language instructions → outputs motor commands directly.

### Key Models

| Model | Creator | Breakthrough |
|-------|---------|-------------|
| RT-2 (2023) | Google DeepMind | First major VLA — web-scale pretraining + robot actions |
| π0 (late 2024) | Physical Intelligence | Flow matching for continuous motor output |
| π0.5 / π0.7 (Apr 2026) | Physical Intelligence | Compositional generalization — combines skills for novel tasks |
| GR00T N1/N1.5/N1.6 | NVIDIA | Open, customizable humanoid foundation models |
| SmolVLA (450M params) | Hugging Face/LeRobot | Efficient VLA for consumer hardware |
| GEN-0/GEN-1 | Generalist AI | ~99% success (vs 64% prior), 3x faster, 1hr robot data/task |
| Gemini Robotics | Google DeepMind | 3D spatial + on-device processing |
| Cosmos | NVIDIA | World models for synthetic training data |

### Why This Matters
- **Intelligence layer separating from hardware layer** — SoftBank paid 2.3x revenue for ABB hardware but far higher for Skild's software
- VLAs power ~40% of new robot deployments (2026 est.)
- Edge inference now 10-25Hz on Jetson Thor — no cloud needed
- The "100,000-year data gap" — robots can't scrape the internet like LLMs; physical interaction data is scarce and expensive

---

## 5. THE VALUE CHAIN

### Where Value Lives

```
UPSTREAM (Components)          MIDSTREAM (Software + Integration)       DOWNSTREAM (Services)
─────────────────────          ──────────────────────────────────       ─────────────────────
Actuators/Motors               Control Software                         Deployment/Installation
Sensors (LiDAR, cameras)       AI/Foundation Models                     RaaS subscriptions
Controllers/GPUs               ROS2 Middleware                          After-sales/Maintenance
Power/Batteries                System Integration                       Fleet management
Chassis/End-effectors          Simulation/Synthetic data                Training/Consulting
```

**Value migration:** Moving from atoms → bits. But bits need atoms to deploy.

### Component Dependencies (India Problem)
- High-precision servo motors: mostly imported
- Sensors: mostly imported
- Industrial controllers: mostly imported
- ~60% of robot cost = imported components
- China dominates the component layer

---

## 6. COMPETITIVE MOATS IN ROBOTICS

### What's Defensible

| Moat Type | Description | Example |
|-----------|-------------|---------|
| Data Flywheel | Deployed robots collect data → improve models → better robots → more deployments | Tesla Autopilot model |
| Vertical Specialization | Deep expertise in one domain (pharma, electronics, food) | Covariant (warehouse picking) |
| Full-Stack Integration | Own hardware + software + deployment → capture unique sensor data | Symbotic |
| Workflow Lock-in | Integrated into customer's MES/ERP/WMS → hard to rip out | Locus Robotics |
| Process Power | Ability to turn messy real-world data into automated system improvements | Physical Intelligence |
| SLA + Service Network | Boring but wins enterprise — uptime guarantees | ABB, UR |

### What's NOT Defensible
- Pure algorithm plays (open-source VLAs are catching up)
- "General purpose" without deployment (demo ≠ product)
- Third-party hardware dependence without own perception stack

### 2026 Competitive Reality
| Feature | Old View | New Reality |
|---------|----------|-------------|
| Data Strategy | "More data = better" | High-quality task-relevant feedback data |
| Moat Source | Proprietary algorithms | Operational experience + deployment velocity |
| Hardware | Commodified/outsourced | Integrated full-stack for sensor data capture |
| Market | Broad/general purpose | Vertical-specific, ROI-focused |

---

## 7. BUSINESS MODELS

### CapEx vs RaaS Comparison

| Feature | Traditional | RaaS |
|---------|------------|------|
| Financial Model | CapEx | OpEx |
| Upfront Cost | $50K–$200K/unit | Low/None |
| Scalability | Hard to adjust | Easy scale up/down |
| Maintenance | In-house | Included |
| Tech Updates | New investment | OTA continuous |
| Customer Base | Large enterprises | SMEs + enterprises |

### RaaS Pricing Models
1. **Fixed subscription:** Monthly/annual fee
2. **Usage-based:** Pay per hour operated
3. **Outcome-based:** Pay per pick, per delivery, per scan

### Unit Economics Benchmarks
- **Cobot price range:** $10K–$60K for the arm
- **Integration costs:** 20–40% of total project
- **Simple task payback:** 6–18 months
- **Complex custom:** 30–48 months
- **Target:** ROI < 12–18 months, >95% uptime SLA
- **Throughput improvement:** 15–60% increase
- **Quality improvement:** 40–90% defect reduction

---

## 8. INDIA ROBOTICS LANDSCAPE

### Key Numbers
- 176 industrial robotics startups, 38 funded, 5 at Series A+
- Robot density: ~30 per 10K employees (global avg: 132)
- 2024 funding: $117M+ across 41 deals
- Domestic robots: $12K–$18K vs $40K+ imports

### Top India Startups

| Company | Location | Focus | Funding/Stage |
|---------|----------|-------|---------------|
| CynLr | Bengaluru | Visual Object Intelligence for robotic arms | Seeking $75M, was at $15.2M total |
| Ati Motors | Bengaluru | AMRs for factory material handling | $20M Series B (Jan 2025) |
| Systemantics | Bengaluru | Affordable cobots (SARYA) for MSMEs | — |
| Botsync | — | Heavy-duty AMRs for logistics | — |
| Perceptyne | — | AI robotic arms for electronics assembly | — |
| GreyOrange | Indian-origin, global | Warehouse automation | Later stage |
| Addverb | — | Reliance-backed, mobile robots + ASRS | Significant |
| Niqo Robotics | — | Precision spraying for agriculture | — |
| Miko | — | Companion/education robot (consumer) | — |
| Nymble | — | Robotic kitchen appliances | — |

### Key Institutions
- **ARTPARK @ IISc:** Startup incubation, R&D bridge, ARTgarage testing. MoU with Karnataka for BRAINZ zone.
- **IIT Madras:** Robotics research, startups (your brother's connection)
- **IIITH, IIT Bombay, IIT Delhi:** Various robotics labs

### India Structural Advantages
1. Massive automation gap (30 vs 132 density) = greenfield
2. PLI scheme driving electronics/semiconductor manufacturing
3. Domestic robot cost advantage ($12K–$18K vs $40K+ imports)
4. DST grants for indigenous hardware
5. Growing defense budget (₹7.85 lakh crore, FY2026)
6. Young, tech-savvy workforce

### India Structural Problems
1. Component imports (~60% of cost) — China dependent
2. After-sales service is brutal
3. MSMEs price-shop aggressively
4. Skills gap in mechatronics/system integration
5. Small, fragmented landholdings (agriculture)
6. Infrastructure gaps (power, connectivity in rural)
7. Long enterprise sales cycles

---

## 9. INDIA MANUFACTURING + PLI OPPORTUNITY

### The Setup
- PLI schemes for electronics manufacturing creating massive factory demand
- Foxconn, Tata Electronics, etc. setting up in India
- Need for flexible automation in semiconductor/electronics
- India's robot density gap is most acute in exactly these industries

### Opportunity Areas
| Area | Why |
|------|-----|
| System Integration | Bridge legacy machines to IIoT/AI production lines |
| Component Fabrication | Local sensors, controllers, motors (PLI support) |
| Skills Development | Train workforce in robot operation |
| Affordable Automation | Cobots for SMEs, fast ROI |

---

## 10. VERTICAL DEEP-DIVES

### A. Agriculture (India-Specific)
- **Market:** $630M (2023) → $2.65B by 2030 (22.8% CAGR)
- **Key driver:** Rural labor migration to cities
- **Applications:** Precision spraying (40% input cost reduction), weeding, harvesting
- **Model:** RaaS (pay-per-acre) for smallholders
- **Challenges:** Fragmented land, high upfront cost, rural infra gaps
- **Players:** Niqo Robotics, TartanSense
- **Opportunity:** Drone-based services creating rural entrepreneur income

### B. Electronics/Semiconductor Assembly
- **Driver:** PLI scheme, reshoring
- **Need:** Flexible automation for PCB assembly, wafer handling
- **Player:** Perceptyne
- **Opportunity:** India becoming a manufacturing hub, massive demand for cobots

### C. Pharma/Life Sciences
- **Characteristics:** High-margin, regulated, sticky customers
- **Applications:** Vial filling, plate handling, sample prep
- **Why defensible:** Sterility + traceability = high switching costs
- **Trend:** Cobots alongside technicians

### D. Textile/Garment
- **Status:** India is a global garment hub, near-zero automation
- **Hard problem:** Deformable objects (fabric is notoriously hard for robots)
- **Opportunity:** Automated cutting, sewing, defect detection
- **Impact:** Cycle time reduction from 25–40 days to 15–28 days

### E. Construction
- **Applications:** Masonry, rebar tying, layout marking, 3D printing
- **Track record:** Historically a graveyard for robotics startups
- **But:** Sensors + autonomy + labor scarcity creating convergence
- **Example:** Bedrock hit unicorn status

### F. Inspection
- **Applications:** Power plants, refineries, telecom towers, solar farms
- **Model:** RaaS contracts (recurring revenue)
- **Tech:** Autonomous rovers + drones, ultrasonic testing, thermal imaging

### G. Defense (India)
- **Budget:** ₹7.85 lakh crore (FY2026), 9.5% increase
- **Drone market:** → $5B by end of decade
- **Counter-drone:** 8–10x growth expected
- **Key:** Indigenization mandate favors domestic companies
- **Programs:** iDEX, ADITI grants
- **Export target:** ₹50,000 crore by 2029

### H. Cloud Kitchen/Food Prep
- **Player:** Nymble
- **Opportunity:** India's food delivery ecosystem is massive

---

## 11. CHINA COMPETITION ANALYSIS

### China's Dominance
- **80–90%** of global humanoid robot shipments (2025)
- Leveraging mature electronics supply chain for cost advantage
- 54% of all new industrial robot installations globally

### Key Chinese Players
| Company | Strength |
|---------|----------|
| AgiBot | Volume leader, industrial RaaS |
| Unitree | Aggressive pricing, rapid iteration |
| UBTECH | Established, enterprise (Airbus partnership) |
| Geek+ | Global leader in goods-to-person AMRs |

### China Trends (2026)
- Shifting from "stage performance" to industrial utility
- Hybrid wheeled-legged designs for factory ROI
- Ruggedization: liquid cooling, hot-swappable batteries
- Market shakeout: 150+ companies → consolidation expected
- Customer satisfaction gap: many enterprises still cautious

### India vs China
- China: manufacturing scale, component dominance, cost leadership
- India: can't compete on cost. Must compete on: vertical specialization, local service, regulatory compliance, Indo-specific solutions

---

## 12. CASE STUDIES: HOW WINNERS WON

### Symbotic (Warehouse)
- **Anchor:** Walmart partnership, pilot → multi-site
- **Revenue:** $1.82B FY2024 (+55% YoY)
- **Backlog:** $22.7B
- **Moat:** High-density ASRS system, software revenue
- **Lesson:** Anchor customer + expansion

### Locus Robotics (Collaborative AMR)
- **Model:** RaaS — lowered barriers for 3PLs
- **Scale:** 350+ sites, 5B+ picks, $2B unicorn
- **Growth:** 100M picks in just 40 days (exponential)
- **Moat:** WMS integration, no infrastructure changes needed
- **Lesson:** People-first, fit into existing workflows

### Covariant (Universal AI)
- **Approach:** "Universal Brain" that manipulates unseen objects
- **Partners:** Knapp, ABB, Radial
- **Growth:** 6x in 2022, continued expansion
- **Moat:** Retrofit existing infrastructure
- **Lesson:** AI platform > hardware company

---

## 13. STARTUP FAILURE PATTERNS

### Why Robotics Startups Die
1. **Demo ≠ Deployment:** Impressive prototype, can't survive real world
2. **No product-market fit:** Cool tech, no paying customer
3. **Funding cliff:** 5–8 year dev cycles vs 5–7 year VC funds
4. **Ignoring operations:** Building robot is half; service/maintenance kills
5. **Going full-stack alone:** Burnout, overextended, slow
6. **Prototype → Production gap:** Underestimate DFM/DFA
7. **Scaling too fast:** Before product-market fit
8. **Cloud dependency:** No own core IP

### How to NOT Die
1. Solve integration, not just sell a robot
2. RaaS > one-time hardware sale
3. Simulate extensively before deploying
4. Build offline capability + safety redundancy
5. Focus on proprietary perception/control, not just assembly

---

## 14. PICKS & SHOVELS OPPORTUNITIES

These are software/tools businesses that serve the robotics industry — lower capex, ride the wave:

| Category | Opportunity | Examples |
|----------|-------------|---------|
| Simulation | Synthetic data generation for training | NVIDIA Isaac, custom tools |
| Fleet Management | Multi-vendor robot orchestration | InOrbit, Cogniteam Horizon |
| Data Labeling | Real-factory video-to-SOP annotation | Synphony, custom |
| Teleoperation | Remote robot control tooling | — |
| CAD/Design | Robotics-specific design tools | — |
| Compliance | Hardware certification services | Fuchsia (YC) |
| Component | Actuators, sensors, force/torque | Indigenous manufacturing |
| Training | Workforce upskilling for robot operation | — |

**Why this matters:** A small team can have outsized impact without $50M hardware investment.

---

## 15. HUMANOID TIMELINE

| Period | Status | Price Range |
|--------|--------|-------------|
| 2026–2027 | Factory floors, early commercial | $50K–$250K (enterprise), $4K–$20K (entry) |
| 2028 | Mass commercial adoption begins | Declining |
| 2030 | Scaling + price normalization | $17K–$37K for capable models |
| Post-2030 | Household robots emerge | Car-priced |

- Cumulative global installations: 100K+ units by 2027
- Phased: Industrial → Business Services → Household

---

## 16. OPEN SOURCE & GETTING STARTED

### The LeRobot Ecosystem
- **LeRobot:** Hugging Face's open-source robotics framework (PyTorch)
- **SO-100/101:** 3D-printed 6-DOF arm (~$200)
- **SmolVLA:** 450M param efficient VLA, runs on consumer hardware
- **π0 weights:** Released, can fine-tune

### Getting Started Pipeline
1. Install LeRobot (`pip install lerobot`)
2. Build SO-100 leader-follower arm pair
3. Teleoperate to collect demonstrations
4. Train policy (ACT, SmolVLA, or π0)
5. Test in simulation (Isaac, Gazebo)
6. Deploy on physical arm

### Skills Roadmap
1. **Phase 1:** Linux, Python, C++, Arduino
2. **Phase 2:** ROS2, URDF, Gazebo simulation
3. **Phase 3:** Nav2 navigation, OpenCV
4. **Phase 4:** SLAM, MoveIt2, Jetson deployment
5. **Phase 5:** Portfolio project on GitHub

---

## 17. KEY PEOPLE TO FOLLOW

| Person | Affiliation | Why |
|--------|-------------|-----|
| Chelsea Finn | Stanford / Physical Intelligence | π0 co-creator |
| Sergey Levine | UC Berkeley / Physical Intelligence | VLA pioneer |
| Karol Hausman | Google DeepMind | RT-2 |
| Pieter Abbeel | UC Berkeley / Covariant | Robot learning |
| Fei-Fei Li | Stanford | Spatial intelligence |
| Jim Fan | NVIDIA | GR00T, Foundation Agent |

### Key Papers
- π0, π0.5, π0.7 (Physical Intelligence)
- RT-2 (Google DeepMind)
- GR00T N1 (NVIDIA)
- Open X-Embodiment dataset
- GEN-0/GEN-1 (Generalist AI)

### Conferences
- CoRL, RSS, ICRA, NeurIPS robotics tracks

---

## 18. STRATEGIC FRAMEWORK: WHERE TO PLAY

### The Decision Matrix

```
                    HIGH CAPITAL NEEDED
                         │
        Consumer         │         Humanoids
        Robots           │         General Purpose
        (Vacuum, Mower)  │         (Figure, Tesla)
                         │
   LOW MOAT ─────────────┼───────────── HIGH MOAT
                         │
        Picks &          │         Vertical Industrial
        Shovels          │         (Pharma, Electronics,
        (Software tools) │          Agriculture)
                         │
                    LOW CAPITAL NEEDED
```

### Recommended Quadrant: VERTICAL INDUSTRIAL
- Lower capital than consumer/humanoid
- Higher moat than picks & shovels
- Proven unit economics (12–18 month payback)
- India-specific advantage (PLI, density gap)

### If Capital-Constrained: PICKS & SHOVELS
- Software businesses serving robotics companies
- Lowest capital requirement
- Rides the wave without hardware risk

---

## 19. ACTIONABLE 6–12 MONTH PLAN

1. **Month 1–2:** Build SO-100 arm, run SmolVLA/π0. Get tactile.
2. **Month 2–3:** Visit factories (Peenya, Bommasandra). Talk to plant managers.
3. **Month 3–4:** Connect with ARTPARK, attend events, 20 coffees.
4. **Month 4–6:** Pick ONE vertical. Build a prototype solving a real pain.
5. **Month 6–9:** Run 2–3 pilot conversations with potential customers.
6. **Month 9–12:** When brother's venture spins up, walk in with: prototype + thesis + customer conversations.

### What Makes You Walk In Strong
- Working prototype (not slides)
- Thesis on a specific vertical with numbers
- 3+ customer conversations / LOIs
- Understanding of unit economics for that vertical
