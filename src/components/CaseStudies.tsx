
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const caseStudies = [
    {
      category: "CLOUD HOSTING",
      title: "Major Insurance Provider Saves $750k per Month With Big Data Migration",
      description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      tags: ["Modern infrastructure", "Consulting services"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "IT CONSULTING",
      title: "Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story",
      description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      tags: ["Modern infrastructure", "Consulting services"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "MOBILE DEVELOPMENT",
      title: "Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story",
      description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      tags: ["Modern infrastructure", "Consulting services"],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-bigebrains-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <p className="text-bigebrains-blue font-semibold mb-2">WHERE WE DO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
            Success stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-bigebrains-blue font-semibold mb-2">{study.category}</p>
                <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href="#" className="text-bigebrains-blue font-medium">
                  Click here
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
