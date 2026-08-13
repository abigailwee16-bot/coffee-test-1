import React, { useState } from 'react';
import { OUTLETS } from '../data/mockData';

interface WhatsNewSectionProps {
  onSelectOutlet: (outletId: string) => void;
}

export const WhatsNewSection: React.FC<WhatsNewSectionProps> = ({ onSelectOutlet }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentOutlet = OUTLETS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? OUTLETS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === OUTLETS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden shadow-sm group">
            <img
              alt={currentOutlet.name}
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              src={currentOutlet.image}
            />
            <div className="absolute top-4 left-4 bg-[#223f1e] text-white text-xs font-label-md px-3 py-1 rounded-md uppercase tracking-wider">
              Featured Outlet
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start gap-6">
            <span className="font-label-md text-label-md text-[#434840] uppercase tracking-wider">
              What's new?
            </span>
            <h2 className="font-display-lg-mobile lg:text-display-lg text-[#282526]">
              New outlet at {currentOutlet.name}
            </h2>
            <p className="font-body-md text-body-md text-[#434840] max-w-lg">
              Whether you're in need of your daily morning fuel or a midday caffeine pick-me-up, pop by, say hi, and grab a cup with a friend.
            </p>
            
            <div
              onClick={() => onSelectOutlet(currentOutlet.id)}
              className="flex items-start gap-2 mt-2 group cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5">
                location_on
              </span>
              <p className="font-body-md text-body-md text-[#434840] underline decoration-[#c3c8bd] underline-offset-4 max-w-md group-hover:text-[#223f1e] transition-colors">
                {currentOutlet.directions} {currentOutlet.address}
              </p>
            </div>

            <button
              id="whats-new-find-out-more-btn"
              onClick={() => onSelectOutlet(currentOutlet.id)}
              className="bg-[#385633] hover:bg-[#223f1e] active:scale-95 transition-all text-white font-label-md text-label-md uppercase px-8 py-3 rounded-full mt-4 cursor-pointer shadow-sm"
            >
              Order Pickup Here
            </button>

            {/* Minimalist Pagination Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button
                id="whats-new-prev-btn"
                onClick={handlePrev}
                aria-label="Previous outlet"
                className="w-10 h-10 rounded-full border border-[#c3c8bd] flex items-center justify-center text-[#434840] hover:bg-[#eeeeee] hover:text-[#223f1e] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <span className="font-label-md text-sm text-[#434840]">
                {currentIndex + 1} / {OUTLETS.length}
              </span>
              <button
                id="whats-new-next-btn"
                onClick={handleNext}
                aria-label="Next outlet"
                className="w-10 h-10 rounded-full border border-[#c3c8bd] flex items-center justify-center text-[#434840] hover:bg-[#eeeeee] hover:text-[#223f1e] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
