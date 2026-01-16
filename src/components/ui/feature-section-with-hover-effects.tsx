import { cn } from "@/lib/utils";
import {
  Settings2,
  Cloud,
  DollarSign,
  Sparkles,
  Heart,
  HelpCircle,
  GitBranch,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

interface FeaturesSectionWithHoverEffectsProps {
  features?: FeatureItem[];
  className?: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    title: "Built for developers",
    description:
      "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: <Terminal className="h-6 w-6" />,
  },
  {
    title: "Ease of use",
    description:
      "It's as easy as using an Apple, and as expensive as buying one.",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Pricing like no other",
    description:
      "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: <Cloud className="h-6 w-6" />,
  },
  {
    title: "Multi-tenant Architecture",
    description: "You can simply share passwords instead of buying new seats",
    icon: <GitBranch className="h-6 w-6" />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We are available a 100% of the time. At least our AI Agents are.",
    icon: <HelpCircle className="h-6 w-6" />,
  },
  {
    title: "Money back guarantee",
    description:
      "If you do not like EveryAI, we will convince you to like us.",
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: "And everything else",
    description: "I just ran out of copy ideas. Accept my sincere apologies",
    icon: <Settings2 className="h-6 w-6" />,
  },
];

export function FeaturesSectionWithHoverEffects({
  features = defaultFeatures,
  className,
}: FeaturesSectionWithHoverEffectsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-10 max-w-7xl mx-auto", className)}>
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  tags,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  tags?: string[];
}) => {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-2xl overflow-hidden transition-all duration-500",
        "bg-gradient-to-br from-card via-card to-muted/20",
        "border border-border/50 hover:border-primary/30",
        "hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]",
        "hover:-translate-y-1"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon container with gradient background */}
        <div className="mb-5 relative">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
            {icon}
          </div>
          {/* Arrow indicator */}
          <div className="absolute -right-1 -top-1 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="w-3 h-3 text-primary" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Tags with modern pill design */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium transition-all duration-300",
                  "bg-muted/80 text-muted-foreground",
                  "group-hover:bg-primary/10 group-hover:text-primary",
                  "border border-transparent group-hover:border-primary/20"
                )}
                style={{ transitionDelay: `${tagIndex * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};
