import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <About />
        <Skills />
        <Experience />
        <Projects />
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-600 mb-4">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a href="mailto:neilprabhu40@gmail.com" 
               className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors">
              Contact Me
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Neil Prabhu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;