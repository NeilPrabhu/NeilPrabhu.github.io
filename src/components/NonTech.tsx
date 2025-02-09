import React from 'react';

const NonTech = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Non-Tech Related Stuff
      </h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900">
            Recipes 🍴
          </h3>
          <p className="text-gray-600 mb-4">
            <a 
              href="https://thehappypear.ie/plant-based-and-vegan-recipes/almond-corissant-baked-oats/" 
              className="text-primary hover:underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Almond Croissant Baked Oats
            </a>
          </p>
          <p className="text-gray-500 italic">
            This page is in construction phase 😊
          </p>
        </div>
      </div>
    </section>
  );
};

export default NonTech;