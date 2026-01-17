import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bone, Activity, Smile, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Import images for visual interest
import categoryGeneralHealth from "@/assets/category-general-health.jpg";
import categoryDigestion from "@/assets/category-digestion.jpg";
import categoryOralCare from "@/assets/category-oral-care.jpg";

const healthCategories = [
  {
    title: "Joints & Bones",
    description: "Support your pet's mobility and joint health with our scientifically formulated supplements. Ideal for aging pets, active breeds, or those recovering from injury.",
    icon: Bone,
    image: categoryGeneralHealth,
    path: "/health/joints-bones",
    benefits: ["Improved mobility", "Reduced stiffness", "Cartilage support", "Natural Relief"],
  },
  {
    title: "Digestive Wellness",
    description: "Gentle care for pets with sensitive stomachs. Our formulas support gut health, improve nutrient absorption, and promote overall digestive balance.",
    icon: Activity,
    image: categoryDigestion,
    path: "/health/stomach-intestines",
    benefits: ["Better digestion", "Reduced bloating", "Healthy gut flora", "Absorption Boost"],
  },
  {
    title: "Oral Care",
    description: "Maintain your pet's dental health naturally. Our oral care products fight plaque, freshen breath, and support healthy gums for a happier smile.",
    icon: Smile,
    image: categoryOralCare,
    path: "/health/oral-care",
    benefits: ["Fresh breath", "Plaque reduction", "Healthy gums", "Clean teeth"],
  },
];

const HealthIssues = () => {
  return (
    <Layout>
      {/* Editorial Header */}
      <section className="pt-40 pb-24 bg-cream text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-8 block">CURATED SOLUTIONS</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter mb-12">
            HEALTH <br /><span className="italic">RANGES</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-xl mx-auto font-body">
            Precision-formulated supplements designed to address the specific needs of your cherished companions.
          </p>
        </div>
      </section>

      {/* Targeted Solutions Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-40">
            {healthCategories.map((category, index) => (
              <div
                key={category.title}
                className={cn(
                  "grid lg:grid-cols-2 gap-24 items-center",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Text Content */}
                <div className={cn("space-y-12", index % 2 === 1 ? "lg:order-2" : "")}>
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                      {category.title.split(' ')[0]} <br />
                      <span className="italic">{category.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="text-xl text-foreground/70 leading-relaxed font-body">
                      {category.description}
                    </p>
                  </div>

                  {/* Benefits Bento-style */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.benefits.map((benefit) => (
                      <div key={benefit} className="p-4 bg-cream/30 rounded-2xl border border-border/10 flex items-center gap-3">
                        <Sparkles className="w-4 h-4 text-primary opacity-50" />
                        <span className="text-sm font-bold uppercase tracking-widest text-foreground/60">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="xl" className="rounded-full bg-foreground text-background hover:bg-primary transition-all group" asChild>
                    <Link to={category.path}>
                      EXPLORE RANGE <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Image Side */}
                <div className={cn("relative", index % 2 === 1 ? "lg:order-1" : "")}>
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-large border-8 border-cream">
                    <img src={category.image} alt={category.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
                  {/* Decorative floating badge */}
                  <div className={cn(
                    "absolute -bottom-8 bg-white p-8 rounded-[2rem] shadow-xl border border-border/10 max-w-[240px] animate-float",
                    index % 2 === 1 ? "-right-8" : "-left-8"
                  )}>
                    <p className="text-sm font-serif italic text-foreground/60 mb-2">Developed with</p>
                    <p className="text-lg font-bold leading-tight">VETERINARY PRECISION</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 bg-cream text-center border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">Need a tailored <br />recommendation?</h2>
            <div className="flex flex-col items-center gap-6">
              <Button size="xl" className="rounded-full px-16 bg-primary hover:bg-primary-deep text-white shadow-xl group" asChild>
                <Link to="/contact">
                  TALK TO AN EXPERT <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <p className="text-foreground/40 text-xs font-bold uppercase tracking-[0.3em]">Direct Veterinary Consultations Available</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HealthIssues;
