import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  compact?: boolean;
}

export default function CTASection({
  title = "Ready to start your project?",
  description = "Let's discuss how we can help bring your vision to life. Get a free consultation today.",
  buttonText = "Get Free Consultation",
  buttonLink = "/contact",
  compact = false,
}: CTASectionProps) {
  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${compact ? "py-12" : "py-16 sm:py-20"}`}>
      <div
        className={`relative rounded-[2.5rem] bg-gradient-to-br from-foreground via-foreground to-primary/80 text-background ${compact ? "p-6 pb-8 sm:p-8 sm:pb-10 md:p-12" : "p-8 pb-10 sm:p-12 sm:pb-14 md:p-16"} text-center overflow-hidden`}
      >
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-background/5 rounded-full blur-xl" />

        <div className={`relative z-10 ${compact ? "max-w-2xl" : "max-w-3xl"} mx-auto space-y-5 sm:space-y-6`}>
          <h2
            className={`${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-5xl"} font-bold tracking-tight leading-[1.2]`}
          >
            {title}
          </h2>
          <p className={`${compact ? "text-base" : "text-lg md:text-xl"} opacity-80 leading-relaxed`}>
            {description}
          </p>
          <Link to={buttonLink} className="block w-full sm:w-auto">
            <Button
              className={`bg-background text-foreground hover:bg-background/90 rounded-full shadow-lg mt-4 transition-transform sm:hover:scale-105 w-full sm:w-auto max-w-[22rem] sm:max-w-none mx-auto h-auto whitespace-normal ${compact ? "px-6 py-3 text-base sm:px-8 sm:py-4" : "px-6 py-4 text-base sm:px-10 sm:py-6 sm:text-lg"}`}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
