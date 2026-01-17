import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
  Heart,
  Star,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Smile,
  Award,
  Beaker,
  Package,
  CheckCircle2,
  ShieldCheck,
  Leaf
} from "lucide-react";
import { cn } from "@/lib/utils";

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
import contactDog from "@/assets/contact-dog.jpg";

const categories = [
  { title: "Joints & Bones", image: categoryGeneralHealth, path: "/health/joints-bones", desc: "Mobility & Strength" },
  { title: "Digestion", image: categoryDigestion, path: "/health/stomach-intestines", desc: "Gut Health & Flora" },
  { title: "Skin & Coat", image: categorySkinCoat, path: "/health/oral-care", desc: "Radiance & Shine" },
  { title: "Oral Care", image: categoryOralCare, path: "/health/oral-care", desc: "Dental Hygiene" },
];

const testimonials = [
  {
    name: "Silke B.",
    text: "Our Labradormix Doodle is now 8 years old. The last few months he had recurring stomach-intestinal problems... but now he is full of energy again!",
    image: testimonialDog1,
    location: "Berlin, DE"
  },
  {
    name: "Barbara E.",
    text: "The powder is very well accepted, I think the coat has already become softer and more radiant!",
    image: testimonialDog2,
    location: "Vienna, AT"
  },
  {
    name: "Julia Schneider",
    text: "He's suffered from arthritis for three years and nothing has helped until now. The joint powder actually works!",
    image: testimonialDog3,
    location: "Zurich, CH"
  },
];

const qualityFeatures = [
  { icon: Sparkles, title: "Unique Recipes", description: "Bespoke blends for targeted care." },
  { icon: Beaker, title: "Scientifically Formulated", description: "Clinically proven effective ratios." },
  { icon: Package, title: "Premium Ingredients", description: "Human-grade, ethically sourced." },
  { icon: Heart, title: "Gently Manufactured", description: "Cold-pressed to retain potency." },
];

const bestsellers = [
  {
    id: "gelenke",
    name: "Gelenke",
    category: "Joints & Bones",
    price: "€34.99",
    image: productJointSaver,
    description: "Premium joint support with glucosamine and chondroitin",
    tag: "Most Popular"
  },
  {
    id: "verdung",
    name: "Verdung",
    category: "Stomach & Intestines",
    price: "€29.99",
    image: productDigestion,
    description: "Gentle digestive care with probiotics and enzymes",
    tag: "Essential"
  },
  {
    id: "mundhygiene",
    name: "Mundhygiene",
    category: "Oral Care",
    price: "€24.99",
    image: productDentalCare,
    description: "Natural oral care for fresh breath and clean teeth",
    tag: "New Arrival"
  },
];

const faqs = [
  {
    question: "When will I see the first results?",
    answer: "Most pet owners notice positive changes within 2-4 weeks of consistent use. However, for chronic conditions, it may take up to 6 weeks to see full benefits."
  },
  {
    question: "Are the products safe for all breeds?",
    answer: "Yes, our supplements are formulated to be safe for all breeds and sizes. We provide specific dosage instructions based on your pet's weight."
  },
  {
    question: "Can I combine different supplements?",
    answer: "Absolutely! Our products are designed to complement each other. We recommend consulting with your vet if you have specific health concerns."
  },
  {
    question: "How do I store the supplements?",
    answer: "For optimal freshness, store in a cool, dry place away from direct sunlight. Our packaging is designed to keep nutrients protected."
  }
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - High Finesse */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-cream">
        <div className="absolute inset-0 z-0 scale-105 animate-pulse-soft opacity-40">
          <img
            src={heroDogForest}
            alt="Nature Background"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-cream/10 via-transparent to-cream z-[1]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/50 backdrop-blur-xl border border-white/20 shadow-sm animate-fade-in mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">Paris Editorial Edition</span>
            </div>

            <h1 className="text-[12vw] md:text-[8vw] lg:text-[10vw] font-serif text-foreground leading-[0.8] tracking-tighter mb-8 drop-shadow-sm">
              PURE <br />
              <span className="italic font-normal text-primary">Vitality</span>
            </h1>

            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-xl md:text-2xl text-foreground font-serif italic opacity-70 leading-snug">
                The intersection of high-end aesthetics and uncompromising canine nutrition.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                <Button size="xl" className="rounded-full px-12 bg-foreground text-background hover:bg-primary hover:text-white font-bold tracking-widest uppercase shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95">
                  <Link to="/products">Shop the collection</Link>
                </Button>
                <Link to="/about" className="text-xs font-bold tracking-[0.3em] uppercase border-b-2 border-foreground/10 pb-1 hover:border-primary transition-all">
                  Our Philosophy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full border border-primary/20 animate-float opacity-30 hidden lg:block" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full border border-foreground/10 animate-float-delayed opacity-30 hidden lg:block" />

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <span className="text-[8px] font-bold tracking-[0.5em] uppercase">Scroll to Discover</span>
          <div className="w-px h-12 bg-foreground animate-pulse" />
        </div>
      </section>

      {/* Modern Trust Bar */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <p className="text-center text-[10px] font-bold tracking-[0.5em] text-foreground/30 uppercase mb-16">Distinguished Partners & Features</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-xl md:text-2xl font-serif italic group-hover:text-primary transition-colors">Vogue Pets</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-xl md:text-2xl font-serif group-hover:text-primary transition-colors">Pet Journal</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-xl md:text-2xl font-serif italic group-hover:text-primary transition-colors">The Daily Dog</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-xl md:text-2xl font-serif group-hover:text-primary transition-colors">Vitality Mag</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-xl md:text-2xl font-serif italic group-hover:text-primary transition-colors">Canine Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Essence - Large Typography */}
      <section className="py-40 bg-cream-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
          <span className="absolute -top-20 -left-20 text-[30vw] font-serif italic leading-none whitespace-nowrap uppercase tracking-tighter">Essence</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center space-y-16">
            <div className="w-20 h-20 rounded-full border border-foreground/10 flex items-center justify-center bg-white shadow-sm">
              <Leaf className="w-8 h-8 text-primary opacity-50" />
            </div>

            <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif leading-[1] text-foreground max-w-6xl mx-auto tracking-tighter">
              A holistic <span className="italic">renaissance</span> for your dog's longevity.
            </h2>

            <p className="text-xl md:text-2xl text-foreground/60 font-body max-w-2xl mx-auto leading-relaxed">
              We've redesigned pet wellness from the ground up, blending Parisian elegance with pharmaceutical-grade standards.
            </p>

            <div className="pt-8">
              <div className="w-px h-32 bg-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bestsellers - Editorial Layout */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase">The Gold Standard</span>
              <h2 className="text-6xl md:text-8xl font-serif leading-tight tracking-tighter">
                Most <span className="italic">Coveted</span>
              </h2>
            </div>
            <p className="text-xl text-foreground/50 max-w-sm italic font-serif leading-relaxed">
              "Indispensable additions to any modern pet routine."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-16">
            {bestsellers.map((product, idx) => (
              <Link
                key={product.id}
                to={`/products`}
                className={cn(
                  "group flex flex-col space-y-10 transition-all duration-700",
                  idx % 2 === 1 ? "lg:mt-32" : ""
                )}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-cream group-hover:scale-[1.02] transition-all duration-700 shadow-soft group-hover:shadow-glow-primary border border-border/10">
                  <div className="absolute inset-0 flex items-center justify-center p-12 transition-transform duration-1000 group-hover:scale-110">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  </div>

                  <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
                    <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase shadow-sm">
                      {product.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="absolute bottom-10 left-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <ArrowRight className="w-5 h-5 text-primary -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-center">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase">{product.category}</span>
                    <h3 className="text-4xl font-serif tracking-tight">{product.name}</h3>
                  </div>
                  <p className="text-sm text-foreground/50 leading-relaxed font-body max-w-xs mx-auto italic">
                    {product.description}
                  </p>
                  <div className="pt-4 space-y-6">
                    <div className="text-3xl font-serif text-primary">{product.price}</div>
                    <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-primary px-12 text-[10px] font-bold tracking-widest uppercase transition-all shadow-xl">
                      Add to Collection
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Experience - Immersive Storytelling */}
      <section className="py-40 bg-cream-deep/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative group">
              <div className="relative z-10 w-[95%] aspect-[5/6] rounded-[4rem] overflow-hidden shadow-large border-8 border-white/40">
                <img src={qualityDogProduct} alt="Pet Health" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="absolute -right-12 -bottom-20 z-20 w-[60%] aspect-[1/1] rounded-[3rem] overflow-hidden shadow-large border-8 border-white animate-float-delayed">
                <img src={categorySkinCoat} alt="Details" className="w-full h-full object-cover" />
              </div>

              {/* Quality Badges Overlaid */}
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 z-30 space-y-4">
                {[ShieldCheck, Award, Smile].map((Icon, i) => (
                  <div key={i} className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-border/10">
                    <Icon className="w-8 h-8 text-primary opacity-60" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase italic">Purity First</span>
                <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
                  Crafted without <br /><span className="italic text-primary">compromise</span>.
                </h2>
              </div>

              <p className="text-2xl text-foreground/60 leading-relaxed font-serif italic">
                "We don't just make supplements; we curate a lifestyle of health and beauty for your most loyal companions."
              </p>

              <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-foreground/10">
                {qualityFeatures.map((f) => (
                  <div key={f.title} className="space-y-4 group">
                    <div className="flex items-center gap-4">
                      <f.icon className="w-6 h-6 text-primary group-hover:scale-125 transition-transform" />
                      <h4 className="font-serif text-2xl tracking-tight">{f.title}</h4>
                    </div>
                    <p className="text-sm text-foreground/50 leading-relaxed pl-10">{f.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button size="xl" variant="outline" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-white px-10 group" asChild>
                  <Link to="/about">
                    KNOW THE CRAFT <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Gallery - Categories */}
      <section className="py-40 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-32 space-y-8">
            <h2 className="text-7xl md:text-9xl font-serif italic tracking-tighter leading-none opacity-10">THE GALLERY</h2>
            <div className="flex flex-col md:flex-row items-end gap-12">
              <h3 className="text-5xl md:text-7xl font-serif leading-tight tracking-tighter">Choose your <span className="italic">curation</span></h3>
              <p className="text-foreground/40 text-sm max-w-xs mb-4">Dedicated solutions designed for specific biological needs.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, i) => (
              <Link
                key={item.title}
                to={item.path}
                className={cn(
                  "group relative aspect-[3/4] overflow-hidden rounded-[3rem] bg-cream shadow-soft",
                  i % 2 === 1 ? "md:translate-y-12" : "md:-translate-y-12"
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-12 left-10 right-10 space-y-2">
                  <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-bold">{item.desc}</span>
                  <h3 className="text-3xl font-serif text-white tracking-tight">{item.title}</h3>
                </div>
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-0 group-hover:scale-100">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Authenticity - Modern Testimonials */}
      <section className="py-40 bg-cream relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-32 space-y-6">
            <span className="text-primary font-bold tracking-[0.5em] text-[10px] uppercase block">Voices of Gratitude</span>
            <h2 className="text-6xl md:text-8xl font-serif italic tracking-tighter">Real Stories</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={t.name} className="relative group">
                <div className="space-y-10 p-12 bg-white rounded-[4rem] shadow-soft border border-border/10 transition-all duration-700 hover:shadow-large">
                  <div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>

                  <p className="text-3xl font-serif italic text-foreground leading-[1.2] tracking-tight">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-6 pt-6 border-t border-border/10">
                    <div className="w-16 h-16 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-xs tracking-widest uppercase">{t.name}</p>
                      <p className="text-[10px] text-foreground/30 font-bold uppercase tracking-widest mt-1">{t.location}</p>
                    </div>
                  </div>
                </div>
                {/* Decorative index */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary text-white font-serif italic flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The FAQ - Refined Concierge */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-32 max-w-6xl mx-auto items-center">
            <div className="space-y-12">
              <span className="text-primary font-bold tracking-[0.5em] text-[10px] uppercase">Concierge</span>
              <h2 className="text-6xl md:text-8xl font-serif italic leading-none tracking-tighter">Seek <br />Answers</h2>
              <p className="text-2xl text-foreground/50 font-serif italic max-w-sm">Every detail meticulously clarified for your peace of mind.</p>

              <Button variant="outline" className="rounded-full border-2 border-foreground px-12 py-8 text-xs font-bold tracking-widest uppercase hover:bg-foreground hover:text-white transition-all shadow-xl">
                View Full FAQ Center
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/20 px-4 py-2">
                  <AccordionTrigger className="text-2xl font-serif hover:no-underline hover:text-primary transition-colors py-10 tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xl text-foreground/60 leading-relaxed font-body pb-10 italic">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final Call - Immersive CTA */}
      <section className="py-20 bg-background px-4 md:px-10">
        <div className="bg-foreground rounded-[5rem] overflow-hidden min-h-[80vh] relative flex items-center shadow-extra">
          <div className="absolute inset-0 opacity-40">
            <img src={subscriptionDog} alt="Club member" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/60 to-transparent z-[1]" />

          <div className="container mx-auto px-16 relative z-10 grid lg:grid-cols-2 gap-24 py-24">
            <div className="space-y-12">
              <span className="text-primary font-bold tracking-[0.5em] text-[10px] uppercase">Join the Atelier</span>
              <h2 className="text-7xl md:text-9xl font-serif text-white tracking-tighter leading-[0.8]">
                A <span className="italic">Legacy</span> of Vitality.
              </h2>
              <p className="text-2xl text-white/60 font-serif italic leading-relaxed max-w-md">
                Unlock artisan-crafted health routines and enjoy lifetime membership privileges.
              </p>
              <div className="flex flex-wrap gap-8 pt-8">
                <Button size="xl" className="rounded-full px-16 bg-primary hover:bg-white hover:text-primary text-white font-bold tracking-widest uppercase shadow-2xl transition-all duration-700 h-20">
                  Join Now
                </Button>
                <div className="flex items-center gap-4 text-white/80">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-xs font-bold tracking-widest uppercase">Member-Only Access</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-center items-end text-right space-y-8">
              <div className="space-y-2">
                <span className="text-white text-7xl font-serif tracking-tighter">20%</span>
                <p className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">Permanent Discount</p>
              </div>
              <div className="space-y-2">
                <span className="text-white text-7xl font-serif tracking-tighter">∞</span>
                <p className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">Free Global Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Footer */}
      <section className="py-32 bg-background border-t border-border/10">
        <div className="container mx-auto px-4 text-center space-y-12">
          <div className="font-serif text-[12vw] opacity-5 tracking-tighter leading-none select-none">PET<span className="italic">YU</span></div>
          <p className="text-[10px] font-bold tracking-[0.8em] text-foreground/20 uppercase">A Symphony of Canine Wellness • Paris • Worldwide</p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
