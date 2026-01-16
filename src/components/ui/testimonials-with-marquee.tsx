import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Marquee container */}
          <div 
            className="flex gap-6 group"
            style={{ 
              '--duration': '120s',
              '--gap': '1.5rem'
            } as React.CSSProperties}
          >
            {/* Animated track */}
            <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                    className="w-[320px] sm:w-[360px] flex-shrink-0"
                  />
                ))
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`dup-${setIndex}-${i}`}
                    {...testimonial}
                    className="w-[320px] sm:w-[360px] flex-shrink-0"
                  />
                ))
              ))}
            </div>
          </div>

          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
