import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Users, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Project images
import projectFinanceFlow from "@/assets/project-financeflow.jpg";
import projectHealthTrack from "@/assets/project-healthtrack.jpg";
import projectRetailHub from "@/assets/project-retailhub.jpg";

// Blog images
import blogFutureWeb from "@/assets/blog-future-web.jpg";
import blogReactScalable from "@/assets/blog-react-scalable.jpg";
import blogFinanceflowCase from "@/assets/blog-financeflow-case.jpg";

type TabType = "blog" | "portfolio" | "community" | "support";

interface TabData {
  id: TabType;
  label: string;
  icon: typeof BookOpen;
  description: string;
  link: string;
  linkText: string;
  images: string[];
}

const tabsData: TabData[] = [
  {
    id: "blog",
    label: "Blog",
    icon: BookOpen,
    description: "Stay updated with the latest insights, tutorials, and industry trends. Our blog covers everything from technical deep-dives to business strategies.",
    link: "/blog",
    linkText: "Read our blog",
    images: [blogFutureWeb, blogReactScalable, blogFinanceflowCase],
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: Briefcase,
    description: "Explore our showcase of successful projects. From web applications to mobile apps, see how we've helped businesses transform their digital presence.",
    link: "/portfolio",
    linkText: "View portfolio",
    images: [projectFinanceFlow, projectHealthTrack, projectRetailHub],
  },
  {
    id: "community",
    label: "Community",
    icon: Users,
    description: "Join our growing community of developers, designers, and entrepreneurs. Connect, collaborate, and learn together in our vibrant ecosystem.",
    link: "/community",
    linkText: "Join community",
    images: [projectFinanceFlow, blogFutureWeb, projectHealthTrack],
  },
  {
    id: "support",
    label: "Support",
    icon: HeadphonesIcon,
    description: "Get the help you need, when you need it. Our dedicated support team is here to assist you with any questions or technical challenges.",
    link: "/contact",
    linkText: "Get support",
    images: [blogReactScalable, projectRetailHub, blogFinanceflowCase],
  },
];

export default function ResourcesTabSection() {
  const [activeTab, setActiveTab] = useState<TabType>("blog");

  const activeTabData = tabsData.find((tab) => tab.id === activeTab)!;

  return (
    <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
      {/* Wrapper card matching the reference design */}
      <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-muted/40 p-6 sm:p-10 md:p-14 lg:p-16">
        {/* Header */}
        <div className="mb-10 md:mb-14 max-w-xl">
          <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Explore our resources, insights, and community
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            Everything you need to build exceptional digital products. From tutorials to templates, we've got you covered.
          </p>
          <Link to={activeTabData.link}>
            <Button className="rounded-full px-6 py-5 bg-foreground text-background hover:bg-foreground/90">
              {activeTabData.linkText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left: Accordion Tabs */}
          <div className="space-y-3">
            {tabsData.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              
              return (
                <motion.div
                  key={tab.id}
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-background border-border shadow-sm"
                      : "bg-transparent border-transparent hover:bg-background/50"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="px-5 py-4 flex items-center gap-3">
                    <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`font-semibold transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {tab.label}
                    </span>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {tab.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Preview Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl border border-border p-4 sm:p-6 shadow-sm"
              >
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-muted rounded-full px-4 py-1 text-xs text-muted-foreground">
                      advora.dev/{activeTab}
                    </div>
                  </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {activeTabData.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="aspect-square rounded-xl overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${activeTabData.label} preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Dots Indicator */}
                <div className="flex justify-center gap-1.5 mt-4 pt-3 border-t border-border">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === 0 ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
