import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-4">
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-center text-font-title mb-4">About Global Traveler</h2>
          <p className="text-font-secondary mb-4">
            Hey there! We&apos;re Global Traveler, your go-to guide for exploring the most incredible places on the planet. Whether you&apos;re a seasoned traveler or just getting started, we&apos;ve got the tips, guides, and stories to inspire your next adventure.
          </p>
          <p className="text-font-secondary mb-4">
            From hidden gems to iconic landmarks, we cover it all. Plus, we&apos;ll give you the scoop on local eats, cultural experiences, and budget-friendly travel hacks. Let&apos;s make every trip an unforgettable journey!
          </p>
        </div>
        <Image src="/about.jpg" alt="About Global Traveler" className="w-full h-96 object-cover" width={1920} height={1080} />
      </div>
    </section>
  );
};

export default About;
