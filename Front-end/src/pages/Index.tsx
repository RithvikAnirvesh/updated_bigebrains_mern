import React from 'react';
// Removed Navbar import
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import Industries from '@/components/Industries';
import Vendors from '@/components/Vendors';
import ITChallenges from '@/components/ITChallenges';
import CaseStudies from '@/components/CaseStudies';
import ContactForm from '@/components/ContactForm';
import CEO from '@/components/CEO';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Removed <Navbar /> here */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <Solutions />
        <Industries />
        <CEO />
        <Vendors />
        {/* <ITChallenges /> */}
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
