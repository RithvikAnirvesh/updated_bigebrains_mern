
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Database, Users, Cloud, Network } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Vendors = () => {
  const challenges = [
    {
      icon: <Database className="h-8 w-8 text-bigebrains-blue" />,
      title: "Datacenter & Hosting",
      description: "Our Data Center is the first in the United States to satisfy the stringent ANSI/TIA-942-rated 4 certificate standards for design, build, and operation."
    },
    {
      icon: <Users className="h-8 w-8 text-bigebrains-blue" />,
      title: "Collaboration",
      description: "Despite current cloud technologies, your users will be working in a familiar Microsoft Office environment with broad compatibility and low-threshold access."
    },
    {
      icon: <Cloud className="h-8 w-8 text-bigebrains-blue" />,
      title: "Cloud Platform",
      description: "Customized cloud platform designed to boost performance, reduce IT expenses, and enable safe and dependable access to your company's data from any device, at any time, and from any location."
    },
    {
      icon: <Network className="h-8 w-8 text-bigebrains-blue" />,
      title: "Network and connectivity",
      description: "Hub, linear, tree, and star network topologies are examples of network topologies, each of which is configured differently to enhance communication between computers or devices."
    }
  ];

  return (
    <section className="py-20 bg-bigebrains-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-bigebrains-blue font-semibold mb-2">WHAT WE USE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
            Bringing the best IT vendors to you.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20">
          {/* Placeholder for vendor logos */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md w-32 h-32 flex items-center justify-center">
              <div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* IT Challenges Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
              Your IT Challenges
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {challenges.map((challenge, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="bg-white p-4">
                    <div className="flex items-center">
                      <div className="mr-4 flex-shrink-0">
                        {challenge.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-bigebrains-darkblue">
                          {challenge.title}
                        </h3>
                      </div>
                      <AccordionTrigger className="flex items-center justify-end">
                        <Button variant="ghost" className="text-bigebrains-blue hover:text-bigebrains-darkblue font-medium">
                          View more
                        </Button>
                      </AccordionTrigger>
                    </div>
                    <AccordionContent>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
