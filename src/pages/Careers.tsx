import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight, Users, Heart, Zap, Coffee } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      description: "Create beautiful, intuitive user experiences for our clients' products.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Manage cloud infrastructure and CI/CD pipelines for enterprise applications.",
    },
    {
      title: "Mobile Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Develop cross-platform mobile applications using React Native and Flutter.",
    },
    {
      title: "Technical Project Manager",
      department: "Operations",
      location: "Hybrid",
      type: "Full-time",
      description: "Lead agile teams and ensure successful delivery of client projects.",
    },
  ];

  const benefits = [
    { icon: MapPin, title: "Remote-First", description: "Work from anywhere in the world" },
    { icon: Heart, title: "Health Benefits", description: "Comprehensive health coverage" },
    { icon: Zap, title: "Growth Budget", description: "Annual learning & development fund" },
    { icon: Coffee, title: "Flexible Hours", description: "Work when you're most productive" },
  ];

  const stats = [
    { value: "30+", label: "Team Members" },
    { value: "15+", label: "Countries" },
    { value: "4.8★", label: "Glassdoor Rating" },
    { value: "95%", label: "Retention Rate" },
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
                {/* Image */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={aboutHero}
                    alt="Join Advora Team"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] text-foreground">
                    Join Our
                    <span className="block">Growing Team</span>
                  </h1>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    We're building the future of digital experiences. Join a team of passionate innovators, designers, and engineers who love what they do.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                      View Open Positions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Why Work With Us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-card border border-border p-6 text-center hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="group rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all hover:scale-[1.01]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {position.department}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{position.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button variant="outline" className="rounded-full px-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Don't See a Perfect Fit?"
          description="We're always looking for talented individuals. Send us your resume and let's chat."
          buttonText="Get in Touch"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;