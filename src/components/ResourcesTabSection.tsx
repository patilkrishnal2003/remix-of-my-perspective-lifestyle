import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, FileText, FolderOpen, Code, Globe, Smartphone, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

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

type TabType = "services" | "portfolio" | "projects" | "blog";

const servicesData = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that deliver seamless user experiences.",
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed to solve your unique business challenges.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Scalable APIs and database architectures that power your applications.",
  },
];

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

function ServiceCard({ icon: Icon, title, description }: { icon: typeof Globe; title: string; description: string }) {
  return (
    <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
      {/* Decorative gradient blob */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Icon with glow effect */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-accent/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-16 h-16 rounded-none bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center group-hover:border-accent/40 transition-all duration-300">
          <Icon className="h-8 w-8 text-accent transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-accent">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
      </div>
      
      {/* Hover arrow indicator */}
      <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <ArrowRight className="w-4 h-4 text-accent" />
      </div>
      
      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-accent/0 group-hover:border-accent/30 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}

export default function ResourcesTabSection() {
  const [activeTab, setActiveTab] = useState<TabType>("services");

  const tabs: { id: TabType; label: string; icon: typeof Briefcase }[] = [
    { id: "services", label: "Services", icon: Code },
    { id: "portfolio", label: "Portfolio", icon: FolderOpen },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "blog", label: "Blog", icon: FileText },
  ];

  const getViewAllLink = () => {
    switch (activeTab) {
      case "services":
        return "/services";
      case "portfolio":
      case "projects":
        return "/portfolio";
      case "blog":
        return "/blog";
    }
  };

  const getViewAllText = () => {
    switch (activeTab) {
      case "services":
        return "View All Services";
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
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Explore Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden",
                activeTab === tab.id
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-muted text-foreground hover:bg-muted/80"
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-foreground rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </span>
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
            className={cn(
              "grid gap-6",
              activeTab === "services" ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {activeTab === "services" &&
              servicesData.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}

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
