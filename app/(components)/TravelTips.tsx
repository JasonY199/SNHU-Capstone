import React from 'react';

const travelTips = [
  {
    category: "Packing Tips",
    tips: [
      { icon: "🎒", text: "Pack light to make your travels easier and more enjoyable." },
      { icon: "🔋", text: "Always carry a portable charger for your devices." },
      { icon: "👟", text: "Bring comfortable shoes for exploring." }
    ]
  },
  {
    category: "Safety Tips",
    tips: [
      { icon: "🔒", text: "Keep your valuables secure and be aware of your surroundings." },
      { icon: "💧", text: "Stay hydrated and carry a reusable water bottle." },
      { icon: "🌞", text: "Use sunscreen to protect your skin from sunburn." }
    ]
  },
  {
    category: "Cultural Tips",
    tips: [
      { icon: "🗣️", text: "Learn a few phrases in the local language to enhance your experience." },
      { icon: "📚", text: "Research the local customs and traditions before you go." },
      { icon: "🎭", text: "Respect local etiquette and dress appropriately." }
    ]
  }
];

const TravelTips: React.FC = () => {
  return (
    <section className="mt-8 p-6 rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-font-title text-center">Travel Tips</h2>
      <div className="space-y-8">
        {travelTips.map((section, index) => (
          <div key={index} className="p-4 rounded-lg bg-white shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-font-primary">{section.category}</h3>
            <ul className="space-y-2">
              {section.tips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-2xl">{tip.icon}</span>
                  <span className="text-font-secondary">{tip.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelTips;
