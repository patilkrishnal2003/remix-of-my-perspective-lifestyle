import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Code, Globe, Smartphone, Database, Zap, Shield, Users, CheckCircle, Star, MessageSquare, Award, Lightbulb, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedPosts } from "@/data/blogPosts";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiAmazonwebservices, SiDocker, SiGraphql, SiTailwindcss, SiGit } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import projectFinanceFlow from "@/assets/project-financeflow.jpg";
import projectHealthTrack from "@/assets/project-healthtrack.jpg";
import projectRetailHub from "@/assets/project-retailhub.jpg";
import logoTechcorp from "@/assets/logo-techcorp.png";
import logoStartupx from "@/assets/logo-startupx.png";
import logoFinanceflow from "@/assets/logo-financeflow.png";
import logoHealthtrack from "@/assets/logo-healthtrack.png";
import logoRetailhub from "@/assets/logo-retailhub.png";
import logoEdulearn from "@/assets/logo-edulearn.png";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that deliver seamless user experiences."
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to solve your unique business challenges."
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable APIs and database architectures that power your applications."
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support" }
  ];

  const features = [
    { icon: Zap, title: "Fast Delivery", description: "Agile development for quick turnaround" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security standards" },
    { icon: Users, title: "Dedicated Team", description: "Expert developers assigned to your project" }
  ];

  const techStack = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Docker", icon: SiDocker },
    { name: "GraphQL", icon: SiGraphql },
    { name: "React Native", icon: TbBrandReactNative },
    { name: "Tailwind CSS", icon: SiTailwindcss }
  ];

  const testimonials = [
    {
      quote: "Advora delivered our e-commerce platform on time and under budget. Their attention to detail is exceptional.",
      author: "Jennifer Martinez",
      role: "CEO, RetailHub",
      rating: 5
    },
    {
      quote: "The team understood our vision from day one. Our mobile app has received outstanding user reviews.",
      author: "David Kim",
      role: "Founder, HealthTrack Pro",
      rating: 5
    },
    {
      quote: "Professional, communicative, and technically excellent. Advora is our go-to development partner.",
      author: "Sarah Thompson",
      role: "CTO, FinanceFlow",
      rating: 5
    },
    {
      quote: "They transformed our outdated system into a modern, scalable platform. Revenue increased by 40% within months.",
      author: "Marcus Chen",
      role: "Director, TechCorp",
      rating: 5
    },
    {
      quote: "Outstanding work on our learning management system. The user experience is intuitive and students love it.",
      author: "Dr. Amanda Foster",
      role: "Dean, EduLearn Academy",
      rating: 5
    },
    {
      quote: "Advora's team went above and beyond. They delivered features we didn't even know we needed.",
      author: "Robert Patel",
      role: "Founder, StartupX",
      rating: 5
    }
  ];

  const featuredPosts = getFeaturedPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section - Tech-themed with circuit lines */}
        <section className="relative min-h-screen pt-20 sm:pt-24 pb-16 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
          {/* Tech Background with Circuit Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Circuit lines SVG */}
            <svg className="absolute inset-0 w-full h-full circuit-glow" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                </linearGradient>
                {/* Glowing dot filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Circuit lines with proper coordinates */}
              <g stroke="url(#circuit-gradient)" strokeWidth="2" fill="none">
                {/* Bottom left circuit - connects to laptop area */}
                <path id="path-left-1" d="M 0,560 L 80,560 L 80,440 L 150,440" className="animate-draw-line" />
                <path id="path-left-2" d="M 150,440 L 150,360 L 250,360" className="animate-draw-line-delay-1" />
                
                {/* Top right circuit - connects to CPU */}
                <path id="path-right-1" d="M 750,0 L 750,64 L 850,64 L 850,144" className="animate-draw-line-delay-1" />
                <path id="path-right-2" d="M 850,144 L 920,144 L 920,240 L 1000,240" className="animate-draw-line-delay-2" />
                
                {/* Bottom right circuit - connects to cloud */}
                <path id="path-bottom-1" d="M 1000,600 L 880,600 L 880,520 L 800,520" className="animate-draw-line-reverse" />
                <path id="path-bottom-2" d="M 800,520 L 800,640 L 700,640 L 700,720" className="animate-draw-line-delay-3" />
              </g>
              
              {/* Traveling data dots */}
              <g filter="url(#glow)">
                <circle r="5" fill="hsl(var(--primary))" opacity="0.9">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2s">
                    <mpath href="#path-left-1" />
                  </animateMotion>
                </circle>
                
                <circle r="4" fill="hsl(var(--primary))" opacity="0.8">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="2.5s">
                    <mpath href="#path-left-2" />
                  </animateMotion>
                </circle>
                
                <circle r="5" fill="hsl(var(--primary))" opacity="0.9">
                  <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.2s">
                    <mpath href="#path-right-1" />
                  </animateMotion>
                </circle>
                
                <circle r="4" fill="hsl(var(--primary))" opacity="0.8">
                  <animateMotion dur="3.2s" repeatCount="indefinite" begin="2.8s">
                    <mpath href="#path-right-2" />
                  </animateMotion>
                </circle>
                
                <circle r="5" fill="hsl(var(--primary))" opacity="0.85">
                  <animateMotion dur="2.6s" repeatCount="indefinite" begin="3s">
                    <mpath href="#path-bottom-1" />
                  </animateMotion>
                </circle>
                
                <circle r="4" fill="hsl(var(--primary))" opacity="0.75">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="3.5s">
                    <mpath href="#path-bottom-2" />
                  </animateMotion>
                </circle>
                
                {/* Second wave */}
                <circle r="4" fill="hsl(var(--primary))" opacity="0.6">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="3.5s">
                    <mpath href="#path-left-1" />
                  </animateMotion>
                </circle>
                <circle r="4" fill="hsl(var(--primary))" opacity="0.6">
                  <animateMotion dur="2.8s" repeatCount="indefinite" begin="4s">
                    <mpath href="#path-right-1" />
                  </animateMotion>
                </circle>
              </g>
              
              {/* Circuit nodes */}
              <g>
                <circle cx="80" cy="560" r="6" fill="hsl(var(--primary))" fillOpacity="0.5" className="animate-node-appear animate-node-delay-1" />
                <circle cx="150" cy="440" r="5" fill="hsl(var(--primary))" fillOpacity="0.4" className="animate-node-appear animate-node-delay-2" />
                <circle cx="250" cy="360" r="6" fill="hsl(var(--primary))" fillOpacity="0.5" className="animate-node-appear animate-node-delay-3" />
                <circle cx="750" cy="64" r="6" fill="hsl(var(--primary))" fillOpacity="0.5" className="animate-node-appear animate-node-delay-2" />
                <circle cx="850" cy="144" r="5" fill="hsl(var(--primary))" fillOpacity="0.4" className="animate-node-appear animate-node-delay-3" />
                <circle cx="920" cy="240" r="6" fill="hsl(var(--primary))" fillOpacity="0.5" className="animate-node-appear animate-node-delay-4" />
                <circle cx="880" cy="600" r="5" fill="hsl(var(--primary))" fillOpacity="0.4" className="animate-node-appear animate-node-delay-3" />
                <circle cx="800" cy="520" r="6" fill="hsl(var(--primary))" fillOpacity="0.5" className="animate-node-appear animate-node-delay-4" />
                <circle cx="700" cy="640" r="5" fill="hsl(var(--primary))" fillOpacity="0.4" className="animate-node-appear animate-node-delay-5" />
              </g>
            </svg>
            
            {/* Floating tech icons */}
            {/* Code brackets - left side */}
            <div className="absolute left-[3%] top-[40%] text-primary/30 animate-float-slow hidden md:block">
              <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10 L5 40 L20 70" />
                <path d="M40 10 L55 40 L40 70" />
              </svg>
            </div>
            
            {/* Laptop icon - bottom left */}
            <div className="absolute left-[5%] bottom-[20%] text-primary/25 animate-float-slower hidden md:block">
              <svg width="100" height="70" viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="5" width="60" height="40" rx="3" />
                <path d="M5 50 L75 50 L80 60 L0 60 Z" />
                {/* Screen lines */}
                <line x1="18" y1="15" x2="50" y2="15" strokeOpacity="0.5" />
                <line x1="18" y1="22" x2="45" y2="22" strokeOpacity="0.5" />
                <line x1="18" y1="29" x2="55" y2="29" strokeOpacity="0.5" />
              </svg>
            </div>
            
            {/* CPU chip - top right */}
            <div className="absolute right-[8%] top-[15%] text-primary/30 animate-float-slow hidden lg:block">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="20" y="20" width="40" height="40" rx="4" />
                <rect x="28" y="28" width="24" height="24" rx="2" fill="hsl(var(--primary))" fillOpacity="0.2" />
                {/* Pins */}
                <line x1="30" y1="20" x2="30" y2="10" />
                <line x1="40" y1="20" x2="40" y2="10" />
                <line x1="50" y1="20" x2="50" y2="10" />
                <line x1="30" y1="60" x2="30" y2="70" />
                <line x1="40" y1="60" x2="40" y2="70" />
                <line x1="50" y1="60" x2="50" y2="70" />
                <line x1="20" y1="30" x2="10" y2="30" />
                <line x1="20" y1="40" x2="10" y2="40" />
                <line x1="20" y1="50" x2="10" y2="50" />
                <line x1="60" y1="30" x2="70" y2="30" />
                <line x1="60" y1="40" x2="70" y2="40" />
                <line x1="60" y1="50" x2="70" y2="50" />
              </svg>
            </div>
            
            {/* Cloud icon - right side */}
            <div className="absolute right-[3%] top-[45%] text-primary/25 animate-float-slower hidden lg:block">
              <svg width="90" height="60" viewBox="0 0 90 60" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M25 45 C10 45 10 30 20 25 C20 10 40 5 50 15 C60 5 85 10 80 30 C95 35 90 50 75 50 L25 50" />
                {/* Connection lines */}
                <line x1="90" y1="35" x2="100" y2="35" strokeOpacity="0.5" />
                <line x1="90" y1="42" x2="105" y2="42" strokeOpacity="0.5" />
              </svg>
            </div>
            
            {/* Small decorative circles */}
            <div className="absolute left-[20%] top-[25%] w-3 h-3 rounded-full bg-primary/20 animate-pulse hidden md:block" />
            <div className="absolute right-[25%] top-[60%] w-2 h-2 rounded-full bg-primary/30 animate-pulse hidden md:block" style={{ animationDelay: '1s' }} />
            <div className="absolute left-[45%] bottom-[30%] w-4 h-4 rounded-full border-2 border-primary/20 animate-pulse hidden md:block" style={{ animationDelay: '0.5s' }} />
            <div className="absolute right-[15%] bottom-[25%] w-3 h-3 rounded-full bg-primary/15 animate-pulse hidden md:block" style={{ animationDelay: '1.5s' }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
            {/* Centered Content */}
            <div className="text-center max-w-4xl mx-auto space-y-8 animate-slide-up">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1]">
                <span className="block">Inspiring Digital</span>
                <span className="block text-primary">Innovators</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Advora Digital is where ambitious ideas thrive in the world of technology.
                <span className="block mt-2">Unleash your potential and join us to shape the future together!</span>
              </p>
              
              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-lg font-medium group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                    Get Started Today!
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-primary rotate-90" />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section - Marquee */}
        <section className="section-divider py-8 sm:py-12 pt-12 sm:pt-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">Trusted by innovative companies</p>
          </div>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Marquee container */}
            <div className="flex animate-marquee">
              {/* First set of logos */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-10 sm:gap-16 md:gap-20 px-5 sm:px-8">
                  {[
                    { name: "TechCorp", logo: logoTechcorp },
                    { name: "StartupX", logo: logoStartupx },
                    { name: "FinanceFlow", logo: logoFinanceflow },
                    { name: "HealthTrack", logo: logoHealthtrack },
                    { name: "RetailHub", logo: logoRetailhub },
                    { name: "EduLearn", logo: logoEdulearn }
                  ].map((company) => (
                    <div key={`${setIndex}-${company.name}`} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex-shrink-0">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive development solutions tailored to your business needs
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div
                  className="group p-8 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="rounded-full px-8 py-6">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Focus Section */}
        <section className="section-divider py-16 sm:py-20 pt-20 sm:pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  I build high quality apps that your
                  <span className="block">users love</span>
                </h2>
                <p className="text-primary font-medium text-lg">here's what I focus on</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  number: "1",
                  title: "Functionality first.",
                  description: "I go for buttery smooth UX that solves user problems."
                },
                {
                  number: "2",
                  title: "Mobile first, Minimalistic design.",
                  description: "Pixel perfect development."
                },
                {
                  number: "3",
                  title: "App is adaptable",
                  description: "for future enhancements or feature expansions."
                }
              ].map((item, index) => (
                <ScrollReveal key={item.number} delay={index * 150}>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl sm:text-3xl font-bold">{item.number}</span>
                    </div>
                    <div className="pt-2">
                      <span className="font-bold text-lg">{item.title}</span>{" "}
                      <span className="text-muted-foreground">{item.description}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-xl text-muted-foreground">Some of our recent projects</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: projectFinanceFlow, title: "FinanceFlow", category: "Web Application" },
              { image: projectHealthTrack, title: "HealthTrack Pro", category: "Mobile App" },
              { image: projectRetailHub, title: "RetailHub", category: "E-commerce" }
            ].map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 100}>
                <Link 
                  to="/portfolio"
                  className="group rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] block"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-card">
                    <span className="text-xs text-primary font-medium">{project.category}</span>
                    <h3 className="font-bold mt-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="text-center mt-10">
              <Link to="/portfolio">
                <Button variant="outline" className="rounded-full px-8 py-6">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </section>

        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="fade-right">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-bold">Why choose Advora?</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We're not just developers—we're your technology partners. We combine technical expertise with business acumen to deliver solutions that drive real results.
                  </p>
                  <div className="space-y-4">
                    {features.map((feature) => (
                      <div key={feature.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="space-y-6">
                  <div className="p-8 rounded-3xl bg-background border border-border">
                    <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                    <div className="space-y-4">
                      {["Discovery & Planning", "Design & Prototyping", "Development & Testing", "Launch & Support"].map((step, index) => (
                        <div key={step} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-muted-foreground">Modern tools for modern solutions</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`group flex flex-col items-center gap-2 animate-slide-up stagger-${(index % 6) + 1}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-accent/50 group-hover:scale-110 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-divider py-16 sm:py-20 pt-20 sm:pt-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-muted-foreground">Don't just take our word for it</p>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
            <div className="text-center mt-10 sm:mt-12">
              <Link to="/portfolio">
                <Button variant="outline" className="rounded-full px-8 py-6">
                  View More Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">From Our Blog</h2>
              <p className="text-muted-foreground">Insights and expertise from our team</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-primary hover:underline">
              View all posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group rounded-3xl bg-card border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${index + 1}`}
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="text-sm text-muted-foreground">{post.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link to="/blog">
              <Button variant="outline" className="rounded-full px-8">
                View All Posts
              </Button>
            </Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A transparent, collaborative process designed for your success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: MessageSquare, title: "1. Consultation", description: "We discuss your vision, goals, and requirements in detail." },
                { icon: Lightbulb, title: "2. Strategy", description: "We create a comprehensive plan and technical roadmap." },
                { icon: Code, title: "3. Development", description: "Our team builds your solution with regular updates." },
                { icon: Target, title: "4. Launch", description: "We deploy and provide ongoing support for success." }
              ].map((step, index) => (
                <div key={step.title} className={`text-center animate-slide-up stagger-${index + 1}`}>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "How long does a typical project take?", a: "Project timelines vary based on scope. Most web applications take 8-16 weeks, while simpler websites can be completed in 4-6 weeks." },
                { q: "What is your pricing model?", a: "We offer flexible pricing including fixed-price projects and time & materials arrangements. We'll recommend the best approach based on your needs." },
                { q: "Do you provide ongoing support?", a: "Yes! We offer maintenance and support packages to keep your application running smoothly after launch." },
                { q: "What technologies do you specialize in?", a: "We specialize in React, Node.js, React Native, and cloud platforms like AWS and Azure. We choose the best tech for each project." }
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

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-[2.5rem] bg-accent text-accent-foreground p-12 md:p-16 text-center animate-scale-in">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to start your project?</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Let's discuss how we can help bring your vision to life. Get a free consultation today.
              </p>
              <Link to="/contact">
                <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 rounded-full px-10 py-6 text-lg hover:scale-105 transition-all mt-4">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
