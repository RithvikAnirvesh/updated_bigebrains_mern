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
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    helpType: '',
    message: ''
  });

  const validate = () => {
    const newErrors: any = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Enter your first name';
    if (!formData.lastName.trim()) newErrors.lastName = 'Enter your last name';
    if (!formData.company.trim()) newErrors.company = 'Enter your company/organization';
    if (!formData.email.trim()) newErrors.email = 'Enter your email';
    if (!formData.phone.trim()) newErrors.phone = 'Enter your phone number';
    if (!formData.helpType || formData.helpType === 'Select option*') newErrors.helpType = 'Select a help type';
    if (!formData.message.trim()) newErrors.message = 'Enter your message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) {
      setStatus("Please fill in all required fields.");
      return;
    }
    setStatus("Sending...");
    try {
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
        setErrors({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          helpType: '',
          message: ''
        });
      } else if (res.status === 400) {
        const data = await res.json();
        if (data.error === 'Email does not exist') {
          setStatus('');
          alert('The email address does not exist. Please enter a valid company email.');
          return;
        }
      } else {
        setStatus("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred.");
    }
  };

  return (
    <div id="contact-section">
      {/* Heading Section */}
      <section className="bg-bigebrains-darkblue text-white py-20 pb-28">
        <div className="container px-4 md:px-6">
          <p className="text-sm font-semibold mb-2 uppercase tracking-wide">What we use</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight whitespace-nowrap">
            Partner with Us for Comprehensive IT
          </h2>
        </div>
      </section>

      {/* Form + Info Section */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
            {/* Left: Info */}
            <div className="text-bigebrains-darkblue space-y-6">
              <p className="text-lg">
                We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
              </p>
              <div className="flex items-center text-lg font-semibold">
                <Phone className="h-5 w-5 text-bigebrains-blue mr-2" />
                Call us at: <span className="ml-1 font-bold">+91 9666717099</span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Your benefits:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Client-oriented', 'Results-driven',
                    'Independent', 'Problem-solving',
                    'Competent', 'Transparent'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center text-base">
                      <CheckCircle className="h-5 w-5 text-bigebrains-blue mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">What happens next?</h3>
                <div className="space-y-3">
                  {[
                    "We Schedule a call at your convenience",
                    "We do a discovery and consulting meeting",
                    "We prepare a proposal"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-bigebrains-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                        {index + 1}
                      </div>
                      <p className="text-base">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-6 bg-bigebrains-gray rounded-lg">
              <h3 className="text-2xl font-semibold text-bigebrains-darkblue mb-6">
                Schedule a Free Consultation
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" value={formData.firstName} onChange={handleChange} />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" value={formData.lastName} onChange={handleChange} />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input id="company" value={formData.company} onChange={handleChange} />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Company email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
                  {errors.helpType && <p className="text-red-500 text-xs mt-1">{errors.helpType}</p>}
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
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
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
    </div>
  );
};

export default ContactForm;




