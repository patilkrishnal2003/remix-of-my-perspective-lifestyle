"use client";

import React, { useEffect, useRef, ReactNode, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPython,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiVercel,
  SiFigma,
  SiGraphql,
  SiJavascript,
  SiVuedotjs,
  SiAngular,
  SiSupabase,
  SiFirebase,
  SiStripe,
  SiGithub,
  SiLinux,
  SiRedis,
} from "react-icons/si";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

// Single orbit ring with all its icons rotating together
const OrbitRing = ({ 
  radius, 
  duration, 
  direction,
  icons 
}: { 
  radius: number; 
  duration: number; 
  direction: number;
  icons: { Icon: React.ElementType; startAngle: number; color: string }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
      animate={{ rotate: direction * 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* All icons on this orbit */}
      {icons.map((iconData, index) => {
        const { Icon, startAngle, color } = iconData;
        const rad = (startAngle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 flex items-center justify-center pointer-events-auto cursor-pointer"
            style={{
              marginLeft: x - 24,
              marginTop: y - 24,
            }}
            // Counter-rotate to keep icon upright
            animate={{ rotate: -direction * 360 }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div 
              className={cn(
                "w-12 h-12 rounded-full bg-background/95 backdrop-blur-sm border border-border/50 flex items-center justify-center transition-all duration-300",
                isHovered && "scale-125 border-primary/50"
              )}
              style={{
                boxShadow: isHovered 
                  ? `0 0 20px ${color}60, 0 0 40px ${color}30, 0 8px 32px rgba(0,0,0,0.2)` 
                  : "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <Icon 
                className={cn(
                  "w-6 h-6 transition-all duration-300",
                  isHovered && "scale-110"
                )}
                style={{ color: isHovered ? color : "hsl(var(--primary))" }} 
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Circular orbits with icons component
const CircularOrbits = () => {
  // Define orbits with official tech brand icons and their brand colors
  const orbits = [
    { 
      radius: 320, 
      duration: 30, 
      direction: 1,
      icons: [
        { Icon: SiReact, startAngle: 0, color: "#61DAFB" },
        { Icon: SiTypescript, startAngle: 60, color: "#3178C6" },
        { Icon: SiNodedotjs, startAngle: 120, color: "#339933" },
        { Icon: SiNextdotjs, startAngle: 180, color: "#000000" },
        { Icon: SiTailwindcss, startAngle: 240, color: "#06B6D4" },
        { Icon: SiPython, startAngle: 300, color: "#3776AB" },
      ]
    },
    { 
      radius: 450, 
      duration: 40, 
      direction: -1,
      icons: [
        { Icon: SiDocker, startAngle: 0, color: "#2496ED" },
        { Icon: SiGit, startAngle: 45, color: "#F05032" },
        { Icon: SiPostgresql, startAngle: 90, color: "#4169E1" },
        { Icon: SiMongodb, startAngle: 135, color: "#47A248" },
        { Icon: SiAmazon, startAngle: 180, color: "#FF9900" },
        { Icon: SiVercel, startAngle: 225, color: "#000000" },
        { Icon: SiFigma, startAngle: 270, color: "#F24E1E" },
        { Icon: SiGraphql, startAngle: 315, color: "#E10098" },
      ]
    },
    { 
      radius: 580, 
      duration: 50, 
      direction: 1,
      icons: [
        { Icon: SiJavascript, startAngle: 0, color: "#F7DF1E" },
        { Icon: SiVuedotjs, startAngle: 36, color: "#4FC08D" },
        { Icon: SiAngular, startAngle: 72, color: "#DD0031" },
        { Icon: SiSupabase, startAngle: 108, color: "#3FCF8E" },
        { Icon: SiFirebase, startAngle: 144, color: "#FFCA28" },
        { Icon: SiStripe, startAngle: 180, color: "#635BFF" },
        { Icon: SiGithub, startAngle: 216, color: "#181717" },
        { Icon: SiLinux, startAngle: 252, color: "#FCC624" },
        { Icon: SiRedis, startAngle: 288, color: "#DC382D" },
        { Icon: SiReact, startAngle: 324, color: "#61DAFB" },
      ]
    },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Orbit rings (visual circles) */}
      {orbits.map((orbit, orbitIndex) => (
        <div
          key={`ring-${orbitIndex}`}
          className="absolute rounded-full border border-primary/20"
          style={{
            width: orbit.radius * 2,
            height: orbit.radius * 2,
          }}
        />
      ))}

      {/* Orbiting icons - one rotating container per orbit */}
      {orbits.map((orbit, orbitIndex) => (
        <OrbitRing
          key={`orbit-${orbitIndex}`}
          radius={orbit.radius}
          duration={orbit.duration}
          direction={orbit.direction}
          icons={orbit.icons}
        />
      ))}

      {/* Center glow effect */}
      <div className="absolute w-40 h-40 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute w-24 h-24 rounded-full bg-primary/25 blur-2xl" />
    </div>
  );
};

export default function HeroSectionWithGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.fromTo(
      gradientRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Gradient Background */}
      <div
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background"
      />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Circular Orbiting Icons */}
      <CircularOrbits />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedGroup
            preset="blur-slide"
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.div
              variants={transitionVariants.item}
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Advora: Design Systems for the Visionary Web
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={transitionVariants.item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="block text-foreground">Inspiring Digital</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Innovators
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={transitionVariants.item}
              className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Whether you're designing interfaces or building full-scale apps, our tools empower creators to move fast, stay consistent, and ship beautiful products — every time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={transitionVariants.item}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Start Building
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-medium"
                >
                  Request a demo
                </Button>
              </Link>
            </motion.div>
          </AnimatedGroup>
        </div>

        {/* Brands Grid */}
        <div className="mt-20 w-full max-w-4xl">
          <BrandsGrid />
        </div>

        {/* Decorative Blurs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
}

export const BrandsGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const brands = [
    {
      name: "loops",
      logo: "https://assets.rapidui.dev/brands/loops.svg",
    },
    {
      name: "pwc",
      logo: "https://assets.rapidui.dev/brands/pwc.svg",
    },
    {
      name: "resend",
      logo: "https://assets.rapidui.dev/brands/resend.svg",
    },
    {
      name: "udio",
      logo: "https://assets.rapidui.dev/brands/udio.svg",
    },
    {
      name: "krea",
      logo: "https://assets.rapidui.dev/brands/krea.svg",
    },
    {
      name: "gopuff",
      logo: "https://assets.rapidui.dev/brands/gopuff.svg",
    },
  ];

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <p className="text-center text-sm text-muted-foreground mb-8">
        Trusted by innovative companies worldwide
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-8 sm:h-10 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

BrandsGrid.displayName = "BrandsGrid";

type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  "blur-slide": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
      },
    },
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
      },
    },
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 400, damping: 10 },
      },
    },
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" as const, stiffness: 200, damping: 15 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 8 },
      },
    },
  },
};

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
}: AnimatedGroupProps) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export { AnimatedGroup };
