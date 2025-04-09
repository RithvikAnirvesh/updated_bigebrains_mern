
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/59e46791-d996-4a67-b05e-14bd7ed6c172.png" 
                alt="BigEBrains Logo" 
                className="h-10 mr-2"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Solutions
            </a>
            <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Case Studies
            </a>
            <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Contact Us
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white">
              Schedule a free consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-600 hover:text-bigebrains-blue"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2">
                Solutions
              </a>
              <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2">
                Case Studies
              </a>
              <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2">
                Contact Us
              </a>
              <div className="pt-3">
                <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white w-full">
                  Schedule a free consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
