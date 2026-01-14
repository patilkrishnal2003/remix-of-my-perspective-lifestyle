import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Smartphone, Code, Database, Cloud, Settings, Palette, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies. From landing pages to complex enterprise platforms, we create responsive, fast, and SEO-optimized solutions.",
      features: ["React & Next.js", "Custom CMS Integration", "E-commerce Solutions", "Progressive Web Apps"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      features: ["React Native", "iOS & Android Native", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to solve your unique business challenges and streamline operations.",
      features: ["Business Process Automation", "Legacy System Modernization", "Custom Integrations", "Scalable Architecture"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and APIs that power your applications with reliability and performance.",
      features: ["RESTful & GraphQL APIs", "Database Design", "Microservices", "Real-time Systems"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup, migration, and management for scalable and cost-effective operations.",
      features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing technical support and maintenance to keep your applications running smoothly and securely.",
      features: ["24/7 Monitoring", "Bug Fixes & Updates", "Performance Optimization", "Security Patches"]
    },
    {
      icon: LineChart,
      title: "Technical Consulting",
      description: "Strategic technology advice to help you make informed decisions and plan for future growth.",
      features: ["Technology Assessment", "Architecture Planning", "Team Augmentation", "Code Reviews"]
    }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-20 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Comprehensive development solutions to bring your digital vision to life. From concept to deployment, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-8 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-slide-up stagger-${(index % 4) + 1}`}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20 rounded-3xl bg-card p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground">A proven methodology for delivering successful projects</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and requirements through in-depth discussions." },
              { step: "02", title: "Planning", description: "We create detailed specifications, timelines, and project roadmaps." },
              { step: "03", title: "Development", description: "Our team builds your solution using agile methodologies with regular updates." },
              { step: "04", title: "Launch", description: "We deploy your project and provide ongoing support to ensure success." }
            ].map((phase, index) => (
              <div key={phase.step} className={`text-center animate-slide-up stagger-${index + 1}`}>
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl bg-accent text-accent-foreground p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
            <p className="text-xl opacity-90">
              Tell us about your project and we'll provide a free consultation and quote.
            </p>
            <Link to="/contact">
              <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 rounded-full px-10 py-6 text-lg hover:scale-105 transition-all mt-4">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
