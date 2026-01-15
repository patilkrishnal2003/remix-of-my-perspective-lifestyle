import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Smartphone, Code, Database, Cloud, Settings, Palette, LineChart, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeaturesSectionWithHoverEffects, FeatureItem } from "@/components/ui/feature-section-with-hover-effects";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const serviceFeatures: FeatureItem[] = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      icon: <Globe className="h-6 w-6" />,
      tags: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-6 w-6" />,
      tags: ["React Native", "Flutter", "iOS"],
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions designed to solve your unique business challenges.",
      icon: <Code className="h-6 w-6" />,
      tags: ["Python", "Node.js", "Go"],
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions and APIs that power your applications.",
      icon: <Database className="h-6 w-6" />,
      tags: ["GraphQL", "REST", "PostgreSQL"],
    },
    {
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup, migration, and management for scalability.",
      icon: <Cloud className="h-6 w-6" />,
      tags: ["AWS", "Azure", "Docker"],
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality.",
      icon: <Palette className="h-6 w-6" />,
      tags: ["Figma", "Prototyping", "Research"],
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing technical support to keep your applications running smoothly.",
      icon: <Settings className="h-6 w-6" />,
      tags: ["24/7", "Monitoring", "Updates"],
    },
    {
      title: "Technical Consulting",
      description: "Strategic technology advice to help you make informed decisions.",
      icon: <LineChart className="h-6 w-6" />,
      tags: ["Architecture", "Planning", "Reviews"],
    },
  ];

  const techStackWithIcons = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Go", icon: "🔷" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redis", icon: "🔴" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⎈" },
    { name: "GraphQL", icon: "◈" },
    { name: "React Native", icon: "📱" },
    { name: "Flutter", icon: "💙" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Figma", icon: "🎯" },
    { name: "Git", icon: "🔀" },
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={servicesHero} 
              alt="Services background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
                Comprehensive development solutions to bring your digital vision to life. From concept to deployment, we've got you covered.
              </p>
            </div>
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

        {/* Services Grid with Hover Effects */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">Full-stack development expertise for every need</p>
          </div>
          <FeaturesSectionWithHoverEffects features={serviceFeatures} />
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

        {/* Technologies Section */}
        <section className="bg-card py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-xl text-muted-foreground">Modern tools for modern solutions</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {techStackWithIcons.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full bg-background border border-border hover:border-accent/50 hover:scale-105 transition-all animate-slide-up stagger-${(index % 6) + 1}`}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
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
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "How long does a typical project take?", a: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation." },
                { q: "Do you work with clients remotely?", a: "Yes! We're a remote-first company and have successfully delivered projects for clients worldwide. We use modern collaboration tools to ensure smooth communication regardless of location." },
                { q: "What happens after the project is delivered?", a: "We offer various maintenance and support packages to keep your application running smoothly. This includes bug fixes, security updates, and feature enhancements as needed." },
                { q: "Can you work with our existing team?", a: "Absolutely. We offer team augmentation services where our developers integrate with your existing team. We can also provide technical consulting to guide your internal development efforts." },
                { q: "What is your payment structure?", a: "We typically work with a milestone-based payment structure. A percentage is due upfront, with remaining payments tied to project milestones. We're flexible and can discuss arrangements that work for your budget." }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-2xl bg-card border border-border px-6 data-[state=open]:border-accent/50"
                >
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
