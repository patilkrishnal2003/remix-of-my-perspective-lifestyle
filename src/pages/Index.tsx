import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CodeTypingAnimation from "@/components/CodeTypingAnimation";
import { ArrowRight, Code, Globe, Smartphone, Database, Zap, Shield, Users, CheckCircle, Star, MessageSquare, Award, Lightbulb, Clock, Target, Play, Terminal } from "lucide-react";
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
        {/* Hero Section - Split Card Style */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-10 sm:pb-12 md:pb-16">
          <div className="rounded-3xl bg-[#f5f0eb] dark:bg-card overflow-hidden shadow-lg animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-foreground/10 bg-background/50 mb-6 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-foreground/70">Available for projects</span>
                </div>

                {/* Heading - Serif style */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-[1.15] tracking-tight mb-6 text-foreground">
                  Building
                  <br />
                  Digital
                  <br />
                  Excellence
                </h1>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md text-sm sm:text-base">
                  We craft scalable web applications, mobile solutions, and custom software that help ambitious businesses ship faster and grow smarter.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/contact">
                    <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-5 text-base hover:scale-105 transition-all">
                      Start a Project
                    </Button>
                  </Link>
                  <Link to="/portfolio" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1">
                    View Work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right - Code Window */}
              <div className="relative h-64 sm:h-80 lg:h-auto min-h-[280px] lg:min-h-[400px] order-1 lg:order-2 bg-slate-900 flex items-center justify-center p-6">
                {/* Code Window */}
                <div className="w-full max-w-md rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                  {/* Window Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">App.tsx</span>
                    <div className="w-16" />
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-4 min-h-[200px]">
                    <CodeTypingAnimation />
                  </div>
                </div>

                {/* Floating Terminal */}
                <div className="absolute bottom-4 left-4 w-48 rounded-lg overflow-hidden bg-slate-950 border border-slate-700 shadow-xl">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border-b border-slate-700">
                    <Terminal className="w-3 h-3 text-green-400" />
                    <span className="text-[10px] text-slate-400 font-mono">terminal</span>
                  </div>
                  <div className="p-2 font-mono text-[10px]">
                    <div className="text-green-400">$ npm run deploy</div>
                    <div className="text-slate-500 mt-0.5">✓ Build complete</div>
                    <div className="text-cyan-400">→ Live ✓</div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute top-4 right-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 p-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <div>
                      <p className="text-white font-semibold text-xs">150+ Shipped</p>
                      <p className="text-[10px] text-slate-400">Projects delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tagline below card - Italic serif style */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed mb-6">
              From idea to production in weeks, not months. We build software that scales.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-10">
              Full-stack development for startups and enterprises. Modern technologies, agile delivery, and a team that genuinely cares about your success.
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: "React", icon: SiReact, color: "text-cyan-500" },
                { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
                { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
                { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" }
              ].map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border hover:border-primary/30 transition-colors">
                  <tech.icon className={`h-4 w-4 ${tech.color}`} />
                  <span className="text-sm text-foreground/80">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="section-divider py-8 sm:py-12 pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
              {[
                { name: "TechCorp", logo: logoTechcorp },
                { name: "StartupX", logo: logoStartupx },
                { name: "FinanceFlow", logo: logoFinanceflow },
                { name: "HealthTrack", logo: logoHealthtrack },
                { name: "RetailHub", logo: logoRetailhub },
                { name: "EduLearn", logo: logoEdulearn }
              ].map((company) => (
                <div key={company.name} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                  />
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
