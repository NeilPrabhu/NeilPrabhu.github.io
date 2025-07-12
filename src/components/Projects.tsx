import React from 'react';
import { Github, Link, Brain, Code, Cpu, AppWindow } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'ml' | 'fullstack' | 'tools' | 'mobile';
  github?: string;
  demo?: string;
  image?: string;
  appStore?: string;
}

const projects: Project[] = [
  {
    title: "Sapling - Parent Journey App",
    description: "A comprehensive mobile app designed to support parents through their journey, offering personalized guidance and tracking tools.",
    technologies: ["Swift", "SwiftUI", "iOS", "Core Data", "HealthKit"],
    category: 'mobile',
    appStore: "https://apps.apple.com/us/app/sapling-parent-journey/id6746580454",
    image: "/assets/images/sapling.png"
  },
  {
    title: "MovieMood",
    description: "MovieMood uses your Spotify playlist to recommend movies that match your mood.",
    technologies: ["Python", "SKlearn", "FastAPI", "Docker", "Jupyter Notebook"],
    category: 'ml',
    github: "https://github.com/NeilPrabhu/MovieMood",
    demo: "https://moviemood.streamlit.app/",
    image: "/assets/images/movieMood.jpg"
  },
  {
    title: "ML FastAPI Boilerplate",
    description: "A template for deploying a Machine Learning models (Using Housing Price prediction model).",
    technologies: ["Python", "FastAPI", "Docker", "Kubernetes"],
    category: 'tools',
    github: "https://github.com/NeilPrabhu/FastAPI-ML-Template"
  },
  {
    title: "Dify RAG with RBAC",
    description: "A implementation of RAG (Retrieval-Augmented Generation) with Role Based Access Control (RBAC) for secure document retrieval.",
    technologies: ["Typescript","python", "agents", "workflow", "AI", "nextjs", "chatbots", "orchestration", "LLM", "backend-as-a-service", "RAG", "llmops", "llama3", "Javascript", "Docker"],
    category: 'ml',
    github: "https://github.com/NeilPrabhu/Dify-with-RBAC",
    image: "/assets/images/dify_logo.png",
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
    case 'mobile':
      return <AppWindow className="text-green-600" size={20} />;
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
            {project.image && (
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
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
                    : project.category === 'mobile'
                    ? 'bg-green-50 text-green-700'
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
              {project.appStore && (
                <a href={project.appStore} 
                   className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <AppWindow size={18} />
                  <span>App Store</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}