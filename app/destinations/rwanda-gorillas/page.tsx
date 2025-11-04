"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function RwandaGorillas() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative py-16 bg-[#FBF6EF]">
        <div className="absolute inset-0 bg-[#D4B483]/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            Rwanda Gorilla Safaris
          </h1>
          <p className="text-xl text-[#2B2B2B]/80 mb-8">
            Experience the land of a thousand hills and mountain gorillas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Destination Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">
              Discover Rwanda's Mountain Gorillas
            </h2>
            <p className="text-lg text-[#2B2B2B]/80 mb-6">
              Rwanda offers one of the most accessible and well-organized gorilla trekking experiences 
              in Africa. With its stunning landscapes, rich culture, and conservation success stories, 
              Rwanda provides an unforgettable primate adventure.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Volcanoes National Park</h3>
                <p className="text-[#2B2B2B]/80">
                  Home to the famous mountain gorillas, this park offers incredible trekking experiences 
                  through lush bamboo forests and volcanic landscapes.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Nyungwe Forest</h3>
                <p className="text-[#2B2B2B]/80">
                  Explore one of Africa's oldest rainforests with chimpanzee tracking, canopy walks, 
                  and incredible biodiversity.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Akagera National Park</h3>
                <p className="text-[#2B2B2B]/80">
                  Experience classic African savanna wildlife with lions, elephants, giraffes, and 
                  diverse birdlife in Rwanda's only Big Five park.
                </p>
              </div>
            </div>
          </div>

          {/* Image and Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Rwanda Gorilla Trekking Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">Why Choose Rwanda?</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Well-organized gorilla trekking permits
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Excellent infrastructure and accessibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Rich cultural experiences and genocide memorials
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Stunning "Land of a Thousand Hills" landscapes
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E7C7B] mr-2">✓</span>
                    Strong conservation and community programs
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="mt-8 text-center">
              <button className="bg-[#0E7C7B] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0A5F5E] transition-colors">
                Plan Your Rwanda Safari
              </button>
              <p className="text-sm text-[#2B2B2B]/60 mt-2">
                Contact our experts for personalized Rwanda gorilla trekking packages
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
