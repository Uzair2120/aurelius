/* ==========================================================================
   AURELIUS QUANTITATIVE SYSTEMS — MOCK DATA & FINANCIAL ARCHITECTURE
   Authoritative Datasets, Billionaire Portfolios, Macro Telemetry & AI Agents
   ========================================================================== */

const AureliusData = {
  // 17-Page Master Catalog for Navigation & Command Palette
  pages: [
    { num: "01", title: "Sovereign Landing Experience", url: "index.html", pillar: "Platform", desc: "Autonomous wealth architecture and multi-agent AI engine.", keywords: ["home", "landing", "overview", "sovereign", "core"] },
    { num: "02", title: "The Aurelius Core", url: "architecture.html", pillar: "Platform", desc: "Proprietary multi-agent adversarial reasoning stack.", keywords: ["architecture", "agents", "adversarial", "engine", "algorithm"] },
    { num: "03", title: "Autonomous Advisory Suite", url: "advisory-suite.html", pillar: "Platform", desc: "Voice briefings, encrypted text, and family office analyst APIs.", keywords: ["advisory", "briefing", "voice", "cio", "matrix"] },
    { num: "04", title: "Security & Zero-Knowledge Enclave", url: "security-enclave.html", pillar: "Platform", desc: "Air-gapped dedicated Zurich bunker & custom silicon.", keywords: ["security", "enclave", "zkp", "air-gapped", "hardware", "encryption"] },
    { num: "05", title: "Single & Multi-Family Offices", url: "family-offices.html", pillar: "Sovereign Solutions", desc: "Unified neural ledger consolidating custodians and holding structures.", keywords: ["family office", "sfo", "mfo", "custodians", "rbac", "ledger"] },
    { num: "06", title: "Sovereign Tax & Jurisdictions", url: "sovereign-tax.html", pillar: "Sovereign Solutions", desc: "Continuous day-count tracking and treaty optimization.", keywords: ["tax", "cross-border", "residency", "forfait", "non-dom", "treaties"] },
    { num: "07", title: "Alternative & Illiquid Assets", url: "alternative-assets.html", pillar: "Sovereign Solutions", desc: "Private credit, superyachts, aviation, fine art and freeports.", keywords: ["private equity", "aviation", "superyachts", "fine art", "freeport", "real estate"] },
    { num: "08", title: "Dynasty & Succession AI", url: "dynasty-estate.html", pillar: "Sovereign Solutions", desc: "Century-scale wealth preservation and trust governance.", keywords: ["dynasty", "succession", "trust", "100-year", "heirs", "constitution"] },
    { num: "09", title: "Geopolitical Risk & Tail Hedging", url: "geopolitical-risk.html", pillar: "Sovereign Solutions", desc: "Planetary threat telemetry and automated black-swan hedges.", keywords: ["geopolitical", "macro", "risk", "black-swan", "hedging", "defense"] },
    { num: "10", title: "Monte Carlo Wealth Lab", url: "simulator.html", pillar: "Intelligence & Lab", desc: "Interactive 500-path stochastic modeling and stress-test sandbox.", keywords: ["simulator", "monte carlo", "sandbox", "var", "sharpe", "math"] },
    { num: "11", title: "Anonymized Principal Ledgers", url: "case-studies.html", pillar: "Intelligence & Lab", desc: "Verified quantitative outcomes from active sovereign deployments.", keywords: ["case studies", "ledgers", "results", "verified", "track record"] },
    { num: "12", title: "Quantitative Intelligence", url: "intelligence.html", pillar: "Intelligence & Lab", desc: "Monographs and macroeconomic causal dispatches.", keywords: ["research", "intelligence", "whitepapers", "monographs", "dispatches"] },
    { num: "13", title: "Deep-Dive Research Whitepaper", url: "dispatch-article.html", pillar: "Intelligence & Lab", desc: "Monograph No. 14: Cross-Border Tax Arbitrage in Private Debt.", keywords: ["whitepaper", "article", "monograph", "reading", "tax-loss harvesting"] },
    { num: "14", title: "Institutional Charter & Ethics", url: "charter.html", pillar: "Institution", desc: "Fiduciary manifesto, zero-kickback protocol and leadership.", keywords: ["charter", "ethics", "leadership", "fiduciary", "manifesto"] },
    { num: "15", title: "Capital Tiers & Membership", url: "membership.html", pillar: "Institution", desc: "Capped 150-principal registry and flat infrastructure pricing.", keywords: ["membership", "tiers", "allocation", "pricing", "fee savings"] },
    { num: "16", title: "Request Private Briefing", url: "request-briefing.html", pillar: "Institution", desc: "Encrypted intake flow with simulated PGP session token.", keywords: ["briefing", "consultation", "contact", "pgp", "onboarding"] },
    { num: "17", title: "Live Client Terminal", url: "client-terminal.html", pillar: "Live App", desc: "Full-viewport institutional dashboard with multi-agent console.", keywords: ["terminal", "dashboard", "live", "portfolio", "console", "fiduciary"] }
  ],

  // Live Currency Conversion Matrix
  currencies: {
    USD: { symbol: "$", rate: 1.0000, label: "United States Dollar", format: "en-US" },
    CHF: { symbol: "CHF ", rate: 0.8845, label: "Swiss Franc", format: "de-CH" },
    EUR: { symbol: "€", rate: 0.9215, label: "Eurozone Euro", format: "de-DE" },
    GBP: { symbol: "£", rate: 0.7890, label: "British Pound Sterling", format: "en-GB" },
    SGD: { symbol: "S$", rate: 1.3480, label: "Singapore Dollar", format: "en-SG" },
    XAU: { symbol: "oz ", rate: 0.0003775, label: "Gold (Troy Ounce Spot)", format: "en-US" }
  },

  // Simulated Global Macro Feeds
  macroTelemetry: {
    vix: 13.42,
    vixStatus: "LOW VOLATILITY // REGIME: STABLE",
    us10y: "4.184%",
    bund10y: "2.238%",
    goldSpotUSD: 2648.50,
    brentCrudeUSD: 78.42,
    chfUsdRate: 1.1305,
    enclaveStatus: "AIR-GAPPED // ZK-VERIFIED",
    enclaveNodeZurich: "ZH-ENCLAVE-01 (ACTIVE)",
    enclaveNodeGeneva: "GE-VAULT-04 (SYNCHRONIZED)",
    enclaveProofHash: "0x8e2c7a91bfd59104c8f2a64019de58c14f3b77209d841e2b5e0c679a",
    assetsSupervisedUSD: 412850000000
  },

  // Flagship Billionaire Client Ledger (Simulated for Client Terminal & Modules)
  portfolio: {
    principalId: "PRIN-8841-VON",
    domicile: "Zurich / Singapore",
    baseTotalUSD: 1842910400.00,
    ytdReturnPct: 2.41,
    ytdReturnUSD: 43210850.00,
    volatilityAnnualized: "4.82%",
    sharpeRatio: 2.84,
    sortinoRatio: 4.12,
    maxDrawdown3Yr: "-3.14%",
    var99DailyUSD: 14200000.00,
    annualTaxAlphaBps: 142,

    // Allocations
    allocations: [
      { id: "pe_credit", name: "Private Credit & Special Situations", pct: 27, valueUSD: 497585808.00, targetPct: 25, variance: "+2.0%", custodian: "Lombard Odier / Direct SPV" },
      { id: "public_eq", name: "Direct Global Equities (Direct Indexing)", pct: 25, valueUSD: 460727600.00, targetPct: 25, variance: "0.0%", custodian: "J.P. Morgan Private Bank" },
      { id: "sovereign_debt", name: "Sovereign Bonds & Inflation-Linked", pct: 20, valueUSD: 368582080.00, targetPct: 20, variance: "0.0%", custodian: "UBS Wealth Management" },
      { id: "real_assets", name: "Trophy Real Estate & Freeport Infrastructure", pct: 15, valueUSD: 276436560.00, targetPct: 15, variance: "0.0%", custodian: "Direct Swiss Stiftungs" },
      { id: "venture", name: "Direct Frontier Tech & Space Ventures", pct: 8, valueUSD: 147432832.00, targetPct: 10, variance: "-2.0%", custodian: "Sequoia Heritage / Silicon SPV" },
      { id: "cash_gold", name: "Physical Gold & Tier-1 Liquidity", pct: 5, valueUSD: 92145520.00, targetPct: 5, variance: "0.0%", custodian: "Julius Bär (Zurich Vault)" }
    ],

    // Custodian Breakdown
    custodians: [
      { name: "UBS Wealth Management", city: "Zurich", balanceUSD: 540800000.00, status: "Connected (FIX 4.4)", type: "Tier-1 Custodian Bank" },
      { name: "J.P. Morgan Private Bank", city: "New York", balanceUSD: 485200000.00, status: "Connected (Direct API)", type: "Prime Broker & Custody" },
      { name: "Julius Bär", city: "Geneva", balanceUSD: 395400000.00, status: "Connected (Encrypted SFTP)", type: "Private Banking & Bullion Vault" },
      { name: "Lombard Odier", city: "Singapore", balanceUSD: 274110400.00, status: "Connected (FIX Protocol)", type: "Asian Family Office Hub" },
      { name: "Direct Sovereign Trust SPVs", city: "Vaduz & Cayman", balanceUSD: 147400000.00, status: "ZK-Verified Ledger", type: "Decentralized Legal Enclave" }
    ],

    // Pending Fiduciary Queue Actions
    pendingApprovals: [
      {
        id: "ACT-4091",
        title: "Automated Tax-Loss Harvesting Sleeve Execution",
        urgency: "HIGH",
        jurisdiction: "United States (Substantial Presence)",
        description: "Harvest $4,120,000 in short-term capital losses across S&P direct indexing basket before calendar Q4 treaty reset. Replaces with highly correlated sovereign ETF proxy to eliminate tracking error.",
        taxAlphaGenerated: "$948,000 USD",
        status: "AWAITING_BIOMETRIC_KEY"
      },
      {
        id: "ACT-4092",
        title: "Cross-Border Liquidity Facility Roll",
        urgency: "MEDIUM",
        jurisdiction: "Switzerland / UK Non-Dom",
        description: "Roll CHF 45M Lombard loan at SNB policy rate + 38 bps collateralized against Swiss franc sovereign paper to fund Q4 direct private equity capital calls.",
        interestSavings: "84 bps annualized",
        status: "AWAITING_BIOMETRIC_KEY"
      },
      {
        id: "ACT-4093",
        title: "Geopolitical Tail Risk Convex Put Option Roll",
        urgency: "ROUTINE",
        jurisdiction: "Global Derivatives Desk",
        description: "Re-anchor 6-month Out-Of-The-Money Brent crude calls ($115 strike) and Taiwan Semiconductor put spreads for catastrophic tail indemnity.",
        costBasis: "0.04% portfolio NAV",
        status: "AWAITING_BIOMETRIC_KEY"
      }
    ]
  },

  // The 5 Adversarial AI Sub-Agents
  adversarialAgents: [
    {
      id: "risk_hawk",
      name: "The Risk Hawk",
      role: "Catastrophic Tail Risk & Capital Preservation",
      formula: "max { -VaR_{99.9%} - \\lambda \\cdot CVaR }",
      philosophy: "Underwrite every allocation under the assumption of sovereign debt repudiation, bank clearinghouse holidays, and multi-sigma liquidity droughts.",
      sampleTranscript: "VETO CONDITIONAL: The proposed $65M Gulfstream acquisition via direct unhedged cash creates an acute 72-hour liquidity squeeze during potential simultaneous capital calls from Blackstone Strategic IV ($14.2M) and Carlyle Europe ($9.8M). I require a synchronized CHF Lombard facility backed by Zurich-vaulted Swiss Confederation bonds."
    },
    {
      id: "tax_counsel",
      name: "The Tax Counsel",
      role: "Cross-Border Treaty & Residency Day-Count Arbitrage",
      formula: "\\min \\sum \\tau_i \\cdot \\Delta w_i - \\text{HarvestAlpha}",
      philosophy: "Eliminate statutory friction across 42 tax treaties, holding companies, and double-taxation conventions without crossing anti-avoidance thresholds.",
      sampleTranscript: "STRUCTURE CLEARED: Funding via Zurich SPV entity does not trigger UK remittance rules under FIG Regime Section 41. Recommend executing through the Luxembourg SOPARFI subsidiary to maintain 0% withholding on cross-border interest payments."
    },
    {
      id: "liquidity_architect",
      name: "The Liquidity Architect",
      role: "Duration Matching & Illiquid Cash Flow Modeling",
      formula: "\\text{Ensure } L_{t+k} \\ge \\sum \\text{CapitalCalls}_{t+k} + \\text{Drawdown}",
      philosophy: "Match illiquid private capital calls with multi-currency coupon flows, dividend schedules, and ultra-short government repo lines.",
      sampleTranscript: "OPTIMAL ROUTE IDENTIFIED: Projected Q3 distributions from KKR European Infrastructure ($18.4M) and CVC Capital Partners ($12.1M) provide sufficient cash buffer without needing to liquidate any core equity index positions."
    },
    {
      id: "macro_strategist",
      name: "The Macro Strategist",
      role: "Causal Graph World Model & Black-Swan Anticipation",
      formula: "\\arg\\max \\mathbb{E}[\\Delta U(\\Omega)] \\text{ s.t. Regime Shifts}",
      philosophy: "Continuously adjust sovereign asset exposure based on central bank balance sheets, commodity supercycles, and weaponized trade sanctions.",
      sampleTranscript: "REGIME DETECTED: 10Y US Treasury real yields at 2.15% create structural headwind for high-multiple growth equities. Recommend reweighting 150 bps from US public tech into Swiss-franc sovereign paper and physical gold bullion."
    },
    {
      id: "fiduciary_arbiter",
      name: "The Fiduciary Arbiter",
      role: "Family Constitution & Ethical Determinism",
      formula: "\\mathcal{L}_{\\text{Fiduciary}} = \\mathbb{I}(\\text{Constitution}(\\text{Trade}) == \\text{TRUE})",
      philosophy: "Enforce the principal's immutable multi-generational constitution with zero tolerance for fee conflicts or counterparty compromises.",
      sampleTranscript: "CONSENSUS RATIFIED: Council debate concluded in 38 milliseconds. All 5 agents approve the optimized structure: 0% product commissions, 100% direct custodian execution, zero conflict of interest."
    }
  ],

  // Billionaire Prompt Console Presets & Multi-Agent Responses
  terminalPrompts: [
    {
      id: "prompt_aviation",
      label: "Gulfstream G700 Acquisition ($65M)",
      promptText: "Model liquidity impact of acquiring a $65M Gulfstream G700 via Swiss debt facility vs. equity liquidation across the US sleeve.",
      responses: [
        { agent: "The Risk Hawk", latency: "14ms", text: "Equity liquidation of $65M incurs $14.8M in immediate taxable realized capital gains (federal + state). Swiss debt facility at SNB + 42 bps preserves portfolio compounding and avoids forced equity sale." },
        { agent: "The Tax Counsel", latency: "21ms", text: "Structure aircraft ownership under Maltese SPV operating lease with Geneva holding company. Input VAT fully reclaimable; zero cross-border tax drag." },
        { agent: "The Liquidity Architect", latency: "28ms", text: "Monthly debt servicing: CHF 142,500. Covered 3.8x by recurring coupon income from the German Bund & Swiss Pfandbriefe ladder." },
        { agent: "The Fiduciary Arbiter", latency: "36ms", text: "RECOMMENDATION: Approve CHF 65M Lombard credit facility. Projected 10-year net capital preserved vs. cash liquidation: $22,480,000 USD." }
      ],
      action: "Issue Facility Documentation (Zurich Vault FIX)"
    },
    {
      id: "prompt_tax_harvest",
      label: "Direct Indexing Tax-Loss Harvest",
      promptText: "Execute tax-loss harvest across US direct indexing sleeve and compute net statutory alpha.",
      responses: [
        { agent: "The Tax Counsel", latency: "11ms", text: "Scanned 500 constituents across US sleeve. Identified 38 tax-loss opportunities generating $4,120,000 in short-term capital losses." },
        { agent: "The Risk Hawk", latency: "19ms", text: "Immediate proxy matching: Sold positions simultaneously replaced with custom sector tracking baskets. Total portfolio tracking error maintained at <0.012%." },
        { agent: "The Macro Strategist", latency: "27ms", text: "Statutory tax savings offset realized private equity carry gains from calendar Q3 distributions." },
        { agent: "The Fiduciary Arbiter", latency: "34ms", text: "RECOMMENDATION: Execute batch FIX swap across 38 orders at J.P. Morgan Prime. Net calculated alpha: +142 bps ($948,000 tax savings)." }
      ],
      action: "Execute Batch FIX Orders (38 Swaps)"
    },
    {
      id: "prompt_rate_shock",
      label: "Central Bank 150 bps Hike Stress-Test",
      promptText: "Stress-test consolidated balance sheet against unanticipated 150 bps emergency interest rate hike by the Federal Reserve.",
      responses: [
        { agent: "The Macro Strategist", latency: "12ms", text: "Modeled instantaneous yield curve inversion: 2Y +150 bps, 10Y +85 bps. Broad equity valuation contraction: -4.8%." },
        { agent: "The Liquidity Architect", latency: "18ms", text: "Floating rate private credit sleeve (27% allocation) experiences instantaneous yield expansion: +$6.8M annual gross interest income." },
        { agent: "The Risk Hawk", latency: "26ms", text: "Net portfolio drawdown capped at -1.18% due to gold position, floating credit hedge, and ultra-short sovereign bills." },
        { agent: "The Fiduciary Arbiter", latency: "32ms", text: "CONCLUSION: Balance sheet possesses structural anti-fragility. No emergency rebalancing required." }
      ],
      action: "Export Full Stress-Test Telemetry (PDF/CSV)"
    }
  ],

  // Anonymized Case Studies Data
  caseStudies: [
    {
      id: "cs_european_industrial",
      category: "European Industrial Dynasty",
      title: "Consolidation of a 120-Year-Old Swiss/German Industrial Family Office",
      aum: "$3.2B Liquid Net Worth",
      custodians: "8 Custodian Banks across Zurich, Frankfurt & Vaduz",
      initialState: "Fragmented Excel-based reporting with 14-day lag, $6.8M annual fee drag across private banking tiers, and unharvested tax losses across private equity distribution waterfalls.",
      intervention: "Deployed air-gapped Aurelius Zurich Enclave. Automated multi-custodian FIX feed ingestion, real-time residency tracking between Zurich, London, and St. Moritz, and continuous direct index tax-loss harvesting.",
      savingsTable: [
        { metric: "AUM Percentage Fee", before: "75 bps ($24.0M/yr)", after: "Flat Infrastructure License ($1.2M/yr)", impact: "+$22.8M Saved/yr" },
        { metric: "Tax Alpha Harvested", before: "0 bps (Annual post-hoc)", after: "148 bps (Intra-day algorithmic)", impact: "+$47.3M Saved/yr" },
        { metric: "Reporting Latency", before: "14 Days", after: "0.00ms Real-Time", impact: "Instantaneous Telemetry" }
      ],
      capitalPreserved10Yr: "$384,000,000 USD"
    },
    {
      id: "cs_tech_founder",
      category: "Silicon Valley Decacorn Founder",
      title: "Algorithmic Diversification of a $1.4B Single-Stock Tech Fortune",
      aum: "$1.4B Concentrated Equity",
      custodians: "J.P. Morgan, Morgan Stanley Private Wealth",
      initialState: "Massive single-stock concentration risk (82% of net worth), prohibitive 37% federal + 13.3% state capital gains exposure upon liquidation, and no multi-generational trust architecture.",
      intervention: "Engineered synthetic algorithmic collar with non-recourse sovereign loan. Modeled automated multi-year charitable lead annuity trusts (CLATs) and Puerto Rico Act 60 / Singapore Variable Capital Company (VCC) migration scenario.",
      savingsTable: [
        { metric: "Realized Tax Drag", before: "50.3% ($704M Exposure)", after: "18.2% via Synthetic Staggered Harvest", impact: "+$449M Retained" },
        { metric: "Tail Risk Volatility", before: "54.2% Annualized", after: "7.1% Multi-Asset Hedged", impact: "7.6x Risk Reduction" },
        { metric: "Downside Floor", before: "Unprotected (-80% Max)", after: "Hard 90% Capital Protection Floor", impact: "Zero Bankruptcy Risk" }
      ],
      capitalPreserved10Yr: "$512,000,000 USD"
    },
    {
      id: "cs_gcc_sovereign",
      category: "GCC Sovereign Principal",
      title: "Cross-Border Sanctions Immunity & Petrodollar Neutrality for Gulf Principal",
      aum: "$5.8B Sovereign Family Balance Sheet",
      custodians: "UBS, Lombard Odier Singapore, Dubai International Financial Centre (DIFC)",
      initialState: "Over-reliance on Western clearinghouses, heavy US dollar cash exposure, vulnerability to unilateral jurisdiction sanctions, and lack of real-time physical gold vault ledger tracking.",
      intervention: "Implemented zero-knowledge multi-sovereign routing. 35% re-allocated into physical allocated bullion in Zurich freeports and Singapore SGX vaults, verified via daily ZK cryptographic proofs.",
      savingsTable: [
        { metric: "Clearinghouse Sovereign Risk", before: "100% Western Clearing", after: "Triple Arbitraged (CH, SG, UAE)", impact: "Sanctions Immune" },
        { metric: "Currency Devaluation Drag", before: "-4.2% annualized", after: "+6.8% via Gold & Hard Currencies", impact: "+$638M Alpha" },
        { metric: "Physical Vault Audit", before: "Annual paper audit", after: "Continuous Cryptographic ZK-Audit", impact: "100% Real-Time Proof" }
      ],
      capitalPreserved10Yr: "$920,000,000 USD"
    },
    {
      id: "cs_hedge_fund_gp",
      category: "Global Hedge Fund GP",
      title: "Tax-Efficient Reinvestment of $850M Multi-Strategy Performance Carry",
      aum: "$850M Liquid GP Capital",
      custodians: "Goldman Sachs, Morgan Stanley Prime",
      initialState: "Severe high-bracket ordinary income exposure on performance fees, disjointed angel and private credit investments with unpredictable capital calls and cash drag.",
      intervention: "Architected algorithmic cash buffer utilizing short-term Swiss Pfandbriefe and US T-Bills. Programmed multi-agent liquidity forecasting to automate capital calls with zero cash drag.",
      savingsTable: [
        { metric: "Uninvested Cash Drag", before: "12% Idle Cash ($102M)", after: "<0.5% Idle Cash", impact: "+$5.8M/yr Yield Alpha" },
        { metric: "Lombard Borrowing Spread", before: "SOFR + 140 bps", after: "SNB + 34 bps (Zurich Desk)", impact: "+$1.1M/yr Saved" },
        { metric: "Audit & Compliance Overhead", before: "6 Full-Time Analysts", after: "Autonomous Aurelius Stack", impact: "+$2.4M/yr Operating Savings" }
      ],
      capitalPreserved10Yr: "$144,000,000 USD"
    }
  ],

  // Research Whitepapers & Monographs Data
  monographs: [
    {
      id: "mono_14",
      num: "Monograph No. 14",
      title: "Autonomous Tax-Loss Harvesting Across Multi-Jurisdictional Private Credit Portfolios",
      date: "OCTOBER 2026",
      readTime: "18 MIN READ",
      category: "Sovereign Tax Law",
      author: "Dr. Marc-André von Berg, Chief Quantitative Architect",
      abstract: "An exhaustive mathematical analysis of continuous-time algorithmic loss recognition in illiquid and distressed debt sleeves, proving an empirical +142 bps of annualized post-tax alpha without violating statutory wash-sale rules.",
      featured: true,
      url: "dispatch-article.html"
    },
    {
      id: "mono_13",
      num: "Monograph No. 13",
      title: "Adversarial Multi-Agent Debate as a Fiduciary Guardrail for Multi-Billion Balance Sheets",
      date: "SEPTEMBER 2026",
      readTime: "24 MIN READ",
      category: "Algorithmic Execution",
      author: "Aurelius Architecture Working Group",
      abstract: "Formalizing mathematical game-theoretic proofs that five conflicting objective functions generate Pareto-optimal risk parity superior to traditional human investment committees.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "mono_12",
      num: "Monograph No. 12",
      title: "Century-Scale Purchasing Power: 100-Year Stochastic Simulation of Dynastic Trusts",
      date: "AUGUST 2026",
      readTime: "15 MIN READ",
      category: "Dynastic Governance",
      author: "Helena S. Lindqvist, Head of Succession AI",
      abstract: "Modeling generational dilution, fiat debasement, and philanthropic depletion across four generations under five distinct macro regimes from G1 to G4.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "mono_11",
      num: "Monograph No. 11",
      title: "Zero-Knowledge Custody Verification: Proving Solvency Without Balance Sheet Disclosure",
      date: "JULY 2026",
      readTime: "21 MIN READ",
      category: "Cryptographic Privacy",
      author: "Dr. K. Chen & Zurich Enclave Security Team",
      abstract: "Deploying zk-SNARKs and homomorphic encryption to prove cross-custodian liquidity and regulatory compliance without disclosing underlying holdings to prime brokers or tax authorities.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "mono_10",
      num: "Monograph No. 10",
      title: "Petrodollar Repricing and Non-Western Clearinghouse Geopolitics",
      date: "JUNE 2026",
      readTime: "28 MIN READ",
      category: "Monetary Policy",
      author: "Lord Julian Vance, Macro Risk Advisor",
      abstract: "Analyzing the systemic ramifications of bilateral currency settlements and structural gold accumulation by Gulf and BRICS sovereign wealth funds.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "mono_09",
      num: "Monograph No. 09",
      title: "The Illiquidity Premium Illusion in Late-Stage Private Equity",
      date: "MAY 2026",
      readTime: "16 MIN READ",
      category: "Private Markets",
      author: "Quantitative Markets Group",
      abstract: "Deconstructing subscription lines, delayed NAV marks, and fee drag in Tier-1 buyout funds, revealing real net returns relative to leveraged public synthetic equivalents.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "mono_08",
      num: "Monograph No. 08",
      title: "Freeport Arbitrage: Geneva, Singapore, and Delaware Collateralization Structures",
      date: "APRIL 2026",
      readTime: "14 MIN READ",
      category: "Alternative Assets",
      author: "Asset Tokenization & Valuation Desk",
      abstract: "Using hyper-spectral imagery analysis and non-recourse Lombard loans to transform trophy fine art into liquid, yield-generating collateral.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "mono_07",
      num: "Monograph No. 07",
      title: "Algorithmic Day-Count Optimization Under the 2025/2026 UK Non-Dom Reform",
      date: "MARCH 2026",
      readTime: "22 MIN READ",
      category: "Sovereign Tax Law",
      author: "Sovereign Tax Intelligence Group",
      abstract: "How continuous geo-location and flight plan telemetry protect ultra-high-net-worth principals from inadvertent statutory residence and worldwide taxation.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "mono_06",
      num: "Monograph No. 06",
      title: "Air-Gapped Silicon vs. Public Cloud: Quantitative Vulnerability Modeling",
      date: "FEBRUARY 2026",
      readTime: "19 MIN READ",
      category: "Cryptographic Privacy",
      author: "Hardware Architecture Council",
      abstract: "Hardware telemetry analysis proving side-channel vulnerability in shared cloud infrastructure and the necessity of dedicated on-premise compute nodes.",
      featured: false,
      url: "dispatch-article.html"
    }
  ],

  // Geopolitical Threat Matrix Scenarios
  threatScenarios: [
    {
      id: "threat_taiwan",
      title: "Taiwan Strait Maritime Supply Blockade",
      severity: "CRITICAL",
      probability: "14.2% 2-Yr Probability",
      marketImpact: "Global semiconductor halt, S&P -28%, US 10Y Yield -85 bps (flight to safety), Gold +34%",
      hedges: "Convex Far-OTM Brent crude calls, long physical gold in Singapore SGX vault, short high-beta global semiconductor ETF basket."
    },
    {
      id: "threat_debt_crisis",
      title: "G7 Sovereign Debt Auction Failure & Spread Widening",
      severity: "HIGH",
      probability: "18.5% 3-Yr Probability",
      marketImpact: "Long bond yields spike +125 bps, currency volatility surge, municipal credit distress.",
      hedges: "Shift into Swiss Pfandbriefe, floating-rate sovereign private credit, inverse 30Y Treasury futures collar."
    },
    {
      id: "threat_petrodollar",
      title: "Structural Petrodollar Repricing into Hard Assets",
      severity: "HIGH",
      probability: "32.0% 5-Yr Probability",
      marketImpact: "USD Reserve share declines -6%, commodity indices +45%, sovereign debt fragmentation.",
      hedges: "Physical bullion custody in Zurich & Singapore, direct royalty interests in Norwegian natural gas & Australian lithium."
    },
    {
      id: "threat_eurozone",
      title: "Eurozone Sovereign Spread Fragmentation (BTP/Bund Widening)",
      severity: "MODERATE",
      probability: "22.8% 2-Yr Probability",
      marketImpact: "Italian/Greek spreads blow out to 350 bps, Euro declines -8% vs CHF, European banking stress.",
      hedges: "Overweight Swiss Franc (CHF) cash deposits, long German Bund vs short Italian BTP basis trade."
    },
    {
      id: "threat_clearinghouse",
      title: "Global Interbank Clearinghouse Cyber Freeze",
      severity: "EXTREME",
      probability: "8.1% 3-Yr Probability",
      marketImpact: "48-to-72 hour liquidity paralysis, bilateral settlement seizure, cash repo spikes to 15%.",
      hedges: "Air-gapped dedicated Zurich bullion accounts, local liquidity lines with triple-A rated cantonal banks."
    },
    {
      id: "threat_mineral_ban",
      title: "Critical Rare Earth & Heavy Mineral Export Embargo",
      severity: "MODERATE",
      probability: "41.5% 2-Yr Probability",
      marketImpact: "Aerospace & defense defense supply chains disrupted, industrial input inflation +60%.",
      hedges: "Direct equity stakes in North American mining royalty trusts, physical stockpiling certificates."
    }
  ]
};

// Global formatters and helper utilities
window.AureliusUtils = {
  // Format currency with proper symbol and locale
  formatCurrency: (amountUSD, currencyCode = "USD") => {
    const curr = AureliusData.currencies[currencyCode] || AureliusData.currencies.USD;
    const converted = amountUSD * curr.rate;
    
    if (currencyCode === "XAU") {
      return `${converted.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} oz`;
    }
    
    return `${curr.symbol}${converted.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  },

  // Format compact billions/millions
  formatCompactCurrency: (amountUSD, currencyCode = "USD") => {
    const curr = AureliusData.currencies[currencyCode] || AureliusData.currencies.USD;
    const converted = amountUSD * curr.rate;

    if (currencyCode === "XAU") {
      return `${(converted / 1000).toFixed(1)}k oz`;
    }

    if (Math.abs(converted) >= 1e9) {
      return `${curr.symbol}${(converted / 1e9).toFixed(2)}B`;
    } else if (Math.abs(converted) >= 1e6) {
      return `${curr.symbol}${(converted / 1e6).toFixed(1)}M`;
    }
    return `${curr.symbol}${converted.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  },

  // Active theme helper
  getTheme: () => localStorage.getItem("aurelius_theme") || "obsidian",
  
  // Active currency helper
  getCurrency: () => localStorage.getItem("aurelius_currency") || "USD"
};
