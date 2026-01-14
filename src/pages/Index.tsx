import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Globe, Smartphone, Database, Zap, Shield, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that deliver seamless user experiences."
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to solve your unique business challenges."
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable APIs and database architectures that power your applications."
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support" }
  ];

  const features = [
    { icon: Zap, title: "Fast Delivery", description: "Agile development for quick turnaround" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security standards" },
    { icon: Users, title: "Dedicated Team", description: "Expert developers assigned to your project" }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8 animate-slide-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Zap className="h-4 w-4" />
              Software & Web Development Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              We build digital
              <span className="block text-accent">products that matter</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advora transforms your ideas into powerful software solutions. From web applications to mobile apps, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg hover:scale-105 transition-all">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg hover:scale-105 transition-all">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-card py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`text-center animate-slide-up stagger-${index + 1}`}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-8 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="rounded-full px-8 py-6">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-card py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-slide-up">
                <h2 className="text-3xl md:text-5xl font-bold">Why choose Advora?</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're not just developers—we're your technology partners. We combine technical expertise with business acumen to deliver solutions that drive real results.
                </p>
                <div className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 animate-slide-up stagger-2">
                <div className="p-8 rounded-3xl bg-background border border-border">
                  <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                  <div className="space-y-4">
                    {["Discovery & Planning", "Design & Prototyping", "Development & Testing", "Launch & Support"].map((step, index) => (
                      <div key={step} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-[2.5rem] bg-accent text-accent-foreground p-12 md:p-16 text-center animate-scale-in">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to start your project?</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Let's discuss how we can help bring your vision to life. Get a free consultation today.
              </p>
              <Link to="/contact">
                <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 rounded-full px-10 py-6 text-lg hover:scale-105 transition-all mt-4">
                  Get Free Consultation
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

export default Index;
