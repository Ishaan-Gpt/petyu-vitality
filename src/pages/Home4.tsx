import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Heart,
    Shield,
    Leaf,
    Star,
    ArrowRight,
    Check,
    ShoppingBag,
    Instagram,
    Facebook,
    Twitter,
    Truck,
    Sparkles,
    Award,
    ChevronRight,
    Baby,
    Search,
    Droplet,
    Sun,
    Wind
} from "lucide-react";
import { useState, useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// --- IMAGES ---
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
import faqDog from "@/assets/faq-dog.jpg";

// --- DATA ---
const categories = [
    { title: "Joints & Bones", image: categoryGeneralHealth, path: "/health/joints-bones", desc: "Support for active mobility" },
    { title: "Digestive Health", image: categoryDigestion, path: "/health/stomach-intestines", desc: "Gut balance & absorption" },
    { title: "Skin & Coat", image: categorySkinCoat, path: "/health/skin-coat", desc: "Radiant shine & protection" },
    { title: "Oral Hygiene", image: categoryOralCare, path: "/health/oral-care", desc: "Fresh breath foundation" },
];

const products = [
    {
        name: "Joint Saver Platinum",
        description: "Clinical strength mobility support with advanced collagen complex.",
        price: "54.90",
        rating: 5,
        reviews: 482,
        image: productJointSaver,
        badge: "Best Seller",
        path: "/health/joints-bones/gelenke",
    },
    {
        name: "Elite PetBiotics",
        description: "Next-generation oral probiotics for dental defense.",
        price: "49.90",
        rating: 5,
        reviews: 51,
        image: productDentalCare,
        badge: "New",
        path: "/health/oral-care/mundhygiene",
    },
    {
        name: "Digest Ultra Plus",
        description: "Enzymatic powerhouse for sensitive stomachs.",
        price: "46.90",
        rating: 5,
        reviews: 128,
        image: productDigestion,
        badge: "Trending",
        path: "/health/stomach-intestines/verdung",
    },
];

const ingredients = [
    { name: "Marine Collagen", benefit: "Elasticity", icon: Droplet },
    { name: "Organic Turmeric", benefit: "Anti-Inflammatory", icon: Sun },
    { name: "Probiotic Strains", benefit: "Gut Flora", icon: Wind },
    { name: "Omega 3 & 6", benefit: "Coat Shine", icon: Sparkles },
];

const comparisonData = [
    { feature: "Active Ingredients", us: "100% Pure", them: "Fillers & Additives" },
    { feature: "Sourcing", us: "Germany/EU", them: "Unknown Origins" },
    { feature: "Formulation", us: "Veterinarian Led", them: "Generic White Label" },
    { feature: "Sustainability", us: "Glass & Recyclable", them: "Single-use Plastic" },
];

const Home4 = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home4-rich font-sans bg-[#FCFDFB] min-h-screen text-[#2d3a2d]">

            {/* --- MENU --- */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#B7C4B2]/20 py-3' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B7C4B2] to-[#909D8B] flex items-center justify-center text-white shadow-lg">
                            <Sparkles className="w-5 h-5 fill-current" />
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-10 py-3 rounded-full border border-[#B7C4B2]/30 shadow-sm">
                        {['Collections', 'Ingredients', 'Science', 'Journal'].map((link) => (
                            <a key={link} href="#" className="text-sm font-bold text-[#2d3a2d] hover:text-[#E1A581] uppercase tracking-wider transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#B7C4B2]/10 transition-colors">
                            <Search className="w-5 h-5" />
                        </Button>
                        <div className="h-8 w-[1px] bg-[#B7C4B2]/30" />
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#B7C4B2]/10 transition-colors relative">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#E1A581] rounded-full ring-2 ring-white" />
                        </Button>
                    </div>
                </div>
            </nav>

            {/* 1. HERO --- */}
            <section className="relative min-h-[90vh] flex items-center bg-[#F4F6F4] overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B7C4B2]/10 to-transparent" />
                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#B7C4B2]/30">
                            <span className="w-2 h-2 rounded-full bg-[#E1A581] animate-pulse" />
                            <span className="text-xs font-bold text-[#909D8B] uppercase tracking-widest">New Standard in Care</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-display font-bold text-[#2d3a2d] leading-[0.95] tracking-tight">
                            Pure <span className="text-[#B7C4B2]">Vitality.</span> <br />
                            <span className="font-serif italic text-[#E1A581] relative top-2">Proven</span> Science.
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-lg leading-relaxed border-l-4 border-[#B7C4B2] pl-6 py-1">
                            Precision-formulated supplements designed to extend healthspan and enhance daily performance.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="xl" className="bg-[#E1A581] hover:bg-[#DFBA74] text-white rounded-full px-12 h-16 text-lg font-bold shadow-xl shadow-[#E1A581]/20 transition-all hover:scale-105">
                                <Link to="/products">Shop Collection</Link>
                            </Button>
                            <Button size="xl" variant="outline" className="border-2 border-[#909D8B] text-[#909D8B] hover:bg-[#909D8B] hover:text-white rounded-full px-10 h-16 text-lg font-bold transition-all">
                                The Science
                            </Button>
                        </div>
                    </div>

                    <div className="relative lg:h-[750px] w-full flex items-center justify-center">
                        <div className="relative w-full h-[90%] rounded-[100px] rounded-tr-[200px] overflow-hidden border-[12px] border-white shadow-2xl z-10">
                            <img src={heroDogForest} className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2d3a2d]/50 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 text-white z-20">
                                <p className="font-serif italic text-2xl mb-1">The Forest Edition</p>
                                <p className="text-sm font-bold uppercase tracking-widest">Limited Release</p>
                            </div>
                        </div>
                        {/* Decor */}
                        <div className="absolute top-10 -right-10 w-40 h-40 bg-[#DFBA74]/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#B7C4B2]/30 rounded-full blur-3xl" />
                    </div>
                </div>
            </section>

            {/* 2. INGREDIENT SPOTLIGHT (NEW) --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-[#2d3a2d] mb-4">Powered by Nature</h2>
                        <div className="h-1 w-20 bg-[#B7C4B2] mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {ingredients.map((ing, i) => (
                            <div key={i} className="group p-8 rounded-[30px] bg-[#F4F6F4] hover:bg-[#2d3a2d] transition-all duration-500 cursor-pointer text-center">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#B7C4B2]/20 flex items-center justify-center mb-6 group-hover:bg-[#DFBA74] transition-colors">
                                    <ing.icon className="w-8 h-8 text-[#909D8B] group-hover:text-white" />
                                </div>
                                <h3 className="font-bold text-lg text-[#2d3a2d] group-hover:text-white mb-1 transition-colors">{ing.name}</h3>
                                <p className="text-[#909D8B] text-sm font-medium group-hover:text-white/70 transition-colors uppercase tracking-wide">{ing.benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CATEGORIES --- */}
            <section className="py-24 bg-[#2d3a2d] text-white rounded-[60px] mx-4 lg:mx-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-[#E1A581] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Wellness Library</span>
                            <h2 className="text-5xl font-display font-bold">Curated Solutions</h2>
                        </div>
                        <Button className="rounded-full border border-white/20 text-white bg-transparent hover:bg-white hover:text-[#2d3a2d] px-8 h-12">
                            View All
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, i) => (
                            <Link key={i} to={cat.path} className="group relative aspect-[4/5] bg-[#3d4a3d] rounded-[30px] overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
                                <img src={cat.image} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2d3a2d] via-transparent to-transparent opacity-90" />

                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-[#E1A581] group-hover:scale-110 transition-all">
                                    <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform" />
                                </div>

                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="text-2xl font-display font-bold mb-2">{cat.title}</h3>
                                    <div className="h-[1px] w-full bg-white/20 mb-4 group-hover:bg-[#E1A581] transition-colors" />
                                    <p className="text-sm text-white/70">{cat.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FOUNDER STORY (NEW SPLIT SECTION) --- */}
            <section className="py-24 bg-[#F4F6F4]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[200px] rounded-tl-[40px] overflow-hidden border-8 border-white shadow-xl">
                                <img src={subscriptionDog} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-48 bg-white p-6 rounded-2xl shadow-lg border border-[#B7C4B2]/20">
                                <p className="font-serif italic text-xl text-[#2d3a2d]">"Health begins in the bowl."</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <span className="text-[#909D8B] font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#2d3a2d] leading-tight">
                                Crafted for the <br />
                                <span className="text-[#E1A581] italic font-serif">Discerning</span> Pet Parent.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                PetYu was born from a simple observation: supplements looked like medicine, and ingredients were often a mystery. We set out to change that by combining pharmaceutical transparency with luxury design.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div>
                                    <h4 className="font-bold text-[#2d3a2d] text-2xl mb-1">10k+</h4>
                                    <p className="text-sm text-[#909D8B]">Happy Communities</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#2d3a2d] text-2xl mb-1">0%</h4>
                                    <p className="text-sm text-[#909D8B]">Artificial Fillers</p>
                                </div>
                            </div>
                            <Button variant="link" className="text-[#2d3a2d] font-bold p-0 hover:text-[#E1A581]">
                                Read Full Story <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BESTSELLERS --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#2d3a2d] mb-4">Daily Essentials</h2>
                            <p className="text-[#909D8B]">Rituals for longevity and happiness.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="rounded-full border-[#B7C4B2] text-[#909D8B]"><ChevronRight className="w-5 h-5 rotate-180" /></Button>
                            <Button variant="outline" size="icon" className="rounded-full border-[#B7C4B2] text-[#2d3a2d] bg-[#F4F6F4]"><ChevronRight className="w-5 h-5" /></Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {products.map((product, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative aspect-square bg-[#FAFAFA] rounded-[40px] overflow-hidden mb-6 p-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#B7C4B2]/10">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFBA74]/10 rounded-full blur-2xl -mr-10 -mt-10" />

                                    <img src={product.image} className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500" />

                                    <div className="absolute top-6 left-6">
                                        <span className="bg-[#2d3a2d] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                            {product.badge}
                                        </span>
                                    </div>

                                    {/* Add Button */}
                                    <button className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2d3a2d] hover:bg-[#E1A581] hover:text-white transition-all scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                                        <ShoppingBag className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="px-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-[#2d3a2d]">{product.name}</h3>
                                        <span className="font-bold text-[#E1A581]">€{product.price}</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-3.5 h-3.5 fill-[#DFBA74] text-[#DFBA74]" />
                                        ))}
                                        <span className="text-xs text-muted-foreground ml-2">({product.reviews})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. COMPARISON TABLE (NEW) --- */}
            <section className="py-24 bg-[#FCFDFB]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-display font-bold text-center mb-16">Why PetYu Stands Alone</h2>

                    <div className="bg-white rounded-[40px] shadow-xl shadow-[#B7C4B2]/10 overflow-hidden border border-[#B7C4B2]/20">
                        <div className="grid grid-cols-3 bg-[#2d3a2d] text-white p-6 font-bold uppercase tracking-wider text-sm">
                            <div className="col-span-1">Feature</div>
                            <div className="col-span-1 text-center text-[#E1A581]">PetYu</div>
                            <div className="col-span-1 text-center text-white/50">Others</div>
                        </div>
                        {comparisonData.map((row, i) => (
                            <div key={i} className="grid grid-cols-3 p-6 border-b border-[#F4F6F4] hover:bg-[#F9FAF9] transition-colors items-center">
                                <div className="font-bold text-[#2d3a2d]">{row.feature}</div>
                                <div className="text-center font-bold text-[#909D8B] flex justify-center items-center gap-2">
                                    <Check className="w-4 h-4 text-[#E1A581]" /> {row.us}
                                </div>
                                <div className="text-center text-muted-foreground decoration-slate-300 decoration-1">{row.them}</div>
                            </div>
                        ))}
                        <div className="p-8 text-center bg-[#F4F6F4]">
                            <p className="text-sm text-muted-foreground mb-4">Experience the difference yourself.</p>
                            <Button className="bg-[#E1A581] hover:bg-[#DFBA74] text-white rounded-full px-8 font-bold">Try Risk Free</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. SCIENCE SECTION --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="aspect-square rounded-[60px] overflow-hidden border-8 border-[#F4F6F4] shadow-2xl relative z-10">
                                <img src={qualityDogProduct} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#2d3a2d]/20 mix-blend-multiply" />
                            </div>

                            <div className="absolute -bottom-12 -left-12 w-3/4 h-3/4 bg-[#B7C4B2]/20 rounded-full blur-[100px] z-0" />

                            <div className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl z-20 animate-bounce cursor-pointer hover:scale-110 transition-transform">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#E1A581] rounded-full flex items-center justify-center text-white font-bold">A+</div>
                                    <div>
                                        <p className="font-bold text-[#2d3a2d] text-sm">Top Rated</p>
                                        <p className="text-xs text-muted-foreground">Safety Standards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Sparkles className="w-5 h-5 text-[#DFBA74]" />
                                <span className="text-[#909D8B] font-bold tracking-widest uppercase text-sm">Clinical Excellence</span>
                            </div>

                            <h2 className="text-5xl font-display font-bold text-[#2d3a2d] mb-8 leading-tight">
                                Not Just Natural. <br />
                                <span className="italic font-serif text-[#B7C4B2]">Scientifically Proven.</span>
                            </h2>

                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                We bridge the gap between holistic care and veterinary science. Our formulas are tested for bioavailability in independent German laboratories.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Sourced exclusively in the EU",
                                    "Cold-pressed to retain 98% nutrients",
                                    "Double-tested for heavy metals"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#F4F6F4] transition-colors border border-transparent hover:border-[#B7C4B2]/20 group">
                                        <div className="w-8 h-8 rounded-full bg-[#2d3a2d] group-hover:bg-[#E1A581] flex items-center justify-center transition-colors">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-bold text-[#2d3a2d]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. SUBSCRIPTION CTA --- */}
            <section className="bg-[#2d3a2d] text-white py-32 relative overflow-hidden my-12 mx-4 lg:mx-8 rounded-[60px]">
                {/* Background Texture */}
                <div className="absolute top-0 right-0 w-2/3 h-full mix-blend-overlay opacity-30">
                    <img src={heroDogForest} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2d3a2d] via-[#2d3a2d]/90 to-transparent" />

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <div className="inline-block px-4 py-1 rounded-full border border-[#DFBA74] text-[#DFBA74] text-xs font-bold uppercase tracking-widest mb-6">
                            VIP Access
                        </div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                            The Concierge <br /> Club.
                        </h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                            Join 5,000+ members saving 20% on every order. Automated wellness, delivered.
                        </p>
                        <Button size="xl" className="bg-white text-[#2d3a2d] hover:bg-[#E1A581] hover:text-white rounded-full px-12 h-16 text-lg font-bold">
                            Upgrade Your Care
                        </Button>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/10 w-full max-w-sm">
                        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                            <span className="font-bold">Member Benefits</span>
                            <Star className="w-5 h-5 text-[#DFBA74] fill-current" />
                        </div>
                        <ul className="space-y-4">
                            {["20% Off Lifetime", "Free Express Shipping", "Priority Vet Support", "Cancel Anytime"].map(item => (
                                <li key={item} className="flex items-center gap-3 text-sm font-medium">
                                    <Check className="w-4 h-4 text-[#B7C4B2]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 9. COMMUNITY FEED (NEW) --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-display font-bold text-center text-[#2d3a2d] mb-12">
                        Joined by <span className="text-[#E1A581]">#PetYuLife</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 h-96">
                        {[testimonialDog1, testimonialDog2, testimonialDog3, subscriptionDog, heroDogForest].map((img, i) => (
                            <div key={i} className={`relative rounded-2xl overflow-hidden group h-full ${i === 2 ? 'md:col-span-1' : ''}`}>
                                <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. TESTIMONIALS SLIDER --- */}
            <section className="py-24 bg-[#F4F6F4]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm relative hover:-translate-y-2 transition-transform duration-300">
                                <QuoteIcon className="absolute top-8 right-8 text-[#B7C4B2]/20 w-12 h-12" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-[#DFBA74] text-[#DFBA74]" />
                                    ))}
                                </div>
                                <h3 className="font-bold text-xl text-[#2d3a2d] mb-4">{t.title}</h3>
                                <p className="text-muted-foreground italic leading-relaxed mb-8">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={t.image} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#B7C4B2]" />
                                    <div>
                                        <p className="font-bold text-[#2d3a2d] text-sm">{t.name}</p>
                                        <p className="text-[10px] bg-[#B7C4B2]/20 text-[#2d3a2d] px-2 py-0.5 rounded-full inline-block mt-1 font-bold">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. FAQ --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-display font-bold text-center text-[#2d3a2d] mb-12">Expert Answers</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {[
                            "How do I transition my dog to PetYu supplements?",
                            "Are your ingredients safe for sensitive stomachs?",
                            "Can I pause my subscription if I have too much?",
                            "What makes your 'Cold-Pressed' process better?"
                        ].map((q, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border border-[#B7C4B2]/20 rounded-2xl px-6 data-[state=open]:bg-[#F4F6F4] transition-colors">
                                <AccordionTrigger className="text-lg font-bold text-[#2d3a2d] hover:text-[#E1A581] hover:no-underline py-6">{q}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                                    Yes. We recommend starting with half the dosage for the first 3 days to allow their system to adjust. Our dedicated vet team is available 24/7 for guidance.
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* 12. FOOTER --- */}
            <footer className="bg-[#1a221a] text-white pt-32 pb-12 rounded-t-[60px] relative z-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
                        <div className="lg:col-span-2">
                            <Link to="/" className="inline-block mb-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-[#B7C4B2] flex items-center justify-center text-[#2d3a2d]">
                                        <Sparkles className="w-4 h-4 fill-current" />
                                    </div>
                                    <span className="text-2xl font-bold tracking-tight text-white">PetYu.</span>
                                </div>
                            </Link>
                            <h2 className="text-4xl font-display font-bold text-white mb-6">
                                Join the <span className="text-[#E1A581]">Inner Circle</span>
                            </h2>
                            <div className="flex gap-2 max-w-md">
                                <input type="email" placeholder="Enter your email" className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E1A581]" />
                                <Button className="rounded-full bg-[#E1A581] hover:bg-[#DFBA74] text-white px-8 h-auto">Join</Button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-[#E1A581] uppercase tracking-widest text-xs mb-8">Collections</h4>
                            <ul className="space-y-4 text-sm text-white/60">
                                {categories.map(c => <li key={c.title}><Link to={c.path} className="hover:text-white transition-colors">{c.title}</Link></li>)}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-[#E1A581] uppercase tracking-widest text-xs mb-8">Company</h4>
                            <ul className="space-y-4 text-sm text-white/60">
                                {['About Us', 'Sustainability', 'Veterinary Board', 'Careers', 'Contact'].map(l => (
                                    <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-medium uppercase tracking-wider">
                        <p>© 2026 PETYU Vitality GmbH.</p>
                        <div className="flex gap-8">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Shipping</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* GLOBAL STYLES */}
            <style>{`
        .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
        </div>
    );
};

const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
    </svg>
)

export default Home4;
