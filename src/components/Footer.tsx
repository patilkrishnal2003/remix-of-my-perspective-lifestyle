import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-foreground mt-12 sm:mt-16">
      <footer className="relative overflow-hidden z-10">
        {/* Upper Footer - with curved bottom corners */}
        <div className="relative bg-gradient-to-br from-primary/15 via-primary/10 to-primary/15 rounded-b-[3rem] sm:rounded-b-[4rem]">
          {/* Background grid pattern to match hero */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-b-[3rem] sm:rounded-b-[4rem]" />
          
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            {/* Top Row: Logo & Newsletter in single line */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 sm:mb-16">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg sm:text-xl">A</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold font-serif">Advora</span>
              </Link>

              {/* Newsletter - inline input with button */}
              <div className="flex flex-col sm:flex-row gap-0 w-full lg:w-auto lg:flex-1 lg:max-w-xl lg:ml-auto">
                <div className="relative flex w-full rounded-full border border-border bg-background/80 backdrop-blur-sm overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email for Weekly insights"
                    className="flex-1 px-5 py-3.5 bg-transparent focus:outline-none text-sm"
                  />
                  <button className="px-6 py-3 m-1 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Links Grid - 4 columns */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
              {/* Services */}
              <div>
                <h3 className="font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider">Services</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><Link to="/services/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
                  <li><Link to="/services/mobile-apps" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                  <li><Link to="/services/custom-software" className="hover:text-primary transition-colors">Custom Software</Link></li>
                  <li><Link to="/services/ui-ux-design" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                  <li><Link to="/services/cloud-solutions" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider">Company</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                  <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                  <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider">Resources</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors">FAQ</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider">Contact</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>advora.in@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Mon-Fri, 9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary mt-0.5" />
                    <span>New York, NY, USA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row: Social Icons & Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
              {/* Social Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <Github className="h-4 w-4" />
                </a>
              </div>

              {/* Copyright */}
              <p className="text-sm text-muted-foreground">
                © 2025 Advora Digital. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Black logo bar (was previously the fixed "reveal" section) */}
        <div className="bg-foreground" style={{ height: "200px" }}>
          <div className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-background transition-colors duration-300 group-hover:text-background/80">
                Advora
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
