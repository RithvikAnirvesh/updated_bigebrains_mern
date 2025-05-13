import React, { useState } from 'react';
import { BrainCog, Users, Cloud, Network } from "lucide-react"; // BrainCog used as AI symbol
import { Link } from 'react-router-dom';

const ITChallenges = () => {
  const [activeTab, setActiveTab] = useState(0);

  const challenges = [
    {
      icon: <BrainCog className="h-8 w-8 text-bigebrains-blue" />,
      title: "Industry & Manufacturing",
      description: "Leverage AI-powered data centers for real-time analytics, predictive maintenance, and automated data governance, ensuring maximum efficiency and security in every operation.",
      link: "/industry-manufacturing#industry-hero"
    },
    {
      icon: <Users className="h-8 w-8 text-bigebrains-blue" />,
      title: "Transportation & Logistics",
      description: "Boost team productivity with intelligent assistants, real-time transcription, smart meeting summaries, and workflow automation—all within a familiar Microsoft Office environment.",
      link: "/transportation-logistics"
    },
    {
      icon: <Cloud className="h-8 w-8 text-bigebrains-blue" />,
      title: "Medicine and Health Care",
      description: "Our adaptive AI cloud platforms analyze usage patterns, scale resources dynamically, and secure access with behavior-driven authentication—anytime, anywhere.",
      link: "/medicine-healthcare"
    },
    {
      icon: <Network className="h-8 w-8 text-bigebrains-blue" />,
      title: "Banks & Insurance",
      description: "AI-optimized network configurations ensure low-latency communication, dynamic bandwidth allocation, and real-time anomaly detection across your entire digital infrastructure.",
      link: "/banks-insurance"
    }
  ];

  // Function to handle click and scroll to top of page when navigating
  const handleChallengeClick = (index) => {
    setActiveTab(index);
    // The actual scrolling will happen via the hash in the URL
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
            Solving Your IT Challenges with AI
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-2">
            {challenges.map((challenge, index) => (
              <Link
                key={index}
                to={challenge.link}
                className={`flex items-start p-6 rounded-lg text-left transition-colors ${
                  activeTab === index 
                    ? "bg-bigebrains-blue text-white" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleChallengeClick(index)}
              >
                <div className={`mr-4 ${activeTab === index ? "text-white" : "text-bigebrains-blue"}`}>
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-bigebrains-darkblue mb-4">
              {challenges[activeTab].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {challenges[activeTab].description}
            </p>
            <Link 
              to={challenges[activeTab].link}
              className="text-bigebrains-blue font-medium inline-flex items-center"
            >
              Learn more
            </Link>

            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="AI IT Challenge"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {challenges.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${activeTab === index ? "bg-bigebrains-blue" : "bg-gray-300"}`}
              onClick={() => setActiveTab(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITChallenges;
