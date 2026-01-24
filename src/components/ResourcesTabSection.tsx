import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Users, HeadphonesIcon, GraduationCap } from "lucide-react";
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

type TabType = "blog" | "portfolio" | "community" | "support" | "careers";

interface ContentCard {
  title: string;
  description: string;
  image: string;
  tag?: string;
}

interface TabData {
  id: TabType;
  label: string;
  icon: typeof BookOpen;
  description: string;
  link: string;
  linkText: string;
  cards: ContentCard[];
}

const tabsData: TabData[] = [
  {
    id: "blog",
    label: "Blog",
    icon: BookOpen,
    description: "Stay updated with the latest insights, tutorials, and industry trends. Our blog covers everything from technical deep-dives to business strategies.",
    link: "/blog",
    linkText: "Read our blog",
    cards: [
      { title: "The Future of Web Development", description: "Exploring emerging trends in modern web technologies", image: blogFutureWeb, tag: "Trends" },
      { title: "Building Scalable React Apps", description: "Best practices for enterprise-level applications", image: blogReactScalable, tag: "Tutorial" },
      { title: "FinanceFlow Case Study", description: "How we built a fintech platform", image: blogFinanceflowCase, tag: "Case Study" },
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: Briefcase,
    description: "Explore our showcase of successful projects. From web applications to mobile apps, see how we've helped businesses transform their digital presence.",
    link: "/portfolio",
    linkText: "View portfolio",
    cards: [
      { title: "FinanceFlow", description: "Modern fintech dashboard platform", image: projectFinanceFlow, tag: "Fintech" },
      { title: "HealthTrack", description: "Healthcare management system", image: projectHealthTrack, tag: "Healthcare" },
      { title: "RetailHub", description: "E-commerce analytics solution", image: projectRetailHub, tag: "E-commerce" },
    ],
  },
  {
    id: "community",
    label: "Community",
    icon: Users,
    description: "Join our growing community of developers, designers, and entrepreneurs. Connect, collaborate, and learn together in our vibrant ecosystem.",
    link: "/community",
    linkText: "Join community",
    cards: [
      { title: "Developer Meetups", description: "Monthly virtual events and workshops", image: projectFinanceFlow, tag: "Events" },
      { title: "Open Source Projects", description: "Contribute to our public repositories", image: blogFutureWeb, tag: "Open Source" },
      { title: "Discord Community", description: "Connect with 5,000+ developers", image: projectHealthTrack, tag: "Discord" },
    ],
  },
  {
    id: "careers",
    label: "Careers",
    icon: GraduationCap,
    description: "Join our talented team of innovators. We're always looking for passionate individuals who want to make an impact in the tech industry.",
    link: "/careers",
    linkText: "View openings",
    cards: [
      { title: "Senior Full-Stack Developer", description: "Remote · Full-time · Engineering", image: projectFinanceFlow, tag: "Engineering" },
      { title: "Product Designer", description: "Hybrid · Full-time · Design", image: blogFutureWeb, tag: "Design" },
      { title: "DevOps Engineer", description: "Remote · Full-time · Infrastructure", image: projectHealthTrack, tag: "DevOps" },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: HeadphonesIcon,
    description: "Get the help you need, when you need it. Our dedicated support team is here to assist you with any questions or technical challenges.",
    link: "/contact",
    linkText: "Get support",
    cards: [
      { title: "Documentation", description: "Comprehensive guides and API references", image: blogReactScalable, tag: "Docs" },
      { title: "FAQ & Knowledge Base", description: "Quick answers to common questions", image: projectRetailHub, tag: "FAQ" },
      { title: "Priority Support", description: "Direct access to our engineering team", image: blogFinanceflowCase, tag: "Premium" },
    ],
  },
];

export default function ResourcesTabSection() {
  const [activeTab, setActiveTab] = useState<TabType>("blog");
  const [isPaused, setIsPaused] = useState(false);

  const tabOrder: TabType[] = ["blog", "portfolio", "community", "careers", "support"];

  const goToNextTab = useCallback(() => {
    setActiveTab((current) => {
      const currentIndex = tabOrder.indexOf(current);
      const nextIndex = (currentIndex + 1) % tabOrder.length;
      return tabOrder[nextIndex];
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(goToNextTab, 3000);
    return () => clearInterval(interval);
  }, [isPaused, goToNextTab]);

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    setIsPaused(true);
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  const activeTabData = tabsData.find((tab) => tab.id === activeTab)!;

  return (
    <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
      {/* Wrapper card matching the reference design */}
      <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-6 sm:p-10 md:p-14 lg:p-16">
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
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* Left: Accordion Tabs */}
          <div className="flex flex-col justify-between gap-3">
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
                  onClick={() => handleTabClick(tab.id)}
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
          <div className="relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl border border-border p-4 sm:p-6 shadow-sm h-full flex flex-col"
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
                      advora.in/{activeTab}
                    </div>
                  </div>
                </div>

                {/* Content Cards */}
                <div className="space-y-3 flex-1">
                  {activeTabData.cards.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        {card.tag && (
                          <span className="inline-block text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-1">
                            {card.tag}
                          </span>
                        )}
                        <h4 className="text-sm font-semibold text-foreground truncate">{card.title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">{card.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Action */}
                <div className="flex justify-center mt-4 pt-3 border-t border-border">
                  <Link to={activeTabData.link} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                    {activeTabData.linkText}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
