import Header from "@/components/Header";
import { ArrowRight, BookOpen, Compass, Palette, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    {
      title: "Wellness",
      description: "Mindful living, self-care practices, and holistic health insights",
      icon: BookOpen,
      href: "/wellness",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Travel",
      description: "Explore destinations, cultures, and transformative journeys",
      icon: Compass,
      href: "/travel",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Creativity",
      description: "Artistic expression, design thinking, and creative inspiration",
      icon: Palette,
      href: "/creativity",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Growth",
      description: "Personal development, learning strategies, and life skills",
      icon: TrendingUp,
      href: "/growth",
      color: "from-orange-500/20 to-amber-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-slide-down">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Fresh perspectives for
              <span className="block text-accent">mindful living</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover thoughtful articles on wellness, travel, creativity, and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
              >
                Explore Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about#newsletter" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-input bg-background font-medium hover:bg-muted transition-all"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
            Explore Our Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.title}
                to={category.href}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${category.color} border border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-background/80 backdrop-blur-sm">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to dive in?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Browse our curated collection of articles and find your next source of inspiration.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/wellness" className="hover:text-accent transition-colors">Wellness</a></li>
                <li><a href="/travel" className="hover:text-accent transition-colors">Travel</a></li>
                <li><a href="/creativity" className="hover:text-accent transition-colors">Creativity</a></li>
                <li><a href="/growth" className="hover:text-accent transition-colors">Growth</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">Our Story</a></li>
                <li><a href="/authors" className="hover:text-accent transition-colors">Authors</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/style-guide" className="hover:text-accent transition-colors">Style Guide</a></li>
                <li><a href="/about#newsletter" className="hover:text-accent transition-colors">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Perspective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
