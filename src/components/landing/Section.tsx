import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id, eyebrow, title, subtitle, children, className = "",
}: {
  id?: string; eyebrow?: string; title: ReactNode; subtitle?: string; children: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`relative py-16 sm:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-primary">
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-[26px] font-bold leading-tight sm:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-sm text-muted-foreground sm:text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export function FancyCard({
  icon, title, description, cta, gradient,
}: {
  icon: ReactNode; title: string; description: string; cta?: string; gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="glass-card flex h-full flex-col"
    >
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-auto flex items-end justify-between pt-10">
        <div
          className="grid h-11 w-11 place-items-center rounded-xl text-white shadow-lg"
          style={{ background: gradient ?? "linear-gradient(135deg, #ff6b6b, #ac6aff)" }}
        >
          {icon}
        </div>
        {cta && (
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
            {cta} <span aria-hidden>›</span>
          </span>
        )}
      </div>
    </motion.div>
  );
}
