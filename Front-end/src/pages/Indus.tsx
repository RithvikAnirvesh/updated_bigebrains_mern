import React from "react";
import Footer from "@/components/Footer";

const Industries = () => {
  return (
    <>
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
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg gap-6">
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
          <div className="flex-1 relative h-[300px] w-full md:w-[400px] rounded-lg overflow-hidden">
            <img
              src="https://ats.net/wp-content/uploads/shutterstock_571561966-scaled.jpg"
              alt="Industry Collaboration"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Industries;
