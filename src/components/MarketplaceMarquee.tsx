const MarketplaceMarquee = () => {
  const marketplaces = [
    "Shopee",
    "Mercado Livre", 
    "Amazon",
    "Shein",
    "Magalu",
    "TikTok Shop",
    "Bling",
  ];

  return (
    <div className="w-full bg-black border-y border-gray-800 overflow-hidden py-4">
      <div className="flex animate-marquee space-x-12">
        {/* Repeat the array multiple times for seamless loop */}
        {Array(4).fill(marketplaces).flat().map((marketplace, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 text-white whitespace-nowrap hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <div className="h-2 w-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-gray-200">
              {marketplace}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceMarquee;