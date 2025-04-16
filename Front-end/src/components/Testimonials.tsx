
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "BigeBrains transformed my career with their digital marketing course. The instructors were knowledgeable and the material was up-to-date with current industry practices.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The web development bootcamp was intensive but extremely valuable. I went from knowing basic HTML to building full-stack applications in just a few months.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "BigeBrains' data science course provided me with the skills needed to transition into analytics. The hands-on projects were particularly helpful for my portfolio.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-bigebrains-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our students about how BigeBrains has helped them achieve their learning goals and advance their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-bigebrains-blue">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
