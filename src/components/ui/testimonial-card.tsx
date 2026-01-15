import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  rating?: number
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  rating = 5,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-xl border border-border",
        "bg-card p-6",
        "hover:bg-muted/50 transition-colors duration-200",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-muted-foreground mb-4 flex-1">
        "{text}"
      </p>
      
      <div className="flex items-center gap-3 mt-auto">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold leading-none text-foreground">
            {author.name}
          </span>
          <span className="text-sm text-muted-foreground">
            {author.handle}
          </span>
        </div>
      </div>
    </Card>
  )
}
