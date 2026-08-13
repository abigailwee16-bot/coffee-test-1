import React from 'react';

export const ValuePropsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0F0F0] pb-24 pt-8">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-[#c3c8bd]/30">
          {/* Prop 1 */}
          <div className="flex flex-col gap-4">
            <span className="material-symbols-outlined text-[32px] text-[#223f1e]">
              local_shipping
            </span>
            <h4 className="font-title-lg text-title-lg text-[#282526]">
              Free shipping
            </h4>
            <p className="font-body-md text-body-md text-[#434840]">
              Free local shipping with orders above $75.
            </p>
          </div>

          {/* Prop 2 */}
          <div className="flex flex-col gap-4">
            <span className="material-symbols-outlined text-[32px] text-[#223f1e]">
              coffee_maker
            </span>
            <h4 className="font-title-lg text-title-lg text-[#282526]">
              We roast coffee in small batches twice a week.
            </h4>
            <ul className="font-body-md text-body-md text-[#434840] space-y-2">
              <li>
                - Place your order by <strong className="text-[#282526]">Wednesday 8 PM</strong> to receive beans roasted on Thursday and shipped on <strong className="text-[#282526]">Friday</strong>
              </li>
              <li>
                - Place your order by <strong className="text-[#282526]">Sunday 8pm</strong> to receive beans roasted on Monday and shipped on <strong className="text-[#282526]">Tuesday</strong>
              </li>
            </ul>
          </div>

          {/* Prop 3 */}
          <div className="flex flex-col gap-4">
            <span className="material-symbols-outlined text-[32px] text-[#223f1e]">
              inventory_2
            </span>
            <h4 className="font-title-lg text-title-lg text-[#282526]">
              Ship out within 5 days*
            </h4>
            <p className="font-body-md text-body-md text-[#434840]">
              Courier will only pick it up on every Tuesdays and Fridays
            </p>
          </div>

          {/* Prop 4 */}
          <div className="flex flex-col gap-4">
            <span className="material-symbols-outlined text-[32px] text-[#223f1e]">
              support_agent
            </span>
            <h4 className="font-title-lg text-title-lg text-[#282526]">
              Customer service
            </h4>
            <p className="font-body-md text-body-md text-[#434840]">
              Our support team is available from 10am to 5pm, Mondays to Fridays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
