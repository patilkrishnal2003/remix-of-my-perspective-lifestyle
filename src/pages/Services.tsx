import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Smartphone, Code, Database, Cloud, Settings, Palette, LineChart, CheckCircle, Zap, Shield, Clock, ChevronRight, Search, FileText, Rocket } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import TechStackSection from "@/components/TechStackSection";
import { motion } from "framer-motion";

// Service images
import serviceWebDev from "@/assets/service-web-dev.jpg";
import serviceMobileDev from "@/assets/service-mobile-dev.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceDesign from "@/assets/service-design.jpg";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies. From landing pages to complex enterprise platforms, we create responsive, fast, and SEO-optimized solutions.",
      features: ["React & Next.js", "Custom CMS Integration", "E-commerce Solutions", "Progressive Web Apps"],
      path: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      features: ["React Native", "iOS & Android Native", "App Store Deployment", "Push Notifications"],
      path: "/services/mobile-apps"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to solve your unique business challenges and streamline operations.",
      features: ["Business Process Automation", "Legacy System Modernization", "Custom Integrations", "Scalable Architecture"],
      path: "/services/custom-software"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and APIs that power your applications with reliability and performance.",
      features: ["RESTful & GraphQL APIs", "Database Design", "Microservices", "Real-time Systems"],
      path: "/services/backend-systems"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup, migration, and management for scalable and cost-effective operations.",
      features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code"],
      path: "/services/cloud-solutions"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
      path: "/services/ui-ux-design"
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing technical support and maintenance to keep your applications running smoothly and securely.",
      features: ["24/7 Monitoring", "Bug Fixes & Updates", "Performance Optimization", "Security Patches"],
      path: "/contact"
    },
    {
      icon: LineChart,
      title: "Technical Consulting",
      description: "Strategic technology advice to help you make informed decisions and plan for future growth.",
      features: ["Technology Assessment", "Architecture Planning", "Team Augmentation", "Code Reviews"],
      path: "/contact"
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
        {/* Hero Section - Editorial Split Layout */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Card */}
            <div className="rounded-2xl sm:rounded-3xl bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
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
                  <div className="flex flex-wrap gap-1.5 mb-4">
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
                  <Link to={service.path}>
                    <Button variant="outline" className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
