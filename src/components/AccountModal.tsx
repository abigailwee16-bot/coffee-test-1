import React, { useState } from 'react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'rewards'>('profile');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#f9f9f9] w-full max-w-xl rounded-xl shadow-2xl overflow-hidden relative my-auto border border-[#c3c8bd]/30">
        {/* Header */}
        <div className="p-6 bg-[#282526] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#385633] flex items-center justify-center font-bold text-white">
              TH
            </div>
            <div>
              <h3 className="font-title-lg text-lg text-white">Tiong Hoe Heritage Circle</h3>
              <span className="text-xs font-label-md text-[#a7ca9e] uppercase tracking-wider">
                Gold Roastery Member
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-[#eeeeee] flex">
          {(['profile', 'orders', 'rewards'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-xs font-label-md uppercase tracking-wider cursor-pointer transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-[#223f1e] text-[#223f1e] font-bold'
                  : 'text-[#73796f] hover:text-[#282526]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {activeTab === 'profile' && (
            <div className="space-y-4 text-sm font-body-md text-[#434840]">
              <div className="bg-white p-4 rounded-lg border border-[#c3c8bd]/30 space-y-2">
                <p className="font-semibold text-[#282526]">Account Information</p>
                <p>Email: customer@tionghoe.com.sg</p>
                <p>Phone: +65 9123 4567</p>
                <p>Default Pickup Outlet: Novena Square 2</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#c3c8bd]/30 space-y-2">
                <p className="font-semibold text-[#282526]">Subscription Preferences</p>
                <p>✓ Bi-weekly freshly roasted coffee beans newsletter active</p>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-[#c3c8bd]/30 text-xs font-body-md space-y-2">
                <div className="flex justify-between font-bold text-[#282526]">
                  <span>Order #TH-882910</span>
                  <span className="text-[#223f1e]">Fulfilled</span>
                </div>
                <p className="text-[#73796f]">2x Smoky Quartz Capsules ($30.00 SGD)</p>
                <p className="text-[11px] text-[#73796f]">Picked up at Novena Square 2 • Aug 10, 2026</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#c3c8bd]/30 text-xs font-body-md space-y-2">
                <div className="flex justify-between font-bold text-[#282526]">
                  <span>Order #TH-741902</span>
                  <span className="text-[#223f1e]">Delivered</span>
                </div>
                <p className="text-[#73796f]">1x Heritage Signature Whole Beans (250g)</p>
                <p className="text-[11px] text-[#73796f]">Local Delivery • Jul 28, 2026</p>
              </div>
            </div>
          )}

          {activeTab === 'rewards' && (
            <div className="bg-white p-6 rounded-lg border border-[#c3c8bd]/30 text-center space-y-3">
              <span className="material-symbols-outlined text-[48px] text-[#D4AF37]">
                workspace_premium
              </span>
              <h4 className="font-title-lg text-lg text-[#282526]">420 Coffee Beans Points</h4>
              <p className="font-caption text-[#434840]">
                Earn 1 Bean Point for every $1 SGD spent online or at any Tiong Hoe outlet.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => alert('Redemption feature: $5 SGD voucher claimed!')}
                  className="px-6 py-2 bg-[#223f1e] text-white text-xs font-label-md uppercase rounded hover:bg-[#385633] cursor-pointer"
                >
                  Redeem $5 Off Voucher (300 pts)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
