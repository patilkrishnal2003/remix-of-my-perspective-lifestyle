import { cn } from "@/lib/utils";

interface FloatingElementsProps {
  variant?: "hero" | "section";
  className?: string;
}

export const FloatingElements = ({ variant = "section", className }: FloatingElementsProps) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* 3D Floating Cubes */}
      <div 
        className="absolute top-[15%] left-[10%] w-16 h-16 animate-float-slow"
        style={{ perspective: "1000px" }}
      >
        <div 
          className="w-full h-full border-2 border-primary/20 rounded-xl bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm"
          style={{ 
            transform: "rotateX(20deg) rotateY(-20deg) rotateZ(5deg)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>

      {/* Glowing orb */}
      <div className="absolute top-[30%] right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-primary/10 blur-2xl animate-float-slower" />

      {/* Floating ring */}
      <div 
        className="absolute bottom-[25%] left-[15%] w-20 h-20 animate-float-slower"
        style={{ perspective: "800px" }}
      >
        <div 
          className="w-full h-full border-4 border-accent/20 rounded-full"
          style={{ 
            transform: "rotateX(60deg) rotateY(10deg)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>

      {/* Small floating dots */}
      <div className="absolute top-[40%] left-[5%] w-3 h-3 rounded-full bg-primary/40 animate-float-slow" />
      <div className="absolute top-[20%] right-[25%] w-2 h-2 rounded-full bg-accent/50 animate-float-slower" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[35%] right-[10%] w-4 h-4 rounded-full bg-primary/30 animate-float-slow" style={{ animationDelay: "2s" }} />

      {/* Gradient mesh */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />

      {/* 3D Pyramid shape */}
      <div 
        className="absolute bottom-[20%] right-[20%] hidden lg:block animate-float-slow"
        style={{ perspective: "500px", animationDelay: "0.5s" }}
      >
        <svg 
          width="60" 
          height="60" 
          viewBox="0 0 60 60" 
          className="opacity-20 dark:opacity-30"
          style={{ transform: "rotateX(10deg) rotateY(-15deg)" }}
        >
          <polygon 
            points="30,5 55,50 5,50" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1.5"
          />
          <line x1="30" y1="5" x2="30" y2="50" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Hexagon */}
      <div 
        className="absolute top-[60%] left-[8%] hidden lg:block animate-float-slower"
        style={{ perspective: "500px" }}
      >
        <svg 
          width="50" 
          height="50" 
          viewBox="0 0 50 50" 
          className="opacity-15 dark:opacity-25"
          style={{ transform: "rotateX(-10deg) rotateY(20deg)" }}
        >
          <polygon 
            points="25,2 46,14 46,36 25,48 4,36 4,14" 
            fill="none" 
            stroke="hsl(var(--accent))" 
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};
