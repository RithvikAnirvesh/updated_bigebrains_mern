
import React from 'react';
import { Award, Book, Users, Clock, Video, Certificate } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience.",
    icon: <Users className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 2,
    title: "Comprehensive Curriculum",
    description: "Well-structured courses designed to build your skills from the ground up.",
    icon: <Book className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 3,
    title: "Flexible Learning",
    description: "Study at your own pace with lifetime access to course materials.",
    icon: <Clock className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 4,
    title: "High-Quality Content",
    description: "Engaging video lessons and resources updated regularly.",
    icon: <Video className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 5,
    title: "Industry Recognized",
    description: "Certificates that are valued by employers worldwide.",
    icon: <Certificate className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 6,
    title: "Proven Results",
    description: "Join thousands of successful students who have transformed their careers.",
    icon: <Award className="h-10 w-10 text-bigebrains-blue" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">Why Choose BigeBrains</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality education to help you succeed. Here's what sets us apart:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start">
              <div className="flex-shrink-0 mr-4">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
