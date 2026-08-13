import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatsNewSection } from './components/WhatsNewSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PickupSection } from './components/PickupSection';
import { CoffeeGuideSection } from './components/CoffeeGuideSection';
import { ValuePropsSection } from './components/ValuePropsSection';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { PickupMenuModal } from './components/PickupMenuModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { GuideModal } from './components/GuideModal';

import { PRODUCTS, OUTLETS } from './data/mockData';
import { Product, CartItem } from './types';

export default function App() {
  // Navigation & Modals State
  const [activeSection, setActiveSection] = useState<string>('shop');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isPickupModalOpen, setIsPickupModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const [selectedOutletId, setSelectedOutletId] = useState<string>(OUTLETS[0].id);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'smoky-quartz-init',
      productId: 'smoky-quartz-capsules',
      name: 'Smoky Quartz Capsules',
      price: 15.00,
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLsgb7WP_7PydG1lBvznGH1__0-uBa8IR4ILGHVq11Sq1wAjy5NMfvxbr_z31KqiOTp8zeV0NUzjoQWt394ibYemkwmw4BSJzmXq4TzP_5DGjLCCsnYvLjX4eJ24SJBb5jIaQULCxcl9djTT1PZHCJgrpWio3GkI16JhlGUvteIe7UGMIS7sBtN2xYXuh0Hbw096E_Cqkn7Ey31tupVXUaR4X-TLyxlzGhXxgWgw39KCIVZHnKBt0JpGixY',
      quantity: 1,
      type: 'product'
    }
  ]);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'shop') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(
        sectionId === 'coffee-cart' || sectionId === 'wholesale' || sectionId === 'about' || sectionId === 'contact'
          ? 'extra-nav-info'
          : `${sectionId}-section`
      );
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Add Product to Cart
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.type === 'product'
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          id: `product-${product.id}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          type: 'product'
        }
      ];
    });
    showToast(`Added ${quantity}x ${product.name} to your coffee bag!`);
  };

  // Add Custom Drink / Pickup item to Cart
  const handleAddDrinkToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    showToast(`Added ${item.name} for pickup at ${item.selectedOutlet}!`);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(cartItemId);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenOutletPickup = (outletId: string) => {
    setSelectedOutletId(outletId);
    setIsPickupModalOpen(true);
  };

  const handleSelectProductById = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col font-body-md antialiased selection:bg-[#223f1e] selection:text-white">
      {/* Fixed Navigation Header */}
      <Header
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#f9f9f9] flex-1">
        {/* Hero Section */}
        <Hero
          onShopClick={() => {
            const el = document.getElementById('shop-products-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Dynamic Nav Banner if non-home nav link selected */}
        {(activeSection === 'coffee-cart' ||
          activeSection === 'wholesale' ||
          activeSection === 'about' ||
          activeSection === 'contact') && (
          <div id="extra-nav-info" className="bg-[#282526] text-white py-12 px-6">
            <div className="max-w-[1280px] mx-auto text-center space-y-3">
              <span className="font-label-md text-xs text-[#D4AF37] uppercase tracking-widest">
                Tiong Hoe Specialty Coffee
              </span>
              <h2 className="font-headline-md text-headline-md uppercase">
                {activeSection === 'coffee-cart' && 'Mobile Coffee Cart Catering'}
                {activeSection === 'wholesale' && 'Specialty Roastery & Wholesale Beans'}
                {activeSection === 'about' && 'Our Heritage Since 1960'}
                {activeSection === 'contact' && 'Get In Touch'}
              </h2>
              <p className="font-body-md text-white/80 max-w-xl mx-auto">
                {activeSection === 'coffee-cart' &&
                  'Bring our professional baristas and mobile espresso setup directly to your weddings, corporate events, and private popups.'}
                {activeSection === 'wholesale' &&
                  'Partner with us for commercial espresso equipment, barista training, and custom roasted house coffee blends for your café.'}
                {activeSection === 'about' &&
                  'Founded in 1960 by Mr. Tan Tiong Hoe, pioneering Singapore’s specialty coffee culture with passion and precision.'}
                {activeSection === 'contact' &&
                  'Questions about our roasts or orders? Reach out at contact@tionghoe.com or call +65 6474 5442.'}
              </p>
              <button
                onClick={() => setActiveSection('shop')}
                className="mt-4 px-6 py-2 bg-[#223f1e] text-white text-xs font-label-md uppercase rounded hover:bg-[#385633] cursor-pointer"
              >
                Back to Coffee Shop
              </button>
            </div>
          </div>
        )}

        {/* What's New Section (Outlet Announcement & Carousel) */}
        <WhatsNewSection onSelectOutlet={handleOpenOutletPickup} />

        {/* Featured Coffee Capsules & Products */}
        <FeaturedProducts
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onViewAllClick={() => {
            const el = document.getElementById('shop-products-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Order your drinks ahead for Pickup */}
        <PickupSection onSelectOutlet={handleOpenOutletPickup} />

        {/* Coffee Buying Guide Section */}
        <CoffeeGuideSection onOpenGuide={() => setIsGuideModalOpen(true)} />

        {/* Value Props & Shipping Schedule */}
        <ValuePropsSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Pickup Beverage Ordering Modal */}
      <PickupMenuModal
        isOpen={isPickupModalOpen}
        initialOutletId={selectedOutletId}
        onClose={() => setIsPickupModalOpen(false)}
        onAddToCart={handleAddDrinkToCart}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectOutlet={handleOpenOutletPickup}
      />

      {/* Account Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* Guide Article Modal */}
      <GuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        onSelectProductById={handleSelectProductById}
      />

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-2xl relative space-y-4">
            <button
              onClick={() => setIsPrivacyModalOpen(false)}
              className="absolute top-4 right-4 text-[#73796f] hover:text-[#282526]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline-sm text-[#282526]">Privacy & Terms</h3>
            <p className="font-body-md text-sm text-[#434840]">
              At Tiong Hoe Specialty Coffee, we are committed to safeguarding your personal information.
              Orders placed online are processed securely and your details are never shared with unauthorized third parties.
            </p>
            <button
              onClick={() => setIsPrivacyModalOpen(false)}
              className="w-full py-2 bg-[#223f1e] text-white font-label-md text-xs uppercase rounded cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Toast Banner Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#282526] text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-slideUp border border-[#385633]">
          <span className="material-symbols-outlined text-[#a7ca9e] text-[20px]">check_circle</span>
          <span className="font-label-md text-xs uppercase tracking-wide">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
