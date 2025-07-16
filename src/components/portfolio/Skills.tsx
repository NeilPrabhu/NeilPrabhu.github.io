import React from 'react';

export default function Skills() {
  const skills = {
    ml: ['PyTorch', 'PySpark', 'Databricks', 'Keras', 'Spark'],
    development: ['Svelte.js' ,'TypeScript', 'Node.js', 'Python', 'Golang', 'Ruby on Rails', 'perl'],
    tools: ['Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD - Jenkins', 'AWS- S3, EC2, Lambda', 'Azure - Blob Storage, AKS ,Functions']
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-indigo-600 mb-3">Machine Learning & Data</h3>
          <ul className="space-y-2">
            {skills.ml.map(skill => (
              <li key={skill} className="text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-blue-600 mb-3">Development</h3>
          <ul className="space-y-2">
            {skills.development.map(skill => (
              <li key={skill} className="text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-purple-600 mb-3">Tools & Infrastructure</h3>
          <ul className="space-y-2">
            {skills.tools.map(skill => (
              <li key={skill} className="text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}