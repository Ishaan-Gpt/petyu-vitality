import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

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
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-soft rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-soft text-primary-deep rounded-full text-sm font-semibold mb-6">
              Blog & Insights
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Pet Health
              <span className="block text-primary">Knowledge Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tips, latest research, and helpful guides to keep your furry friends happy and healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`${post.color} h-48 flex items-center justify-center`}>
                  <span className="font-display text-6xl text-foreground/10">
                    {post.id.toString().padStart(2, '0')}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest pet health tips and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
