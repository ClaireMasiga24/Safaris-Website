"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function KibaleForest() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative py-16 bg-[#FBF6EF]">
        <div className="absolute inset-0 bg-[#D4B483]/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            Kibale Forest Lodges
          </h1>
          <p className="text-xl text-[#2B2B2B]/80 mb-8">
            Experience the heart of Uganda's primate kingdom
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lodge Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">
              Discover Kibale Forest Accommodations
            </h2>
            <p className="text-lg text-[#2B2B2B]/80 mb-6">
              Nestled in the heart of Uganda's primate paradise, Kibale Forest National Park offers 
              some of the most exceptional lodge experiences in East Africa. From luxury eco-lodges 
              to comfortable mid-range options, find the perfect base for your chimpanzee trekking adventure.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Luxury Lodges</h3>
                <p className="text-[#2B2B2B]/80">
                  Experience ultimate comfort with premium amenities, gourmet dining, and 
                  exceptional service while being surrounded by the sounds of the forest.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Mid-Range Options</h3>
                <p className="text-[#2B2B2B]/80">
                  Comfortable accommodations with excellent facilities, perfect for travelers 
                  seeking quality experiences at reasonable prices.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Budget-Friendly Stays</h3>
                <p className="text-[#2B2B2B]/80">
                  Clean, comfortable options that provide great value while keeping you close 
                  to the park's incredible wildlife experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Image and Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Kibale Forest Lodge Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">Why Stay in Kibale Forest?</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Prime location for chimpanzee trekking
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Access to 13 primate species
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Bird watching paradise with 375+ species
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Guided nature walks and forest experiences
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Community and conservation initiatives
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="mt-8 text-center">
              <button className="bg-[#0E7C7B] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0A5F5E] transition-colors">
                Book Your Kibale Forest Stay
              </button>
              <p className="text-sm text-[#2B2B2B]/60 mt-2">
                Contact our safari experts for personalized lodge recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
