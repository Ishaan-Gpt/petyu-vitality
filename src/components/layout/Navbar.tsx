import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Menu, X, ChevronDown, ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const healthSubMenu = [
  { name: "Joints & Bones", path: "/health/joints-bones" },
  { name: "Stomach & Intestines", path: "/health/stomach-intestines" },
  { name: "Oral Care", path: "/health/oral-care" },
];

const homeSubMenu = [
  { name: "Editorial Style", path: "/" },
  { name: "Lively Pastel", path: "/home2" },
  { name: "Perfect Version", path: "/home3" },
  { name: "Manor Luxury", path: "/home4" },
];

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
    subMenu: homeSubMenu
  },
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border/10 py-4"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-10">
            <span className={cn(
              "font-serif text-3xl md:text-4xl tracking-tighter transition-colors duration-500",
              "text-foreground"
            )}>
              Pet<span className="italic text-primary">Yu</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subMenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.subMenu ? (
                  <button
                    className={cn(
                      "text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:text-primary flex items-center gap-1.5",
                      scrolled ? "text-foreground/60" : "text-foreground/80"
                    )}
                  >
                    {item.icon ? (
                      <item.icon className="w-4 h-4" />
                    ) : (
                      item.name
                    )}
                    <ChevronDown className="w-3 h-3 opacity-30 group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:text-primary relative",
                      scrolled ? "text-foreground/60" : "text-foreground/80",
                      isActive(item.path) && "text-primary after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.subMenu && (
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-6 w-56 bg-white rounded-3xl shadow-large border border-border/10 overflow-hidden transition-all duration-500",
                      activeDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
                    )}
                  >
                    <div className="p-4 space-y-1">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={cn(
                            "block px-4 py-3 rounded-2xl text-[10px] font-bold tracking-widest uppercase hover:bg-cream transition-colors",
                            isActive(subItem.path) ? "text-primary" : "text-foreground/60"
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
          <div className="hidden lg:flex items-center gap-6 relative z-10">
            <button className="text-foreground/60 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-foreground/60 hover:text-primary transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full text-[8px] text-white font-bold flex items-center justify-center">0</span>
            </button>
            <Button
              size="lg"
              asChild
              className="rounded-full bg-foreground text-background hover:bg-primary px-8 text-[10px] font-bold tracking-widest uppercase shadow-xl transition-all duration-500"
            >
              <Link to="/products">COLLECTIONS</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors relative z-10"
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
                  <div className="space-y-1">
                    <div className={cn(
                      "flex items-center gap-2 px-4 py-3 rounded-xl font-medium",
                      (item.name === "Home" ? location.pathname === "/" || location.pathname === "/home2" : location.pathname.startsWith(item.path))
                        ? "text-primary bg-primary/5"
                        : "text-foreground"
                    )}>
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.name}</span>
                    </div>
                    <div className="pl-9 flex flex-col gap-1">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                            isActive(subItem.path)
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-colors",
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span>{item.name}</span>
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
