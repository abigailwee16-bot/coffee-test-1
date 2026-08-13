import React from 'react';
import { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onViewAllClick: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onViewAllClick,
}) => {
  return (
    <section id="shop-products-section" className="w-full bg-[#F0F0F0] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-md text-label-md text-[#434840] uppercase tracking-wider">
              Tiong Hoe Specialty Coffee at your fingertips.
            </span>
            <h2 className="font-headline-md text-headline-md text-[#282526]">
              Coffee Capsules & Heritage Beans
            </h2>
            <p className="font-body-md text-body-md text-[#434840] mt-2">
              Experience the perfect balance of specialty grade quality and ultimate convenience in every cup. No scales, no grinders, just the push of a button for a consistent brew.
            </p>
          </div>
          <button
            id="featured-view-all-btn"
            onClick={onViewAllClick}
            className="flex items-center gap-2 font-label-md text-label-md uppercase text-[#282526] hover:text-[#223f1e] transition-colors group cursor-pointer"
          >
            View all products
            <span className="w-6 h-6 rounded-full bg-[#c3c8bd]/30 flex items-center justify-center group-hover:bg-[#223f1e] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </span>
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                onClick={() => onSelectProduct(product)}
                className="relative w-full aspect-square overflow-hidden bg-[#f3f3f3] cursor-pointer"
              >
                <img
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={product.image}
                />
                <div className="absolute top-3 left-3 bg-[#282526]/80 backdrop-blur-sm text-white text-[11px] font-label-md px-2.5 py-0.5 rounded uppercase tracking-widest">
                  {product.category}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div onClick={() => onSelectProduct(product)} className="cursor-pointer">
                  <h3 className="font-title-lg text-title-lg text-[#282526] group-hover:text-[#223f1e] transition-colors">
                    {product.name}
                  </h3>
                  {product.tastingNotes && (
                    <p className="font-caption text-[#73796f] mt-1">
                      {product.tastingNotes.join(' • ')}
                    </p>
                  )}
                  <div className="mt-2 font-body-md text-body-md text-[#434840] font-semibold">
                    ${product.price.toFixed(2)} {product.currency}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#eeeeee]">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2 text-xs font-label-md uppercase tracking-wider text-[#434840] hover:text-[#223f1e] border border-[#c3c8bd] rounded hover:bg-[#f3f3f3] transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 py-2 text-xs font-label-md uppercase tracking-wider bg-[#223f1e] hover:bg-[#385633] text-white rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
