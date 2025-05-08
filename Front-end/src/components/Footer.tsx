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
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Company address for Google Maps
  const companyAddress = "Big E Brains, 4th Floor, Maa Nilayam, opposite SRM WESTIN Hospital, Jaihind Colony, Silicon Valley, Madhapur, Hyderabad, Telangana 500081";
  const encodedAddress = encodeURIComponent(companyAddress);
  const googleMapsUrl = `https://www.google.com/search?q=17.450491718845207%2C+78.38705545303921&oq=17.450491718845207%2C+78.38705545303921&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYQDIGCAMQRRg9MgYIBBBFGDzSAQgyNjEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8`;

  // Social media profile URLs - replace with actual company URLs
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/bigclasses-ai/",
    github: "https://x.com/bigclasses_ai",
    facebook: "https://www.facebook.com/bigclassesai/",
    twitter: "https://twitter.com/bigebrains",
    youtube: "https://www.youtube.com/@BigClasses_AI"
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
          <div className="flex items-center bg-white rounded px-2 py-2 mb-6">
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

      {/* Contact Details Section */}
      <div className="container mx-auto px-4 mt-12 border-t border-gray-700 pt-8">
        <h3 className="text-xl font-bold mb-6 text-center"></h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Numbers */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold flex items-center">
              <FaPhone className="mr-2 text-teal-500" /> Phone Numbers
            </h4>
            <div className="text-gray-300 text-sm pl-6">
              <p>Sales:+91 9666523199</p>
              <p>Support: +91 9666717099</p>
             
            </div>
          </div>
          
          {/* Email */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold flex items-center">
              <FaEnvelope className="mr-2 text-teal-500" /> Email
            </h4>
            <div className="text-gray-300 text-sm pl-6">
              <p>info@bigebrains.com</p>
              <p>support@bigebrains.com</p>
              <p>careers@bigebrains.com</p>
            </div>
          </div>
          
          {/* Address - Now clickable to open Google Maps */}
          <div className="flex flex-col space-y-3 md:col-span-2">
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold flex items-center hover:text-teal-400 transition-colors"
            >
              <FaMapMarkerAlt className="mr-2 text-teal-500" /> Address
            </a>
            <div className="text-gray-300 text-sm pl-6">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                <p>BigEBrains Headquarters</p>
                <p>Big E Brains, 4th Floor, Maa Nilayam, opposite SRM WESTIN Hospital, Jaihind Colony, Silicon Valley, Madhapur, Hyderabad, Telangana 500081.</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-12 pt-6 px-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} BigEBrains. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub"><FaGithub /></a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook"><FaFacebook /></a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter"><FaTwitter /></a>
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube"><FaYoutube /></a>
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