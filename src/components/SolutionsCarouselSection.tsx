import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Users, BookOpen, Calendar, Headphones } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const solutionsData = [
  {
    id: "digital-products",
    label: "Digital Products",
    icon: Rocket,
    title: "Launch Digital Products",
    subtitle: "with confidence",
    description: "Everything you need to create, market, and sell digital products. From ideation to launch, we handle the technical complexity.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    bgColor: "bg-[hsl(10_60%_35%)]",
  },
  {
    id: "community",
    label: "Community",
    icon: Users,
    title: "Build Thriving Communities",
    subtitle: "that engage",
    description: "Create spaces where your audience connects, shares, and grows together. Foster engagement with powerful community tools.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    bgColor: "bg-[hsl(200_70%_40%)]",
  },
  {
    id: "courses",
    label: "Courses",
    icon: BookOpen,
    title: "Build and launch",
    subtitle: "your courses",
    description: "Everything you need to launch a course and go from 0 to 100,000 students. Offer an end-to-end course experience that looks and works great.",
    ctaText: "Try it Free",
    ctaLink: "/contact",
    bgColor: "bg-[hsl(10_50%_30%)]",
  },
  {
    id: "events",
    label: "Events",
    icon: Calendar,
    title: "Host Events &",
    subtitle: "Webinars",
    description: "Manage ticketing, payments, registrations, and communication with ease - for both online and offline events.",
    ctaText: "Try it Free",
    ctaLink: "/contact",
    bgColor: "bg-[hsl(10_40%_45%)]",
  },
  {
    id: "coaching",
    label: "1:1 Coaching",
    icon: Headphones,
    title: "Scale Your Coaching",
    subtitle: "Business",
    description: "Streamline scheduling, payments, and client management. Grow your coaching practice with automated tools.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    bgColor: "bg-[hsl(180_30%_35%)]",
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
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => handleCardClick(index)}
                className={`
                  flex-shrink-0
                  ${isActive ? "w-[90vw] max-w-3xl" : "w-64 sm:w-80"}
                  ${!isActive ? "cursor-pointer hover:opacity-70" : ""}
                `}
              >
                <div
                  className={`
                    ${solution.bgColor}
                    rounded-[2rem] sm:rounded-[2.5rem]
                    ${isActive ? "p-8 sm:p-12 min-h-[400px] sm:min-h-[450px]" : "p-6 sm:p-8 min-h-[350px] sm:min-h-[400px]"}
                    flex flex-col justify-between
                    transition-all duration-300
                  `}
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                      {solution.subtitle}
                    </p>
                    <p className={`text-white/80 ${isActive ? "text-base sm:text-lg max-w-md" : "text-sm"} mb-6`}>
                      {solution.description}
                    </p>
                  </div>

                  <div>
                    <Link to={solution.ctaLink}>
                      <Button
                        className={`
                          ${isActive 
                            ? "bg-white text-foreground hover:bg-white/90 px-6 py-3 text-base" 
                            : "bg-white/20 text-white border border-white/40 hover:bg-white/30 px-4 py-2 text-sm"
                          }
                          rounded-full transition-all duration-200
                        `}
                      >
                        {solution.ctaText}
                      </Button>
                    </Link>
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
