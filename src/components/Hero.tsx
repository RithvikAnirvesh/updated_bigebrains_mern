
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-bigebrains-gray to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bigebrains-darkblue leading-tight mb-6">
              Learn New Skills <span className="text-bigebrains-blue">Online</span> With Top Educators
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Gain the knowledge and skills you need to succeed. Our platform offers expert-led courses designed to help you advance your career and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="border-bigebrains-blue text-bigebrains-blue hover:bg-bigebrains-blue hover:text-white text-lg py-6 px-8">
                Explore Courses
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white p-2 rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                  alt="Students learning online" 
                  className="rounded-md w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-bigebrains-blue text-white rounded-lg p-4 shadow-lg">
                <p className="text-xl font-bold">10,000+</p>
                <p className="text-sm">Courses Available</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <p className="text-xl font-bold text-bigebrains-blue">4.9/5</p>
                <p className="text-sm text-gray-600">Student Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
