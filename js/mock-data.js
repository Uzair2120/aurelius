/* ==========================================================================
   AURELIUS QUANTITATIVE SYSTEMS — MOCK DATA & FINANCIAL ARCHITECTURE
   Authoritative Datasets, Billionaire Portfolios, Macro Telemetry & AI Agents
   ========================================================================== */

const AureliusData = {
  // 17-Page Master Catalog for Navigation & Command Palette (Plain Language & Accessible)
  pages: [
    { num: "01", title: "Home Overview", url: "index.html", pillar: "Getting Started", desc: "Smart money management and wealth tools made simple.", keywords: ["home", "landing", "overview", "start", "simple"] },
    { num: "02", title: "How Aurelius Works", url: "architecture.html", pillar: "Platform", desc: "Meet your 4 friendly automated money coaches.", keywords: ["how it works", "features", "safety", "saver", "goals"] },
    { num: "03", title: "AI Financial Assistant", url: "advisory-suite.html", pillar: "Platform", desc: "Ask everyday money questions in plain English 24/7.", keywords: ["assistant", "ai coach", "chat", "questions", "advice"] },
    { num: "04", title: "Security & Privacy", url: "security-enclave.html", pillar: "Platform", desc: "Bank-grade 256-bit encryption and privacy guarantees.", keywords: ["security", "safety", "privacy", "bank-grade", "encryption"] },
    { num: "05", title: "Family & Couples Money", url: "family-offices.html", pillar: "Guides", desc: "Manage shared household budgets and financial goals together.", keywords: ["family", "couples", "household", "budget", "shared"] },
    { num: "06", title: "Smart Tax Tips", url: "sovereign-tax.html", pillar: "Guides", desc: "Easy deductions and strategies to keep more of your paycheck.", keywords: ["tax", "deductions", "401k", "ira", "hsa", "savings"] },
    { num: "07", title: "Investing Basics for Beginners", url: "alternative-assets.html", pillar: "Guides", desc: "Learn stocks, index funds, and bonds without Wall St jargon.", keywords: ["investing", "basics", "index funds", "stocks", "bonds"] },
    { num: "08", title: "Retirement & Future Planning", url: "dynasty-estate.html", pillar: "Guides", desc: "Build a comfortable nest egg and future step by step.", keywords: ["retirement", "future", "milestones", "pension", "401k"] },
    { num: "09", title: "Keeping Money Safe", url: "geopolitical-risk.html", pillar: "Guides", desc: "Inflation defense and peace-of-mind investing habits.", keywords: ["safety", "inflation", "protection", "risk", "peace of mind"] },
    { num: "10", title: "Savings & Growth Calculator", url: "simulator.html", pillar: "Interactive Tools", desc: "Interactive compound interest calculator and growth tool.", keywords: ["calculator", "savings", "growth", "interest", "simulator"] },
    { num: "11", title: "Real User Stories", url: "case-studies.html", pillar: "Community", desc: "How everyday people achieved their financial freedom.", keywords: ["stories", "reviews", "results", "testimonials", "customers"] },
    { num: "12", title: "Learning Center", url: "intelligence.html", pillar: "Education", desc: "Beginner-friendly guides on budgeting, saving, and investing.", keywords: ["learning", "guides", "articles", "education", "tips"] },
    { num: "13", title: "Guide: Compound Interest", url: "dispatch-article.html", pillar: "Education", desc: "How compound interest really works with simple visual examples.", keywords: ["compound interest", "guide", "article", "reading", "growth"] },
    { num: "14", title: "Our 5 Ethical Promises", url: "charter.html", pillar: "About Us", desc: "No hidden fees, no percentage cuts, and 100% fiduciary care.", keywords: ["charter", "ethics", "promise", "no fees", "mission"] },
    { num: "15", title: "Pricing & Plans", url: "membership.html", pillar: "Pricing", desc: "Simple, transparent pricing with zero percentage cuts.", keywords: ["pricing", "plans", "starter", "plus", "cost"] },
    { num: "16", title: "Get Started Free", url: "request-briefing.html", pillar: "Getting Started", desc: "Create your free account in 2 minutes. No credit card required.", keywords: ["signup", "start", "free", "register", "join"] },
    { num: "17", title: "Live Dashboard Demo", url: "client-terminal.html", pillar: "Interactive Tools", desc: "Explore Sarah's interactive demo account and AI coach.", keywords: ["demo", "dashboard", "live", "portfolio", "test"] }
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

  // Personal Wealth Portfolio (Realistic, relatable, and simple for everyday users)
  portfolio: {
    principalId: "DEMO-USER-SARAH",
    domicile: "Personal Account",
    baseTotalUSD: 68450.00,
    ytdReturnPct: 12.40,
    ytdReturnUSD: 7540.00,
    volatilityAnnualized: "Low Risk",
    sharpeRatio: 1.84,
    sortinoRatio: 2.12,
    maxDrawdown3Yr: "-1.2%",
    var99DailyUSD: 450.00,
    annualTaxAlphaBps: 240,

    // Allocations
    allocations: [
      { id: "cash_savings", name: "High-Yield Cash Savings (4.5% APY)", pct: 36, valueUSD: 24500.00, targetPct: 35, variance: "+1.0%", custodian: "Ally High-Yield Savings" },
      { id: "index_funds", name: "Low-Cost S&P 500 Index Funds", pct: 47, valueUSD: 32000.00, targetPct: 50, variance: "-3.0%", custodian: "Vanguard / Fidelity" },
      { id: "emergency_reserves", name: "Emergency Safety Reserve", pct: 17, valueUSD: 11950.00, targetPct: 15, variance: "+2.0%", custodian: "Chase Everyday Checking" }
    ],

    // Custodian / Bank Breakdown
    custodians: [
      { name: "Vanguard Total Market Index", city: "Investment Account", balanceUSD: 32000.00, status: "Connected & Growing", type: "Low-Cost Index Funds" },
      { name: "Ally High-Yield Savings", city: "Savings Account", balanceUSD: 24500.00, status: "Connected (4.5% APY)", type: "High-Yield Cash" },
      { name: "Chase Everyday Checking", city: "Checking Account", balanceUSD: 11950.00, status: "Active Primary", type: "Emergency & Bills" }
    ],

    // Pending Goals & Quick Actions
    pendingApprovals: [
      {
        id: "GOAL-101",
        title: "Monthly Automatic Savings Transfer",
        urgency: "ON SCHEDULE",
        jurisdiction: "Recurring Savings",
        description: "Scheduled monthly transfer of $400 into High-Yield Savings to keep your New Car goal on schedule for completion next year.",
        taxAlphaGenerated: "+$400 / mo",
        status: "SCHEDULED"
      },
      {
        id: "GOAL-102",
        title: "Emergency Fund Milestone Reached 🎉",
        urgency: "COMPLETED",
        jurisdiction: "Safety Buffer",
        description: "Your emergency fund has reached $10,000 (covers 5 full months of living costs). You have complete financial peace of mind!",
        interestSavings: "100% Funded",
        status: "COMPLETED"
      },
      {
        id: "GOAL-103",
        title: "Subscription Audit Savings",
        urgency: "TIP",
        jurisdiction: "Monthly Budget",
        description: "You saved $35 this month by cancelling unused fitness and video streaming subscriptions.",
        costBasis: "$420/yr Saved",
        status: "ACTIVE"
      }
    ]
  },

  // Friendly AI Financial Guides (Plain English)
  adversarialAgents: [
    {
      id: "risk_hawk",
      name: "Safety Coach",
      role: "Emergency Fund & Protection",
      formula: "Safety Buffer",
      philosophy: "Always make sure you have 3 to 6 months of living expenses safely stored in cash before taking extra risks.",
      sampleTranscript: "Your emergency fund has $10,000, which covers 5 full months of your rent and essentials. You have a very safe financial foundation!"
    },
    {
      id: "tax_counsel",
      name: "Smart Saver",
      role: "Budget Optimization & Tips",
      formula: "Smart Savings",
      philosophy: "Find easy, painless ways to cut down recurring costs and keep more of your hard-earned paycheck.",
      sampleTranscript: "By putting your idle cash into a 4.5% High-Yield Savings account instead of a 0.01% checking account, you earned an extra $1,102 in interest this year for free."
    },
    {
      id: "liquidity_architect",
      name: "Goal Planner",
      role: "Tracking Life Milestones",
      formula: "Milestone Tracking",
      philosophy: "Break big dreams into small, monthly habits that you can reach easily without feeling restricted.",
      sampleTranscript: "At your steady pace of $400/month, your New Car goal of $20,000 will be completely reached within 14 months!"
    },
    {
      id: "macro_strategist",
      name: "Growth Advisor",
      role: "Long-Term Wealth Building",
      formula: "Compound Growth",
      philosophy: "Harness the power of simple index funds and compound growth so your money works for you over the long term.",
      sampleTranscript: "Your low-cost index investments grew +12.4% this year. That is $3,820 added to your future retirement without working extra hours."
    },
    {
      id: "fiduciary_arbiter",
      name: "Peace of Mind",
      role: "Honest & Transparent Guidance",
      formula: "100% Fiduciary",
      philosophy: "Zero hidden commissions, zero trickery. Plain English advice that puts your financial wellbeing first.",
      sampleTranscript: "All your money remains safely in your own accounts. We never sell your personal information or charge hidden percentage fees."
    }
  ],

  // Plain-English Prompts & Friendly Responses
  terminalPrompts: [
    {
      id: "prompt_aviation",
      label: "🚗 Can I afford to buy a new car this year?",
      promptText: "Can I comfortably buy a $20,000 car without hurting my emergency savings or long-term investments?",
      responses: [
        { agent: "Safety Coach", latency: "12ms", text: "Your Emergency Fund ($10,000) is 100% funded and safe. We will NOT touch this cushion for the car." },
        { agent: "Goal Planner", latency: "18ms", text: "You already have $14,400 saved in your Car Goal. You only have $5,600 left to go!" },
        { agent: "Smart Saver", latency: "24ms", text: "Saving $400/month will complete the remaining amount in 14 months with zero interest or car loan debt." },
        { agent: "Peace of Mind", latency: "32ms", text: "RECOMMENDATION: Yes! You are completely on track. Continue saving steadily, and you will buy the car with cash comfortably." }
      ],
      action: "Keep Automatic Monthly Deposit Active ($400/mo)"
    },
    {
      id: "prompt_tax_harvest",
      label: "🛡️ How big should my emergency fund be?",
      promptText: "How do I know if my emergency fund is large enough?",
      responses: [
        { agent: "Safety Coach", latency: "10ms", text: "A healthy emergency fund should cover 3 to 6 months of basic living essentials (rent, groceries, utilities, healthcare)." },
        { agent: "Smart Saver", latency: "16ms", text: "Your average monthly essential expenses total approximately $2,140." },
        { agent: "Goal Planner", latency: "22ms", text: "A 4-month cushion would be $8,560. Your current savings balance of $10,000 gives you almost 5 full months of security!" },
        { agent: "Peace of Mind", latency: "28ms", text: "RECOMMENDATION: Your emergency buffer is in fantastic shape! You can direct any extra savings toward investments or your vacation goal." }
      ],
      action: "Emergency Cushion Fully Protected"
    },
    {
      id: "prompt_rate_shock",
      label: "📈 What happens if I save an extra $100/mo?",
      promptText: "How much extra wealth will I have if I increase my monthly savings by just $100?",
      responses: [
        { agent: "Growth Advisor", latency: "11ms", text: "An extra $100 per month equals $1,200 per year in fresh contributions." },
        { agent: "Goal Planner", latency: "18ms", text: "Over 10 years, you will deposit an extra $12,000." },
        { agent: "Smart Saver", latency: "25ms", text: "With average 7% annual compound growth, that extra $100/month actually grows into an extra $17,400 in your account!" },
        { agent: "Peace of Mind", latency: "34ms", text: "RECOMMENDATION: That’s $5,400 in pure free interest earned simply by setting aside an extra $25 a week." }
      ],
      action: "Increase Monthly Contribution by $100"
    }
  ],

  // Real Everyday People Success Stories
  caseStudies: [
    {
      id: "cs_emergency_fund",
      category: "First-Time Saver",
      title: "How Sara Built Her First $10,000 Emergency Fund in 8 Months",
      aum: "$10,000 Emergency Buffer",
      custodians: "High-Yield Savings & Everyday Checking",
      initialState: "Constantly stressed by unexpected car and dental bills, zero automated savings, and money scattered across three separate checking accounts.",
      intervention: "Set up Aurelius Safety Coach with a $400/month automated deposit into a 4.5% High-Yield Savings account. Cleared 4 unused streaming subscriptions.",
      savingsTable: [
        { metric: "Monthly Savings Habit", before: "$0 (Erratic)", after: "$450 / month automated", impact: "+$5,400 Saved/yr" },
        { metric: "Cash Yield Earned", before: "0.01% checking ($1/yr)", after: "4.5% High-Yield ($450/yr)", impact: "+$449 Free Interest" },
        { metric: "Financial Stress Level", before: "High (Constant anxiety)", after: "Zero (Peace of mind)", impact: "100% Emergency Fund Complete" }
      ],
      capitalPreserved10Yr: "$10,000 Cash Buffer Achieved"
    },
    {
      id: "cs_family_home",
      category: "Young Family",
      title: "David & Maria Saved $45,000 for Their First Home Down Payment",
      aum: "$45,000 Home Deposit",
      custodians: "Ally Savings & Vanguard Index Funds",
      initialState: "Trying to save for a home downpayment without a clear timeline. Constantly disputing discretionary spending and dining out.",
      intervention: "Activated Aurelius Family Plan. Established a shared 'Dream Home' goal jar with automated payday deposits and visual milestone bars.",
      savingsTable: [
        { metric: "Discretionary Dining Drag", before: "$850 / month", after: "$450 / month optimized", impact: "+$4,800/yr Redirected to Home" },
        { metric: "Goal Progress Clarity", before: "Vague guess", after: "Visual 100% progress bar", impact: "Hit Goal 4 Months Early" },
        { metric: "Total Down Payment", before: "$8,000 saved", after: "$45,000 saved", impact: "Purchased First Home in 2026" }
      ],
      capitalPreserved10Yr: "$45,000 Down Payment Secured"
    },
    {
      id: "cs_freelancer",
      category: "Freelance Professional",
      title: "Marcus Streamlined Irregular Income & Began Index Investing",
      aum: "$32,000 Growing Portfolio",
      custodians: "Chase & Vanguard S&P 500 Index",
      initialState: "Irregular freelance income resulted in feast-and-famine cycles. Kept all savings in cash earning zero return out of fear of market dips.",
      intervention: "Used the Aurelius Growth Simulator to map out a safe 3-month cash buffer, then directed regular monthly surplus into low-cost broad index funds.",
      savingsTable: [
        { metric: "Idle Cash Inflation Loss", before: "-3.5% real loss", after: "+12.4% index growth", impact: "+$3,820 Earned" },
        { metric: "Budget Volatility Buffer", before: "Panic on slow months", after: "Automated cash smoothing", impact: "Predictable monthly cash flow" },
        { metric: "Time Spent Budgeting", before: "6 hours / month", after: "3 minutes / week", impact: "95% Time Saved" }
      ],
      capitalPreserved10Yr: "$32,000 Wealth Built"
    },
    {
      id: "cs_teacher_couple",
      category: "Educator & Public Sector",
      title: "Usman & Ayesha Eliminated Credit Card Debt & Started Retirement",
      aum: "$22,500 Net Wealth Turnaround",
      custodians: "Credit Union & Roth IRA",
      initialState: "Stuck with $7,800 in high-interest credit card debt that eroded their ability to save for their children's future.",
      intervention: "Followed the Aurelius Debt Avalanche blueprint while keeping a $1,500 starter emergency fund intact. Redirected freed-up interest payments straight into a Roth IRA.",
      savingsTable: [
        { metric: "Credit Card Interest Drag", before: "24.9% ($1,940/yr interest)", after: "$0 (Debt Free)", impact: "+$1,940/yr Kept" },
        { metric: "Monthly Retirement Deposit", before: "$0", after: "$300 / month", impact: "+$3,600/yr Compounding" },
        { metric: "Net Worth Growth", before: "-$7,800 (In Debt)", after: "+$22,500 (Positive Wealth)", impact: "Complete Financial Turnaround" }
      ],
      capitalPreserved10Yr: "$30,300 Turnaround"
    }
  ],

  // Beginner-Friendly Financial Guides & Learning Center
  monographs: [
    {
      id: "guide_01",
      num: "Guide 01",
      title: "How Compound Interest Really Works (The 8th Wonder of the World)",
      date: "OCTOBER 2026",
      readTime: "5 MIN READ",
      category: "Beginner Investing",
      author: "Aurelius Education Team",
      abstract: "A simple, visual walkthrough of how saving just $300 a month turns into over $150,000 through compound interest. No complex formulas required.",
      featured: true,
      url: "dispatch-article.html"
    },
    {
      id: "guide_02",
      num: "Guide 02",
      title: "How to Build a 3-to-6 Month Emergency Safety Fund",
      date: "SEPTEMBER 2026",
      readTime: "4 MIN READ",
      category: "Savings & Safety",
      author: "Sarah Jenkins, Financial Coach",
      abstract: "The step-by-step blueprint for building a cash safety cushion that protects your family from unexpected medical bills, car repairs, or job transitions.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "guide_03",
      num: "Guide 03",
      title: "The 50/30/20 Budgeting Rule Explained in Plain English",
      date: "AUGUST 2026",
      readTime: "6 MIN READ",
      category: "Smart Budgeting",
      author: "Aurelius Budgeting Lab",
      abstract: "Divide your monthly income into Needs (50%), Wants (30%), and Savings (20%) to enjoy your life today while securing your future.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "guide_04",
      num: "Guide 04",
      title: "Why Low-Cost Index Funds Beat 90% of Active Stock Pickers",
      date: "JULY 2026",
      readTime: "7 MIN READ",
      category: "Beginner Investing",
      author: "Investment Insights Team",
      abstract: "Why trying to pick individual winning stocks is like finding a needle in a haystack, and why buying the whole haystack via index funds wins every time.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "guide_05",
      num: "Guide 05",
      title: "High-Yield Savings: How to Earn 4.5% on Your Idle Cash",
      date: "JUNE 2026",
      readTime: "4 MIN READ",
      category: "Cash & Savings",
      author: "Aurelius Research",
      abstract: "Traditional banks pay 0.01% on checking accounts. Learn how moving your emergency cash to a high-yield savings account earns you hundreds in free interest.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "guide_06",
      num: "Guide 06",
      title: "Automate Your Savings: Set It Once and Forget It",
      date: "MAY 2026",
      readTime: "5 MIN READ",
      category: "Smart Habits",
      author: "Habits & Psychology Lab",
      abstract: "How setting up automated recurring deposits removes willpower and emotional friction from saving money every payday.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "guide_07",
      num: "Guide 07",
      title: "How to Pay Off Debt While Still Growing Your Savings",
      date: "APRIL 2026",
      readTime: "6 MIN READ",
      category: "Debt & Planning",
      author: "Financial Health Desk",
      abstract: "The smart balance between paying down high-interest credit cards and keeping an essential cash buffer so you never fall back into debt.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "guide_08",
      num: "Guide 08",
      title: "Simple Tax Tips: How to Legally Keep More of Your Paycheck",
      date: "MARCH 2026",
      readTime: "5 MIN READ",
      category: "Taxes Made Easy",
      author: "Tax Guidance Team",
      abstract: "Plain-English explanation of tax-advantaged accounts (401k, IRA, HSA) and how they shield your money from unnecessary taxes.",
      featured: false,
      url: "dispatch-article.html"
    },
    {
      id: "guide_09",
      num: "Guide 09",
      title: "Retirement Basics: Starting in Your 20s, 30s, or 40s",
      date: "FEBRUARY 2026",
      readTime: "7 MIN READ",
      category: "Retirement Planning",
      author: "Retirement Strategy Group",
      abstract: "It is never too early or too late to begin. A simple guide on how much you should aim to save for a comfortable, stress-free retirement.",
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

  // Active theme helper (Default Light)
  getTheme: () => localStorage.getItem("aurelius_theme") || "light",
  
  // Active currency helper
  getCurrency: () => localStorage.getItem("aurelius_currency") || "USD"
};
