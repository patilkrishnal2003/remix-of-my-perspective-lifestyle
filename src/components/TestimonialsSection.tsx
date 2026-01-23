import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";
import { cn } from "@/lib/utils";

type Filter = "all" | "google";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setCount(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return count;
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = useMemo(
    () => (filter === "all" ? testimonials : testimonials.filter((t) => t.platform === filter)),
    [filter, testimonials]
  );

  const visible = useVisibleCount();
  const [idx, setIdx] = useState(0);
  const n = filtered.length;

  const wrap = (i: number) => (n === 0 ? 0 : (i + n) % n);
  const next = () => setIdx((i) => wrap(i + 1));
  const prev = () => setIdx((i) => wrap(i - 1));

  const page = Array.from({ length: Math.min(visible, n) }, (_, k) => filtered[wrap(idx + k)]);
  const centerRel = Math.floor(page.length / 2);

  // Auto-advance carousel
  useEffect(() => {
    if (n <= visible) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [n, visible]);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Client Reviews
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>

          {/* Reviews badge */}
          <div className="flex justify-center mt-6">
            <span className="px-4 py-2 text-sm rounded-full bg-foreground text-background">
              Reviews
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-visible px-4 pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
                style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}
              >
                {page.map((t, i) => (
                  <TestimonialCard key={t.id} t={t} highlight={i === centerRel} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          {n > visible && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
