
// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { CheckCircle, Phone, Mail } from "lucide-react";
// import { Textarea } from "@/components/ui/textarea";

// const ContactForm = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <p className="text-bigebrains-blue font-semibold mb-2">WHAT WE USE</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-6">
//               Partner with Us for Comprehensive IT
//             </h2>
//             <p className="text-lg text-gray-600 mb-8">
//               We're happy to answer any questions you may have and help
//               you determine which of our services best fit your needs.
//             </p>
//             <div className="flex items-center mb-8">
//               <Phone className="h-5 w-5 text-bigebrains-blue mr-2" />
//               <span className="text-lg font-medium">Call us at: 1-800-356-8933</span>
//             </div>
            
//             <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-4">Your benefits:</h3>
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {['Client-oriented', 'Results-driven', 'Independent', 'Problem-solving', 'Competent', 'Transparent'].map((benefit, index) => (
//                 <div key={index} className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-bigebrains-blue mr-2" />
//                   <span>{benefit}</span>
//                 </div>
//               ))}
//             </div>
            
//             <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-4">What happens next?</h3>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <div className="bg-bigebrains-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
//                   1
//                 </div>
//                 <p>We Schedule a call at your convenience</p>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-bigebrains-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
//                   2
//                 </div>
//                 <p>We do a discovery and consulting meting</p>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-bigebrains-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
//                   3
//                 </div>
//                 <p>We prepare a proposal</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-bigebrains-gray p-8 rounded-lg">
//             <h3 className="text-2xl font-semibold text-bigebrains-darkblue mb-6">
//               Schedule a Free Consultation
//             </h3>
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="firstName">First name</Label>
//                   <Input id="firstName" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="lastName">Last name</Label>
//                   <Input id="lastName" />
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <Label htmlFor="company">Comapny / Organization</Label>
//                 <Input id="company" />
//               </div>
              
//               <div className="space-y-2">
//                 <Label htmlFor="email">Company email</Label>
//                 <Input id="email" type="email" />
//               </div>
              
//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input id="phone" type="tel" />
//               </div>
              
//               <div className="space-y-2">
//                 <Label htmlFor="helpType">How Can We Help You?</Label>
//                 <select id="helpType" className="w-full p-2 border border-gray-300 rounded-md">
//                   <option>Select option*</option>
//                   <option>IT Consulting</option>
//                   <option>Managed Services</option>
//                   <option>Web Development</option>
//                   <option>Mobile Development</option>
//                   <option>Cloud Services</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea id="message" placeholder="Message" rows={4} />
//               </div>
              
//               <Button type="submit" className="w-full bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white">
//                 Submit
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

//////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Phone } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    helpType: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // const res = await fetch('http://localhost:5000/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contacts/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      
      });

      if (res.ok) {
        setStatus("Submitted successfully! Check your email.");
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          helpType: '',
          message: ''
        });
      } else {
        setStatus("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-bigebrains-blue font-semibold mb-2">WHAT WE USE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-6">
              Partner with Us for Comprehensive IT
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
            </p>
            <div className="flex items-center mb-8">
              <Phone className="h-5 w-5 text-bigebrains-blue mr-2" />
              <span className="text-lg font-medium">Call us at: 1-800-356-8933</span>
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-4">Your benefits:</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Client-oriented', 'Results-driven', 'Independent', 'Problem-solving', 'Competent', 'Transparent'].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-bigebrains-blue mr-2" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-bigebrains-darkblue mb-4">What happens next?</h3>
            <div className="space-y-4">
              {["We Schedule a call at your convenience", "We do a discovery and consulting meeting", "We prepare a proposal"].map((text, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-bigebrains-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                    {i + 1}
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bigebrains-gray p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-bigebrains-darkblue mb-6">
              Schedule a Free Consultation
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company / Organization</Label>
                <Input id="company" value={formData.company} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Company email</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="helpType">How Can We Help You?</Label>
                <select
                  id="helpType"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.helpType}
                  onChange={handleChange}
                >
                  <option>Select option*</option>
                  <option>IT Consulting</option>
                  <option>Managed Services</option>
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Cloud Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white">
                Submit
              </Button>
              {status && <p className="text-center mt-2 text-sm text-gray-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

