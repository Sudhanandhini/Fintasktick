import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import gallery1 from '../assets/gallery (1).jpeg';
import gallery2 from '../assets/gallery (2).jpeg';
import gallery3 from '../assets/gallery (3).jpeg';
import gallery4 from '../assets/gallery (4).jpeg';

const images = [
  { src: gallery1, title: 'Gallery 1' },
  { src: gallery2, title: 'Gallery 2' },
  { src: gallery3, title: 'Gallery 3' },
  { src: gallery4, title: 'Gallery 4' },
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox(i => (i - 1 + images.length) % images.length);
  const next = () => setLightbox(i => (i + 1) % images.length);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero */}
      <div className="text-white py-16" style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
            📸 Our Moments
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            A glimpse into our work, events, and the people we serve.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#003a77]/0 group-hover:bg-[#003a77]/50 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <ZoomIn className="w-10 h-10 text-white" />
                  <span className="text-white font-semibold text-sm">{img.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={() => setLightbox(null)}
        >
          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-orange-500 border border-white/20 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-4xl w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-red-500 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].title}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />

            {/* Caption + counter */}
            <div className="flex items-center justify-between mt-4 px-1">
              <p className="text-white font-semibold">{images[lightbox].title}</p>
              <span className="text-white/60 text-sm">{lightbox + 1} / {images.length}</span>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === lightbox ? 'bg-orange-500 w-6' : 'bg-white/40 hover:bg-white/70'}`}
                />
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-orange-500 border border-white/20 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
