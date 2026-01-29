import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

import heroDashboard from "@/assets/hero-dashboard.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import projectFinanceflow from "@/assets/project-financeflow.jpg";
import projectHealthtrack from "@/assets/project-healthtrack.jpg";
import projectEdulearn from "@/assets/project-edulearn.jpg";

const solutionsData = [
  {
    id: "digital-products",
    label: "Digital Products",
    title: "Sell Digital Products",
    subtitle: "with ease",
    description: "Upload a PDF, a Video, a MP3 or any other digital file and set a price - a great looking high-converting landing page is ready for you to start selling.",
    ctaText: "Try it Free",
    ctaLink: "/contact",
    bgColor: "hsl(155, 35%, 45%)",
    imageBgColor: "hsl(155, 35%, 35%)",
    image: heroDashboard,
  },
  {
    id: "community",
    label: "Community",
    title: "Launch your",
    subtitle: "Community Business",
    description: "Create and launch paid subscription based business on Telegram and Discord via SuperProfile in less than 10 minutes.",
    ctaText: "Try it Free",
    ctaLink: "/contact",
    bgColor: "hsl(45, 35%, 65%)",
    imageBgColor: "hsl(45, 35%, 55%)",
    image: heroWorkspace,
  },
  {
    id: "courses",
    label: "Courses",
    title: "Build and launch",
    subtitle: "your courses",
    description: "Everything you need to launch a course and go from 0 to 100,000 students. Offer an end-to-end course experience that looks and works great.",
    ctaText: "Try it Free",
    ctaLink: "/contact",
    bgColor: "hsl(350, 20%, 75%)",
    imageBgColor: "hsl(350, 20%, 65%)",
    image: projectFinanceflow,
  },
  {
    id: "events",
    label: "Events",
    title: "Host Events &",
    subtitle: "Webinars",
    description: "Manage ticketing, payments, registrations, and communication with ease - for both online and offline events.",
    ctaText: "Try it Free",
    ctaLink: "/contact",
    bgColor: "hsl(200, 25%, 70%)",
    imageBgColor: "hsl(200, 25%, 60%)",
    image: projectHealthtrack,
  },
  {
    id: "coaching",
    label: "1:1 Coaching",
    title: "Scale Your Coaching",
    subtitle: "Business",
    description: "Streamline scheduling, payments, and client management. Grow your coaching practice with automated tools.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    bgColor: "hsl(160, 20%, 65%)",
    imageBgColor: "hsl(160, 20%, 55%)",
    image: projectEdulearn,
  },
];

const CARD_WIDTH = 85; // vw
const CARD_GAP = 24; // px

const SolutionsCarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="section-divider py-16 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              <span className="italic font-serif">Drive more revenue</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground font-medium">
              with tools for monetization
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation - 5 buttons for 5 cards */}
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

      {/* Carousel - slides based on activeIndex */}
      <div className="relative w-full">
        <motion.div
          className="flex gap-6 px-4"
          animate={{
            x: `calc(50% - ${activeIndex * CARD_WIDTH}vw - ${activeIndex * CARD_GAP}px - ${CARD_WIDTH / 2}vw)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {solutionsData.map((solution, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={solution.id}
                onClick={() => handleTabClick(index)}
                className={`flex-shrink-0 w-[85vw] max-w-[1000px] ${!isActive ? "cursor-pointer" : ""}`}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1 : 0.95,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: solution.bgColor }}
                  className="rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 h-[420px] sm:h-[450px]"
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

                    {/* Right - Image with Background Container */}
                    <div className="hidden md:flex md:w-[55%] items-center justify-center">
                      <div 
                        style={{ backgroundColor: solution.imageBgColor }}
                        className="w-full h-full rounded-2xl p-6 flex items-center justify-center"
                      >
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
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
