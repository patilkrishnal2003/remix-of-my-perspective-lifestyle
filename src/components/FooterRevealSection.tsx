import { useEffect, useRef, useState } from "react";

const FooterRevealSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the footer element
    footerRef.current = document.querySelector("footer");

    const handleScroll = () => {
      if (!footerRef.current) return;

      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if user has scrolled past the footer (footer top is above viewport top)
      // and the footer bottom is visible or above the viewport
      const footerFullyVisible = footerRect.bottom <= windowHeight && footerRect.bottom > 0;
      const scrolledPastFooter = footerRect.top < 0;
      
      // Show the section when footer is fully in view and user continues scrolling
      // This creates the "over-scroll" reveal effect
      const atPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      
      setIsVisible(atPageBottom || scrolledPastFooter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`
        w-full bg-foreground overflow-hidden
        transition-all duration-700 ease-out
        ${isVisible 
          ? "max-h-96 opacity-100 py-16 sm:py-24" 
          : "max-h-0 opacity-0 py-0"
        }
      `}
      style={{
        transitionProperty: "max-height, opacity, padding",
      }}
    >
      <div 
        className={`
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center
          transition-all duration-500 delay-200
          ${isVisible 
            ? "translate-y-0 opacity-100" 
            : "translate-y-8 opacity-0"
          }
        `}
      >
        {/* Decorative line */}
        <div 
          className={`
            w-16 h-0.5 bg-background/30 mx-auto mb-6
            transition-all duration-700 delay-300
            ${isVisible ? "w-16 opacity-100" : "w-0 opacity-0"}
          `}
        />
        
        {/* Main content */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-background/70 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Let's build something extraordinary together. Get in touch and let's discuss your vision.
        </p>
        
        {/* CTA Button */}
        <a
          href="/contact"
          className={`
            inline-flex items-center gap-2 px-8 py-3 rounded-full
            bg-background text-foreground font-medium
            hover:bg-background/90 transition-all duration-300
            hover:scale-105 hover:shadow-lg
            ${isVisible ? "scale-100" : "scale-90"}
          `}
        >
          Get Started
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        
        {/* Bottom decorative dots */}
        <div 
          className={`
            flex justify-center gap-2 mt-8
            transition-all duration-500 delay-500
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-background/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-background/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-background/30" />
        </div>
      </div>
    </div>
  );
};

export default FooterRevealSection;
