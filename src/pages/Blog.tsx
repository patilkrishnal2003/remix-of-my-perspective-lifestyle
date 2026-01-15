import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts, getFeaturedPosts } from "@/data/blogPosts";

const Blog = () => {
  const featuredPosts = getFeaturedPosts();
  const regularPosts = blogPosts.filter(post => !post.featured);

  const categories = ["All", "Web Development", "Technology Trends", "Case Study", "Mobile Development", "Best Practices"];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-[80px] pt-[100px]">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Advora Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Insights, tutorials, and case studies from our team of experts. Stay updated with the latest in software development.
          </p>
        </div>

        {/* Categories */}
        <section className="mb-12 animate-slide-up stagger-2">
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

        {/* Featured Posts */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Featured Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${index + 1}`}
              >
                <div className="h-36 sm:h-48 overflow-hidden">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-xs font-medium text-primary mb-2 block">{post.category}</span>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 sm:mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-slide-up stagger-${(index % 4) + 1}`}
              >
                <div className="w-full sm:w-32 h-32 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-primary text-xs font-medium text-center px-2">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-primary mb-1 block">{post.category}</span>
                  <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-20 rounded-3xl bg-card p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground">
                Get the latest articles, tutorials, and industry insights delivered straight to your inbox. No spam, unsubscribe anytime.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-4">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore by Topic</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "React", count: 12 },
              { name: "TypeScript", count: 8 },
              { name: "Node.js", count: 10 },
              { name: "Mobile Apps", count: 6 },
              { name: "DevOps", count: 5 },
              { name: "API Design", count: 7 },
              { name: "Cloud", count: 9 },
              { name: "UI/UX", count: 4 },
              { name: "Security", count: 3 },
              { name: "Performance", count: 6 }
            ].map((topic) => (
              <div
                key={topic.name}
                className="p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all cursor-pointer text-center"
              >
                <div className="font-semibold mb-1">{topic.name}</div>
                <div className="text-sm text-muted-foreground">{topic.count} articles</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl bg-accent text-accent-foreground p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
            <p className="text-xl opacity-90">
              Let's turn your ideas into reality. Our team is ready to help.
            </p>
            <Link to="/contact">
              <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 rounded-full px-10 py-6 text-lg hover:scale-105 transition-all mt-4">
                Get in Touch
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

export default Blog;
