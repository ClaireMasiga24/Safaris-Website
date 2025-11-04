"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  const [showAllPackages, setShowAllPackages] = useState(false);

  const safariPackages = [
    {
      id: 1,
      title: "Safari Package 1",
      description: "Description for safari package 1. This eco-friendly package offers amazing wildlife experience.",
    },
    {
      id: 2,
      title: "Safari Package 2",
      description: "Description for safari package 2. Experience authentic African culture and wildlife in this sustainable safari adventure.",
    },
    {
      id: 3,
      title: "Safari Package 3",
      description: "Description for safari package 3. A luxury eco-safari that combines comfort with conservation and community support.",
    },
    {
      id: 4,
      title: "Safari Package 4",
      description: "Description for safari package 4. Immerse yourself in Uganda's natural beauty with this carefully crafted sustainable journey.",
    },
    {
      id: 5,
      title: "Safari Package 5",
      description: "Description for safari package 5. Discover hidden gems and rare wildlife encounters in this exclusive eco-safari.",
    },
    {
      id: 6,
      title: "Safari Package 6",
      description: "Description for safari package 6. A family-friendly sustainable safari that creates lasting memories for all ages.",
    },
    {
      id: 7,
      title: "Safari Package 7",
      description: "Description for safari package 7. Adventure meets conservation in this thrilling sustainable wildlife experience.",
    },
    {
      id: 8,
      title: "Safari Package 8",
      description: "Description for safari package 8. Experience the magic of gorilla trekking in this carefully designed eco-adventure.",
    },
    {
      id: 9,
      title: "Safari Package 9",
      description: "Description for safari package 9. A comprehensive sustainable safari that covers multiple national parks and conservation areas.",
    },
  ];

  const displayedPackages = showAllPackages ? safariPackages : safariPackages.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            African Dream Safaris
          </h2>
          <p className="text-xl text-gray-600">
            Luxurious, Immersive, Purpose-Driven Journeys with Uganda Safaris
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              Uganda Safari Company is a leading eco-luxury tour operator crafting tailor-made gorilla trekking adventures and authentic wildlife safaris across Uganda and Rwanda, with seamless extensions into Kenya and Tanzania.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our journeys go beyond travel — they create lasting memories, genuine connections, and a positive impact on both people and nature.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Led by expert local guides, each safari blends comfort with purpose, featuring carefully chosen eco-lodges and opportunities to support conservation and community initiatives.
            </p>
            <p className="text-lg text-gray-700 font-semibold italic mb-8">
              With Uganda Safari Company, you don't just visit Uganda — you experience it.
            </p>
            <div className="text-center">
              <button className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 transform hover:scale-105">
                SEE OUR SAFARI COLLECTION
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            WHY SAFARI WITH UGANDA SAFARI COMPANY?
          </h2>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Local Expertise",
              desc: "We're a team of eco-conscious local Uganda safari experts with extensive knowledge of East African safari attractions and facilities.",
              image: "/images/big-apes-africa-2.jpg",
            },
            {
              title: "Intimate",
              desc: "With our expertise, we guide our guests into finding that sustainable and intimate connection with our safari destinations.",
              image: "/images/rafting-jinja-uganda.jpg",
            },
            {
              title: "Authentically Wild",
              desc: "Our trips allow guests to immerse themselves in authentic African culture, wildlife, and scenery that leaves a mark on their senses.",
              image: "/images/visit-uganda-1.jpeg",
            },
            {
              title: "Value 4 Money",
              desc: "Our quotes have no hidden costs, we do not cut corners. We tailor-make your trip to your style & budget without compromising on value.",
              image: "/images/wildlife-viewing-1.jpg",
            },
          ].map((col, i) => (
            <div key={i} className="text-center">
              <div className="mb-4 h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src={col.image} alt={col.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{col.title}</h3>
              <p className="text-gray-600">{col.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-8 text-center">
        <button className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 transform hover:scale-105">
          Find more reasons to trust us
        </button>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Book your safari in 4 simple steps.
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Because you're not just anyone, you can explore your uniqueness by tailoring your Africa safari dream with an expert local safari consultant in four simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                title: "Chat with Expert",
                description: "Connect with our local safari consultant to discuss your dream safari",
                image: "/images/chat_icon (1).png",
              },
              {
                step: "Step 2",
                title: "Tailor Your Journey",
                description: "Customize every detail of your safari to match your preferences and style",
                image: "/images/jigsaw.webp",
              },
              {
                step: "Step 3",
                title: "Plan & Prepare",
                description: "Get expert guidance on preparations and what to expect on your adventure",
                image: "/images/meditation.webp",
              },
              {
                step: "Step 4",
                title: "Experience Safari",
                description: "Embark on your unforgettable African safari adventure",
                image: "/images/user-experience.webp",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={step.image} alt={step.title} className="w-32 h-32 object-contain" />
                </div>
                <div className="text-sm font-semibold text-[#D4A017] mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
              Take your first trip
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src="/images/map.webp" alt="Safari Map" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                <p className="text-gray-600">{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={() => setShowAllPackages(!showAllPackages)} className="flex items-center justify-center gap-2 mx-auto text-[#D4A017] hover:text-[#F58220] font-semibold text-lg transition-colors duration-300">
            {showAllPackages ? (
              <>
                Show less
                <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            ) : (
              <>
                Show more packages
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
        <div className="text-center mt-8">
          <button className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 transform hover:scale-105">
            EXPLORE OUR SAFARI COLLECTION
          </button>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <img src="/images/3-days-Gorilla-Habituation.jpg" alt="Special Interest Safari Experience" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Special Interest Safaris
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Whether you're seeking memorable family vacations, intimate small-group safaris, transformative solo adventures, captivating Africa gorilla tours, or embarking on your first-time Africa expedition, our selection boasts tailor-made specialty journeys catering to every kind of traveler.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "GORILLA EXPEDITIONS",
                description: "Guided gorilla trekking adventures into Uganda & Rwanda's rainforests to see Africa's mountain gorillas and spend surreal moments in the wild.",
                image: "/images/gorilla-trekking-uganda-1.jpg",
              },
              {
                title: "CHIMPANZEE TRACKING",
                description: "Guided and eco-friendly forest walking adventures in Uganda's rainforests to observe wild chimpanzees up close in their natural tropical forests.",
                image: "/images/kibale-chimps001341.jpg.webp",
              },
              {
                title: "FIRST TIME SAFARIS",
                description: "From classic Africa wildlife safaris to guided nature walks, we put together a comprehensive guide to help you plan your first-time safari in Africa.",
                image: "/images/queen-elizabeth-np-uganda.jpg.webp",
              },
              {
                title: "HONEYMOON SAFARIS",
                description: "These romantic eco safaris in Africa take you to places where love originates and deeply connects you with the natural world.",
                image: "/images/apoka-safari-lodge-1.jpg",
              },
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 text-center">
        <button className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 transform hover:scale-105">
          Find out which type of safari suites you !
        </button>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img src="/images/visit-uganda-1.jpeg" alt="Responsible Travel" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Responsible Travel</h2>
                  <p className="text-lg md:text-xl leading-relaxed mb-8">
                    You cannot get through a single day without having an impact on the world around you. What you do makes a difference, and you have to decide what kind of a difference you want to make. Our responsible travel policy allows guests to depart emotionally rich, more informed, more ecologically aware, and more appreciative of the natural resources, people and cultures.
                  </p>
                  <button className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 transform hover:scale-105">
                    Read our policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}