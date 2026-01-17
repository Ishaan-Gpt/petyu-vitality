import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Beaker, Heart, Shield, CheckCircle, ArrowRight } from "lucide-react";

// Import images
import qualityDogProduct from "@/assets/quality-dog-product.jpg";

const steps = [
  {
    number: "01",
    title: "Natural Sourcing",
    description: "We carefully select premium natural ingredients from trusted suppliers worldwide, ensuring the highest quality for your pet.",
    icon: Leaf,
    color: "bg-secondary-soft",
    iconColor: "text-secondary-deep",
  },
  {
    number: "02",
    title: "Scientific Formulation",
    description: "Our veterinary experts and nutritional scientists combine traditional wisdom with modern research to create effective formulas.",
    icon: Beaker,
    color: "bg-primary-soft",
    iconColor: "text-primary",
  },
  {
    number: "03",
    title: "Rigorous Testing",
    description: "Every batch undergoes comprehensive quality testing to ensure safety, purity, and potency before reaching your pet.",
    icon: Shield,
    color: "bg-accent-soft",
    iconColor: "text-accent-deep",
  },
  {
    number: "04",
    title: "Delivered with Love",
    description: "Your pet's supplements arrive fresh and ready to support their health journey, backed by our satisfaction guarantee.",
    icon: Heart,
    color: "bg-sunny-soft",
    iconColor: "text-sunny-foreground",
  },
];

const benefits = [
  "Glucosamine & Chondroitin for joint support",
  "Probiotics for digestive health",
  "Omega-3 fatty acids for skin and coat",
  "Natural enzymes for oral care",
  "Turmeric for anti-inflammatory benefits",
  "Vitamins & minerals for overall wellness",
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Editorial Header */}
      <section className="pt-40 pb-24 bg-cream text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-8 block">THE METHODOLOGY</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter mb-12">
            SCIENCE & <br /><span className="italic">NATURE</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-xl mx-auto font-body">
            Redefining pet wellness through a meticulous journey from raw botanical sourcing to high-purity formulation.
          </p>
        </div>
      </section>

      {/* Process Flow - Vertical Timeline */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative divide-y divide-border/20">
            {steps.map((step, index) => (
              <div key={step.title} className="py-24 first:pt-0 last:pb-0 group">
                <div className="grid md:grid-cols-12 gap-12 items-start">
                  <div className="md:col-span-2">
                    <span className="text-7xl md:text-8xl font-serif text-primary/10 group-hover:text-primary/30 transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>
                  <div className="md:col-span-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-serif">{step.title}</h3>
                    </div>
                    <p className="text-xl text-foreground/60 leading-relaxed font-body max-w-2xl">
                      {step.description}
                    </p>
                    {/* Subtle decorative line */}
                    <div className="w-12 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative side text */}
        <div className="absolute top-1/2 -right-40 -translate-y-1/2 rotate-90 hidden lg:block">
          <span className="text-[12rem] font-serif text-cream-deep/10 pointer-events-none uppercase">Integrity</span>
        </div>
      </section>

      {/* Quality Manifesto */}
      <section className="py-40 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-large border-8 border-white">
                <img src={qualityDogProduct} alt="Pet Quality" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div className="space-y-12">
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase text-right block lg:text-left">The Composition</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">
                Pure <br /><span className="italic">Excellence</span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed font-body">
                We source our botanicals from the most pristine environments, ensuring that every milligram of our supplements contributes to your pet's extraordinary life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-widest text-foreground/60">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="xl" variant="outline" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-white transition-all w-fit" asChild>
                <Link to="/products">VIEW COLLECTIONS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 bg-background text-center border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
              ELEVATE <br /><span className="italic">DAILY</span>
            </h2>
            <div className="flex flex-col items-center gap-6">
              <Button size="xl" className="rounded-full px-16 bg-primary text-white hover:bg-primary-deep shadow-xl group" asChild>
                <Link to="/products">
                  START SUBSCRIPTION <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <p className="text-foreground/40 text-xs font-bold uppercase tracking-[0.3em]">Save 20% on your first journey</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
