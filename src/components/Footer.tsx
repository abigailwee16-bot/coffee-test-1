import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacyModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#f3f3f3] border-t border-[#c3c8bd]/20 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Col 1 */}
        <div>
          <h4 className="font-title-lg text-title-lg text-[#282526] mb-6">Heritage Roasts</h4>
          <ul className="space-y-3">
            <li
              onClick={() => onNavigate('shop')}
              className="font-body-md text-body-md text-[#434840] hover:text-[#223f1e] transition-colors cursor-pointer"
            >
              Coffee Beans
            </li>
            <li
              onClick={() => onNavigate('shop')}
              className="font-body-md text-body-md text-[#434840] hover:text-[#223f1e] transition-colors cursor-pointer"
            >
              Drip Bags
            </li>
            <li
              onClick={() => onNavigate('shop')}
              className="font-body-md text-body-md text-[#434840] hover:text-[#223f1e] transition-colors cursor-pointer"
            >
              Brewing Gear
            </li>
            <li
              onClick={() => onNavigate('shop')}
              className="font-body-md text-body-md text-[#434840] hover:text-[#223f1e] transition-colors cursor-pointer"
            >
              Bundles & Gifts
            </li>
          </ul>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-title-lg text-title-lg text-[#282526] mb-6">Our Story</h4>
          <ul className="space-y-3">
            <li
              onClick={() => onNavigate('about')}
              className="font-body-md text-body-md text-[#434840] hover:text-[#223f1e] transition-colors cursor-pointer"
            >
              Legacy since 1960s
            </li>
            <li
              onClick={() => onNavigate('about')}
              className="font-body-md text-body-md text-[#434840] hover:text-[#223f1e] transition-colors cursor-pointer"
            >
              Sustainability
            </li>
            <li
              onClick={() => onNavigate('wholesale')}
              className="font-body-md text-body-md text-[#434840] hover:text-[#223f1e] transition-colors cursor-pointer"
            >
              Wholesale Services
            </li>
            <li
              onClick={() => onNavigate('contact')}
              className="font-body-md text-body-md text-[#434840] hover:text-[#223f1e] transition-colors cursor-pointer"
            >
              Support & FAQ
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-title-lg text-title-lg text-[#282526] mb-6">Connect</h4>
          <div className="flex gap-4 mb-6">
            <span
              title="Loyalty QR"
              className="material-symbols-outlined p-2 rounded-full bg-[#eeeeee] hover:bg-[#223f1e] hover:text-white transition-all cursor-pointer"
            >
              qr_code_2
            </span>
            <span
              title="Share Page"
              className="material-symbols-outlined p-2 rounded-full bg-[#eeeeee] hover:bg-[#223f1e] hover:text-white transition-all cursor-pointer"
            >
              share
            </span>
            <span
              title="Email Us"
              className="material-symbols-outlined p-2 rounded-full bg-[#eeeeee] hover:bg-[#223f1e] hover:text-white transition-all cursor-pointer"
            >
              mail
            </span>
          </div>
          <p className="font-caption text-caption text-[#434840]">
            Follow our journey into the world of specialty coffee.
          </p>
        </div>

        {/* Col 4 - Newsletter */}
        <div>
          <h4 className="font-title-lg text-title-lg text-[#282526] mb-6">Newsletter</h4>
          <p className="font-body-md text-body-md text-[#434840] mb-4">
            Join the circle for brewing tips and first access.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex border-b border-[#282526]/20 pb-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-transparent w-full outline-none font-body-md text-[#1a1c1c] placeholder:text-[#73796f]"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="material-symbols-outlined text-[#223f1e] hover:translate-x-1 transition-transform cursor-pointer"
              >
                arrow_forward
              </button>
            </div>
            {subscribed && (
              <p className="text-xs font-label-md text-[#223f1e] mt-1 animate-fadeIn">
                ✓ Welcome to the circle! Check your inbox soon.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10 pt-8 border-t border-[#c3c8bd]/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-caption text-caption text-[#434840]">
          © 2024 Tiong Hoe Specialty Coffee. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <span
            onClick={onOpenPrivacyModal}
            className="font-caption text-caption text-[#434840] hover:text-[#223f1e] cursor-pointer"
          >
            Privacy Policy
          </span>
          <span
            onClick={onOpenPrivacyModal}
            className="font-caption text-caption text-[#434840] hover:text-[#223f1e] cursor-pointer"
          >
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};
