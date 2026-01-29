import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ImageOff } from "lucide-react";

import heroDashboard from "@/assets/hero-dashboard.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import projectFinanceflow from "@/assets/project-financeflow.jpg";
import projectHealthtrack from "@/assets/project-healthtrack.jpg";
import projectEdulearn from "@/assets/project-edulearn.jpg";

const digitalServicesData = [
  {
    id: "digital-presence",
    label: "Digital Presence",
    title: "Demand",
    subtitle: "Foundation",
    description: "Website & app ecosystem strategy, SEO & performance optimization, content structure & publishing framework, social presence strategy, and authority building.",
    outcome: "A strong digital presence that attracts and qualifies the right audience.",
    ctaText: "Build Presence",
    ctaLink: "/contact",
    bgColor: "#2d5a7b",
    image: heroDashboard,
  },
  {
    id: "growth-marketing",
    label: "Growth Marketing",
    title: "Acquisition",
    subtitle: "Engine",
    description: "Growth marketing roadmap, paid ads strategy (Google, Meta, LinkedIn), funnel & campaign architecture, content & inbound marketing, and conversion rate optimization.",
    outcome: "Predictable traffic, leads, and customer acquisition.",
    ctaText: "Drive Growth",
    ctaLink: "/contact",
    bgColor: "#5a4a3a",
    image: heroWorkspace,
  },
  {
    id: "sales-revenue",
    label: "Sales & Revenue",
    title: "Revenue",
    subtitle: "Systems",
    description: "Lead funnel design (B2B/B2C), CRM selection & automation, email, WhatsApp & outbound systems, sales pipeline optimization, and marketing → sales handover.",
    outcome: "A scalable, automated system that converts leads into revenue.",
    ctaText: "Boost Revenue",
    ctaLink: "/contact",
    bgColor: "#6b4c5a",
    image: projectFinanceflow,
  },
  {
    id: "growth-strategy",
    label: "Strategy & Scaling",
    title: "Analytics &",
    subtitle: "Scaling",
    description: "Market analysis, product-market fit validation, monetization strategy, KPI frameworks, GA4/Mixpanel dashboards, process optimization, and automation systems.",
    outcome: "Data-driven growth, operational efficiency, and scale readiness.",
    ctaText: "Scale Smart",
    ctaLink: "/contact",
    bgColor: "#3a6b5a",
    image: projectHealthtrack,
  },
];

const DigitalServicesCarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="section-divider py-16 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              <span className="italic font-serif">We drive demand, revenue, and scale</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              These services focus on visibility, growth, revenue systems, and long-term scaling. No coding, no design execution — only growth systems and strategy.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10">
            {digitalServicesData.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => handleTabClick(index)}
                className={`relative px-2 py-2 text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {solution.label}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeDigitalTab"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-foreground rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Carousel */}
      <div className="relative w-full flex justify-center">
        <div className="relative w-[85vw] max-w-[1000px] h-[420px] sm:h-[450px]">
          {digitalServicesData.map((solution, index) => {
            const isActive = index === activeIndex;
            const offset = index - activeIndex;

            return (
              <motion.div
                key={solution.id}
                onClick={() => handleTabClick(index)}
                initial={false}
                animate={{
                  x: `${offset * 105}%`,
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.4,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute inset-0 ${!isActive ? "cursor-pointer" : ""}`}
              >
                <div
                  style={{ backgroundColor: solution.bgColor }}
                  className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10"
                >
                <div className="flex flex-col md:flex-row h-full gap-6">
                    {/* Left - Image */}
                    <div className="hidden md:flex md:w-[55%] items-center justify-center">
                      {imageErrors[solution.id] || !solution.image ? (
                        <div className="w-full h-full rounded-2xl bg-white/10 flex items-center justify-center">
                          <ImageOff className="w-16 h-16 text-white/40" />
                        </div>
                      ) : (
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover rounded-2xl"
                          onError={() => handleImageError(solution.id)}
                        />
                      )}
                    </div>

                    {/* Right - Text Content */}
                    <div className="flex flex-col justify-between md:w-[45%]">
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-1">
                          {solution.title}
                        </h3>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                          {solution.subtitle}
                        </p>
                        <p className="text-white/80 text-sm sm:text-base max-w-md mb-4">
                          {solution.description}
                        </p>
                        {solution.outcome && (
                          <p className="text-white/90 text-sm font-medium">
                            🎯 {solution.outcome}
                          </p>
                        )}
                      </div>

                      <div>
                        <Link to={solution.ctaLink}>
                          <Button className="bg-white text-foreground hover:bg-white/90 px-6 py-3 text-sm sm:text-base border-0 rounded-full shadow-sm">
                            {solution.ctaText}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6 sm:hidden">
        {digitalServicesData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-foreground w-6" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default DigitalServicesCarouselSection;
