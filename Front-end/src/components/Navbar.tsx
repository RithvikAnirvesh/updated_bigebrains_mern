

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Lottie from "lottie-react";
// import letsGoContactAnimation from "../asserts/animations/connect_animation.json";
// import { Menu, X, TrendingUp, ShieldCheck, Workflow, Settings2 } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleLottieClick = () => {
//     navigate("/contact");
//   };

//   const handleNavigation = (path) => {
//     if (path === "/" && window.location.pathname === "/") {
//       scrollToTop();
//     } else {
//       navigate(path);
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <button
//             onClick={() => handleNavigation("/")}
//             className="flex items-center focus:outline-none"
//           >
//             <div className="h-10 flex items-center overflow-visible">
//               <img
//                 src="/lovable-uploads/whitebeb.png"
//                 alt="BigEBrains Logo"
//                 className="h-10 mr-2 -my-3"
//               />
//             </div>
//           </button>

//           {/* Desktop Menu - Centered */}
//           <div className="hidden md:flex items-center justify-center flex-1 space-x-8 relative">
//             <button
//               onClick={() => handleNavigation("/")}
//               className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none relative transition-colors duration-200 group py-2"
//             >
//               Home
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//             </button>

//             {/* Solutions Dropdown - Hover based with responsive positioning */}
//             <div className="relative group">
//               <button
//                 className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none flex items-center relative transition-colors duration-200 py-2"
//                 aria-haspopup="true"
//               >
//                 Solutions
//                 <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </button>
              
//               {/* Dropdown with full width positioning - aligned to screen edges */}
//               <div className="fixed top-[64px] left-0 w-screen bg-white shadow-2xl z-50 py-10 border-t opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-800 px-6">
//                   <div>
//                     <h3 className="font-semibold text-lg mb-3">Services</h3>
//                     <ul className="space-y-2">
//                       <li>
//                         <Link to="/ai-powered-managed-services" className="hover:text-blue-600 block py-1">
//                           AI-Powered Managed Services
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/ai-strategy-advisory" className="hover:text-blue-600 block py-1">
//                           AI Strategy & Advisory
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/ai-enhanced-cybersecurity" className="hover:text-blue-600 block py-1">
//                           AI-Enhanced Cyber Security
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/ai-driven-web-development" className="hover:text-blue-600 block py-1">
//                           AI-Driven Web Development
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/ai-powered-mobile-apps" className="hover:text-blue-600 block py-1">
//                           AI-Powered Mobile Apps
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/ai-optimized-cloud-solutions" className="hover:text-blue-600 block py-1">
//                           AI-Optimized Cloud Solutions
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg mb-3">Business Challenges</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md transition-shadow">
//                         <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
//                         <span className="text-center">Digital Transformation</span>
//                       </div>
//                       <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md transition-shadow">
//                         <ShieldCheck className="h-8 w-8 text-blue-600 mb-2" />
//                         <span className="text-center">Security</span>
//                       </div>
//                       <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md transition-shadow">
//                         <Workflow className="h-8 w-8 text-blue-600 mb-2" />
//                         <span className="text-center">Automation</span>
//                       </div>
//                       <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md transition-shadow">
//                         <Settings2 className="h-8 w-8 text-blue-600 mb-2" />
//                         <span className="text-center">Gaining Efficiency</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg mb-3">Industry Focus</h3>
//                     <ul className="space-y-2">
//                       <li className="py-1">Construction</li>
//                       <li className="py-1">Education</li>
//                       <li className="py-1">Healthcare</li>
//                       <li className="py-1">Legal</li>
//                       <li className="py-1">Manufacturing</li>
//                       <li className="py-1">Non profit</li>
//                     </ul>
//                     <Link
//                       to="/solutions"
//                       className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
//                     >
//                       Learn more
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Staffing Services Dropdown - Hover based */}
//             <div className="relative group">
//               <button
//                 className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none flex items-center relative transition-colors duration-200 py-2"
//                 aria-haspopup="true"
//               >
//                 Staffing Services
//                 <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </button>
              
//               {/* Dropdown appears on hover */}
//               <div className="absolute top-full left-0 w-96 bg-white shadow-2xl z-50 py-4 rounded-md px-4 text-sm text-gray-800 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <h4 className="font-semibold text-sm mb-2">IT Staffing</h4>
//                 <ul className="mb-4 pl-4 list-disc text-gray-700 space-y-1">
//                   <li>
//                     <Link to="/recruitment-process" className="hover:text-blue-600 block py-1">
//                       Recruitment Process
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/training-deployment" className="hover:text-blue-600 block py-1">
//                       Training and Development
//                     </Link>
//                   </li>
//                 </ul>
//                 <h4 className="font-semibold text-sm mb-2">Non-IT Staffing</h4>
//                 <ul className="pl-4 list-disc text-gray-700 space-y-1">
//                   <li>
//                     <Link to="/bfsi" className="hover:text-blue-600 block py-1">
//                       Banking, Financial Services and Insurance (BFSI)
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/engineering-technical-services" className="hover:text-blue-600 block py-1">
//                       Engineering Technical Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/construction" className="hover:text-blue-600 block py-1">
//                       Construction
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/healthcare" className="hover:text-blue-600 block py-1">
//                       Healthcare
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none relative transition-colors duration-200 group py-2">
//               About Us
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
            
//             <Link to="/testimonials" className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none relative transition-colors duration-200 group py-2">
//               Testimonials
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
            
//             <Link to="/why-bigebrains" className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none relative transition-colors duration-200 group py-2">
//               Why BigEBrains
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </div>

//           {/* Lottie Contact Us - Positioned on the right */}
//           <div className="hidden md:block">
//             <button
//               onClick={handleLottieClick}
//               className="focus:outline-none flex items-center justify-center"
//               style={{ width: 100, height: 50 }}
//               title="Contact Us"
//               aria-label="Contact Us"
//             >
//               <Lottie
//                 animationData={letsGoContactAnimation}
//                 loop={true}
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               className="text-gray-600 hover:text-blue-600 focus:outline-none p-1"
//               onClick={toggleMenu}
//               aria-label="Toggle mobile menu"
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden pt-4 pb-2 border-t border-gray-200 mt-4">
//             <div className="flex flex-col space-y-3">
//               <button
//                 onClick={() => handleNavigation("/")}
//                 className="text-gray-600 font-medium py-2 text-left focus:outline-none relative transition-colors duration-200 group"
//               >
//                 Home
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </button>
              
//               <Link 
//                 to="/solutions" 
//                 className="text-gray-600 font-medium py-2 focus:outline-none relative transition-colors duration-200 group" 
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Solutions
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
              
//               {/* Mobile Staffing Services */}
//               <div className="flex flex-col">
//                 <span className="text-gray-600 font-medium py-2">Staffing Services</span>
//                 <div className="pl-6 space-y-2 text-sm text-gray-700">
//                   <div>
//                     <span className="font-semibold text-sm block mb-1">IT Staffing</span>
//                     <ul className="pl-4 space-y-1">
//                       <li>
//                         <Link 
//                           to="/recruitment-process" 
//                           onClick={() => setIsMenuOpen(false)} 
//                           className="hover:text-blue-600 block py-1"
//                         >
//                           Recruitment Process
//                         </Link>
//                       </li>
//                       <li>
//                         <Link 
//                           to="/training-deployment" 
//                           onClick={() => setIsMenuOpen(false)} 
//                           className="hover:text-blue-600 block py-1"
//                         >
//                           Training and Development
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                   <div>
//                     <span className="font-semibold text-sm block mb-1 pt-2">Non-IT Staffing</span>
//                     <ul className="pl-4 space-y-1">
//                       <li>
//                         <Link 
//                           to="/bfsi" 
//                           onClick={() => setIsMenuOpen(false)} 
//                           className="hover:text-blue-600 block py-1"
//                         >
//                           BFSI
//                         </Link>
//                       </li>
//                       <li>
//                         <Link 
//                           to="/engineering-technical-services" 
//                           onClick={() => setIsMenuOpen(false)} 
//                           className="hover:text-blue-600 block py-1"
//                         >
//                           Engineering Technical Services
//                         </Link>
//                       </li>
//                       <li>
//                         <Link 
//                           to="/construction" 
//                           onClick={() => setIsMenuOpen(false)} 
//                           className="hover:text-blue-600 block py-1"
//                         >
//                           Construction
//                         </Link>
//                       </li>
//                       <li>
//                         <Link 
//                           to="/healthcare" 
//                           onClick={() => setIsMenuOpen(false)} 
//                           className="hover:text-blue-600 block py-1"
//                         >
//                           Healthcare
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
              
//               <Link 
//                 to="/about" 
//                 className="text-gray-600 font-medium py-2 focus:outline-none relative transition-colors duration-200 group" 
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About Us
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
              
//               <Link 
//                 to="/testimonials" 
//                 className="text-gray-600 font-medium py-2 focus:outline-none relative transition-colors duration-200 group" 
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Testimonials
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
              
//               <Link 
//                 to="/why-bigebrains" 
//                 className="text-gray-600 font-medium py-2 focus:outline-none relative transition-colors duration-200 group" 
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Why BigEBrains
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
              
//               {/* Mobile Lottie Contact Us */}
//               <button
//                 onClick={() => {
//                   setIsMenuOpen(false);
//                   navigate("/contact");
//                 }}
//                 className="cursor-pointer flex justify-center focus:outline-none mx-auto"
//                 style={{ width: 80, height: 60 }}
//                 title="Contact Us"
//                 aria-label="Contact Us"
//               >
//                 <Lottie
//                   animationData={letsGoContactAnimation}
//                   loop={true}
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import letsGoContactAnimation from "../asserts/animations/connect_animation.json";
import { Menu, X, TrendingUp, ShieldCheck, Workflow, Settings2 } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLottieClick = () => {
    navigate("/contact");
  };

  const handleNavigation = (path) => {
    if (path === "/" && window.location.pathname === "/") {
      scrollToTop();
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center focus:outline-none"
          >
            <div className="h-10 flex items-center overflow-visible">
              <img
                src="/lovable-uploads/whitebeb.png"
                alt="BigEBrains Logo"
                className="h-10 mr-2 -my-3"
              />
            </div>
          </button>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8 relative">
            <button
              onClick={() => handleNavigation("/")}
              className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none relative transition-colors duration-200 group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Solutions Dropdown - Hover based with responsive positioning */}
            <div className="relative group">
              <button
                className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none flex items-center relative transition-colors duration-200 py-2"
                aria-haspopup="true"
              >
                Solutions
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {/* Dropdown with full width positioning - aligned to screen edges */}
              <div className="fixed top-[64px] left-0 w-screen bg-white shadow-2xl z-50 py-10 border-t opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-800 px-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/ai-powered-managed-services" className="hover:text-blue-600 block py-1">
                          AI-Powered Managed Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-strategy-advisory" className="hover:text-blue-600 block py-1">
                          AI Strategy & Advisory
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-enhanced-cybersecurity" className="hover:text-blue-600 block py-1">
                          AI-Enhanced Cyber Security
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-driven-web-development" className="hover:text-blue-600 block py-1">
                          AI-Driven Web Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-powered-mobile-apps" className="hover:text-blue-600 block py-1">
                          AI-Powered Mobile Apps
                        </Link>
                      </li>
                      <li>
                        <Link to="/ai-optimized-cloud-solutions" className="hover:text-blue-600 block py-1">
                          AI-Optimized Cloud Solutions
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Business Challenges</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md transition-shadow">
                        <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-center">Digital Transformation</span>
                      </div>
                      <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md transition-shadow">
                        <ShieldCheck className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-center">Security</span>
                      </div>
                      <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md transition-shadow">
                        <Workflow className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-center">Automation</span>
                      </div>
                      <div className="flex flex-col items-center border p-4 rounded-lg hover:shadow-md transition-shadow">
                        <Settings2 className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-center">Gaining Efficiency</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Industry Focus</h3>
                    <ul className="space-y-2">
                      <li className="py-1">Construction</li>
                      <li className="py-1">Education</li>
                      <li className="py-1">Healthcare</li>
                      <li className="py-1">Legal</li>
                      <li className="py-1">Manufacturing</li>
                      <li className="py-1">Non profit</li>
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

            {/* Staffing Services Dropdown - Hover based */}
            <div className="relative group">
              <button
                className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none flex items-center relative transition-colors duration-200 py-2"
                aria-haspopup="true"
              >
                Staffing Services
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {/* Dropdown appears on hover */}
              <div className="absolute top-full left-0 w-96 bg-white shadow-2xl z-50 py-4 rounded-md px-4 text-sm text-gray-800 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <h4 className="font-semibold text-sm mb-2">IT Staffing</h4>
                <ul className="mb-4 pl-4 list-disc text-gray-700 space-y-1">
                  <li>
                    <Link to="/recruitment-process" className="hover:text-blue-600 block py-1">
                      Recruitment Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/training-deployment" className="hover:text-blue-600 block py-1">
                      Training and Development
                    </Link>
                  </li>
                </ul>
                <h4 className="font-semibold text-sm mb-2">Non-IT Staffing</h4>
                <ul className="pl-4 list-disc text-gray-700 space-y-1">
                  <li>
                    <Link to="/bfsi" className="hover:text-blue-600 block py-1">
                      Banking, Financial Services and Insurance (BFSI)
                    </Link>
                  </li>
                  <li>
                    <Link to="/engineering-technical-services" className="hover:text-blue-600 block py-1">
                      Engineering Technical Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/construction" className="hover:text-blue-600 block py-1">
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link to="/healthcare" className="hover:text-blue-600 block py-1">
                      Healthcare
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none relative transition-colors duration-200 group py-2">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link to="/testimonials" className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none relative transition-colors duration-200 group py-2">
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link to="/why-bigebrains" className="text-gray-600 hover:text-blue-600 font-medium focus:outline-none relative transition-colors duration-200 group py-2">
              Why BigEBrains
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Lottie Contact Us - Positioned on the right with increased size */}
          <div className="hidden md:block">
            <button
              onClick={handleLottieClick}
              className="focus:outline-none flex items-center justify-center"
              style={{ width: 190, height: 40 }}
              title="Contact Us"
              aria-label="Contact Us"
            >
              <Lottie
                animationData={letsGoContactAnimation}
                loop={true}
                style={{ width: "100%", height: "100%" }}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-1"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-200 mt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavigation("/")}
                className="text-gray-600 font-medium py-2 text-left focus:outline-none relative transition-colors duration-200 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              <Link 
                to="/solutions" 
                className="text-gray-600 font-medium py-2 focus:outline-none relative transition-colors duration-200 group" 
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Mobile Staffing Services */}
              <div className="flex flex-col">
                <span className="text-gray-600 font-medium py-2">Staffing Services</span>
                <div className="pl-6 space-y-2 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold text-sm block mb-1">IT Staffing</span>
                    <ul className="pl-4 space-y-1">
                      <li>
                        <Link 
                          to="/recruitment-process" 
                          onClick={() => setIsMenuOpen(false)} 
                          className="hover:text-blue-600 block py-1"
                        >
                          Recruitment Process
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/training-deployment" 
                          onClick={() => setIsMenuOpen(false)} 
                          className="hover:text-blue-600 block py-1"
                        >
                          Training and Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-sm block mb-1 pt-2">Non-IT Staffing</span>
                    <ul className="pl-4 space-y-1">
                      <li>
                        <Link 
                          to="/bfsi" 
                          onClick={() => setIsMenuOpen(false)} 
                          className="hover:text-blue-600 block py-1"
                        >
                          BFSI
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/engineering-technical-services" 
                          onClick={() => setIsMenuOpen(false)} 
                          className="hover:text-blue-600 block py-1"
                        >
                          Engineering Technical Services
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/construction" 
                          onClick={() => setIsMenuOpen(false)} 
                          className="hover:text-blue-600 block py-1"
                        >
                          Construction
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/healthcare" 
                          onClick={() => setIsMenuOpen(false)} 
                          className="hover:text-blue-600 block py-1"
                        >
                          Healthcare
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="text-gray-600 font-medium py-2 focus:outline-none relative transition-colors duration-200 group" 
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                to="/testimonials" 
                className="text-gray-600 font-medium py-2 focus:outline-none relative transition-colors duration-200 group" 
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                to="/why-bigebrains" 
                className="text-gray-600 font-medium py-2 focus:outline-none relative transition-colors duration-200 group" 
                onClick={() => setIsMenuOpen(false)}
              >
                Why BigEBrains
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Mobile Lottie Contact Us */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/contact");
                }}
                className="cursor-pointer flex justify-center focus:outline-none mx-auto"
                style={{ width: 80, height: 60 }}
                title="Contact Us"
                aria-label="Contact Us"
              >
                <Lottie
                  animationData={letsGoContactAnimation}
                  loop={true}
                  style={{ width: "100%", height: "100%" }}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;