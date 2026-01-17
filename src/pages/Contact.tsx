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
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Editorial Header */}
      <section className="pt-40 pb-24 bg-cream text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-8 block">REACH OUT TO US</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter mb-12">
            LET'S <br /><span className="italic">CONNECT</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-xl mx-auto font-body">
            We’re here to provide personalized guidance for your pet’s vitality journey.
          </p>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream-deep/20 -skew-x-12 translate-x-1/2" />
      </section>

      {/* Main Content - Minimalist Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Contact Information - Column 1 */}
            <div className="space-y-16">
              <div className="space-y-12">
                <h2 className="text-5xl font-serif italic mb-8">Direct Lines</h2>
                <div className="grid gap-12">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-8 group cursor-pointer">
                      <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary transition-all">
                        <info.icon className="w-6 h-6 group-hover:text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold tracking-widest text-foreground/40 uppercase">{info.title}</h3>
                        <p className="text-2xl font-serif text-foreground">{info.details}</p>
                        <p className="text-sm text-foreground/50">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Hours */}
              <div className="p-10 bg-cream rounded-[2.5rem] border border-border/20 space-y-6">
                <h3 className="text-2xl font-serif">Concierge Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border/10 pb-2">
                    <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Monday — Friday</span>
                    <span className="text-sm">09:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/10 pb-2">
                    <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Saturday</span>
                    <span className="text-sm">10:00 — 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Sunday</span>
                    <span className="text-sm italic text-primary">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant Contact Form - Column 2 */}
            <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-large border border-border/10">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-2">
                  <h2 className="text-4xl font-serif mb-2">Write to us</h2>
                  <p className="text-foreground/50 text-sm">Please allow up to 24 hours for our specialists to respond.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 ml-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marie Dubois"
                      className="w-full bg-cream/30 border-b-2 border-border/20 px-4 py-4 focus:outline-none focus:border-primary transition-colors font-body"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marie@paris.com"
                      className="w-full bg-cream/30 border-b-2 border-border/20 px-4 py-4 focus:outline-none focus:border-primary transition-colors font-body"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 ml-1">Reason for Inquiry</label>
                  <select
                    className="w-full bg-cream/30 border-b-2 border-border/20 px-4 py-4 focus:outline-none focus:border-primary transition-colors font-body appearance-none"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="">Select an option</option>
                    <option value="Product Advice">Product Advice</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Partnership">Partnerships</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 ml-1">Your Message</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="How can our veterinary experts help you today?"
                    className="w-full bg-cream/30 border-b-2 border-border/20 px-4 py-4 focus:outline-none focus:border-primary transition-colors font-body resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button size="xl" className="w-full rounded-full bg-foreground text-background hover:bg-primary transition-all duration-500 py-8 text-lg font-medium shadow-xl">
                  SEND INQUIRY
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <section className="py-24 bg-cream text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Elegance in every drop.</h2>
          <p className="text-foreground/40 tracking-[0.3em] uppercase text-xs font-bold">PetYu Concierge Service</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
