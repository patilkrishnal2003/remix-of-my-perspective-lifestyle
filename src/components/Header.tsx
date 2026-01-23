import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { label: "Web Development", path: "/services#web" },
    { label: "Mobile Apps", path: "/services#mobile" },
    { label: "Custom Software", path: "/services#software" },
    { label: "Backend Systems", path: "/services#backend" },
    { label: "UI/UX Design", path: "/services#design" },
    { label: "Cloud Solutions", path: "/services#cloud" },
  ];

  const resourcesItems = [
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Community", path: "/community" },
    { label: "Support", path: "/contact" },
  ];

  return (
    <header 
      className={`z-50 pt-3 sm:pt-4 transition-all duration-300 ${
        isScrolled 
          ? "fixed top-0 left-0 right-0 animate-slide-down" 
          : "absolute top-0 left-0 right-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}>
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
                  <ChevronDown className="h-3.5 w-3.5" />
                  {isActive("/services") && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-card border border-border shadow-lg z-50">
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link 
                      to={item.path} 
                      className="w-full cursor-pointer hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
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
                  <ChevronDown className="h-3.5 w-3.5" />
                  {(isActive("/portfolio") || isActive("/blog") || isActive("/community")) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-card border border-border shadow-lg z-50">
                {resourcesItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link 
                      to={item.path} 
                      className="w-full cursor-pointer hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
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
                    className="block text-base font-medium py-2 px-2 rounded-lg transition-colors hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Resources Section */}
              <div className="py-2 px-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2">RESOURCES</p>
                {resourcesItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block text-base font-medium py-2 px-2 rounded-lg transition-colors hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
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
