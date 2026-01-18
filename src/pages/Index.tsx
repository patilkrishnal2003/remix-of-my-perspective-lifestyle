import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CodeTypingAnimation from "@/components/CodeTypingAnimation";
import { ArrowRight, Code, Globe, Smartphone, Database, Zap, Shield, Users, CheckCircle, Star, MessageSquare, Award, Lightbulb, Clock, Target, Laptop, Cpu, Cloud, Monitor } from "lucide-react";
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
        {/* Hero Section - Dark tech-themed with circuit lines */}
        <section className="relative min-h-screen pt-20 sm:pt-24 pb-16 overflow-hidden bg-[#0a1628]">
          {/* Tech Background with Circuit Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628]" />
            
            {/* Circuit lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Left side circuits - connecting from laptop */}
              <g stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6">
                {/* Horizontal line from left edge */}
                <path id="path-left-main" d="M 0,580 L 120,580 L 120,480 L 200,480" className="animate-draw-line" />
                <path id="path-left-up" d="M 200,480 L 200,400 L 280,400" className="animate-draw-line-delay-1" />
                <path id="path-left-branch" d="M 120,480 L 120,380 L 60,380 L 60,320" className="animate-draw-line-delay-2" />
                
                {/* Top horizontal line */}
                <path id="path-top" d="M 280,400 L 400,400 L 400,350 L 900,350" className="animate-draw-line-delay-2" />
                
                {/* Right side circuits - connecting to CPU */}
                <path id="path-right-1" d="M 900,350 L 900,200 L 1000,200" className="animate-draw-line-delay-3" />
                <path id="path-right-2" d="M 1000,200 L 1050,200 L 1050,120 L 1100,120" className="animate-draw-line-delay-3" />
                <path id="path-right-branch" d="M 1050,200 L 1050,280 L 1100,280" className="animate-draw-line-delay-4" />
                
                {/* Bottom right circuits - connecting to cloud */}
                <path id="path-bottom-main" d="M 900,350 L 900,500 L 1000,500" className="animate-draw-line-delay-3" />
                <path id="path-bottom-down" d="M 1000,500 L 1000,600 L 1100,600" className="animate-draw-line-delay-4" />
                <path id="path-bottom-branch" d="M 1000,600 L 1000,700 L 1200,700" className="animate-draw-line-delay-5" />
              </g>
              
              {/* Traveling data dots */}
              <g filter="url(#glow)">
                <circle r="4" fill="#3b82f6">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="2s">
                    <mpath href="#path-left-main" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#60a5fa">
                  <animateMotion dur="2s" repeatCount="indefinite" begin="2.5s">
                    <mpath href="#path-left-up" />
                  </animateMotion>
                </circle>
                <circle r="4" fill="#3b82f6">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="3s">
                    <mpath href="#path-top" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#60a5fa">
                  <animateMotion dur="2s" repeatCount="indefinite" begin="3.5s">
                    <mpath href="#path-right-1" />
                  </animateMotion>
                </circle>
                <circle r="4" fill="#3b82f6">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="4s">
                    <mpath href="#path-bottom-main" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#60a5fa">
                  <animateMotion dur="2s" repeatCount="indefinite" begin="4.5s">
                    <mpath href="#path-bottom-down" />
                  </animateMotion>
                </circle>
              </g>
              
              {/* Circuit nodes */}
              <g fill="#3b82f6">
                <circle cx="120" cy="580" r="5" opacity="0.8" className="animate-node-appear" />
                <circle cx="120" cy="480" r="4" opacity="0.6" className="animate-node-appear animate-node-delay-1" />
                <circle cx="200" cy="480" r="5" opacity="0.8" className="animate-node-appear animate-node-delay-1" />
                <circle cx="200" cy="400" r="4" opacity="0.6" className="animate-node-appear animate-node-delay-2" />
                <circle cx="280" cy="400" r="5" opacity="0.8" className="animate-node-appear animate-node-delay-2" />
                <circle cx="400" cy="400" r="4" opacity="0.6" className="animate-node-appear animate-node-delay-3" />
                <circle cx="400" cy="350" r="5" opacity="0.8" className="animate-node-appear animate-node-delay-3" />
                <circle cx="900" cy="350" r="5" opacity="0.8" className="animate-node-appear animate-node-delay-4" />
                <circle cx="900" cy="200" r="4" opacity="0.6" className="animate-node-appear animate-node-delay-4" />
                <circle cx="1000" cy="200" r="5" opacity="0.8" className="animate-node-appear animate-node-delay-5" />
                <circle cx="1050" cy="200" r="4" opacity="0.6" className="animate-node-appear animate-node-delay-5" />
                <circle cx="900" cy="500" r="5" opacity="0.8" className="animate-node-appear animate-node-delay-4" />
                <circle cx="1000" cy="500" r="4" opacity="0.6" className="animate-node-appear animate-node-delay-5" />
                <circle cx="1000" cy="600" r="5" opacity="0.8" className="animate-node-appear animate-node-delay-5" />
              </g>
            </svg>
            
            {/* Laptop icon - bottom left */}
            <div className="absolute left-[8%] bottom-[18%] hidden md:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="relative">
                <Laptop className="w-24 h-24 text-[#3b82f6]/70 stroke-[1.5]" />
                {/* Screen glow */}
                <div className="absolute inset-0 bg-[#3b82f6]/10 blur-xl rounded-lg" />
              </div>
            </div>
            
            {/* Code typing animation - left side */}
            <div className="absolute left-[3%] top-[28%] hidden lg:block animate-fade-in w-[280px]" style={{ animationDelay: '0.8s' }}>
              <CodeTypingAnimation />
            </div>
            
            {/* CPU chip - top right */}
            <div className="absolute right-[8%] top-[12%] hidden lg:block animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative p-3 rounded-lg border border-[#3b82f6]/30 bg-[#3b82f6]/5">
                <Cpu className="w-16 h-16 text-[#3b82f6]/80 stroke-[1.5]" />
                <div className="absolute inset-0 bg-[#3b82f6]/10 blur-xl rounded-lg" />
              </div>
            </div>
            
            {/* Cloud icon - right side */}
            <div className="absolute right-[5%] top-[55%] hidden lg:block animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="relative">
                <Cloud className="w-20 h-20 text-[#3b82f6]/70 stroke-[1.5]" />
                <div className="absolute inset-0 bg-[#3b82f6]/10 blur-xl rounded-lg" />
              </div>
            </div>
            
            {/* Small monitor/terminal - bottom right */}
            <div className="absolute right-[12%] bottom-[15%] hidden lg:block animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="relative p-2 rounded border border-[#3b82f6]/30 bg-[#1e1e2e]/80">
                <Monitor className="w-10 h-10 text-[#3b82f6]/70 stroke-[1.5]" />
              </div>
            </div>
            
            {/* Small decorative circles */}
            <div className="absolute left-[25%] top-[20%] w-2 h-2 rounded-full bg-[#3b82f6]/40 animate-pulse hidden md:block" />
            <div className="absolute right-[30%] top-[25%] w-3 h-3 rounded-full border border-[#3b82f6]/30 animate-pulse hidden md:block" style={{ animationDelay: '1s' }} />
            <div className="absolute left-[40%] bottom-[25%] w-2 h-2 rounded-full bg-[#3b82f6]/30 animate-pulse hidden md:block" style={{ animationDelay: '0.5s' }} />
            <div className="absolute right-[20%] bottom-[35%] w-3 h-3 rounded-full border border-[#3b82f6]/40 animate-pulse hidden md:block" style={{ animationDelay: '1.5s' }} />
            <div className="absolute left-[15%] top-[50%] w-2 h-2 rounded-full bg-[#3b82f6]/20 animate-pulse hidden md:block" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
            {/* Centered Content */}
            <div className="text-center max-w-4xl mx-auto space-y-8 animate-slide-up">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1]">
                <span className="block text-white">Inspiring Digital</span>
                <span className="block text-[#3b82f6]">Innovators</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-300/80 max-w-2xl mx-auto leading-relaxed">
                Advora Digital is where ambitious ideas thrive in the world of technology.
                <span className="block mt-2">Unleash your potential and join us to shape the future together!</span>
              </p>
              
              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/contact">
                  <Button className="bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-full px-10 py-7 text-lg font-medium group shadow-lg shadow-[#3b82f6]/25 hover:shadow-xl hover:shadow-[#3b82f6]/30 transition-all">
                    Get Started Today!
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/40 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#3b82f6] rotate-90" />
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
