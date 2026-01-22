import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSectionWithGradient from "@/components/ui/hero-section-with-gradient";
import ServicesTabSection from "@/components/ServicesTabSection";
import { ArrowRight, Zap, Shield, Users, MessageSquare, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import TestimonialsSection from "@/components/TestimonialsSection";
import { type Testimonial } from "@/components/TestimonialCard";
import ResourcesTabSection from "@/components/ResourcesTabSection";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RoadmapCard } from "@/components/ui/roadmap-card";
import FlipImageCarousel from "@/components/FlipImageCarousel";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiAmazonwebservices, SiDocker, SiGraphql, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import logoTechcorp from "@/assets/logo-techcorp.png";
import logoStartupx from "@/assets/logo-startupx.png";
import logoFinanceflow from "@/assets/logo-financeflow.png";
import logoHealthtrack from "@/assets/logo-healthtrack.png";
import logoRetailhub from "@/assets/logo-retailhub.png";
import logoEdulearn from "@/assets/logo-edulearn.png";
import whyChoose1 from "@/assets/why-choose-1.jpg";
import whyChoose2 from "@/assets/why-choose-2.jpg";
import whyChoose3 from "@/assets/why-choose-3.jpg";

const Index = () => {

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

  const techStackRow1 = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  ];

  const techStackRow2 = [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      platform: "google",
      title: "Exceptional delivery!",
      rating: 5,
      snippet: "Advora delivered our e-commerce platform on time and under budget. Their attention to detail is exceptional and the team was incredibly professional throughout.",
      readMoreUrl: "#",
      user: {
        name: "Jennifer Martinez",
        role: "CEO, RetailHub",
        avatar: "https://ui-avatars.com/api/?name=Jennifer+Martinez&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "2",
      platform: "google",
      title: "Outstanding user experience!",
      rating: 5,
      snippet: "The team understood our vision from day one. Our mobile app has received outstanding user reviews and downloads have exceeded our expectations.",
      readMoreUrl: "#",
      user: {
        name: "David Kim",
        role: "Founder, HealthTrack Pro",
        avatar: "https://ui-avatars.com/api/?name=David+Kim&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "3",
      platform: "google",
      title: "Go-to development partner!",
      rating: 5,
      snippet: "Professional, communicative, and technically excellent. Advora is our go-to development partner for all our digital projects.",
      readMoreUrl: "#",
      user: {
        name: "Sarah Thompson",
        role: "CTO, FinanceFlow",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Thompson&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "4",
      platform: "google",
      title: "Revenue increased by 40%!",
      rating: 5,
      snippet: "They transformed our outdated system into a modern, scalable platform. Revenue increased by 40% within months of the launch.",
      readMoreUrl: "#",
      user: {
        name: "Marcus Chen",
        role: "Director, TechCorp",
        avatar: "https://ui-avatars.com/api/?name=Marcus+Chen&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "5",
      platform: "google",
      title: "Students love it!",
      rating: 5,
      snippet: "Outstanding work on our learning management system. The user experience is intuitive and students love it. Highly recommend their services!",
      readMoreUrl: "#",
      user: {
        name: "Dr. Amanda Foster",
        role: "Dean, EduLearn Academy",
        avatar: "https://ui-avatars.com/api/?name=Amanda+Foster&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "6",
      platform: "google",
      title: "Above and beyond!",
      rating: 5,
      snippet: "Advora's team went above and beyond. They delivered features we didn't even know we needed but have become essential to our operations.",
      readMoreUrl: "#",
      user: {
        name: "Robert Patel",
        role: "Founder, StartupX",
        avatar: "https://ui-avatars.com/api/?name=Robert+Patel&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
  ];

  

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* New Hero Section with Gradient */}
        <HeroSectionWithGradient />

        {/* Trusted By Section - Marquee */}
        <section className="section-divider py-8 sm:py-12 pt-44 sm:pt-52 md:pt-60 overflow-hidden relative z-0 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">Trusted by innovative companies</p>
          </div>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Marquee container */}
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {/* First set of logos */}
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-12 sm:gap-16 md:gap-24 px-6 sm:px-8">
                  {[
                    { name: "TechCorp", logo: logoTechcorp },
                    { name: "StartupX", logo: logoStartupx },
                    { name: "FinanceFlow", logo: logoFinanceflow },
                    { name: "HealthTrack", logo: logoHealthtrack },
                    { name: "RetailHub", logo: logoRetailhub },
                    { name: "EduLearn", logo: logoEdulearn }
                  ].map((company) => (
                    <div key={`${setIndex}-${company.name}`} className="hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesTabSection />

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


        {/* Why Choose Advora - Flip Image Carousel */}
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Advora?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We're your technology partners, delivering excellence at every step
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <FlipImageCarousel
                items={[
                  {
                    image: whyChoose1,
                    title: "Collaborative Team",
                    subtitle: "Working Together for Success",
                    description: "Our expert team collaborates closely with you to understand your vision and deliver solutions that exceed expectations. We believe in transparent communication and partnership-driven development."
                  },
                  {
                    image: whyChoose2,
                    title: "Technical Excellence",
                    subtitle: "Cutting-Edge Development",
                    description: "Our developers use modern technologies and best practices to build scalable, maintainable solutions. From architecture to deployment, we ensure enterprise-grade quality in every line of code."
                  },
                  {
                    image: whyChoose3,
                    title: "24/7 Support",
                    subtitle: "Always Here When You Need Us",
                    description: "Our dedicated support team is available around the clock to assist you. We provide ongoing maintenance, updates, and rapid response to ensure your applications run smoothly."
                  }
                ]}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-muted-foreground">Modern tools for modern solutions</p>
          </div>
          
          {/* Scrolling Marquee */}
          <div className="relative overflow-hidden">
            {/* Row 1 - scrolling left */}
            <div className="flex gap-6 mb-6 animate-marquee">
              {[...techStackRow1, ...techStackRow1, ...techStackRow1, ...techStackRow1].map((tech, index) => (
                <div
                  key={`row1-${index}`}
                  className="group flex-shrink-0"
                >
                  <div 
                    className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer"
                    style={{ 
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}40, 0 0 40px ${tech.color}20`;
                      e.currentTarget.style.borderColor = tech.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <tech.icon 
                      className="w-8 h-8 transition-colors duration-300" 
                      style={{ color: tech.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 - scrolling right */}
            <div className="flex gap-6 animate-marquee-reverse">
              {[...techStackRow2, ...techStackRow2, ...techStackRow2, ...techStackRow2].map((tech, index) => (
                <div
                  key={`row2-${index}`}
                  className="group flex-shrink-0"
                >
                  <div 
                    className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer"
                    style={{ 
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}40, 0 0 40px ${tech.color}20`;
                      e.currentTarget.style.borderColor = tech.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <tech.icon 
                      className="w-8 h-8 transition-colors duration-300" 
                      style={{ color: tech.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Fade overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
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
            
            <RoadmapCard
              description="From idea to launch, we guide you through every step"
              items={[
                {
                  quarter: "Step 1",
                  title: "Consultation & Discovery",
                  description: "We discuss your vision, goals, and requirements in detail to understand your needs.",
                  status: "done"
                },
                {
                  quarter: "Step 2",
                  title: "Strategy & Planning",
                  description: "We create a comprehensive plan and technical roadmap tailored to your project.",
                  status: "done"
                },
                {
                  quarter: "Step 3",
                  title: "Design & Development",
                  description: "Our team builds your solution with regular updates and collaborative feedback.",
                  status: "in-progress"
                },
                {
                  quarter: "Step 4",
                  title: "Launch & Support",
                  description: "We deploy your project and provide ongoing support for continued success.",
                  status: "upcoming"
                }
              ]}
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-divider py-16 sm:py-20 pt-20 sm:pt-24 overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8">
            <TestimonialsSection testimonials={testimonials} />
          </div>
        </section>

        {/* Resources Tab Section */}
        <ResourcesTabSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
