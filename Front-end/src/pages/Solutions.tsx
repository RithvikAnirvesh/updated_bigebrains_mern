// import React from "react";

// const Solutions = () => {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* Page Heading */}
//       <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
//         Services & Solutions
//       </h1>
//       <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
//         Take your company to new heights by investing in our reliable and efficient technology solutions.
//       </p>

//       {/* Gray Card Section */}
//       <div className="bg-gray-100 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
//         {/* Text Content */}
//         <div className="md:w-1/2">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">
//             Comprehensive IT services for businesses
//           </h2>
//           <p className="text-gray-700 mb-4">
//             Bigebrains is your trusted partner for IT management, data security, and cloud technology, with one goal in mind: to transform the way your business works in order to save you time and money.
//           </p>
//           <p className="text-gray-700">
//             When we say comprehensive, we mean comprehensive. Bigebrains has the experience and expertise to provide an excellent experience across spheres for truly holistic IT.
//           </p>
//         </div>

//         {/* Image from internet */}
//         <div className="md:w-1/2">
//           <img
//             src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
//             alt="Team collaboration"
//             className="rounded-xl w-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Solutions;

////////////////////////////////////////////////////////////////////////////

import React from "react";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Services & Solutions
        </h1>
        <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Take your company to new heights by investing in our reliable and efficient technology solutions.
        </p>

        {/* Gray Card Section */}
        <div className="bg-gray-100 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Comprehensive IT services for businesses
            </h2>
            <p className="text-gray-700 mb-4">
              Bigebrains is your trusted partner for IT management, data security, and cloud technology, with one goal in mind: to transform the way your business works in order to save you time and money.
            </p>
            <p className="text-gray-700">
              When we say comprehensive, we mean comprehensive. Bigebrains has the experience and expertise to provide an excellent experience across spheres for truly holistic IT.
            </p>
          </div>

          {/* Image from internet */}
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
              alt="Team collaboration"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-20">
          <ContactForm />
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Solutions;

