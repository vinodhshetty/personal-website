"use client";

export function WaveDivider({
  from,
  to,
  flip = false,
}: {
  from: string;
  to: string;
  flip?: boolean;
}) {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} style={{ marginTop: -1, marginBottom: -1 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[50px] md:h-[80px] block"
      >
        <rect width="1440" height="80" className={from} />
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          className={to}
        />
        <path
          d="M0,50 C320,70 640,20 960,50 C1120,65 1320,45 1440,50 L1440,80 L0,80 Z"
          className={to}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export function CurveDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${className}`} style={{ marginTop: -1, marginBottom: -1 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-[30px] md:h-[60px] block"
      >
        <path
          d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
          className="fill-white dark:fill-[#0a0a0a]"
        />
      </svg>
    </div>
  );
}
