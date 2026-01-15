import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-12 sm:mt-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 sm:mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg sm:text-xl">A</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold font-serif">Advora</span>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Building exceptional digital products that help businesses thrive. Your trusted partner for software and web development.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="mailto:advora.in@gmail.com" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Custom Software</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-muted-foreground">
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
        <div className="py-6 sm:py-8 border-y border-border mb-6 sm:mb-8">
          <div className="flex flex-col gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">Subscribe to our newsletter</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Get the latest insights and updates delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors text-sm whitespace-nowrap">
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
