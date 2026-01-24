import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Smartphone, Code, Database, Cloud, Settings, Palette, LineChart, CheckCircle, Zap, Shield, Clock, ChevronRight, Search, FileText, Rocket } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import TechStackSection from "@/components/TechStackSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";

// Service images
import serviceWebDev from "@/assets/service-web-dev.jpg";
import serviceMobileDev from "@/assets/service-mobile-dev.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceDesign from "@/assets/service-design.jpg";

const servicesData = [
  {
    id: "web",
    label: "Web Development",
    icon: Globe,
    title: "Custom Web Solutions",
    tagline: "Build powerful web experiences",
    description: "From responsive websites to complex web applications, we create digital solutions that drive business growth and user engagement.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
    path: "/services/web-development",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    tagline: "Reach users everywhere",
    description: "Native and cross-platform mobile applications built with React Native and Flutter for seamless experiences on iOS and Android.",
    features: ["iOS & Android", "Offline Support", "Push Notifications", "App Store Ready"],
    path: "/services/mobile-apps",
  },
  {
    id: "software",
    label: "Custom Software",
    icon: Code,
    title: "Enterprise Software",
    tagline: "Tailored to your business",
    description: "Bespoke software solutions designed to automate processes, improve efficiency, and solve your unique business challenges.",
    features: ["Process Automation", "Integration Ready", "Scalable", "Maintainable"],
    path: "/services/custom-software",
  },
  {
    id: "backend",
    label: "Backend Systems",
    icon: Database,
    title: "Robust Backend Architecture",
    tagline: "Power your applications",
    description: "Scalable APIs, microservices, and database architectures that form the backbone of high-performance applications.",
    features: ["RESTful APIs", "GraphQL", "Cloud Native", "High Availability"],
    path: "/services/backend-systems",
  },
  {
    id: "design",
    label: "UI/UX Design",
    icon: Palette,
    title: "User-Centered Design",
    tagline: "Design that converts",
    description: "Beautiful, intuitive interfaces backed by user research and design thinking to maximize engagement and conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    path: "/services/ui-ux-design",
  },
  {
    id: "cloud",
    label: "Cloud Solutions",
    icon: Cloud,
    title: "Cloud Infrastructure",
    tagline: "Scale with confidence",
    description: "AWS, Azure, and Google Cloud solutions for hosting, deployment, and infrastructure management with 99.9% uptime.",
    features: ["Auto Scaling", "CI/CD Pipelines", "Monitoring", "Cost Optimized"],
    path: "/services/cloud-solutions",
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: Settings,
    title: "Ongoing Support & Maintenance",
    tagline: "Keep your systems running",
    description: "Ongoing technical support and maintenance to keep your applications running smoothly and securely with 24/7 monitoring.",
    features: ["24/7 Monitoring", "Bug Fixes", "Performance Optimization", "Security Patches"],
    path: "/contact",
  },
  {
    id: "consulting",
    label: "Consulting",
    icon: LineChart,
    title: "Technical Consulting",
    tagline: "Strategic technology advice",
    description: "Strategic technology advice to help you make informed decisions, plan architecture, and prepare for future growth.",
    features: ["Tech Assessment", "Architecture Planning", "Team Augmentation", "Code Reviews"],
    path: "/contact",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("web");

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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] text-foreground">
                    Expert Solutions
                    <span className="block">For Your Business</span>
                  </h1>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
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

        {/* Services Tab Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-stack development expertise for every need
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation */}
            <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`relative px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    activeTab === service.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {service.label}
                  {activeTab === service.id && (
                    <motion.div
                      layoutId="activeServicesPageTabUnderline"
                      className="absolute -bottom-[1px] left-0 right-0 h-[3px] bg-primary z-10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
              {/* Full-width line below tabs */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border" />
            </div>

            {/* Tab Content */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {servicesData.map((service) => (
                  <TabsContent
                    key={service.id}
                    value={service.id}
                    className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`w-full rounded-[2.5rem] sm:rounded-[3rem] p-8 md:p-12 relative overflow-hidden ${
                        servicesData.findIndex(s => s.id === service.id) % 2 === 0
                          ? "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50"
                          : "bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10"
                      }`}
                    >
                      {/* Decorative elements */}
                      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 ${
                        servicesData.findIndex(s => s.id === service.id) % 2 === 0
                          ? "bg-slate-200/40 dark:bg-slate-700/30"
                          : "bg-primary/20 dark:bg-primary/30"
                      }`} />
                      <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 ${
                        servicesData.findIndex(s => s.id === service.id) % 2 === 0
                          ? "bg-slate-300/30 dark:bg-slate-600/20"
                          : "bg-primary/15 dark:bg-primary/25"
                      }`} />
                      
                      <div className="relative z-10 flex flex-col items-center text-center gap-6">
                        {/* Icon */}
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                          servicesData.findIndex(s => s.id === service.id) % 2 === 0
                            ? "bg-slate-800 dark:bg-slate-200"
                            : "bg-primary"
                        }`}>
                          <service.icon className={`w-10 h-10 ${
                            servicesData.findIndex(s => s.id === service.id) % 2 === 0
                              ? "text-white dark:text-slate-800"
                              : "text-primary-foreground"
                          }`} />
                        </div>
                        
                        {/* Content */}
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            {service.tagline}
                          </p>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground max-w-2xl mb-6">
                            {service.description}
                          </p>
                          
                          {/* Features - Transparent badges */}
                          <div className="flex flex-wrap justify-center gap-3 mb-6">
                            {service.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-3 py-1 bg-transparent border border-foreground/20 rounded-full text-sm font-medium text-foreground"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                          
                          {/* CTA Buttons */}
                          <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact">
                              <Button className={`rounded-full px-6 ${
                                servicesData.findIndex(s => s.id === service.id) % 2 === 0
                                  ? "bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-slate-100 dark:text-slate-800"
                                  : "bg-primary hover:bg-primary/90"
                              }`}>
                                Get Started
                              </Button>
                            </Link>
                            <Link to={service.path}>
                              <Button variant="outline" className="rounded-full px-6 bg-white/60 backdrop-blur-sm border-foreground/20 hover:bg-white/80 hover:text-foreground">
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </section>

        {/* Process Section - Minimal Timeline */}
        <section className="section-divider py-20 pt-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-muted/50 rounded-[2.5rem] sm:rounded-[3rem] p-8 md:p-12 lg:p-16">
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
