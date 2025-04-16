
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


import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);
  

  return (
    <section className="py-20 bg-gradient-to-b from-bigebrains-gray to-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-bigebrains-darkblue leading-tight mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We manage your IT, so you can manage your business.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Take charge of your business continuity with innovative IT solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            ><Button className="bg-white border border-blue-500 text-black text-lg py-6 px-8 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:bg-blue-700 hover:text-white transition-all duration-300">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
              </svg>
              Schedule a Free Consultant
            </span>
          </Button>
          


            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
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
