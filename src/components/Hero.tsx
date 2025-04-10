
// import React from 'react';
// import { Button } from "@/components/ui/button";

// const Hero = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-bigebrains-gray to-white">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bigebrains-darkblue leading-tight mb-6">
//               We manage your IT, so you can manage your business.
//             </h1>
//             <p className="text-lg text-gray-600 mb-8 max-w-xl">
//               Take charge of your business continuity with innovative IT solutions
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white text-lg py-6 px-8">
//                 Schedule a free consultation
//               </Button>
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <div className="relative">
//               <div className="bg-white p-2 rounded-lg shadow-xl overflow-hidden">
//                 <img 
//                   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
//                   alt="IT solutions" 
//                   className="rounded-md w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.5 }); // re-triggers every time it's 50% in view

  return (
    <section className="py-20 bg-gradient-to-b from-bigebrains-gray to-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-bigebrains-darkblue leading-tight mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We manage your IT, so you can manage your business.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Take charge of your business continuity with innovative IT solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white text-lg py-6 px-8">
                Schedule a free consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="bg-white p-2 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt="IT solutions"
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
