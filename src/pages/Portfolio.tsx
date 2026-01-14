import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink, Globe, Smartphone, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "FinanceFlow",
      category: "Web Application",
      description: "A comprehensive financial management platform for small businesses with invoicing, expense tracking, and reporting features.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      icon: Globe,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "HealthTrack Pro",
      category: "Mobile App",
      description: "Cross-platform health and fitness tracking app with personalized workout plans and nutrition guidance.",
      tech: ["React Native", "Firebase", "Machine Learning"],
      icon: Smartphone,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "RetailHub",
      category: "E-commerce Platform",
      description: "Multi-vendor marketplace with advanced inventory management, analytics dashboard, and automated order processing.",
      tech: ["Next.js", "Supabase", "Stripe", "AWS"],
      icon: Globe,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "TaskMaster",
      category: "SaaS Application",
      description: "Project management tool with real-time collaboration, Gantt charts, and team productivity analytics.",
      tech: ["React", "GraphQL", "MongoDB", "WebSockets"],
      icon: Code,
      color: "from-orange-500/20 to-amber-500/20"
    },
    {
      title: "EduLearn",
      category: "Learning Platform",
      description: "Online education platform with video courses, interactive quizzes, progress tracking, and certificates.",
      tech: ["Vue.js", "Django", "PostgreSQL", "Vimeo API"],
      icon: Globe,
      color: "from-indigo-500/20 to-violet-500/20"
    },
    {
      title: "PropertyPro",
      category: "Mobile App",
      description: "Real estate listing and management app with virtual tours, mortgage calculator, and agent matching.",
      tech: ["React Native", "Node.js", "MongoDB", "Mapbox"],
      icon: Smartphone,
      color: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  const testimonials = [
    {
      quote: "Advora transformed our outdated system into a modern, efficient platform. Their team was professional, communicative, and delivered beyond our expectations.",
      author: "Jennifer Martinez",
      role: "CEO, FinanceFlow"
    },
    {
      quote: "Working with Advora was a game-changer for our startup. They understood our vision and built an app that our users love.",
      author: "David Kim",
      role: "Founder, HealthTrack Pro"
    },
    {
      quote: "The Advora team's technical expertise and attention to detail made all the difference. Our e-commerce platform handles thousands of transactions daily without issues.",
      author: "Sarah Thompson",
      role: "CTO, RetailHub"
    }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-20 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group rounded-3xl bg-gradient-to-br ${project.color} border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${(index % 6) + 1}`}
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-background/80 flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-background/80 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Hear from the businesses we've helped succeed</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className={`p-8 rounded-3xl bg-card animate-slide-up stagger-${index + 1}`}>
                <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl bg-accent text-accent-foreground p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Want to be our next success story?</h2>
            <p className="text-xl opacity-90">
              Let's discuss your project and create something amazing together.
            </p>
            <Link to="/contact">
              <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 rounded-full px-10 py-6 text-lg hover:scale-105 transition-all mt-4">
                Start Your Project
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

export default Portfolio;
