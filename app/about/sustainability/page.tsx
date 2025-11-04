"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative py-16 bg-[#FBF6EF]">
        <div className="absolute inset-0 bg-[#D4B483]/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            Sustainability & Conservation
          </h1>
          <p className="text-xl text-[#2B2B2B]/80 mb-8">
            Committed to protecting Africa's wildlife and supporting local communities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Conservation Initiatives */}
          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">
              Our Conservation Commitment
            </h2>
            <p className="text-lg text-[#2B2B2B]/80 mb-6">
              We believe that responsible tourism is the key to preserving Africa's incredible 
              wildlife and natural heritage for future generations. Our conservation efforts 
              focus on protecting endangered species and their habitats.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Gorilla Conservation</h3>
                <p className="text-[#2B2B2B]/80">
                  Supporting mountain gorilla protection through permit fees, anti-poaching 
                  patrols, and habitat preservation in Uganda and Rwanda.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Wildlife Protection</h3>
                <p className="text-[#2B2B2B]/80">
                  Partnering with conservation organizations to protect elephants, lions, 
                  and other endangered species across East Africa.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Habitat Restoration</h3>
                <p className="text-[#2B2B2B]/80">
                  Supporting reforestation projects and sustainable land management 
                  practices in critical wildlife corridors.
                </p>
              </div>
            </div>
          </div>

          {/* Community Support */}
          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6">
              Community Empowerment
            </h2>
            <p className="text-lg text-[#2B2B2B]/80 mb-6">
              We work closely with local communities to ensure that tourism benefits 
              the people who live alongside Africa's wildlife and natural wonders.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Local Employment</h3>
                <p className="text-[#2B2B2B]/80">
                  Prioritizing local hiring for guides, drivers, lodge staff, and 
                  supporting local businesses throughout our supply chain.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Education Programs</h3>
                <p className="text-[#2B2B2B]/80">
                  Supporting schools and educational initiatives in communities 
                  near national parks and conservation areas.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-[#D4B483]/20">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">Cultural Preservation</h3>
                <p className="text-[#2B2B2B]/80">
                  Promoting authentic cultural experiences that respect and preserve 
                  traditional ways of life and indigenous knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainable Practices */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D4B483]/20 mb-12">
          <h3 className="text-2xl font-bold text-[#2B2B2B] mb-6 text-center">
            Our Sustainable Tourism Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#0E7C7B] text-white rounded-full p-3 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#2B2B2B] mb-2">Small Groups</h4>
              <p className="text-sm text-[#2B2B2B]/80">Minimizing environmental impact</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E7C7B] text-white rounded-full p-3 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#2B2B2B] mb-2">Wildlife Protection</h4>
              <p className="text-sm text-[#2B2B2B]/80">Respecting animal welfare</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E7C7B] text-white rounded-full p-3 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#2B2B2B] mb-2">Community Support</h4>
              <p className="text-sm text-[#2B2B2B]/80">Empowering local people</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E7C7B] text-white rounded-full p-3 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#2B2B2B] mb-2">Conservation Funding</h4>
              <p className="text-sm text-[#2B2B2B]/80">Direct support for parks</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#2B2B2B] mb-4">Travel with Purpose</h3>
          <p className="text-lg text-[#2B2B2B]/80 mb-6 max-w-2xl mx-auto">
            Choose a safari that makes a positive impact. Your journey helps protect wildlife 
            and support local communities across East Africa.
          </p>
          <button className="bg-[#0E7C7B] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0A5F5E] transition-colors">
            Plan Your Sustainable Safari
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
