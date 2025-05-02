import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building,
  GraduationCap,
  Stethoscope,
  Gavel,
  Factory,
  HeartHandshake,
} from "lucide-react";

const industries = [
  {
    icon: <Building className="w-6 h-6 text-blue-600" />,
    title: "Construction",
    description:
      "With our bespoke IT solutions created exclusively for the construction sector, you can streamline project administration and improve cooperation.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    title: "Education",
    description:
      "With our personalized IT solutions for the education industry, you can empower instructors and improve learning experiences.",
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
    title: "Healthcare",
    description:
      "With our specialized IT services for healthcare institutions, you can improve patient care while still protecting critical data.",
  },
  {
    icon: <Gavel className="w-6 h-6 text-blue-600" />,
    title: "Legal",
    description:
      "With our extensive IT services geared to the legal business, you may increase productivity while protecting client confidentiality.",
  },
  {
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    title: "Manufacturing",
    description:
      "Our innovative IT services for the industrial industry can help you speed up production and streamline procedures.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
    title: "Non profit",
    description:
      "With our personalized IT services for NGOs, you can increase the impact of your organization while also streamlining operations.",
  },
];

const Industries = () => {
  return (
    <div className="px-6 py-12 md:px-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="uppercase text-sm text-gray-500 tracking-wider">Solutions</p>
        <h2 className="text-4xl font-bold mt-2">Industry Focus</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Take your company to new heights by investing in our reliable and efficient technology solutions.
        </p>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg mb-12 gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">
            Comprehensive IT services for businesses
          </h3>
          <p className="text-gray-700">
            Bigbrains is your trusted partner for IT management, data security, and cloud technology, with one goal in mind: to transform the way your business works in order to save you time and money.
            <br />
            <br />
            When we say comprehensive, we mean comprehensive. Bigbrains has the experience and expertise to provide an excellent experience across spheres for truly holistic IT.
          </p>
        </div>
        <div className="flex-1 relative h-64 w-full md:h-48 md:w-[400px] rounded-lg overflow-hidden">
          <img
            src="https://ats.net/wp-content/uploads/shutterstock_571561966-scaled.jpg" 
            alt="Industry Collaboration"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Industry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-indigo-100 p-6 rounded-xl">
        {industries.map((industry, index) => (
          <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                {industry.icon}
                <h4 className="font-semibold text-lg">| {industry.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{industry.description}</p>
              <Button variant="link" className="p-0 text-blue-600">
                Learn more
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Industries;
