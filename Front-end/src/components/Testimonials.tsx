import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  // Client testimonials from your image
  const clientTestimonials = [
    {
      id: 1,
      logo: "/lovable-uploads/prm.png", // Update with actual path
      quote: "BigEBrains' AI integration has revolutionized our procurement process, delivering significant savings and enhanced transparency.",
      company: "PRM 360"
    },
    {
      id: 2,
      logo: "/lovable-uploads/spark-edx.jpeg", // Update with actual path
      quote: "With BigEBrains' AI solutions, we've transformed our training modules, providing personalized learning experiences that boost student success.",
      company: "Spark EdX"
    },
    {
      id: 3,
      logo: "/lovable-uploads/E-Bodhan.png", // Update with actual path
      quote: "BigEBrains' AI integration has elevated our e-learning platform, offering adaptive content that caters to individual learner needs.",
      company: "E-Bodhan"
    },
    {
      id: 4,
      logo: "/lovable-uploads/Brolly academy.jpg", // Update with actual path
      quote: "BigEBrains' AI enhancements have enriched our courses, enabling real-time feedback and interactive learning that empower our students.",
      company: "Brolly Academy"
    }
  ];

  // Student testimonials - add your actual student testimonials here
  const studentTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      course: "AI Development Program",
      quote: "The personalized learning approach at BigEBrains helped me master complex AI concepts in half the time I expected. The interactive modules truly adapted to my learning style.",
      avatar: "/lovable-uploads/T2_testinomial_1.webp"
    },
    {
      id: 2,
      name: "Michael Chen",
      course: "Machine Learning Certification",
      quote: "The real-time feedback I received during my projects was invaluable. I could immediately apply corrections and improve my code, which accelerated my learning tremendously.",
      avatar: "/lovable-uploads/T1_testinomial_1.webp"
    },
    {
      id: 3,
      name: "Priya Patel",
      course: "Data Science Fundamentals",
      quote: "As someone with no prior coding experience, I appreciate how the platform adjusted to my pace. The AI-powered hints kept me motivated when I struggled with difficult concepts.",
      avatar: "/lovable-uploads/T3_testinomial_1.webp"
    },
    {
      id: 4,
      name: "James Wilson",
      course: "Cloud Computing Solutions",
      quote: "The adaptive learning platform identified my strengths and weaknesses early on, creating a customized curriculum that helped me fill knowledge gaps I didn't even know I had.",
      avatar: "/lovable-uploads/T4_testinomial_1.webp"
    }
  ];

  const [clientIndex, setClientIndex] = useState(0);
  const [studentIndex, setStudentIndex] = useState(0);
  
  // Auto-slide effect for client testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setClientIndex((prevIndex) => 
        prevIndex === clientTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [clientTestimonials.length]);

  // Auto-slide effect for student testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setStudentIndex((prevIndex) => 
        prevIndex === studentTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds (slightly different timing to avoid synchronized sliding)
    
    return () => clearInterval(interval);
  }, [studentTestimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Client Testimonials Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients have to say about BigEBrains' innovative AI solutions
          </p>
        </div>

        {/* Client Testimonial Slider */}
        <div className="max-w-5xl mx-auto overflow-hidden relative mb-24">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${clientIndex * 100}%)` }}
          >
            {clientTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="min-w-full p-6"
              >
                {/* Testimonial Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    {/* Logo */}
                    <div className="w-40 h-40 flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                      <img 
                        src={testimonial.logo || "/api/placeholder/200/200"} 
                        alt={`${testimonial.company} logo`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Quote */}
                    <div className="flex-1">
                      <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <p className="text-lg text-blue-600 font-semibold">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator Dots for Client Testimonials */}
          <div className="flex justify-center mt-8 space-x-2">
            {clientTestimonials.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${
                  clientIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Student Testimonials Section */}
        <div className="bg-blue-900 text-white py-16 rounded-3xl mt-20 mb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Hear from our students who have experienced the power of our AI-enhanced learning platform
              </p>
            </div>

            {/* Student Testimonial Slider */}
            <div className="max-w-4xl mx-auto overflow-hidden relative">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${studentIndex * 100}%)` }}
              >
                {studentTestimonials.map((student) => (
                  <div 
                    key={student.id}
                    className="min-w-full p-6"
                  >
                    {/* Student Testimonial Card */}
                    <div className="bg-blue-800 rounded-xl p-8 md:p-10">
                      <div className="flex flex-col items-center">
                        <div className="mb-6">
                          <img 
                            src={student.avatar} 
                            alt={student.name} 
                            className="w-20 h-20 rounded-full border-4 border-blue-400"
                          />
                        </div>
                        
                        <blockquote className="text-lg md:text-xl text-center text-blue-50 mb-6">
                          "{student.quote}"
                        </blockquote>
                        
                        <div className="text-center">
                          <p className="font-semibold text-xl text-white mb-1">
                            {student.name}
                          </p>
                          <p className="text-blue-300">
                            {student.course}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicator Dots for Student Testimonials */}
              <div className="flex justify-center mt-8 space-x-2">
                {studentTestimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      studentIndex === index ? "bg-white" : "bg-blue-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to transform your learning experience?</h2>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-700 transition duration-300 inline-block"
          >
            Contact Us Today
          </Link>
          <div className="mt-16 flex justify-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/whitebeb.png" 
                alt="BigEBrains Logo" 
                className="h-16"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
