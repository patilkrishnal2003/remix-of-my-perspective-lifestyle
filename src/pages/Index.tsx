import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSectionWithGradient from "@/components/ui/hero-section-with-gradient";

import { Zap, Shield, Users } from "lucide-react";

import TestimonialsSection from "@/components/TestimonialsSection";
import { type Testimonial } from "@/components/TestimonialCard";
import ResourcesTabSection from "@/components/ResourcesTabSection";
import CTASection from "@/components/CTASection";
import SolutionsCarouselSection from "@/components/SolutionsCarouselSection";
import DigitalServicesCarouselSection from "@/components/DigitalServicesCarouselSection";
import WhatMakesUsDifferentSection from "@/components/WhatMakesUsDifferentSection";
import BookingFlowSection from "@/components/BookingFlowSection";

import logoTechcorp from "@/assets/logo-techcorp.png";
import logoStartupx from "@/assets/logo-startupx.png";
import logoFinanceflow from "@/assets/logo-financeflow.png";
import logoHealthtrack from "@/assets/logo-healthtrack.png";
import logoRetailhub from "@/assets/logo-retailhub.png";
import logoEdulearn from "@/assets/logo-edulearn.png";

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
    <>
      <div className="min-h-screen animate-fade-in bg-background">
        <Header />
        
        <main>
          {/* New Hero Section with Gradient */}
          <HeroSectionWithGradient />

          {/* Trusted By Section - Marquee */}
          <section className="section-divider py-8 sm:py-12 pt-44 sm:pt-52 md:pt-60 overflow-hidden relative z-0 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 invisible">Trusted by innovative companies</p>
            </div>
            <div className="relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
              
              {/* Marquee container */}
              <div className="flex animate-marquee hover:[animation-play-state:paused]">
                {/* First set of logos */}
                {[...Array(2)].map((_, setIndex) => (
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
                          className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reorderable sections wrapper for mobile/tablet */}
          <div className="flex flex-col">
            {/* Tech Services Carousel Section - order 1 on all */}
            <div className="order-1">
              <SolutionsCarouselSection />
            </div>

            {/* What Makes Us Different Section - order 2 on mobile/tablet, order 3 on desktop */}
            <div className="order-2 lg:order-3">
              <WhatMakesUsDifferentSection />
            </div>

            {/* Digital Services Carousel Section - order 3 on mobile/tablet, order 2 on desktop */}
            <div className="order-3 lg:order-2">
              <DigitalServicesCarouselSection />
            </div>
          </div>

          {/* Testimonials Section */}
          <section className="section-divider">
            <TestimonialsSection testimonials={testimonials} />
          </section>

          {/* Booking Flow Section */}
          <BookingFlowSection />

          {/* Resources Tab Section */}
          <ResourcesTabSection />

          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
