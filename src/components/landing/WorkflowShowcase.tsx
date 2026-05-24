import { motion } from "framer-motion";
import { useState } from "react";
import workflowImg from "@/assets/showcase-workflow.png";
import leadsImg from "@/assets/showcase-leads.png";
import mcpImg from "@/assets/showcase-mcp.jpg";

const SLIDES = [
  {
    img: workflowImg,
    title: "Visual AI Workflow",
    desc: "Drag-and-drop n8n workflow connecting WhatsApp, AI Agent, memory, sheets and tools — all visual, no code.",
  },
  {
    img: leadsImg,
    title: "Auto-Captured Leads & Orders",
    desc: "Every chat order auto-logged to Google Sheets with customer, item, quantity and status — ready for your kitchen.",
  },
  {
    img: mcpImg,
    title: "Smart MCP Orchestration",
    desc: "Model Context Protocol routes each message to the right tool — create, update, notify — in milliseconds.",
  },
];

export function WorkflowShowcase() {
  const [paused, setPaused] = useState(false);
  const loop = [...SLIDES, ...SLIDES];
  const totalDuration = SLIDES.length * 10; // ~4s per card

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-14 sm:px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Behind the Scenes
        </div>
        <h2 className="font-display text-[26px] font-bold sm:text-5xl">
          The <span className="text-gradient">Automation Stack</span> Powering Every Order
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
          A peek inside the visual workflows, lead sheets and AI orchestration that run silently behind your WhatsApp.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex w-max py-4"
          animate={paused ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: totalDuration, ease: "linear", repeat: Infinity }}
        >
          {loop.map((s, i) => (
            <div key={i} className="w-[88vw] max-w-[720px] shrink-0 px-3 sm:px-4">
              <div className="glass-card group flex h-full flex-col p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(172,106,255,0.5)] sm:p-5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
                  <img
                    src={s.img.src}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="px-1 pb-1 pt-4 sm:pt-5">
                  <p className="font-display text-base font-semibold leading-tight sm:text-xl">{s.title}</p>
                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground sm:text-sm">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}