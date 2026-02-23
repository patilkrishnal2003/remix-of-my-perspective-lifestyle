import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TechStackSection from "@/components/TechStackSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, CheckCircle, Zap, Shield, Code, Layout, Search, Smartphone } from "lucide-react";
import serviceWebDev from "@/assets/service-web-dev.jpg";
import { usePageSEO } from "@/hooks/usePageSEO";

const WebDevelopment = () => {
  usePageSEO({
    title: "Web Development Services",
    description: "Custom web development by Advora Digital — responsive, SEO-optimized, fast-loading websites and web apps built with modern frameworks.",
    canonical: "/services/web-development",
  });
  const features = [
    { icon: Layout, title: "Responsive Design", description: "Websites that look perfect on every device, from desktop to mobile." },
    { icon: Zap, title: "Fast Performance", description: "Optimized code and assets for lightning-fast load times." },
    { icon: Search, title: "SEO Optimized", description: "Built with search engines in mind to maximize visibility." },
    { icon: Shield, title: "Secure & Reliable", description: "Industry-standard security practices to protect your data." },
  ];

  const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"];

  const benefits = [
    "Custom solutions tailored to your business needs",
    "Modern, scalable architecture",
    "Ongoing maintenance and support",
    "Integration with third-party services",
    "Progressive Web App capabilities",
    "Analytics and performance monitoring",
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={serviceWebDev}
                    alt="Web Development"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">Web Development</span>
                  </div>
                  
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Custom Web</span>
                    <span className="block font-bold text-primary">Solutions</span>
                  </h1>

                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    From responsive websites to complex web applications, we build digital experiences that engage users and grow your business.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/portfolio" className="w-full sm:w-auto">
                      <Button variant="outline" className="rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        View Our Work
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">What We Deliver</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies & Benefits */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose Us</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TechStackSection showTwoRows={true} />

        <CTASection 
          title="Ready to Build Your Website?"
          description="Let's discuss your project and create something amazing together."
          buttonText="Get Started"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default WebDevelopment;
