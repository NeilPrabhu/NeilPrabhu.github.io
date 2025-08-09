import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/layout";
import { 
  About, 
  Education, 
  Experience, 
  Projects, 
  Skills, 
  PrivacyPolicy 
} from "./components/portfolio";
import NonTech from "./components/non-tech/NonTech";
import { InterviewPrep } from "./components/interview-prep";
import { InterviewPrepV2 } from "./components/interview-prep-v2";

function Home() {
  return (
    <>
      <About />
      <Projects />
      <Experience />
      <Education />
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
      <Routes>
        {/* Hidden routes for interview prep - completely separate layout */}
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/interview-prep-v2" element={<InterviewPrepV2 />} />
        
        {/* Standard portfolio routes with normal layout */}
        <Route path="/*" element={
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
        } />
      </Routes>
    </Router>
  );
}

export default App;