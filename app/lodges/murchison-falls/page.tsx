"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function MurchisonFalls() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative py-16 bg-[#FBF6EF]">
        <div className="absolute inset-0 bg-[#D4B483]/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            Murchison Falls Lodges
          </h1>
          <p className="text-xl text-[#2B2B2B]/80 mb-8">
            Experience Uganda's largest national park and the mighty Nile River
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lodge Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">
              Discover Murchison Falls Accommodations
            </h2>
            <p className="text-lg text-[#2B2B2B]/80 mb-6">
              Murchison Falls National Park offers spectacular lodges overlooking the Nile River 
              and the park's abundant wildlife. From luxury riverside retreats to comfortable 
              safari camps, find your perfect base for exploring Uganda's largest protected area.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Luxury Riverside Lodges</h3>
                <p className="text-[#2B2B2B]/80">
                  Premium accommodations with stunning Nile River views, gourmet dining, 
                  and exceptional wildlife viewing opportunities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Mid-Range Safari Camps</h3>
                <p className="text-[#2B2B2B]/80">
                  Comfortable tented camps and lodges offering authentic safari experiences 
                  with modern amenities and excellent service.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Budget-Friendly Options</h3>
                <p className="text-[#2B2B2B]/80">
                  Clean, comfortable accommodations that provide great value while keeping you 
                  close to the park's main attractions and wildlife.
                </p>
              </div>
            </div>
          </div>

          {/* Image and Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Murchison Falls Lodge Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">Why Stay in Murchison Falls?</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Spectacular Nile River boat cruises
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Incredible wildlife including lions, elephants, giraffes
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    View the mighty Murchison Falls waterfall
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Excellent bird watching with 450+ species
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Chimpanzee tracking in Budongo Forest
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="mt-8 text-center">
              <button className="bg-[#0E7C7B] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0A5F5E] transition-colors">
                Book Your Murchison Falls Stay
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
