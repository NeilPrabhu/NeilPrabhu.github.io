import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import NonTech from './components/NonTech';
import PrivacyPolicy from './components/PrivacyPolicy';

function Home() {
  return (
    <>
      <About />
      <Projects />
      <Education />
      {/* <Experience /> */}
      <Skills />
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-gray-600 mb-2">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:neilprabhu40@gmail.com"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/non-tech" element={<NonTech />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <footer className="border-t">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} Neil Prabhu. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;