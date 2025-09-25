import amazonLogo from "@/assets/amazon-logo.png";
import blingLogo from "@/assets/bling-logo.png";
import magaluLogo from "@/assets/magalu-logo.png";
import mlLogo from "@/assets/ml-logo.png";
import shopeeLogo from "@/assets/shopee-logo.png";
import tiktokLogo from "@/assets/tiktok-logo.png";

const MarketplaceMarquee = () => {
  const marketplaces = [
    { name: "Shopee", logo: shopeeLogo },
    { name: "Mercado Livre", logo: mlLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "Shein", logo: null }, // No logo available, will use text
    { name: "Magalu", logo: magaluLogo },
    { name: "TikTok Shop", logo: tiktokLogo },
    { name: "Bling", logo: blingLogo },
  ];

  // Duplicate the array for seamless loop
  const duplicatedMarketplaces = [...marketplaces, ...marketplaces];

  return (
    <div className="w-full bg-gray-900/95 border-y border-gray-800 overflow-hidden py-4">
      <div className="flex animate-marquee space-x-16">
        {duplicatedMarketplaces.map((marketplace, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 text-white whitespace-nowrap hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            {marketplace.logo ? (
              <img
                src={marketplace.logo}
                alt={marketplace.name}
                className="h-6 w-6 object-contain opacity-80"
              />
            ) : (
              <div className="h-6 w-6 bg-gradient-primary rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-white">S</span>
              </div>
            )}
            <span className="text-sm font-medium text-gray-200">
              {marketplace.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceMarquee;