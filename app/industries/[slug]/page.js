import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustryClients } from "../data";

export function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((ind) => ind.slug === slug);
  if (!industry) return notFound();

  const clients = getIndustryClients(industry);

  return (
    <div>
      {/* Hero strip using the first photo */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-ink overflow-hidden">
        <Image
          src={industry.gallery[0]}
          alt={industry.name}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,23,18,0.3) 0%, rgba(8,23,18,0.95) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end max-w-6xl mx-auto px-6 md:px-10 pb-10 md:pb-14">
          <Link href="/industries" className="text-xs uppercase tracking-[0.3em] text-lime mb-4 inline-block hover:underline w-fit">
            ← All Industries
          </Link>
          <h1
            className="font-black leading-[0.95] tracking-tight text-cream mb-3"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontFamily: "var(--font-display)" }}
          >
            {industry.name}
          </h1>
          <p className="text-sage text-base max-w-lg">{industry.tagline}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Client logos row */}
        {clients.length > 0 && (
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-6">Brands in this industry</p>
            <div className="flex flex-wrap gap-4">
              {clients.map((c) => (
                <a
                  key={c.handle}
                  href={`https://instagram.com/${c.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-forest-2 border border-white/10 pl-2 pr-4 py-2 hover:border-lime transition-colors"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-ink">
                    <Image src={c.logo} alt={c.name} width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <span className="text-sm font-semibold">{c.name}</span>
                  <span className="text-xs text-sage">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Masonry-style gallery */}
        <p className="text-xs uppercase tracking-[0.3em] text-sage mb-6">The Work</p>
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {industry.gallery.map((src, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden bg-ink">
              <Image
                src={src}
                alt={`${industry.name} work ${i + 1}`}
                width={600}
                height={800}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
