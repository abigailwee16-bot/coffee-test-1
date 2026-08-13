import React from 'react';
import { BUYING_GUIDE_ARTICLE } from '../data/mockData';

interface CoffeeGuideSectionProps {
  onOpenGuide: () => void;
}

export const CoffeeGuideSection: React.FC<CoffeeGuideSectionProps> = ({ onOpenGuide }) => {
  return (
    <section id="guide-section" className="w-full bg-[#F0F0F0] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-label-md text-label-md text-[#434840] uppercase tracking-wider">
              4 things you need to know before buying coffee beans
            </span>
            <h2 className="font-headline-md text-headline-md text-[#282526]">
              Coffee Buying Guide
            </h2>
          </div>
          <button
            id="guide-view-all-btn"
            onClick={onOpenGuide}
            className="flex items-center gap-2 font-label-md text-label-md uppercase text-[#282526] hover:text-[#223f1e] transition-colors group cursor-pointer"
          >
            Read Guide
            <span className="w-6 h-6 rounded-full bg-[#c3c8bd]/30 flex items-center justify-center group-hover:bg-[#223f1e] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </span>
          </button>
        </div>

        {/* Feature Article Card */}
        <div
          onClick={onOpenGuide}
          className="grid grid-cols-1 lg:grid-cols-5 bg-[#eeeeee] hover:bg-[#e8e8e8] transition-colors rounded-xl overflow-hidden shadow-sm cursor-pointer group"
        >
          <div className="lg:col-span-3 relative h-64 lg:h-auto overflow-hidden">
            <img
              alt="Coffee beans in bags showing labels and tasting notes"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={BUYING_GUIDE_ARTICLE.image}
            />
          </div>
          <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center gap-6">
            <span className="inline-block bg-[#c3c8bd]/40 text-[#282526] font-label-md text-label-md px-3 py-1 rounded-sm w-fit uppercase">
              {BUYING_GUIDE_ARTICLE.category}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-[#282526] group-hover:text-[#223f1e] transition-colors">
              {BUYING_GUIDE_ARTICLE.title}
            </h3>
            <p className="font-body-md text-body-md text-[#434840]">
              {BUYING_GUIDE_ARTICLE.summary}
            </p>
            <div className="flex items-center gap-2 font-label-md text-xs uppercase text-[#223f1e] font-semibold tracking-wider">
              <span>Read complete guide</span>
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
