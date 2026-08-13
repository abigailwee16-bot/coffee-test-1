import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#f9f9f9] w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden relative my-auto border border-[#c3c8bd]/30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/80 hover:bg-white text-[#282526] rounded-full flex items-center justify-center shadow cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square bg-[#f3f3f3]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.roastLevel && (
              <span className="absolute top-4 left-4 bg-[#282526] text-white text-xs font-label-md px-3 py-1 rounded uppercase tracking-wider">
                {product.roastLevel} Roast
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between gap-6 bg-white">
            <div className="space-y-4">
              <span className="font-label-md text-xs text-[#223f1e] uppercase tracking-widest font-semibold">
                Tiong Hoe Specialty Coffee
              </span>
              <h3 className="font-headline-sm text-headline-sm text-[#282526]">
                {product.name}
              </h3>
              <p className="font-title-lg text-lg text-[#282526] font-bold">
                ${product.price.toFixed(2)} {product.currency}
              </p>

              <p className="font-body-md text-sm text-[#434840]">
                {product.description}
              </p>

              {/* Origin Attributes Table */}
              <div className="bg-[#f3f3f3] p-3.5 rounded-lg text-xs font-label-md space-y-1.5 border border-[#c3c8bd]/30">
                {product.origin && (
                  <div className="flex justify-between">
                    <span className="text-[#73796f]">Origin:</span>
                    <span className="text-[#282526] font-medium">{product.origin}</span>
                  </div>
                )}
                {product.process && (
                  <div className="flex justify-between">
                    <span className="text-[#73796f]">Processing:</span>
                    <span className="text-[#282526] font-medium">{product.process}</span>
                  </div>
                )}
                {product.altitude && (
                  <div className="flex justify-between">
                    <span className="text-[#73796f]">Elevation:</span>
                    <span className="text-[#282526] font-medium">{product.altitude}</span>
                  </div>
                )}
              </div>

              {/* Tasting Notes */}
              {product.tastingNotes && (
                <div>
                  <span className="block text-xs font-label-md text-[#282526] uppercase mb-2">
                    Tasting Notes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="bg-[#D4AF37]/15 text-[#282526] text-xs font-label-md px-2.5 py-1 rounded border border-[#D4AF37]/30"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#eeeeee]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-label-md text-[#434840] uppercase">Quantity:</span>
                <div className="flex items-center border border-[#c3c8bd] rounded bg-[#f9f9f9]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-[#434840] hover:bg-[#e2e2e2] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-[#282526]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center text-[#434840] hover:bg-[#e2e2e2] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="w-full py-3 bg-[#223f1e] hover:bg-[#385633] text-white font-label-md text-sm uppercase tracking-wider rounded transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                Add {quantity} to Bag • ${(product.price * quantity).toFixed(2)} SGD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
