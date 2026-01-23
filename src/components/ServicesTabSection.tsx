import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, Code, Database, Palette, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    id: "web",
    label: "Web Development",
    icon: Globe,
    title: "Custom Web Solutions",
    tagline: "Build powerful web experiences",
    description: "From responsive websites to complex web applications, we create digital solutions that drive business growth and user engagement.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
    bgColor: "from-primary/10 to-primary/5",
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
    bgColor: "from-primary/20 to-primary/10",
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
    bgColor: "from-primary/10 to-primary/5",
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
    bgColor: "from-primary/20 to-primary/10",
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
    bgColor: "from-primary/10 to-primary/5",
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
    bgColor: "from-primary/20 to-primary/10",
    accentColor: "bg-primary",
  },
];

const ServicesTabSection = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
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
        <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-8">
          {servicesData.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className="relative px-6 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 data-[state=active]:text-foreground data-[state=active]:bg-transparent bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none hover:text-foreground"
            >
              {service.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {servicesData.map((service) => (
              <TabsContent
                key={service.id}
                value={service.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full rounded-2xl bg-gradient-to-br ${service.bgColor} p-8 md:p-12 relative overflow-hidden`}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center gap-6">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl ${service.accentColor} flex items-center justify-center`}>
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
                      
                      {/* Features */}
                      <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact">
                          <Button className={`${service.accentColor} hover:opacity-90 text-white rounded-full px-6`}>
                            Get Started
                          </Button>
                        </Link>
                        <Link to="/services">
                          <Button variant="outline" className="rounded-full px-6 bg-white/60 backdrop-blur-sm border-foreground/20 hover:bg-white/80 hover:text-foreground">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  );
};

export default ServicesTabSection;
