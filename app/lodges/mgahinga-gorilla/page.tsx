"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function MgahingaGorilla() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative py-16 bg-[#FBF6EF]">
        <div className="absolute inset-0 bg-[#D4B483]/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            Mgahinga Gorilla Lodges
          </h1>
          <p className="text-xl text-[#2B2B2B]/80 mb-8">
            Stay in the heart of Uganda's volcanic gorilla sanctuary
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lodge Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">
              Discover Mgahinga Gorilla Accommodations
            </h2>
            <p className="text-lg text-[#2B2B2B]/80 mb-6">
              Mgahinga Gorilla National Park offers unique lodge experiences at the foothills 
              of the Virunga volcanoes. From eco-friendly lodges to comfortable mountain retreats, 
              find your perfect base for gorilla trekking and golden monkey tracking adventures.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Volcano View Lodges</h3>
                <p className="text-[#2B2B2B]/80">
                  Stunning accommodations with panoramic views of the Virunga volcanoes, 
                  offering luxury amenities and authentic mountain experiences.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Eco-Friendly Retreats</h3>
                <p className="text-[#2B2B2B]/80">
                  Sustainable lodges focused on conservation and community engagement, 
                  providing comfortable stays with minimal environmental impact.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Mountain Comfort Stays</h3>
                <p className="text-[#2B2B2B]/80">
                  Cozy accommodations perfect for adventurers, offering warm hospitality 
                  and convenient access to park activities.
                </p>
              </div>
            </div>
          </div>

          {/* Image and Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Mgahinga Gorilla Lodge Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">Why Stay in Mgahinga?</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Gorilla trekking in Uganda's smallest national park
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Golden monkey tracking experiences
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Volcano hiking and nature walks
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Cultural experiences with Batwa communities
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Stunning views of the Virunga volcanoes
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="mt-8 text-center">
              <button className="bg-[#0E7C7B] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0A5F5E] transition-colors">
                Book Your Mgahinga Stay
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
