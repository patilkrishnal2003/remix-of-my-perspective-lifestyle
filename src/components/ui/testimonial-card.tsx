import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

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
        "flex flex-col rounded-xl border border-border",
        "bg-card p-6",
        "hover:bg-muted/50 transition-colors duration-200",
        href && "cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
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
      <p className="mt-4 text-muted-foreground">
        {text}
      </p>
    </Card>
  )
}
