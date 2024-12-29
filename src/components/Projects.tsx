import React from 'react';
import { Github, Link, Brain, Code, Cpu } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'ml' | 'fullstack' | 'tools';
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "ML Model Deployment Platform",
    description: "A platform for deploying machine learning models with automatic scaling and monitoring. Supports PyTorch and TensorFlow models.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker", "Kubernetes"],
    category: 'ml',
    github: "https://github.com/neilprabhu/ml-platform"
  },
  {
    title: "Developer Productivity Tools",
    description: "A collection of CLI tools to automate common development tasks and improve workflow efficiency.",
    technologies: ["TypeScript", "Node.js", "Commander.js"],
    category: 'tools',
    github: "https://github.com/neilprabhu/dev-tools"
  },
  {
    title: "Real-time Object Detection",
    description: "A web application that performs real-time object detection using TensorFlow.js and webcam feed.",
    technologies: ["React", "TensorFlow.js", "WebGL"],
    category: 'ml',
    github: "https://github.com/neilprabhu/object-detection",
    demo: "https://object-detection.neilprabhu.com"
  }
];

const CategoryIcon = ({ category }: { category: Project['category'] }) => {
  switch (category) {
    case 'ml':
      return <Brain className="text-indigo-600" size={20} />;
    case 'tools':
      return <Code className="text-blue-600" size={20} />;
    case 'fullstack':
      return <Cpu className="text-purple-600" size={20} />;
    default:
      return null;
  }
};

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <CategoryIcon category={project.category} />
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className={`text-sm px-3 py-1 rounded-full ${
                  project.category === 'ml' 
                    ? 'bg-indigo-50 text-indigo-700'
                    : project.category === 'tools'
                    ? 'bg-blue-50 text-blue-700'
                    : 'bg-purple-50 text-purple-700'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} 
                   className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <Github size={18} />
                  <span>Code</span>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} 
                   className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <Link size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}