
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Footer = () => {
  return (
    <footer className="bg-bigebrains-darkblue text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Managed Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">IT Consulting & Advisory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cyber Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Network Connectivity</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ERP Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Reviews & awards</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-bigebrains-blue pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Don't miss out updates</h3>
              <div className="flex space-x-4 mb-6">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-bigebrains-blue border-bigebrains-blue text-white placeholder:text-gray-300"
                />
                <Button className="bg-white text-bigebrains-darkblue hover:bg-gray-200">
                  Send
                </Button>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="text-sm text-gray-300">
                  I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.
                </Label>
              </div>
            </div>
            
            <div>
              <Button className="mb-6 bg-bigebrains-blue hover:bg-bigebrains-lightblue text-white w-full md:w-auto">
                Schedule consultation
              </Button>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Seventh Ave, 20th Floor<br />New York, NY 10018</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <a href="tel:1-800-356-8933" className="text-gray-300 hover:text-white transition-colors">
                    T: 1-800-356-8933
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <a href="mailto:info@bigebrains@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    info@bigebrains@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-bigebrains-blue pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm">Terms & Conditions</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
