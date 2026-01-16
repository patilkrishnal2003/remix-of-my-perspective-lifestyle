import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  rating?: number
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  rating = 5,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card p-5",
        "transition-all duration-300 ease-out",
        "hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
        "hover:-translate-y-2 hover:scale-[1.02]",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Star Rating */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "fill-muted text-muted"
            )}
          />
        ))}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
        "{text}"
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-border/50">
        <Avatar className="h-10 w-10 ring-2 ring-primary/10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {author.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold text-sm text-foreground">
            {author.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {author.handle}
          </span>
        </div>
      </div>
    </Card>
  )
}
