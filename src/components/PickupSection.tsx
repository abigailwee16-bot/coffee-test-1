import React from 'react';
import { OUTLETS } from '../data/mockData';

interface PickupSectionProps {
  onSelectOutlet: (outletId: string) => void;
}

export const PickupSection: React.FC<PickupSectionProps> = ({ onSelectOutlet }) => {
  return (
    <section id="pickup-section" className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="flex flex-col max-w-3xl mb-12 gap-4">
          <h2 className="font-headline-md text-headline-md text-[#282526]">
            Order your drinks ahead for Pickup
          </h2>
          <p className="font-body-md text-body-md text-[#434840]">
            Conveniently order your favorite coffee beverages and coffee beans at your preferred outlet. Simply select your preferred pickup location below to browse the menu and place your order. It's quick, easy, and ready when you are.
          </p>
          <p className="font-caption text-caption text-[#434840] mt-1">
            Coffee beans stocks and options availability based on while-stock-last basis.
          </p>
        </div>

        {/* 4 Outlet Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUTLETS.map((outlet) => (
            <div
              key={outlet.id}
              onClick={() => onSelectOutlet(outlet.id)}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square lg:aspect-[3/4] shadow-sm hover:shadow-lg transition-all"
            >
              <img
                alt={outlet.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                src={outlet.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#282526]/85 via-[#282526]/20 to-transparent" />
              
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-label-md text-[#223f1e] uppercase tracking-wider flex items-center gap-1 shadow">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Order Pickup
              </div>

              <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col gap-1">
                <h3 className="font-title-lg text-title-lg text-white group-hover:text-[#a7ca9e] transition-colors">
                  {outlet.name}
                </h3>
                <p className="font-caption text-white/80 line-clamp-1">
                  {outlet.address}
                </p>
                <div className="mt-2 text-xs font-label-md uppercase text-white/90 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Browse Menu</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
