import React from 'react';

export default function About() {
  return (
    <section className="mb-3">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">About Me</h2>
      <div className="bg-white rounded-xl shadow-sm p-4">
        <p className="text-gray-600 leading-relaxed">
        A Software Engineer with 6 years of professional hands-on experience in backend development and machine learning,
        especially in large-scale, DevOps systems.
        </p>
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-2">What Drives Me</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-primary">🤖</span>
              <span>Building & Deploying ML models that solve real-world problems</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🛠️</span>
              <span>Creating tools that make developers' lives easier</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🔍</span>
              <span>Exploring the intersection of AI and software engineering</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}