
// import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";

// const Footer = () => {
//   return (
//     <footer className="bg-bigebrains-darkblue text-white">
//       <div className="container mx-auto px-4 md:px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <div>
//             <h3 className="text-xl font-bold mb-6">Solutions</h3>
//             <ul className="space-y-4">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Managed Services</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">IT Consulting & Advisory</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cyber Security</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-6">Solutions</h3>
//             <ul className="space-y-4">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Development</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cloud Services</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Network Connectivity</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ERP Solutions</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-6">Company</h3>
//             <ul className="space-y-4">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-6">Solutions</h3>
//             <ul className="space-y-4">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Reviews & awards</a></li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-bigebrains-blue pt-8 mb-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Don't miss out updates</h3>
//               <div className="flex space-x-4 mb-6">
//                 <Input
//                   type="email"
//                   placeholder="Your email address"
//                   className="bg-bigebrains-blue border-bigebrains-blue text-white placeholder:text-gray-300"
//                 />
//                 <Button className="bg-white text-bigebrains-darkblue hover:bg-gray-200">
//                   Send
//                 </Button>
//               </div>
//               <div className="flex items-start space-x-2">
//                 <Checkbox id="privacy" />
//                 <Label htmlFor="privacy" className="text-sm text-gray-300">
//                   I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.
//                 </Label>
//               </div>
//             </div>
            
//             <div>
//               <Button className="mb-6 bg-bigebrains-blue hover:bg-bigebrains-lightblue text-white w-full md:w-auto">
//                 Schedule consultation
//               </Button>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-gray-300">Seventh Ave, 20th Floor<br />New York, NY 10018</span>
//                 </li>
//                 <li className="flex items-center">
//                   <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
//                   <a href="tel:1-800-356-8933" className="text-gray-300 hover:text-white transition-colors">
//                     T: 1-800-356-8933
//                   </a>
//                 </li>
//                 <li className="flex items-center">
//                   <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
//                   <a href="mailto:info@bigebrains@gmail.com" className="text-gray-300 hover:text-white transition-colors">
//                     info@bigebrains@gmail.com
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-bigebrains-blue pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex space-x-6 mb-4 md:mb-0">
//               <a href="#" className="text-gray-300 hover:text-white text-sm">Terms & Conditions</a>
//               <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
//             </div>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Linkedin className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


///////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaFacebook,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white pt-16">
//       <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
//         {/* Left - Links */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Solutions</h3>
//           <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
//             <p>Managed Services</p>
//             <p>Mobile Development</p>
//             <p>IT Consulting & Advisory</p>
//             <p>Cloud Services</p>
//             <p>Cyber Security</p>
//             <p>Network Connectivity</p>
//             <p>Web Development</p>
//             <p>ERP Solutions</p>
//           </div>
//         </div>

//         {/* Center - Company + Form */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Company</h3>
//           <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm mb-6">
//             <Link to="/about">About Us</Link>
//             <p>Events</p>
//             <p>Team</p>
//             <p>FAQ</p>
//             <p>Careers</p>
//             <p>Reviews & awards</p>
//             <p>Blog</p>
//             <Link to="/case-studies">Case Studies</Link>
//           </div>

//           {/* Newsletter Form */}
//           <div className="space-y-3 mt-4">
//             <input
//               type="email"
//               placeholder="Don't miss out updates"
//               className="w-full px-4 py-2 rounded bg-transparent border border-gray-500 text-sm"
//             />
//             <div className="flex items-start space-x-2 text-xs">
//               <input type="checkbox" className="mt-1" />
//               <p>
//                 I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified.
//               </p>
//             </div>
//             <Button className="bg-blue-600 hover:bg-blue-800 text-white text-sm px-6 py-2">
//               SEND →
//             </Button>
//           </div>
//         </div>

//         {/* Right - Logo + CTA */}
//         <div className="flex flex-col items-center justify-center text-center">
//           <img
//             src="/lovable-uploads/59e46791-d996-4a67-b05e-14bd7ed6c172.png"
//             alt="BigEBrains Logo"
//             className="h-16 mb-4"
//           />
//           <Button className="bg-blue-600 hover:bg-blue-800 text-white px-6">
//             Schedule consultation
//           </Button>
//         </div>
//       </div>

//       {/* Bottom section */}
//       <div className="bg-white text-black mt-12 py-6 px-4">
//         <div className="container mx-auto grid md:grid-cols-4 gap-6 text-sm items-center">
//           <div>
//             <p>Seventh Ave, 20th Floor<br />New York, NY 10018</p>
//           </div>
//           <div>
//             <p>T: 1-800-356-8933<br />info@bigebrains@gmail.com</p>
//           </div>
//           <div className="flex flex-col space-y-1">
//             <Link to="#">Terms & Conditions</Link>
//             <Link to="#">Privacy Policy</Link>
//           </div>
//           <div className="flex space-x-4 justify-center md:justify-end">
//             <FaLinkedin className="text-black text-xl" />
//             <FaGithub className="text-black text-xl" />
//             <FaFacebook className="text-black text-xl" />
//             <FaTwitter className="text-black text-xl" />
//             <FaYoutube className="text-black text-xl" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

///////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";
import {
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaAngleDoubleUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-16 relative">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div>
          <img
            src="/lovable-uploads/whitebeb.png"
            alt="BigEBrains Logo"
            className="h-16 mb-4"
          />

          <p className="text-gray-300 text-sm leading-relaxed">
            BigEBrains pioneers smart digital solutions, AI enhancements, and
            business innovation through scalable technologies. Focused on
            quality, sustainability, and next-gen services.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/about">Our Mission</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>AI Solutions</li>
            <li>Mobile & Web Development</li>
            <li>Cloud & Cybersecurity</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get back to us</h3>
          <div className="flex items-center bg-white rounded px-2 py-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-2 py-1 text-black text-sm bg-transparent outline-none"
            />
            <button className="text-white bg-teal-700 hover:bg-teal-800 p-2 rounded">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-12 pt-6 px-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} BigEBrains. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaLinkedin />
          <FaGithub />
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaAngleDoubleUp className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;
