import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  gradient?: string;
  children?: React.ReactNode;
}

export const BentoCard = ({
  title,
  description,
  icon: Icon,
  className,
  gradient = "from-primary/20 to-accent/20",
  children
}: BentoCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl p-6 sm:p-8",
        "bg-card/40 backdrop-blur-xl",
        "border border-white/10 dark:border-white/5",
        "hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
        "transition-all duration-500 hover:-translate-y-1",
        className
      )}
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Gradient glow on hover */}
      <div className={cn(
        "absolute -top-1/2 -right-1/2 w-full h-full rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700",
        `bg-gradient-to-br ${gradient}`
      )} />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative z-10">
        {Icon && (
          <div className="mb-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
        )}
        <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        {children}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn(
      "grid gap-4 sm:gap-6",
      "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      className
    )}>
      {children}
    </div>
  );
};
