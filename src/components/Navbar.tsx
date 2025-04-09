
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
              <span className="text-bigebrains-blue text-2xl font-bold">BigeBrains</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Courses
            </a>
            <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              For Business
            </a>
            <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium">
              About Us
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-bigebrains-blue text-bigebrains-blue hover:bg-bigebrains-blue hover:text-white">
              Login
            </Button>
            <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white">
              Sign Up
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
                Courses
              </a>
              <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2">
                For Business
              </a>
              <a href="#" className="text-gray-600 hover:text-bigebrains-blue font-medium py-2">
                About Us
              </a>
              <div className="flex flex-col pt-3 space-y-3">
                <Button variant="outline" className="border-bigebrains-blue text-bigebrains-blue hover:bg-bigebrains-blue hover:text-white w-full">
                  Login
                </Button>
                <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white w-full">
                  Sign Up
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
