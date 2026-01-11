import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight, PawPrint, Star, Shield, Leaf, Award, Send, CreditCard, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  shop: [
    { name: "All Products", path: "/products" },
    { name: "Joint Support", path: "/health/joints-bones" },
    { name: "Digestive Health", path: "/health/stomach-intestines" },
    { name: "Oral Care", path: "/health/oral-care" },
    { name: "Bestsellers", path: "/products" },
    { name: "New Arrivals", path: "/products" },
  ],
  support: [
    { name: "Help Center", path: "/contact" },
    { name: "Shipping Info", path: "/contact" },
    { name: "Returns & Refunds", path: "/contact" },
    { name: "Track Order", path: "/contact" },
    { name: "FAQ", path: "/contact" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Blog & News", path: "/blog" },
    { name: "Careers", path: "/about" },
    { name: "Press", path: "/about" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Accessibility", path: "/accessibility" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", followers: "25K" },
  { icon: Facebook, href: "#", label: "Facebook", followers: "18K" },
  { icon: Twitter, href: "#", label: "Twitter", followers: "12K" },
  { icon: Youtube, href: "#", label: "Youtube", followers: "8K" },
];

const trustBadges = [
  { icon: Shield, text: "100% Secure Checkout" },
  { icon: Truck, text: "Free Shipping €49+" },
  { icon: Award, text: "Quality Guaranteed" },
  { icon: Leaf, text: "Natural Ingredients" },
];

const paymentMethods = [
  "Visa", "Mastercard", "PayPal", "Apple Pay", "Klarna"
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="bg-primary py-16 relative">
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <PawPrint 
              key={i} 
              className="absolute text-white w-12 h-12" 
              style={{ 
                left: `${(i * 19) % 100}%`, 
                top: `${(i * 27) % 100}%`,
                transform: `rotate(${i * 45}deg)`
              }} 
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Join the PetYu Family
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Subscribe for exclusive offers, pet health tips, and be the first to know about new products. Get 15% off your first order!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-14 rounded-full bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white focus:text-foreground focus:placeholder:text-muted-foreground"
              />
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-full bg-white text-primary hover:bg-white/90 font-bold"
              >
                Subscribe
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe anytime. Read our <Link to="/privacy" className="underline hover:no-underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-cream-deep py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column - Larger */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow-primary group-hover:scale-105 transition-transform">
                  <span className="text-primary-foreground font-display font-bold text-2xl">P</span>
                </div>
                <span className="font-display font-bold text-3xl">
                  Pet<span className="text-primary">Yu</span>
                </span>
              </Link>
              <p className="text-background/70 mb-8 text-lg leading-relaxed font-body">
                Premium pet nutrition crafted with love. Because your furry friends deserve the very best in health and happiness.
              </p>
              
              {/* Social Links with followers */}
              <div className="space-y-4">
                <p className="font-display font-semibold text-lg">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all group"
                    >
                      <social.icon className="w-5 h-5 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mt-8 p-4 rounded-2xl bg-background/5 inline-block">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-sunny text-sunny" />
                    ))}
                  </div>
                  <span className="font-bold text-lg">4.9</span>
                  <span className="text-background/60">(7.2K Reviews)</span>
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                Shop
                <ArrowRight className="w-4 h-4 text-primary" />
              </h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-background/70 hover:text-primary transition-colors font-body inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                Support
                <ArrowRight className="w-4 h-4 text-primary" />
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-background/70 hover:text-primary transition-colors font-body inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                Company
                <ArrowRight className="w-4 h-4 text-primary" />
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-background/70 hover:text-primary transition-colors font-body inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                Contact
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:hello@petyu.com" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-background/60">Email us</p>
                      <p className="text-background font-medium">hello@petyu.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:+49123456789" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-background/60">Call us</p>
                      <p className="text-background font-medium">+49 123 456 789</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60">Visit us</p>
                    <p className="text-background font-medium">Berlin, Germany</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-foreground border-t border-background/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-background/60 text-sm font-body flex items-center gap-2">
              © 2024 PetYu. Made with 
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> 
              for pets everywhere
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-background/60 text-sm hover:text-primary transition-colors font-body"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-background/40 text-sm">We accept:</span>
              <div className="flex items-center gap-2">
                {paymentMethods.map((method) => (
                  <div 
                    key={method}
                    className="h-8 px-3 bg-background/10 rounded-md flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-background/70">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
