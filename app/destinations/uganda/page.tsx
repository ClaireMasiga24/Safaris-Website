"use client";

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { featuredTours } from '../../data/featuredTours';

export default function UgandaGorillasPrimates() {

  // Top destinations data
  const topDestinations = [
    {
      id: 1,
      title: "Bwindi Impenetrable Forest",
      description: "Bwindi Impenetrable National Park is an ancient rainforest located in southwestern Uganda. Gorillas (over 1,000), rare birds and butterflies are found thriving in the park's dense vegetation. The park is a UNESCO world heritage site and home to approximately half of the world's population of endangered mountain gorillas.",
      image: "/images/bwindi-landscape.jpg.webp",
      link: "Explore Bwindi Forest"
    },
    {
      id: 2,
      title: "Kibale National Park",
      description: "Kibale Forest National Park is home to 13 primate species, including the largest population of chimpanzees in Uganda. The 795 sq km park has two distinct forest ecosystems: lowland rainforest and evergreen forest. The park provides opportunities to track wild chimpanzees and other primates while exploring its diverse habitats.",
      image: "/images/kibale-chimps001341.jpg.webp",
      link: "Explore Kibale"
    },
    {
      id: 3,
      title: "Queen Elizabeth National Park",
      description: "Queen Elizabeth National Park, named after the British monarch, is Uganda's most popular park, with diverse ecosystems ranging from savanna to wetlands and forests. Located in the western region and spanning 1,978 square kilometers, the park is noted for its tree climbing lions and large herds of elephants along with over 600 bird species.",
      image: "/images/queen-elizabeth-np-uganda.jpg.webp",
      link: "Explore Queen Elizabeth"
    }
  ];

  // Additional places data
  const additionalPlaces = [
    {
      id: 1,
      title: "Lake Mburo",
      description: "Lake Mburo National Park is the smallest and most accessible of Uganda's ten national parks. It's an ideal stop on a safari circuit from Kampala or Entebbe. The park's diverse habitats support zebras, impalas, elands, and over 350 bird species making it great for birdwatching.",
      image: "/images/lake-mburo.jpg",
      link: "Explore Lake Mburo"
    },
    {
      id: 2,
      title: "Murchison Falls",
      description: "Murchison Falls National Park is named for the dramatic falls where the Nile forces its way through a 7-meter gap. It's Uganda's largest national park covering 3,840 sq km. The park is home to 76 mammal species and 451 bird species, making it a premier safari destination.",
      image: "/images/murchison-falls.jpg",
      link: "Explore Murchison Falls"
    },
    {
      id: 3,
      title: "Kampala",
      description: "Kampala is Uganda's vibrant capital city built on seven hills. It offers a mix of modern city life and traditional culture, with bustling markets, historical sites, and a thriving nightlife. The city serves as a gateway to Uganda's national parks and safari destinations.",
      image: "/images/kampala.jpg",
      link: "Explore Kampala"
    }
  ];

  // National parks data for carousel
  const nationalParks = [
    {
      name: "Rwenzori Mountain National Park",
      image: "/images/visit-uganda-1.jpeg"
    },
    {
      name: "Murchison Falls National Park",
      image: "/images/murchison-falls.jpg.webp"
    },
    {
      name: "Lake Mburo National Park",
      image: "/images/lake-mburo-horseback-safaris.jpg.webp"
    },
    {
      name: "Kibale National Park",
      image: "/images/kibale-chimps001341.jpg.webp"
    },
    {
      name: "Bwindi Impenetrable Park",
      image: "/images/bwindi-landscape.jpg.webp"
    },
    {
      name: "Queen Elizabeth National Park",
      image: "/images/queen-elizabeth-np-uganda.jpg.webp"
    }
  ];


  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="">
        {/* Hero Section with Image and Text Overlay - Full screen like homepage */}
        <section className="relative h-screen w-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/WhatsApp-Image-2023-06-22-at-11.13.03-1.jpeg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-emerald-800/50 z-10"></div>
          <div className="relative z-20 flex items-end justify-center h-full px-4 pb-12 md:pb-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-['Garamond']">
                Uganda Safaris
              </h1>
            </div>
          </div>
        </section>

        {/* Introduction Section - Split Screen */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C241F] mb-6">
                Gorilla Trekking & Wildlife Safaris
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-600 mb-6">About Uganda</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Uganda’s biggest draw is the opportunity to track the mountain gorillas in Bwindi Impenetrable National Park. It is one of the only three countries where these gentle giants live and has over half of the world’s only remaining population of mountain gorillas. The focus on the Apes does not do justice to the breadth of Uganda’s appeal.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Kidepo and Queen Elizabeth National parks are the perfect gift any Nature lover would need. They are small and heavily populated and arguably the most bio diverse destinations in Africa. Murchison Falls National park does not stop at having the world’s most powerful waterfalls, it is the largest National park bisected by the mighty river Nile with a high population of safari favorites perhaps the most exciting. Thanks to the Location of Uganda on a plateau, its two different biome; the equatorial rainforests of West Africa and the tropical savannahs of East Africa. This is what makes Uganda Africa combined.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For more primate action and superb bird watching, the dense jungles of Kibale forest and Semliki National Parks definitely deliver. While the former has the highest population of Chimpanzees in Africa, numbering over 1,000 the latter is blessed with 23 Albertine Rift endemics. Spotting a Shoebill stork here would be a massive tick on any birdwatchers list.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  You can explore one of the three highest mountains in Africa; Rwenzori, track the white rhinos on foot, or get close to some of the most sought birds during boat cruises. Some of these activities are ground-breaking in that they are achieved through a conservancy system, whereby local communities neighbouring parks take a decisive role in environmental and cultural conservation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you have a soft spot for cultural experiences, you cannot leave Uganda without spending time with the Karimajong, the sister tribe of Kenya’s Masai or the Batwa pygmies, the first people of the forest.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A stay at Lake Bunyonyi, Africa’s most beautiful lake lake hemmed in by several mountain ranges, is a nice safari add-on for relaxation, swimming and sunset boat rides.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Uganda National Parks - Horizontal Scroll */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C241F] text-center mb-12">
              Uganda National Parks
            </h2>
            <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4">
              {nationalParks.map((park, index) => (
                <div
                  key={index}
                  className="relative h-[450px] w-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${park.image})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Park Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{park.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Activities in Uganda */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <div className="text-sm uppercase tracking-widest text-[#B89A6D] mb-2">
                Experiences
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C241F] font-['Garamond'] mb-6">
                Popular Activities in Uganda
              </h2>
              <div className="w-24 h-px bg-[#D4B483] mx-auto mb-12"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { 
                  name: "Gorilla Trekking", 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>
                  )
                },
                { 
                  name: "Community Tour", 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  )
                },
                { 
                  name: "Boat Trips", 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1.096M4.5 21V9.75m0 0 3.75-1.364M4.5 9.75 2.25 7.5m15 6 3.75 1.364M19.5 9.75l3.75 1.364" />
                    </svg>
                  )
                },
                { 
                  name: "Game Drives", 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  )
                },
                { 
                  name: "Nature Walks", 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  )
                },
                { 
                  name: "Fishing", 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  )
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#D4B483] mb-4 text-[#B89A6D]">
                    {activity.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2C241F]">
                    {activity.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Uganda Safaris Title */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C241F] font-['Garamond']">
              Uganda Safaris
            </h2>
            <div className="w-24 h-px bg-[#D4B483] mx-auto mt-6"></div>
          </div>
        </section>

        {/* Featured Safari Packages - Static Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C241F] text-center mb-12">
              Featured Safari Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredTours.map((tour) => (
                <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  {/* Card Image with Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${tour.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#8B4513] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {tour.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#2C241F] mb-2 line-clamp-2">
                      {tour.title}
                    </h3>
                    {/* Star Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-gray-600">({tour.rating}.0)</span>
                    </div>
                    <Link href={`/tours/${tour.slug}`} className="block w-full bg-[#8B4513] text-white py-2.5 rounded-lg hover:bg-[#6B3410] transition-colors font-semibold text-sm text-center">
                      READ MORE
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C241F] mb-12">
              You can trust these Uganda safari experts
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
