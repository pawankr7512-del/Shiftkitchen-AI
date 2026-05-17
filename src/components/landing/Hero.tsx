import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero({ onBookDemo }: { onBookDemo: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-28 sm:pt-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              boxShadow: "0 0 10px var(--color-primary)",
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <motion.div style={{ y: y2, opacity }} className="relative z-10 mx-auto max-w-5xl px-2 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          AI WhatsApp Automation • Built for Food Businesses
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[34px] font-bold leading-[1.08] sm:text-6xl md:text-7xl"
        >
          Automate Your <span className="text-gradient">WhatsApp Orders</span>
          <br /> with SwiftKitchen AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          AI-powered workflows for cloud kitchens, sweet shops, bakeries & restaurants —
          instant orders, 0% missed leads, 24/7 support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            onClick={onBookDemo}
            className="btn-primary-glow inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
          >
            Book Free Demo <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="#demos"
            className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold transition hover:bg-white/10"
          >
            <PlayCircle className="h-4 w-4" /> See How It Works
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute -bottom-32 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-[100%] blur-3xl"
        aria-hidden
      >
        <div className="h-full w-full bg-primary/20" />
      </motion.div>
    </section>
  );
}
