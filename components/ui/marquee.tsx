"use client";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}

export function Marquee({ items, direction = "left", className = "" }: MarqueeProps) {
  // Triple the items to ensure seamless infinite loop
  const repeated = [...items, ...items, ...items];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`inline-flex whitespace-nowrap ${animClass}`}>
        {repeated.map((item, i) => (
          <span
            key={i}
            className="shrink-0 inline-flex items-center gap-6 px-6 text-sm font-medium tracking-[0.18em] uppercase"
          >
            <span
              className="shrink-0 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#F5C518" }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
