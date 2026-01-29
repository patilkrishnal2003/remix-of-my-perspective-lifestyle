import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const navigatorItems = [
  {
    id: 1,
    title: "Systems First",
    text: "We design the full system before execution so scale doesn't break later.",
  },
  {
    id: 2,
    title: "Product Thinking",
    text: "We operate like a product team, not a task-based agency.",
  },
  {
    id: 3,
    title: "Long-Term Partner",
    text: "From first build to scale, we stay involved as your business grows.",
  },
  {
    id: 4,
    title: "Depth Over Volume",
    text: "We work with fewer clients so we can go deeper and deliver real outcomes.",
  },
  {
    id: 5,
    title: "Built for Decision-Makers",
    text: "Clear thinking, honest trade-offs, and decisions explained — not just execution.",
  },
];

const WhatMakesUsDifferentSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visitedIndices, setVisitedIndices] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setVisitedIndices((prev) => new Set([...prev, index]));
  };

  // Canvas layers visibility based on visited items
  const showSystemDiagram = visitedIndices.has(0) || activeIndex === 0;
  const showProductLayer = visitedIndices.has(1) || activeIndex === 1;
  const showTimeline = visitedIndices.has(2) || activeIndex === 2;
  const showFocusedPath = visitedIndices.has(3) || activeIndex === 3;
  const showDecisionPoints = visitedIndices.has(4) || activeIndex === 4;

  return (
    <section className="section-divider relative bg-[hsl(0_0%_6%)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 mb-3 sm:mb-4">
            Why Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-[1.1]">
            <span className="font-serif italic text-white/90">
              Not built like an agency.
            </span>
            <br />
            <span className="font-sans font-bold text-white">
              Built to scale{" "}
              <span className="text-primary">real businesses.</span>
            </span>
          </h2>
          {/* Mobile supporting text */}
          <p className="lg:hidden text-sm sm:text-base text-white/40 mt-4 max-w-md leading-relaxed">
            We design systems that evolve as your business grows.
          </p>
        </div>

        {/* Mobile Horizontal Navigator */}
        <div className="lg:hidden mb-6">
          <div 
            ref={scrollContainerRef}
            className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {navigatorItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(index)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out whitespace-nowrap touch-manipulation ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground"
                    : visitedIndices.has(index)
                    ? "bg-white/10 text-white/80"
                    : "bg-white/5 text-white/50 active:bg-white/10"
                }`}
                aria-pressed={activeIndex === index}
              >
                {item.title}
              </button>
            ))}
          </div>
          {/* Active item description for mobile */}
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="text-sm text-white/60 mt-3 px-1 leading-relaxed"
              >
                {navigatorItems[activeIndex].text}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Two-column layout for desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Left Navigator - Desktop only */}
          <nav className="hidden lg:block lg:w-[30%] flex-shrink-0">
            <ul className="space-y-1">
              {navigatorItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleItemClick(index);
                      }
                    }}
                    className={`w-full text-left py-4 px-4 rounded-lg transition-all duration-500 ease-out group ${
                      activeIndex === index
                        ? "bg-white/10"
                        : "hover:bg-white/5"
                    }`}
                    aria-pressed={activeIndex === index}
                  >
                    <span
                      className={`block text-lg sm:text-xl font-medium transition-colors duration-500 ${
                        activeIndex === index
                          ? "text-white"
                          : visitedIndices.has(index)
                          ? "text-white/70"
                          : "text-white/50 group-hover:text-white/70"
                      }`}
                    >
                      {item.title}
                    </span>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          className="block text-sm text-white/60 mt-2 overflow-hidden"
                        >
                          {item.text}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Canvas */}
          <div className="lg:w-[70%] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] relative">
            <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 overflow-hidden">
              {/* Canvas Content */}
              <div className="relative w-full h-full p-4 sm:p-6 lg:p-8">
                {/* Initial State / Base Layer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 600 400"
                    className="w-full h-full max-w-[600px]"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ filter: isMobile ? undefined : "drop-shadow(0 0 40px rgba(0,150,255,0.1))" }}
                  >
                    {/* Background Grid */}
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="rgba(255,255,255,0.03)"
                          strokeWidth="1"
                        />
                      </pattern>
                      <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(203, 98%, 47%)" />
                        <stop offset="100%" stopColor="hsl(210, 100%, 55%)" />
                      </linearGradient>
                    </defs>
                    <rect width="600" height="400" fill="url(#grid)" />

                    {/* Base Flow: Product → Growth → Revenue → Scale */}
                    <g className="base-flow">
                      {/* Connection Lines */}
                      <motion.path
                        d="M 100 200 L 220 200"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <motion.path
                        d="M 270 200 L 390 200"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                      <motion.path
                        d="M 440 200 L 560 200"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1.1 }}
                      />

                      {/* Nodes */}
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <circle cx="80" cy="200" r="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <text x="80" y="205" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="500">Product</text>
                      </motion.g>
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <circle cx="245" cy="200" r="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <text x="245" y="205" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="500">Growth</text>
                      </motion.g>
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        <circle cx="415" cy="200" r="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <text x="415" y="205" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="500">Revenue</text>
                      </motion.g>
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        <circle cx="540" cy="200" r="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <text x="540" y="205" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="500">Scale</text>
                      </motion.g>
                    </g>

                    {/* Layer 1: Systems First - Highlight full system */}
                    <AnimatePresence>
                      {showSystemDiagram && (
                        <motion.g
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {/* Enhanced connections */}
                          <motion.path
                            d="M 100 200 L 220 200"
                            stroke="url(#nodeGradient)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8 }}
                          />
                          <motion.path
                            d="M 270 200 L 390 200"
                            stroke="url(#nodeGradient)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                          <motion.path
                            d="M 440 200 L 560 200"
                            stroke="url(#nodeGradient)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                          />
                          {/* System wrapper */}
                          <motion.rect
                            x="50"
                            y="160"
                            width="520"
                            height="80"
                            rx="8"
                            fill="none"
                            stroke="hsl(203, 98%, 47%)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ duration: 1 }}
                          />
                        </motion.g>
                      )}
                    </AnimatePresence>

                    {/* Layer 2: Product Thinking - UX/Engineering elements */}
                    <AnimatePresence>
                      {showProductLayer && (
                        <motion.g
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {/* UX elements around Product node */}
                          <motion.rect
                            x="40"
                            y="130"
                            width="80"
                            height="40"
                            rx="4"
                            fill="rgba(255,255,255,0.03)"
                            stroke="rgba(255,255,255,0.15)"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          />
                          <text x="80" y="155" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">UX Design</text>
                          
                          <motion.rect
                            x="40"
                            y="250"
                            width="80"
                            height="40"
                            rx="4"
                            fill="rgba(255,255,255,0.03)"
                            stroke="rgba(255,255,255,0.15)"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                          />
                          <text x="80" y="275" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Engineering</text>

                          {/* Connecting lines */}
                          <motion.path
                            d="M 80 170 L 80 175"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          />
                          <motion.path
                            d="M 80 225 L 80 250"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          />
                        </motion.g>
                      )}
                    </AnimatePresence>

                    {/* Layer 3: Long-Term Partner - Timeline */}
                    <AnimatePresence>
                      {showTimeline && (
                        <motion.g
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {/* Timeline bar */}
                          <motion.rect
                            x="50"
                            y="310"
                            width="500"
                            height="4"
                            rx="2"
                            fill="rgba(255,255,255,0.1)"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            style={{ originX: 0 }}
                            transition={{ duration: 1 }}
                          />
                          
                          {/* Timeline phases */}
                          {["Build", "Launch", "Grow", "Scale"].map((phase, i) => (
                            <motion.g
                              key={phase}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + i * 0.15 }}
                            >
                              <circle
                                cx={100 + i * 140}
                                cy="312"
                                r="6"
                                fill="hsl(203, 98%, 47%)"
                              />
                              <text
                                x={100 + i * 140}
                                y="340"
                                textAnchor="middle"
                                fill="rgba(255,255,255,0.6)"
                                fontSize="10"
                              >
                                {phase}
                              </text>
                            </motion.g>
                          ))}
                        </motion.g>
                      )}
                    </AnimatePresence>

                    {/* Layer 4: Depth Over Volume - Focused path */}
                    <AnimatePresence>
                      {showFocusedPath && (
                        <motion.g
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {/* Dim overlay for other elements */}
                          <motion.rect
                            x="0"
                            y="0"
                            width="600"
                            height="400"
                            fill="rgba(0,0,0,0.3)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          
                          {/* Highlighted main path */}
                          <motion.path
                            d="M 80 200 C 160 200, 200 150, 300 150 C 400 150, 450 200, 540 200"
                            stroke="hsl(203, 98%, 47%)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2 }}
                          />
                          
                          {/* Focus indicator */}
                          <motion.circle
                            cx="300"
                            cy="150"
                            r="8"
                            fill="hsl(203, 98%, 47%)"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.3, 1] }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                          />
                        </motion.g>
                      )}
                    </AnimatePresence>

                    {/* Layer 5: Built for Decision-Makers - Decision points */}
                    <AnimatePresence>
                      {showDecisionPoints && (
                        <motion.g
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {/* Decision markers */}
                          {[{ x: 160, y: 180 }, { x: 330, y: 180 }, { x: 480, y: 180 }].map((pos, i) => (
                            <motion.g
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 + i * 0.2 }}
                            >
                              <polygon
                                points={`${pos.x},${pos.y - 12} ${pos.x + 10},${pos.y} ${pos.x},${pos.y + 12} ${pos.x - 10},${pos.y}`}
                                fill="hsl(203, 98%, 47%)"
                                opacity="0.8"
                              />
                              <text
                                x={pos.x}
                                y={pos.y - 20}
                                textAnchor="middle"
                                fill="rgba(255,255,255,0.6)"
                                fontSize="8"
                              >
                                Decision {i + 1}
                              </text>
                            </motion.g>
                          ))}
                          
                          {/* Strategic overlay */}
                          <motion.text
                            x="300"
                            y="80"
                            textAnchor="middle"
                            fill="rgba(255,255,255,0.4)"
                            fontSize="11"
                            fontWeight="500"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            Strategic Decision Points
                          </motion.text>
                        </motion.g>
                      )}
                    </AnimatePresence>
                  </svg>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferentSection;
