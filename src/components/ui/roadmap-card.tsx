"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
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
  description = "Upcoming features and releases",
  items,
}: RoadmapCardProps) {
  // Calculate progress percentage based on completed items
  const doneCount = items.filter(item => item.status === "done").length;
  const inProgressCount = items.filter(item => item.status === "in-progress").length;
  const progressPercentage = ((doneCount + inProgressCount * 0.5) / items.length) * 100;

  return (
    <Card className="w-full mx-auto">
      <CardContent className="pt-6">
        {description && (
          <CardDescription className="text-center mb-8">{description}</CardDescription>
        )}
        <div className="relative">
          {/* Horizontal Timeline Line - Black with dynamic progress */}
          <div className="absolute top-3 left-0 right-0 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-foreground rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${progressPercentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center pt-10"
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className={`w-7 h-7 rounded-full border-[3px] ${
                      item.status === "done"
                        ? "bg-foreground border-foreground"
                        : item.status === "in-progress"
                        ? "bg-foreground/50 border-foreground"
                        : "bg-background border-muted-foreground/40"
                    }`}
                  >
                    {item.status === "in-progress" && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-[3px] border-foreground"
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Quarter Badge */}
                <Badge 
                  variant={item.status === "done" ? "default" : "secondary"} 
                  className={`mb-3 ${item.status === "done" ? "bg-foreground text-background hover:bg-foreground/90" : ""}`}
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
