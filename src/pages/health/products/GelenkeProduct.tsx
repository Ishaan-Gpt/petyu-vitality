import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bone, ArrowLeft, Star, Check, ShoppingCart, Truck, Shield, Leaf } from "lucide-react";

const ingredients = [
  "Glucosamine HCL",
  "Chondroitin Sulfate",
  "MSM (Methylsulfonylmethane)",
  "Omega-3 Fatty Acids",
  "Turmeric Extract",
  "Green-Lipped Mussel",
];

const features = [
  { icon: Leaf, text: "100% Natural Ingredients" },
  { icon: Shield, text: "Vet Approved Formula" },
  { icon: Truck, text: "Free Shipping" },
];

const GelenkeProduct = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/health" className="hover:text-primary transition-colors">Health Issues</Link>
            <span>/</span>
            <Link to="/health/joints-bones" className="hover:text-primary transition-colors">Joints & Bones</Link>
            <span>/</span>
            <span className="text-foreground">Gelenke</span>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/health/joints-bones"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Joints & Bones
          </Link>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-primary-soft rounded-3xl p-16 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Bone className="w-32 h-32 text-primary mx-auto mb-4" />
                  <span className="font-display text-2xl font-bold text-primary">Gelenke</span>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm">
                Bestseller
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sunny fill-sunny" />
                  ))}
                </div>
                <span className="text-muted-foreground">(127 Reviews)</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Gelenke
              </h1>
              <p className="text-2xl font-bold text-primary mb-6">€34.99</p>
              
              <p className="text-lg text-muted-foreground mb-8">
                Our premium joint health supplement formulated to support mobility, reduce stiffness, and maintain healthy cartilage in dogs and cats of all ages.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-2 bg-muted rounded-xl px-4 py-2">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 mb-8">
                <Button variant="hero" size="xl" className="flex-1">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
              </div>

              {/* Ingredients */}
              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Key Ingredients
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {ingredients.map((ingredient) => (
                    <div key={ingredient} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Product Description
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Gelenke is our flagship joint support supplement, carefully crafted with a powerful blend of natural ingredients proven to support joint health and mobility in pets.
              </p>
              <p className="text-muted-foreground mb-4">
                Our unique formula combines Glucosamine and Chondroitin for cartilage support, MSM for natural anti-inflammatory benefits, and Omega-3 fatty acids for overall joint lubrication.
              </p>
              <p className="text-muted-foreground">
                <strong>Directions:</strong> Administer daily according to your pet's weight. Mix with food or give as a treat. Consult your veterinarian before use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GelenkeProduct;
