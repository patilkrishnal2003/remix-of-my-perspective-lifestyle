import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown, Globe, Smartphone, Code, Database, Palette, Cloud, ArrowRight, Briefcase, BookOpen, Users, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFullNav, setShowFullNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);
      
      // Reset to split state when scrolling up
      if (currentScrollY < lastScrollY) {
        setShowFullNav(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setShowFullNav(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const servicesItems = [
    { label: "Web Development", path: "/services/web-development", icon: Globe, description: "Modern websites & apps" },
    { label: "Mobile Apps", path: "/services/mobile-apps", icon: Smartphone, description: "iOS & Android solutions" },
    { label: "Custom Software", path: "/services/custom-software", icon: Code, description: "Tailored for your needs" },
    { label: "Backend Systems", path: "/services/backend-systems", icon: Database, description: "Scalable infrastructure" },
    { label: "UI/UX Design", path: "/services/ui-ux-design", icon: Palette, description: "Beautiful experiences" },
    { label: "Cloud Solutions", path: "/services/cloud-solutions", icon: Cloud, description: "AWS, Azure & more" },
  ];

  const resourcesItems = [
    { label: "Portfolio", path: "/portfolio", icon: Briefcase, description: "Our best work" },
    { label: "Blog", path: "/blog", icon: BookOpen, description: "Insights & tutorials" },
    { label: "Community", path: "/community", icon: Users, description: "Join developers" },
    { label: "Support", path: "/contact", icon: Headphones, description: "Get help" },
  ];

  const mainNavItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Community", path: "/community" },
    { label: "Contact", path: "/contact" },
  ];

  // Scrolled state - Split navbar with logo left, menu button right
  if (isScrolled) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 animate-slide-down">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Full navbar when menu is open */}
          {showFullNav ? (
            <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6 shadow-lg animate-fade-in">
              {/* Logo */}
              <div className="flex items-center min-w-0">
                <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold text-base sm:text-lg">A</span>
                  </div>
                  <span className="text-base sm:text-xl font-bold font-serif truncate">Advora</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                <Link 
                  to="/" 
                  className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative ${
                    isActive("/") && location.pathname === "/"
                      ? "text-accent bg-accent/10" 
                      : "hover:bg-muted/60"
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative ${
                    isActive("/about") ? "text-accent bg-accent/10" : "hover:bg-muted/60"
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative ${
                    isActive("/services") ? "text-accent bg-accent/10" : "hover:bg-muted/60"
                  }`}
                >
                  Services
                </Link>
                <Link 
                  to="/portfolio" 
                  className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative ${
                    isActive("/portfolio") ? "text-accent bg-accent/10" : "hover:bg-muted/60"
                  }`}
                >
                  Portfolio
                </Link>
                <Link 
                  to="/blog" 
                  className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative ${
                    isActive("/blog") ? "text-accent bg-accent/10" : "hover:bg-muted/60"
                  }`}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative ${
                    isActive("/contact") ? "text-accent bg-accent/10" : "hover:bg-muted/60"
                  }`}
                >
                  Contact
                </Link>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                <button
                  onClick={toggleTheme}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </button>
                
                <Link to="/contact" className="hidden md:block">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-2 hover:scale-105 transition-all">
                    Get a Quote
                  </Button>
                </Link>

                <button
                  className="p-2 sm:p-2.5 rounded-full hover:bg-muted/60 transition-all flex items-center gap-2"
                  onClick={() => setShowFullNav(false)}
                  aria-label="Close menu"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="hidden sm:inline text-sm font-medium pr-1">Menu</span>
                </button>
              </div>
            </div>
          ) : (
            /* Split navbar - logo left, menu right */
            <div className="flex items-center justify-between">
              {/* Logo - Left Corner */}
              <Link 
                to="/" 
                className="flex items-center gap-1.5 sm:gap-2 pill-nav px-3 sm:px-4 py-2 shadow-lg"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold text-base sm:text-lg">A</span>
                </div>
                <span className="text-base sm:text-xl font-bold font-serif">Advora</span>
              </Link>

              {/* Menu Button - Right Corner */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 sm:p-2.5 rounded-full pill-nav shadow-lg hover:bg-muted/60 transition-all"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </button>

                <button
                  className="p-2 sm:p-2.5 rounded-full pill-nav shadow-lg hover:bg-muted/60 transition-all flex items-center gap-2"
                  onClick={() => setShowFullNav(true)}
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="hidden sm:inline text-sm font-medium pr-1">Menu</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }

  // Default state - Full navbar
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6 transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-base sm:text-lg">A</span>
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate">Advora</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Home */}
            <Link 
              to="/" 
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative ${
                isActive("/") && location.pathname === "/"
                  ? "text-accent bg-accent/10" 
                  : "hover:bg-muted/60"
              }`}
            >
              Home
              {isActive("/") && location.pathname === "/" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
              )}
            </Link>

            {/* About */}
            <Link 
              to="/about" 
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative ${
                isActive("/about") 
                  ? "text-accent bg-accent/10" 
                  : "hover:bg-muted/60"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
              )}
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative flex items-center gap-1 ${
                    isActive("/services") 
                      ? "text-accent bg-accent/10" 
                      : "hover:bg-muted/60"
                  }`}
                >
                  Services
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {isActive("/services") && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-[340px] p-0 bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl z-50 overflow-hidden"
              >
                {/* Services Grid */}
                <div className="p-2 grid grid-cols-1 gap-1">
                  {servicesItems.map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-200">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* All Services Button */}
                <div className="p-3 border-t border-border/50 bg-muted/30">
                  <Link 
                    to="/services" 
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all hover:scale-[1.02]"
                  >
                    View All Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`text-sm font-medium rounded-full px-4 py-2 transition-all relative flex items-center gap-1 ${
                    isActive("/portfolio") || isActive("/blog") || isActive("/community")
                      ? "text-accent bg-accent/10" 
                      : "hover:bg-muted/60"
                  }`}
                >
                  Resources
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {(isActive("/portfolio") || isActive("/blog") || isActive("/community")) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-[280px] p-0 bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl z-50 overflow-hidden"
              >
                {/* Resources List */}
                <div className="p-2">
                  {resourcesItems.map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-200">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* All Resources Button */}
                <div className="p-3 border-t border-border/50 bg-muted/30">
                  <Link 
                    to="/portfolio" 
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all hover:scale-[1.02]"
                  >
                    Explore All Resources
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
            
            <Link to="/contact">
              <Button className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-2 hover:scale-105 transition-all">
                Get a Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-4 px-4 rounded-2xl bg-card border border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              <Link 
                to="/" 
                className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "bg-accent/10 text-accent" 
                    : "hover:bg-muted"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                  isActive("/about") 
                    ? "bg-accent/10 text-accent" 
                    : "hover:bg-muted"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Services Section */}
              <div className="py-2 px-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2">SERVICES</p>
                {servicesItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="flex items-center gap-3 py-2 px-2 rounded-lg transition-colors hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-base font-medium">{item.label}</span>
                  </Link>
                ))}
                <Link 
                  to="/services" 
                  className="flex items-center gap-2 mt-2 py-2 px-2 rounded-lg bg-primary/10 text-primary font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Resources Section */}
              <div className="py-2 px-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2">RESOURCES</p>
                {resourcesItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="flex items-center gap-3 py-2 px-2 rounded-lg transition-colors hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-base font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-3 mt-2 border-t border-border">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-full py-6 text-base">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
