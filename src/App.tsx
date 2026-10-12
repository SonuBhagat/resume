import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: '0px 0px 80px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50) {
        el.classList.add('visible');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;