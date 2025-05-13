import React from 'react';
import {
  ShieldCheck,
  Globe,
  Smartphone,
  Code,
  Cloud,
  ArrowRight,
  BrainCircuit
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionCard = ({ icon, title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="mb-4 text-bigebrains-blue">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={link} className="text-bigebrains-blue font-medium inline-flex items-center">
      Learn more <ArrowRight className="h-4 w-4 ml-1" />
    </Link>
  </div>
);

const Solutions = () => {
  const solutions = [
    {
      icon: <BrainCircuit className="h-10 w-10" />,
      title: "AI-Powered Managed Services",
      description: "Leverage AI-driven insights to scale security, compliance, and IT operations seamlessly.",
      link: "/ai-powered-managed-services"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "AI Strategy & Advisory",
      description: "Bigebrains helps organizations identify AI opportunities and integrate them into their IT roadmap.",
      link: "/ai-strategy-advisory"
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "AI-Enhanced Cyber Security",
      description: "Utilize AI-based threat detection and prevention systems to proactively combat cyber risks.",
      link: "/ai-enhanced-cybersecurity"
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "AI-Driven Web Development",
      description: "Implement AI features like chatbots, personalization, and predictive analytics in web applications.",
      link: "/ai-driven-web-development"
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "AI-Powered Mobile Apps",
      description: "Create intelligent mobile applications featuring AI-based recommendations, vision, and speech.",
      link: "/ai-powered-mobile-apps"
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "AI-Optimized Cloud Solutions",
      description: "Deploy AI-ready infrastructure and scalable cloud platforms tailored for intelligent applications.",
      link: "/ai-optimized-cloud-solutions"
    }
  ];

  return (
    <section className="py-20 bg-[#73C2FB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <p className="text-bigebrains-blue font-semibold mb-2">HOW WE DO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
            AI Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button
            asChild
            className="bg-white text-bigebrains-blue border border-white hover:bg-bigebrains-darkblue hover:text-white px-8 py-6 text-lg"
          >
            <Link to="/solutions">View All AI Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
