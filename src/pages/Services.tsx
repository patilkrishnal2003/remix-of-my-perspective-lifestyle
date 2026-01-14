import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Smartphone, Code, Database, Cloud, Settings, Palette, LineChart, CheckCircle, Zap, Shield, Clock } from "lucide-react";
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

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      price: "5,000",
      features: [
        "Up to 5 pages or screens",
        "Responsive design",
        "Basic SEO optimization",
        "30 days support",
        "Source code delivery"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "15,000",
      popular: true,
      features: [
        "Up to 15 pages or screens",
        "Custom design system",
        "Advanced SEO & Analytics",
        "90 days support",
        "API integrations",
        "Performance optimization"
      ]
    },
    {
      name: "Enterprise",
      description: "For complex, large-scale projects",
      price: "Custom",
      features: [
        "Unlimited pages/screens",
        "Custom architecture",
        "Dedicated team",
        "24/7 priority support",
        "SLA guarantees",
        "Ongoing maintenance"
      ]
    }
  ];

  const advantages = [
    { icon: Zap, title: "Fast Turnaround", description: "Agile methodologies for efficient delivery without compromising quality." },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade security practices and compliance standards." },
    { icon: Clock, title: "On-Time Delivery", description: "95% of projects delivered on or before the agreed deadline." },
    { icon: CheckCircle, title: "Quality Guaranteed", description: "Rigorous testing and code review processes ensure reliability." }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
              Comprehensive development solutions to bring your digital vision to life. From concept to deployment, we've got you covered.
            </p>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="bg-card py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={advantage.title} className={`text-center animate-slide-up stagger-${index + 1}`}>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">Full-stack development expertise for every need</p>
          </div>
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
        <section className="bg-card py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-xl text-muted-foreground">A proven methodology for delivering successful projects</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We learn about your business, goals, and requirements through in-depth discussions and research." },
                { step: "02", title: "Planning", description: "We create detailed specifications, timelines, and project roadmaps with clear milestones." },
                { step: "03", title: "Development", description: "Our team builds your solution using agile methodologies with regular updates and demos." },
                { step: "04", title: "Launch", description: "We deploy your project and provide ongoing support to ensure long-term success." }
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
          </div>
        </section>

        {/* Pricing Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
            <p className="text-xl text-muted-foreground">Transparent pricing for projects of all sizes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`p-8 rounded-3xl ${tier.popular ? 'bg-accent text-accent-foreground ring-2 ring-accent' : 'bg-card border border-border'} animate-slide-up stagger-${index + 1}`}
              >
                {tier.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-foreground/20 text-sm font-medium mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className={`mb-4 ${tier.popular ? 'opacity-90' : 'text-muted-foreground'}`}>{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  {tier.price !== "Custom" && <span className={tier.popular ? 'opacity-90' : 'text-muted-foreground'}> starting</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button 
                    className={`w-full rounded-full py-6 ${tier.popular ? 'bg-accent-foreground text-accent hover:bg-accent-foreground/90' : 'bg-accent text-accent-foreground hover:bg-accent/90'}`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            * Prices are estimates. Contact us for a detailed quote based on your specific requirements.
          </p>
        </section>

        {/* Technologies Section */}
        <section className="bg-card py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-xl text-muted-foreground">Modern tools for modern solutions</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Python", "Go",
                "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes",
                "GraphQL", "React Native", "Flutter", "Tailwind CSS", "Figma", "Git"
              ].map((tech, index) => (
                <div
                  key={tech}
                  className={`p-4 rounded-xl bg-background border border-border text-center hover:border-accent/50 transition-all animate-slide-up stagger-${(index % 6) + 1}`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Answers to common questions about our services</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How long does a typical project take?", a: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation." },
              { q: "Do you work with clients remotely?", a: "Yes! We're a remote-first company and have successfully delivered projects for clients worldwide. We use modern collaboration tools to ensure smooth communication regardless of location." },
              { q: "What happens after the project is delivered?", a: "We offer various maintenance and support packages to keep your application running smoothly. This includes bug fixes, security updates, and feature enhancements as needed." },
              { q: "Can you work with our existing team?", a: "Absolutely. We offer team augmentation services where our developers integrate with your existing team. We can also provide technical consulting to guide your internal development efforts." },
              { q: "What is your payment structure?", a: "We typically work with a milestone-based payment structure. A percentage is due upfront, with remaining payments tied to project milestones. We're flexible and can discuss arrangements that work for your budget." }
            ].map((faq, index) => (
              <div key={index} className={`p-6 rounded-2xl bg-card border border-border animate-slide-up stagger-${(index % 5) + 1}`}>
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-[2.5rem] bg-accent text-accent-foreground p-12 md:p-16 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
              <p className="text-xl opacity-90">
                Tell us about your project and we'll provide a free consultation and detailed quote.
              </p>
              <Link to="/contact">
                <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 rounded-full px-10 py-6 text-lg hover:scale-105 transition-all mt-4">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
