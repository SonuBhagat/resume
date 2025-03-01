import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Work from './components/work';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Experience />
      <Skills />
      <Education />
      <Work />
    </div>
  );
}

export default App;