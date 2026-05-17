const stats = [
  "Instant Order Capture",
  "0% Missed Leads",
  "100+ Businesses Automated",
  "Multi-Language Support",
  "3x Faster Response",
  "24/7 Availability",
];

export function Marquee() {
  const items = [...stats, ...stats];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-black/40 py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-12 text-sm font-medium tracking-wider text-muted-foreground sm:text-base">
            <span className="font-display text-foreground">{s}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
