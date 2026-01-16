import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card p-5",
        "transition-all duration-300 ease-out",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        href && "cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-10 w-10">
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
      <p className="text-sm text-muted-foreground leading-relaxed">
        {text}
      </p>
    </Card>
  )
}
