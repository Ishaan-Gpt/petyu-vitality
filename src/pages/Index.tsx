import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  Heart, 
  Shield, 
  Leaf, 
  Star, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  PawPrint,
  Utensils,
  MapPin,
  Sparkles
} from "lucide-react";
import { useState } from "react";

// Import all images
import heroDogForest from "@/assets/hero-dog-forest.jpg";
import categoryGeneralHealth from "@/assets/category-general-health.jpg";
import categoryDigestion from "@/assets/category-digestion.jpg";
import categorySkinCoat from "@/assets/category-skin-coat.jpg";
import categoryOralCare from "@/assets/category-oral-care.jpg";
import productJointSaver from "@/assets/product-joint-saver.jpg";
import productDentalCare from "@/assets/product-dental-care.jpg";
import productDigestion from "@/assets/product-digestion.jpg";
import testimonialDog1 from "@/assets/testimonial-dog-1.jpg";
import testimonialDog2 from "@/assets/testimonial-dog-2.jpg";
import testimonialDog3 from "@/assets/testimonial-dog-3.jpg";
import subscriptionDog from "@/assets/subscription-dog.jpg";

const categories = [
  {
    title: "Joints & Bones",
    image: categoryGeneralHealth,
    path: "/health/joints-bones",
  },
  {
    title: "Digestion",
    image: categoryDigestion,
    path: "/health/stomach-intestines",
  },
  {
    title: "Skin & Coat",
    image: categorySkinCoat,
    path: "/health/oral-care",
  },
  {
    title: "Oral Care",
    image: categoryOralCare,
    path: "/health/oral-care",
  },
];

const products = [
  {
    name: "Joint Saver",
    description: "Powerful blend of Collagen, MSM, Green-lipped Mussel & Herbs - for healthy joints & more mobility.",
    price: "49.90",
    reviews: 482,
    rating: 5,
    image: productJointSaver,
    badge: "Bestseller",
    path: "/health/joints-bones/gelenke",
  },
  {
    name: "Dental PetBiotics",
    description: "Combination of Probiotics, Prebiotics, Herbs & Sea Algae to support teeth, gums & fresh breath.",
    price: "49.90",
    reviews: 51,
    rating: 5,
    image: productDentalCare,
    badge: "New",
    path: "/health/oral-care/mundhygiene",
  },
  {
    name: "Digest Plus",
    description: "Gentle digestive support with natural enzymes and probiotics for sensitive stomachs.",
    price: "44.90",
    reviews: 128,
    rating: 5,
    image: productDigestion,
    badge: "Popular",
    path: "/health/stomach-intestines/verdung",
  },
];

const trustBadges = [
  { icon: PawPrint, title: "Expert Developed", subtitle: "By veterinarians" },
  { icon: Utensils, title: "Easy Dosing", subtitle: "Simple to use" },
  { icon: MapPin, title: "Made in Europe", subtitle: "Premium quality" },
  { icon: Heart, title: "Loved by Pets", subtitle: "Tasty formula" },
];

const testimonials = [
  {
    name: "Silke B.",
    title: "Canine Booster - Amazing!",
    text: "Our Labradormix Doodle is now 8 years old. The last few months he had recurring stomach-intestinal problems with diarrhea, vomiting, extreme hair loss, dull coat and no energy at all...",
    rating: 5,
    image: testimonialDog1,
    product: "Canine Booster",
  },
  {
    name: "Barbara E.",
    title: "Beautiful Coat",
    text: "The powder is very well accepted, I think the coat has already become softer!",
    rating: 5,
    image: testimonialDog2,
    product: "Skin & Coat Formula",
  },
  {
    name: "Julia Schneider",
    title: "Joint powder actually works!",
    text: "I actually didn't want to try another joint supplement for my picky Beagle Charlie. He's suffered from arthritis for three years and nothing has helped until now. The joint powder actually works!",
    rating: 5,
    image: testimonialDog3,
    product: "Joint Saver",
  },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Layout>
      {/* Hero Section - Full Bleed */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroDogForest}
            alt="Happy dog running in forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="font-display">Joint Saver: </span>
              <span className="font-serif italic font-normal">Easy Movement & Lasting Comfort</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-body">
              Our premium formula to support joints tackles the root cause of mobility problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="hero" size="lg" asChild className="bg-primary hover:bg-primary-deep text-white shadow-lg">
                <Link to="/products">
                  SHOP NOW
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
                <Link to="/products">
                  BESTSELLERS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[testimonialDog1, testimonialDog2, testimonialDog3].map((img, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold">
                  +6K
                </div>
              </div>
              <div className="text-white">
                <p className="text-sm font-medium">Trusted by pet owners across Europe</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sunny text-sunny" />
                    ))}
                  </div>
                  <span className="text-sm font-bold">4.75</span>
                  <span className="text-sm text-white/80">(7.2K Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW Product Badge - positioned on right side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="absolute -top-8 -right-4 bg-accent rounded-full w-24 h-24 flex flex-col items-center justify-center text-white font-bold rotate-12 shadow-lg">
              <span className="text-xs">NEW</span>
              <span className="text-sm">PRODUCT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-muted/50 relative overflow-hidden">
        {/* Subtle paw print pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <PawPrint 
              key={i} 
              className="absolute text-foreground w-8 h-8" 
              style={{ 
                left: `${(i * 17) % 100}%`, 
                top: `${(i * 23) % 100}%`,
                transform: `rotate(${i * 35}deg)`
              }} 
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl text-center mb-10">
            <span className="font-display font-bold">Pet Supplements </span>
            <span className="font-serif italic">you can trust</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustBadges.map((badge, index) => (
              <div key={badge.title} className="flex flex-col items-center text-center group">
                <div className="relative">
                  <badge.icon className="w-10 h-10 text-foreground mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <p className="font-display font-semibold text-foreground">{badge.title}</p>
                <p className="text-sm text-muted-foreground">{badge.subtitle}</p>
                
                {/* Dotted line connector */}
                {index < trustBadges.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 w-16 border-t border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl">
              <span className="font-display font-bold">Shop by </span>
              <span className="font-serif italic">Category</span>
            </h2>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.path}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white/90 backdrop-blur-sm text-foreground border-0 hover:bg-white font-semibold"
                  >
                    {category.title.toUpperCase()}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Cards Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Subscribe & Save Card */}
            <div className="bg-muted rounded-3xl p-8 flex items-center gap-6 overflow-hidden relative">
              <div className="flex-1 z-10">
                <h3 className="text-2xl md:text-3xl mb-3">
                  <span className="font-serif italic">Subscribe & </span>
                  <span className="font-display font-bold block">save on every order.</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Enjoy <span className="font-bold text-foreground">20% off + free shipping</span> for life. Cancel anytime.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/products">
                    SUBSCRIBE & SAVE
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
              {/* Discount Badge */}
              <div className="hidden sm:flex absolute right-24 top-1/2 -translate-y-1/2">
                <div className="bg-sunny rounded-full w-20 h-20 flex flex-col items-center justify-center text-sunny-foreground font-bold shadow-lg">
                  <span className="text-xl">20%</span>
                  <span className="text-[10px] leading-tight text-center">RABATT<br/>bei jeder<br/>Bestellung</span>
                </div>
              </div>
              <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 hidden sm:block">
                <img src={productJointSaver} alt="Product" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Discover Products Card */}
            <div className="bg-sky-soft rounded-3xl p-8 flex items-center gap-6 overflow-hidden relative">
              <div className="flex-1 z-10">
                <h3 className="text-2xl md:text-3xl mb-3">
                  <span className="font-serif italic">Discover </span>
                  <span className="font-display font-bold block">our complete range.</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore all our supplements — from joint care to digestive health.
                </p>
                <Button variant="outline" size="lg" asChild className="bg-white border-foreground text-foreground hover:bg-foreground hover:text-white">
                  <Link to="/products">
                    VIEW ALL PRODUCTS
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="flex gap-2 hidden sm:flex">
                <img src={productDentalCare} alt="Product 1" className="w-20 h-24 object-cover rounded-xl" />
                <img src={productDigestion} alt="Product 2" className="w-20 h-24 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestseller Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2">
                <span className="font-display font-bold">Shop now - </span>
                <span className="font-serif italic">Bestsellers</span>
              </h2>
              <p className="text-muted-foreground">
                Our most popular supplements, trusted by over 26,000 pet owners.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="hero" asChild>
                <Link to="/products">
                  VIEW ALL PRODUCTS
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group">
                {/* Product Image */}
                <div className="relative aspect-square bg-muted/50 p-6">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-secondary-deep text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-sunny text-sunny" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{product.reviews} Reviews</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-lg">
                      <span className="text-muted-foreground text-sm">From </span>
                      <span className="font-bold text-secondary-deep">€{product.price}</span>
                    </p>
                    <Button variant="hero" size="sm" asChild>
                      <Link to={product.path}>
                        VIEW PRODUCT
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA with Dog */}
      <section className="py-0 relative">
        <div className="grid lg:grid-cols-2">
          {/* Left: Content */}
          <div className="bg-primary py-20 px-8 md:px-16 flex flex-col justify-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-white/20" />
            <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border border-white/20" />
            
            <div className="relative z-10">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎁 Limited Offer
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Subscribe & Get
                <span className="block font-serif italic font-normal">20% Off Every Order</span>
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                Plus free shipping on all subscription orders. Cancel anytime, no commitment required.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="xl" asChild className="bg-white text-primary hover:bg-white/90 font-bold">
                  <Link to="/products">
                    SUBSCRIBE & SAVE
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Dog Image */}
          <div className="relative min-h-[400px] lg:min-h-0">
            <img
              src={subscriptionDog}
              alt="Happy dog with delivery box"
              className="w-full h-full object-cover"
            />
            {/* Floating discount badge */}
            <div className="absolute top-8 right-8 bg-sunny rounded-full w-24 h-24 flex flex-col items-center justify-center text-sunny-foreground font-bold shadow-xl animate-bounce-gentle">
              <span className="text-2xl">20%</span>
              <span className="text-xs">OFF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl">
              <span className="font-display font-bold">Selected </span>
              <span className="font-serif italic">Reviews</span>
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {/* Pet Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s pet`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-sunny text-sunny" />
                    ))}
                  </div>
                  
                  <h3 className="font-display font-bold text-lg mb-2">{testimonial.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-4">{testimonial.text}</p>
                  
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  
                  {/* Product tag */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">Product:</span>
                      <div className="flex items-center gap-2">
                        <img src={productJointSaver} alt="" className="w-8 h-8 rounded object-cover" />
                        <span className="text-sm font-medium">{testimonial.product}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              <span className="font-display font-bold">Why Pet Owners </span>
              <span className="font-serif italic">Choose PetYu</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality supplements for your beloved companions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "100% Natural",
                description: "Only the finest natural ingredients, no artificial additives or preservatives",
              },
              {
                icon: Shield,
                title: "Vet Approved",
                description: "Developed in collaboration with veterinary experts for optimal pet health",
              },
              {
                icon: Heart,
                title: "Made with Love",
                description: "Crafted with passion for pets and their well-being in European facilities",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
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

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-secondary-soft via-background to-accent-soft">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl mb-6">
              <span className="font-display font-bold">Ready to Transform </span>
              <span className="font-serif italic block">Your Pet's Health?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your pet's wellness journey today with PetYu's premium natural supplements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
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
