import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShieldCheck, Workflow, TrendingUp, Settings2 } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                scrollToTop();
              }
            }}
          >
            <div className="h-10 flex items-center overflow-visible">
              <img
                src="/lovable-uploads/whitebeb.png"
                alt="BigEBrains Logo"
                className="h-10 mr-2 -my-3"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <Link
              to="/"
              className="text-gray-600 hover:text-bigebrains-blue font-medium"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <Link
                to="/solutions"
                className="text-gray-600 hover:text-bigebrains-blue font-medium cursor-pointer"
              >
                Solutions
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 fixed top-[64px] left-0 w-screen bg-white shadow-2xl z-50 py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 text-sm text-gray-800 px-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/ai-powered-managed-services" className="hover:text-blue-600">
                          AI-Powered Managed Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-strategy-advisory" className="hover:text-blue-600">
                          AI Strategy & Advisory
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-enhanced-cybersecurity" className="hover:text-blue-600">
                          AI-Enhanced Cyber Security
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-driven-web-development" className="hover:text-blue-600">
                          AI-Driven Web Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-powered-mobile-apps" className="hover:text-blue-600">
                          AI-Powered Mobile Apps
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-optimized-cloud-solutions" className="hover:text-blue-600">
                          AI-Optimized Cloud Solutions
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Business Challenges</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md">
                        <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-center">Digital Transformation</span>
                      </div>
                      <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md">
                        <ShieldCheck className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-center">Security</span>
                      </div>
                      <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md">
                        <Workflow className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-center">Automation</span>
                      </div>
                      <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md">
                        <Settings2 className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-center">Gaining Efficiency</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Industry Focus</h3>
                    <ul className="space-y-2">
                      <li>Construction</li>
                      <li>Education</li>
                      <li>Healthcare</li>
                      <li>Legal</li>
                      <li>Manufacturing</li>
                      <li>Non profit</li>
                    </ul>
                    <Link
                      to="/solutions"
                      className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Staffing Services Dropdown */}
            <div className="relative group">
              <span className="text-gray-600 hover:text-bigebrains-blue font-medium cursor-pointer">
                Staffing Services
              </span>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute top-full left-0 w-[24rem] bg-white shadow-2xl z-50 py-4 rounded-md px-4 text-sm text-gray-800">
                <h4 className="font-semibold text-base mb-2">IT Staffing</h4>
                <ul className="mb-4 pl-4 list-disc text-gray-700 space-y-1">
                  <li>
                    <Link to="/recruitment-process" className="hover:text-blue-600">
                      Recruitment Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/training-deployment" className="hover:text-blue-600">
                      Training and Development
                    </Link>
                  </li>
                </ul>

                <h4 className="font-semibold text-base mb-2">Non-IT Staffing</h4>
                <ul className="pl-4 list-disc text-gray-700 space-y-1">
                  <li>
                    <Link to="/bfsi" className="hover:text-blue-600">
                      Banking, Financial Services and Insurance (BFSI)
                    </Link>
                  </li>
                  <li>
                    <Link to="/engineering-technical-services" className="hover:text-blue-600">
                      Engineering Technical Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/construction" className="hover:text-blue-600">
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link to="/healthcare" className="hover:text-blue-600">
                      Healthcare
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/about" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              About Us
            </Link>
            <Link to="/testimonials" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Testimonials
            </Link>
            <Link to="/why-bigebrains" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Why BigEBrains
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white rounded-full px-6 py-2 font-medium hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-bigebrains-blue" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 font-medium py-2" onClick={(e) => {
                toggleMenu();
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  scrollToTop();
                }
              }}>
                Home
              </Link>

              <Link to="/solutions" className="text-gray-600 font-medium py-2" onClick={toggleMenu}>
                Solutions
              </Link>

              {/* Mobile Staffing Services Dropdown */}
              <div className="flex flex-col">
                <span className="text-gray-600 font-medium py-2">Staffing Services</span>

                <div className="pl-6 space-y-1 text-sm text-gray-700">
                  <span className="font-semibold">• IT Staffing</span>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <Link to="/recruitment-process" onClick={toggleMenu} className="hover:text-blue-600">
                        Recruitment Process
                      </Link>
                    </li>
                    <li>
                      <Link to="/training-deployment" onClick={toggleMenu} className="hover:text-blue-600">
                        Training and Development
                      </Link>
                    </li>
                  </ul>

                  <span className="font-semibold pt-2">• Non-IT Staffing</span>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <Link to="/bfsi" onClick={toggleMenu} className="hover:text-blue-600">
                        BFSI
                      </Link>
                    </li>
                    <li>
                      <Link to="/engineering-technical-services" onClick={toggleMenu} className="hover:text-blue-600">
                        Engineering Technical Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/construction" onClick={toggleMenu} className="hover:text-blue-600">
                        Construction
                      </Link>
                    </li>
                    <li>
                      <Link to="/healthcare" onClick={toggleMenu} className="hover:text-blue-600">
                        Healthcare
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link to="/about" className="text-gray-600 font-medium py-2" onClick={toggleMenu}>
                About Us
              </Link>
              <Link to="/testimonials" className="text-gray-600 font-medium py-2" onClick={toggleMenu}>
                Testimonials
              </Link>
              <Link to="/why-bigebrains" className="text-gray-600 font-medium py-2" onClick={toggleMenu}>
                Why BigEBrains
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 font-medium py-2" 
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
