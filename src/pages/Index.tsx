import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Heart, Shield, Leaf, Star, ArrowRight, Bone, Smile, Activity } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import productShowcase from "@/assets/product-showcase.jpg";

const healthCategories = [
  {
    title: "Joints & Bones",
    description: "Support mobility and joint health with our specialized formulas",
    icon: Bone,
    color: "bg-primary-soft",
    iconColor: "text-primary",
    path: "/health/joints-bones",
  },
  {
    title: "Stomach & Intestines",
    description: "Gentle digestive care for sensitive tummies",
    icon: Activity,
    color: "bg-secondary-soft",
    iconColor: "text-secondary-deep",
    path: "/health/stomach-intestines",
  },
  {
    title: "Oral Care",
    description: "Fresh breath and healthy teeth for happy smiles",
    icon: Smile,
    color: "bg-accent-soft",
    iconColor: "text-accent-deep",
    path: "/health/oral-care",
  },
];

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Only the finest natural ingredients, no artificial additives",
  },
  {
    icon: Shield,
    title: "Vet Approved",
    description: "Developed with veterinary experts for optimal pet health",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Crafted with passion for pets and their well-being",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    pet: "Dog owner",
    text: "My German Shepherd's joint issues have improved dramatically since starting PetYu supplements!",
    rating: 5,
  },
  {
    name: "Thomas K.",
    pet: "Cat owner",
    text: "Finally found a natural solution for my cat's sensitive stomach. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lisa B.",
    pet: "Multi-pet household",
    text: "Quality you can trust. Both my dog and cat love the taste, and I love the results!",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-soft rounded-full blur-3xl opacity-50 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-soft rounded-full blur-3xl opacity-30 animate-pulse-soft" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-primary-soft text-primary-deep rounded-full text-sm font-semibold mb-6 animate-fade-in">
                🐾 Premium Pet Nutrition
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
                Nourish Your
                <span className="block text-primary">Furry Friends</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 font-body animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Discover our range of natural pet supplements designed to support your pet's health, vitality, and happiness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-large">
                <img
                  src={heroPets}
                  alt="Happy pets - dog and cat"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-large p-4 animate-bounce-gentle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center">
                    <Star className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg">10,000+</p>
                    <p className="text-sm text-muted-foreground">Happy Pets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">PetYu</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best nutrition for your beloved companions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Categories Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary-soft text-secondary-deep rounded-full text-sm font-semibold mb-4">
              Health Solutions
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Targeted Pet Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Address specific health concerns with our specialized formulas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {healthCategories.map((category, index) => (
              <Link
                key={category.title}
                to={category.path}
                className="group relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <div className={`absolute inset-0 ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-large">
                <img
                  src={productShowcase}
                  alt="PetYu natural supplements"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-primary rounded-2xl p-4 shadow-glow-primary">
                <p className="text-primary-foreground font-display font-bold text-lg">100%</p>
                <p className="text-primary-foreground/80 text-sm">Natural</p>
              </div>
            </div>
            
            <div>
              <span className="inline-block px-4 py-2 bg-accent-soft text-accent-deep rounded-full text-sm font-semibold mb-6">
                Our Products
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Premium Quality
                <span className="block text-primary">Pet Supplements</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Each product is carefully formulated with natural ingredients, backed by veterinary science, and crafted to deliver real results for your pet's health.
              </p>
              <ul className="space-y-4 mb-8">
                {["Scientifically formulated", "No artificial preservatives", "Tasty flavors pets love", "Easy to administer"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <Shield className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">
                  View All Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-sunny-soft text-sunny-foreground rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Pet Parents Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of happy pet owners who trust PetYu
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sunny fill-sunny" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-lg italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.pet}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Pet's Health?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your pet's wellness journey today with PetYu's premium natural supplements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
