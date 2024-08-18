import React from 'react';

const highlights = [
  { title: 'Top Travel Destinations', description: 'Discover the most amazing places to visit around the world.' },
  { title: 'Approximate Prices', description: 'Get an idea of the costs involved in visiting your dream destinations.' },
  { title: 'Local Cuisine', description: 'Explore the best food options available in various locations.' },
];

const Highlights: React.FC = () => {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <div key={index} className="shadow-md rounded-xl overflow-hidden bg-white p-6 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-2 text-font-title">{highlight.title}</h3>
            <p className="text-font-secondary">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
