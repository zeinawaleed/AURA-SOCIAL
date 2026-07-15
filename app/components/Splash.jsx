"use client";

import { useEffect, useState } from "react";
import AuraMark from "./AuraMark";

export default function Splash() {
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState("in"); // in -> hold -> out

  useEffect(() => {
    const holdTimer = setTimeout(() => setStage("hold"), 1200);
    const outTimer = setTimeout(() => setStage("out"), 2500);
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(outTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink overflow-hidden"
      style={{
        opacity: stage === "out" ? 0 : 1,
        transition: "opacity 500ms ease",
      }}
      aria-hidden="true"
    >
      <span className="splash-ring" style={{ animationDelay: "0ms" }} />
      <span className="splash-ring" style={{ animationDelay: "400ms" }} />
      <span className="splash-ring" style={{ animationDelay: "800ms" }} />

      <div
        style={{
          animation:
            stage === "in"
              ? "splashReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              : "splashGlow 1.2s ease-in-out infinite",
          opacity: 0,
        }}
      >
        <AuraMark size="lg" />
      </div>

      <style>{`
        .splash-ring {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          border: 1px solid var(--aura-lime);
          opacity: 0;
          animation: splashRing 1.6s ease-out infinite;
        }
        @keyframes splashRing {
          0% { width: 40px; height: 40px; opacity: 0.6; }
          80% { opacity: 0; }
          100% { width: 900px; height: 900px; opacity: 0; }
        }
        @keyframes splashReveal {
          0% { opacity: 0; transform: scale(0.8) translateY(16px); filter: blur(8px); }
          60% { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        @keyframes splashGlow {
          0%, 100% { filter: drop-shadow(0 0 0px var(--aura-lime)); opacity: 1; }
          50% { filter: drop-shadow(0 0 18px var(--aura-lime)); opacity: 0.92; }
        }
      `}</style>
    </div>
  );
}