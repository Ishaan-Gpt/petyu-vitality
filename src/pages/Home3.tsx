import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
    Heart,
    Star,
    ArrowRight,
    Sparkles,
    MessageCircle,
    Smile,
    Award,
    Beaker,
    Package,
    CheckCircle2,
    Leaf,
    PawPrint,
    Utensils,
    MapPin,
    ShieldCheck,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Play,
    Instagram
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Import all images
import heroDogForest from "@/assets/hero-dog-forest.jpg";
import categoryGeneralHealth from "@/assets/category-general-health.jpg";
import categoryDigestion from "@/assets/category-digestion.jpg";
import categorySkinCoat from "@/assets/category-skin-coat.jpg";
import categoryOralCare from "@/assets/category-oral-care.jpg";
import productJointSaver from "@/assets/product-joint-saver.jpg";
import productDentalCare from "@/assets/product-dental-care.jpg";
import productDigestion from "@/assets/product-digestion.jpg";
import testimonialDog1 from "@/assets/testimonial-dog-1.jpg";
import testimonialDog2 from "@/assets/testimonial-dog-2.jpg";
import testimonialDog3 from "@/assets/testimonial-dog-3.jpg";
import subscriptionDog from "@/assets/subscription-dog.jpg";
import qualityDogProduct from "@/assets/quality-dog-product.jpg";
import contactDog from "@/assets/contact-dog.jpg";
import faqDog from "@/assets/faq-dog.jpg";

const bestsellers = [
    {
        id: "gelenke",
        name: "Joint Saver",
        category: "Joints & Bones",
        price: "€34.99",
        image: productJointSaver,
        description: "Premium joint support with glucosamine and chondroitin",
        tag: "Bestseller",
        color: "primary"
    },
    {
        id: "verdung",
        name: "Digest Plus",
        category: "Stomach & Intestines",
        price: "€29.99",
        image: productDigestion,
        description: "Gentle digestive care with probiotics and enzymes",
        tag: "Essential",
        color: "secondary"
    },
    {
        id: "mundhygiene",
        name: "Dental Care",
        category: "Oral Care",
        price: "€24.99",
        image: productDentalCare,
        description: "Natural oral care for fresh breath and clean teeth",
        tag: "New",
        color: "accent"
    },
];

const stats = [
    { percentage: 95, label: "Digestion Improvement", product: "Digest Plus", color: "sky", desc: "Visible relief in 2 weeks" },
    { percentage: 81, label: "Mobility Boost", product: "Joint Saver", color: "primary", desc: "More active play time" },
    { percentage: 98, label: "Recommendation Rate", product: "PetYu Range", color: "sunny", desc: "Trusted by families" },
];

const testimonials = [
    {
        name: "Silke B.",
        title: "Canine Booster - Amazing!",
        text: "Our Labradormix Doodle is now 8 years old. The last few months he had recurring stomach-intestinal problems... but now he is full of energy again!",
        rating: 5,
        image: testimonialDog1,
        product: "Canine Booster",
    },
    {
        name: "Barbara E.",
        title: "Beautiful Coat",
        text: "The powder is very well accepted, I think the coat has already become softer and even more radiant after just two weeks of use!",
        rating: 5,
        image: testimonialDog2,
        product: "Skin & Coat Formula",
    },
    {
        name: "Julia Schneider",
        title: "Joint powder actually works!",
        text: "I actually didn't want to try another joint supplement for my picky Beagle Charlie. He's suffered from arthritis for three years and nothing has helped until now. The joint powder actually works!",
        rating: 5,
        image: testimonialDog3,
        product: "Joint Saver",
    },
];

const faqs = [
    { question: "How does my subscription work?", answer: "Your subscription delivers your chosen products automatically at your preferred interval. You'll save 20% on every order and enjoy free shipping. Modify, pause, or cancel anytime from your account." },
    { question: "Can I manage, change or adjust my subscription online?", answer: "Yes! Log into your account to change delivery frequency, swap products, update payment info, or pause your subscription with just a few clicks." },
    { question: "I want to change the products in my subscription and also the delivery frequency. How can I do that?", answer: "Simply go to your account dashboard, select 'Manage Subscription', and you can modify products, quantities, and delivery schedule all in one place." },
    { question: "On what date will my subscription be charged?", answer: "Your subscription renews on the same date each month (or according to your chosen frequency). You'll receive an email reminder 3 days before each charge." },
];

const CircularProgress = ({ percentage, color }: { percentage: number; color: string }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const colorMap: Record<string, string> = {
        primary: 'stroke-primary',
        secondary: 'stroke-secondary-deep',
        sky: 'stroke-sky',
        sunny: 'stroke-sunny-deep'
    };

    return (
        <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-500">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-muted/20"
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className={cn(colorMap[color] || 'stroke-primary', "transition-all duration-1000 ease-out")}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-display font-bold">{percentage}%</span>
            </div>
        </div>
    );
};

const Home3 = () => {
    return (
        <Layout>
            <div className="original-homepage overflow-hidden bg-background min-h-screen">
                {/* Refined Hero Section - Cinematic Finesse */}
                <section className="relative min-h-[95vh] flex items-center overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-secondary-deep/10 z-10" />
                        <img
                            src={heroDogForest}
                            alt="Nature Background"
                            className="w-full h-full object-cover animate-pulse-soft"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-20">
                        <div className="max-w-4xl space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-soft mb-4">
                                <Sparkles className="w-3 h-3 text-secondary" />
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">The New Standard</span>
                            </div>

                            <h1 className="text-6xl md:text-[6rem] lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tighter drop-shadow-lg">
                                Vitality <br />
                                <span className="italic font-normal text-sunny">Reimagined</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-white/90 font-body max-w-xl leading-relaxed drop-shadow-md">
                                Experience the perfect fusion of nature's potent ingredients and scientific precision.
                                <span className="italic block mt-2 text-white/70">Elevate your dog's life, every single day.</span>
                            </p>

                            <div className="flex flex-wrap items-center gap-6 pt-6">
                                <Button size="xl" className="h-16 rounded-full px-10 bg-white hover:bg-white/90 text-foreground font-bold tracking-widest uppercase shadow-glow-secondary transition-all duration-500 hover:-translate-y-1">
                                    <Link to="/products" className="flex items-center gap-2">
                                        Explore Collection <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="flex -space-x-4">
                                        {[testimonialDog1, testimonialDog2, testimonialDog3].map((img, i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden">
                                                <img src={img} alt="" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-xs">
                                        <p className="font-bold tracking-widest uppercase">Trusted by 26k+</p>
                                        <div className="flex text-secondary">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Hero Glass Cards - "Finesse" Details */}
                    <div className="absolute bottom-10 right-4 lg:right-20 flex flex-col gap-4 z-20 hidden md:flex">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] shadow-large w-64 animate-float">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                                    <Heart className="w-5 h-5 fill-current" />
                                </div>
                                <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Health</span>
                            </div>
                            <p className="text-white text-lg font-serif italic leading-tight">"A noticeable difference in energy levels."</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] shadow-large w-64 animate-float-delayed ml-12">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center text-sky-foreground">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Quality</span>
                            </div>
                            <p className="text-white text-lg font-serif italic leading-tight">"Veterinarian approved excellence."</p>
                        </div>
                    </div>
                </section>

                {/* Trust Row - Refined */}
                <section className="py-16 bg-white border-b border-border/10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { icon: PawPrint, label: "Expert Developed", sub: "Veterinarian Formulation" },
                                { icon: Utensils, label: "Easy Dosing", sub: "Approved Palatability" },
                                { icon: MapPin, label: "Made in Europe", sub: "Sustainable Sourcing" },
                                { icon: Heart, label: "Loved by Pets", sub: "Money Back Guarantee" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                                        <item.icon className="w-7 h-7 text-foreground/60 group-hover:text-secondary transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-sm uppercase tracking-wider">{item.label}</h4>
                                        <p className="font-serif italic text-muted-foreground text-sm">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Promo Cards - Refined & Re-integrated */}
                <section className="py-32 bg-muted/10">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Card 1: Subscription */}
                            <div className="relative overflow-hidden rounded-[3rem] bg-white shadow-soft group hover:shadow-large transition-all duration-500 border border-border/10 h-[500px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors" />

                                <div className="p-12 h-full flex flex-col relative z-10">
                                    <div className="mb-auto space-y-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary-deep text-[10px] font-bold tracking-widest uppercase">Smart Choice</span>
                                        <h3 className="text-4xl md:text-5xl font-serif">Subscribe & <br /><span className="italic text-secondary">Save 20%</span></h3>
                                        <p className="text-muted-foreground max-w-xs">Automatic delivery. Free shipping. Cancel anytime.</p>
                                    </div>

                                    <div className="mt-8 flex items-end justify-between">
                                        <Button className="rounded-full px-8 bg-secondary hover:bg-secondary-deep text-secondary-foreground shadow-lg group-hover:scale-105 transition-transform" asChild>
                                            <Link to="/products">START NOW</Link>
                                        </Button>
                                        <img src={productJointSaver} alt="Product" className="w-48 object-contain drop-shadow-xl -mr-8 -mb-8 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Discovery */}
                            <div className="relative overflow-hidden rounded-[3rem] bg-secondary-soft/20 shadow-soft group hover:shadow-large transition-all duration-500 border border-border/10 h-[500px]">
                                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

                                <div className="p-12 h-full flex flex-col relative z-10">
                                    <div className="mb-auto space-y-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-secondary-deep/10 text-secondary-deep text-[10px] font-bold tracking-widest uppercase">Collection</span>
                                        <h3 className="text-4xl md:text-5xl font-serif">Discover the <br /><span className="italic text-secondary-deep">Full Range</span></h3>
                                        <p className="text-muted-foreground max-w-xs">From glistening coats to agile joints – we have it all.</p>
                                    </div>

                                    <div className="mt-8 flex items-end justify-between">
                                        <Button variant="outline" className="rounded-full px-8 bg-white border-none shadow-md hover:bg-secondary-deep hover:text-white group-hover:scale-105 transition-all text-secondary-deep" asChild>
                                            <Link to="/products">VIEW ALL</Link>
                                        </Button>
                                        <div className="flex -space-x-8 -mr-4 -mb-4">
                                            <img src={productDentalCare} alt="Product" className="w-32 object-contain drop-shadow-lg group-hover:-translate-x-4 transition-transform duration-700 delay-100" />
                                            <img src={productDigestion} alt="Product" className="w-36 object-contain drop-shadow-xl z-10 group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bestsellers - Editorial Grid */}
                <section className="py-40 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-32 space-y-4">
                            <span className="text-secondary-deep font-bold tracking-[0.4em] text-[10px] uppercase">The Icons</span>
                            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter">
                                Customer <span className="italic">Favorites</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                            {bestsellers.map((product, idx) => (
                                <div
                                    key={product.id}
                                    className="group flex flex-col gap-6"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-muted/20 hover:bg-muted/40 transition-colors duration-500">
                                        <div className="absolute top-6 left-6 z-20">
                                            <span className={cn(
                                                "px-4 py-2 rounded-full text-[9px] font-bold tracking-widest uppercase text-white shadow-sm",
                                                product.color === 'primary' ? "bg-sky" : product.color === 'secondary' ? "bg-secondary-deep" : "bg-accent-deep"
                                            )}>
                                                {product.tag}
                                            </span>
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center p-12">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700" />
                                        </div>

                                        <div className="absolute bottom-0 inset-x-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <Button className="w-full rounded-full bg-white text-foreground hover:bg-foreground hover:text-white shadow-lg" asChild>
                                                <Link to="/products">ADD TO CART</Link>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="text-center space-y-2">
                                        <h3 className="text-3xl font-serif tracking-tight">{product.name}</h3>
                                        <p className="text-sm text-foreground/50">{product.category}</p>
                                        <p className="font-bold text-lg text-secondary-deep">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Metrics - Enhanced Design */}
                <section className="py-32 bg-cream-deep/20 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                <h2 className="text-5xl md:text-7xl font-serif leading-none tracking-tighter">
                                    Results <br />you can <span className="italic text-secondary-deep">measure</span>.
                                </h2>
                                <p className="text-xl text-foreground/60 leading-relaxed font-serif italic max-w-lg">
                                    "We believe in transparency. That's why we measure our success by the health and happiness of your pet."
                                </p>

                                <div className="space-y-8">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-8 group hover:bg-white/50 p-4 rounded-3xl transition-colors">
                                            <CircularProgress percentage={stat.percentage} color={stat.color} />
                                            <div className="space-y-1">
                                                <h4 className="font-display font-bold text-lg">{stat.label}</h4>
                                                <p className="text-sm text-muted-foreground">{stat.desc} using <span className="font-semibold text-foreground">{stat.product}</span></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-sunny/20 to-sky/20 rounded-[4rem] rotate-3 blur-2xl" />
                                <img src={qualityDogProduct} alt="Quality" className="relative rounded-[4rem] shadow-extra w-full rotate-2 hover:rotate-0 transition-transform duration-700" />

                                <div className="absolute -bottom-12 -left-12 bg-white p-8 rounded-[2.5rem] shadow-large max-w-xs animate-float-delayed">
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-sunny text-sunny" />)}
                                    </div>
                                    <p className="font-serif italic text-lg leading-tight">"The only brand I trust for my golden retriever."</p>
                                    <p className="text-xs font-bold uppercase tracking-widest mt-4 text-foreground/40">Verified Buyer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials - Re-Integrated Grid */}
                <section className="py-40 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="flex items-end justify-between mb-24">
                            <h2 className="text-5xl md:text-7xl font-serif">Community <span className="italic text-sky">Love</span></h2>
                            <div className="hidden md:flex gap-2">
                                <Button variant="outline" size="icon" className="rounded-full"><ChevronLeft className="w-5 h-5" /></Button>
                                <Button variant="outline" size="icon" className="rounded-full"><ChevronRight className="w-5 h-5" /></Button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-muted/10 rounded-[3rem] p-10 hover:bg-white hover:shadow-large transition-all duration-500 border border-transparent hover:border-border/10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{t.name}</h4>
                                            <div className="flex gap-0.5 text-sunny">
                                                {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-2xl italic mb-4">"{t.title}"</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm mb-6">{t.text}</p>
                                    <span className="inline-block px-3 py-1 bg-secondary/5 text-secondary-deep text-[10px] font-bold tracking-widest uppercase rounded-full">
                                        Verified on {t.product}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Artistic Category Grid - Merged Visuals */}
                <section className="py-40 bg-cream-deep/10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter opacity-10 leading-none">THE COLLECTION</h2>
                                <h3 className="text-5xl md:text-7xl font-serif tracking-tighter">Choose your <span className="italic text-sky">Harmony</span></h3>
                            </div>
                            <Link to="/products" className="group flex items-center gap-4 text-xs font-bold tracking-widest uppercase border-b-2 border-secondary pb-2">
                                View all treasures <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Joints & Bones", img: categoryGeneralHealth, color: "primary", desc: "Elite Mobility" },
                                { title: "Digestion", img: categoryDigestion, color: "secondary", desc: "Inner Peace" },
                                { title: "Skin & Coat", img: categorySkinCoat, color: "sky", desc: "Radiant Glow" },
                                { title: "Oral Care", img: categoryOralCare, color: "sunny", desc: "Pure Breath" },
                            ].map((cat, i) => (
                                <Link
                                    key={i}
                                    to="/products"
                                    className={cn(
                                        "group relative aspect-[3/4] overflow-hidden rounded-[3.5rem] bg-white shadow-soft transition-all duration-700",
                                        i % 2 === 1 ? "md:translate-y-12" : "md:-translate-y-12"
                                    )}
                                >
                                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                                    <div className={cn(
                                        "absolute inset-0 opacity-20 transition-opacity duration-700",
                                        cat.color === 'primary' ? "bg-sky" : cat.color === 'secondary' ? "bg-secondary-deep" : cat.color === 'sky' ? "bg-sky" : "bg-sunny"
                                    )} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                    <div className="absolute bottom-12 left-10 right-10">
                                        <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase font-bold mb-2 block">{cat.desc}</span>
                                        <h4 className="text-3xl font-serif text-white tracking-tighter leading-tight">{cat.title}</h4>
                                    </div>
                                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100">
                                        <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                                            <ArrowRight className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section - Re-Integrated with Finesse */}
                <section className="py-32 bg-cream-light/30">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="relative sticky top-32">
                                <h2 className="text-5xl md:text-6xl font-serif mb-8">
                                    Curious <br /><span className="italic text-secondary-deep">Minds</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-12 max-w-sm">
                                    Everything you need to know about our sourcing, subscription, and science.
                                </p>
                                <div className="relative rounded-[3rem] overflow-hidden shadow-large rotate-2 hover:rotate-0 transition-transform duration-700">
                                    <img src={faqDog} alt="Help" className="w-full" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-10">
                                        <div className="text-white">
                                            <p className="font-serif italic text-2xl">Still have questions?</p>
                                            <Link to="/contact" className="text-sm font-bold tracking-widest uppercase border-b border-white/50 pb-1 mt-2 inline-block hover:border-white transition-colors">Chat with us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-8">
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {faqs.map((faq, i) => (
                                        <AccordionItem key={i} value={`item-${i}`} className="border border-border/10 rounded-[2rem] px-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <AccordionTrigger className="text-xl font-serif py-6 hover:no-underline hover:text-secondary-deep transition-colors text-left">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA - The Movement (Revamped) */}
                <section className="py-20 px-4 md:px-8">
                    <div className="container mx-auto">
                        <div className="bg-foreground rounded-[4rem] overflow-hidden relative shadow-extra min-h-[600px] flex items-center">
                            {/* Abstract Background Art */}
                            <div className="absolute inset-0 w-full h-full">
                                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
                            </div>

                            <div className="relative z-10 grid lg:grid-cols-12 gap-12 p-12 md:p-24 w-full items-center">
                                <div className="lg:col-span-7 space-y-10 text-white">
                                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                                        </span>
                                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">Community Open</span>
                                    </div>

                                    <h2 className="text-6xl md:text-[6rem] lg:text-[7rem] font-serif leading-[0.85] tracking-tighter">
                                        Join the <br />
                                        <span className="italic bg-gradient-to-r from-sky via-secondary to-sky bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Movement</span>
                                    </h2>

                                    <p className="text-xl md:text-2xl text-white/60 max-w-xl font-body leading-relaxed">
                                        "Where aesthetic living meets pet vitality."
                                        <span className="block mt-4 text-lg text-white/40">Unlock exclusive pricing, expert advice, and a community of passionate pet owners.</span>
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                        <Button size="xl" className="h-20 rounded-full px-12 bg-white text-foreground hover:bg-secondary hover:text-white font-bold tracking-widest uppercase text-sm shadow-xl transition-all hover:scale-105" asChild>
                                            <Link to="/products">Become a Member</Link>
                                        </Button>
                                        <div className="flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                            <div className="flex -space-x-4">
                                                {[testimonialDog1, testimonialDog2, testimonialDog3].map((img, i) => (
                                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-foreground overflow-hidden">
                                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="text-white/80 text-xs font-bold uppercase tracking-wider">
                                                + 20k Members
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating 3D Elements */}
                                <div className="lg:col-span-5 relative h-full min-h-[400px] flex items-center justify-center">
                                    <div className="relative w-full max-w-md aspect-square">
                                        {/* Center Image */}
                                        <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-700 z-10">
                                            <img src={subscriptionDog} alt="Movement" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                        </div>

                                        {/* Floating Badges */}
                                        <div className="absolute -top-12 -right-8 z-20 bg-white p-6 rounded-[2rem] shadow-large animate-float text-center max-w-[150px] rotate-6">
                                            <p className="text-3xl font-serif italic text-secondary mb-1">20%</p>
                                            <p className="text-[9px] font-bold uppercase tracking-widest text-foreground/50">Lifetime Discount</p>
                                        </div>

                                        <div className="absolute -bottom-12 -left-8 z-20 bg-sky p-6 rounded-[2rem] shadow-large animate-float-delayed text-center max-w-[150px] -rotate-6">
                                            <Smile className="w-8 h-8 text-sky-foreground mb-2 mx-auto" />
                                            <p className="text-[9px] font-bold uppercase tracking-widest text-sky-foreground">Happy Pets Guaranteed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social / Life Section */}
                <section className="py-24 bg-background overflow-hidden">
                    <div className="container mx-auto px-4 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
                        <div>
                            <span className="text-sky font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">@PetYu_Official</span>
                            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">Life with <span className="italic text-secondary-deep">PetYu</span></h2>
                        </div>
                        <Button variant="outline" className="rounded-full border-foreground/10 hover:bg-foreground hover:text-white transition-colors">
                            <Instagram className="w-4 h-4 mr-2" /> Follow the pack
                        </Button>
                    </div>

                    {/* Marquee Effect or Horizontal Scroll */}
                    <div className="relative w-full overflow-hidden">
                        <div className="flex gap-6 animate-scroll hover:pause px-4 w-max">
                            {[testimonialDog1, productDentalCare, heroDogForest, testimonialDog3, productJointSaver, testimonialDog2].map((img, i) => (
                                <div key={i} className="w-[300px] md:w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative group cursor-pointer">
                                    <img src={img} alt="Social" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {[testimonialDog1, productDentalCare, heroDogForest, testimonialDog3, productJointSaver, testimonialDog2].map((img, i) => (
                                <div key={`dup-${i}`} className="w-[300px] md:w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative group cursor-pointer">
                                    <img src={img} alt="Social" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer Signature */}
                <section className="py-40 text-center bg-background relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center gap-6 animate-fade-up">
                            <Leaf className="w-12 h-12 text-secondary opacity-40" />
                            <p className="text-xs font-bold tracking-[0.8em] text-foreground/40 uppercase">Designing the perfect pet life • Since 2024</p>
                        </div>
                        <h2 className="text-[15vw] font-serif leading-none tracking-tighter text-foreground/5 select-none mt-12 mix-blend-multiply">PETYU</h2>
                    </div>
                </section>
            </div >
        </Layout >
    );
};

export default Home3;
