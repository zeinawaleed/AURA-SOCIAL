export default function GradientField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          width: 500,
          height: 500,
          background: "var(--aura-lime)",
          top: "-10%",
          left: "-10%",
          animation: "blobFloat1 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl opacity-20"
        style={{
          width: 420,
          height: 420,
          background: "var(--aura-lime)",
          bottom: "-15%",
          right: "-5%",
          animation: "blobFloat2 18s ease-in-out infinite",
        }}
      />
    </div>
  );
}
