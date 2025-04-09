
import React from 'react';

const Vendors = () => {
  return (
    <section className="py-20 bg-bigebrains-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-bigebrains-blue font-semibold mb-2">WHAT WE USE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">
            Bringing the best IT vendors to you.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Placeholder for vendor logos */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md w-32 h-32 flex items-center justify-center">
              <div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vendors;
