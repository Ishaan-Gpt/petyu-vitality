import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import HealthIssues from "./pages/HealthIssues";
import JointsBones from "./pages/health/JointsBones";
import StomachIntestines from "./pages/health/StomachIntestines";
import OralCare from "./pages/health/OralCare";
import GelenkeProduct from "./pages/health/products/GelenkeProduct";
import VerdungProduct from "./pages/health/products/VerdungProduct";
import MundhygieneProduct from "./pages/health/products/MundhygieneProduct";
import Products from "./pages/Products";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/health" element={<HealthIssues />} />
          <Route path="/health/joints-bones" element={<JointsBones />} />
          <Route path="/health/joints-bones/gelenke" element={<GelenkeProduct />} />
          <Route path="/health/stomach-intestines" element={<StomachIntestines />} />
          <Route path="/health/stomach-intestines/verdung" element={<VerdungProduct />} />
          <Route path="/health/oral-care" element={<OralCare />} />
          <Route path="/health/oral-care/mundhygiene" element={<MundhygieneProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/home4" element={<Home4 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
