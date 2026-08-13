import React, { useState } from 'react';
import { LOGO_URL } from '../data/mockData';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
  onNavigate,
  activeSection = 'shop'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Shop', id: 'shop' },
    { label: 'Coffee Cart', id: 'coffee-cart' },
    { label: 'Wholesale', id: 'wholesale' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f9f9f9]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(40,37,38,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 lg:px-10 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('shop')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          id="header-brand-btn"
        >
          <img
            alt="Tiong Hoe Specialty Coffee"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            src={LOGO_URL}
          />
          <span className="font-headline-sm text-headline-sm text-[#223f1e] uppercase tracking-wider hidden sm:block">
            Tiong Hoe
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors uppercase font-label-md text-label-md cursor-pointer ${
                  isActive
                    ? 'text-[#223f1e] font-semibold border-b-2 border-[#223f1e] pb-1'
                    : 'text-[#434840] hover:text-[#223f1e]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-5 sm:gap-6">
          <button
            id="header-search-btn"
            onClick={onOpenSearch}
            aria-label="Search coffee & beverages"
            className="p-2 rounded-full hover:bg-black/5 text-[#434840] hover:text-[#223f1e] transition-colors cursor-pointer focus:outline-none"
          >
            <span className="material-symbols-outlined block text-[24px]">search</span>
          </button>

          <button
            id="header-cart-btn"
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            className="p-2 rounded-full hover:bg-black/5 text-[#434840] hover:text-[#223f1e] transition-colors relative cursor-pointer focus:outline-none"
          >
            <span className="material-symbols-outlined block text-[24px]">shopping_bag</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#223f1e] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            id="header-account-btn"
            onClick={onOpenAccount}
            aria-label="User Account"
            className="w-9 h-9 rounded-full bg-[#223f1e] hover:bg-[#385633] flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
          >
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="header-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#434840] hover:text-[#223f1e] cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f9f9f9] border-t border-[#c3c8bd]/30 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left font-label-md text-[18px] uppercase tracking-wider py-2 text-[#282526] hover:text-[#223f1e] border-b border-[#eeeeee]"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
