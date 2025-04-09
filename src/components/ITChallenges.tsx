
import React, { useState } from 'react';
import { Database, Users, Cloud, Network } from "lucide-react";

const ITChallenges = () => {
  const [activeTab, setActiveTab] = useState(0);
  
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
            Your IT Challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-2">
            {challenges.map((challenge, index) => (
              <button
                key={index}
                className={`flex items-start p-6 rounded-lg text-left transition-colors ${
                  activeTab === index 
                    ? "bg-bigebrains-blue text-white" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className={`mr-4 ${activeTab === index ? "text-white" : "text-bigebrains-blue"}`}>
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                </div>
              </button>
            ))}
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-bigebrains-darkblue mb-4">
              {challenges[activeTab].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {challenges[activeTab].description}
            </p>
            <a href="#" className="text-bigebrains-blue font-medium inline-flex items-center">
              view more
            </a>

            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="IT Challenge"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          <button className="w-3 h-3 rounded-full bg-bigebrains-blue"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </section>
  );
};

export default ITChallenges;
