import React from 'react';

export default function Experience() {
  return (
    <section className="py-16 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          {/* First Experience */}
          <div className="border-l-4 border-blue-600 pl-4 py-2">
            <h3 className="text-xl font-semibold">
              Jr. Manager Digital Marketer & Graphic Designer
            </h3>
            <p className="text-blue-600 font-medium">Manikaran Power Limited</p>
            <p className="text-gray-600 text-sm mb-2">Dec 2023 – Present</p>
            <p className="text-gray-700 text-justify leading-relaxed">
              As a dedicated <span className="font-semibold text-blue-600">Digital Marketing Strategist</span> at Manikaran Power Limited, I architect and execute comprehensive digital strategies for <span className="font-semibold text-blue-600">B2B and Tier 1 clients</span>. 
              My expertise in <span className="font-semibold text-blue-600">Google Ads</span>, <span className="font-semibold text-blue-600">Facebook Ads</span>, <span className="font-semibold text-blue-600">SEO</span>, and <span className="font-semibold text-blue-600">SEM</span> allows me to create targeted, data-driven campaigns that enhance brand visibility and maximize ROI. 
              I complement my marketing skills with a strong foundation in <span className="font-semibold text-blue-600">Graphic Design</span> and <span className="font-semibold text-blue-600">UI/UX</span>, ensuring every touchpoint is visually compelling and user-centric. 
              My technical proficiency extends to web development, where I build and manage high-performance websites using <span className="font-semibold text-blue-600">WordPress</span>, <span className="font-semibold text-blue-600">HTML</span>, <span className="font-semibold text-blue-600">CSS</span>, <span className="font-semibold text-blue-600">JavaScript</span>, <span className="font-semibold text-blue-600">React.js</span>, and <span className="font-semibold text-blue-600">Next.js</span>. 
              This unique ability to merge marketing acumen with technical execution allows me to deliver cohesive, end-to-end digital solutions that drive sustainable growth.
            </p>
          </div>

          {/* Second Experience */}
          <div className="border-l-4 border-blue-600 pl-4 py-2 mt-8">
            <h3 className="text-xl font-semibold">
              Digital Marketing & Graphic Designer
            </h3>
            <p className="text-blue-600 font-medium">Vinayak Ply Industries</p>
            <p className="text-gray-600 text-sm mb-2">Aug 2021 – Nov 2023</p>
            <p className="text-gray-700 text-justify leading-relaxed">
              Managing the entire design process, from conception to delivery. Interdepartmental collaboration and communication are areas in which I excel. 
              Skilled in <span className="font-semibold text-blue-600">Adobe Creative Suite (Illustrator, Photoshop, InDesign)</span>, 
              <span className="font-semibold text-blue-600"> Microsoft Office Suite</span>, 
              <span className="font-semibold text-blue-600"> Digital Marketing (SEO, SMM, SMO, On-Page SEO, OFF-Page SEO)</span>, 
              and <span className="font-semibold text-blue-600">Paid Ads</span> on all platforms including <span className="font-semibold text-blue-600">Google Ads, Facebook, Instagram, LinkedIn</span>, and others, 
              as well as managing the <span className="font-semibold text-blue-600">Vinayak Ply website</span>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
