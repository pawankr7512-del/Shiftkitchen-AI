import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/shift-kitchen-logo.png";

const links = [
  { label: "Features", href: "#features" },
  { label: "Demos", href: "#demos" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onBookDemo }: { onBookDemo: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6"
      style={{
        background: scrolled ? "oklch(0.1 0.02 285 / 0.7)" : "oklch(0.1 0.02 285 / 0.4)",
        backdropFilter: "blur(20px)",
        border: "1px solid oklch(1 0 0 / 0.08)",
        boxShadow: scrolled ? "0 10px 40px -10px oklch(0 0 0 / 0.5)" : "none",
      }}
    >
      <a href="#top" className="flex items-center gap-2">
        <img src={logo.src} alt="Shift Kitchen AI" className="h-12 w-auto object-contain sm:h-14" />
      </a>

      <div className="hidden items-center gap-1 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <button
          onClick={onBookDemo}
          className="btn-primary-glow rounded-xl px-5 py-2.5 text-sm font-semibold animate-pulse-ring"
        >
          Book Demo
        </button>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 md:hidden"
        aria-label="Toggle menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-2xl glass p-3 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onBookDemo(); }}
            className="btn-primary-glow mt-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
          >
            Book Demo
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
