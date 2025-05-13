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

const IndustriesNonProfit = () => {
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
                src="/lovable-uploads/nonprofit.webp"
                alt="AI-Powered Staffing Solutions for Nonprofits"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-bold text-blue-600 mb-4">
                AI-Powered Staffing Solutions for Nonprofits
              </h1>
              <p className="text-gray-700 mb-4">
                At Big E Brains, we harness advanced AI technology to streamline recruitment for nonprofits. Our managed staffing solutions ensure precise talent matching, reduce time-to-fill, and promote equitable hiring practices.
              </p>
              <p className="text-gray-700 mb-4">
                By automating candidate sourcing and screening, we help nonprofits build agile, compliant, and diverse teams, enabling them to focus more on their mission and less on administrative tasks.
              </p>
              <p className="text-gray-700 mb-6">
                Partner with us to transform your nonprofit's recruitment process with intelligent staffing solutions that drive efficiency and support your organization's growth.
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

export default IndustriesNonProfit;