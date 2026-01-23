import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Smartphone, Code, Database, Cloud, Settings, Palette, LineChart, CheckCircle, Zap, Shield, Clock, ChevronLeft, ChevronRight, Search, FileText, Rocket, Headphones } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiGo, SiPostgresql, SiMongodb, SiRedis, SiAmazonwebservices, SiDocker, SiKubernetes, SiGraphql, SiFlutter, SiTailwindcss, SiFigma, SiGit } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Service images
import serviceWebDev from "@/assets/service-web-dev.jpg";
import serviceMobileDev from "@/assets/service-mobile-dev.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceDesign from "@/assets/service-design.jpg";

const techStackRow1 = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
];

const techStackRow2 = [
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

// Hero carousel slides data
const heroSlides = [
  {
    category: "WEB DEVELOPMENT",
    title: "Custom Web Solutions That Drive Results",
    description: "From responsive websites to complex web applications, we build digital experiences that engage users and grow your business.",
    image: serviceWebDev,
    features: ["React & Next.js", "E-commerce", "PWA"],
  },
  {
    category: "MOBILE APP DEVELOPMENT",
    title: "Native & Cross-Platform Mobile Apps",
    description: "Deliver exceptional mobile experiences on iOS and Android with apps that users love and businesses rely on.",
    image: serviceMobileDev,
    features: ["React Native", "iOS & Android", "App Store Ready"],
  },
  {
    category: "CLOUD SOLUTIONS",
    title: "Scalable Cloud Infrastructure",
    description: "Enterprise-grade cloud architecture that grows with your business. Secure, reliable, and cost-effective.",
    image: serviceCloud,
    features: ["AWS & Azure", "DevOps", "CI/CD"],
  },
  {
    category: "UI/UX DESIGN",
    title: "User-Centered Design Excellence",
    description: "Beautiful, intuitive interfaces that delight users and drive conversions through research-backed design.",
    image: serviceDesign,
    features: ["User Research", "Prototyping", "Visual Design"],
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies. From landing pages to complex enterprise platforms, we create responsive, fast, and SEO-optimized solutions.",
      features: ["React & Next.js", "Custom CMS Integration", "E-commerce Solutions", "Progressive Web Apps"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      features: ["React Native", "iOS & Android Native", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to solve your unique business challenges and streamline operations.",
      features: ["Business Process Automation", "Legacy System Modernization", "Custom Integrations", "Scalable Architecture"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and APIs that power your applications with reliability and performance.",
      features: ["RESTful & GraphQL APIs", "Database Design", "Microservices", "Real-time Systems"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup, migration, and management for scalable and cost-effective operations.",
      features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing technical support and maintenance to keep your applications running smoothly and securely.",
      features: ["24/7 Monitoring", "Bug Fixes & Updates", "Performance Optimization", "Security Patches"]
    },
    {
      icon: LineChart,
      title: "Technical Consulting",
      description: "Strategic technology advice to help you make informed decisions and plan for future growth.",
      features: ["Technology Assessment", "Architecture Planning", "Team Augmentation", "Code Reviews"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      price: "5,000",
      features: [
        "Up to 5 pages or screens",
        "Responsive design",
        "Basic SEO optimization",
        "30 days support",
        "Source code delivery"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "15,000",
      popular: true,
      features: [
        "Up to 15 pages or screens",
        "Custom design system",
        "Advanced SEO & Analytics",
        "90 days support",
        "API integrations",
        "Performance optimization"
      ]
    },
    {
      name: "Enterprise",
      description: "For complex, large-scale projects",
      price: "Custom",
      features: [
        "Unlimited pages/screens",
        "Custom architecture",
        "Dedicated team",
        "24/7 priority support",
        "SLA guarantees",
        "Ongoing maintenance"
      ]
    }
  ];

  const advantages = [
    { icon: Zap, title: "Fast Turnaround", description: "Agile methodologies for efficient delivery without compromising quality." },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade security practices and compliance standards." },
    { icon: Clock, title: "On-Time Delivery", description: "95% of projects delivered on or before the agreed deadline." },
    { icon: CheckCircle, title: "Quality Guaranteed", description: "Rigorous testing and code review processes ensure reliability." }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section - Carousel */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Content */}
                <div className="space-y-5 order-2 lg:order-1">
                  <div className="flex items-center gap-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide">
                      {heroSlides[currentSlide].category}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-[1.15] text-foreground">
                    {heroSlides[currentSlide].title}
                  </h1>

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {heroSlides[currentSlide].description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {heroSlides[currentSlide].features.map((feature) => (
                      <span key={feature} className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/contact">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-medium">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/portfolio">
                      <Button variant="outline" className="rounded-full px-8 py-6 font-medium">
                        View Our Work
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-primary/5 border border-border shadow-lg">
                    <img
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].title}
                      className="w-full h-auto aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid - 3 per row with unique cards */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">Full-stack development expertise for every need</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                        +{service.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section - Minimal Timeline */}
        <section className="section-divider py-20 pt-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.span 
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                HOW WE WORK
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Our Development Process
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                A proven methodology for delivering successful projects
              </motion.p>
            </div>

            {/* Minimal Timeline */}
            <div className="relative max-w-5xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
              
              {[
                { 
                  step: "01", 
                  title: "Discovery", 
                  icon: Search,
                  description: "Deep dive into your business goals, target audience, and requirements through comprehensive research.",
                },
                { 
                  step: "02", 
                  title: "Planning", 
                  icon: FileText,
                  description: "Architect solutions with detailed specifications, wireframes, and project roadmaps.",
                },
                { 
                  step: "03", 
                  title: "Development", 
                  icon: Code,
                  description: "Build your solution using agile sprints with regular demos and feedback loops.",
                },
                { 
                  step: "04", 
                  title: "Launch", 
                  icon: Rocket,
                  description: "Smooth deployment with ongoing maintenance, monitoring, and dedicated support.",
                }
              ].map((phase, index, arr) => (
                <motion.div 
                  key={phase.step}
                  className={`relative flex items-start gap-8 md:gap-16 mb-20 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <phase.icon className="w-7 h-7 text-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* Connecting Arrow - Between steps */}
                  {index < arr.length - 1 && (
                    <motion.div 
                      className="absolute left-8 md:left-1/2 -translate-x-1/2 top-20 flex flex-col items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    >
                      {/* Animated dots */}
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-primary/60"
                        animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-primary/50"
                        animate={{ y: [0, 4, 0], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-primary/40"
                        animate={{ y: [0, 4, 0], opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      />
                      {/* Arrow head */}
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ChevronRight className="w-4 h-4 text-primary/60 rotate-90" />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Content - Left or Right */}
                  <div className={`flex-1 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className="inline-flex items-center gap-3 mb-2">
                      <span className={`text-5xl md:text-6xl font-bold text-primary/10 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                        {phase.step}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md inline-block">
                      {phase.description}
                    </p>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section - Marquee Style */}
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-xl text-muted-foreground">Modern tools for modern solutions</p>
            </div>
            
            {/* Scrolling Marquee */}
            <div className="relative overflow-hidden">
              {/* Row 1 - scrolling left */}
              <div className="flex gap-6 mb-6 animate-marquee">
                {[...techStackRow1, ...techStackRow1, ...techStackRow1, ...techStackRow1].map((tech, index) => (
                  <div key={`row1-${index}`} className="group flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer"
                      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}40, 0 0 40px ${tech.color}20`;
                        e.currentTarget.style.borderColor = tech.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                        e.currentTarget.style.borderColor = "";
                      }}
                    >
                      <tech.icon className="w-8 h-8 transition-colors duration-300" style={{ color: tech.color }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 - scrolling right */}
              <div className="flex gap-6 animate-marquee-reverse">
                {[...techStackRow2, ...techStackRow2, ...techStackRow2, ...techStackRow2].map((tech, index) => (
                  <div key={`row2-${index}`} className="group flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer"
                      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}40, 0 0 40px ${tech.color}20`;
                        e.currentTarget.style.borderColor = tech.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                        e.currentTarget.style.borderColor = "";
                      }}
                    >
                      <tech.icon className="w-8 h-8 transition-colors duration-300" style={{ color: tech.color }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Fade overlays */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Answers to common questions about our services</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "How long does a typical project take?", a: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation." },
                { q: "Do you work with clients remotely?", a: "Yes! We're a remote-first company and have successfully delivered projects for clients worldwide. We use modern collaboration tools to ensure smooth communication regardless of location." },
                { q: "What happens after the project is delivered?", a: "We offer various maintenance and support packages to keep your application running smoothly. This includes bug fixes, security updates, and feature enhancements as needed." },
                { q: "Can you work with our existing team?", a: "Absolutely. We offer team augmentation services where our developers integrate with your existing team. We can also provide technical consulting to guide your internal development efforts." },
                { q: "What is your payment structure?", a: "We typically work with a milestone-based payment structure. A percentage is due upfront, with remaining payments tied to project milestones. We're flexible and can discuss arrangements that work for your budget." }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="rounded-2xl bg-card border border-border px-6 data-[state=open]:border-accent/50">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <CTASection
          title="Ready to get started?"
          description="Tell us about your project and we'll provide a free consultation and detailed quote."
          buttonText="Contact Us"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
