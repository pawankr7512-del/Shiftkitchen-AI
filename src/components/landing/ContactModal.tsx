import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = { name: string; email: string; phone: string; business: string; budget: string; message: string; };

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thanks! We'll reach out within 24 hours.");
    reset();
    onClose();
    console.log("Lead", data);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card relative w-full max-w-lg"
          >
            <button onClick={onClose} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-white/10" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-display text-2xl font-bold">Contact Us Now</h3>
            <p className="mt-1 text-sm text-muted-foreground">Get a personalised demo for your business.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-3">
              <input {...register("name", { required: true, maxLength: 80 })} placeholder="Your Name" className="w-full rounded-lg bg-input/60 px-4 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
              {errors.name && <p className="text-xs text-destructive">Name is required</p>}
              <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" className="w-full rounded-lg bg-input/60 px-4 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
              <input {...register("phone", { required: true, maxLength: 20 })} placeholder="Phone (with country code)" className="w-full rounded-lg bg-input/60 px-4 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
              <select {...register("business", { required: true })} className="w-full rounded-lg bg-input/60 px-4 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary">
                <option value="">Business Type</option>
                <option>Cloud Kitchen</option><option>Sweet Shop</option><option>Bakery</option><option>Restaurant</option>
              </select>
              <select {...register("budget", { required: true })} className="w-full rounded-lg bg-input/60 px-4 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary">
                <option value="">Budget Range (INR)</option>
                <option>30k – 50k</option><option>50k – 75k</option><option>75k – 100k</option>
              </select>
              <textarea {...register("message", { maxLength: 500 })} placeholder="Message (optional)" rows={3} className="w-full resize-none rounded-lg bg-input/60 px-4 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
              <button type="submit" disabled={isSubmitting} className="btn-primary-glow w-full rounded-xl py-3 text-sm font-semibold">
                {isSubmitting ? "Sending…" : "Request Free Demo"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
