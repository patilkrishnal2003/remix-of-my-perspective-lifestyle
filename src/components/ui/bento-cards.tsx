"use client"

import React from "react"
import { cn } from "@/lib/utils"

const cardContents = [
  {
    title: "Technical Excellence",
    description:
      "We deliver cutting-edge solutions built with the latest technologies and best practices for optimal performance.",
  },
  {
    title: "Business-First Approach",
    description:
      "Every line of code we write is focused on driving real business outcomes and measurable results for your company.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Design dynamic, responsive systems using our proven methodologies. Whether you're building MVPs, enterprise platforms, or complex integrations, we create solutions that scale beautifully. With cloud-native infrastructure, microservices architecture, and performance optimization, your application adapts effortlessly to growth.",
  },
  {
    title: "Agile Partnership",
    description:
      "We work as an extension of your team with transparent communication, iterative development, and rapid delivery cycles.",
  },
  {
    title: "End-to-End Support",
    description:
      "From initial consultation to post-launch maintenance, we provide comprehensive support throughout your project lifecycle.",
  },
]

const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
}> = ({ className = "", title, description }) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg",
        className
      )}
    >
      <CornerPlusIcons />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <h3 className="mb-3 text-xl font-bold text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -left-3 -top-3 h-6 w-6 text-border transition-colors group-hover:text-accent/50" />
    <PlusIcon className="absolute -right-3 -top-3 h-6 w-6 text-border transition-colors group-hover:text-accent/50" />
    <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-border transition-colors group-hover:text-accent/50" />
    <PlusIcon className="absolute -bottom-3 -right-3 h-6 w-6 text-border transition-colors group-hover:text-accent/50" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function BentoCards() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PlusCard
            className="md:col-span-1"
            title={cardContents[0].title}
            description={cardContents[0].description}
          />
          <PlusCard
            className="md:col-span-1"
            title={cardContents[1].title}
            description={cardContents[1].description}
          />
          <PlusCard
            className="md:col-span-2 lg:col-span-1 lg:row-span-2"
            title={cardContents[2].title}
            description={cardContents[2].description}
          />
          <PlusCard
            className="md:col-span-1"
            title={cardContents[3].title}
            description={cardContents[3].description}
          />
          <PlusCard
            className="md:col-span-1"
            title={cardContents[4].title}
            description={cardContents[4].description}
          />
        </div>

        {/* Section Footer Heading */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for performance. Designed for flexibility.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advora gives you the expertise to build beautiful, high-performing digital products with speed and precision. Every solution is thoughtfully crafted to be flexible, scalable, and future-ready.
          </p>
        </div>
      </div>
    </section>
  )
}

export { BentoCards, PlusCard }
