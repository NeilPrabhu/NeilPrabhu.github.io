import React from 'react';

export default function About() {
  return (
    <section className="mb-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">About Me</h2>
      <div className="bg-white rounded-xl shadow-sm p-4">
        <p className="text-gray-600 leading-relaxed mb-4">
          Software Engineer with over 6 years of experience in infrastructure, DevOps, and fullstack development. 
          Completing my Master's in Data Science, combined theoretical machine learning knowledge with 
          practical experience in AI. I'm passionate about working with ML infrastructure solutions
          and building scalable AI systems.
        </p>
        <p className="text-gray-600 leading-relaxed">
          At Juniper Networks, I worked with a team to integrate Generative AI capabilities into traditional infrastructure, 
          leveraging open-source technologies, LLMs, and vector databases. Through this experience, I developed a deep
          interest in creating tools that enhance developer productivity and deploying AI systems at scale.
        </p>
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-2">What Drives Me</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-primary">🤖</span>
              <span>Deploying and scaling AI systems that solve real business challenges</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🛠️</span>
              <span>Building infrastructure and tools that enhance developer productivity</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🔍</span>
              <span>Exploring cutting-edge AI technologies and their practical applications</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">📚</span>
              <span>Combining theoretical ML knowledge with hands-on engineering solutions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}