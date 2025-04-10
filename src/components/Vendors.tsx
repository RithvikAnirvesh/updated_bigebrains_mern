
// import React from 'react';

// const Vendors = () => {
//   return (
//     <section className="py-20 bg-bigebrains-gray">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-16">
//           <p className="text-bigebrains-blue font-semibold mb-2">WHAT WE USE</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
//             Bringing the best IT vendors to you.
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
//           {/* Placeholder for vendor logos */}
//           {[1, 2, 3, 4, 5, 6].map((item) => (
//             <div key={item} className="bg-white p-6 rounded-lg shadow-md w-32 h-32 flex items-center justify-center">
//               <div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Vendors;

//////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';

const vendorDetails = [
  {
    title: "Collaboration",
    description:
      "Despite current cloud technologies, your users will be working in a familiar Microsoft Office environment with broad compatibility and low-threshold access.",
    links: [
      "Exchange Online",
      "SharePoint Online",
      "Defender for 365",
      "Autopilot",
      "Office Apps",
      "Windows 365",
    ],
  },
  {
    title: "Cloud Platform",
    description:
      "Customized cloud platform designed to boost performance, reduce IT expenses, and enable safe and dependable access to your company’s data from any device, at any time, and from any location.",
    links: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "Oracle Cloud",
      "IBM Cloud (Kyndryl)",
      "Linode (Akamai)",
    ],
  },
  {
    title: "Network and connectivity",
    description:
      "Hub, linear, tree, and star network topologies are examples of network topologies, each of which is configured differently to enhance communication between computers or devices.",
    links: [
      "Cisco",
      "Sophos",
      "Watchguard",
      "Extreme Networks",
      "Dell Technologies",
      "VMware",
      "Recovery",
      "Veeam",
      "Previous",
      "Next",
      "WHERE WE DO",
      "Success stories",
    ],
  },
  
  {
    title: "Datacenter & Hosting",
    description:
      "Our Data Center is the first in the United States to satisfy the stringent ANSI/TIA-942-rated 4 certificate standards for design, build, and operation.",
    links: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "RackSpace",
      "OVH",
      "DigitalOcean",
      "Bluehost",
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
            Bringing the best IT vendors to you.
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold bg-[#2b2b2b] inline-block px-6 py-2 rounded-t-xl">
            Your IT Challenges
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
