import React from "react";

const Work = () => {
  const designs = [
    { id: 2, title: "Creative Design 2", image: "design2.webp" },
    { id: 3, title: "Creative Design 3", image: "design3.webp" },
    { id: 4, title: "Creative Design 4", image: "design4.webp" },
    { id: 5, title: "Creative Design 5", image: "design5.webp" },
    { id: 6, title: "Creative Design 2", image: "brochure1.webp" },
    { id: 7, title: "Creative Design 3", image: "brochure.jpeg" },
    { id: 8, title: "Creative Design 4", image: "trifold.jpg" },
    { id: 9, title: "Creative Design 5", image: "trifold1.jpg" },
    { id: 1, title: "Creative Design 5", image: "flyer.jpg" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Creative Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div key={design.id} className="bg-white shadow-lg rounded-lg p-2 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src={design.image} alt={design.title} className="w-full h-80 object-cover rounded-md transition-opacity hover:opacity-80" />
              {/* <h3 className="text-lg font-medium mt-3 text-gray-800">{design.title}</h3> */}
            </div>
          ))}
        </div>
      </section>

      {/* <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Websites Developed</h2>
        <ul className=" pl-5 space-y-2">
          {websites.map((website) => (
            <li key={website.id} className="text-blue-500 hover:underline transition-colors hover:text-blue-700">
              <a href={website.url} target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:translate-x-1">
                {website.name}
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
};

export default Work;
