
import React from 'react';
import { ShieldCheck, Server, Globe, Smartphone, Code, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="mb-4 text-bigebrains-blue">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="text-bigebrains-blue font-medium inline-flex items-center">
      Learn more <ArrowRight className="h-4 w-4 ml-1" />
    </a>
  </div>
);

const Solutions = () => {
  const solutions = [
    {
      icon: <Server className="h-10 w-10" />,
      title: "Managed Services",
      description: "Our managed services can assist you in scaling your security and compliance activities more rapidly."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "IT Consulting & Advisory",
      description: "Bigebrains assists its clients in identifying the gaps in their IT strategy."
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Cyber Security",
      description: "We assist in reducing cyber risks and preventing the disastrous effects of cyberattacks."
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "We accomplish high conversion and adoption rates by expertly designing, redesigning web apps."
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Development",
      description: "In order to differentiate, we develop native, cross-platform, and progressive web apps with reliable performance."
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Services",
      description: "With Bigebrains, you can take use of cloud services to create an e-commerce solution that is both scalable and secure."
    }
  ];

  return (
    <section className="py-20 bg-bigebrains-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <p className="text-bigebrains-blue font-semibold mb-2">HOW WE DO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
            Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button variant="outline" className="border-bigebrains-blue text-bigebrains-blue hover:bg-bigebrains-blue hover:text-white px-8 py-6 text-lg">
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
