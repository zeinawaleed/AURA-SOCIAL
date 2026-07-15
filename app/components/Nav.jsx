import Link from "next/link";
import AuraMark from "./AuraMark";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-black/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-1.5 flex items-center justify-between">
        <Link href="/">
          <AuraMark size="sm" />
        </Link>
        <nav className="flex items-center gap-6 md:gap-8 text-sm font-semibold uppercase tracking-wide">
          <Link href="/" className="hover:text-lime transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-lime transition">
            About
          </Link>
          <Link href="/industries" className="hover:text-lime transition">
            Work
          </Link>
        </nav>
      </div>
    </header>
  );
}
