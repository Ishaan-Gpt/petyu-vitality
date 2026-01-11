import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Smile, ArrowRight, Check, Star } from "lucide-react";

const benefits = [
  "Freshens breath naturally",
  "Helps reduce plaque buildup",
  "Supports healthy gums",
  "Promotes clean teeth",
  "Easy to administer",
  "No brushing required",
];

const OralCare = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent-soft rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Link
              to="/health"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              ← Back to Health Issues
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent-soft flex items-center justify-center">
                <Smile className="w-8 h-8 text-accent-deep" />
              </div>
              <span className="px-4 py-2 bg-accent-soft text-accent-deep rounded-full text-sm font-semibold">
                Dental Health
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Oral Care
              <span className="block text-accent-deep">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Keep your pet's smile bright and healthy with our natural oral care products designed for fresh breath and clean teeth.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-8">
                Key Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-4 p-4 bg-accent-soft rounded-xl">
                    <Check className="w-6 h-6 text-accent-deep flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-accent-soft rounded-3xl p-12 aspect-square flex items-center justify-center">
              <Smile className="w-48 h-48 text-accent-deep opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Product CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-12 shadow-large max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-sunny fill-sunny" />
              ))}
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Recommended Product
            </h2>
            <h3 className="font-display text-2xl font-bold text-accent-deep mb-4">
              Mundhygiene
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our dental health formula with natural enzymes, mint, and cleansing agents for fresher breath.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/health/oral-care/mundhygiene">
                View Mundhygiene
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OralCare;
