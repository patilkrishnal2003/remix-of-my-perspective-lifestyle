"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
}

export function RoadmapCard({
  title = "Product Roadmap",
  description = "Upcoming features and releases",
  items,
}: RoadmapCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-gradient-to-r from-muted via-primary/50 to-muted" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center pt-8"
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <div
                    className={`w-6 h-6 rounded-full border-2 ${
                      item.status === "done"
                        ? "bg-primary border-primary"
                        : item.status === "in-progress"
                        ? "bg-primary/50 border-primary animate-pulse"
                        : "bg-background border-muted-foreground/30"
                    }`}
                  />
                </div>

                {/* Quarter Badge */}
                <Badge 
                  variant={item.status === "done" ? "default" : "secondary"} 
                  className="mb-3"
                >
                  {item.quarter}
                </Badge>

                {/* Title + Description */}
                <h4 className="font-semibold leading-tight mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
