import React, { useEffect } from "react";
import Footer from "@/components/Footer";

const AiEnhancedCyberSecurity = () => {
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
              AI-Enhanced Cyber Security
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Protect your digital assets with advanced AI-powered security solutions
              that adapt and evolve with emerging threats.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl md:flex md:items-center">
            <div className="md:w-1/2 p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Next-Generation Security with AI
              </h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                Our AI-enhanced cybersecurity solutions provide real-time threat detection,
                automated response systems, and predictive security analytics to keep your
                business safe in an increasingly complex digital landscape.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Leveraging machine learning and behavioral analytics, we help you stay
                one step ahead of potential security threats while maintaining compliance
                with industry standards.
              </p>
            </div>

            <div className="md:w-1/2 h-96 md:h-auto">
              <img
                src="/lovable-uploads/cybersecurity.webp"
                alt="AI-powered cybersecurity visualization"
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

export default AiEnhancedCyberSecurity;