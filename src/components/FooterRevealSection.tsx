const FooterRevealSection = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 w-full bg-foreground -z-10"
      style={{ height: "400px" }}
    >
      <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative line */}
        <div className="w-16 h-0.5 bg-background/30 mb-6" />
        
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
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-background text-foreground font-medium hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Get Started
          <svg 
            className="w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        
        {/* Bottom decorative dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-1.5 h-1.5 rounded-full bg-background/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-background/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-background/30" />
        </div>
      </div>
    </div>
  );
};

export default FooterRevealSection;
