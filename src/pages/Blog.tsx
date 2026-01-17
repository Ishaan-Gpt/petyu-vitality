import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

// Import images
import heroDogForest from "@/assets/hero-dog-forest.jpg";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Dog May Have Joint Issues",
    excerpt: "Learn to recognize the early warning signs of joint problems in dogs and how to support their mobility naturally.",
    category: "Health Tips",
    date: "Jan 8, 2024",
    readTime: "5 min read",
    color: "bg-primary-soft",
  },
  {
    id: 2,
    title: "The Benefits of Probiotics for Pets",
    excerpt: "Discover how probiotics can improve your pet's digestive health and overall well-being.",
    category: "Nutrition",
    date: "Jan 5, 2024",
    readTime: "4 min read",
    color: "bg-secondary-soft",
  },
  {
    id: 3,
    title: "Natural Ways to Freshen Your Pet's Breath",
    excerpt: "Bad breath in pets can signal dental issues. Here are natural solutions to keep their smile fresh.",
    category: "Oral Care",
    date: "Jan 2, 2024",
    readTime: "3 min read",
    color: "bg-accent-soft",
  },
  {
    id: 4,
    title: "Understanding Pet Food Labels",
    excerpt: "A guide to decoding ingredient lists and choosing the best nutrition for your furry friend.",
    category: "Nutrition",
    date: "Dec 28, 2023",
    readTime: "6 min read",
    color: "bg-sunny-soft",
  },
  {
    id: 5,
    title: "Exercise Tips for Senior Pets",
    excerpt: "Keep your aging pet active and comfortable with these gentle exercise recommendations.",
    category: "Health Tips",
    date: "Dec 22, 2023",
    readTime: "4 min read",
    color: "bg-sky-soft",
  },
  {
    id: 6,
    title: "Seasonal Allergies in Pets: What to Know",
    excerpt: "Learn how to identify and manage seasonal allergies to keep your pet comfortable year-round.",
    category: "Health Tips",
    date: "Dec 18, 2023",
    readTime: "5 min read",
    color: "bg-primary-soft",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Editorial Header */}
      <section className="pt-40 pb-24 bg-cream text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-8 block">JOURNAL & INSIGHTS</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter mb-12">
            THE <br /><span className="italic">VITALITY BIBLE</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-xl mx-auto font-body">
            Chronicles of canine longevity, nutritional excellence, and the art of professional pet parenting.
          </p>
        </div>
      </section>

      {/* Featured Article - Large Editorial */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-cream p-8 md:p-16 rounded-[4rem] flex flex-col lg:flex-row gap-16 items-center shadow-large">
            <div className="lg:w-1/2 aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={heroDogForest} alt="Featured Article" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Editor's Pick</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                The Art of <br /><span className="italic">Longevity</span>
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed font-body">
                Explore our comprehensive guide on supporting your senior pet's vitality through preventative natural supplementation.
              </p>
              <Button size="xl" variant="link" className="p-0 text-xl font-serif italic text-primary group">
                Read the full essay <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group relative flex flex-col space-y-8">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-cream/30 border border-border/10 shadow-soft group-hover:shadow-large transition-all duration-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl font-serif text-primary/5 group-hover:text-primary/10 transition-colors">0{post.id}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-foreground/40 uppercase">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-3xl font-serif group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed font-body line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="pt-4">
                    <Button variant="link" className="p-0 font-serif italic group-hover:text-primary transition-colors">
                      Keep Reading
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Stylized */}
          <div className="text-center mt-32">
            <div className="w-px h-24 bg-border/30 mx-auto mb-8" />
            <Button size="xl" variant="outline" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-white px-16">
              LOAD MORE ESSAYS
            </Button>
          </div>
        </div>
      </section>

      {/* Editorial Newsletter */}
      <section className="py-40 bg-cream-deep/20 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">Vitality, <br />Delivered.</h2>
              <p className="text-xl text-foreground/60 max-w-md font-body">
                Subscribe to the Vitality Bible for monthly insights, scientific updates, and exclusive access to new formulations.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-large border border-border/10">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 ml-1">Your Email</label>
                  <input
                    type="email"
                    placeholder="marie@paris.com"
                    className="w-full bg-cream/30 border-b-2 border-border/20 px-4 py-4 focus:outline-none focus:border-primary transition-colors font-body"
                  />
                </div>
                <Button size="xl" className="w-full rounded-full bg-foreground text-background hover:bg-primary transition-all duration-500 py-8 text-lg font-medium">
                  JOIN THE JOURNEY
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
