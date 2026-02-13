"use client";

import { useState } from "react";

/* ─── NAV ─── */
const NAV_ITEMS = [
  { label: "Numbers", href: "#numbers" },
  { label: "Framework", href: "#framework" },
  { label: "Case Studies", href: "#cases" },
  { label: "CelcomDigi", href: "#celcomdigi" },
  { label: "90-Day Plan", href: "#plan" },
  { label: "Experiments", href: "#experiments" },
  { label: "Tools", href: "#tools" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a href="#" className="font-bold text-lg tracking-tight text-navy">
          <span className="text-bcg-green">●</span> Amir Ariff
        </a>
        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          {NAV_ITEMS.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-bcg-green transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="bg-bcg-green text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-bcg-green-dark transition-colors">
            Contact
          </a>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-2">
          {NAV_ITEMS.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-700 hover:text-bcg-green">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-bcg-green">
            Contact →
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-14 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-pattern opacity-60" />
      <div className="absolute inset-0 grid-pattern" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bcg-green/10 text-bcg-green text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-bcg-green animate-pulse" />
          BCG App Growth Hacker
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-navy leading-[1.05]">
          App Growth
          <br />
          <span className="text-bcg-green">Playbook</span>
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-light text-gray-500">
          Amir Ariff <span className="text-bcg-green">×</span> BCG
        </p>

        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          15 years scaling consumer apps — from funnel optimization to lifetime value
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <a href="mailto:ariffseh@gmail.com" className="flex items-center gap-2 hover:text-bcg-green transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            ariffseh@gmail.com
          </a>
          <a href="tel:+60139844412" className="flex items-center gap-2 hover:text-bcg-green transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +60 13-984 4412
          </a>
          <a href="https://linkedin.com/in/amirariff/" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-bcg-green transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>

        <div className="mt-12">
          <a href="#numbers" className="inline-flex items-center gap-2 text-bcg-green font-medium text-sm hover:gap-3 transition-all">
            See the numbers
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── THE NUMBERS ─── */
const STATS = [
  { value: "RM20M", label: "Digital ad revenue generated", sub: "Across portfolio" },
  { value: "200%", label: "Organic engagement lift", sub: "Content & SEO" },
  { value: "2×", label: "MAU growth", sub: "Suria FM app" },
  { value: "25%", label: "Customer engagement increase", sub: "FWD Insurance" },
  { value: "RM17.8M", label: "Digital revenue", sub: "Astro" },
  { value: "6,000", label: "Leads at RM7/lead", sub: "FWD AI chatbot" },
];

function Numbers() {
  return (
    <section id="numbers" className="py-24 px-4 sm:px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        <p className="text-bcg-green font-semibold text-sm tracking-widest uppercase mb-3">Track Record</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">The Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="stat-card bg-navy-light border border-gray-700/50 rounded-2xl p-6 sm:p-8">
              <p className="text-3xl sm:text-4xl font-black text-bcg-green tabular-nums">{s.value}</p>
              <p className="mt-2 text-white font-medium">{s.label}</p>
              <p className="mt-1 text-sm text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GROWTH FRAMEWORK (AARRR) ─── */
const FUNNEL = [
  {
    stage: "Acquisition",
    color: "#00A651",
    icon: "🎯",
    tactics: "SEO, paid media, content marketing",
    proof: "Tripled organic traffic at Suria FM — 400K → 1.6M monthly visits",
  },
  {
    stage: "Activation",
    color: "#00C964",
    icon: "⚡",
    tactics: "Funnel optimization, onboarding flows",
    proof: "Built acquisition-to-conversion funnels at FWD with GA + Looker Studio",
  },
  {
    stage: "Retention",
    color: "#008C45",
    icon: "🔄",
    tactics: "Lifecycle CRM, push/email/SMS, fatigue controls",
    proof: "SFMC journeys at Astro; segmented push campaigns at Suria FM",
  },
  {
    stage: "Revenue",
    color: "#006B35",
    icon: "💰",
    tactics: "Monetization, ARPU & LTV optimization",
    proof: "RM600K → RM1.3M at Star Media; RM17.8M digital revenue at Astro",
  },
  {
    stage: "Referral",
    color: "#004D26",
    icon: "🚀",
    tactics: "Viral mechanics, WhatsApp chatbot",
    proof: "6K leads via AI Raya greeting card chatbot at FWD",
  },
];

function Framework() {
  return (
    <section id="framework" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-bcg-green font-semibold text-sm tracking-widest uppercase mb-3">Methodology</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Growth Framework</h2>
        <p className="text-gray-500 max-w-2xl mb-12">
          The AARRR pirate metrics framework — mapped to real execution across every stage.
        </p>

        {/* Horizontal funnel visual for desktop */}
        <div className="hidden lg:flex gap-1 mb-16">
          {FUNNEL.map((f, i) => (
            <div
              key={i}
              className="funnel-step flex-1 py-4 text-center text-white font-bold text-sm"
              style={{ backgroundColor: f.color, paddingLeft: i === 0 ? "16px" : "28px", paddingRight: "28px" }}
            >
              {f.icon} {f.stage}
            </div>
          ))}
        </div>

        {/* Cards for each stage */}
        <div className="space-y-4">
          {FUNNEL.map((f, i) => (
            <div key={i} className="flex gap-4 sm:gap-6 items-start p-5 sm:p-6 rounded-xl border border-gray-100 hover:border-bcg-green/30 hover:shadow-lg transition-all bg-white">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold"
                style={{ backgroundColor: f.color }}
              >
                {f.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-navy text-lg">{f.stage}</h3>
                  <div className="hidden sm:block h-px flex-1 bg-gray-100" />
                </div>
                <p className="text-sm text-gray-500 mb-2">{f.tactics}</p>
                <p className="text-sm font-medium text-bcg-green">{f.proof}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CASE STUDIES ─── */
interface CaseStudy {
  company: string;
  role: string;
  period: string;
  challenge: string;
  actions: string[];
  results: string[];
}

const CASES: CaseStudy[] = [
  {
    company: "FWD Insurance",
    role: "Digital Product Manager",
    period: "2024–2025",
    challenge: "Optimize insurance acquisition funnel and lifecycle CRM",
    actions: [
      "Built acquisition-to-conversion funnels in GA + Looker Studio / Power BI",
      "Used cohort & segmentation analysis to identify drop-offs",
      "Improved lifecycle CRM targeting across Meta + Google Ads with segment strategies and frequency controls",
    ],
    results: [
      "25% increase in customer engagement",
      "AI-powered Raya greeting card WhatsApp chatbot generated 6,000 leads at RM7/lead",
      "Managed SEO for fwd.com.my improving high-intent acquisition",
    ],
  },
  {
    company: "Astro",
    role: "AVP Digital Business",
    period: "2022–2024",
    challenge: "Scale digital revenue and engagement across multi-brand portfolio",
    actions: [
      "Launched personalized content & lifecycle journeys via SFMC (Journey Builder & Interaction Studio)",
      "Led 20-person Agile squad across product, editorial, and engineering",
      "Standardized event tracking, dashboards, CMS workflows across Astro Awani, Stadium Astro, Gempak, Ulagam, SYOK",
    ],
    results: [
      "Grew digital ad revenue 20% to RM17.8M",
      "Increased CLV 15% and cut LCP by 35%",
      "Doubled organic traffic within 12 months",
    ],
  },
  {
    company: "Star Media / Suria FM",
    role: "Manager Digital",
    period: "2020–2022",
    challenge: "Grow Suria FM app and monetize 100M monthly streams",
    actions: [
      "Funnel optimization, cohort insights, segmented push notifications with timing/frequency/fatigue controls",
      "Launched Kedai Suria e-commerce platform",
      "Initiated podcasts and concert livestreams",
    ],
    results: [
      "2× app downloads and MAU growth",
      "Revenue from RM600K to RM1.3M",
      "RM60K e-commerce revenue in 3 months on RM1K budget",
      "Tripled organic traffic (400K → 1.6M) with 40% audience engagement lift",
    ],
  },
];

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="case-card border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-bcg-green bg-bcg-green/10 px-2.5 py-1 rounded-full">
              CASE {index + 1}
            </span>
            <span className="text-xs text-gray-400">{cs.period}</span>
          </div>
          <h3 className="text-xl font-bold text-navy">{cs.company}</h3>
          <p className="text-sm text-gray-500 mt-1">{cs.role}</p>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-5 border-t border-gray-100 pt-5">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Challenge</p>
            <p className="text-gray-700">{cs.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Actions</p>
            <ul className="space-y-2">
              {cs.actions.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600">
                  <span className="text-bcg-green mt-0.5">▸</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Results</p>
            <ul className="space-y-2">
              {cs.results.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm font-medium text-navy">
                  <span className="text-bcg-green mt-0.5">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function CaseStudies() {
  return (
    <section id="cases" className="py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-bcg-green font-semibold text-sm tracking-widest uppercase mb-3">Proof of Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-12">Case Studies</h2>
        <div className="space-y-4">
          {CASES.map((cs, i) => (
            <CaseStudyCard key={i} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CELCOMDIGI GROWTH OPPORTUNITY ─── */
const CD_PROBLEMS = [
  {
    icon: "⚠️",
    title: "72% Migration Gap",
    stat: "5.5M / 20M",
    desc: "Only 5.5M registered on the new app out of 20M+ subscribers after 3 months. Old Celcom Life & MyDigi apps deprecated Dec 2025. Every unconverted user is a churn risk.",
    severity: "critical",
  },
  {
    icon: "⭐",
    title: "1.6-Star App Store Rating",
    stat: "1.6 / 5.0",
    desc: "7,400+ ratings on iOS App Store with 1.6 stars. #2 in Utilities category but rating is destroying organic installs and brand trust. Negative reviews compound — each 1-star review costs ~20 potential downloads.",
    severity: "critical",
  },
  {
    icon: "💳",
    title: "Batch Payment Removed",
    stat: "Top complaint",
    desc: "Users with multiple family lines can no longer pay all bills at once — must pay each individually. Regression from old apps. Directly hurts high-ARPU family plan users (postpaid, highest LTV segment).",
    severity: "high",
  },
  {
    icon: "📱",
    title: "Multi-Line Visibility Broken",
    stat: "Verified Nov 2025",
    desc: "Users with 3+ numbers under one account can't see all lines after migration. Critical for family plan managers who control 3-5 lines — these are your highest-value customers.",
    severity: "high",
  },
  {
    icon: "🐌",
    title: "App Perceived as Bloated",
    stat: "Play Store reviews",
    desc: "Users report the app is 'unnecessarily heavy' with 'too many bells and whistles.' Top-up flow described as a 'nightmare.' The old apps were lighter and more intuitive.",
    severity: "medium",
  },
  {
    icon: "🔔",
    title: "Shallow Engagement Loops",
    stat: "7-day streak only",
    desc: "Daily streak is a start, but lacks depth. No progressive rewards, no milestone unlocks, no gamification tied to actual usage (pay bill → reward, refer friend → reward). Wednesday 3:21 PM surprise is gimmicky without retention data backing.",
    severity: "medium",
  },
];

const CD_PLAYBOOK = [
  {
    title: "Migration Funnel Rescue",
    subtitle: "Close the 72% gap",
    icon: "🎯",
    actions: [
      "Instrument migration funnel: old app prompt → download → sign up → verify → first action",
      "Identify exact drop-off point (hypothesis: eKYC verification is the wall)",
      "A/B test simplified migration: 'Transfer my account in 1 tap' vs current multi-step flow",
      "Push/SMS campaign to remaining 14.5M users segmented by tenure and plan type",
      "Incentivize migration: bonus data, exclusive rewards only on new app",
    ],
    impact: "Target: 60% migration rate within 6 months (+7M users)",
  },
  {
    title: "App Store Rating Recovery",
    subtitle: "From 1.6★ to 3.5★ in 90 days",
    icon: "⭐",
    actions: [
      "Implement smart review prompts: trigger ONLY after positive moments (successful bill pay, reward claimed, streak milestone)",
      "Never prompt after negative events (failed payment, long load, error screen)",
      "Suppress prompts for users who already rated or dismissed 2×",
      "Build in-app feedback channel — catch complaints BEFORE they hit the App Store",
      "Respond to every 1-2 star review within 24 hours with resolution + 'we fixed it, please update your review'",
      "Ship quick UX fixes (batch payment, multi-line) then trigger 'We listened! Rate us again?' prompt to previous negative reviewers",
    ],
    impact: "Every 1-star increase in rating = ~25% more organic installs",
  },
  {
    title: "Lifecycle CRM Engine",
    subtitle: "Push, SMS, email — done right",
    icon: "📨",
    actions: [
      "Segment users: New migrators, Active payers, Dormant (no open in 14d), Churned (30d+)",
      "Build automated journeys per segment with personalized timing (ML-predicted optimal send time)",
      "Fatigue controls: max 3 push/week, suppress if opened app in last 24h",
      "Bill reminder sequence: D-7 gentle → D-3 reminder → D-1 urgent → D+1 overdue (different tone each)",
      "Re-engagement: 3-touch win-back (push → email → SMS with escalating incentives) for D14 churned users",
    ],
    impact: "Target: 15% improvement in D30 retention, 10% reduction in involuntary churn",
  },
  {
    title: "Engagement & Monetization",
    subtitle: "Turn opens into revenue",
    icon: "💰",
    actions: [
      "Fix batch payment ASAP — directly unblocks NPS recovery for family plan users",
      "Personalize 'For You' section using behavioural cohorts (data-heavy, roamer, entertainment, basic user)",
      "A/B test upsell placement: post-payment 'Add 10GB for RM5?' vs homepage banner vs push notification",
      "Gamify beyond streaks: monthly challenges (refer a friend, try auto-reload, set up roaming), leaderboards for family plans",
      "Cross-sell streaming bundles (Disney+, etc.) at contextually relevant moments — not generic banners",
    ],
    impact: "Target: 8% lift in ARPU, 20% increase in add-on pass adoption",
  },
  {
    title: "Experimentation Infrastructure",
    subtitle: "Build the muscle",
    icon: "🧪",
    actions: [
      "Establish experimentation program: hypothesis template, statistical significance thresholds, guardrail metrics",
      "Target 5-8 experiments per month across funnel, engagement, and monetization",
      "Build shared learnings repository — every test result documented with 'what we learned'",
      "Weekly growth standup: review test results, pipeline new hypotheses, kill losing variants fast",
      "QA checklist for every experiment: audience sizing, runtime calculation, logging verification",
    ],
    impact: "Compound effect: 5 experiments/month × 2% avg lift = 10%+ cumulative improvement per quarter",
  },
];

function CelcomDigi() {
  return (
    <section id="celcomdigi" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-bcg-green font-semibold text-sm tracking-widest uppercase mb-3">Growth Opportunity Analysis</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">CelcomDigi App</h2>
        <p className="text-gray-600 max-w-3xl mb-6">
          Malaysia&apos;s largest telco — 20M+ subscribers, new unified app launched October 2025. 
          Massive growth opportunity hiding in plain sight.
        </p>
        
        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            { label: "Total Subscribers", value: "20M+", sub: "12.9M prepaid · 7.1M postpaid" },
            { label: "App Registered", value: "5.5M", sub: "As of Dec 2025" },
            { label: "App Store Rating", value: "1.6★", sub: "7,400+ ratings (iOS)" },
            { label: "Migration Gap", value: "72%", sub: "14.5M not yet on new app" },
          ].map((m, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-2xl sm:text-3xl font-bold text-navy tabular-nums">{m.value}</p>
              <p className="text-xs font-semibold text-gray-500 mt-1">{m.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Problems Identified */}
        <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-sm">🔍</span>
          Problems Identified
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {CD_PROBLEMS.map((p, i) => (
            <div key={i} className={`rounded-xl p-5 border ${
              p.severity === "critical" ? "bg-red-50 border-red-200" :
              p.severity === "high" ? "bg-amber-50 border-amber-200" :
              "bg-gray-50 border-gray-200"
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{p.icon}</span>
                <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded-full ${
                  p.severity === "critical" ? "bg-red-200 text-red-800" :
                  p.severity === "high" ? "bg-amber-200 text-amber-800" :
                  "bg-gray-200 text-gray-700"
                }`}>{p.severity}</span>
              </div>
              <h4 className="font-bold text-navy text-sm mb-1">{p.title}</h4>
              <p className="text-lg font-bold text-navy mb-2">{p.stat}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Growth Playbook */}
        <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-bcg-green/10 flex items-center justify-center text-sm">📋</span>
          Growth Playbook — What I&apos;d Do
        </h3>
        <div className="space-y-6">
          {CD_PLAYBOOK.map((play, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-bcg-green/40 transition-colors">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">{play.icon}</span>
                  <div>
                    <h4 className="font-bold text-navy text-lg">{play.title}</h4>
                    <p className="text-sm text-gray-500">{play.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {play.actions.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-bcg-green mt-0.5 flex-shrink-0">●</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="bg-bcg-green/5 rounded-lg px-4 py-2 border border-bcg-green/20">
                  <p className="text-sm font-semibold text-bcg-green-dark">📈 {play.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sources */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Sources: CelcomDigi FY2025 earnings report (Feb 2026), Apple App Store (Feb 2026, 7.4K ratings),
            Google Play Store reviews, Reddit r/malaysia (Nov 2025), Lowyat.NET (Oct 2025), Digital News Asia.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── 90-DAY PLAN ─── */
const PLAN_PHASES = [
  {
    days: "1–30",
    title: "Instrument & Baseline",
    color: "#00A651",
    items: [
      "Audit existing funnel instrumentation (events, conversion points)",
      "Baseline all growth KPIs: MAU, D1/D7/D30 retention, conversion rates, ARPU, LTV",
      "Map user journey end-to-end, identify top 3 friction points via cohort analysis",
      "Set up / audit dashboards (weekly + monthly cadence)",
      "Quick win: fix lowest-hanging friction point",
    ],
  },
  {
    days: "31–60",
    title: "Experiment & Optimize",
    color: "#008C45",
    items: [
      "Launch structured experimentation program: hypothesis → test → learn",
      "Run first 3–5 A/B tests on highest-impact funnel stages",
      "Build segment strategies for push/email/SMS: targeting, timing, personalization",
      "Implement suppression & fatigue controls to protect UX",
      "Establish experiment templates and QA checklist",
    ],
  },
  {
    days: "61–90",
    title: "Scale & Systematize",
    color: "#004D26",
    items: [
      "Build reusable playbooks (experiment templates, segmentation standards, learnings repo)",
      "First monthly performance review with clear actions",
      "Identify and prioritize high-ROI levers for in-app engagement & monetization",
      "Document initial cohort findings and LTV improvement trajectory",
      "Propose next quarter's growth roadmap",
    ],
  },
];

function Plan() {
  return (
    <section id="plan" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-bcg-green font-semibold text-sm tracking-widest uppercase mb-3">Roadmap</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">90-Day Growth Plan</h2>
        <p className="text-gray-500 max-w-2xl mb-12">A structured approach to driving measurable growth from day one.</p>

        {/* Timeline connector */}
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-bcg-green via-bcg-green-dark to-[#004D26] rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {PLAN_PHASES.map((p, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute -top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full items-center justify-center text-white font-bold text-sm z-10" style={{ backgroundColor: p.color }}>
                  Day {p.days}
                </div>

                <div className="lg:mt-14 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="lg:hidden inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-white text-xs font-bold" style={{ backgroundColor: p.color }}>
                    Days {p.days}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-4">{p.title}</h3>
                  <ul className="space-y-3">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-600">
                        <span className="text-bcg-green flex-shrink-0 mt-0.5">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIMENT PLAYBOOK ─── */
const EXPERIMENTS = [
  {
    id: "EXP-001",
    title: "Onboarding Completion",
    hypothesis:
      "Reducing onboarding steps from 5 to 3 will increase Day-1 activation by 15%",
    test: "A/B test — Control (5 steps) vs Variant (3 steps, deferred profile completion)",
    primary: "D1 activation rate",
    guardrails: "Profile completion rate at D7",
  },
  {
    id: "EXP-002",
    title: "Push Notification Timing",
    hypothesis:
      "Sending push at user's personal peak-activity hour (vs fixed 10am) will increase open rates by 20%",
    test: "A/B test — Control (fixed time) vs Variant (ML-predicted optimal send time)",
    primary: "Push open rate, D7 retention",
    guardrails: "Unsubscribe rate, app uninstall rate",
  },
  {
    id: "EXP-003",
    title: "Re-engagement Campaign",
    hypothesis:
      "A 3-touch win-back sequence (push → email → SMS) for D14 churned users will recover 8% of dormant users",
    test: "Multivariate — Control (no outreach) vs 3-touch sequence with personalized content",
    primary: "Reactivation rate (return within 7 days)",
    guardrails: "Spam complaints, channel fatigue score",
  },
];

function Experiments() {
  return (
    <section id="experiments" className="py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-bcg-green font-semibold text-sm tracking-widest uppercase mb-3">Sample Experiments</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Experiment Playbook</h2>
        <p className="text-gray-500 max-w-2xl mb-12">
          Structured, hypothesis-driven experiments with clear metrics and guard rails.
        </p>

        <div className="space-y-6">
          {EXPERIMENTS.map((exp) => (
            <div key={exp.id} className="experiment-card bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-bcg-green bg-bcg-green/10 px-2.5 py-1 rounded">
                  {exp.id}
                </span>
                <h3 className="font-bold text-navy text-lg">{exp.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Hypothesis</p>
                  <p className="text-sm text-gray-700">{exp.hypothesis}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Test Design</p>
                  <p className="text-sm text-gray-700">{exp.test}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Primary Metric</p>
                  <p className="text-sm font-medium text-bcg-green">{exp.primary}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Guard Rails</p>
                  <p className="text-sm text-gray-700">{exp.guardrails}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TOOL STACK ─── */
const TOOLS = [
  { name: "GA4 / Firebase", icon: "📊" },
  { name: "Salesforce Marketing Cloud", icon: "☁️" },
  { name: "Braze", icon: "🔥" },
  { name: "Looker Studio / Power BI", icon: "📈" },
  { name: "HubSpot", icon: "🟠" },
  { name: "Google Ads / Meta Ads", icon: "📣" },
  { name: "SQL / Python", icon: "🐍" },
  { name: "A/B Testing", icon: "🧪" },
];

function ToolStack() {
  return (
    <section id="tools" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-bcg-green font-semibold text-sm tracking-widest uppercase mb-3">Capabilities</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-12">Tool Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TOOLS.map((t) => (
            <div key={t.name} className="tool-icon flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 bg-white hover:border-bcg-green/30">
              <span className="text-3xl">{t.icon}</span>
              <span className="text-sm font-medium text-navy text-center">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER CTA ─── */
function Footer() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-navy text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let&apos;s talk <span className="text-bcg-green">growth.</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Ready to bring structured, data-driven growth to BCG&apos;s app portfolio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:ariffseh@gmail.com"
            className="inline-flex items-center gap-2 bg-bcg-green text-white px-6 py-3 rounded-full font-semibold hover:bg-bcg-green-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            ariffseh@gmail.com
          </a>
          <a
            href="tel:+60139844412"
            className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:border-bcg-green hover:text-bcg-green transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +60 13-984 4412
          </a>
        </div>
        <div className="mt-8">
          <a href="https://linkedin.com/in/amirariff/" target="_blank" rel="noopener" className="text-gray-400 hover:text-bcg-green transition-colors text-sm">
            linkedin.com/in/amirariff/
          </a>
        </div>
        <p className="mt-12 text-xs text-gray-600">
          © {new Date().getFullYear()} Amir Ariff. Built for BCG.
        </p>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Numbers />
        <Framework />
        <CaseStudies />
        <CelcomDigi />
        <Plan />
        <Experiments />
        <ToolStack />
        <Footer />
      </main>
    </>
  );
}
