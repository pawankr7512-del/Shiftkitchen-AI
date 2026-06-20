import { motion, AnimatePresence } from "framer-motion";
import { Section, FancyCard } from "./Section";
import {
  MessageSquareText, Clock, AlertCircle, Users, RefreshCcw,
  Sparkles, ListOrdered, ShoppingCart, BadgeCheck,
  Languages, Zap, Plug, ShieldCheck, TrendingUp, Wand2,
  ChevronDown, Star, ArrowRight, Mail, Heart, Play,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import logo from "@/assets/shift-kitchen-logo.png";

/* PROBLEMS */
export function Problems() {
  const items = [
    { icon: <MessageSquareText className="h-5 w-5" />, title: "Too many messages", desc: "Floods of WhatsApp pings during peak hours." },
    { icon: <Clock className="h-5 w-5" />, title: "Slow replies", desc: "Manual responses cost you orders every minute." },
    { icon: <AlertCircle className="h-5 w-5" />, title: "Missed customers", desc: "Leads slip through after midnight or in rush." },
    { icon: <Users className="h-5 w-5" />, title: "No 24/7 support", desc: "Your team can't be online round the clock." },
    { icon: <RefreshCcw className="h-5 w-5" />, title: "Repeated questions", desc: "Same menu, hours, pricing — over and over." },
  ];
  return (
    <Section id="problems" eyebrow="The Problem"
      title={<>Struggling with <span className="text-gradient">Manual WhatsApp Orders?</span></>}
      subtitle="If any of these sound familiar, you're losing revenue every single day.">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <FancyCard key={it.title} icon={it.icon} title={it.title} description={it.desc} cta="Solve it" />
        ))}
      </div>
    </Section>
  );
}

/* SOLUTION */
export function Solution() {
  const cards = [
    { icon: <Sparkles className="h-5 w-5" />, title: "Greeting", desc: "AI sends a warm, branded welcome the second a customer messages.", grad: "linear-gradient(135deg,#ac6aff,#6c5ce7)" },
    { icon: <ListOrdered className="h-5 w-5" />, title: "Menu", desc: "Smart menu sharing with images, prices and AI suggested items.", grad: "linear-gradient(135deg,#ff6b6b,#ac6aff)" },
    { icon: <ShoppingCart className="h-5 w-5" />, title: "Order", desc: "Seamless cart capture, address, payment link — all inside WhatsApp.", grad: "linear-gradient(135deg,#22d3ee,#ac6aff)" },
    { icon: <BadgeCheck className="h-5 w-5" />, title: "Confirmation", desc: "Instant order confirmation, ETA, and live status updates.", grad: "linear-gradient(135deg,#22c55e,#22d3ee)" },
  ];
  return (
    <Section id="features" eyebrow="The Solution"
      title={<>SwiftKitchen AI Handles It All — <span className="text-gradient">Step by Step</span></>}
      subtitle="A complete WhatsApp ordering workflow, fully automated by AI.">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <FancyCard key={c.title} icon={c.icon} title={c.title} description={c.desc} cta="Explore More" gradient={c.grad} />
        ))}
      </div>
    </Section>
  );
}

/* LIVE DEMO */
export function LiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Section id="live-demo" eyebrow="Live Demo"
      title={<>See It In <span className="text-gradient">Action</span></>}
      subtitle="Watch how SwiftKitchen AI handles real customer interactions in seconds.">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-black/40 to-primary/20 flex items-center justify-center group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}>
          {!isPlaying ? (
            <>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-lg">
                <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
              </motion.div>
              <div className="absolute inset-0 rounded-full border-2 border-primary opacity-30 animate-pulse"
                style={{ width: "120px", height: "120px", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
            </>
          ) : (
            <div className="w-full h-full bg-black/60 flex items-center justify-center">
              <p className="text-muted-foreground">Demo video coming soon...</p>
            </div>
          )}
        </div>
        <div className="p-6 space-y-4">
          <h3 className="font-display text-xl font-semibold">Real Conversation Flow</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-xs">👤</div>
              <div className="glass rounded-lg p-3 max-w-xs">
                <p className="text-sm">Hi, do you have margherita pizza?</p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="glass rounded-lg p-3 max-w-xs">
                <p className="text-sm">Yes! Our Margherita is ₹349. Would you like to add it?</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs">🤖</div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-xs">👤</div>
              <div className="glass rounded-lg p-3 max-w-xs">
                <p className="text-sm">Yes, and add a coke too</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* BUILT FOR REAL CHALLENGES */
export function BuiltFor() {
  const items = [
    { icon: <TrendingUp className="h-5 w-5" />, title: "Order Scaling", desc: "Handle 10 or 10,000 orders without adding staff." },
    { icon: <Languages className="h-5 w-5" />, title: "Multilingual", desc: "English, Hindi, Hinglish & regional Indian languages." },
    { icon: <Plug className="h-5 w-5" />, title: "POS Integration", desc: "Plugs into Petpooja, Zomato, Swiggy & more." },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Reliable & Secure", desc: "WhatsApp Business API, enterprise-grade infra." },
    { icon: <Zap className="h-5 w-5" />, title: "Lightning Fast", desc: "Avg. response time under 2 seconds." },
    { icon: <Wand2 className="h-5 w-5" />, title: "No Code Setup", desc: "Live in 48 hours — we handle the entire setup." },
  ];
  return (
    <Section id="built" eyebrow="Built For You"
      title={<>Built to Solve <span className="text-gradient">Real Customer Problems</span></>}
      subtitle="Every feature designed from feedback of 100+ kitchens, bakeries and sweet shops.">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <FancyCard key={it.title} icon={it.icon} title={it.title} description={it.desc} cta="Learn more" />
        ))}
      </div>
    </Section>
  );
}

/* BENEFITS - parallax bg */
export function Benefits() {
  const benefits = [
    "3x faster response time",
    "0% missed orders, 24/7",
    "No coding or tech team needed",
    "Multi-language out of the box",
    "Scales with your business",
    "POS & payment ready",
    "Branded customer experience",
    "Live human handover anytime",
  ];
  return (
    <section id="benefits" className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        aria-hidden
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-primary">Why us</div>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Why Shop Owners <span className="text-gradient">Trust SwiftKitchen AI</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <div className="grid h-8 w-8 place-items-center rounded-lg btn-primary-glow text-xs font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 font-display text-lg font-semibold leading-snug">{b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PRICING */
export function Pricing({ onContact }: { onContact: () => void }) {
  const [yearly, setYearly] = useState(false);
  const tiers = [
    {
      name: "Starter", desc: "AI chatbot, menu sharing, basic order capture",
      monthly: 2499, yearly: 1874, cta: "Get Started",
      features: ["AI WhatsApp chatbot", "Menu & catalog sharing", "Order capture in chat", "Email support"],
      highlight: false,
    },
    {
      name: "Growth", desc: "Advanced workflows, payment links, analytics",
      monthly: 4999, yearly: 3749, cta: "Get Started",
      features: ["Everything in Starter", "Payment links inside WhatsApp", "Multilingual replies", "Analytics dashboard", "Priority support"],
      highlight: true,
    },
    {
      name: "Enterprise", desc: "Custom AI, POS integration, dedicated success",
      monthly: null, yearly: null, cta: "Contact Us",
      features: ["Everything in Growth", "POS / Swiggy / Zomato sync", "Custom AI training", "Dedicated success manager", "SLA & onboarding"],
      highlight: false,
    },
  ];
  return (
    <Section id="pricing" eyebrow="Pricing"
      title={<>Simple, <span className="text-gradient">Honest Pricing</span></>}
      subtitle="Start small, scale without surprises. Yearly plans save 25%.">
      <div className="mb-10 flex justify-center">
        <div className="glass inline-flex rounded-full p-1 text-sm">
          <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 transition ${!yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Monthly</button>
          <button onClick={() => setYearly(true)} className={`flex items-center gap-2 rounded-full px-5 py-2 transition ${yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
            Yearly <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold">SAVE 25%</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((t) => {
          const price = yearly ? t.yearly : t.monthly;
          return (
            <div key={t.name} className={`glass-card flex flex-col ${t.highlight ? "lg:scale-[1.03]" : ""}`}>
              {t.highlight && (
                <div className="mb-3 inline-flex w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">Most Popular</div>
              )}
              <h3 className="font-display text-3xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="my-8">
                {price ? (
                  <div className="flex items-end gap-1">
                    <span className="font-display text-6xl font-bold leading-none">₹{price.toLocaleString()}</span>
                    <span className="pb-2 text-sm text-muted-foreground">/mo</span>
                  </div>
                ) : (
                  <div className="font-display text-4xl font-bold">Let's talk</div>
                )}
              </div>
              <button
                onClick={onContact}
                className={`w-full rounded-xl py-3 text-sm font-semibold transition ${
                  t.highlight ? "btn-primary-glow" : "glass hover:bg-white/10"
                }`}
              >
                {t.cta}
              </button>
              <ul className="mt-8 space-y-3 border-t border-white/5 pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* TESTIMONIALS */
const TESTI = [
  { name: "Rahul Mehta", role: "Owner, Spice Cloud Kitchen", quote: "We added 40% more orders in the first month. The AI never sleeps — and our customers love it." },
  { name: "Priya Sharma", role: "Founder, SugarBloom Sweets", quote: "Festive season was chaos before SwiftKitchen AI. Now WhatsApp runs itself." },
  { name: "Imran Khan", role: "Bakery Bros", quote: "Setup in 2 days. Zero missed orders since. Worth every rupee." },
  { name: "Neha Gupta", role: "Curry Express", quote: "Our team finally focuses on cooking — not chatting all day." },
  { name: "Aakash Verma", role: "Pixel Pizzas", quote: "The multilingual replies in Hinglish are a game changer for our area." },
  { name: "Sneha Iyer", role: "Owner, Madras Tiffin Co.", quote: "Order volumes doubled in 3 weeks. The setup team made it effortless." },
];

export function Testimonials() {
  const loop = [...TESTI, ...TESTI];
  return (
    <Section id="testimonials" eyebrow="Testimonials"
      title={<>Loved by <span className="text-gradient">100+ Businesses</span></>}>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <motion.div
          className="flex gap-5 py-2 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {loop.map((t, idx) => (
            <div key={idx} className="shrink-0 w-[300px] sm:w-[360px] md:w-[400px]">
              <div className="glass-card flex h-full flex-col">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 font-display text-lg leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full btn-primary-glow font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* FAQ */
const FAQS = [
  { q: "How does the setup work?", a: "We connect your WhatsApp Business number, train the AI on your menu and tone, and go live within 48 hours." },
  { q: "Which languages are supported?", a: "English, Hindi, Hinglish and most major Indian regional languages out of the box." },
  { q: "What is the pricing?", a: "Plans start at ₹2,499/month. Yearly billing saves 25%. Enterprise is custom — talk to us." },
  { q: "Do I need a developer?", a: "No. Our team handles the entire setup, integration and training for you." },
  { q: "Can it integrate with my POS?", a: "Yes — Petpooja, Zomato, Swiggy and most major POS systems are supported." },
  { q: "Is my customer data safe?", a: "We use the official WhatsApp Business API with enterprise-grade encryption and storage." },
  { q: "Can a human take over a chat?", a: "Anytime. Your team can jump in from a single dashboard whenever needed." },
  { q: "Do you offer a free trial?", a: "Yes — book a free demo and we'll set up a sandbox for your business." },
];
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ"
      title={<>Questions, <span className="text-gradient">Answered</span></>}>
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => (
          <div key={i} className="glass rounded-2xl">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
              <span className="font-display text-base font-semibold sm:text-lg">{f.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* CONTACT FORM */
type ContactData = { name: string; email: string; phone: string; business: string; budget: string; message?: string };
export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactData>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const onSubmit = async (data: ContactData) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Got it! We'll be in touch shortly.");
    console.log("Lead", data);
    reset();
  };
  return (
    <Section id="contact" eyebrow="Get Started"
      title={<>Setup Your <span className="text-gradient">Automation Today</span></>}
      subtitle="Tell us about your business — we'll send a personalised demo within 24 hours.">
      <div className="mx-auto max-w-2xl">
        {!mounted ? (
          <div className="glass-card h-[520px] animate-pulse" aria-hidden />
        ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="glass-card space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input {...register("name", { required: true })} placeholder="Your Name *" className="w-full rounded-lg bg-input/60 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
              {errors.name && <p className="mt-1 text-xs text-destructive">Required</p>}
            </div>
            <div>
              <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email *" className="w-full rounded-lg bg-input/60 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
              {errors.email && <p className="mt-1 text-xs text-destructive">Valid email required</p>}
            </div>
          </div>
          <input {...register("phone", { required: true })} placeholder="Phone *" className="w-full rounded-lg bg-input/60 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
          <select {...register("business", { required: true })} className="w-full rounded-lg bg-input/60 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-primary">
            <option value="">Business Type *</option>
            <option>Cloud Kitchen</option><option>Sweet Shop</option><option>Bakery</option><option>Restaurant</option>
          </select>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Budget Range</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {["30k – 50k", "50k – 75k", "75k – 100k"].map((b) => (
                <label key={b} className="cursor-pointer">
                  <input type="radio" value={b} {...register("budget", { required: true })} className="peer sr-only" />
                  <div className="rounded-lg border border-white/10 bg-input/40 px-4 py-3 text-center text-sm transition peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary">
                    ₹ {b}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <textarea {...register("message", { maxLength: 500 })} rows={4} placeholder="Anything else? (optional)" className="w-full resize-none rounded-lg bg-input/60 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
          <button type="submit" disabled={isSubmitting} className="btn-primary-glow inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold">
            {isSubmitting ? "Sending…" : <>Get My Free Demo <ArrowRight className="h-4 w-4" /></>}
          </button>
        </form>
        )}
      </div>
    </Section>
  );
}

/* FINAL CTA */
export function FinalCTA({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-70" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[30px] font-bold leading-tight sm:text-6xl">
          Start Automating<br />
          Before Your <span className="text-gradient">Competitors</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm text-muted-foreground sm:text-base">
          Join 100+ businesses that are already thriving with AI WhatsApp automation. Your first month is free with setup.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
          <button onClick={onBookDemo} className="btn-primary-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold sm:w-auto sm:py-4">
            <Zap className="h-4 w-4" /> Book Free Demo
          </button>
          <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 px-8 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/5">
            <ArrowRight className="h-4 w-4" /> Get in Touch
          </a>
        </div>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
          No Credit Card Required. Setup Takes 24 Hours.
        </p>
      </div>
    </section>
  );
}

/* FOOTER */
export function Footer() {
  const cols: { title: string; links: { label: string; href: string }[] }[] = [
    { title: "Product", links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ]},
    { title: "Company", links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ]},
    { title: "Legal", links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ]},
  ];
  return (
    <footer className="border-t border-white/5 bg-black/60 px-4 pb-8 pt-12 sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <img src={logo.src} alt="Shift Kitchen AI" className="h-16 w-auto object-contain sm:h-20" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI-powered WhatsApp automation for restaurants, bakeries, sweet shops, and cloud kitchens across India.
            </p>
            <a href="mailto:SwiftKitchenai@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              <Mail className="h-4 w-4" />
              <span>SwiftKitchenai@gmail.com</span>
            </a>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-foreground">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-primary/80 transition hover:text-primary">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground sm:mt-14 sm:flex-row sm:text-left">
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> by <span className="font-semibold text-foreground">Pawan Kumar</span>
          </p>
          <p>© 2026 SwiftKitchen AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* WHATSAPP FAB */
export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919315571639?text=Hi%20Welcome%20to%20ShiftKitchen%20AI,%20How%20can%20I%20Help%20You"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-2xl"
      style={{
        background: "linear-gradient(135deg,#25D366,#128C7E)",
        boxShadow: "0 0 0 0 rgba(37,211,102,0.6)",
        animation: "pulse-ring 2s infinite",
      }}
    >
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512"
  className="h-7 w-7 fill-white"
>
  <path d="M380.9 97.1C339-3.1 214.8-33.5 123.1 31.2S-12.5 214.8 52.2 306.5L0 480l178.2-46.7c89.2 48.5 201.8 16.8 255.4-72.4 53.6-89.1 31.7-203.5-52.7-263.8zM224 392c-30.5 0-60.2-8.2-86.2-23.8l-6.1-3.6-63.5 16.7 17.1-62.5-4-6.4C49.8 258.8 39 229.3 39 197.5 39 107.2 111.1 35 201.4 35S363.8 107.1 363.8 197.5 291.7 359.9 201.4 359.9zM360.5 163.3c1.1 3.1-1.9 6.2-4.8 7.3-1.4.6-28.4 13.8-42 19.8-4.2 1.9-8.8.5-11.4-4.8-3.3-5.8-9.5-16.5-11.9-20.2-2.2-3.2-5.6-4.8-9.1-3.6-7 2.3-28.5 11.3-47 27.1-3 2.3-7 1.6-9.7-.3-2.8-2.1-10.7-11.3-13.6-15.2-3.9-4.2-7.5-3.6-10.6-3.6-3.3 0-6.6.1-10 .1-3.1.1-6.9 1.1-9.7 4.5-3 3.6-11.6 11.8-11.6 28.7 0 16.8 9.4 33.3 10.7 35.6 1.3 2.3 18.5 28.9 44.9 40.4 6.5 3 11.5 4.8 15.4 6.2 6.6 2.1 12.6 1.8 17.4 1.1 5.3-.8 16.3-6.7 18.6-13.1 2.4-6.5 2.4-12.1 1.7-13.1-.7-1.1-2.6-1.8-4.8-3z" />
</svg>
    </a>
  );
}
