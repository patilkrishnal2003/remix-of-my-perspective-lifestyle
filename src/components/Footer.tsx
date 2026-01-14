import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold font-serif">Advora</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Building exceptional digital products that help businesses thrive. Your trusted partner for software and web development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:hello@advora.com" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-accent transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Custom Software</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@advora.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY</li>
              <li className="pt-2">
                <Link to="/contact" className="text-accent hover:underline font-medium">
                  Get a Quote →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-y border-border mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold mb-1">Subscribe to our newsletter</h3>
              <p className="text-sm text-muted-foreground">Get the latest insights and updates delivered to your inbox.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button className="px-6 py-2 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Advora. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
