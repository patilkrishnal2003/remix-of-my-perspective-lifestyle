import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

// Import images for each solution
import heroDashboard from "@/assets/hero-dashboard.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import projectFinanceflow from "@/assets/project-financeflow.jpg";
import projectHealthtrack from "@/assets/project-healthtrack.jpg";
import projectEdulearn from "@/assets/project-edulearn.jpg";

const solutionsData = [
  {
    id: "digital-products",
    label: "Digital Products",
    title: "Launch Digital Products",
    subtitle: "with confidence",
    description: "Everything you need to create, market, and sell digital products. From ideation to launch, we handle the technical complexity.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    bgColor: "bg-[hsl(45_30%_65%)]",
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
    bgColor: "bg-[hsl(50_35%_60%)]",
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
    bgColor: "bg-[hsl(350_25%_75%)]",
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
    bgColor: "bg-[hsl(200_30%_70%)]",
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
    bgColor: "bg-[hsl(180_25%_65%)]",
    image: projectEdulearn,
  },
];

const SolutionsCarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Card width + gap for calculating slide offset
  const cardWidth = 320; // approximate width of side cards
  const activeCardWidth = 700; // approximate width of active card
  const gap = 24;

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

      {/* Full-width Sliding Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center justify-center gap-6"
          animate={{
            x: `calc(50% - ${activeIndex * (cardWidth + gap)}px - ${activeCardWidth / 2}px)`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {solutionsData.map((solution, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={solution.id}
                animate={{
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => handleCardClick(index)}
                className={`
                  flex-shrink-0
                  ${isActive ? "w-[90vw] max-w-4xl" : "w-72 sm:w-80"}
                  ${!isActive ? "cursor-pointer hover:opacity-80" : ""}
                `}
              >
                <div
                  className={`
                    ${solution.bgColor}
                    rounded-[2rem] sm:rounded-[2.5rem]
                    ${isActive ? "p-6 sm:p-10 min-h-[380px] sm:min-h-[420px]" : "p-5 sm:p-6 min-h-[320px] sm:min-h-[380px]"}
                    transition-all duration-300
                    overflow-hidden
                  `}
                >
                  <div className={`flex ${isActive ? "flex-col md:flex-row" : "flex-col"} h-full gap-4 sm:gap-6`}>
                    {/* Left side - Text content */}
                    <div className={`flex flex-col justify-between ${isActive ? "md:w-1/2" : "w-full"} flex-1`}>
                      <div>
                        <h3 className={`${isActive ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl"} font-bold text-foreground leading-tight mb-1`}>
                          {solution.title}
                        </h3>
                        <p className={`${isActive ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl"} font-bold text-foreground leading-tight mb-4`}>
                          {solution.subtitle}
                        </p>
                        <p className={`text-foreground/70 ${isActive ? "text-sm sm:text-base max-w-sm" : "text-xs sm:text-sm line-clamp-3"} mb-4 sm:mb-6`}>
                          {solution.description}
                        </p>
                      </div>

                      <div>
                        <Link to={solution.ctaLink}>
                          <Button
                            className={`
                              ${isActive 
                                ? "bg-white text-foreground hover:bg-white/90 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border border-foreground/20" 
                                : "bg-white/80 text-foreground border border-foreground/10 hover:bg-white px-4 py-2 text-xs sm:text-sm"
                              }
                              rounded-full transition-all duration-200 shadow-sm
                            `}
                          >
                            {solution.ctaText}
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right side - Image mockup (only visible on active card on larger screens) */}
                    {isActive && (
                      <div className="hidden md:flex md:w-1/2 items-center justify-center">
                        <div className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden bg-foreground/5">
                          <img 
                            src={solution.image} 
                            alt={solution.title}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation dots - Mobile only */}
      <div className="flex justify-center gap-2 mt-6 sm:hidden">
        {solutionsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
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
