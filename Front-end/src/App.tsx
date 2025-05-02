// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import Solutions from "./pages/Solutions";


// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/solutions" element={<Solutions />} /> {/* ✅ New route */}
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////

  import { Toaster } from "@/components/ui/toaster";
  import { Toaster as Sonner } from "@/components/ui/sonner";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { BrowserRouter, Routes, Route } from "react-router-dom";

  import React from "react";

  import Index from "./pages/Index";
  import NotFound from "./pages/NotFound";
  import Navbar from "./components/Navbar";
  import Aboutus from "./pages/Aboutus";
  import CaseStudy from "./pages/CaseStudy";
  import Contact from "./pages/Contact";
  import ContactForm from "./components/ContactForm";
  import Solutions from "./pages/Solutions";
  import Indus from "./pages/Indus";

  // 👈 import Navbar here

  const queryClient = new QueryClient();

  const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar /> {/* 👈 RENDER NAVBAR ONCE HERE */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/case-studies" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ContactForm" element={<ContactForm/>}/>
            <Route path="/indus" element={<Indus />} />
           
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  export default App;

