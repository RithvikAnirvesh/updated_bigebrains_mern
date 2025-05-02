import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';

const vendorDetails = [
  {
    title: "AI-Driven Collaboration",
    description:
      "Empower teams with AI-enhanced collaboration using tools like real-time transcription, smart scheduling, sentiment analysis, and adaptive productivity environments within the Microsoft ecosystem.",
    links: [
      "Copilot for Microsoft 365",
      "Exchange Online (AI Insights)",
      "SharePoint Syntex",
      "Microsoft Teams AI",
      "Windows 365 + Copilot",
      "Autopilot Automation",
    ],
  },
  {
    title: "AI Cloud Orchestration",
    description:
      "Harness cloud platforms embedded with machine learning to optimize workloads, scale dynamically, and automate resource management with predictive insights.",
    links: [
      "AWS SageMaker",
      "Azure AI Studio",
      "Vertex AI (GCP)",
      "Oracle AI Infrastructure",
      "IBM Watson Cloud",
      "Akamai AI Delivery",
    ],
  },
  {
    title: "Autonomous Networking",
    description:
      "AI-enabled network topologies that self-optimize for performance, detect anomalies in real-time, and auto-heal issues before they impact your operations.",
    links: [
      "Cisco AI Networking",
      "Sophos AI Threat Detection",
      "WatchGuard AI Security",
      "ExtremeCloud IQ",
      "Dell AIOps Networking",
      "VMware Edge AI",
      "Veeam Intelligent Recovery",
    ],
  },
  {
    title: "AI-Optimized Datacenters",
    description:
      "Smart datacenters with AI-driven energy optimization, predictive maintenance, and self-regulating system environments certified at the highest global standards.",
    links: [
      "AWS Smart Data Lakes",
      "Azure Data Factory",
      "Rackspace AI",
      "OVH AI Infrastructure",
      "DigitalOcean App Platform AI",
      "Bluehost ML-Backed Hosting",
    ],
  },
];

const Vendors = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#1f1f1f] text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="text-center mb-12">
          <p className="text-[#00b3ff] font-semibold mb-2">WHAT WE USE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Empowering innovation with AI-first vendors.
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We integrate the world’s leading AI platforms and technologies to deliver intelligent, automated, and future-ready solutions to your business.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold bg-[#2b2b2b] inline-block px-6 py-2 rounded-t-xl">
            Intelligent IT Solutions
          </h2>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar px-2">
            {vendorDetails.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm bg-[#2b2b2b] p-6 rounded-xl flex-shrink-0 shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <button
                  onClick={() => toggleOpen(index)}
                  className="flex items-center text-white font-semibold mb-3"
                >
                  {openIndex === index ? (
                    <>
                      <Minus className="w-4 h-4 mr-1" />
                      view more
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-1" />
                      view more
                    </>
                  )}
                </button>
                {openIndex === index && item.links.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1 text-blue-400">
                    {item.links.map((link, idx) => (
                      <li key={idx}>
                        <a href="#" className="hover:underline">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
