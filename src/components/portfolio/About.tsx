import React from 'react';

export default function About() {
  return (
    <section className="mb-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">About Me</h2>
      <div className="bg-white rounded-xl shadow-sm p-4">
        <p className="text-gray-600 leading-relaxed mb-4">
          Senior Software Engineer with over 7 years of experience in ML infrastructure, DevOps, and fullstack development. 
          Currently working on core ML products at Zest AI, focusing on building scalable AI systems for lending decisions.
          Previously at Juniper Networks, I integrated Generative AI capabilities into traditional infrastructure and built
          developer productivity tools.
        </p>
        <p className="text-gray-600 leading-relaxed">
          With a Master's in Data Science from UC Berkeley and hands-on experience in deploying AI systems at scale,
          I specialize in bridging the gap between theoretical ML concepts and practical engineering solutions.
          I'm passionate about building robust ML infrastructure and creating AI-powered tools that solve real business challenges.
        </p>
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-2">What Drives Me</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-primary">🤖</span>
              <span>Building and scaling ML systems that drive business value</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🛠️</span>
              <span>Developing robust ML infrastructure and developer tools</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🔍</span>
              <span>Implementing AI solutions with a focus on reliability and performance</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">📚</span>
              <span>Translating complex ML concepts into practical engineering solutions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}