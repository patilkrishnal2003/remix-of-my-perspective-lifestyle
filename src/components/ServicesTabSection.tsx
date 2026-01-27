import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, Code, Database, Palette, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: "web",
    label: "Web Development",
    icon: Globe,
    title: "Custom Web Solutions",
    tagline: "Build powerful web experiences",
    description: "From responsive websites to complex web applications, we create digital solutions that drive business growth and user engagement.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
    bgColor: "from-primary/20 to-primary/10",
    accentColor: "bg-primary",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    tagline: "Reach users everywhere",
    description: "Native and cross-platform mobile applications built with React Native and Flutter for seamless experiences on iOS and Android.",
    features: ["iOS & Android", "Offline Support", "Push Notifications", "App Store Ready"],
    bgColor: "from-primary/30 to-primary/20",
    accentColor: "bg-primary",
  },
  {
    id: "software",
    label: "Custom Software",
    icon: Code,
    title: "Enterprise Software",
    tagline: "Tailored to your business",
    description: "Bespoke software solutions designed to automate processes, improve efficiency, and solve your unique business challenges.",
    features: ["Process Automation", "Integration Ready", "Scalable", "Maintainable"],
    bgColor: "from-primary/20 to-primary/10",
    accentColor: "bg-primary",
  },
  {
    id: "backend",
    label: "Backend Systems",
    icon: Database,
    title: "Robust Backend Architecture",
    tagline: "Power your applications",
    description: "Scalable APIs, microservices, and database architectures that form the backbone of high-performance applications.",
    features: ["RESTful APIs", "GraphQL", "Cloud Native", "High Availability"],
    bgColor: "from-primary/30 to-primary/20",
    accentColor: "bg-primary",
  },
  {
    id: "design",
    label: "UI/UX Design",
    icon: Palette,
    title: "User-Centered Design",
    tagline: "Design that converts",
    description: "Beautiful, intuitive interfaces backed by user research and design thinking to maximize engagement and conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    bgColor: "from-primary/20 to-primary/10",
    accentColor: "bg-primary",
  },
  {
    id: "cloud",
    label: "Cloud Solutions",
    icon: Cloud,
    title: "Cloud Infrastructure",
    tagline: "Scale with confidence",
    description: "AWS, Azure, and Google Cloud solutions for hosting, deployment, and infrastructure management with 99.9% uptime.",
    features: ["Auto Scaling", "CI/CD Pipelines", "Monitoring", "Cost Optimized"],
    bgColor: "from-primary/30 to-primary/20",
    accentColor: "bg-primary",
  },
];

const ServicesTabSection = () => {
  const [activeTab, setActiveTab] = useState("web");

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
  };

  return (
    <section className="section-divider py-20 pt-24 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {servicesData.map((service) => (
            <button
                key={service.id}
                onClick={() => handleTabChange(service.id)}
                className={`relative px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === service.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {service.label}
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeServiceTabUnderline"
                    className="absolute -bottom-[1px] left-0 right-0 h-[3px] bg-primary z-10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
            {/* Full-width line below tabs */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border" />
          </div>
        </div>

        {/* Carousel Container - Full width */}
        <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center max-w-7xl mx-auto">
            {servicesData.map((service, index) => {
              const activeIndex = servicesData.findIndex(s => s.id === activeTab);
              const diff = index - activeIndex;
              
              // Only render cards within range (-1, 0, 1)
              if (Math.abs(diff) > 1) return null;
              
              const isActive = diff === 0;
              
              return (
                <motion.div
                  key={service.id}
                  initial={false}
                  animate={{
                    x: diff * 90 + "%",
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.5,
                    zIndex: isActive ? 10 : 5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`${isActive ? 'relative' : 'absolute'} w-full rounded-[2rem] sm:rounded-[2.5rem] p-8 pb-6 md:p-12 md:pb-8 overflow-hidden cursor-pointer ${
                    (() => {
                      const idx = index % 3;
                      if (idx === 0) return "bg-gradient-to-b from-[hsl(179_37%_54%/0.25)] to-[hsl(179_37%_54%/0.05)]";
                      if (idx === 1) return "bg-gradient-to-b from-[hsl(97_45%_63%/0.25)] to-[hsl(97_45%_63%/0.05)]";
                      return "bg-gradient-to-b from-primary/25 to-primary/5";
                    })()
                  }`}
                  onClick={() => !isActive && handleTabChange(service.id)}
                >
                  
                  <div className="relative z-10 flex flex-col items-center text-center gap-6">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                      (() => {
                        const idx = index % 3;
                        if (idx === 0) return "bg-[hsl(179_37%_54%)] dark:bg-[hsl(179_37%_60%)]";
                        if (idx === 1) return "bg-[hsl(97_45%_63%)] dark:bg-[hsl(97_45%_68%)]";
                        return "bg-primary";
                      })()
                    }`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {service.tagline}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground max-w-2xl mb-6">
                        {service.description}
                      </p>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact">
                          <Button className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90">
                            Get Started
                          </Button>
                        </Link>
                        <Link to="/services">
                          <Button variant="outline" className="rounded-full px-6">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Features - Transparent badges at card bottom */}
                  <div className="relative z-10 flex flex-wrap justify-between w-full gap-3 mt-8">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex-1 text-center px-4 py-2 bg-transparent border border-foreground/20 rounded-full text-base font-medium text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Tabs>
      </div>
    </section>
  );
};

export default ServicesTabSection;
