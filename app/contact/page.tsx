import React from 'react';
import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import About from '../(components)/About';
import ContactInfo from '../(components)/ContactInfo';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
