import React, { useEffect, useState, useRef } from "react";
import { CheckCircle, Award, ThumbsUp, Users, Shield, TrendingUp } from "lucide-react";

const WhyBigEBrains = () => {
  // State for testimonial slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8; // Total number of testimonials
  const slidesToShow = 2; // Number of testimonials shown at once
  const autoPlaySpeed = 5000; // Time in ms between slides
  const sliderRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      text: "BigEBrains transformed our outdated IT infrastructure into a modern, scalable system. Their team was professional, responsive, and delivered ahead of schedule.",
      name: "Bhanu Prakash",
      title: "CTO, TechCorp Inc.",
      initials: "BP"
    },
    {
      text: "Working with BigEBrains has been a game-changer for our business. Their strategic approach to our digital transformation has resulted in a 40% increase in operational efficiency.",
      name: "Varun Thati",
      title: "Operations Director, Innovate Solutions",
      initials: "VT"
    },
    {
      text: "The AI solution developed by BigEBrains helped us analyze customer data more effectively, leading to a 25% increase in customer retention rates. Their expertise in AI is unmatched.",
      name: "Priya Sharma",
      title: "Marketing Director, DataDrive Analytics",
      initials: "PS"
    },
    {
      text: "BigEBrains developed a custom mobile application that streamlined our field operations. The intuitive interface and robust backend saved our team countless hours of manual work.",
      name: "Rajesh Kumar",
      title: "Field Operations Manager, ConstructTech",
      initials: "RK"
    },
    {
      text: "The cybersecurity assessment conducted by BigEBrains identified critical vulnerabilities we weren't aware of. Their remediation plan was thorough and implementation was seamless.",
      name: "Anita Desai",
      title: "IT Security Director, SecureFinance",
      initials: "AD"
    },
    {
      text: "We approached BigEBrains for cloud migration services and they exceeded our expectations. The transition was smooth with zero downtime and our infrastructure costs reduced by 35%.",
      name: "Vikram Singh",
      title: "CIO, Global Retail Solutions",
      initials: "VS"
    },
    {
      text: "The web application developed by BigEBrains helped us automate our customer onboarding process. What used to take days now happens in minutes with higher accuracy.",
      name: "Meera Patel",
      title: "Head of Customer Success, ServiceFirst",
      initials: "MP"
    },
    {
      text: "BigEBrains provided exceptional IT consulting services that helped align our technology roadmap with our business goals. Their strategic insights have been invaluable to our growth.",
      name: "Arjun Nair",
      title: "CEO, Startup Innovations",
      initials: "AN"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length - slidesToShow + 1));
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose BigEBrains</h1>
            <p className="text-xl opacity-90 mb-8">
            Our team of industry specialists brings decades of combined experience to every project, ensuring innovative solutions tailored to your unique challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Our Approach Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600">
              At BigEBrains, we combine technical expertise with business acumen to deliver 
              tailored solutions that address your unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Consultative Process</h3>
              </div>
              <p className="text-gray-600">
                We listen first, then design solutions that align with your business goals and technical requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Technical Excellence</h3>
              </div>
              <p className="text-gray-600">
                Our team of certified experts brings deep knowledge and best practices to every project.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <ThumbsUp className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Results-Focused</h3>
              </div>
              <p className="text-gray-600">
                We measure our success by the tangible business outcomes we help our clients achieve.
              </p>
            </div>
          </div>
        </div>

        {/* Why Clients Choose Us */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Clients Choose Us</h2>
            <p className="text-lg text-gray-600">
              Our long-standing client relationships are built on trust, reliability, and consistent delivery of value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <Users className="h-12 w-12 p-2 bg-blue-100 text-blue-600 rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-600">
                  With over 15 years in the industry, our team brings extensive experience across diverse technologies and business domains.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <Shield className="h-12 w-12 p-2 bg-blue-100 text-blue-600 rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Security-First Mindset</h3>
                <p className="text-gray-600">
                  We build security into everything we do, protecting your business assets and customer data.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <TrendingUp className="h-12 w-12 p-2 bg-blue-100 text-blue-600 rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Future-Proof Solutions</h3>
                <p className="text-gray-600">
                  We design scalable, adaptable solutions that grow with your business and evolve with technology.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-12 w-12 p-2 bg-blue-100 text-blue-600 rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Our portfolio of successful projects demonstrates our ability to deliver on our promises.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section - Now with auto-scrolling slider */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it—hear directly from businesses we've helped.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative overflow-hidden" ref={sliderRef}>
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md h-full">
                    <p className="text-gray-600 italic mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center mt-6">
              {[...Array(totalSlides - slidesToShow + 1)].map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 p-8 md:p-12 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to experience the BigEBrains difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its technology goals and drive sustainable growth.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-700 transition duration-300 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyBigEBrains;