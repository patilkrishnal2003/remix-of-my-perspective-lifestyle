import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, DollarSign, Settings2, Code2, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "general", label: "General", icon: HelpCircle },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "process", label: "Process", icon: Settings2 },
  { id: "technical", label: "Technical", icon: Code2 },
  { id: "support", label: "Support", icon: Headphones },
];

const faqs: Record<string, { q: string; a: string }[]> = {
  general: [
    { q: "How long does a typical project take?", a: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation." },
    { q: "Do you work with clients remotely?", a: "Yes! We're a remote-first company and have successfully delivered projects for clients worldwide. We use modern collaboration tools to ensure smooth communication regardless of location." },
    { q: "What industries do you specialize in?", a: "We work across diverse industries including healthcare, fintech, e-commerce, education, and logistics. Our cross-industry experience lets us bring innovative solutions from one domain to another." },
  ],
  pricing: [
    { q: "What is your payment structure?", a: "We typically work with a milestone-based payment structure. A percentage is due upfront, with remaining payments tied to project milestones. We're flexible and can discuss arrangements that work for your budget." },
    { q: "Do you offer fixed-price or hourly billing?", a: "We offer both models. Fixed-price works well for clearly defined projects, while time-and-materials is ideal for evolving scopes. We'll recommend the best fit during our discovery phase." },
    { q: "Are there any hidden costs?", a: "Absolutely not. We provide transparent, detailed proposals upfront. Any additional scope is discussed and agreed upon before work begins, so there are never surprises on your invoice." },
  ],
  process: [
    { q: "What does your development process look like?", a: "We follow an agile methodology with 2-week sprints. This includes discovery, design, development, testing, and deployment phases — with regular check-ins and demos throughout." },
    { q: "How do you handle project communication?", a: "You'll have a dedicated project manager and access to our collaboration tools. We provide weekly progress reports, sprint demos, and are available for ad-hoc calls whenever needed." },
    { q: "Can you work with our existing team?", a: "Absolutely. We offer team augmentation services where our developers integrate with your existing team. We can also provide technical consulting to guide your internal development efforts." },
  ],
  technical: [
    { q: "What technologies do you use?", a: "We use modern, battle-tested stacks including React, TypeScript, Node.js, Python, and cloud platforms like AWS and GCP. We choose the best tools for each project's specific requirements." },
    { q: "How do you ensure code quality?", a: "We enforce strict code reviews, automated testing (unit, integration, e2e), CI/CD pipelines, and follow industry best practices. Every line of code meets our quality standards before deployment." },
    { q: "Do you follow security best practices?", a: "Security is baked into every stage of our process — from secure architecture design to OWASP compliance, encryption at rest and in transit, and regular security audits." },
  ],
  support: [
    { q: "What happens after the project is delivered?", a: "We offer various maintenance and support packages to keep your application running smoothly. This includes bug fixes, security updates, and feature enhancements as needed." },
    { q: "Do you offer SLAs?", a: "Yes, we provide tiered SLA packages with guaranteed response times. Our premium tier includes 24/7 monitoring, sub-1-hour critical response, and dedicated support engineers." },
    { q: "Can we scale up support later?", a: "Of course. Our support packages are flexible and can grow with your needs. Many clients start with basic maintenance and upgrade as their user base and feature set expands." },
  ],
};

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={cn(
        "rounded-[18px] border transition-all duration-300",
        "bg-[rgba(255,255,255,0.04)] dark:bg-[rgba(255,255,255,0.05)] backdrop-blur-[12px]",
        "border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.08)]",
        "light:bg-white/60 light:border-border/40",
        isOpen && "shadow-lg shadow-primary/5 border-primary/20 dark:border-primary/30"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left group"
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent mb-4" />
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PremiumFAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeFaqs = faqs[activeCategory] || [];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted)/0.5)] to-[hsl(var(--background))] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        {/* Category + FAQ Layout */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 max-w-5xl mx-auto">
          {/* Sidebar Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-28 lg:self-start"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(0);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-medium whitespace-nowrap transition-all duration-300",
                    "backdrop-blur-[12px] border",
                    isActive
                      ? "bg-primary/15 dark:bg-primary/20 text-primary border-primary/30 shadow-md shadow-primary/10"
                      : "bg-[rgba(255,255,255,0.04)] dark:bg-[rgba(255,255,255,0.05)] text-muted-foreground border-transparent hover:bg-[rgba(255,255,255,0.08)] hover:text-foreground hover:border-border/30"
                  )}
                >
                  <Icon className={cn("w-4 h-4 shrink-0", isActive && "text-primary")} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </motion.div>

          {/* FAQ Items */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {activeFaqs.map((faq, index) => (
                  <FAQItem
                    key={`${activeCategory}-${index}`}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
