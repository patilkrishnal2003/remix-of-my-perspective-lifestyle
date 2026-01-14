import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
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

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
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
          <nav className="hidden md:flex items-center gap-2">
            <Link to="/" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Home
            </Link>
            <Link to="/services" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Services
            </Link>
            <Link to="/portfolio" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Portfolio
            </Link>
            <Link to="/about" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
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
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/portfolio" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-full">
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
