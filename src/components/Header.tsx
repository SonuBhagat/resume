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
          <div className=" w-full p-8 rounded-2xl bg-black/30 border border-white/80 backdrop-blur-md shadow-lg text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">SONU BHAGAT</h1>
        <h2 className="text-xl md:text-2xl mb-6 text-center md:text-left">
          Full-Stack Digital Strategist | SEO/SEM, PPC & Social Media | UI/UX & Web Development
        </h2>
        <p className="text-base md:text-lg mb-6 text-justify">
          A multifaceted Digital Marketing Strategist with over 4 years of experience architecting and executing comprehensive digital campaigns from conception to delivery. I specialize in leveraging data-driven insights from <strong>Google Ads, Facebook Ads, SEO, and SEM</strong> to create targeted campaigns that optimize ROI and enhance brand visibility. My marketing expertise is complemented by <strong>2 years of hands-on experience</strong> in web development and design. As a proficient <strong>Graphic and UI/UX Designer</strong>, I create compelling, user-centric experiences. My technical toolkit is robust, including <strong>WordPress, HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS</strong>, allowing me to build and manage high-performance, responsive websites. This unique ability to merge marketing strategy with technical execution enables me to deliver cohesive, end-to-end digital solutions that drive sustainable business growth.
        </p>

        <Contact />
        
          </div>
        </div>
      </div>
      
    </header>
  );
}
