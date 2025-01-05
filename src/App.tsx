import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import PdfDownloadButton from './components/PdfDownloadButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}

export default App;