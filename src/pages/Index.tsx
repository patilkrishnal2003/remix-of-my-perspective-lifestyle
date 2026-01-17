import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { BentoCard, BentoGrid } from "@/components/BentoGrid";
import { FloatingElements } from "@/components/FloatingElements";
import { ArrowRight, Code, Globe, Smartphone, Database, Zap, Shield, Users, CheckCircle, Star, MessageSquare, Award, Lightbulb, Clock, Target, Sparkles, Layers, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedPosts } from "@/data/blogPosts";
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

  const marqueeTestimonials = [
    {
      author: {
        name: "Jennifer Martinez",
        handle: "@retailhub_ceo",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Advora delivered our e-commerce platform on time and under budget. Their attention to detail is exceptional."
    },
    {
      author: {
        name: "David Kim",
        handle: "@davidkim_founder",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "The team understood our vision from day one. Our mobile app has received outstanding user reviews."
    },
    {
      author: {
        name: "Sarah Thompson",
        handle: "@sarah_cto",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Professional, communicative, and technically excellent. Advora is our go-to development partner."
    },
    {
      author: {
        name: "Marcus Chen",
        handle: "@marcus_techcorp",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "They transformed our outdated system into a modern, scalable platform. Revenue increased by 40% within months."
    },
    {
      author: {
        name: "Dr. Amanda Foster",
        handle: "@amanda_edulearn",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Outstanding work on our learning management system. The user experience is intuitive and students love it."
    },
    {
      author: {
        name: "Robert Patel",
        handle: "@robert_startupx",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Advora's team went above and beyond. They delivered features we didn't even know we needed."
    }
  ];

  const featuredPosts = getFeaturedPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-start pt-20 sm:pt-24">
          {/* Plain white background (removed decorative hero overlays) */}
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-10 sm:pb-12 w-full">
            {/* Main Hero Content - Centered */}
            <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-slide-down">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium">Available for new projects</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2]">
                We craft software
                <span className="block mt-2 pb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  that drives growth
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Premium software development for startups and enterprises. 
                We turn complex ideas into elegant, scalable solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-lg font-medium hover:scale-105 transition-all shadow-lg">
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-medium hover:scale-105 transition-all">
                    View Case Studies
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 sm:pt-12">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[logoTechcorp, logoStartupx, logoFinanceflow].map((logo, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center overflow-hidden">
                          <img src={logo} alt="" className="w-6 h-6 object-contain" />
                        </div>
                      ))}
                    </div>
                    <span>50+ companies trust us</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-border" />
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span>5.0 rating</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-border" />
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>150+ projects delivered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-slide-up stagger-2">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="group p-6 sm:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 hover:bg-card transition-all duration-300 text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">{stat.value}</div>
                  <div className="text-sm sm:text-base text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
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
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                  variant="compact"
                />
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
          </div>
        </section>

        {/* Focus Section - Bento Grid */}
        <section className="section-divider py-16 sm:py-20 pt-20 sm:pt-24 relative overflow-hidden">
          <FloatingElements />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4" />
                  Our Approach
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Building apps that your
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">users love</span>
                </h2>
              </div>
            </ScrollReveal>
            
            <BentoGrid className="lg:grid-cols-4">
              {/* Functionality First card */}
              <ScrollReveal delay={0}>
                <BentoCard
                  icon={Zap}
                  title="Functionality First"
                  description="We prioritize buttery smooth UX that solves real user problems."
                  gradient="from-yellow-500/30 to-orange-500/20"
                />
              </ScrollReveal>

              {/* Mobile first card */}
              <ScrollReveal delay={100}>
                <BentoCard
                  icon={Smartphone}
                  title="Mobile First Design"
                  description="Pixel-perfect, responsive development that looks stunning on every device."
                  gradient="from-blue-500/30 to-cyan-500/20"
                />
              </ScrollReveal>

              {/* Adaptable card */}
              <ScrollReveal delay={200}>
                <BentoCard
                  icon={Layers}
                  title="Future-Ready Architecture"
                  description="Built for scalability and easy feature expansions down the road."
                  gradient="from-purple-500/30 to-pink-500/20"
                />
              </ScrollReveal>

              {/* AI-Powered card */}
              <ScrollReveal delay={300}>
                <BentoCard
                  icon={Cpu}
                  title="AI-Powered Solutions"
                  description="Leverage cutting-edge AI to automate workflows and enhance experiences."
                  gradient="from-emerald-500/30 to-teal-500/20"
                />
              </ScrollReveal>
            </BentoGrid>
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
        <TestimonialsSection
          title="What Our Clients Say"
          description="Don't just take our word for it"
          testimonials={marqueeTestimonials}
          className="section-divider pt-20 sm:pt-24"
        />
        <div className="text-center pb-8">
          <Link to="/portfolio">
            <Button variant="outline" className="rounded-full px-8 py-6">
              View More Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

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
