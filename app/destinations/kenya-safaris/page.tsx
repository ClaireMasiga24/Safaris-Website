"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function KenyaSafaris() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative py-16 bg-[#FBF6EF]">
        <div className="absolute inset-0 bg-[#D4B483]/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            Kenya Wildlife Safaris
          </h1>
          <p className="text-xl text-[#2B2B2B]/80 mb-8">
            Experience the classic African safari in Kenya's iconic national parks
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Destination Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">
              Discover Kenya's Wildlife Wonders
            </h2>
            <p className="text-lg text-[#2B2B2B]/80 mb-6">
              Kenya is the birthplace of the classic African safari, offering some of the most 
              spectacular wildlife viewing opportunities on the continent. From the Great Migration 
              to pristine beaches, Kenya delivers unforgettable experiences.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Masai Mara National Reserve</h3>
                <p className="text-[#2B2B2B]/80">
                  Witness the Great Migration, see the Big Five, and experience authentic Maasai culture 
                  in Africa's most famous wildlife reserve.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Amboseli National Park</h3>
                <p className="text-[#2B2B2B]/80">
                  Famous for its large elephant herds and stunning views of Mount Kilimanjaro, 
                  Africa's highest peak.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Samburu & Laikipia</h3>
                <p className="text-[#2B2B2B]/80">
                  Discover unique wildlife species and experience authentic cultural encounters 
                  in Kenya's northern wilderness.
                </p>
              </div>
            </div>
          </div>

          {/* Image and Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Kenya Safari Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">Kenya Safari Highlights</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Witness the Great Migration (July-October)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Big Five wildlife viewing
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Hot air balloon safaris over the Mara
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Cultural experiences with Maasai communities
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Beach extensions to Mombasa and Lamu
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="mt-8 text-center">
              <button className="bg-[#0E7C7B] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0A5F5E] transition-colors">
                Plan Your Kenya Safari
              </button>
              <p className="text-sm text-[#2B2B2B]/60 mt-2">
                Contact our experts for personalized Kenya safari packages
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
