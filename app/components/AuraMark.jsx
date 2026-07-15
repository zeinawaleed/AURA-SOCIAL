import Image from "next/image";

export default function AuraMark({ size = "md" }) {
  const sizes = {
    sm: { w: 56, h: 75 },
    md: { w: 150, h: 200 },
    lg: { w: 340, h: 454 },
  };
  const s = sizes[size];

  return (
    <Image
      src="/aura-logo.png"
      alt="Aura Marketing Agency"
      width={s.w}
      height={s.h}
      priority
      className="select-none"
    />
  );
}
