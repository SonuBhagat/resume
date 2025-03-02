import React from "react";
import Contact from "./Contact";

export default function Header() {

  const openResume = () => {
    window.open("/resume.pdf", "_blank"); // Opens in new tab
  };

  return (
    <header className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.webm" 
        autoPlay 
        loop 
        muted 
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <div className="ml-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">SONU BHAGAT</h1>
            <h2 className="text-sm md:text-2xl mb-6 text-justify">
              Digital Marketing Specialist | PPC Ads Specialist | SEO/SEM Expert
              | Graphic & UI/UX Designer | CMS Dev (WordPress etc..) | Social
              Media Manager | Proficient in HTML, CSS, Bootstrap, JavaScript,
              SQL & React (Beginner)
            </h2>
            <p className="text-xs md:text-xl mb-6 text-justify">
              Multifaceted Digital Marketing Strategist with over 3+ years of
              experience specializing in Google Ads, Facebook Ads, SEO & SEM,
              Graphic Design, UI/UX Design, WordPress, and Social Media
              Management. Proficient in managing comprehensive design and
              marketing processes from conception to delivery. Skilled in
              creating targeted campaigns, optimizing ROI, and enhancing brand
              visibility. 
            </p>
            <Contact />
            <button
            onClick={openResume}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all"
          >
            View Resume
          </button>
          </div>
        </div>
      </div>
      
    </header>
  );
}
