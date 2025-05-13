import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Custom link component that scrolls to top on click
const ScrollToTopLink = ({ to, className, children }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

const IndustriesTransportation = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  
  // This will scroll to top when the component mounts or location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[400px] overflow-hidden">
              <img
                src="/lovable-uploads/tranport.webp"
                alt="AI in Transportation & Logistics"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-bold text-blue-600 mb-4">
                AI in Transportation & Logistics
              </h1>
              <p className="text-gray-700 mb-4">
                Artificial Intelligence is revolutionizing the transport and logistics industry by enabling faster deliveries, smarter route planning, real-time tracking, and improved operational efficiency. From supply chain management to last-mile delivery, AI is helping companies save time, reduce costs, and increase customer satisfaction.
              </p>
              <p className="text-gray-700 mb-4">
                Our AI solutions include route optimization algorithms that evaluate traffic patterns, weather conditions, and schedules to suggest the most efficient delivery paths, reducing fuel consumption and environmental impact. Predictive maintenance systems use machine learning models to analyze vehicle and equipment sensor data, identifying potential failures before they occur, minimizing downtime and prolonging asset lifespan.
              </p>
              <p className="text-gray-700 mb-4">
                We also implement AI-powered demand forecasting that analyzes historical data and external factors like holidays or weather, aiding better inventory and workforce planning. Our warehouse automation solutions feature AI-driven robots that handle picking, packing, sorting, and shelving with speed and precision. Additionally, we offer real-time tracking systems that provide end-to-end shipment visibility and smart fleet management platforms that monitor fuel usage, schedule maintenance, and promote safer driving practices.
              </p>
              <p className="text-gray-700 mb-6">
                Partner with us to transform your logistics operations with AI-powered solutions that drive efficiency, reduce costs, and enhance customer satisfaction. Our comprehensive approach leads to reduced delivery delays, lower operational costs, improved customer satisfaction, and enhanced sustainability, driving your business toward a smarter, faster, and more resilient future.
              </p>
              <ScrollToTopLink
                to="/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
              >
                Contact Us
              </ScrollToTopLink>
            </div>
          </div>

          {/* AI-Powered Industry Links Sidebar */}
          <div className="w-full md:w-72">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">
                AI-Powered Industries
              </h2>
              <div className="flex flex-col space-y-2">
                <ScrollToTopLink
                  to="/industry-manufacturing"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/industry-manufacturing")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Industry & Manufacturing
                </ScrollToTopLink>
                <ScrollToTopLink
                  to="/transportation-logistics"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/transportation-logistics")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Transportation & Logistics
                </ScrollToTopLink>
                <ScrollToTopLink
                  to="/medicine-healthcare"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/medicine-healthcare")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Medicine and Health Care
                </ScrollToTopLink>
                <ScrollToTopLink
                  to="/banks-insurance"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/banks-insurance")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Banks & Insurance
                </ScrollToTopLink>
                <ScrollToTopLink
                  to="/consulting-providers"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/consulting-providers")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Consulting Providers
                </ScrollToTopLink>
                <ScrollToTopLink
                  to="/non-profit"
                  className={`px-4 py-2 rounded-md text-sm text-center ${
                    isActive("/non-profit")
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Non-Profit
                </ScrollToTopLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IndustriesTransportation;