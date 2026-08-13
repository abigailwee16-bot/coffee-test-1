import React from 'react';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section
      className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/aida/AP1WRLu6L160SLdhH2EoKPIDjN12dCvJzEy4Zd5OrDqSsrMc89Uq75O6my3_WMcOxG06BpAaxS35176LQC191LofGKsT2T4xvymaa-7FUbLLghvPV0zcrbs5NuP2MZiHYb800QT2f9-EVeiNk2bZUmbP9abebjC3jK2oDYBhSan6sQkKt4Pk-ymKGIjbZhO8luETg8V6S8_OYXmeBY_1_J3grXh0RDAjsn5rhFfElUmgy4F7Nwt-G87lsnz0tg')`
      }}
    >
      <div className="absolute inset-0 bg-[#282526]/60 mix-blend-multiply" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-10 w-full text-left flex flex-col items-start gap-4">
        <span className="font-label-md text-label-md text-[#F0F0F0] uppercase tracking-wider">
          We deliver coffee that's as personal as your taste.
        </span>
        <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-white mb-6">
          Better coffee, for all.
        </h1>
        <button
          id="hero-shop-now-btn"
          onClick={onShopClick}
          className="bg-[#385633] hover:bg-[#223f1e] active:scale-95 transition-all text-white font-label-md text-label-md uppercase px-8 py-3 rounded-full flex items-center justify-center cursor-pointer shadow-md"
        >
          Shop now
        </button>
      </div>
    </section>
  );
};
