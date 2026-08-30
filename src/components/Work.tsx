import React, { useState } from 'react';
import { X } from 'lucide-react';

const designs = [
  { id: 1, title: 'Social Media Creative', image: 'design2.webp' },
  { id: 2, title: 'Campaign Visual', image: 'design3.webp' },
  { id: 3, title: 'Brand Design', image: 'design4.webp' },
  { id: 4, title: 'Promotional Graphic', image: 'design5.webp' },
  { id: 5, title: 'Brochure Design', image: 'brochure1.webp' },
  { id: 6, title: 'Company Brochure', image: 'brochure.jpeg' },
  { id: 7, title: 'Trifold Brochure', image: 'trifold.jpg' },
  { id: 8, title: 'Trifold Layout', image: 'trifold1.jpg' },
  { id: 9, title: 'Promotional Flyer', image: 'flyer.jpg' },
];

export default function Work() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="creative-work" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">Creative Work</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {designs.map((design, idx) => (
            <div
              key={design.id}
              className={`reveal delay-${((idx % 3) + 1) * 100}`}
            >
              <button
                onClick={() => setLightbox(design.image)}
                className="group relative w-full glass-card overflow-hidden rounded-lg cursor-pointer border-0 p-0 bg-transparent block"
                aria-label={`View ${design.title}`}
              >
                <div className="image-hover-zoom">
                  <img
                    src={`/${design.image}`}
                    alt={design.title}
                    className="w-full h-64 sm:h-72 object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm font-medium text-white">{design.title}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={`/${lightbox}`}
            alt="Full view"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
