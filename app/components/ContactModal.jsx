"use client";

import { useState } from "react";

const IG_URL = "https://www.instagram.com/aura.agencyyy";

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-lime text-ink font-bold text-sm px-5 py-3 aura-cut-sm hover:brightness-95 transition"
      >
        Contact Us
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm px-6"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-forest-2 aura-cut max-w-sm w-full p-8 text-center border border-white/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-lime mb-3">
              Let's talk
            </p>
            <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Ready to add Aura to your Aura?
            </h3>
            <p className="text-sm text-sage mb-2">
              Cairo &amp; Alexandria, Egypt
            </p>
            <p className="text-sm text-sage mb-2">
              01227558300 &middot; 01012393590
            </p>
            <p className="text-sm text-sage mb-6">
              aura.marketing.agencyy@gmail.com
            </p>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-lime text-ink font-bold text-sm px-6 py-3 aura-cut-sm hover:brightness-95 transition"
            >
              Message us on Instagram ↗
            </a>
            <button
              onClick={() => setOpen(false)}
              className="block mx-auto mt-4 text-xs text-sage hover:text-cream transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
