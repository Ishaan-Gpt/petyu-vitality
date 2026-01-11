import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@petyu.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+49 123 456 789",
    description: "Mon-Fri, 9am-6pm CET",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Berlin, Germany",
    description: "By appointment only",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-soft rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-soft text-primary-deep rounded-full text-sm font-semibold mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in
              <span className="block text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or need personalized advice for your pet? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card rounded-3xl p-8 shadow-large text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-primary font-semibold mb-1">{info.details}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We're always happy to help with questions about pet nutrition and health.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-muted rounded-2xl">
                  <MessageCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-foreground">Product Questions</h4>
                    <p className="text-muted-foreground text-sm">
                      Need help choosing the right supplement for your pet?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted rounded-2xl">
                  <Clock className="w-6 h-6 text-secondary-deep mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-foreground">Response Time</h4>
                    <p className="text-muted-foreground text-sm">
                      We typically respond within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-large">
              <div className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px] resize-none"
                    placeholder="Tell us about your pet and how we can help..."
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find quick answers to common questions about our products and services.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              { q: "How long until I see results?", a: "Most pets show improvement within 2-4 weeks of regular use." },
              { q: "Are your products safe for all pets?", a: "Our products are formulated for dogs and cats. Always consult your vet for specific concerns." },
              { q: "Do you offer international shipping?", a: "Yes, we ship throughout Europe with free shipping on orders over €50." },
              { q: "What's your return policy?", a: "We offer a 30-day satisfaction guarantee on all products." },
            ].map((faq) => (
              <div key={faq.q} className="bg-card rounded-2xl p-6 shadow-soft">
                <h4 className="font-display font-bold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
