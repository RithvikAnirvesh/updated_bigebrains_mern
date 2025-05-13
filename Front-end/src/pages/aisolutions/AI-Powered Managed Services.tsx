import React, { useEffect } from "react";
import Footer from "@/components/Footer";

const AiPoweredManagedServices = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              AI Services & Solutions
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Empower your business with cutting-edge AI technologies designed
              to streamline operations, enhance decision-making, and drive innovation.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl md:flex md:items-center">
            <div className="md:w-1/2 p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Intelligent AI-Powered Solutions for Modern Enterprises
              </h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                At Big E Brains, we integrate AI-powered managed services into our staffing solutions to enhance efficiency and effectiveness. By leveraging artificial intelligence, we automate and refine recruitment processes, 
                ensuring optimal talent matching and streamlined hiring workflows.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                This approach not only accelerates the placement cycle but also improves the quality of candidate selection, aligning with our mission to provide equitable employment opportunities. Our commitment to harnessing 
                advanced technologies reflects our dedication to strengthening the workforce.
              </p>
            </div>

            <div className="md:w-1/2 h-96 md:h-auto">
              <img
                src="\lovable-uploads\non profit.webp"
                alt="Team collaborating with AI technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiPoweredManagedServices;