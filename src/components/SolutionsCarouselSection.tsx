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

const industriesData = [
  {
    id: "fintech",
    label: "FinTech",
    title: "Financial",
    subtitle: "Technology",
    description: "Secure payment systems, banking apps, and trading platforms. We build compliant, scalable solutions that handle millions of transactions.",
    ctaText: "Explore FinTech",
    ctaLink: "/contact",
    bgColor: "#438260",
    imageBgColor: "rgba(67, 130, 96, 0.6)",
    image: heroDashboard,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    title: "HealthTech",
    subtitle: "Solutions",
    description: "HIPAA-compliant platforms, telemedicine apps, and patient management systems that improve care delivery and operational efficiency.",
    ctaText: "Explore Healthcare",
    ctaLink: "/contact",
    bgColor: "#948149",
    imageBgColor: "rgba(148, 129, 73, 0.6)",
    image: heroWorkspace,
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    title: "Retail &",
    subtitle: "Marketplace",
    description: "High-converting storefronts, inventory systems, and marketplace platforms that scale from startup to enterprise.",
    ctaText: "Explore E-Commerce",
    ctaLink: "/contact",
    bgColor: "#711e1b",
    imageBgColor: "rgba(113, 30, 27, 0.6)",
    image: projectFinanceflow,
  },
  {
    id: "edtech",
    label: "EdTech",
    title: "Learning",
    subtitle: "Platforms",
    description: "LMS solutions, virtual classrooms, and educational apps that engage learners and simplify administration.",
    ctaText: "Explore EdTech",
    ctaLink: "/contact",
    bgColor: "#894f71",
    imageBgColor: "rgba(137, 79, 113, 0.6)",
    image: projectHealthtrack,
  },
  {
    id: "logistics",
    label: "Logistics",
    title: "Supply Chain",
    subtitle: "& Operations",
    description: "Fleet management, warehouse systems, and real-time tracking solutions that optimize your logistics operations.",
    ctaText: "Explore Logistics",
    ctaLink: "/contact",
    bgColor: "#485c81",
    imageBgColor: "rgba(72, 92, 129, 0.6)",
    image: projectEdulearn,
  },
];

const IndustriesCarouselSection = () => {
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
              <span className="italic font-serif">Industries</span> we serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across sectors that demand reliability and scale
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10">
            {industriesData.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => handleTabClick(index)}
                className={`relative px-2 py-2 text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {industry.label}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeIndustryTab"
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
          {industriesData.map((industry, index) => {
            const isActive = index === activeIndex;
            const offset = index - activeIndex;

            return (
              <motion.div
                key={industry.id}
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
                  style={{ backgroundColor: industry.bgColor }}
                  className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row h-full gap-6">
                    {/* Left - Text Content */}
                    <div className="flex flex-col justify-between md:w-[45%]">
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-1">
                          {industry.title}
                        </h3>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                          {industry.subtitle}
                        </p>
                        <p className="text-white/80 text-sm sm:text-base max-w-md mb-6">
                          {industry.description}
                        </p>
                      </div>

                      <div>
                        <Link to={industry.ctaLink}>
                          <Button className="bg-white text-foreground hover:bg-white/90 px-6 py-3 text-sm sm:text-base border-0 rounded-full shadow-sm">
                            {industry.ctaText}
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right - Image */}
                    <div className="hidden md:flex md:w-[55%] items-center justify-center">
                      {imageErrors[industry.id] ? (
                        <div className="w-full h-full rounded-2xl bg-white/10 flex items-center justify-center">
                          <ImageOff className="w-16 h-16 text-white/40" />
                        </div>
                      ) : (
                        <img
                          src={industry.image}
                          alt={industry.title}
                          className="w-full h-full object-cover rounded-2xl"
                          onError={() => handleImageError(industry.id)}
                        />
                      )}
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
        {industriesData.map((_, index) => (
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

export default IndustriesCarouselSection;
