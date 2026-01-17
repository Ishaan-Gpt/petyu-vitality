import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Award, Leaf, Target, ArrowRight } from "lucide-react";

// Import all images
import heroDogForest from "@/assets/hero-dog-forest.jpg";
import qualityDogProduct from "@/assets/quality-dog-product.jpg";

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
      {/* Hero Header - Editorial Style */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <img src={heroDogForest} alt="Pet Health" className="w-full h-full object-cover opacity-50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-8 block">ESTABLISHED 2024</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter transition-all duration-1000 overflow-hidden">
            OUR <br /><span className="italic">PURPOSE</span>
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-7xl font-serif leading-tight">
              "We believe that true wellness <br /> comes from a <span className="italic">harmonious balance</span> of nature and innovation."
            </h2>
            <div className="w-px h-32 bg-foreground/20 mx-auto" />
            <p className="text-xl md:text-2xl text-foreground/70 font-body leading-relaxed max-w-2xl mx-auto italic">
              PetYu was founded in Germany with a single vision: to redefine pet care by bringing editorial elegance and scientific rigor to the supplements category.
            </p>
          </div>
        </div>
      </section>

      {/* Origins - Overlapping Layout */}
      <section className="py-40 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">From Heart to Lab</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">
                Born from <br /><span className="italic">personal stories</span>
              </h2>
              <div className="space-y-8 text-lg text-foreground/70 leading-relaxed font-body">
                <p>
                  Our journey began when our founder's beloved Golden Retriever struggled with joint issues. We realized that pet owners shouldn't have to choose between "natural" and "effective."
                </p>
                <p>
                  Working alongside leading German veterinary experts and nutritional scientists, we spent years perfecting formulas that deliver visible results without environmental compromise.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-2 border-l border-primary pl-8">
                  <p className="text-4xl font-serif">10K+</p>
                  <p className="text-xs tracking-[0.2em] font-bold uppercase text-foreground/40">Happy Pets</p>
                </div>
                <div className="space-y-2 border-l border-primary pl-8">
                  <p className="text-4xl font-serif">100%</p>
                  <p className="text-xs tracking-[0.2em] font-bold uppercase text-foreground/40">Traceable</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={qualityDogProduct} alt="Pet Health Journey" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary rounded-full blur-[100px] opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Elegant Cards */}
      <section className="py-40 bg-cream-light border-y border-border/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 space-y-4">
            <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">The Pillars</span>
            <h2 className="text-5xl md:text-7xl font-serif italic">Our Core Credo</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="p-12 bg-white rounded-[2.5rem] border border-border/20 shadow-soft space-y-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif">{v.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed font-body">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Editorial Profiles */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">The Minds Behind</span>
              <h2 className="text-5xl md:text-7xl font-serif italic">The Experts</h2>
            </div>
            <div className="w-32 h-32 hidden md:block border-2 border-primary rounded-full p-4 animate-float">
              <Heart className="w-full h-full text-primary opacity-20" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="space-y-8 group cursor-pointer text-center">
                <div className="aspect-square bg-cream rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-primary/20">
                    <Users className="w-24 h-24" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif">{member.name}</h3>
                  <p className="text-sm tracking-widest uppercase font-bold text-foreground/40">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 bg-cream text-center border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">Begin your pet's <br />new chapter.</h2>
            <Button size="xl" className="rounded-full px-16 bg-primary hover:bg-primary-deep text-white shadow-xl group" asChild>
              <Link to="/products" className="flex items-center gap-2">
                START BROWSING <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
