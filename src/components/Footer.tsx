import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-12 sm:mt-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden z-10">
      {/* Background grid pattern to match hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Logo & Description - Full width on mobile */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-8 sm:mb-0">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg sm:text-xl">A</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold font-serif">Advora</span>
          </Link>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-sm">
            Building exceptional digital products that help businesses thrive. Your trusted partner for software and web development.
          </p>
          <div className="flex gap-3 mb-8 sm:mb-10">
            <a href="#" className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="mailto:advora.in@gmail.com" className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>

        {/* Links Grid - 2 columns on mobile, 3 on tablet, inline on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Custom Software</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
              <li>advora.in@gmail.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY</li>
              <li className="pt-2">
                <Link to="/contact" className="text-primary hover:underline font-medium">
                  Get a Quote →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-6 sm:py-8 border-y border-border/50 mb-6 sm:mb-8">
          <div className="flex flex-col gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">Subscribe to our newsletter</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Get the latest insights and updates delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>© 2026 Advora. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
