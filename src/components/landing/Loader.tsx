import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const KEY = "sk_loader_seen";

export function Loader() {
  // Start hidden to avoid SSR/hydration flicker; decide on mount.
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem(KEY);
    if (seen) return;
    setShow(true);
    sessionStorage.setItem(KEY, "1");
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex h-24 w-24 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span
              className="absolute inset-2 rounded-full border-2 border-primary/60"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ borderTopColor: "transparent", borderRightColor: "transparent" }}
            />
            <span className="font-display text-2xl font-bold text-gradient">SK</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-display text-lg tracking-wide text-muted-foreground"
          >
            SwiftKitchen <span className="text-primary">AI</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
