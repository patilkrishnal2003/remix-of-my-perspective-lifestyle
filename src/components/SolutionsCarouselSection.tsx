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

const solutionsData = [
  {
    id: "web-development",
    label: "Web Development",
    title: "Modern Web",
    subtitle: "Applications",
    description: "From responsive websites to complex web apps, we build fast, scalable solutions using React, Next.js, and modern frameworks that drive business growth.",
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    bgColor: "#438260",
    imageBgColor: "rgba(67, 130, 96, 0.6)",
    image: heroDashboard,
  },
  {
    id: "mobile-apps",
    label: "Mobile Apps",
    title: "Native & Cross-Platform",
    subtitle: "Mobile Solutions",
    description: "Build powerful iOS and Android apps with seamless user experiences. We deliver apps that users love and businesses rely on.",
    ctaText: "Build Your App",
    ctaLink: "/contact",
    bgColor: "#948149",
    imageBgColor: "rgba(148, 129, 73, 0.6)",
    image: heroWorkspace,
  },
  {
    id: "cloud-solutions",
    label: "Cloud Solutions",
    title: "Scalable Cloud",
    subtitle: "Infrastructure",
    description: "Deploy with confidence on AWS, Azure, or GCP. We architect cloud solutions that scale with your business and optimize costs.",
    ctaText: "Go Cloud",
    ctaLink: "/contact",
    bgColor: "#711e1b",
    imageBgColor: "rgba(113, 30, 27, 0.6)",
    image: projectFinanceflow,
  },
  {
    id: "ui-ux-design",
    label: "UI/UX Design",
    title: "User-Centered",
    subtitle: "Design Systems",
    description: "Create intuitive interfaces that delight users. Our design process combines research, prototyping, and testing to deliver exceptional experiences.",
    ctaText: "Design with Us",
    ctaLink: "/contact",
    bgColor: "#894f71",
    imageBgColor: "rgba(137, 79, 113, 0.6)",
    image: projectHealthtrack,
  },
  {
    id: "custom-software",
    label: "Custom Software",
    title: "Enterprise-Grade",
    subtitle: "Solutions",
    description: "Tailored software built for your unique workflows. From CRMs to ERPs, we develop robust systems that transform how you operate.",
    ctaText: "Let's Build",
    ctaLink: "/contact",
    bgColor: "#485c81",
    imageBgColor: "rgba(72, 92, 129, 0.6)",
    image: projectEdulearn,
  },
];

const SolutionsCarouselSection = () => {
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
              <span className="italic font-serif">Solutions that scale</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground font-medium">
              with your business
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10">
            {solutionsData.map((solution, index) => (
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
                    layoutId="activeSolutionTab"
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
          {solutionsData.map((solution, index) => {
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
                    {/* Left - Text Content */}
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

                    {/* Right - Image */}
                    <div className="hidden md:flex md:w-[55%] items-center justify-center">
                      {imageErrors[solution.id] ? (
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6 sm:hidden">
        {solutionsData.map((_, index) => (
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

export default SolutionsCarouselSection;
