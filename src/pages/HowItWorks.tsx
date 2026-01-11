import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Beaker, Heart, Shield, CheckCircle, ArrowRight } from "lucide-react";

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
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-soft rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-soft text-primary-deep rounded-full text-sm font-semibold mb-6">
              How It Works
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Science Meets
              <span className="block text-primary">Nature</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we create premium pet supplements that combine the best of natural ingredients with cutting-edge nutritional science.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From ingredient to finished product
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className={`${step.color} rounded-3xl p-8 h-full`}>
                  <span className="font-display text-5xl font-bold text-foreground/10">
                    {step.number}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl ${step.color} border-2 border-current flex items-center justify-center my-4`}>
                    <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients & Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary-soft text-secondary-deep rounded-full text-sm font-semibold mb-6">
                Ingredients & Benefits
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                What's Inside
                <span className="block text-secondary-deep">Our Products</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We use only the finest natural ingredients, each selected for their proven benefits to pet health. No artificial additives, fillers, or preservatives.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary-deep flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-soft rounded-3xl p-8 text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="font-display font-bold text-foreground">Natural</p>
              </div>
              <div className="bg-secondary-soft rounded-3xl p-8 text-center">
                <Shield className="w-12 h-12 text-secondary-deep mx-auto mb-3" />
                <p className="font-display font-bold text-foreground">Safe</p>
              </div>
              <div className="bg-accent-soft rounded-3xl p-8 text-center">
                <Beaker className="w-12 h-12 text-accent-deep mx-auto mb-3" />
                <p className="font-display font-bold text-foreground">Tested</p>
              </div>
              <div className="bg-sunny-soft rounded-3xl p-8 text-center">
                <Heart className="w-12 h-12 text-sunny-foreground mx-auto mb-3" />
                <p className="font-display font-bold text-foreground">Effective</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Ready to Try PetYu?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference that quality natural supplements can make for your pet.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/products">
              Shop Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
