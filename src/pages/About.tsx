import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Award, Leaf, Target, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Pets",
    description: "Every product is created with genuine love and care for animals",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We source only the finest natural ingredients for optimal health",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing ensures every batch meets our high standards",
  },
  {
    icon: Target,
    title: "Science-Backed",
    description: "Formulated with veterinary experts using the latest research",
  },
];

const team = [
  { name: "Dr. Anna Schmidt", role: "Chief Veterinary Officer" },
  { name: "Marcus Weber", role: "Founder & CEO" },
  { name: "Elena Müller", role: "Head of R&D" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-soft rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-soft text-primary-deep rounded-full text-sm font-semibold mb-6">
              About PetYu
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Mission is 
              <span className="block text-primary">Pet Wellness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Founded in Germany with a passion for pet health, PetYu is dedicated to providing premium natural supplements that help pets live their happiest, healthiest lives.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary-soft text-secondary-deep rounded-full text-sm font-semibold mb-6">
                Our Story
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Born from Love, Driven by Science
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                PetYu began when our founder's beloved Golden Retriever struggled with joint issues. Frustrated by the lack of quality natural options, we set out to create something better.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Working alongside veterinary experts and nutritional scientists, we developed a range of supplements that combine traditional wisdom with modern science.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, PetYu helps thousands of pets across Europe live more active, comfortable lives. Our commitment to quality, transparency, and genuine care remains at the heart of everything we do.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-soft rounded-3xl p-8 text-center">
                <p className="font-display text-5xl font-bold text-primary mb-2">10K+</p>
                <p className="text-muted-foreground">Happy Pets</p>
              </div>
              <div className="bg-secondary-soft rounded-3xl p-8 text-center">
                <p className="font-display text-5xl font-bold text-secondary-deep mb-2">100%</p>
                <p className="text-muted-foreground">Natural</p>
              </div>
              <div className="bg-accent-soft rounded-3xl p-8 text-center">
                <p className="font-display text-5xl font-bold text-accent-deep mb-2">5★</p>
                <p className="text-muted-foreground">Rated</p>
              </div>
              <div className="bg-sunny-soft rounded-3xl p-8 text-center">
                <p className="font-display text-5xl font-bold text-sunny-foreground mb-2">EU</p>
                <p className="text-muted-foreground">Made</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at PetYu
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-3xl p-6 shadow-soft text-center">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate experts dedicated to pet wellness
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Join the PetYu Family
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how our natural supplements can help your pet thrive.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/products">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
