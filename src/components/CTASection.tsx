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
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${compact ? "py-12" : "py-20"}`}>
      <div className={`relative rounded-[2.5rem] bg-gradient-to-br from-foreground via-foreground to-primary/80 text-background ${compact ? "p-8 md:p-12" : "p-12 md:p-16"} text-center overflow-hidden`}>
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-background/5 rounded-full blur-xl" />
        
        <div className={`relative z-10 ${compact ? "max-w-2xl" : "max-w-3xl"} mx-auto space-y-6`}>
          <h2 className={`${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-5xl"} font-bold tracking-tight`}>
            {title}
          </h2>
          <p className={`${compact ? "text-base" : "text-lg md:text-xl"} opacity-80 leading-relaxed`}>
            {description}
          </p>
          <Link to={buttonLink}>
            <Button className={`bg-background text-foreground hover:bg-background/90 rounded-full ${compact ? "px-8 py-4" : "px-10 py-6 text-lg"} hover:scale-105 transition-all mt-4 shadow-lg`}>
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
