import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import { INDUSTRIES } from "./data";

export default function IndustriesHub() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-lime mb-6">Selected Work</p>
        <h1
          className="font-black leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontFamily: "var(--font-display)" }}
        >
          Industries
          <br />
          we&apos;ve built for.
        </h1>
        <p className="max-w-md text-sage text-sm mb-16">
          Real campaigns, real brands &mdash; explore the work behind each industry.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.slug} delay={i * 80}>
            <Link
              href={`/industries/${ind.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden bg-ink"
            >
              <Image
                src={ind.gallery[0]}
                alt={ind.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,23,18,0.1) 0%, rgba(8,23,18,0.85) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-lime mb-2">
                  {ind.gallery.length} pieces of work
                </p>
                <h2
                  className="text-2xl md:text-3xl font-black text-cream leading-tight mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {ind.name}
                </h2>
                <p className="text-sage text-sm max-w-sm">{ind.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cream group-hover:text-lime transition-colors">
                  Explore
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
