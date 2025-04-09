
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CEO = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-bigebrains-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-bigebrains-blue font-semibold mb-2">OUR PURPOSE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-bigebrains-darkblue mb-6">
            To bring together the best of technology and our<br />
            people to supercharge progress.
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img 
                src="/lovable-uploads/3c6dabab-6d6e-4c0a-9bc5-afba73a80b4b.png" 
                alt="C Vijayakumar - CEO" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6 text-4xl font-bold text-bigebrains-darkblue">"</div>
              <p className="text-xl text-gray-700 mb-6">
                We look forward to supercharging our growth with optimism and
                confidence, ready to seize the many opportunities ahead. Our
                growth strategy for the emerging digital and AI future is built on
                five strategic objectives.
              </p>
              <Button variant="link" className="text-bigebrains-blue font-semibold flex items-center w-fit px-0 hover:text-bigebrains-darkblue">
                Our five strategic objectives 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-bigebrains-darkblue">C Vijayakumar</h3>
                <p className="text-gray-600">CEO & Managing Director | BigEBrains</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
