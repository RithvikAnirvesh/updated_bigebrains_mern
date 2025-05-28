// import React, { useState, useEffect } from "react";
// import { ChevronRight } from "lucide-react";

// const slides = [
//   {
//     image: "https://cdn.prod.website-files.com/66e01bcf271f49df875d1c31/672c93b1e0412d9ddb35beea_Image_2024-10-31T12%3A52%3A29.095Z-RaYgudzLjcTkV8GEdgo9dWGkhWFEh0.webp",
//     title: "AI Agents",
//     subtitle: "Develop autonomous and reactive AI systems",
//     description:
//       "Learn to design agentic workflows\nImplement multi-agent systems\nBuild hands-on projects with real-time AI agents",
//   },
//   {
//     image: "https://miro.medium.com/v2/resize:fit:1400/0*_5ug7mUKThcPdMsZ",
//     title: "Generative AI",
//     subtitle: "Create content with cutting-edge AI models",
//     description:
//       "Master Large Language Models (LLMs)\nBuild intelligent applications using generative AI tools\nDive into real-world use cases and demos",
//   },
//   {
//     image: "https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003763.jpg?ga=GA1.1.1827194027.1745307325&semt=ais_hybrid&w=740",
//     title: "Staffing",
//     subtitle: "Empowering AI-ready talent and organizations",
//     description:
//       "Bridge the gap between talent and tech\nAI-driven hiring strategies\nUpskill teams with project-based learning",
//   },
  
  
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);
//   const slide = slides[current];

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const goToSlide = (index: number) => setCurrent(index);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative h-[100vh] w-full bg-cover bg-center overflow-hidden mx-auto transition-all duration-700 ease-in-out"
//       style={{ backgroundImage: `url(${slide.image})` }}
//     >
//       <div className="absolute inset-0 bg-black/60 z-0" />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-white">
//           {slide.title}
//         </h1>
//         <h2 className="text-base sm:text-lg md:text-xl text-gray-300 mb-2 font-medium">
//           {slide.subtitle}
//         </h2>
//         <p className="text-xs sm:text-sm md:text-base text-gray-300 whitespace-pre-line">
//           {slide.description}
//         </p>
//       </div>

//       <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3 items-center justify-center">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`transition-all duration-300 rounded-full ${
//               index === current
//                 ? "bg-white w-8 sm:w-10 h-3 sm:h-4 rounded-full"
//                 : "bg-gray-400 w-2 sm:w-3 h-2 sm:h-3"
//             }`}
//           />
//         ))}
//       </div>

//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-1 sm:p-2 rounded-full backdrop-blur-md shadow-md transition-all"
//       >
//         <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
//       </button>
//     </section>
//   );
// };

// export default HeroSection;



//////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { useNavigate } from 'react-router-dom'; // ✅ Import for routing

// const Hero = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { amount: 0.5, triggerOnce: true });
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const navigate = useNavigate(); // ✅ Hook for navigation

//   useEffect(() => {
//     if (inView && !hasAnimated) {
//       setHasAnimated(true);
//     }
//   }, [inView, hasAnimated]);

//   return (
//     <section className="py-20 bg-gradient-to-b from-bigebrains-gray to-white" ref={ref}>
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col md:flex-row items-center">
          
//           {/* Text Content */}
//           <motion.div
//             className="md:w-1/2 mb-10 md:mb-0"
//             initial={{ opacity: 0, x: -50 }}
//             animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-bigebrains-darkblue leading-tight mb-6"
//               initial={{ opacity: 0, y: -30 }}
//               animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.2, duration: 0.8 }}
//             >
//               We manage your IT, so you can manage your business.
//             </motion.h1>

//             <motion.p
//               className="text-lg text-gray-600 mb-8 max-w-xl"
//               initial={{ opacity: 0, y: 20 }}
//               animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               Take charge of your business continuity with innovative IT solutions
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-4"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               <Button
//                 onClick={() => navigate('/ContactForm')} // ✅ Redirect to /contact
//                 className="bg-white border border-blue-500 text-black text-lg py-6 px-8 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:bg-blue-700 hover:text-white transition-all duration-300"
//               >
//                 <span className="flex items-center gap-2">
//                   <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
//                   </svg>
//                   Schedule a Free Consultant
//                 </span>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Image */}
//           <motion.div
//             className="md:w-1/2"
//             initial={{ opacity: 0, x: 80 }}
//             animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >https://www.bolton.ac.uk/assets/Uploads/iStock-1356593648.jpg
//             <div className="relative">
//               <div className="bg-white p-2 rounded-lg shadow-xl overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
//                   alt="IT solutions"
//                   className="rounded-md w-full h-auto"
//                 />
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

/////////////////////////////////////////////////////////////



import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://cdn.prod.website-files.com/66e01bcf271f49df875d1c31/672c93b1e0412d9ddb35beea_Image_2024-10-31T12%3A52%3A29.095Z-RaYgudzLjcTkV8GEdgo9dWGkhWFEh0.webp",
    title: "AI Agents",
    subtitle: "Develop autonomous and reactive AI systems",
    description:
      "Learn to design agentic workflows\nImplement multi-agent systems\nBuild hands-on projects with real-time AI agents",
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:1400/0*_5ug7mUKThcPdMsZ",
    title: "Generative AI",
    subtitle: "Create content with cutting-edge AI models",
    description:
      "Master Large Language Models (LLMs)\nBuild intelligent applications using generative AI tools\nDive into real-world use cases and demos",
  },
  {
    image: "https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003763.jpg?ga=GA1.1.1827194027.1745307325&semt=ais_hybrid&w=740",
    title: "Staffing",
    subtitle: "Empowering AI-ready talent and organizations",
    description:
      "Bridge the gap between talent and tech\nAI-driven hiring strategies\nUpskill teams with project-based learning",
  },
  
  
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goToSlide = (index: number) => setCurrent(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[80vh] w-full bg-cover bg-center overflow-hidden mx-auto mt-4 transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full max-w-2xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
          {slide.title}
        </h1>
        <h2 className="text-lg md:text-xl text-gray-300 mb-2 font-medium">
          {slide.subtitle}
        </h2>
        <p className="text-sm md:text-base text-gray-300 whitespace-pre-line">
          {slide.description}
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 items-center justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? "bg-white w-10 h-4 rounded-full"
                : "bg-gray-400 w-3 h-3"
            }`}
          />
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-md shadow-md transition-all"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;
