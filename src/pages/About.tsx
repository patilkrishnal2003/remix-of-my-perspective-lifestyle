import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart } from "lucide-react";

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
      bio: "10+ years of experience in full-stack development and software architecture."
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      bio: "Passionate about creating intuitive and beautiful user experiences."
    },
    {
      name: "Michael Roberts",
      role: "Backend Engineer",
      bio: "Expert in scalable systems and cloud infrastructure."
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      bio: "Ensures smooth delivery and exceptional client communication."
    }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-20 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Advora
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            We're a team of passionate developers and designers dedicated to building exceptional digital products that help businesses thrive.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up stagger-2">
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
          <div className="rounded-3xl bg-card p-8 md:p-12 animate-slide-up stagger-3">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className={`p-6 rounded-2xl bg-card animate-slide-up stagger-${index + 1}`}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The talented people behind Advora</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={member.name} className={`p-6 rounded-2xl bg-card text-center animate-slide-up stagger-${index + 1}`}>
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
