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
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-soft rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary-soft text-primary-deep rounded-full text-sm font-semibold mb-6">
                Our Products
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Premium Pet
                <span className="block text-primary">Supplements</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover our range of natural, veterinary-approved supplements designed to support your pet's health and vitality.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-large">
              <img src={productShowcase} alt="PetYu Products" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Shop Our Collection
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect supplement for your pet's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={product.path}
                className="group bg-card rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`${product.color} p-12 relative`}>
                  <div className="absolute top-4 right-4 bg-foreground/10 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </div>
                  <product.icon className={`w-24 h-24 ${product.iconColor} mx-auto`} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-sunny fill-sunny" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{product.category}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <span className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                      View <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our pet health experts are here to help you find the perfect supplement for your furry friend.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
