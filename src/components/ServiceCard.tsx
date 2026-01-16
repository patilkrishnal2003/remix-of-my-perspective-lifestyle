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
        "group relative overflow-hidden rounded-3xl transition-all duration-500 h-full",
        "bg-card/50 dark:bg-card/30 backdrop-blur-xl",
        "border border-white/20 dark:border-white/10",
        "hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10",
        "hover:scale-[1.02] hover:-translate-y-1",
        isDetailed ? "p-6" : "p-6 sm:p-8",
        isDetailed && "flex flex-col"
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
      <div className={cn("relative z-10 flex-1", isDetailed && "flex flex-col")}>
        {/* Icon container with modern styling */}
        <div className={cn(
          "relative flex-shrink-0 w-12 h-12 mb-5"
        )}>
          {/* Icon background layers */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          
          {/* Icon */}
          <div className="relative w-full h-full rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          {/* Title with gradient on hover */}
          <h3 className={cn(
            "font-bold mb-2 transition-all duration-300",
            "bg-clip-text",
            "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent",
            isDetailed ? "text-lg" : "text-xl"
          )}>
            {title}
          </h3>
          
          {/* Description */}
          <p className={cn(
            "text-muted-foreground leading-relaxed text-sm",
            isDetailed ? "mb-4 flex-1" : ""
          )}>
            {description}
          </p>
          
          {/* Feature tags for detailed variant */}
          {isDetailed && features.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {features.map((feature, i) => (
                <span 
                  key={feature}
                  className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 
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
