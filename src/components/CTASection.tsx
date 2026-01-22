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
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${compact ? "py-8" : "py-10 sm:py-12"}`}>
      <div
        className="relative rounded-full bg-gray-500 hover:bg-gray-600 text-white p-6 sm:p-8 md:p-10 text-center overflow-hidden transition-all duration-300 hover:shadow-lg group"
      >
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-70" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.2]">
            {title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          <Link to={buttonLink} className="inline-block">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-md mt-2 transition-all duration-300 hover:shadow-lg hover:scale-105 px-6 py-3 text-sm sm:px-8 sm:py-3 sm:text-base"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
