

import React from 'react';
import { Shield, Lightbulb, Briefcase, ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Styled Heading Section with Background + Pattern */}
        <div className="bg-[#1A1A1A] text-white rounded-2xl p-10 md:p-16 mb-16 relative overflow-hidden">
          <p className="text-sm font-semibold text-bigebrains-blue uppercase mb-2 z-10 relative">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight z-10 relative">
            AI Solutions for a smarter, scalable future.
          </h2>

          {/* SVG Dot Pattern */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none hidden md:block">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              {Array.from({ length: 10 }).map((_, row) =>
                Array.from({ length: 10 }).map((_, col) => {
                  if (row + col < 9) return null; // Diagonal fade
                  const size = 3 + (row + col) * 0.2;
                  return (
                    <circle
                      key={`${row}-${col}`}
                      cx={col * 20}
                      cy={row * 20}
                      r={size / 2}
                      fill="#94a3b8" // Tailwind slate-400-ish
                    />
                  );
                })
              )}
            </svg>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-4 text-bigebrains-blue">
              <ArrowUpRight className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">AI Cost Optimization</h3>
            <p className="text-gray-600">
              Leverage AI-driven analytics to minimize operational costs, automate processes, and improve financial efficiency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-4 text-bigebrains-blue">
              <Lightbulb className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">AI-Powered Innovation</h3>
            <p className="text-gray-600">
              Stay ahead with cutting-edge AI technologies including machine learning, natural language processing, and computer vision.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-4 text-bigebrains-blue">
              <Briefcase className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">AI Industry Expertise</h3>
            <p className="text-gray-600">
              Delivering AI-driven solutions tailored to industries like healthcare, finance, retail, and logistics for maximum impact.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-4 text-bigebrains-blue">
              <Shield className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">Scalable AI Solutions</h3>
            <p className="text-gray-600">
              Build AI solutions that evolve with your business needs — from startups to enterprises, seamlessly adapting to growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

