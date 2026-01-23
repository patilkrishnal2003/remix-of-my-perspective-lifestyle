import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, FileText, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Project images
import projectFinanceFlow from "@/assets/project-financeflow.jpg";
import projectHealthTrack from "@/assets/project-healthtrack.jpg";
import projectRetailHub from "@/assets/project-retailhub.jpg";
import projectTaskMaster from "@/assets/project-taskmaster.jpg";
import projectEduLearn from "@/assets/project-edulearn.jpg";
import projectPropertyPro from "@/assets/project-propertypro.jpg";

// Blog images
import blogFutureWeb from "@/assets/blog-future-web.jpg";
import blogReactScalable from "@/assets/blog-react-scalable.jpg";
import blogFinanceflowCase from "@/assets/blog-financeflow-case.jpg";

type TabType = "portfolio" | "projects" | "blog";

const portfolioItems = [
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

const projects = [
  {
    title: "TaskMaster",
    category: "SaaS Application",
    description: "Project management tool with real-time collaboration and analytics.",
    image: projectTaskMaster,
    results: "Used by 200+ teams",
  },
  {
    title: "EduLearn",
    category: "Learning Platform",
    description: "Online education platform with video courses and interactive quizzes.",
    image: projectEduLearn,
    results: "10,000+ course completions",
  },
  {
    title: "PropertyPro",
    category: "Mobile App",
    description: "Real estate listing app with virtual tours and mortgage calculator.",
    image: projectPropertyPro,
    results: "4.8 star rating",
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

interface CardProps {
  image: string;
  title: string;
  category: string;
  description?: string;
  excerpt?: string;
  results?: string;
  readTime?: string;
  isLink?: boolean;
  to?: string;
}

function ResourceCard({ image, title, category, description, excerpt, results, readTime, isLink, to }: CardProps) {
  const content = (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-2">
      {/* Image with zoom effect */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 transition-all duration-300 group-hover:bg-muted/30">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            {category}
          </span>
          {readTime && (
            <span className="text-xs text-muted-foreground">
              {readTime}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description || excerpt}
        </p>
        {results && (
          <p className="text-sm font-medium text-primary flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {results}
          </p>
        )}
      </div>
      
      {/* Hover overlay arrow */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
        <ArrowRight className="w-4 h-4 text-primary" />
      </div>
    </div>
  );

  if (isLink && to) {
    return <Link to={to}>{content}</Link>;
  }
  return content;
}

export default function ResourcesTabSection() {
  const [activeTab, setActiveTab] = useState<TabType>("portfolio");

  const tabs: { id: TabType; label: string; icon: typeof Briefcase }[] = [
    { id: "portfolio", label: "Portfolio", icon: FolderOpen },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "blog", label: "Blog", icon: FileText },
  ];

  const getViewAllLink = () => {
    switch (activeTab) {
      case "portfolio":
      case "projects":
        return "/portfolio";
      case "blog":
        return "/blog";
    }
  };

  const getViewAllText = () => {
    switch (activeTab) {
      case "portfolio":
        return "View Full Portfolio";
      case "projects":
        return "View All Projects";
      case "blog":
        return "View All Articles";
    }
  };

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

        {/* Tab Buttons - Underline Style */}
        <div className="relative flex justify-center gap-6 sm:gap-10 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative flex items-center gap-2 px-2 py-4 text-sm sm:text-base font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeResourceTabUnderline"
                  className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-primary z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
          {/* Full-width line below tabs */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border" />
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeTab === "portfolio" &&
              portfolioItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ResourceCard {...item} />
                </motion.div>
              ))}

            {activeTab === "projects" &&
              projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ResourceCard {...project} />
                </motion.div>
              ))}

            {activeTab === "blog" &&
              blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ResourceCard
                    image={post.image}
                    title={post.title}
                    category={post.category}
                    excerpt={post.excerpt}
                    readTime={post.readTime}
                    isLink
                    to={`/blog/${post.id}`}
                  />
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to={getViewAllLink()}>
            <Button variant="outline" className="rounded-full px-8 py-6 group">
              {getViewAllText()}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
