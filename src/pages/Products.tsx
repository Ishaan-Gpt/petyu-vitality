import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bone, Activity, Smile, Star, ArrowRight } from "lucide-react";
import productShowcase from "@/assets/product-showcase.jpg";

const products = [
  {
    id: "gelenke",
    name: "Gelenke",
    category: "Joints & Bones",
    price: "€34.99",
    rating: 5,
    reviews: 127,
    icon: Bone,
    color: "bg-primary-soft",
    iconColor: "text-primary",
    badge: "Bestseller",
    path: "/health/joints-bones/gelenke",
    description: "Premium joint support with glucosamine and chondroitin",
  },
  {
    id: "verdung",
    name: "Verdung",
    category: "Stomach & Intestines",
    price: "€29.99",
    rating: 5,
    reviews: 89,
    icon: Activity,
    color: "bg-secondary-soft",
    iconColor: "text-secondary-deep",
    badge: "Popular",
    path: "/health/stomach-intestines/verdung",
    description: "Gentle digestive care with probiotics and enzymes",
  },
  {
    id: "mundhygiene",
    name: "Mundhygiene",
    category: "Oral Care",
    price: "€24.99",
    rating: 5,
    reviews: 56,
    icon: Smile,
    color: "bg-accent-soft",
    iconColor: "text-accent-deep",
    badge: "New",
    path: "/health/oral-care/mundhygiene",
    description: "Natural oral care for fresh breath and clean teeth",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Editorial Header */}
      <section className="pt-40 pb-24 bg-cream text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-8 block">THE COLLECTIONS</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter mb-12">
            OUR <br /><span className="italic">SOLUTIONS</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-xl mx-auto font-body">
            Exquisite natural supplements designed for the modern pet. Editorial care and scientific rigor in every bottle.
          </p>
        </div>
      </section>

      {/* Product Grid - Minimalist & Elegant */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
            {products.map((product) => (
              <Link
                key={product.id}
                to={product.path}
                className="group flex flex-col space-y-8"
              >
                {/* Product Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-cream/30 border border-border/10 shadow-soft group-hover:shadow-large transition-all duration-700">
                  {/* Static Icon for now, assuming actual images would be here */}
                  <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                    <product.icon className="w-32 h-32 text-primary opacity-20 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" />
                  </div>
                  {/* Best Seller Badge */}
                  {product.badge && (
                    <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md border border-border/20 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
                      {product.badge}
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Product Details */}
                <div className="space-y-4 text-center px-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-foreground/40 uppercase">{product.category}</span>
                    <h3 className="text-3xl font-serif group-hover:text-primary transition-colors">{product.name}</h3>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed font-body max-w-xs mx-auto">
                    {product.description}
                  </p>
                  <div className="pt-4 flex flex-col items-center gap-6">
                    <span className="text-2xl font-serif">{product.price}</span>
                    <Button size="lg" variant="outline" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-white px-8 group-hover:scale-105 transition-all">
                      DISCOVER MORE
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Section - Professional & Clean */}
      <section className="py-40 bg-cream-light border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Personalized Care</span>
              <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
                Scientific <br />Guidance
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed font-body">
                Unsure which range is appropriate for your pet's current life stage? Our veterinary consultants are available for personalized health routine planning.
              </p>
              <Button size="xl" className="rounded-full bg-foreground text-background hover:bg-primary transition-all shadow-xl" asChild>
                <Link to="/contact">CONSULT AN EXPERT</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src={productShowcase} alt="Pet Health Specialists" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <section className="py-24 bg-cream text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Redefining health, every day.</h2>
          <p className="text-foreground/40 tracking-[0.3em] uppercase text-xs font-bold">PetYu Premium Solutions</p>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
