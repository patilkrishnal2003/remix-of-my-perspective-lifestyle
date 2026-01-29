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
    id: "digital-marketing",
    label: "Digital Marketing",
    title: "Data-Driven",
    subtitle: "Marketing Campaigns",
    description: "Reach your target audience with precision. We craft marketing strategies powered by analytics, automation, and creative excellence.",
    ctaText: "Boost Your Reach",
    ctaLink: "/contact",
    bgColor: "#2d5a7b",
    imageBgColor: "rgba(45, 90, 123, 0.6)",
    image: heroDashboard,
  },
  {
    id: "seo-content",
    label: "SEO & Content",
    title: "Search Engine",
    subtitle: "Optimization",
    description: "Dominate search rankings with strategic SEO and compelling content. We help you get found by the customers who matter most.",
    ctaText: "Rank Higher",
    ctaLink: "/contact",
    bgColor: "#5a4a3a",
    imageBgColor: "rgba(90, 74, 58, 0.6)",
    image: heroWorkspace,
  },
  {
    id: "brand-strategy",
    label: "Brand Strategy",
    title: "Memorable",
    subtitle: "Brand Identity",
    description: "Build a brand that resonates. From logo design to brand guidelines, we create cohesive identities that stand out in crowded markets.",
    ctaText: "Build Your Brand",
    ctaLink: "/contact",
    bgColor: "#6b4c5a",
    imageBgColor: "rgba(107, 76, 90, 0.6)",
    image: projectFinanceflow,
  },
  {
    id: "social-media",
    label: "Social Media",
    title: "Engaging Social",
    subtitle: "Presence",
    description: "Connect with your audience where they spend their time. We manage and grow your social channels with authentic, engaging content.",
    ctaText: "Grow Your Following",
    ctaLink: "/contact",
    bgColor: "#3a6b5a",
    imageBgColor: "rgba(58, 107, 90, 0.6)",
    image: projectHealthtrack,
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Actionable",
    subtitle: "Insights & Data",
    description: "Turn data into decisions. Our analytics solutions help you understand user behavior, track KPIs, and optimize for growth.",
    ctaText: "Get Insights",
    ctaLink: "/contact",
    bgColor: "#5a3a6b",
    imageBgColor: "rgba(90, 58, 107, 0.6)",
    image: projectEdulearn,
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
              <span className="italic font-serif">Digital Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Amplify your digital presence
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
                        <p className="text-white/80 text-sm sm:text-base max-w-md mb-6">
                          {solution.description}
                        </p>
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
