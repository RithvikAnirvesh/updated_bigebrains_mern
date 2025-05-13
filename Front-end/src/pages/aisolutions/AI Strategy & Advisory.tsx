import React, { useEffect } from "react";
import Footer from "@/components/Footer";

const AiStrategyAdvisory = () => {
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
              AI Strategy & Advisory
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your business with expert AI strategy consulting and implementation guidance
              tailored to your unique needs.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl md:flex md:items-center">
            <div className="md:w-1/2 p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Strategic AI Implementation
              </h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                Our AI strategy experts help you identify opportunities, assess risks, and develop
                a comprehensive roadmap for successful AI implementation in your organization.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                From initial assessment to full-scale deployment, we provide the guidance and
                support needed to maximize your AI investment and drive business growth.
              </p>
            </div>

            <div className="md:w-1/2 h-96 md:h-auto">
              <img
                src="\lovable-uploads\Ai strategy and advisory 3.webp"
                alt="AI strategy consulting visualization"
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

export default AiStrategyAdvisory;