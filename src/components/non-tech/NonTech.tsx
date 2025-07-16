import React from "react";
import Recipes from "./recipes/Recipes";

const NonTech: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Non-Tech Related Stuff
      </h2>
      
      {/* Recipes Section */}
      <Recipes />
      
      {/* Future sections can be added here, such as:
          - Books & Reading
          - Travel Experiences 
          - Hobbies & Interests
          - Photography
          - Music & Entertainment
          etc.
      */}
    </section>
  );
};

export default NonTech;