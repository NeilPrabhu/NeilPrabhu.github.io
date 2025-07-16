import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="gradient-bg text-white shadow-lg">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src="/profile2.jpg"
            alt="Neil Prabhu"
            className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">Neil Prabhu</h1>
            <p className="text-xl text-gray-100 mb-6">Software Engineer</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/neilprabhu"
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/neil-prabhu"
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="mailto:neilprabhu40@gmail.com"
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                <Mail size={20} />
                Email
              </a>
              {/* Commented out Resume link
              <a href="/NeilPrabhu_Resume.pdf" 
                 download
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                <FileText size={20} />
                Resume
              </a>
              */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}