import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";

const EngineeringTechnical: React.FC = () => {
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
                src="/lovable-uploads/engineering-technical.webp"
                alt="Engineering Technical Services"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Engineering Technical Services
              </h1>
              <p className="text-gray-700 mb-4">
                We specialize in providing skilled engineers and technical professionals across various fields, including mechanical, electrical, civil, and software engineering. Our services help organizations bridge the talent gap and drive innovation in engineering projects.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're working on construction, infrastructure, or product development projects, our professionals ensure that your engineering solutions are delivered with the highest standards of quality and expertise.
              </p>
              <p className="text-gray-700 mb-6">
                Partner with us to access top-tier engineering talent tailored to your industry needs.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services Sidebar */}
          <div className="w-full md:w-72">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">
                Services
              </h2>

              {/* IT Staffing Section */}
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  IT Staffing
                </h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/recruitment-process"
                    className={`px-4 py-2 rounded-md text-sm text-center ${
                      isActive("/recruitment-process")
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    Recruitment Process
                  </Link>

                  <Link
                    to="/training-deployment"
                    className={`px-4 py-2 rounded-md text-sm text-center ${
                      isActive("/training-deployment")
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    Training and Development
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
                    to="/bfsi"
                    className={`px-4 py-2 rounded-md text-sm text-center ${
                      isActive("/bfsi")
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    Banking, Financial Services and Insurance (BFSI)
                  </Link>
                  <Link
                    to="/engineering-technical-services"
                    className={`px-4 py-2 rounded-md text-sm text-center ${
                        isActive("/engineering-technical-services")
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    >
                    Engineering Technical Services
                    </Link>

                  <Link
                    to="/construction"
                    className={`px-4 py-2 rounded-md text-sm text-center ${
                      isActive("/construction")
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    Construction
                  </Link>
                  <Link
                    to="/healthcare"
                    className={`px-4 py-2 rounded-md text-sm text-center ${
                      isActive("/healthcare")
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-100 hover:bg-gray-200"
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

      <Footer />
    </>
  );
};

export default EngineeringTechnical;
