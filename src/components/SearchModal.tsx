import React, { useState } from 'react';
import { PRODUCTS, DRINK_MENU, OUTLETS } from '../data/mockData';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectOutlet: (outletId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectOutlet
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingProducts = cleanQuery
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(cleanQuery) || p.description.toLowerCase().includes(cleanQuery))
    : PRODUCTS;

  const matchingDrinks = cleanQuery
    ? DRINK_MENU.filter((d) => d.name.toLowerCase().includes(cleanQuery) || d.category.toLowerCase().includes(cleanQuery))
    : DRINK_MENU.slice(0, 3);

  const matchingOutlets = cleanQuery
    ? OUTLETS.filter((o) => o.name.toLowerCase().includes(cleanQuery) || o.address.toLowerCase().includes(cleanQuery))
    : OUTLETS;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 pt-20 animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden relative border border-[#c3c8bd]/30">
        {/* Search Input Bar */}
        <div className="p-4 bg-[#f3f3f3] border-b border-[#eeeeee] flex items-center gap-3">
          <span className="material-symbols-outlined text-[#223f1e] text-[24px]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search capsules, beans, drinks, or outlets..."
            className="w-full bg-transparent outline-none font-body-md text-base text-[#282526] placeholder:text-[#73796f]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-label-md text-[#73796f] hover:text-[#282526]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#73796f] hover:text-[#282526] hover:bg-[#e2e2e2] rounded-full cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Results */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Products Section */}
          <div>
            <h4 className="font-label-md text-xs uppercase tracking-wider text-[#223f1e] mb-3">
              Coffee & Beans ({matchingProducts.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {matchingProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p);
                    onClose();
                  }}
                  className="flex gap-3 p-2.5 rounded-lg border border-[#eeeeee] hover:bg-[#f3f3f3] cursor-pointer transition-colors"
                >
                  <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded bg-[#eeeeee]" />
                  <div className="flex-1">
                    <p className="font-title-lg text-sm text-[#282526]">{p.name}</p>
                    <p className="text-xs text-[#223f1e] font-bold">${p.price.toFixed(2)} SGD</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pickup Drinks */}
          <div>
            <h4 className="font-label-md text-xs uppercase tracking-wider text-[#223f1e] mb-3">
              Express Pickup Beverages ({matchingDrinks.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {matchingDrinks.map((d) => (
                <div
                  key={d.id}
                  onClick={() => {
                    onSelectOutlet(OUTLETS[0].id);
                    onClose();
                  }}
                  className="flex gap-3 p-2.5 rounded-lg border border-[#eeeeee] hover:bg-[#f3f3f3] cursor-pointer transition-colors"
                >
                  <img src={d.image} alt={d.name} className="w-12 h-12 object-cover rounded bg-[#eeeeee]" />
                  <div className="flex-1">
                    <p className="font-title-lg text-sm text-[#282526]">{d.name}</p>
                    <p className="text-xs text-[#73796f]">{d.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outlets */}
          <div>
            <h4 className="font-label-md text-xs uppercase tracking-wider text-[#223f1e] mb-3">
              Locations & Outlets ({matchingOutlets.length})
            </h4>
            <div className="space-y-2">
              {matchingOutlets.map((o) => (
                <div
                  key={o.id}
                  onClick={() => {
                    onSelectOutlet(o.id);
                    onClose();
                  }}
                  className="p-3 rounded-lg border border-[#eeeeee] hover:bg-[#f3f3f3] cursor-pointer transition-colors flex items-center justify-between"
                >
                  <div>
                    <p className="font-title-lg text-sm text-[#282526]">{o.name}</p>
                    <p className="text-xs text-[#434840]">{o.address}</p>
                  </div>
                  <span className="text-xs font-label-md uppercase text-[#223f1e]">Order Here →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
