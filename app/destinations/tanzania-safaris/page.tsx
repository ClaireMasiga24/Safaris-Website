"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function TanzaniaSafaris() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative py-16 bg-[#FBF6EF]">
        <div className="absolute inset-0 bg-[#D4B483]/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            Tanzania Wildlife Safaris
          </h1>
          <p className="text-xl text-[#2B2B2B]/80 mb-8">
            Explore the vast wilderness of Tanzania's legendary national parks
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Destination Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">
              Discover Tanzania's Natural Wonders
            </h2>
            <p className="text-lg text-[#2B2B2B]/80 mb-6">
              Tanzania offers some of Africa's most iconic safari experiences, from the endless 
              plains of the Serengeti to the magnificent Ngorongoro Crater and the pristine beaches 
              of Zanzibar.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Serengeti National Park</h3>
                <p className="text-[#2B2B2B]/80">
                  Experience the world's greatest wildlife spectacle - the Great Migration - 
                  across vast savannas teeming with wildlife.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Ngorongoro Conservation Area</h3>
                <p className="text-[#2B2B2B]/80">
                  Explore the world's largest intact volcanic caldera, home to incredible 
                  concentrations of wildlife including the Big Five.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Zanzibar Archipelago</h3>
                <p className="text-[#2B2B2B]/80">
                  Combine your safari with tropical paradise - pristine beaches, rich history, 
                  and vibrant culture await.
                </p>
              </div>
            </div>
          </div>

          {/* Image and Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Tanzania Safari Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">Tanzania Safari Highlights</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Witness the Great Migration year-round
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Ngorongoro Crater - world's largest caldera
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Climb Mount Kilimanjaro, Africa's highest peak
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Zanzibar beach extensions and spice tours
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Authentic cultural experiences with Maasai
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="mt-8 text-center">
              <button className="bg-[#0E7C7B] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0A5F5E] transition-colors">
                Plan Your Tanzania Safari
              </button>
              <p className="text-sm text-[#2B2B2B]/60 mt-2">
                Contact our experts for personalized Tanzania safari packages
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
