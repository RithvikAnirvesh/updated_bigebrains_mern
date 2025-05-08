import React from "react";
import { CheckCircle, Award, ThumbsUp, Users, Shield, TrendingUp } from "lucide-react";

const WhyBigEBrains = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose BigEBrains</h1>
            <p className="text-xl opacity-90 mb-8">
              Discover the BigEBrains difference: Innovative solutions, exceptional service, and 
              results that drive your business forward.
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

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it—hear directly from businesses we've helped.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-6">
                "BigEBrains transformed our outdated IT infrastructure into a modern, scalable system. 
                Their team was professional, responsive, and delivered ahead of schedule."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-500 text-sm">CTO, TechCorp Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-6">
                "Working with BigEBrains has been a game-changer for our business. Their strategic approach 
                to our digital transformation has resulted in a 40% increase in operational efficiency."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-gray-500 text-sm">Operations Director, Innovate Solutions</p>
                </div>
              </div>
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