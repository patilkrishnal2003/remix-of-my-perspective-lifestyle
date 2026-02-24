import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Smartphone, Code, Palette, Paintbrush, Monitor, TrendingUp, DollarSign, BarChart3, CheckCircle, Zap, Shield, Clock, ChevronRight, Search, FileText, Rocket } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import TechStackSection from "@/components/TechStackSection";
import { motion } from "framer-motion";
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

const buildServices = [
  {
    label: "Web Development",
    icon: Globe,
    description: "High-performance websites and web apps built with modern frameworks for speed, SEO, and scalability.",
    features: ["React & Next.js", "SEO Optimized", "Fast Loading", "Responsive"],
    image: imgWebDev,
    path: "/services/web-development",
  },
  {
    label: "Mobile Apps",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Ready"],
    image: imgMobile,
    path: "/services/mobile-apps",
  },
  {
    label: "Custom Software",
    icon: Code,
    description: "Bespoke enterprise solutions designed to automate workflows, boost efficiency, and scale with your business.",
    features: ["APIs & Microservices", "Cloud Native", "Scalable", "Secure"],
    image: imgSoftware,
    path: "/services/custom-software",
  },
  {
    label: "UI/UX Design",
    icon: Palette,
    description: "Research-driven design that converts visitors into customers through intuitive, beautiful interfaces.",
    features: ["User Research", "Prototyping", "Design Systems", "Figma"],
    image: imgUiux,
    path: "/services/ui-ux-design",
  },
  {
    label: "Branding",
    icon: Paintbrush,
    description: "Strategic brand identity that tells your story and differentiates you in the market.",
    features: ["Logo Design", "Brand Strategy", "Guidelines", "Visual Identity"],
    image: imgBranding,
    path: "/services/branding",
  },
];

const growServices = [
  {
    label: "Digital Presence",
    icon: Monitor,
    description: "Establish and strengthen your online footprint with SEO, content strategy, and multi-channel visibility.",
    features: ["SEO", "Content Strategy", "Social Media", "Analytics"],
    image: imgDigital,
    path: "/services/digital-presence",
  },
  {
    label: "Growth Marketing",
    icon: TrendingUp,
    description: "Data-driven marketing campaigns that acquire customers, boost engagement, and maximize ROI.",
    features: ["PPC", "Analytics", "Automation", "A/B Testing"],
    image: imgGrowth,
    path: "/services/growth-marketing",
  },
  {
    label: "Sales & Revenue",
    icon: DollarSign,
    description: "Optimize your sales funnel with CRM integration, lead scoring, and conversion optimization strategies.",
    features: ["CRM Integration", "Lead Gen", "Conversion", "Pipeline"],
    image: imgSales,
    path: "/services/sales-revenue",
  },
  {
    label: "Strategy & Scaling",
    icon: BarChart3,
    description: "Strategic consulting to plan growth, enter new markets, and scale operations sustainably.",
    features: ["Roadmapping", "Market Entry", "KPIs", "Growth Plans"],
    image: imgStrategy,
    path: "/services/strategy-scaling",
  },
];

type ServiceItem = typeof buildServices[0];

const ServiceRow = ({ service, index, reversed }: { service: ServiceItem; index: number; reversed: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <Link to={service.path} className="group block">
      <div className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${reversed ? "lg:[direction:rtl]" : ""}`}>
        {/* Image */}
        <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden lg:[direction:ltr]">
          <img
            src={service.image}
            alt={service.label}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="lg:[direction:ltr] space-y-4 sm:space-y-5">
          {/* Number + Icon */}
          <div className="flex items-center gap-4">
            <span className="text-5xl sm:text-6xl font-bold text-foreground/[0.07] select-none leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {service.label}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            {service.description}
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((f) => (
              <span key={f} className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/50">
                {f}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary font-semibold pt-1 group-hover:gap-3 transition-all duration-300">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Services = () => {
  usePageSEO({
    title: "Services",
    description: "Explore Advora Digital's services — web development, mobile apps, UI/UX design, branding, growth marketing, and digital strategy for businesses.",
    canonical: "/services",
  });

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
        {/* Hero Section - Editorial Split Layout */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Card */}
            <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={serviceWebDev}
                    alt="Our Services"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>

                {/* Content */}
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
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
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

        {/* BUILD — Tech Services */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          {/* Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
              >
                <Code className="w-4 h-4" />
                BUILD
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl tracking-tight"
              >
                <span className="block font-serif italic font-normal">Technology</span>
                <span className="block font-bold">Solutions <span className="text-primary">We Build</span></span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-md text-lg"
            >
              End-to-end development expertise — from pixel-perfect frontends to robust backend architecture.
            </motion.p>
          </div>

          {/* Build Services — Alternating Rows */}
          <div className="space-y-16 sm:space-y-20">
            {buildServices.map((service, index) => (
              <ServiceRow key={service.label} service={service} index={index} reversed={index % 2 !== 0} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-border" />
        </div>

        {/* GROW & SCALE — Digital Services */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          {/* Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
              >
                <TrendingUp className="w-4 h-4" />
                GROW & SCALE
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl tracking-tight"
              >
                <span className="block font-serif italic font-normal">Digital Growth</span>
                <span className="block font-bold">That <span className="text-primary">Scales</span></span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-md text-lg"
            >
              Strategic marketing, branding, and growth services to amplify your digital presence.
            </motion.p>
          </div>

          {/* Grow Services — Alternating Rows */}
          <div className="space-y-16 sm:space-y-20">
            {growServices.map((service, index) => (
              <ServiceRow key={service.label} service={service} index={index} reversed={index % 2 !== 0} />
            ))}
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
