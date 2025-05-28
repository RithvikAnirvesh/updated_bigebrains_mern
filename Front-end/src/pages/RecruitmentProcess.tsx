import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";

const RecruitmentProcess: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
     

      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[300px] overflow-hidden">
              <img
                src="/lovable-uploads/recruitment-process.webp"
                alt="Recruitment Process Outsourcing"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Recruitment Process Outsourcing
              </h1>
              <p className="text-gray-700 mb-4">
                Our Recruitment Process Outsourcing (RPO) services are designed
                to optimize hiring by integrating seamlessly with your HR
                function. We manage the entire recruitment process—from sourcing
                and screening to onboarding—while reducing time-to-hire and
                improving candidate quality.
              </p>
              <p className="text-gray-700 mb-4">
                We bring industry expertise, recruitment technology, and
                dedicated resources to scale your hiring needs efficiently,
                whether you're scaling up rapidly or looking to improve
                long-term workforce planning.
              </p>
              <p className="text-gray-700 mb-6">
                Get in touch to explore how we can tailor a recruitment strategy
                that fits your business goals.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Enhanced Services Sidebar */}
          <div className="w-full md:w-72">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Main Services Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h2 className="text-xl font-bold text-white tracking-wide">
                  Services
                </h2>
              </div>

              <div className="p-4">
                {/* IT Staffing Section */}
                <div className="mb-6">
                  <div className="relative mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 pb-2 relative">
                      IT Staffing
                      <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></div>
                    </h3>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-2">
                    <Link
                      to="/recruitment-process"
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive("/recruitment-process")
                          ? "bg-blue-600 text-white shadow-md transform scale-105"
                          : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                      }`}
                    >
                      Recruitment Process
                    </Link>

                    <Link
                      to="/training-deployment"
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive("/training-deployment")
                          ? "bg-blue-600 text-white shadow-md transform scale-105"
                          : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                      }`}
                    >
                      Training and Development
                    </Link>
                  </div>
                </div>

                {/* Non-IT Staffing Section */}
                <div>
                  <div className="relative mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 pb-2 relative">
                      Non-IT Staffing
                      <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></div>
                    </h3>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-2">
                    <Link
                      to="/bfsi"
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive("/bfsi")
                          ? "bg-blue-600 text-white shadow-md transform scale-105"
                          : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                      }`}
                    >
                      Banking, Financial Services and Insurance (BFSI)
                    </Link>
                    
                    <Link
                      to="/engineering-technical-services"
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive("/engineering-technical-services")
                          ? "bg-blue-600 text-white shadow-md transform scale-105"
                          : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                      }`}
                    >
                      Engineering Technical Services
                    </Link>

                    <Link
                      to="/construction"
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive("/construction")
                          ? "bg-blue-600 text-white shadow-md transform scale-105"
                          : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                      }`}
                    >
                      Construction
                    </Link>
                    
                    <Link
                      to="/healthcare"
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive("/healthcare")
                          ? "bg-blue-600 text-white shadow-md transform scale-105"
                          : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                      }`}
                    >
                      Healthcare
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RecruitmentProcess;