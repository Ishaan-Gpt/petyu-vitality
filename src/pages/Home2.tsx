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
  Sparkles,
  ChevronDown,
  Instagram,
  Facebook,
  MessageCircle,
  Smile,
  Award,
  Beaker,
  Package,
  Check
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
import qualityDogProduct from "@/assets/quality-dog-product.jpg";
import faqDog from "@/assets/faq-dog.jpg";
import contactDog from "@/assets/contact-dog.jpg";

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

const stats = [
  { percentage: 95, color: "primary", product: "Lucky Belly", description: "of our customers report improved digestion in their dogs after feeding with" },
  { percentage: 81, color: "secondary", product: "Active Hips", description: "of customers say their dog's mobility has improved since taking" },
  { percentage: 84, color: "sky", product: "Relax Time", description: "of our customers say their dog is more balanced and relaxed since taking" },
];

const qualityFeatures = [
  { icon: Sparkles, title: "Unique Recipes", description: "For a long-term health routine", link: "/how-it-works" },
  { icon: Beaker, title: "Scientifically Formulated", description: "For proven results", link: "/how-it-works" },
  { icon: Package, title: "Premium Ingredients", description: "For lasting vitality", link: "/products" },
  { icon: Heart, title: "Gently Manufactured", description: "To preserve natural nutrients", link: "/about" },
  { icon: Smile, title: "High Acceptance", description: "For daily feeding routine", link: "/products" },
];

const faqItems = [
  { question: "How does my subscription work?", answer: "Your subscription delivers your chosen products automatically at your preferred interval. You'll save 20% on every order and enjoy free shipping. Modify, pause, or cancel anytime from your account." },
  { question: "Can I manage, change or adjust my subscription online?", answer: "Yes! Log into your account to change delivery frequency, swap products, update payment info, or pause your subscription with just a few clicks." },
  { question: "I want to change the products in my subscription and also the delivery frequency. How can I do that?", answer: "Simply go to your account dashboard, select 'Manage Subscription', and you can modify products, quantities, and delivery schedule all in one place." },
  { question: "On what date will my subscription be charged?", answer: "Your subscription renews on the same date each month (or according to your chosen frequency). You'll receive an email reminder 3 days before each charge." },
  { question: "How can I cancel my subscription?", answer: "You can cancel anytime through your account settings - no questions asked. If you need help, our customer service team is always here for you." },
];

// Circular Progress Component
const CircularProgress = ({ percentage, color }: { percentage: number; color: string }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Using accent (#E1A581) for primary, sunny (#DFBA74) for secondary, and primary (#B7C4B2) for sky
  const colorClass = color === 'primary' ? 'stroke-accent' : color === 'secondary' ? 'stroke-sunny' : 'stroke-primary';

  return (
    <div className="relative w-28 h-28">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-muted/50"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={colorClass}
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-display font-bold">{percentage}%</span>
      </div>
    </div>
  );
};

const Home2 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Layout>
      <div className="original-homepage">
        {/* Hero Section - Elegant Sage Green (#B7C4B2) Design */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image with elegant gradient overlay */}
          <div className="absolute inset-0">
            <img
              src={heroDogForest}
              alt="Happy dog running in forest"
              className="w-full h-full object-cover"
            />
            {/* Elegant multi-layer gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B7C4B2] via-[#B7C4B2]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B7C4B2]/40 via-transparent to-[#B7C4B2]/20" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d3a2d] mb-6 leading-tight drop-shadow-sm">
                <span className="font-display">Joint Saver: </span>
                <span className="font-serif italic font-normal">Easy Movement & Lasting Comfort</span>
              </h1>
              <p className="text-lg md:text-xl text-[#3d4a3d] mb-8 font-body">
                Our premium formula to support joints tackles the root cause of mobility problems.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button variant="hero" size="lg" asChild className="bg-[#E1A581] hover:bg-[#DFBA74] text-white shadow-lg transition-all duration-300 hover:scale-105">
                  <Link to="/products">
                    SHOP NOW
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-white/80 backdrop-blur-sm border-[#909D8B] text-[#909D8B] hover:bg-[#909D8B] hover:text-white transition-all duration-300">
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
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#909D8B] flex items-center justify-center text-white text-xs font-bold">
                    +6K
                  </div>
                </div>
                <div className="text-[#2d3a2d]">
                  <p className="text-sm font-medium">Trusted by pet owners across Europe</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#DFBA74] text-[#DFBA74]" />
                      ))}
                    </div>
                    <span className="text-sm font-bold">4.75</span>
                    <span className="text-sm text-[#3d4a3d]/80">(7.2K Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEW Product Badge - positioned on right side */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative">
              <div className="absolute -top-8 -right-4 bg-[#DFBA74] rounded-full w-24 h-24 flex flex-col items-center justify-center text-white font-bold rotate-12 shadow-lg">
                <span className="text-xs">NEW</span>
                <span className="text-sm">PRODUCT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar - Primary Sage Green (#B7C4B2) Background */}
        <section className="py-12 bg-[#B7C4B2] relative overflow-hidden">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section - Clean white for contrast */}
        <section className="py-20 bg-white">
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
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Sage green gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#909D8B]/80 via-[#B7C4B2]/20 to-transparent group-hover:from-[#B7C4B2]/90 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/95 backdrop-blur-sm text-[#909D8B] border-0 hover:bg-[#E1A581] hover:text-white font-semibold transition-all duration-300"
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

        {/* Promo Cards Section - Light cream background */}
        <section className="py-10 bg-[#f8f6f3]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Subscribe & Save Card - Primary Sage Green */}
              <div className="bg-[#B7C4B2] rounded-3xl p-8 flex items-center gap-6 overflow-hidden relative">
                <div className="flex-1 z-10">
                  <h3 className="text-2xl md:text-3xl mb-3">
                    <span className="font-serif italic">Subscribe & </span>
                    <span className="font-display font-bold block">save on every order.</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Enjoy <span className="font-bold text-foreground">20% off + free shipping</span> for life. Cancel anytime.
                  </p>
                  <Button variant="hero" size="lg" asChild className="bg-[#E1A581] hover:bg-[#DFBA74] text-white shadow-lg">
                    <Link to="/products">
                      SUBSCRIBE & SAVE
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
                {/* Discount Badge - Hover color #DFBA74 */}
                <div className="hidden sm:flex absolute right-24 top-1/2 -translate-y-1/2">
                  <div className="bg-[#DFBA74] rounded-full w-20 h-20 flex flex-col items-center justify-center text-white font-bold shadow-lg">
                    <span className="text-xl">20%</span>
                    <span className="text-[10px] leading-tight text-center">RABATT<br />bei jeder<br />Bestellung</span>
                  </div>
                </div>
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 hidden sm:block">
                  <img src={productJointSaver} alt="Product" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Discover Products Card - Strong Sage Green */}
              <div className="bg-[#B7C4B2]/70 rounded-3xl p-8 flex items-center gap-6 overflow-hidden relative">
                <div className="flex-1 z-10">
                  <h3 className="text-2xl md:text-3xl mb-3">
                    <span className="font-serif italic">Discover </span>
                    <span className="font-display font-bold block">our complete range.</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Explore all our supplements — from joint care to digestive health.
                  </p>
                  <Button variant="outline" size="lg" asChild className="bg-white border-[#909D8B] text-[#909D8B] hover:bg-[#909D8B] hover:text-white">
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

        {/* Bestseller Products Section - Elegant Sage Green */}
        <section className="py-20 bg-[#B7C4B2]/25">
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
                <Button variant="hero" asChild className="bg-[#E1A581] hover:bg-[#DFBA74] text-white">
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
                <div key={product.name} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#B7C4B2]/20 hover:border-[#B7C4B2]/50">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-[#B7C4B2]/10 to-[#B7C4B2]/5 p-6">
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-[#909D8B] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3" />
                        {product.badge}
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#DFBA74] text-[#DFBA74]" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{product.reviews} Reviews</span>
                    </div>

                    <h3 className="font-display font-bold text-xl mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

                    <div className="flex items-center justify-between">
                      <p className="text-lg">
                        <span className="text-muted-foreground text-sm">From </span>
                        <span className="font-bold text-[#909D8B]">€{product.price}</span>
                      </p>
                      <Button variant="hero" size="sm" asChild className="bg-[#E1A581] hover:bg-[#DFBA74] text-white">
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

        {/* Statistics Section - White for contrast */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                <span className="font-display font-bold">Experience the Long-Term </span>
                <span className="font-serif italic">Benefits of PetYu</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                After 3 months, over 80% of our customers report visible improvements in their dogs*
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Display */}
              <div className="relative flex justify-center items-end gap-4">
                <div className="relative">
                  {/* Quality Badge - Hover color #DFBA74 */}
                  <div className="absolute -top-4 right-0 z-10 bg-[#DFBA74] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <img
                    src={qualityDogProduct}
                    alt="PetYu Products"
                    className="rounded-3xl shadow-large max-w-md w-full"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <div key={stat.product} className="flex items-center gap-6">
                    <CircularProgress percentage={stat.percentage} color={stat.color} />
                    <div className="flex-1">
                      <p className="text-foreground">
                        {stat.description} <span className="font-bold">{stat.product}</span>.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-12">
              *The stated results are based on a customer survey (06-07/2024) and reflect individual experiences with PetYu products (n = 466).
            </p>
          </div>
        </section>

        {/* Premium Quality Section - Elegant Sage Green accent */}
        <section className="py-24 bg-[#B7C4B2]/40">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img
                  src={qualityDogProduct}
                  alt="Happy dog with PetYu supplement"
                  className="rounded-3xl shadow-large w-full max-w-lg mx-auto"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                  <span className="font-display font-bold">Absolute Premium Quality </span>
                  <span className="font-serif italic block">for a Healthy Pet Life</span>
                </h2>
                <p className="text-muted-foreground mb-10">
                  Our high-quality supplements meet the highest standards:
                </p>

                <div className="space-y-6">
                  {qualityFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-[#909D8B]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#909D8B]/50 transition-colors">
                        <feature.icon className="w-6 h-6 text-[#909D8B]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display font-bold text-lg">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                        <Link
                          to={feature.link}
                          className="text-[#E1A581] text-sm font-medium inline-flex items-center gap-1 mt-1 hover:gap-2 transition-all"
                        >
                          Learn more <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription CTA with Dog */}
        <section className="py-0 relative">
          <div className="grid lg:grid-cols-2">
            {/* Left: Content - Elegant Sage Green Gradient */}
            <div className="bg-gradient-to-br from-[#B7C4B2] via-[#a8b5a3] to-[#909D8B] py-20 px-8 md:px-16 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-white/30" />
              <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-2 border-white/20" />
              <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/10" />

              <div className="relative z-10">
                <span className="inline-block bg-[#E1A581] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
                  🎁 Limited Offer
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight drop-shadow-sm">
                  Subscribe & Get
                  <span className="block font-serif italic font-normal">20% Off Every Order</span>
                </h2>
                <p className="text-white/95 text-lg mb-8 max-w-md">
                  Plus free shipping on all subscription orders. Cancel anytime, no commitment required.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="xl" asChild className="bg-[#E1A581] text-white hover:bg-[#DFBA74] font-bold shadow-lg transition-all duration-300 hover:scale-105">
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
              {/* Floating discount badge - Hover color #DFBA74 */}
              <div className="absolute top-8 right-8 bg-[#DFBA74] rounded-full w-24 h-24 flex flex-col items-center justify-center text-white font-bold shadow-xl animate-bounce-gentle">
                <span className="text-2xl">20%</span>
                <span className="text-xs">OFF</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Clean white */}
        <section className="py-20 bg-white">
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
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#B7C4B2]/20 hover:border-[#B7C4B2]/40"
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
                        <Star key={i} className="w-5 h-5 fill-[#DFBA74] text-[#DFBA74]" />
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

        {/* FAQ Section - Light Sage Green */}
        <section className="py-24 bg-[#B7C4B2]/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Image & Title */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                  <span className="font-serif italic">Need Help? </span>
                  <span className="font-display font-bold block">We're Here for You & Your Pets.</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  For more information and support, visit our{" "}
                  <Link to="/contact" className="text-[#E1A581] underline hover:no-underline">
                    Help Center
                  </Link>.
                </p>

                <div className="relative max-w-sm">
                  <img
                    src={faqDog}
                    alt="Happy dog"
                    className="rounded-3xl shadow-medium"
                  />
                </div>
              </div>

              {/* Right: FAQ Accordion */}
              <div>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card rounded-xl px-6 border-0 shadow-soft"
                    >
                      <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home2;
