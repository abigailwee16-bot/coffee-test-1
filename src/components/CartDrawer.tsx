import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [fulfillmentType, setFulfillmentType] = useState<'delivery' | 'pickup'>('delivery');
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 75;
  const shippingCost = fulfillmentType === 'delivery' ? (subtotal >= freeShippingThreshold ? 0 : 8.00) : 0;
  const total = subtotal + shippingCost;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutComplete(true);
  };

  const handleCloseAndReset = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-[#f9f9f9] h-full flex flex-col shadow-2xl relative animate-slideLeft">
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#eeeeee] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#223f1e]">shopping_bag</span>
            <h3 className="font-title-lg text-title-lg text-[#282526]">Your Coffee Bag</h3>
            <span className="text-xs font-label-md bg-[#f3f3f3] text-[#434840] px-2 py-0.5 rounded-full">
              {items.reduce((acc, i) => acc + i.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#73796f] hover:text-[#282526] hover:bg-[#f3f3f3] rounded-full cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {checkoutComplete ? (
          /* Checkout Confirmation Screen */
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center gap-4 bg-white">
            <div className="w-16 h-16 rounded-full bg-[#223f1e]/10 text-[#223f1e] flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-[#282526]">Order Confirmed!</h4>
            <p className="font-body-md text-[#434840] max-w-xs">
              Thank you {customerName || 'Coffee Lover'}! Your order has been placed.
              {fulfillmentType === 'pickup'
                ? ' We are preparing your fresh coffee for pickup.'
                : ' Our roastery will package and dispatch your order.'}
            </p>
            <div className="bg-[#f3f3f3] p-4 rounded-lg w-full text-left font-caption space-y-1 my-2">
              <div className="flex justify-between font-semibold text-[#282526]">
                <span>Order Ref:</span>
                <span>#TH-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between text-[#434840]">
                <span>Fulfillment:</span>
                <span className="capitalize">{fulfillmentType}</span>
              </div>
              <div className="flex justify-between font-semibold text-[#223f1e] pt-2 border-t border-[#e2e2e2]">
                <span>Total Paid:</span>
                <span>${total.toFixed(2)} SGD</span>
              </div>
            </div>
            <button
              onClick={handleCloseAndReset}
              className="w-full py-3 bg-[#223f1e] text-white font-label-md uppercase rounded hover:bg-[#385633] transition-colors cursor-pointer mt-4"
            >
              Back to Shop
            </button>
          </div>
        ) : (
          /* Cart Content */
          <>
            {/* Free shipping progress bar */}
            {fulfillmentType === 'delivery' && (
              <div className="bg-white px-6 py-3 border-b border-[#eeeeee]">
                <div className="flex justify-between text-xs font-label-md text-[#434840] mb-1.5">
                  <span>
                    {subtotal >= freeShippingThreshold
                      ? '🎉 You unlocked FREE Local Shipping!'
                      : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} SGD more for FREE shipping`}
                  </span>
                  <span className="font-bold">{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full bg-[#eeeeee] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#223f1e] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Fulfillment Toggle */}
            <div className="px-6 py-3 bg-[#eeeeee] flex gap-2">
              <button
                onClick={() => setFulfillmentType('delivery')}
                className={`flex-1 py-1.5 text-xs font-label-md uppercase tracking-wider rounded transition-all cursor-pointer ${
                  fulfillmentType === 'delivery'
                    ? 'bg-[#223f1e] text-white shadow-xs'
                    : 'bg-white text-[#434840] hover:bg-[#e2e2e2]'
                }`}
              >
                Local Delivery
              </button>
              <button
                onClick={() => setFulfillmentType('pickup')}
                className={`flex-1 py-1.5 text-xs font-label-md uppercase tracking-wider rounded transition-all cursor-pointer ${
                  fulfillmentType === 'pickup'
                    ? 'bg-[#223f1e] text-white shadow-xs'
                    : 'bg-white text-[#434840] hover:bg-[#e2e2e2]'
                }`}
              >
                Store Pickup
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-[#73796f] gap-3">
                  <span className="material-symbols-outlined text-[48px]">local_cafe</span>
                  <p className="font-body-md text-lg">Your bag is currently empty.</p>
                  <p className="font-caption max-w-xs">Explore our specialty coffee capsules, whole beans, and fresh pickup drinks!</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-white rounded-lg border border-[#c3c8bd]/30 shadow-2xs"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded bg-[#f3f3f3] flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-title-lg text-sm text-[#282526] leading-tight">
                          {item.name}
                        </h4>
                        {item.selectedOutlet && (
                          <p className="text-[11px] font-caption text-[#223f1e] font-semibold mt-0.5">
                            📍 Pickup: {item.selectedOutlet}
                          </p>
                        )}
                        {item.customizations && (
                          <p className="text-[11px] font-caption text-[#73796f]">
                            {[
                              item.customizations.temperature,
                              item.customizations.milk,
                              item.customizations.sweetness
                            ]
                              .filter(Boolean)
                              .join(' • ')}
                          </p>
                        )}
                        <p className="text-xs font-semibold text-[#282526] mt-1">
                          ${item.price.toFixed(2)} SGD
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#f3f3f3]">
                        <div className="flex items-center border border-[#c3c8bd] rounded bg-[#f9f9f9]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#434840] hover:bg-[#e2e2e2] cursor-pointer"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#282526]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#434840] hover:bg-[#e2e2e2] cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-xs font-caption text-[#ba1a1a] hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Form */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-[#eeeeee] space-y-4">
                {/* Checkout Inputs */}
                <form onSubmit={handleCheckoutSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="px-3 py-2 border border-[#c3c8bd] rounded text-xs font-body-md outline-none focus:border-[#223f1e]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Phone *"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="px-3 py-2 border border-[#c3c8bd] rounded text-xs font-body-md outline-none focus:border-[#223f1e]"
                    />
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 pt-2 text-xs font-label-md text-[#434840]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)} SGD</span>
                    </div>
                    {fulfillmentType === 'delivery' && (
                      <div className="flex justify-between">
                        <span>Local Shipping</span>
                        <span>
                          {shippingCost === 0 ? (
                            <span className="text-[#223f1e] font-bold">FREE</span>
                          ) : (
                            `$${shippingCost.toFixed(2)} SGD`
                          )}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-bold text-[#282526] pt-2 border-t border-[#eeeeee]">
                      <span>Total</span>
                      <span>${total.toFixed(2)} SGD</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#223f1e] hover:bg-[#385633] text-white font-label-md text-sm uppercase tracking-wider rounded transition-colors shadow-sm cursor-pointer mt-2"
                  >
                    Place Order • ${total.toFixed(2)} SGD
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
