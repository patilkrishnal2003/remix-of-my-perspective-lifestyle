"use client"

import React from "react"
import { cn } from "@/lib/utils"

const cardContents = [
  {
    title: "Technical Excellence",
    description:
      "We deliver cutting-edge solutions built with the latest technologies and consistent design and performance in mind.",
  },
  {
    title: "Business-First Approach",
    description:
      "Simple APIs and excellent documentation make it easy to integrate and customize our solutions in your apps.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Design dynamic, responsive systems using our proven methodologies. Whether you're building MVPs, enterprise platforms, or complex integrations, we create solutions that scale beautifully. With cloud-native infrastructure, microservices architecture, and performance optimization, your application adapts effortlessly to growth.",
  },
  {
    title: "Agile Partnership",
    description:
      "Every project is thoughtfully designed to work seamlessly with your existing workflows and team dynamics.",
  },
  {
    title: "Fast & Lightweight",
    description:
      "Built for speed and performance, our solutions ensure quick load times without sacrificing quality.",
  },
]

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("h-4 w-4 text-border", className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function BentoCards() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid */}
        <div className="relative">
          {/* Row 1: Two equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Card 1 - Beautiful Components */}
            <div className="relative p-8 md:p-10 border-t border-l border-dashed border-border">
              {/* Plus icons */}
              <PlusIcon className="absolute -top-2 -left-2" />
              <PlusIcon className="absolute -top-2 -right-2 md:hidden" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {cardContents[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cardContents[0].description}
              </p>
            </div>
            
            {/* Card 2 - Developer Friendly */}
            <div className="relative p-8 md:p-10 border-t border-l border-r border-dashed border-border">
              <PlusIcon className="absolute -top-2 -left-2 hidden md:block" />
              <PlusIcon className="absolute -top-2 -right-2" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {cardContents[1].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cardContents[1].description}
              </p>
            </div>
          </div>

          {/* Row 2: Large card + small card */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Card 3 - Flexible Layouts (spans full height of this row) */}
            <div className="relative p-8 md:p-10 border-t border-l border-dashed border-border md:row-span-2">
              <PlusIcon className="absolute -top-2 -left-2" />
              <PlusIcon className="absolute -top-2 -right-2 md:hidden" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {cardContents[2].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cardContents[2].description}
              </p>
            </div>
            
            {/* Card 4 - Dark Mode Support */}
            <div className="relative p-8 md:p-10 border-t border-l border-r border-dashed border-border">
              <PlusIcon className="absolute -top-2 -left-2 hidden md:block" />
              <PlusIcon className="absolute -top-2 -right-2" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {cardContents[3].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cardContents[3].description}
              </p>
            </div>
          </div>

          {/* Row 3: Small card + Tagline */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Card 5 - Fast & Lightweight */}
            <div className="relative p-8 md:p-10 border-t border-l border-b border-dashed border-border">
              <PlusIcon className="absolute -top-2 -left-2" />
              <PlusIcon className="absolute -bottom-2 -left-2" />
              <PlusIcon className="absolute -top-2 -right-2 md:hidden" />
              <PlusIcon className="absolute -bottom-2 -right-2 md:hidden" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {cardContents[4].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cardContents[4].description}
              </p>
            </div>
            
            {/* Tagline Section */}
            <div className="relative p-8 md:p-10 border border-dashed border-border flex flex-col justify-end text-right">
              <PlusIcon className="absolute -top-2 -left-2 hidden md:block" />
              <PlusIcon className="absolute -top-2 -right-2" />
              <PlusIcon className="absolute -bottom-2 -left-2 hidden md:block" />
              <PlusIcon className="absolute -bottom-2 -right-2" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Built for performance.<br />
                Designed for flexibility.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Advora gives you the tools to build beautiful, high-performing digital products with lightning speed. Every solution is thoughtfully designed to be flexible, reusable, and scalable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { BentoCards }
