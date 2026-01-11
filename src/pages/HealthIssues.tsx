import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bone, Activity, Smile, ArrowRight } from "lucide-react";

const healthCategories = [
  {
    title: "Joints & Bones",
    description: "Support your pet's mobility and joint health with our scientifically formulated supplements. Ideal for aging pets, active breeds, or those recovering from injury.",
    icon: Bone,
    color: "bg-primary-soft",
    iconColor: "text-primary",
    gradient: "gradient-primary",
    path: "/health/joints-bones",
    benefits: ["Improved mobility", "Reduced stiffness", "Cartilage support", "Pain relief"],
  },
  {
    title: "Stomach & Intestines",
    description: "Gentle digestive care for pets with sensitive stomachs. Our formulas support gut health, improve nutrient absorption, and promote overall digestive wellness.",
    icon: Activity,
    color: "bg-secondary-soft",
    iconColor: "text-secondary-deep",
    gradient: "gradient-secondary",
    path: "/health/stomach-intestines",
    benefits: ["Better digestion", "Reduced bloating", "Healthy gut flora", "Nutrient absorption"],
  },
  {
    title: "Oral Care",
    description: "Maintain your pet's dental health naturally. Our oral care products fight plaque, freshen breath, and support healthy gums for a happier, healthier smile.",
    icon: Smile,
    color: "bg-accent-soft",
    iconColor: "text-accent-deep",
    gradient: "gradient-accent",
    path: "/health/oral-care",
    benefits: ["Fresh breath", "Plaque reduction", "Healthy gums", "Clean teeth"],
  },
];

const HealthIssues = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-soft rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-soft text-primary-deep rounded-full text-sm font-semibold mb-6">
              Health Solutions
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Targeted Care for
              <span className="block text-primary">Every Need</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Address specific health concerns with our specialized, veterinary-approved formulas designed for optimal pet wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {healthCategories.map((category, index) => (
              <div
                key={category.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-6`}>
                    <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {category.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className={`${category.color} rounded-xl px-4 py-2 text-sm font-medium text-foreground`}
                      >
                        ✓ {benefit}
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" size="lg" asChild>
                    <Link to={category.path}>
                      Explore Solutions
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`${category.color} rounded-3xl p-12 aspect-square flex items-center justify-center`}>
                    <category.icon className={`w-48 h-48 ${category.iconColor} opacity-30`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Not Sure Which Product is Right?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for personalized recommendations based on your pet's specific needs.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HealthIssues;
