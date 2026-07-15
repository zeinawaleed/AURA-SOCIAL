const FOUNDERS = [
  { name: "Badr Kotamy", role: "Co-Founder" },
  { name: "Mazen Elyamane", role: "Co-Founder" },
];

const PILLARS = [
  {
    n: "01",
    title: "No Fixed Packages",
    copy: "Every brand is unique — different goals, audiences, and challenges. We don't believe one package fits all, so we don't sell one.",
  },
  {
    n: "02",
    title: "Strategy First",
    copy: "We start with listening, research, and a custom Strategy and Action Plan built around what a client actually needs — before anything else.",
  },
  {
    n: "03",
    title: "Honest Value",
    copy: "Only after the plan is finalized do we determine true value and cost — ensuring fairness, transparency, and maximum impact.",
  },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <p className="text-xs uppercase tracking-[0.3em] text-lime mb-6">About Us</p>
      <h1
        className="font-black leading-[0.95] tracking-tight mb-8"
        style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", fontFamily: "var(--font-display)" }}
      >
        A creative partner,
        <br />
        <span className="text-lime">not a fixed package.</span>
      </h1>
      <p className="max-w-2xl text-sage text-base md:text-lg leading-relaxed mb-16">
        Aura is a creative digital marketing agency based in Egypt. In just two
        years we&apos;ve built a strong presence in the market by delivering
        real, measurable results &mdash; without overpromising or exploiting
        clients. Our goal isn&apos;t to sell services. Our goal is to become a
        real growth partner for brands who want to build sustainable success.
      </p>

      {/* How we work */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-6 mb-20">
        {PILLARS.map((p) => (
          <div key={p.n} className="border-t border-white/10 pt-6">
            <span className="text-lime text-sm font-bold">{p.n}</span>
            <h3 className="text-xl font-black mt-3 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              {p.title}
            </h3>
            <p className="text-sage text-sm leading-relaxed">{p.copy}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-20">
        <div className="bg-forest-2 border border-white/10 aura-cut p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-lime mb-4">Mission</p>
          <p className="text-cream text-base leading-relaxed">
            To help brands grow strategically and authentically, creating a
            marketing system that lasts beyond a single campaign &mdash; no
            fixed packages, no blind pricing, only honest value built on real
            strategy and results.
          </p>
        </div>
        <div className="bg-forest-2 border border-white/10 aura-cut p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-lime mb-4">Vision</p>
          <p className="text-cream text-base leading-relaxed">
            To make Aura one of the most trusted and impactful marketing
            agencies in Egypt and the Middle East &mdash; a name that stands
            for creativity, strategy, and integrity.
          </p>
        </div>
      </div>

      {/* Founders */}
      <p className="text-xs uppercase tracking-[0.3em] text-sage mb-8">Founders</p>
      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {FOUNDERS.map((f) => (
          <div
            key={f.name}
            className="bg-forest-2 border border-white/10 aura-cut p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-full bg-lime text-ink font-black flex items-center justify-center text-lg mb-6">
              {f.name.split(" ").map((w) => w[0]).join("")}
            </div>
            <h3
              className="text-2xl font-black mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {f.name}
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-lime">
              {f.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
