import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isHealthActive = () => location.pathname.startsWith("/health");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">P</span>
            </div>
            <span className="font-display font-bold text-2xl text-foreground">
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
                      "flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition-all duration-300",
                      isHealthActive()
                        ? "text-primary bg-primary-soft"
                        : "text-foreground hover:text-primary hover:bg-muted"
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
                      "px-4 py-2 rounded-xl font-medium transition-all duration-300",
                      isActive(item.path)
                        ? "text-primary bg-primary-soft"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.subMenu && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-56 bg-card rounded-2xl shadow-large border border-border overflow-hidden transition-all duration-300",
                      healthOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}
                    onMouseEnter={() => setHealthOpen(true)}
                    onMouseLeave={() => setHealthOpen(false)}
                  >
                    <div className="p-2">
                      <Link
                        to="/health"
                        className="block px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary-soft hover:text-primary transition-colors"
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
                              ? "text-primary bg-primary-soft"
                              : "text-foreground hover:bg-primary-soft hover:text-primary"
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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-screen pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2">
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
                          ? "text-primary bg-primary-soft"
                          : "text-foreground hover:text-primary hover:bg-muted"
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
                            "block px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                            isActive(subItem.path)
                              ? "text-primary bg-primary-soft"
                              : "text-muted-foreground hover:text-primary hover:bg-muted"
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
                        ? "text-primary bg-primary-soft"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Button variant="hero" size="lg" className="w-full">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
