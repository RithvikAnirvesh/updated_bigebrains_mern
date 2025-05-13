import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IndustriesManufacturing: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Added Navbar component here */}
    
      
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[400px] overflow-hidden">
              <img
                src="/lovable-uploads/industy.webp"
                alt="AI in Industry & Manufacturing"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-bold text-blue-600 mb-4">
                AI in Industry & Manufacturing
              </h1>
              <p className="text-gray-700 mb-4">
                Artificial Intelligence (AI) is transforming industries worldwide by enabling smarter decision-making, automation, and innovation. In the Automotive & Manufacturing sector, AI is reshaping operations through self-driving vehicles, predictive maintenance, advanced robotics, supply chain automation, and sophisticated quality control systems.
              </p>
              <p className="text-gray-700 mb-4">
                Our AI solutions enable real-time monitoring of equipment health, anomaly detection, and automated quality control, helping businesses reduce waste and improve product consistency. Predictive analytics also allows manufacturers to anticipate machine failures before they happen, while robotics and automation streamline production processes.
              </p>
              <p className="text-gray-700 mb-6">
                Partner with us to build intelligent manufacturing systems that adapt and learn from data — transforming traditional operations into competitive, future-ready infrastructures powered by cutting-edge AI technology.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* AI-Powered Industry Links Sidebar */}
          <div className="w-full md:w-72">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">
                AI-Powered Industries
              </h2>
              <div className="flex flex-col space-y-2">
                <Link
                  to="/industry-manufacturing"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/industry-manufacturing")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Industry & Manufacturing
                </Link>
                <Link
                  to="/transportation-logistics"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/transportation-logistics")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Transportation & Logistics
                </Link>
                <Link
                  to="/medicine-healthcare"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/medicine-healthcare")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Medicine and Health Care
                </Link>
                <Link
                  to="/banks-insurance"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/banks-insurance")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Banks & Insurance
                </Link>
                <Link
                  to="/consulting-providers"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/consulting-providers")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Consulting Providers
                </Link>
                <Link
                  to="/non-profit"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/non-profit")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Non-Profit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IndustriesManufacturing;