"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      title: "Uganda Gorillas & Primates",
      description: "Experience the ultimate primate adventure with mountain gorilla trekking, chimpanzee tracking, and diverse wildlife in Uganda's national parks.",
      image: "/images/gorilla-trekking-uganda-1.jpg",
      href: "/destinations/uganda-gorillas-primates",
      highlights: ["Mountain Gorilla Trekking", "Chimpanzee Tracking", "Big Five Wildlife", "Bird Watching"]
    },
    {
      id: 2,
      title: "Rwanda Gorilla Safaris",
      description: "Discover the land of a thousand hills with well-organized gorilla trekking experiences and rich cultural encounters.",
      image: "/images/rwanda-bg-one-1.jpg",
      href: "/destinations/rwanda-gorillas",
      highlights: ["Volcanoes National Park", "Mountain Gorillas", "Cultural Experiences", "Conservation Success"]
    },
    {
      id: 3,
      title: "Kenya Wildlife Safaris",
      description: "Witness the Great Migration and classic African wildlife in Kenya's iconic national parks and reserves.",
      image: "/images/big5_safari.jpg",
      href: "/destinations/kenya-safaris",
      highlights: ["Great Migration", "Masai Mara", "Big Five", "Hot Air Balloon Safaris"]
    },
    {
      id: 4,
      title: "Tanzania Safaris",
      description: "Explore the vast Serengeti plains, Ngorongoro Crater, and pristine beaches of Zanzibar.",
      image: "/images/wildlife-viewing-1.jpg",
      href: "/destinations/tanzania-safaris",
      highlights: ["Serengeti National Park", "Ngorongoro Crater", "Mount Kilimanjaro", "Zanzibar Beaches"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Safari Destinations
          </h1>
          <p className="text-xl text-gray-600">
            Explore our carefully curated safari destinations across East Africa
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img src={destination.image} alt={destination.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{destination.title}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <span key={index} className="bg-[#F7F6F2] text-[#2C241F] px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={destination.href}
                    className="inline-block bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 transform hover:scale-105"
                  >
                    Explore {destination.title.split(' ')[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Destinations */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Why Choose Our Safari Destinations?
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Local Knowledge",
              description: "Our destinations are carefully selected based on our extensive local expertise and understanding of East African wildlife and culture.",
              icon: "🌍"
            },
            {
              title: "Sustainable Tourism",
              description: "We partner with conservation-focused lodges and communities to ensure your safari has a positive impact on local ecosystems.",
              icon: "🌱"
            },
            {
              title: "Authentic Experiences",
              description: "From gorilla trekking to cultural encounters, our destinations offer genuine, immersive African experiences.",
              icon: "🦁"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Start Your Safari Adventure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our expert safari consultants to help you choose the perfect destination for your dream African safari.
          </p>
          <a 
            href="/about/contact"
            className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 inline-block"
          >
            Contact Our Experts
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
