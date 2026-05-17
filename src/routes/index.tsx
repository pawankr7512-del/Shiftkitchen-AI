import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Loader } from "@/components/landing/Loader";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { ContactModal } from "@/components/landing/ContactModal";
import { WorkflowShowcase } from "@/components/landing/WorkflowShowcase";
import {
  Problems, Solution, LiveDemo, BuiltFor, Benefits,
  Pricing, Testimonials, FAQ, ContactForm, FinalCTA, Footer, WhatsAppFab,
} from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("sk_modal_seen");
    if (seen) return;
    const t = setTimeout(() => {
      setModalOpen(true);
      sessionStorage.setItem("sk_modal_seen", "1");
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  const openModal = () => setModalOpen(true);

  return (
    <>
      <Loader />
      <Toaster theme="dark" position="top-center" richColors />
      <Navbar onBookDemo={openModal} />
      <main>
        <Hero onBookDemo={openModal} />
        <Marquee />
        <Problems />
        <WorkflowShowcase />
        <Solution />
        <LiveDemo />
        <BuiltFor />
        <Benefits />
        <Pricing onContact={openModal} />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <FinalCTA onBookDemo={openModal} />
      </main>
      <Footer />
      <WhatsAppFab />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
