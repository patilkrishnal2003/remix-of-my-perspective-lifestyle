import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Project images
import projectFinanceFlow from "@/assets/project-financeflow.jpg";
import projectHealthTrack from "@/assets/project-healthtrack.jpg";
import projectRetailHub from "@/assets/project-retailhub.jpg";

// Blog images
import blogFutureWeb from "@/assets/blog-future-web.jpg";
import blogReactScalable from "@/assets/blog-react-scalable.jpg";
import blogFinanceflowCase from "@/assets/blog-financeflow-case.jpg";

type TabType = "projects" | "blog";

const projects = [
  {
    title: "FinanceFlow",
    category: "Web Application",
    description: "A comprehensive financial management platform for small businesses.",
    image: projectFinanceFlow,
    results: "300% user growth",
  },
  {
    title: "HealthTrack Pro",
    category: "Mobile App",
    description: "Cross-platform health and fitness tracking app with personalized plans.",
    image: projectHealthTrack,
    results: "50,000 users in first month",
  },
  {
    title: "RetailHub",
    category: "E-commerce Platform",
    description: "Multi-vendor marketplace with advanced inventory management.",
    image: projectRetailHub,
    results: "$2M in transactions",
  },
];

const blogPosts = [
  {
    id: "future-of-web-development-2026",
    title: "The Future of Web Development in 2026",
    category: "Technology Trends",
    excerpt: "Explore the emerging technologies shaping web development.",
    image: blogFutureWeb,
    readTime: "8 min read",
  },
  {
    id: "building-scalable-react-applications",
    title: "Building Scalable React Applications",
    category: "Web Development",
    excerpt: "Best practices for building React apps that grow with your business.",
    image: blogReactScalable,
    readTime: "12 min read",
  },
  {
    id: "financeflow-case-study",
    title: "Case Study: FinanceFlow Platform",
    category: "Case Study",
    excerpt: "How we built FinanceFlow's platform in 12 weeks.",
    image: blogFinanceflowCase,
    readTime: "10 min read",
  },
];

export default function ResourcesTabSection() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  const tabs: { id: TabType; label: string; icon: typeof Briefcase }[] = [
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "blog", label: "Blog", icon: FileText },
  ];

  return (
    <section className="section-divider py-16 sm:py-20 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and insights
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-muted text-foreground hover:bg-muted/80"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "projects" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold mt-3 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {project.results}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to={activeTab === "projects" ? "/portfolio" : "/blog"}>
            <Button variant="outline" className="rounded-full px-8 py-6">
              View All {activeTab === "projects" ? "Projects" : "Articles"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
