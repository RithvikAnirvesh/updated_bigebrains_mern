import React from 'react';
import { Award, Book, Users, Clock, Video, Medal } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Expert Instructors",
    description:
      "Gain insights from industry veterans who integrate intelligent tools to deliver practical, tech-forward instruction.",
    icon: <Users className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 2,
    title: "Comprehensive Curriculum",
    description:
      "Courses built with adaptive learning paths that intelligently evolve with your progress and performance.",
    icon: <Book className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 3,
    title: "Flexible Learning",
    description:
      "Learn at your own pace with smart scheduling tools and personalized reminders that keep you on track.",
    icon: <Clock className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 4,
    title: "High-Quality Content",
    description:
      "Dynamic video lessons and interactive content powered by intelligent recommendations and regular optimizations.",
    icon: <Video className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 5,
    title: "Industry Recognized",
    description:
      "Earn credentials built on globally aligned standards, supported by intelligent evaluation and skill mapping.",
    icon: <Medal className="h-10 w-10 text-bigebrains-blue" />,
  },
  {
    id: 6,
    title: "Proven Results",
    description:
      "Thousands have transformed their careers using a platform that learns from learners—delivering smarter success paths.",
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
            We combine the power of human expertise with intelligent technologies to deliver a smarter, more effective learning experience.
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
