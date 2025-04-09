
import React from 'react';
import { Shield, Lightbulb, Briefcase, ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-bigebrains-blue font-semibold mb-2">WHAT WE DO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
            Simplifying IT <br className="hidden sm:block" />
            for a complex world.
          </h2>
          <div className="w-16 h-1 bg-bigebrains-blue mx-auto mt-6 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-4 text-bigebrains-blue">
              <ArrowUpRight className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">Cost-effectiveness</h3>
            <p className="text-gray-600">
              We offer affordable IT solutions that help you reduce costs and improve your bottom line.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-4 text-bigebrains-blue">
              <Lightbulb className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">Innovative Technology</h3>
            <p className="text-gray-600">
              We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-4 text-bigebrains-blue">
              <Briefcase className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">Industry Expertise</h3>
            <p className="text-gray-600">
              We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-4 text-bigebrains-blue">
              <Shield className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">Scalability</h3>
            <p className="text-gray-600">
              Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
