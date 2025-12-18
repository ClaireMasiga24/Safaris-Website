'use client';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/uganda-qj4bg38iw1ns4gti8w1tbvk70iad5o7gpqird8qucw.jpg')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-emerald-800/50 z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 flex items-end justify-center h-full px-4 pb-12 md:pb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Uganda Safaris
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Offering Eco-friendly, Mid-range to High-end, Luxury Gorilla Trekking Adventures and Wildlife Safaris in Uganda
          </p>
        </div>
      </div>

      {/* Countries Overlay - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white">
        <div className="text-lg md:text-xl font-serif font-light tracking-wider text-center" style={{ wordSpacing: '0.5em' }}>
          UGANDA | RWANDA | TANZANIA | ZANZIBAR
        </div>
      </div>

    </section>
  );
}
