import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/MainSolutions';
import Industries from '@/components/Industries';
import Vendors from '@/components/Vendors';
import ContactForm from '@/components/ContactForm';
import CEO from '@/components/CEO';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Services />
        <Solutions />
        <Industries />
        <CEO />
        <Vendors />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;