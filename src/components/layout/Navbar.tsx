import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const healthSubMenu = [
  { name: "Joints & Bones", path: "/health/joints-bones" },
  { name: "Stomach & Intestines", path: "/health/stomach-intestines" },
  { name: "Oral Care", path: "/health/oral-care" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { 
    name: "Health Issues", 
    path: "/health",
    subMenu: healthSubMenu
  },
  { name: "Products", path: "/products" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [healthOpen, setHealthOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isHealthActive = () => location.pathname.startsWith("/health");

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "glass-navbar shadow-soft py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
              scrolled ? "shadow-soft" : "shadow-medium"
            )}>
              <span className="text-primary-foreground font-display font-bold text-2xl">P</span>
            </div>
            <span className={cn(
              "font-display font-bold text-2xl transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white"
            )}>
              Pet<span className="text-primary">Yu</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subMenu ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2.5 rounded-full font-medium transition-all duration-300",
                      scrolled 
                        ? isHealthActive()
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                        : isHealthActive()
                          ? "text-white bg-white/20"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                    onMouseEnter={() => setHealthOpen(true)}
                    onMouseLeave={() => setHealthOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "px-4 py-2.5 rounded-full font-medium transition-all duration-300",
                      scrolled
                        ? isActive(item.path)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                        : isActive(item.path)
                          ? "text-white bg-white/20"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.subMenu && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-64 glass-navbar rounded-2xl shadow-large border border-border/50 overflow-hidden transition-all duration-300",
                      healthOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
                    )}
                    onMouseEnter={() => setHealthOpen(true)}
                    onMouseLeave={() => setHealthOpen(false)}
                  >
                    <div className="p-3">
                      <Link
                        to="/health"
                        className="block px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        All Health Issues
                      </Link>
                      <div className="h-px bg-border my-2" />
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={cn(
                            "block px-4 py-3 rounded-xl font-medium transition-colors",
                            isActive(subItem.path)
                              ? "text-primary bg-primary/10"
                              : "text-foreground hover:bg-primary/10 hover:text-primary"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
              scrolled 
                ? "hover:bg-primary/10 text-foreground" 
                : "hover:bg-white/10 text-white"
            )}>
              <Search className="w-5 h-5" />
            </button>
            <button className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative",
              scrolled 
                ? "hover:bg-primary/10 text-foreground" 
                : "hover:bg-white/10 text-white"
            )}>
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-[10px] text-white font-bold flex items-center justify-center">
                0
              </span>
            </button>
            <Button 
              variant="hero" 
              size="lg" 
              asChild
              className={cn(
                "ml-2 rounded-full shadow-glow-primary",
                !scrolled && "bg-white text-foreground hover:bg-white/90"
              )}
            >
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              scrolled 
                ? "hover:bg-primary/10 text-foreground" 
                : "hover:bg-white/10 text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500",
            isOpen ? "max-h-screen pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4 glass-navbar rounded-2xl mt-2 p-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subMenu ? (
                  <>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl font-medium transition-colors",
                        isHealthActive()
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 flex flex-col gap-1 mt-1">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                            isActive(subItem.path)
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-medium transition-colors",
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 flex gap-3">
              <Button variant="hero" size="lg" className="flex-1 rounded-full" asChild>
                <Link to="/products" onClick={() => setIsOpen(false)}>
                  Shop Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
