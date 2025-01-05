import React from 'react';

const experiences = [
  {
    company: 'Manikaran Power Limited',
    position: 'Jr. Manager Digital Marketer & Graphic Designer',
    period: 'Dec 2023 – Present',
    description: `As a dedicated Digital Marketing Strategist, I bring a multifaceted skill set that encompasses Google Ads, Facebook Ads, SEO & SEM, Graphic Design, UI/UX Design, WordPress, and Social Media Management. At Manikaran Power Limited, I have the privilege of managing the digital marketing efforts for B2B and Tier 1 clients, where I develop and execute comprehensive strategies that drive growth, enhance brand visibility, and optimize ROI. My expertise in digital advertising allows me to create targeted campaigns that reach the right audience at the right time, while my proficiency in SEO and SEM ensures that our brands maintain a strong online presence. I leverage my graphic and UI/UX design skills to craft visually appealing and user-friendly experiences, enhancing engagement and customer satisfaction. Through meticulous analysis and continuous optimization, I strive to achieve the highest standards of excellence in every project I undertake. I am passionate about staying ahead of industry trends and utilizing innovative approaches to deliver exceptional results.`,
  },
  {
    company: 'Vinayak Ply Industries',
    position: 'Digital Marketing & Graphic Designer',
    period: 'Aug 2021 – Nov 2023',
    description: `Managing the entire design process, from conception to delivery. Interdepartmental collaboration and communication are areas in which I excel. Skilled in Adobe Creative Suite (Illustrator, Photoshop, InDesign), Microsoft Office Suite, Digital Marketing (SEO, SMM, SMO, On-Page SEO, OFF-Page SEO), and Paid Ads on all platforms including Google Ads, Facebook, Instagram, LinkedIn, and others, as well as managing the Vinayak Ply website.`,
  },
];

export default function Experience() {
  return (
    <section className="py-16 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-600 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-700 text-justify">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
