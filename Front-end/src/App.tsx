import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar"; // Import Navinbar
import Solutions from "./pages/Solutions";
import Aboutus from "./pages/Aboutus";
import WhyBigEBrains from "./components/whybigebrain"; // Import the WhyBigEBrains component
import Testimonials from "./components/Testimonials";
import Indus from "./pages/Indus.tsx"; // Import the Industries component

import ContactForm from "./components/ContactForm.tsx";


import StaffingServices from "./pages/StaffingServices.tsx";
import RecruitmentProcess from "./pages/RecruitmentProcess.tsx";
import TrainingDeployment from "./pages/TrainingDeployment.tsx";
import BFSI from "./pages/Bfsi.tsx";
import EngineeringTechnicalServices from "./pages/EngineeringTechnicalServices.tsx";
import Construction from "./pages/Construction.tsx";
import Healthcare from "./pages/Healthcare.tsx";


import AI1 from "./pages/aisolutions/AI-Powered Managed Services.tsx";
import AI2 from "./pages/aisolutions/AI Strategy & Advisory.tsx";
import AI3 from "./pages/aisolutions/AI-Enhanced Cyber Security.tsx";
import AI4 from "./pages/aisolutions/AI-Driven Web Development.tsx";
import AI5 from "./pages/aisolutions/AI-Optimized Cloud Solutions.tsx";
import AI6 from "./pages/aisolutions/AI-Powered Mobile Apps.tsx";

// Import industry components
import IndustriesManufacturing from "./pages/inudustriesSolutiosns/indus_manufacturing.tsx";
import IndustriesTransportation from "./pages/inudustriesSolutiosns/indus_Transportation.tsx";
import IndustriesMedicine from "./pages/inudustriesSolutiosns/indus_medicne.tsx";
import IndustriesBanks from "./pages/inudustriesSolutiosns/indus_banks.tsx";
import IndustriesConsulting from "./pages/inudustriesSolutiosns/indus_consulting.tsx";
import IndustriesNonProfit from "./pages/inudustriesSolutiosns/indus_nonprofit.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar /> {/* Render Navbar globally here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/why-bigebrains" element={<WhyBigEBrains />} /> {/* Add the route for WhyBigEBrains */}
          <Route path="/testimonials" element={<Testimonials />} /> {/* Add the new route */}
          <Route path="/indus" element={<Indus />} /> {/* Add the route for Industries */}
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/staffing-services" element={<StaffingServices />} />
          

          <Route path="/recruitment-process" element={<RecruitmentProcess />} />
          <Route path="/training-deployment" element={<TrainingDeployment />} />
          <Route path="/bfsi" element={<BFSI />} />
          <Route path="/engineering-technical-services" element={<EngineeringTechnicalServices />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/healthcare" element={<Healthcare />} />


          <Route path="/ai-powered-managed-services" element={<AI1 />} />
          <Route path="/ai-strategy-advisory" element={<AI2 />} />
          <Route path="/ai-enhanced-cybersecurity" element={<AI3 />} />
          <Route path="/ai-driven-web-development" element={<AI4 />} />
          <Route path="/ai-optimized-cloud-solutions" element={<AI5 />} />
          <Route path="/ai-powered-mobile-apps" element={<AI6 />} />

          
          <Route path="/industry-manufacturing" element={<IndustriesManufacturing />} />
          <Route path="/transportation-logistics" element={<IndustriesTransportation />} />
          <Route path="/medicine-healthcare" element={<IndustriesMedicine />} />
          <Route path="/banks-insurance" element={<IndustriesBanks />} />
          <Route path="/consulting-providers" element={<IndustriesConsulting />} />
          <Route path="/non-profit" element={<IndustriesNonProfit />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;