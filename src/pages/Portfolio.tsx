import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { type Testimonial } from "@/components/TestimonialCard";
import { ArrowRight, Globe, Smartphone, Code, Star, ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import projectFinanceFlow from "@/assets/project-financeflow.jpg";
import projectHealthTrack from "@/assets/project-healthtrack.jpg";
import projectRetailHub from "@/assets/project-retailhub.jpg";
import projectTaskMaster from "@/assets/project-taskmaster.jpg";
import projectEduLearn from "@/assets/project-edulearn.jpg";
import projectPropertyPro from "@/assets/project-propertypro.jpg";
import projectLogiTrack from "@/assets/project-logitrack.jpg";
import projectMediConnect from "@/assets/project-mediconnect.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "FinanceFlow",
      category: "Web Application",
      description: "A comprehensive financial management platform for small businesses with invoicing, expense tracking, and reporting features.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: projectFinanceFlow,
      results: "300% user growth in 6 months"
    },
    {
      title: "HealthTrack Pro",
      category: "Mobile App",
      description: "Cross-platform health and fitness tracking app with personalized workout plans and nutrition guidance.",
      tech: ["React Native", "Firebase", "Machine Learning"],
      image: projectHealthTrack,
      results: "50,000 users in first month"
    },
    {
      title: "RetailHub",
      category: "E-commerce Platform",
      description: "Multi-vendor marketplace with advanced inventory management, analytics dashboard, and automated order processing.",
      tech: ["Next.js", "Supabase", "Stripe", "AWS"],
      image: projectRetailHub,
      results: "$2M in transactions processed"
    },
    {
      title: "TaskMaster",
      category: "SaaS Application",
      description: "Project management tool with real-time collaboration, Gantt charts, and team productivity analytics.",
      tech: ["React", "GraphQL", "MongoDB", "WebSockets"],
      image: projectTaskMaster,
      results: "Used by 200+ teams"
    },
    {
      title: "EduLearn",
      category: "Learning Platform",
      description: "Online education platform with video courses, interactive quizzes, progress tracking, and certificates.",
      tech: ["Vue.js", "Django", "PostgreSQL", "Vimeo API"],
      image: projectEduLearn,
      results: "10,000+ course completions"
    },
    {
      title: "PropertyPro",
      category: "Mobile App",
      description: "Real estate listing and management app with virtual tours, mortgage calculator, and agent matching.",
      tech: ["React Native", "Node.js", "MongoDB", "Mapbox"],
      image: projectPropertyPro,
      results: "4.8 star rating on app stores"
    },
    {
      title: "LogiTrack",
      category: "Enterprise Software",
      description: "Fleet management and logistics optimization system with real-time tracking and route planning.",
      tech: ["React", "Python", "PostgreSQL", "Redis"],
      image: projectLogiTrack,
      results: "30% reduction in delivery times"
    },
    {
      title: "MediConnect",
      category: "Healthcare Platform",
      description: "Telemedicine platform connecting patients with healthcare providers for virtual consultations.",
      tech: ["Next.js", "WebRTC", "HIPAA Compliance", "AWS"],
      image: projectMediConnect,
      results: "100,000+ consultations facilitated"
    }
  ];

  const categories = ["All", "Web Application", "Mobile App", "E-commerce Platform", "SaaS Application", "Enterprise Software"];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      platform: "google",
      title: "Outstanding Digital Transformation",
      rating: 5,
      snippet: "Advora transformed our outdated system into a modern, efficient platform. Their team was professional, communicative, and delivered beyond our expectations.",
      readMoreUrl: "#",
      user: {
        name: "Jennifer Martinez",
        role: "CEO, FinanceFlow",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "2",
      platform: "linkedin",
      title: "Game-Changer for Our Startup",
      rating: 5,
      snippet: "Working with Advora was a game-changer for our startup. They understood our vision and built an app that our users love.",
      readMoreUrl: "#",
      user: {
        name: "David Kim",
        role: "Founder, HealthTrack Pro",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "3",
      platform: "google",
      title: "Technical Excellence",
      rating: 5,
      snippet: "The Advora team's technical expertise and attention to detail made all the difference. Our e-commerce platform handles thousands of transactions daily without issues.",
      readMoreUrl: "#",
      user: {
        name: "Sarah Thompson",
        role: "CTO, RetailHub",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "4",
      platform: "linkedin",
      title: "True Partners in Success",
      rating: 5,
      snippet: "They didn't just build software—they became true partners in our success. The team understood our industry challenges and delivered solutions that made a real impact.",
      readMoreUrl: "#",
      user: {
        name: "Robert Chen",
        role: "COO, LogiTrack",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "5",
      platform: "google",
      title: "Exceeded All Expectations",
      rating: 5,
      snippet: "From initial concept to final deployment, Advora exceeded all expectations. Their attention to UX design resulted in a 40% increase in user engagement.",
      readMoreUrl: "#",
      user: {
        name: "Amanda Foster",
        role: "Product Director, EduLearn",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "6",
      platform: "linkedin",
      title: "Reliable and Innovative",
      rating: 5,
      snippet: "Advora delivered a robust real estate platform that has become essential to our operations. Their innovative approach to virtual tours set us apart from competitors.",
      readMoreUrl: "#",
      user: {
        name: "Michael Torres",
        role: "CEO, PropertyPro",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "7",
      platform: "google",
      title: "Healthcare Expertise",
      rating: 5,
      snippet: "Their understanding of healthcare compliance and patient privacy was impressive. MediConnect has facilitated over 100,000 consultations thanks to their solid architecture.",
      readMoreUrl: "#",
      user: {
        name: "Dr. Emily Watson",
        role: "Medical Director, MediConnect",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "8",
      platform: "linkedin",
      title: "Seamless Collaboration",
      rating: 5,
      snippet: "The team integrated seamlessly with our internal developers. Their agile methodology and clear communication made the entire project a pleasure to manage.",
      readMoreUrl: "#",
      user: {
        name: "James Patterson",
        role: "VP Engineering, TaskMaster",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        profileUrl: "#"
      }
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "4.9", label: "Average Rating" },
    { value: "95%", label: "Client Retention" }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section - Editorial Split Layout */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Card */}
            <div className="rounded-2xl sm:rounded-3xl bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Masonry Grid */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-3 sm:space-y-4">
                      <motion.div 
                        className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={projectFinanceFlow} alt="FinanceFlow" className="w-full h-full object-cover" />
                      </motion.div>
                      <motion.div 
                        className="rounded-xl sm:rounded-2xl overflow-hidden aspect-square"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={projectHealthTrack} alt="HealthTrack" className="w-full h-full object-cover" />
                      </motion.div>
                    </div>
                    <div className="space-y-3 sm:space-y-4 pt-8">
                      <motion.div 
                        className="rounded-xl sm:rounded-2xl overflow-hidden aspect-square"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={projectRetailHub} alt="RetailHub" className="w-full h-full object-cover" />
                      </motion.div>
                      <motion.div 
                        className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={projectTaskMaster} alt="TaskMaster" className="w-full h-full object-cover" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="space-y-4 sm:space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    150+ Projects Delivered
                  </span>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] text-foreground">
                    Work That
                    <span className="block">Speaks for Itself</span>
                  </h1>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    From startups to enterprises, we've helped businesses across industries achieve their digital ambitions.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex gap-8 pt-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">4.9</div>
                      <div className="text-sm text-muted-foreground">Avg Rating</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Client Retention</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2 rounded-full bg-card border border-border hover:border-accent/50 hover:bg-accent/10 transition-all text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group rounded-3xl bg-card border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${(index % 6) + 1}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  <div className="p-3 rounded-xl bg-muted/50 mb-4">
                    <p className="text-sm font-medium text-primary">{project.results}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-muted text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-primary font-medium">Featured Case Study</span>
                <h2 className="text-3xl md:text-4xl font-bold">How We Helped FinanceFlow Scale to 100K Users</h2>
                <p className="text-muted-foreground leading-relaxed">
                  FinanceFlow came to us with a legacy system that was struggling to keep up with demand. Through a complete platform redesign and modern technology stack, we helped them achieve 300% user growth in just 6 months.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">300%</div>
                    <div className="text-muted-foreground">User Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">50%</div>
                    <div className="text-muted-foreground">Fewer Support Tickets</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">12 wks</div>
                    <div className="text-muted-foreground">Development Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-muted-foreground">Uptime</div>
                  </div>
                </div>
                <Link to="/blog/financeflow-case-study">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 p-8 md:p-12 border border-border">
                <blockquote className="text-xl leading-relaxed mb-6">
                  "Advora didn't just build us a new platform—they transformed our entire business. The team understood our challenges and delivered a solution that exceeded every expectation."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                    <span className="font-bold text-primary">JM</span>
                  </div>
                  <div>
                    <div className="font-bold">Jennifer Martinez</div>
                    <div className="text-muted-foreground text-sm">CEO, FinanceFlow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <TestimonialsSection testimonials={testimonials} />
        </section>

        {/* Industries Section */}
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl text-muted-foreground">Expertise across diverse sectors</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Finance & Banking",
                "Healthcare",
                "E-commerce & Retail",
                "Education & EdTech",
                "Real Estate",
                "Logistics & Supply Chain",
                "Media & Entertainment",
                "SaaS & Technology"
              ].map((industry, index) => (
                <div
                  key={industry}
                  className={`p-6 rounded-2xl bg-background border border-border text-center hover:border-accent/50 transition-all animate-slide-up stagger-${(index % 4) + 1}`}
                >
                  <span className="font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Want to be our next success story?"
          description="Let's discuss your project and create something amazing together."
          buttonText="Start Your Project"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
