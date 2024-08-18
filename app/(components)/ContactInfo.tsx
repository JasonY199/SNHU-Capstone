import React from 'react';
import Image from 'next/image';

const ContactInfo: React.FC = () => {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-6">
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold text-center text-font-title mb-4">Contact Us</h2>
          <p className="text-font-secondary mb-4">
            If you have any questions, feedback, or just want to say hello, feel free to reach out to us!
          </p>
          <p className="text-font-secondary mb-4">
            Email: <a href="mailto:contact@globaltraveler.com" className="text-blue-600">contact@globaltraveler.com</a>
          </p>
          <p className="text-font-secondary mb-4">
            Phone: +1 987 654 3210
          </p>
          <p className="text-font-secondary mb-4">
            Address: 654 Expedition Blvd, Travel Town, NY 10001
          </p>
        </div>
        <Image src="/contact.jpg" alt="Contact Us" className="w-full h-96 object-cover" width={1920} height={1080} />
      </div>
    </section>
  );
};

export default ContactInfo;
