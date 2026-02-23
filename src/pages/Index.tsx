import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSectionWithGradient from "@/components/ui/hero-section-with-gradient";

import { Zap, Shield, Users } from "lucide-react";
import { SiGoogle, SiAmazon, SiMeta, SiApple, SiNetflix, SiSpotify } from "react-icons/si";

import TestimonialsSection from "@/components/TestimonialsSection";
import { usePageSEO } from "@/hooks/usePageSEO";
import { type Testimonial } from "@/components/TestimonialCard";
import ResourcesTabSection from "@/components/ResourcesTabSection";
import CTASection from "@/components/CTASection";
import SolutionsCarouselSection from "@/components/SolutionsCarouselSection";
import DigitalServicesCarouselSection from "@/components/DigitalServicesCarouselSection";
import WhatMakesUsDifferentSection from "@/components/WhatMakesUsDifferentSection";
import BookingFlowSection from "@/components/BookingFlowSection";

const trustedCompanies = [
  { name: "Google", icon: SiGoogle, color: "#4285F4" },
  { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
  { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
  { name: "Meta", icon: SiMeta, color: "#0081FB" },
  { name: "Apple", icon: SiApple, color: "#A2AAAD" },
  { name: "Netflix", icon: SiNetflix, color: "#E50914" }
];

const Index = () => {
  usePageSEO({
    title: "Software & Web Development Agency",
    description: "Advora Digital transforms your ideas into powerful software solutions. Expert web development, mobile apps, and custom software for growing businesses in Pune, India.",
    canonical: "/",
  });

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
        name: "Neeraj Yadav",
        role: "Founder, Connecttly",
        avatar: "https://ui-avatars.com/api/?name=Neeraj+Yadav&background=6366f1&color=fff&bold=true",
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
        name: "Karamveer Singh",
        role: "Founder, Theduocean",
        avatar: "https://ui-avatars.com/api/?name=Karamveer+Singh&background=6366f1&color=fff&bold=true",
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
        name: "Soni Patel",
        role: "Owner, Tadoba Footprint Resort",
        avatar: "https://ui-avatars.com/api/?name=Soni+Patel&background=6366f1&color=fff&bold=true",
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
        name: "Jaideep Ojha",
        role: "Founder, Wild Spirit Stays",
        avatar: "https://ui-avatars.com/api/?name=Jaideep+Ojha&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "5",
      platform: "google",
      title: "Students love it!",
      rating: 5,
      snippet: "Outstanding work on our clinic's digital presence. The user experience is intuitive and patients love it. Highly recommend their services!",
      readMoreUrl: "#",
      user: {
        name: "Dr. Rinni Raichandani",
        role: "Founder, Vidhan Dental Clinic",
        avatar: "https://ui-avatars.com/api/?name=Rinni+Raichandani&background=6366f1&color=fff&bold=true",
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
        name: "Rohini Patel",
        role: "Founder, Focus Growth Consulting",
        avatar: "https://ui-avatars.com/api/?name=Rohini+Patel&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "7",
      platform: "google",
      title: "Highly professional team!",
      rating: 5,
      snippet: "Working with Advora was a seamless experience. They understood our hospitality business needs perfectly and delivered a solution that exceeded expectations.",
      readMoreUrl: "#",
      user: {
        name: "Jaywant Warghane",
        role: "Founder, TNT Lodging",
        avatar: "https://ui-avatars.com/api/?name=Jaywant+Warghane&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
  ];

  // JSON-LD structured data
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Advora Digital",
      "url": "https://advora.in",
      "logo": "https://advora.in/favicon.png",
      "description": "Advora Digital transforms your ideas into powerful software solutions. Expert web development, mobile apps, and custom software.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7219860213",
        "contactType": "sales",
        "email": "advora.in@gmail.com",
        "availableLanguage": "English"
      },
      "sameAs": []
    };
    let script = document.querySelector('script[data-jsonld="org"]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-jsonld", "org");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
    return () => { script?.remove(); };
  }, []);


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
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-16 sm:gap-20 md:gap-28 px-8 sm:px-10">
                    {trustedCompanies.map((company) => (
                      <div key={`${setIndex}-${company.name}`} className="hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <company.icon 
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" 
                          style={{ color: company.color }}
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
