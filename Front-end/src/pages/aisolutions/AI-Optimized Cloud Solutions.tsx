import React, { useEffect } from "react";
import Footer from "@/components/Footer";

const AiOptimizedCloudSolutions = () => {
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
              AI-Optimized Cloud Solutions
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage the power of AI to optimize your cloud infrastructure and
              maximize operational efficiency.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl md:flex md:items-center">
            <div className="md:w-1/2 p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Intelligent Cloud Management
              </h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                Our AI-optimized cloud solutions provide automated resource management,
                predictive scaling, and intelligent cost optimization for your cloud infrastructure.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Harness the power of machine learning to streamline operations, reduce costs,
                and ensure optimal performance across your cloud environment.
              </p>
            </div>

            <div className="md:w-1/2 h-96 md:h-auto">
              <img
                src="\lovable-uploads\AI OPTIMIZED CLOUD SOLUTIONS.webp"
                alt="AI-optimized cloud solutions visualization"
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

export default AiOptimizedCloudSolutions;