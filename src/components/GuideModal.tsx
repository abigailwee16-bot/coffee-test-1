import React, { useState } from 'react';
import { BUYING_GUIDE_ARTICLE } from '../data/mockData';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProductById: (productId: string) => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({
  isOpen,
  onClose,
  onSelectProductById
}) => {
  const [selectedPreference, setSelectedPreference] = useState<'fruity' | 'balanced' | 'dark'>('balanced');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden relative my-auto max-h-[90vh] flex flex-col border border-[#c3c8bd]/30">
        {/* Header Bar */}
        <div className="p-6 bg-[#282526] text-white flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="font-label-md text-xs text-[#D4AF37] uppercase tracking-widest">
              {BUYING_GUIDE_ARTICLE.category} • {BUYING_GUIDE_ARTICLE.readTime}
            </span>
            <h3 className="font-headline-sm text-white">{BUYING_GUIDE_ARTICLE.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Article Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-[#f9f9f9]">
          <div className="rounded-xl overflow-hidden shadow-sm aspect-video max-h-72 w-full">
            <img
              src={BUYING_GUIDE_ARTICLE.image}
              alt="Coffee beans guide"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 font-body-lg text-[#282526]">
            {BUYING_GUIDE_ARTICLE.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Interactive Taste Recommendation Finder */}
          <div className="bg-white p-6 rounded-xl border border-[#c3c8bd]/40 shadow-xs space-y-4">
            <h4 className="font-title-lg text-lg text-[#282526] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#223f1e]">tune</span>
              Interactive Taste Finder: What profile do you prefer?
            </h4>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setSelectedPreference('fruity')}
                className={`py-3 px-2 text-xs font-label-md uppercase rounded border cursor-pointer transition-all ${
                  selectedPreference === 'fruity'
                    ? 'bg-[#223f1e] text-white border-[#223f1e]'
                    : 'bg-[#f3f3f3] text-[#434840] border-[#c3c8bd]'
                }`}
              >
                🍓 Bright & Fruity
              </button>
              <button
                onClick={() => setSelectedPreference('balanced')}
                className={`py-3 px-2 text-xs font-label-md uppercase rounded border cursor-pointer transition-all ${
                  selectedPreference === 'balanced'
                    ? 'bg-[#223f1e] text-white border-[#223f1e]'
                    : 'bg-[#f3f3f3] text-[#434840] border-[#c3c8bd]'
                }`}
              >
                🍫 Smooth & Chocolatey
              </button>
              <button
                onClick={() => setSelectedPreference('dark')}
                className={`py-3 px-2 text-xs font-label-md uppercase rounded border cursor-pointer transition-all ${
                  selectedPreference === 'dark'
                    ? 'bg-[#223f1e] text-white border-[#223f1e]'
                    : 'bg-[#f3f3f3] text-[#434840] border-[#c3c8bd]'
                }`}
              >
                ☕ Bold & Smoky Dark
              </button>
            </div>

            <div className="bg-[#f3f3f3] p-4 rounded-lg flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-label-md text-[#73796f] uppercase">Recommended for you:</p>
                <p className="font-title-lg text-base text-[#282526]">
                  {selectedPreference === 'fruity' && 'Ethiopia Yirgacheffe / Gachala Capsules'}
                  {selectedPreference === 'balanced' && 'Heritage Signature Whole Beans (Medium-Dark)'}
                  {selectedPreference === 'dark' && 'Smoky Quartz Capsules (Dark Roast)'}
                </p>
              </div>
              <button
                onClick={() => {
                  const targetId =
                    selectedPreference === 'fruity'
                      ? 'gachala-capsules'
                      : selectedPreference === 'dark'
                      ? 'smoky-quartz-capsules'
                      : 'heritage-signature-blend';
                  onSelectProductById(targetId);
                  onClose();
                }}
                className="px-4 py-2 bg-[#223f1e] text-white text-xs font-label-md uppercase rounded hover:bg-[#385633] cursor-pointer whitespace-nowrap"
              >
                View Bean →
              </button>
            </div>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {BUYING_GUIDE_ARTICLE.tips.map((tip, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg border border-[#c3c8bd]/30 space-y-2 shadow-2xs"
              >
                <h5 className="font-title-lg text-base text-[#223f1e]">{tip.title}</h5>
                <p className="font-body-md text-sm text-[#434840]">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
