import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Smartphone, Code, Palette, Paintbrush, Monitor, TrendingUp, DollarSign, BarChart3, CheckCircle, Zap, Shield, Clock, ChevronRight, ChevronDown, Search, FileText, Rocket } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import TechStackSection from "@/components/TechStackSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";

// Service images
import serviceWebDev from "@/assets/service-web-dev.jpg";
import imgWebDev from "@/assets/service-web-dev-row.jpg";
import imgMobile from "@/assets/service-mobile-row.jpg";
import imgSoftware from "@/assets/service-software-row.jpg";
import imgUiux from "@/assets/service-uiux-row.jpg";
import imgBranding from "@/assets/service-branding-row.jpg";
import imgDigital from "@/assets/service-digital-row.jpg";
import imgGrowth from "@/assets/service-growth-row.jpg";
import imgSales from "@/assets/service-sales-row.jpg";
import imgStrategy from "@/assets/service-strategy-row.jpg";

const allServices = [
  {
    category: "BUILD",
    categoryIcon: Code,
    services: [
      {
        label: "Web Development",
        icon: Globe,
        description: "High-performance websites and web apps built with modern frameworks for speed, SEO, and scalability.",
        highlights: ["React & Next.js", "SEO Optimized", "Fast Loading", "Responsive Design", "Progressive Web Apps"],
        image: imgWebDev,
        path: "/services/web-development",
        stat: "60+",
        statLabel: "Projects Delivered",
        bgColor: "#438260",
      },
      {
        label: "Mobile Apps",
        icon: Smartphone,
        description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
        highlights: ["React Native & Flutter", "iOS & Android", "Offline Support", "Push Notifications", "App Store Ready"],
        image: imgMobile,
        path: "/services/mobile-apps",
        stat: "40+",
        statLabel: "Apps Launched",
        bgColor: "#948149",
      },
      {
        label: "Custom Software",
        icon: Code,
        description: "Bespoke enterprise solutions designed to automate workflows, boost efficiency, and scale with your business.",
        highlights: ["APIs & Microservices", "Cloud Native", "Process Automation", "Integration Ready", "Scalable Architecture"],
        image: imgSoftware,
        path: "/services/custom-software",
        stat: "30+",
        statLabel: "Enterprise Solutions",
        bgColor: "#711e1b",
      },
      {
        label: "UI/UX Design",
        icon: Palette,
        description: "Research-driven design that converts visitors into customers through intuitive, beautiful interfaces.",
        highlights: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing", "Figma & Sketch"],
        image: imgUiux,
        path: "/services/ui-ux-design",
        stat: "95%",
        statLabel: "Client Satisfaction",
        bgColor: "#894f71",
      },
      {
        label: "Branding",
        icon: Paintbrush,
        description: "Strategic brand identity that tells your story and differentiates you in the market.",
        highlights: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Packaging Design"],
        image: imgBranding,
        path: "/services/branding",
        stat: "50+",
        statLabel: "Brands Created",
        bgColor: "#485c81",
      },
    ],
  },
  {
    category: "GROW & SCALE",
    categoryIcon: TrendingUp,
    services: [
      {
        label: "Digital Presence",
        icon: Monitor,
        description: "Establish and strengthen your online footprint with SEO, content strategy, and multi-channel visibility.",
        highlights: ["SEO Optimization", "Content Strategy", "Social Media", "Multi-Channel", "Analytics & Reporting"],
        image: imgDigital,
        path: "/services/digital-presence",
        stat: "3x",
        statLabel: "Avg. Traffic Increase",
        bgColor: "#2d5a7b",
      },
      {
        label: "Growth Marketing",
        icon: TrendingUp,
        description: "Data-driven marketing campaigns that acquire customers, boost engagement, and maximize ROI.",
        highlights: ["PPC Campaigns", "Marketing Automation", "A/B Testing", "Conversion Optimization", "Analytics"],
        image: imgGrowth,
        path: "/services/growth-marketing",
        stat: "200%",
        statLabel: "Avg. ROI Boost",
        bgColor: "#5a4a3a",
      },
      {
        label: "Sales & Revenue",
        icon: DollarSign,
        description: "Optimize your sales funnel with CRM integration, lead scoring, and conversion optimization strategies.",
        highlights: ["CRM Integration", "Lead Generation", "Sales Funnel", "Pipeline Management", "Revenue Analytics"],
        image: imgSales,
        path: "/services/sales-revenue",
        stat: "45%",
        statLabel: "Conversion Uplift",
        bgColor: "#6b4c5a",
      },
      {
        label: "Strategy & Scaling",
        icon: BarChart3,
        description: "Strategic consulting to plan growth, enter new markets, and scale operations sustainably.",
        highlights: ["Growth Roadmapping", "Market Entry", "KPI Frameworks", "Operational Scaling", "Team Building"],
        image: imgStrategy,
        path: "/services/strategy-scaling",
        stat: "25+",
        statLabel: "Companies Scaled",
        bgColor: "#3a6b5a",
      },
    ],
  },
];

const Services = () => {
  usePageSEO({
    title: "Services",
    description: "Explore Advora Digital's services — web development, mobile apps, UI/UX design, branding, growth marketing, and digital strategy for businesses.",
    canonical: "/services",
  });

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [openCategories, setOpenCategories] = useState<number[]>([0, 1]);
  const currentService = allServices[activeCategory].services[activeService];

  const toggleCategory = (catIdx: number) => {
    setOpenCategories((prev) =>
      prev.includes(catIdx) ? prev.filter((i) => i !== catIdx) : [...prev, catIdx]
    );
  };

  const handleServiceClick = (catIdx: number, sIdx: number) => {
    setActiveCategory(catIdx);
    setActiveService(sIdx);
    if (!openCategories.includes(catIdx)) {
      setOpenCategories((prev) => [...prev, catIdx]);
    }
  };

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
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img src={serviceWebDev} alt="Our Services" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Expert Solutions</span>
                    <span className="block font-bold text-primary">For Your Business</span>
                  </h1>
                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    From web and mobile development to cloud infrastructure and UI/UX design, we deliver comprehensive digital solutions that drive growth.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/portfolio" className="w-full sm:w-auto">
                      <Button variant="outline" className="rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        View Our Work
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Explorer — Split Panel */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          {/* Section Header */}
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl tracking-tight mb-4"
            >
              <span className="block font-serif italic font-normal">What We</span>
              <span className="block font-bold">Offer <span className="text-primary">You</span></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our full range of services across two core pillars — technology and growth.
            </motion.p>
          </div>

          {/* Split Panel */}
          <div className="grid lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] gap-6 lg:gap-8 items-start">
            
            {/* LEFT — Category & Service List */}
            <div className="lg:sticky lg:top-28 space-y-2 rounded-[2rem] bg-card border border-border p-4">
              {allServices.map((cat, catIdx) => (
                <div key={cat.category}>
                  {/* Category Header */}
                 <button
                    onClick={() => toggleCategory(catIdx)}
                    className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-left font-semibold text-sm tracking-wide transition-all duration-300 ${
                      activeCategory === catIdx
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <cat.categoryIcon className="w-4 h-4 shrink-0" />
                    <span className="flex-1">{cat.category}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openCategories.includes(catIdx) ? "rotate-180" : ""}`} />
                  </button>

                  {/* Services under this category */}
                  <AnimatePresence>
                    {openCategories.includes(catIdx) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 pl-3 space-y-1">
                          {cat.services.map((service, sIdx) => {
                            const isActive = activeCategory === catIdx && activeService === sIdx;
                            return (
                              <button
                                key={service.label}
                                onClick={() => handleServiceClick(catIdx, sIdx)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm transition-all duration-300 group ${
                                  isActive
                                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                }`}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                  isActive
                                    ? "bg-primary-foreground/20"
                                    : "bg-muted/50 group-hover:bg-muted"
                                }`}>
                                  <service.icon className={`w-4 h-4 ${
                                    isActive ? "text-primary-foreground" : "text-muted-foreground"
                                  }`} />
                                </div>
                                <span className="flex-1">{service.label}</span>
                                {isActive && (
                                  <ChevronRight className="w-4 h-4 text-primary-foreground" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* RIGHT — Service Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeService}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                style={{ backgroundColor: currentService.bgColor }}
                className="rounded-[2rem] overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden p-4 pb-0">
                  <img
                    src={currentService.image}
                    alt={currentService.label}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Stat overlay */}
                  <div className="absolute bottom-2 left-8 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5">
                    <span className="text-2xl font-bold text-gray-900">{currentService.stat}</span>
                    <span className="text-xs text-gray-600 block">{currentService.statLabel}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Title + Category badge */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-3">
                      {allServices[activeCategory].category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {currentService.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed text-base sm:text-lg">
                    {currentService.description}
                  </p>

                  {/* Highlights as checklist */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">What's Included</span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {currentService.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2.5 text-sm text-white/80">
                          <CheckCircle className="w-4 h-4 text-white/70 shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link to={currentService.path}>
                      <Button className="rounded-full px-6 bg-white text-gray-900 hover:bg-white/90">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button className="rounded-full px-6 bg-white/20 text-white border border-white/40 hover:bg-white/30">
                        Get a Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: Quick links for all services */}
          <div className="mt-10 lg:hidden">
            <div className="grid grid-cols-3 gap-3">
              {allServices.flatMap(cat => cat.services).map((s) => (
                <Link key={s.label} to={s.path} className="text-center p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <s.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <span className="text-xs font-medium text-foreground/80">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Minimal Timeline */}
        <section className="section-divider py-20 pt-24 overflow-hidden bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.span 
                className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4"
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
                className="text-xl text-background/70 max-w-2xl mx-auto"
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
                      <span className={`text-5xl md:text-6xl font-bold text-primary/20 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                        {phase.step}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-background">
                      {phase.title}
                    </h3>
                    <p className="text-background/70 text-base md:text-lg leading-relaxed max-w-md inline-block">
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

        {/* Technologies Section */}
        <TechStackSection title="Technologies We Use" subtitle="Modern tools for modern solutions" showTwoRows={true} />

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
