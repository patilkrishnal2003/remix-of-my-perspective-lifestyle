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
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative pl-8">
          {/* Timeline Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-muted" />

          <div className="space-y-8">
          {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex gap-4 items-start"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-8 top-1">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      item.status === "done"
                        ? "bg-primary border-primary"
                        : item.status === "in-progress"
                        ? "bg-primary/50 border-primary animate-pulse"
                        : "bg-background border-muted-foreground/30"
                    }`}
                  />
                </div>

                {/* Quarter */}
                <Badge variant={item.status === "done" ? "default" : "secondary"} className="shrink-0">
                  {item.quarter}
                </Badge>

                {/* Title + Description */}
                <div className="flex-1 space-y-1">
                  <h4 className="font-semibold leading-none">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
