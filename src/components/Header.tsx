import React from "react";
import Contact from "./Contact";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex items-center">
          {/* Image Section */}
          {/* Text Section */}
          <div className="ml-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tetxt-lg">
              Sonu Bhagat
            </h1>
            <h2 className="text-sm md:text-2xl mb-6 text-justify">
              Digital Marketing Specialist | PPC Ads Specialist | SEO/SEM Expert
              | Graphic & UI/UX Designer | CMS Dev (WordPress etc..) | Social
              Media Manager | Proficient in HTML, CSS, Bootstrap, JavaScript,
              SQL & React (Beginner)
            </h2>

            <p className="text-lg mb-8 max-w-2x2 text-justify">
              Multifaceted Digital Marketing Strategist with over 3+ years of
              experience specializing in Google Ads, Facebook Ads, SEO & SEM,
              Graphic Design, UI/UX Design, WordPress, and Social Media
              Management. Proficient in managing comprehensive design and
              marketing processes from conception to delivery. Skilled in
              creating targeted campaigns, optimizing ROI, and enhancing brand
              visibility. Adept at developing visually appealing, user-friendly
              experiences that boost engagement and customer satisfaction.
              Committed to staying ahead of industry trends and delivering
              exceptional results through innovative approaches in web design
              and digital storytelling.
            </p>
            <Contact />
            {/* <DownloadButton /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
