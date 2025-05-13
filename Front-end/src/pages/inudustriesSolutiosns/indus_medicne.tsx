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

const IndustriesMedicine = () => {
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
                src="/lovable-uploads/medical.webp"
                alt="AI in Medicine and Healthcare"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-bold text-blue-600 mb-4">
                AI in Medicine and Healthcare
              </h1>
              <p className="text-gray-700 mb-4">
                Artificial Intelligence is profoundly transforming modern medicine and healthcare by enabling early disease detection, robotic surgeries, and personalized treatment plans. AI-powered diagnostic systems analyze medical images like X-rays, MRIs, and CT scans, identifying conditions such as cancer, pneumonia, and diabetic retinopathy—often earlier and more accurately than traditional methods.
              </p>
              <p className="text-gray-700 mb-4">
                Our AI solutions include machine learning systems that help doctors tailor treatment plans by considering a patient's history, genetics, and lifestyle, leading to better outcomes and fewer side effects. In drug discovery, our AI accelerates the identification of potential compounds and predicts drug interactions, significantly cutting down development time and costs. We also implement virtual health assistants and chatbots that offer 24/7 medical support, answering questions, scheduling appointments, and sending medication reminders.
              </p>
              <p className="text-gray-700 mb-4">
                Additionally, our AI-powered robotic surgery systems enable greater precision and faster recovery times. We offer predictive analytics that uses vast health data to foresee disease progression, hospital readmissions, or outbreaks, supporting proactive healthcare. Our natural language processing solutions enhance electronic health record (EHR) management by extracting meaningful insights and reducing doctors' administrative workloads. We also provide remote patient monitoring through wearable devices and IoT systems that track vital signs in real time—crucial for managing chronic conditions.
              </p>
              <p className="text-gray-700 mb-6">
                Partner with us to revolutionize your healthcare delivery with AI solutions that improve diagnostic accuracy, accelerate drug development, reduce operational costs, and significantly enhance the patient experience. Our comprehensive approach makes healthcare smarter, more personalized, and more accessible.
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

export default IndustriesMedicine;