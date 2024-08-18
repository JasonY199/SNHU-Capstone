import React from 'react';

const testimonials = [
  {
    text: "This is the best travel site I have ever used! I found all the information I needed for my trip.",
    name: "Emily Johnson",
    location: "New York, USA"
  },
  {
    text: "I had an amazing experience booking my trip through this site. The recommendations were spot on!",
    name: "Michael Brown",
    location: "London, UK"
  },
  {
    text: "A fantastic resource for any traveler. I found some hidden gems I would have missed otherwise.",
    name: "Sophia Davis",
    location: "Sydney, Australia"
  },
  {
    text: "Easy to use and very informative. It made planning my vacation a breeze.",
    name: "David Wilson",
    location: "Toronto, Canada"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="mt-6 p-6 rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-font-title text-center">What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 rounded-lg bg-white shadow-lg">
            <p className="italic text-font-secondary mb-4">&quot;{testimonial.text}&quot;</p>
            <p className="font-semibold text-font-primary">- {testimonial.name}</p>
            <p className="text-font-secondary">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
