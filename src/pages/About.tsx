import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Users, Target, Award, Heart } from "lucide-react";
import ValuesTabSection from "@/components/ValuesTabSection";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FlipImageCarousel from "@/components/FlipImageCarousel";
import HowWeWorkSection from "@/components/HowWeWorkSection";

import whyChoose1 from "@/assets/why-choose-1.jpg";
import whyChoose2 from "@/assets/why-choose-2.jpg";
import whyChoose3 from "@/assets/why-choose-3.jpg";
import { Button } from "@/components/ui/button";

import aboutHero from "@/assets/about-hero.jpg";

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
      skills: ["React", "Node.js", "System Design"]
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      bio: "Passionate about creating intuitive and beautiful user experiences.",
      skills: ["Figma", "User Research", "Prototyping"]
    },
    {
      name: "Michael Roberts",
      role: "Backend Engineer",
      bio: "Expert in scalable systems and cloud infrastructure.",
      skills: ["Python", "AWS", "PostgreSQL"]
    }
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
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Crafting Digital</span>
                    <span className="block font-bold text-primary">Excellence</span>
                  </h1>

                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
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
        <section className="py-4 sm:py-8">
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
        <section className="section-divider">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-foreground leading-relaxed mb-6">
              Advora is a space for exploring ideas, finding inspiration, and discovering new ways of building the digital world.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From web development and mobile apps to custom software and cloud solutions, we share our expertise to help businesses thrive. Join us as we explore technologies that inspire innovation and meaningful growth.
            </p>
          </div>
        </section>


        {/* Why Choose Advora - Flip Image Carousel */}
        <section className="section-divider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
                  <span className="block font-serif italic font-normal">Your Success Is Our Mission</span>
                  <span className="block font-bold text-primary">Here's What Sets Us Apart</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We combine technical expertise with genuine partnership to deliver solutions that exceed expectations
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <FlipImageCarousel
                items={[
                  {
                    image: whyChoose1,
                    title: "Collaborative Team",
                    subtitle: "Working Together for Success",
                    description: "Our expert team collaborates closely with you to understand your vision and deliver solutions that exceed expectations. We believe in transparent communication and partnership-driven development."
                  },
                  {
                    image: whyChoose2,
                    title: "Technical Excellence",
                    subtitle: "Cutting-Edge Development",
                    description: "Our developers use modern technologies and best practices to build scalable, maintainable solutions. From architecture to deployment, we ensure enterprise-grade quality in every line of code."
                  },
                  {
                    image: whyChoose3,
                    title: "24/7 Support",
                    subtitle: "Always Here When You Need Us",
                    description: "Our dedicated support team is available around the clock to assist you. We provide ongoing maintenance, updates, and rapid response to ensure your applications run smoothly."
                  }
                ]}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* How We Work Section */}
        <HowWeWorkSection />


        {/* Team Section */}
        <section className="section-divider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
                <span className="block font-serif italic font-normal">The Passionate People Behind</span>
                <span className="block font-bold text-primary">Every Successful Project</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our diverse team of experts brings creativity, technical excellence, and dedication to every challenge</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={member.name} className={`p-8 rounded-3xl bg-card border border-border animate-slide-up stagger-${(index % 3) + 1} transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10`}>
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
