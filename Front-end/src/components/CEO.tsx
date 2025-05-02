

// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from "framer-motion";

// const leadershipData = [
//   {
//     name: "Surya Kumar",
//     title: "CEO & Managing Director | BigEBrains",
//     image: "/lovable-uploads/ceo.jpg",
//     quote: "We look forward to supercharging our growth with optimism and confidence, ready to seize the many opportunities ahead. Our growth strategy for the emerging digital and AI future is built on five strategic objectives."
//   },
//   {
//     name: "Bhanu",
//     title: "CTO | BigEBrains",
//     image: "/lovable-uploads/cto.jpeg",
//     quote: "At BigEBrains, we embrace AI and emerging technologies not just as tools, but as catalysts to reimagine how businesses create value in the digital era. The future is intelligent, adaptive, and customer-centric."
//   },
//   {
//     name: "Varun",
//     title: "CTO | BigEBrains",
//     image: "/lovable-uploads/cto2.jpg",
//     quote: "At BigEBrains, we embrace AI and emerging technologies not just as tools, but as catalysts to reimagine how businesses create value in the digital era. The future is intelligent, adaptive, and customer-centric."
//   }
  
// ];

// const CEO = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % leadershipData.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const { name, title, image, quote } = leadershipData[activeIndex];

//   return (
//     <section className="py-20" style={{ backgroundColor: '#FDFDFD' }}>
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-12">
//           <p className="text-[#111111] font-semibold mb-2">OUR PURPOSE</p>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
//             Harnessing AI and Human Ingenuity<br />
//             to Supercharge Progress.
//           </h2>
//         </div>

//         <div className="relative max-w-5xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 0.6 }}
//               className="bg-[#FFFFFF] rounded-lg shadow-md overflow-hidden border border-[#E0E0E0]"
//             >
//               <div className="flex flex-col md:flex-row">
//                 <div className="md:w-2/5">
//                   <img
//                     src={image}
//                     alt={name}
//                     className="w-full h-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
//                   <div className="mb-6 text-4xl font-bold text-[#111111]">"</div>
//                   <p className="text-xl text-[#555555] mb-6">{quote}</p>
                  
//                   <div className="mt-8">
//                     <h3 className="text-2xl font-bold text-[#111111]">{name}</h3>
//                     <p className="text-[#555555]">{title}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CEO;




import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const leadershipData = [
  {
    name: "Surya Kumar",
    title: "CEO & Managing Director | BigEBrains",
    image: "/lovable-uploads/ceo.jpg",
    quote: "We look forward to supercharging our growth with optimism and confidence, ready to seize the many opportunities ahead. Our growth strategy for the emerging digital and AI future is built on five strategic objectives."
  },
  {
    name: "Bhanu",
    title: "CTO | BigEBrains",
    image: "/lovable-uploads/cto.jpeg",
    quote: "At BigEBrains, we embrace AI and emerging technologies not just as tools, but as catalysts to reimagine how businesses create value in the digital era. The future is intelligent, adaptive, and customer-centric."
  },
  {
    name: "Varun",
    title: "CTO | BigEBrains",
    image: "/lovable-uploads/cto2.jpg",
    quote: "At BigEBrains, we embrace AI and emerging technologies not just as tools, but as catalysts to reimagine how businesses create value in the digital era. The future is intelligent, adaptive, and customer-centric."
  }
];

const CEO = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % leadershipData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, title, image, quote } = leadershipData[activeIndex];

  // Image animation variants
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
    exit: { opacity: 0, scale: 0.8, rotate: 5, transition: { duration: 0.6, ease: "easeIn" } }
  };

  // Infinite pulse effect animation for shadow/glow
  const pulseAnimation = {
    boxShadow: [
      '0 0 20px rgba(0, 0, 0, 0.15)',
      '0 0 40px rgba(0, 0, 0, 0.25)',
      '0 0 20px rgba(0, 0, 0, 0.15)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#FDFDFD' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-[#111111] font-semibold mb-2">OUR PURPOSE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
            Harnessing AI and Human Ingenuity<br />
            to Supercharge Progress.
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-[#FFFFFF] rounded-lg shadow-md overflow-hidden border border-[#E0E0E0]"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={image}
                      src={image}
                      alt={name}
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover={{ scale: 1.05 }}
                      whileInView={pulseAnimation}
                      className="w-full h-full object-cover object-center rounded-bl-lg rounded-tl-lg"
                      style={{ boxShadow: '0 0 20px rgba(0,0,0,0.15)' }}
                    />
                  </AnimatePresence>
                </div>

                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6 text-4xl font-bold text-[#111111]">"</div>
                  <p className="text-xl text-[#555555] mb-6">{quote}</p>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-[#111111]">{name}</h3>
                    <p className="text-[#555555]">{title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CEO;
