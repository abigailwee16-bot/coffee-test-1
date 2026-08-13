import React, { useState } from 'react';
import { OUTLETS, DRINK_MENU } from '../data/mockData';
import { DrinkOption, CartItem } from '../types';

interface PickupMenuModalProps {
  isOpen: boolean;
  initialOutletId?: string;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const PickupMenuModal: React.FC<PickupMenuModalProps> = ({
  isOpen,
  initialOutletId,
  onClose,
  onAddToCart,
}) => {
  const [selectedOutletId, setSelectedOutletId] = useState<string>(
    initialOutletId || OUTLETS[0].id
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeDrink, setActiveDrink] = useState<DrinkOption | null>(null);

  // Customization state for active drink
  const [temperature, setTemperature] = useState<string>('Iced');
  const [milk, setMilk] = useState<string>('Fresh Full Cream Milk');
  const [sweetness, setSweetness] = useState<string>('Regular');

  if (!isOpen) return null;

  const currentOutlet = OUTLETS.find((o) => o.id === selectedOutletId) || OUTLETS[0];

  const categories = ['All', 'Espresso & Coffee', 'Cold Brew', 'Tea & Matcha', 'Pastries'];

  const filteredDrinks = selectedCategory === 'All'
    ? DRINK_MENU
    : DRINK_MENU.filter((d) => d.category === selectedCategory);

  const handleOpenCustomizer = (drink: DrinkOption) => {
    setActiveDrink(drink);
    setTemperature(drink.temperatures ? drink.temperatures[0] : 'Hot');
    setMilk(drink.milkOptions ? drink.milkOptions[0] : '');
    setSweetness(drink.sweetnessLevels ? drink.sweetnessLevels[0] : '');
  };

  const handleAddDrinkToCart = () => {
    if (!activeDrink) return;

    let extraCost = 0;
    if (milk.includes('+ $1.00')) extraCost += 1.0;
    if (milk.includes('+ $0.80')) extraCost += 0.8;

    const cartItem: CartItem = {
      id: `pickup-${activeDrink.id}-${Date.now()}`,
      drinkId: activeDrink.id,
      name: activeDrink.name,
      price: activeDrink.basePrice + extraCost,
      image: activeDrink.image,
      quantity: 1,
      type: 'pickup_drink',
      selectedOutlet: currentOutlet.name,
      customizations: {
        temperature: activeDrink.temperatures ? temperature : undefined,
        milk: activeDrink.milkOptions ? milk : undefined,
        sweetness: activeDrink.sweetnessLevels ? sweetness : undefined
      }
    };

    onAddToCart(cartItem);
    setActiveDrink(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#f9f9f9] w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto">
        {/* Header */}
        <div className="p-6 bg-[#282526] text-white flex items-center justify-between">
          <div>
            <span className="font-label-md text-xs text-[#a7ca9e] uppercase tracking-widest">
              Express Store Pickup Menu
            </span>
            <h3 className="font-headline-sm text-white">Order Drinks Ahead</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Outlet Selector Header Bar */}
        <div className="bg-[#eeeeee] p-4 border-b border-[#c3c8bd]/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ba1a1a]">location_on</span>
            <span className="font-label-md text-sm text-[#282526]">Pickup Location:</span>
            <select
              value={selectedOutletId}
              onChange={(e) => setSelectedOutletId(e.target.value)}
              className="bg-white border border-[#c3c8bd] px-3 py-1.5 rounded font-label-md text-sm text-[#282526] outline-none cursor-pointer focus:border-[#223f1e]"
            >
              {OUTLETS.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>
          <div className="text-xs font-body-md text-[#434840] max-w-md hidden sm:block">
            {currentOutlet.directions}
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="bg-white border-b border-[#eeeeee] px-6 py-2 flex items-center gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#223f1e] text-white font-semibold'
                  : 'bg-[#f3f3f3] text-[#434840] hover:bg-[#e2e2e2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDrinks.map((drink) => (
            <div
              key={drink.id}
              className="bg-white border border-[#c3c8bd]/30 rounded-lg p-4 flex gap-4 hover:shadow-md transition-shadow group cursor-pointer"
              onClick={() => handleOpenCustomizer(drink)}
            >
              <img
                src={drink.image}
                alt={drink.name}
                className="w-20 h-20 object-cover rounded bg-[#f3f3f3] flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-title-lg text-base text-[#282526] group-hover:text-[#223f1e] transition-colors">
                    {drink.name}
                  </h4>
                  <p className="font-caption text-[#434840] line-clamp-2 mt-0.5">
                    {drink.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#eeeeee]">
                  <span className="font-bold text-sm text-[#282526]">
                    ${drink.basePrice.toFixed(2)} SGD
                  </span>
                  <span className="text-xs font-label-md uppercase text-[#223f1e] bg-[#223f1e]/10 px-2.5 py-1 rounded flex items-center gap-1 group-hover:bg-[#223f1e] group-hover:text-white transition-colors">
                    <span>Customize</span>
                    <span className="material-symbols-outlined text-[14px]">add</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drink Customization Modal Layer */}
        {activeDrink && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs z-20 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative animate-fadeIn space-y-4">
              <button
                onClick={() => setActiveDrink(null)}
                className="absolute top-4 right-4 p-1 text-[#73796f] hover:text-[#282526]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="flex gap-4 items-center border-b border-[#eeeeee] pb-4">
                <img
                  src={activeDrink.image}
                  alt={activeDrink.name}
                  className="w-16 h-16 object-cover rounded bg-[#f3f3f3]"
                />
                <div>
                  <h4 className="font-title-lg text-lg text-[#282526]">{activeDrink.name}</h4>
                  <p className="text-xs font-semibold text-[#223f1e]">
                    Base: ${activeDrink.basePrice.toFixed(2)} SGD
                  </p>
                </div>
              </div>

              {/* Customization Options */}
              {activeDrink.temperatures && (
                <div>
                  <label className="block text-xs font-label-md uppercase text-[#282526] mb-1.5">
                    Temperature
                  </label>
                  <div className="flex gap-2">
                    {activeDrink.temperatures.map((temp) => (
                      <button
                        key={temp}
                        onClick={() => setTemperature(temp)}
                        className={`flex-1 py-2 text-xs font-label-md rounded border cursor-pointer ${
                          temperature === temp
                            ? 'bg-[#223f1e] text-white border-[#223f1e]'
                            : 'bg-white text-[#434840] border-[#c3c8bd]'
                        }`}
                      >
                        {temp}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeDrink.milkOptions && (
                <div>
                  <label className="block text-xs font-label-md uppercase text-[#282526] mb-1.5">
                    Milk Choice
                  </label>
                  <div className="space-y-1.5">
                    {activeDrink.milkOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setMilk(opt)}
                        className={`w-full text-left px-3 py-2 text-xs font-label-md rounded border cursor-pointer ${
                          milk === opt
                            ? 'bg-[#223f1e] text-white border-[#223f1e]'
                            : 'bg-white text-[#434840] border-[#c3c8bd]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeDrink.sweetnessLevels && (
                <div>
                  <label className="block text-xs font-label-md uppercase text-[#282526] mb-1.5">
                    Sweetness Level
                  </label>
                  <div className="flex gap-2">
                    {activeDrink.sweetnessLevels.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSweetness(s)}
                        className={`flex-1 py-1.5 text-xs font-label-md rounded border cursor-pointer ${
                          sweetness === s
                            ? 'bg-[#223f1e] text-white border-[#223f1e]'
                            : 'bg-white text-[#434840] border-[#c3c8bd]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={handleAddDrinkToCart}
                className="w-full py-3 bg-[#223f1e] hover:bg-[#385633] text-white font-label-md uppercase rounded transition-colors shadow-sm cursor-pointer mt-4"
              >
                Add to Pickup Bag at {currentOutlet.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
