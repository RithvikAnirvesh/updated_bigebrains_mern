// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <img
//                 src="/lovable-uploads/59e46791-d996-4a67-b05e-14bd7ed6c172.png"
//                 alt="BigEBrains Logo"
//                 className="h-10 mr-2"
//               />
//             </Link>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-600 hover:text-bigebrains-blue font-medium">
//               Home
//             </Link>
//             <Link to="/solutions" className="text-gray-600 hover:text-bigebrains-blue font-medium">
//               Solutions
//             </Link>
//             <Link to="/about" className="text-gray-600 hover:text-bigebrains-blue font-medium">
//               About Us
//             </Link>
//             <Link to="/case-studies" className="text-gray-600 hover:text-bigebrains-blue font-medium">
//               Case Studies
//             </Link>
//             <Link to="/contact" className="text-gray-600 hover:text-bigebrains-blue font-medium">
//               Contact Us
//             </Link>
//           </div>

//           {/* CTA Button */}
//           <div className="hidden md:flex items-center">
//             <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white">
//               Schedule a free consultation
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button className="text-gray-600 hover:text-bigebrains-blue" onClick={toggleMenu}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden pt-4 pb-2">
//             <div className="flex flex-col space-y-3">
//               <Link to="/" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
//                 Home
//               </Link>
//               <Link to="/solutions" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
//                 Solutions
//               </Link>
//               <Link to="/about" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
//                 About Us
//               </Link>
//               <Link to="/case-studies" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
//                 Case Studies
//               </Link>
//               <Link to="/contact" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
//                 Contact Us
//               </Link>
//               <div className="pt-3">
//                 <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white w-full">
//                   Schedule a free consultation
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


/////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck, Workflow, TrendingUp, Settings2 } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/bbe.png" // ✅ Fixed path
                alt="BigEBrains Logo"
                className="h-10 mr-2"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <Link to="/" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Home
            </Link>

            {/* Solutions with dropdown */}
            <div className="relative group">
              <Link
                to="/solutions"
                className="text-gray-600 hover:text-bigebrains-blue font-medium cursor-pointer"
              >
                Solutions
              </Link>

              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300
                              fixed top-[64px] left-0 w-screen bg-white shadow-2xl z-50 py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 text-sm text-gray-800 px-6">
                  {/* Services */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Services</h3>
                    <ul className="space-y-2">
                      <li>Managed Services</li>
                      <li>IT Consulting & Advisory</li>
                      <li>Cyber Security</li>
                      <li>Web Development</li>
                      <li>Mobile Development</li>
                      <li>Cloud Services</li>
                    </ul>
                  </div>

                  {/* Business Challenges */}
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

                  {/* Industry Focus */}
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

            <Link to="/about" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              About Us
            </Link>
            <Link to="/case-studies" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Case Studies
            </Link>
          </div>

          {/* ✅ Top-right Contact Us */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white rounded-full px-6 py-2 font-medium hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-bigebrains-blue" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/solutions" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
                Solutions
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
                About Us
              </Link>
              <Link to="/case-studies" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
                Case Studies
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2" onClick={toggleMenu}>
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
