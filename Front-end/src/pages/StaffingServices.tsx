import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StaffingServices: React.FC = () => {
  const location = useLocation();

  // Helper to check if the current path matches the link
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      

      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/lovable-uploads/staffing-services.webp"
              alt="Staffing Services"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Staffing Services
              </h1>
              <p className="text-gray-700 mb-4">
                BigEBrains specializes in delivering staffing solutions that help companies find the right talent at the right time. Whether you're looking for temporary professionals, full-time employees, or project-based specialists, our services ensure you have access to skilled candidates that fit your business needs and culture.
              </p>
              <p className="text-gray-700 mb-4">
                We support IT, Non-IT, and domain-specific hiring needs through our refined recruitment process, rich candidate database, and expert sourcing capabilities. We partner with clients across industries to provide seamless onboarding, flexible engagement models, and end-to-end talent lifecycle management.
              </p>
              <p className="text-gray-700 mb-6">
                Reach out to us for customized staffing strategies tailored to your goals.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Services Sidebar */}
          <div className="w-full md:w-72">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">
                Services
              </h2>
              <div className="flex flex-col space-y-4">

                {/* IT Staffing Section */}
                <div>
                  <h3 className="text-md font-semibold text-gray-800 mb-2">
                    IT Staffing
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/it-staffing"
                      className={`px-4 py-2 rounded-md text-sm text-center ${
                        isActive("/it-staffing")
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      IT Staffing
                    </Link>
                    <Link
                      to="/corporate-connect"
                      className={`px-4 py-2 rounded-md text-sm text-center ${
                        isActive("/corporate-connect")
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      Corporate Connect
                    </Link>
                    <Link
                      to="/staffing-services"
                      className={`px-4 py-2 rounded-md text-sm text-center ${
                        isActive("/staffing-services")
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      Staffing Services
                    </Link>
                    <Link
                      to="/payroll-management"
                      className={`px-4 py-2 rounded-md text-sm text-center ${
                        isActive("/payroll-management")
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      Payroll Management
                    </Link>
                    <Link
                      to="/recruitment-process-outsourcing"
                      className={`px-4 py-2 rounded-md text-sm text-center ${
                        isActive("/recruitment-process-outsourcing")
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      Recruitment Process Outsourcing
                    </Link>
                  </div>
                </div>

                {/* Non-IT Staffing Section */}
                <div>
                  <h3 className="text-md font-semibold text-gray-800 mb-2">
                    Non-IT Staffing
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/freshers-placements"
                      className={`px-4 py-2 rounded-md text-sm text-center ${
                        isActive("/freshers-placements")
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      Freshers Placements
                    </Link>
                    <Link
                      to="/training-deployment"
                      className={`px-4 py-2 rounded-md text-sm text-center ${
                        isActive("/training-deployment")
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      Training and Deployment Services
                    </Link>
                    <Link
                      to="/job-fairs"
                      className={`px-4 py-2 rounded-md text-sm text-center ${
                        isActive("/job-fairs")
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      Job Fairs
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

export default StaffingServices;
