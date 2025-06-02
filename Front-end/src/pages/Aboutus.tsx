// import React from "react";

// const timelineData = [
//   {
//     title: "Who We Are",
//     text: "Big E Brains is a leading provider of AI Training, Talent Placement, Staff Augmentation, and AI Project Delivery. We help companies build future-ready teams and deploy intelligent solutions across diverse industries. We are redefining the future of work and innovation through the transformative power of Artificial Intelligence—empowering both individuals and businesses to thrive in a technology-first world.",
//     image: "/lovable-uploads/about.webp",
//     side: "right",
//   },
//   {
//     title: "Our Mission",
//     text: "At Big E Brains, our mission is to empower nonprofits by harnessing advanced AI technology to streamline recruitment processes. We aim to ensure precise talent matching, reduce time-to-fill, and promote equitable hiring practices, enabling organizations to build agile, compliant, and diverse teams while focusing more on their mission and less on administrative tasks.",
//     image: "/lovable-uploads/mission.webp",
//     side: "left",
//   },
//   {
//     title: "Our Vision",
//     text: "Our vision is to be the leading partner for nonprofits in revolutionizing recruitment through AI-driven solutions. We aspire to create a future where every nonprofit can effortlessly connect with the right talent, fostering inclusive and efficient teams that drive meaningful impact in their communities.",
//     image: "/lovable-uploads/vision.webp",
//     side: "right",
//   },
// ];

// const About = () => {
//   return (
//     <div className="container mx-auto px-4 py-12 relative">
//       <div className="text-center mb-16">
//         <span className="uppercase text-sm text-gray-500 tracking-widest">About Us</span>
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
//           Empowering Innovation Through AI
//         </h1>
//         <p className="mt-4 text-gray-500 text-sm">
//           Building future-ready teams and delivering intelligent solutions
//         </p>
//       </div>

//       <div className="relative border-l-2 border-gray-300 ml-4 md:ml-1">
//         {timelineData.map((item, index) => (
//           <div
//             key={index}
//             className={`mb-16 flex flex-col md:flex-row items-center ${
//               item.side === "right" ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             <div className="w-full md:w-1/2 px-4">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-64 object-cover rounded shadow-md"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-4 text-sm md:text-base text-gray-700 mt-4 md:mt-0">
//               <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
//               <p>{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-xs text-center text-gray-400 mt-12 max-w-4xl mx-auto">
//         At Big E Brains, we understand that the future of work is being reshaped by artificial intelligence. We're committed to helping organizations navigate this transformation by providing cutting-edge AI solutions, expert talent, and comprehensive training. Our focus is on creating sustainable, efficient, and innovative workplaces where technology enhances human potential and drives meaningful progress.
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';

const CareersSection = () => {
  return (
    <div className="bg-gray-50">
      {/* Who We Are Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                  About
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 leading-tight">
                  Join us in creating the future of AI.
                </h1>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                <p>
                  Big E Brains is a leading provider of AI Training, Talent Placement, Staff Augmentation, and AI Project Delivery. We help companies build future-ready teams and deploy intelligent solutions across diverse industries.
                </p>
                <p>
                  An engineer's playground where we make what we feel is right and needs to exist. A dedicated team rallying around a shared intention to make a positive impact by creating a safer world through AI. That's life at Big E Brains.
                </p>
              </div>

              {/* <div className="pt-4">
                <button className="inline-flex items-center text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors group">
                  Learn More 
                  <div className="ml-3 w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              </div> */}
            </div>

            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/about.webp"
                  alt="Engineer working with AI technology"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img
                  src="/lovable-uploads/mission.webp"
                  alt="Team collaboration"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/lovable-uploads/vision.webp"
                  alt="AI innovation workspace"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/lovable-uploads/about.webp"
                  alt="Technology solutions"
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Images Grid */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="space-y-4 pt-8">
                <img
                  src="/lovable-uploads/vision.webp"
                  alt="Future vision"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/lovable-uploads/mission.webp"
                  alt="Innovation workspace"
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/about.webp"
                  alt="AI innovation"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="/lovable-uploads/vision.webp"
                  alt="Technology advancement"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                  Our Future
                </span>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 leading-tight">
                  Shaping tomorrow with AI innovation.
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                <p>
                  Our vision is to be the leading partner for nonprofits in revolutionizing recruitment through AI-driven solutions. We aspire to create a future where every nonprofit can effortlessly connect with the right talent.
                </p>
                <p>
                  From concept to deployment in record time. A visionary approach where we build what organizations need to thrive. A committed team united around transforming how talent connects with purpose-driven organizations.
                </p>
              </div>

              {/* <div className="pt-4">
                <button className="inline-flex items-center text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors group">
                  Explore Vision
                  <div className="ml-3 w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                  Our Purpose
                </span>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 leading-tight">
                  Empowering organizations through intelligent solutions.
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                <p>
                  At Big E Brains, our mission is to empower nonprofits by harnessing advanced AI technology to streamline recruitment processes. We aim to ensure precise talent matching, reduce time-to-fill, and promote equitable hiring practices.
                </p>
                <p>
                  A systematic approach where we ensure organizations can focus on their core mission while we handle the complexity of talent acquisition. Building bridges between exceptional talent and meaningful work.
                </p>
              </div>

              {/* <div className="pt-4">
                <button className="inline-flex items-center text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors group">
                  Our Impact
                  <div className="ml-3 w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              </div> */}
            </div>

            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/mission.webp"
                  alt="Mission-driven work"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img
                  src="/lovable-uploads/vision.webp"
                  alt="Purpose and impact"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/lovable-uploads/about.webp"
                  alt="Empowering organizations"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/lovable-uploads/mission.webp"
                  alt="AI-powered solutions"
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersSection;