import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Users, Target, Award, Heart, Globe, Clock, GraduationCap, Coffee, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import ValuesTabSection from "@/components/ValuesTabSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import aboutHero from "@/assets/about-hero.jpg";
import teamAlex from "@/assets/team-alex.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamMichael from "@/assets/team-michael.jpg";
import teamEmily from "@/assets/team-emily.jpg";
import teamJames from "@/assets/team-james.jpg";
import teamLisa from "@/assets/team-lisa.jpg";
import projectHealthtrack from "@/assets/project-healthtrack.jpg";
import projectFinanceflow from "@/assets/project-financeflow.jpg";
import projectEdulearn from "@/assets/project-edulearn.jpg";
import projectRetailhub from "@/assets/project-retailhub.jpg";
import projectLogitrack from "@/assets/project-logitrack.jpg";
import projectMediaconnect from "@/assets/project-mediconnect.jpg";

const About = () => {
  const [activeYear, setActiveYear] = useState("2026");
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards, ensuring every line of code and every design element meets our quality benchmarks."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great products are built together. We believe in transparent communication and partnership throughout the development process."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do. Our enthusiasm for technology and innovation drives us to create exceptional digital experiences."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Developer",
      bio: "10+ years of experience in full-stack development and software architecture.",
      skills: ["React", "Node.js", "System Design"],
      image: teamAlex
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      bio: "Passionate about creating intuitive and beautiful user experiences.",
      skills: ["Figma", "User Research", "Prototyping"],
      image: teamSarah
    },
    {
      name: "Michael Roberts",
      role: "Backend Engineer",
      bio: "Expert in scalable systems and cloud infrastructure.",
      skills: ["Python", "AWS", "PostgreSQL"],
      image: teamMichael
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      bio: "Ensures smooth delivery and exceptional client communication.",
      skills: ["Agile", "Scrum", "Client Relations"],
      image: teamEmily
    },
    {
      name: "James Wilson",
      role: "Mobile Developer",
      bio: "Specialist in cross-platform mobile application development.",
      skills: ["React Native", "iOS", "Android"],
      image: teamJames
    },
    {
      name: "Lisa Park",
      role: "DevOps Engineer",
      bio: "Focuses on automation, deployment, and infrastructure reliability.",
      skills: ["Docker", "Kubernetes", "CI/CD"],
      image: teamLisa
    }
  ];

  const milestones = [
    { 
      year: "2021", 
      title: "FOUNDED ADVORA: THE BEGINNING OF INNOVATION", 
      highlights: ["Started with a vision to help businesses succeed", "Assembled a team of passionate developers", "Established core development methodologies"],
      image: projectHealthtrack
    },
    { 
      year: "2022", 
      title: "FIRST MAJOR CLIENT: ENTERPRISE BREAKTHROUGH", 
      highlights: ["Delivered first enterprise-level project", "Established reputation for quality", "Expanded service offerings"],
      image: projectFinanceflow
    },
    { 
      year: "2023", 
      title: "TEAM EXPANSION: GROWING TOGETHER", 
      highlights: ["Grew to 10+ team members", "Added specialized design team", "Opened remote-first culture"],
      image: projectEdulearn
    },
    { 
      year: "2024", 
      title: "100+ PROJECTS: MILESTONE ACHIEVED", 
      highlights: ["Reached 100 successfully delivered projects", "Served clients across industries", "Maintained 98% satisfaction rate"],
      image: projectRetailhub
    },
    { 
      year: "2025", 
      title: "INTERNATIONAL REACH: GLOBAL EXPANSION", 
      highlights: ["Expanded to North America and Europe", "Partnered with Fortune 500 companies", "Launched 24/7 support services"],
      image: projectLogitrack
    },
    { 
      year: "2026", 
      title: "AI INTEGRATION: SHAPING THE FUTURE", 
      highlights: ["Launched AI-powered development tools", "Integrated machine learning solutions", "Leading innovation in tech industry"],
      image: projectMediaconnect
    }
  ];

  const benefits = [
    { icon: Globe, title: "Remote-First", description: "Work from anywhere with our distributed team model" },
    { icon: Clock, title: "Flexible Hours", description: "We trust our team to manage their time effectively" },
    { icon: GraduationCap, title: "Learning Budget", description: "Annual stipend for courses, conferences, and books" },
    { icon: Coffee, title: "Team Retreats", description: "Regular in-person gatherings to connect and collaborate" }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section - Editorial Split Layout */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Card */}
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={aboutHero}
                    alt="Advora workspace"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] text-foreground">
                    Crafting Digital
                    <span className="block">Excellence</span>
                  </h1>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Welcome to Advora: A space for innovation, collaboration, and digital transformation. Where technology meets creativity to build solutions that shape the future.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Work With Us
                      </Button>
                    </Link>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "5+", label: "Years in Business" },
                { value: "150+", label: "Projects Completed" },
                { value: "50+", label: "Happy Clients" },
                { value: "15+", label: "Team Members" }
              ].map((stat, index) => (
                <div key={stat.label} className={`text-center animate-slide-up stagger-${index + 1}`}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Tagline Section */}
        <section className="section-divider py-16 sm:py-20 pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-foreground leading-relaxed mb-6">
              Advora is a space for exploring ideas, finding inspiration, and discovering new ways of building the digital world.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From web development and mobile apps to custom software and cloud solutions, we share our expertise to help businesses thrive. Join us as we explore technologies that inspire innovation and meaningful growth.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Advora was founded with a simple mission: to bridge the gap between innovative ideas and powerful technology. We saw too many businesses struggling with outdated software or unable to bring their digital visions to life.
                </p>
                <p>
                  Today, we've grown into a full-service software and web development agency, serving clients across industries. From startups launching their first product to enterprises modernizing their systems, we bring the same level of dedication and expertise to every project.
                </p>
                <p>
                  Our team combines years of experience with a genuine passion for technology. We stay at the forefront of industry trends, continuously learning and adopting new tools and methodologies to deliver the best possible solutions.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 p-8 md:p-12 animate-slide-up stagger-2">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the most trusted technology partner for businesses seeking to transform their digital presence.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">Know about our journey and milestones achieved.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left - Vertical Year Timeline */}
              <div className="lg:w-48 flex-shrink-0">
                <div className="flex lg:flex-col gap-4 lg:gap-0 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                  {milestones.slice().reverse().map((milestone, index) => {
                    const isActive = activeYear === milestone.year;
                    return (
                      <button
                        key={milestone.year}
                        onClick={() => setActiveYear(milestone.year)}
                        className="flex items-center gap-3 py-3 lg:py-4 transition-all duration-300 group min-w-fit"
                      >
                        {/* Dot indicator */}
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                          isActive 
                            ? "bg-primary ring-4 ring-primary/20" 
                            : "bg-gray-300 group-hover:bg-gray-400"
                        }`} />
                        {/* Year text */}
                        <span className={`text-lg font-bold transition-all duration-300 ${
                          isActive 
                            ? "text-primary text-xl" 
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}>
                          {milestone.year}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right - Content Panel */}
              <div className="flex-1">
                {milestones.filter(m => m.year === activeYear).map((milestone) => (
                  <div key={milestone.year} className="flex flex-col lg:flex-row gap-8 animate-fade-in">
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground">{milestone.year}</h3>
                      <h4 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wide">
                        {milestone.title}
                      </h4>
                      <ul className="space-y-3">
                        {milestone.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary font-bold mt-0.5">{String.fromCharCode(97 + idx)}.</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Progress indicator */}
                      <div className="pt-6">
                        <div className="flex items-center gap-2">
                          {milestones.map((m, idx) => (
                            <div 
                              key={m.year}
                              className={`h-1 w-8 rounded-full transition-all duration-300 ${
                                m.year === activeYear ? "bg-primary" : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {milestones.findIndex(m => m.year === activeYear) + 1}/{milestones.length}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="lg:w-80 flex-shrink-0">
                      <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={milestone.image} 
                          alt={milestone.title}
                          className="w-full h-64 lg:h-72 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <ValuesTabSection />

        {/* Team Section */}
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">The talented people behind Advora</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={member.name} className={`p-8 rounded-3xl bg-background border border-border animate-slide-up stagger-${(index % 6) + 1}`}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mb-6"
                  />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-muted text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Culture</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe that great work comes from happy, supported team members. Our culture is built on trust, flexibility, and continuous growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className={`animate-slide-up stagger-${index + 1}`}>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                      <benefit.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-bold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-card p-8 md:p-12 border border-border">
              <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're always looking for talented individuals who share our passion for building great software. If you're interested in joining Advora, we'd love to hear from you.
              </p>
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to work with us?"
          description="Let's discuss your project and see how Advora can help you achieve your goals."
          buttonText="Get in Touch"
        />
      </main>

      <Footer />
    </div>
  );
};

export default About;
