import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bone, ArrowRight, Check, Star } from "lucide-react";

const benefits = [
  "Supports joint flexibility and mobility",
  "Helps maintain healthy cartilage",
  "Reduces stiffness and discomfort",
  "Promotes bone strength",
  "Ideal for senior pets and active breeds",
  "Natural anti-inflammatory properties",
];

const JointsBones = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Link
              to="/health"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              ← Back to Health Issues
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-soft flex items-center justify-center">
                <Bone className="w-8 h-8 text-primary" />
              </div>
              <span className="px-4 py-2 bg-primary-soft text-primary-deep rounded-full text-sm font-semibold">
                Joint Health
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Joints & Bones
              <span className="block text-primary">Support</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Help your pet move freely and comfortably with our specialized joint and bone support supplements. Perfect for aging pets, large breeds, and active companions.
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
                  <div key={benefit} className="flex items-center gap-4 p-4 bg-primary-soft rounded-xl">
                    <Check className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-soft rounded-3xl p-12 aspect-square flex items-center justify-center">
              <Bone className="w-48 h-48 text-primary opacity-30" />
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
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              Gelenke
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our premium joint supplement formulated with glucosamine, chondroitin, and natural anti-inflammatory ingredients.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/health/joints-bones/gelenke">
                View Gelenke
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JointsBones;
