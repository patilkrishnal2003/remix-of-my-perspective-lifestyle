import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart, Globe, Clock, GraduationCap, Coffee, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutHeroImage from "@/assets/about-hero.jpg";
import teamAlex from "@/assets/team-alex.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamMichael from "@/assets/team-michael.jpg";
import teamEmily from "@/assets/team-emily.jpg";
import teamJames from "@/assets/team-james.jpg";
import teamLisa from "@/assets/team-lisa.jpg";

const About = () => {
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
    { year: "2021", title: "Founded Advora", description: "Started with a vision to help businesses succeed through technology." },
    { year: "2022", title: "First Major Client", description: "Delivered our first enterprise-level project, establishing our reputation." },
    { year: "2023", title: "Team Expansion", description: "Grew to 10+ team members across development and design." },
    { year: "2024", title: "100+ Projects", description: "Reached a milestone of 100 successfully delivered projects." },
    { year: "2025", title: "International Reach", description: "Expanded services to clients across North America and Europe." },
    { year: "2026", title: "AI Integration", description: "Launched AI-powered development tools and consulting services." }
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
        {/* Hero Section - Card Style */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-10 sm:pb-12 md:pb-16">
          <div className="rounded-3xl bg-card overflow-hidden shadow-lg animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Image */}
              <div className="relative h-64 sm:h-80 lg:h-auto">
                <img
                  src={aboutHeroImage}
                  alt="Advora team workspace"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-6">
                  Crafting Digital
                  <br />
                  Excellence,
                  <br />
                  Together.
                </h1>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                  Welcome to Advora Digital: A Realm of Innovation, Expertise, and Discovery. Where Code Illuminates Paths of Progress and Design Transforms the Digital Landscape.
                </p>

                {/* CTA + Social Icons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/contact">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-5 text-base hover:scale-105 transition-all">
                      Get Started
                    </Button>
                  </Link>
                  
                  {/* Social Icons */}
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <FaInstagram className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <FaFacebookF className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <FaLinkedinIn className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tagline below card */}
          <p className="text-center text-lg sm:text-xl md:text-2xl font-serif italic text-foreground/80 mt-10 max-w-3xl mx-auto leading-relaxed">
            Advora is a space for building ideas, finding solutions, and discovering new ways of creating the digital world.
          </p>
        </section>

        {/* Stats Section */}
        <section className="section-divider py-16 pt-20">
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">Key milestones in our growth</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`p-6 rounded-2xl bg-background border border-border animate-slide-up stagger-${(index % 6) + 1}`}>
                  <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                  <h3 className="font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className={`p-8 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all animate-slide-up stagger-${index + 1}`}>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

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

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-[2.5rem] bg-accent text-accent-foreground p-12 md:p-16 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to work with us?</h2>
              <p className="text-xl opacity-90">
                Let's discuss your project and see how Advora can help you achieve your goals.
              </p>
              <Link to="/contact">
                <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 rounded-full px-10 py-6 text-lg hover:scale-105 transition-all mt-4">
                  Get in Touch
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

export default About;
