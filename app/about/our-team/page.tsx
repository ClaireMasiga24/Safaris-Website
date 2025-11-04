"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative py-16 bg-[#FBF6EF]">
        <div className="absolute inset-0 bg-[#D4B483]/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            Meet Our Team
          </h1>
          <p className="text-xl text-[#2B2B2B]/80 mb-8">
            Passionate experts dedicated to creating unforgettable safari experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#2B2B2B] mb-12 text-center">
          The People Behind Your Perfect Safari
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Team Member 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Team Member Photo</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">David Kato</h3>
              <p className="text-[#0E7C7B] font-semibold mb-3">Founder & Safari Director</p>
              <p className="text-[#2B2B2B]/80 text-sm">
                With over 15 years of experience in East African tourism, David ensures every 
                safari meets our highest standards of excellence and authenticity.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Team Member Photo</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">Sarah Nalwoga</h3>
              <p className="text-[#0E7C7B] font-semibold mb-3">Operations Manager</p>
              <p className="text-[#2B2B2B]/80 text-sm">
                Sarah coordinates all logistics and ensures seamless travel experiences 
                from start to finish, with meticulous attention to detail.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Team Member Photo</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">James Mugisha</h3>
              <p className="text-[#0E7C7B] font-semibold mb-3">Head Guide & Wildlife Expert</p>
              <p className="text-[#2B2B2B]/80 text-sm">
                James brings 12 years of guiding experience and deep knowledge of East Africa's 
                ecosystems, wildlife behavior, and conservation efforts.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D4B483]/20">
          <h3 className="text-2xl font-bold text-[#2B2B2B] mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-[#0E7C7B] text-white rounded-full p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2B2B2B] mb-2">Expertise</h4>
                <p className="text-[#2B2B2B]/80">Deep local knowledge and professional training</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#0E7C7B] text-white rounded-full p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2B2B2B] mb-2">Passion</h4>
                <p className="text-[#2B2B2B]/80">Genuine love for Africa and its wildlife</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#0E7C7B] text-white rounded-full p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2B2B2B] mb-2">Sustainability</h4>
                <p className="text-[#2B2B2B]/80">Commitment to conservation and community</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#0E7C7B] text-white rounded-full p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2B2B2B] mb-2">Excellence</h4>
                <p className="text-[#2B2B2B]/80">Uncompromising quality in every detail</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-[#2B2B2B] mb-4">Ready to Plan Your Safari?</h3>
          <p className="text-lg text-[#2B2B2B]/80 mb-6 max-w-2xl mx-auto">
            Our team is ready to create your perfect African adventure. Contact us today to start planning.
          </p>
          <button className="bg-[#0E7C7B] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0A5F5E] transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
