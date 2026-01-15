import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    rating?: number
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
    <section className={cn("bg-card py-16 sm:py-20 overflow-hidden", className)}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {description}
          </p>
        </div>

        <div className="relative w-full group">
          <div className="flex w-full overflow-hidden">
            <div 
              className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]"
              style={{ '--duration': '60s', '--gap': '1.5rem' } as React.CSSProperties}
            >
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                    className="w-[350px] shrink-0"
                  />
                ))
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card to-transparent" />
        </div>
      </div>
    </section>
  )
}
