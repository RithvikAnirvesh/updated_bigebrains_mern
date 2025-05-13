import React, { useEffect } from "react";
import Footer from "@/components/Footer";

const AiDrivenWebDevelopment = () => {
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
              AI-Driven Web Development
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Create intelligent, responsive, and user-centric web applications powered by
              cutting-edge AI technologies.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl md:flex md:items-center">
            <div className="md:w-1/2 p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Smart Web Solutions
              </h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                Our AI-driven web development services combine modern frameworks with
                intelligent features to create dynamic, personalized user experiences.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                From automated content optimization to intelligent user interfaces,
                we build web applications that learn, adapt, and grow with your business.
              </p>
            </div>

            <div className="md:w-1/2 h-96 md:h-auto">
              <img
                src="\lovable-uploads\Ai driven web develop 3.webp"
                alt="AI-driven web development visualization"
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

export default AiDrivenWebDevelopment;