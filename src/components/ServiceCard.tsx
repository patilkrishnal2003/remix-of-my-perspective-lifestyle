import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index?: number;
  variant?: "compact" | "detailed";
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features = [], 
  index = 0,
  variant = "compact" 
}: ServiceCardProps) => {
  const isDetailed = variant === "detailed";
  
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl transition-all duration-500",
        "bg-gradient-to-br from-card via-card to-card",
        "border border-border/50 hover:border-transparent",
        "hover:scale-[1.02] hover:-translate-y-1",
        isDetailed ? "p-8" : "p-6 sm:p-8"
      )}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
        <div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x" />
        <div className="absolute inset-[1px] rounded-3xl bg-card" />
      </div>
      
      {/* Glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-accent/20 to-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-700 delay-100" />
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 group-hover:animate-float-slow transition-opacity duration-300" />
      <div className="absolute bottom-8 right-8 w-1.5 h-1.5 rounded-full bg-accent/40 opacity-0 group-hover:opacity-100 group-hover:animate-float-slower transition-opacity duration-300 delay-150" />
      
      {/* Content */}
      <div className={cn("relative z-10", isDetailed && "flex items-start gap-6")}>
        {/* Icon container with modern styling */}
        <div className={cn(
          "relative flex-shrink-0",
          isDetailed ? "w-16 h-16" : "w-14 h-14 mb-6"
        )}>
          {/* Icon background layers */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          
          {/* Icon */}
          <div className="relative w-full h-full rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className={cn(
              "text-primary-foreground",
              isDetailed ? "h-8 w-8" : "h-7 w-7"
            )} />
          </div>
        </div>
        
        <div className="flex-1">
          {/* Title with gradient on hover */}
          <h3 className={cn(
            "font-bold mb-3 transition-all duration-300",
            "bg-clip-text",
            "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent",
            isDetailed ? "text-2xl" : "text-xl"
          )}>
            {title}
          </h3>
          
          {/* Description */}
          <p className={cn(
            "text-muted-foreground leading-relaxed",
            isDetailed ? "mb-5" : "text-sm"
          )}>
            {description}
          </p>
          
          {/* Feature tags for detailed variant */}
          {isDetailed && features.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {features.map((feature, i) => (
                <span 
                  key={feature}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 
                    group-hover:bg-primary/15 group-hover:border-primary/30 transition-colors duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom shine effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ServiceCard;
