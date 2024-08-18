import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative flex items-center justify-center text-center bg-cover bg-center h-[500px] rounded-lg overflow-hidden" 
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-black bg-opacity-60 p-8 rounded-lg">
        <h1 className="text-5xl font-bold text-font-hero mb-4">Explore the World</h1>
        <p className="text-xl text-font-hero">Look no further, we have a collection of the top destinations to discover.</p>
      </div>
    </section>
  );
};

export default Hero;
