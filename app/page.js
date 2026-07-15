import Link from "next/link";
import AuraMark from "./components/AuraMark";
import Reveal from "./components/Reveal";
import GradientField from "./components/GradientField";

const SERVICES = [
  {
    n: "01",
    title: "Branding",
    copy: "Identity systems, logos, and brand worlds that make a business recognizable at a glance.",
  },
  {
    n: "02",
    title: "Digital Marketing",
    copy: "Content calendars, paid campaigns, and performance marketing built around real growth.",
  },
  {
    n: "03",
    title: "Media Production",
    copy: "Photo and video content that gives every brand a consistent, scroll-stopping presence.",
  },
  {
    n: "04",
    title: "Website Creation",
    copy: "Custom-built websites designed to match a brand's identity and convert visitors into customers.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
        <GradientField />
        <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-lime mb-6">
          Branding · Digital Marketing · Media Production
        </p>
        <h1
          className="font-black leading-[0.95] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)", fontFamily: "var(--font-display)" }}
        >
          Add Aura to
          <br />
          <span className="text-lime">your Aura.</span>
        </h1>
        <p className="max-w-xl text-sage text-base md:text-lg leading-relaxed mb-10">
          What started as a shared vision has grown into a trusted creative
          partner for businesses across real estate, F&amp;B, fashion,
          furniture, and more. We don&apos;t just create marketing campaigns
          &mdash; we build meaningful brand experiences that connect with
          audiences, inspire trust, and drive measurable growth.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/industries"
            className="bg-lime text-ink font-bold text-sm px-6 py-3 aura-cut-sm hover:brightness-95 hover:scale-105 transition"
          >
            See who trusts us
          </Link>
          <Link
            href="/about"
            className="border border-white/20 font-bold text-sm px-6 py-3 aura-cut-sm hover:border-lime hover:text-lime hover:scale-105 transition"
          >
            Meet the founders
          </Link>
        </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="border-t border-white/10 bg-forest-2">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <Reveal>
            <h2 className="text-xs uppercase tracking-[0.3em] text-sage mb-10">
              What we do
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="border-t border-white/10 pt-6 transition-transform duration-300 hover:-translate-y-2">
                  <span className="text-lime text-sm font-bold">{s.n}</span>
                  <h3
                    className="text-2xl font-black mt-3 mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sage text-sm leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
        <Reveal>
          <p className="text-sage text-sm mb-4">Everything your brand needs, under one roof.</p>
          <h2
            className="font-black mb-8"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", fontFamily: "var(--font-display)" }}
          >
            Your brand deserves more than
            <br className="hidden md:block" /> attention. It deserves{" "}
            <span className="text-lime">impact.</span>
          </h2>
          <Link
            href="/industries"
            className="inline-block bg-lime text-ink font-bold text-sm px-6 py-3 aura-cut-sm hover:brightness-95 hover:scale-105 transition"
          >
            View our work ↗
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
