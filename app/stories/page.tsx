"use client";

import { useState } from "react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Stories() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample article data
  const articles = [
    {
      id: 1,
      title: "Gorilla Trekking in Rwanda",
      description: "An unforgettable encounter with mountain gorillas",
      content: "Experience the magic of coming face-to-face with these gentle giants in their natural habitat.",
      likes: 42,
      image: "/images/big-apes-africa-2.jpg"
    },
    {
      id: 2,
      title: "Safari in Serengeti",
      description: "Witness the great migration",
      content: "Follow the epic journey of wildebeest across the vast plains of Tanzania.",
      likes: 38,
      image: "/images/big5_safari.jpg"
    },
    {
      id: 3,
      title: "Zanzibar Beach Retreat",
      description: "Tropical paradise in East Africa",
      content: "Discover the pristine beaches and rich culture of this island paradise.",
      likes: 29,
      image: "/images/visit-rwanda-1.jpeg"
    },
    {
      id: 4,
      title: "Uganda's Wildlife Wonders",
      description: "Explore the Pearl of Africa",
      content: "From chimpanzees to lions, Uganda offers incredible biodiversity.",
      likes: 31,
      image: "/images/visit-uganda-1.jpeg"
    },
    {
      id: 5,
      title: "Luxury Safari Lodges",
      description: "Where comfort meets wilderness",
      content: "Experience the ultimate in safari luxury with these stunning accommodations.",
      likes: 27,
      image: "/images/apoka-safari-lodge-1.jpg"
    },
    {
      id: 6,
      title: "Cultural Immersion",
      description: "Connect with local communities",
      content: "Learn about traditional customs and ways of life across East Africa.",
      likes: 23,
      image: "/images/WhatsApp-Image-2023-06-22-at-11.12.32.jpeg"
    },
    {
      id: 7,
      title: "Bird Watching Paradise",
      description: "For the avid bird enthusiast",
      content: "Discover the incredible diversity of bird species in the region.",
      likes: 19,
      image: "/images/wildlife-viewing-1.jpg"
    },
    {
      id: 8,
      title: "Adventure Activities",
      description: "Thrills beyond the safari",
      content: "From white-water rafting to hiking, find your next adventure.",
      likes: 35,
      image: "/images/rafting-jinja-uganda.jpg"
    },
    {
      id: 9,
      title: "Sustainable Tourism",
      description: "Travel with purpose",
      content: "Learn how to make your travels more environmentally friendly.",
      likes: 41,
      image: "/images/WhatsApp-Image-2023-06-22-at-11.13.03-1.jpeg"
    },
    {
      id: 10,
      title: "Photography Tips",
      description: "Capture the perfect shot",
      content: "Expert advice for photographing wildlife and landscapes.",
      likes: 33,
      image: "/images/rwanda-bg-one-1.jpg"
    },
    {
      id: 11,
      title: "Local Cuisine",
      description: "Taste authentic flavors",
      content: "Explore the delicious traditional foods of East Africa.",
      likes: 26,
      image: "/images/jigsaw.webp"
    },
    {
      id: 12,
      title: "Family Safaris",
      description: "Memories for all ages",
      content: "Plan the perfect family adventure in the wild.",
      likes: 30,
      image: "/images/meditation.webp"
    },
    {
      id: 13,
      title: "Budget Travel Guide",
      description: "Affordable safari options",
      content: "Experience Africa without breaking the bank.",
      likes: 45,
      image: "/images/user-experience.webp"
    },
    {
      id: 14,
      title: "Conservation Efforts",
      description: "Protecting wildlife heritage",
      content: "Learn about the important work being done to preserve ecosystems.",
      likes: 37,
      image: "/images/big-apes-africa-2.jpg"
    }
  ];

  // Filter articles based on search query
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section with Deep Sand overlay on Ivory background */}
        <section className="relative py-16 bg-[#FBF6EF]">
          <div className="absolute inset-0 bg-[#D4B483]/20 z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
              Safari Blog: Great Stories, Reliable Travel Guides by Experts
            </h1>
            <p className="text-xl text-[#2B2B2B]/80 mb-8">
              Discover inspiring safari adventures and expert travel insights
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <div className="bg-white border-b border-[#D4B483]/20 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search stories and travel guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-4 pl-12 pr-4 border border-[#D4B483] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E7C7B] focus:border-transparent text-lg text-[#2B2B2B]"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-[#0E7C7B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="bg-white border-b border-[#D4B483]/20">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex flex-wrap justify-center gap-4 py-4">
              <button className="px-4 py-2 bg-[#FF6B6B] text-white font-semibold rounded-lg hover:bg-[#E55A5A] transition-colors">
                All
              </button>
              <button className="px-4 py-2 text-[#2B2B2B] font-semibold rounded-lg hover:bg-[#D4B483]/20 transition-colors">
                Cultures
              </button>
              <button className="px-4 py-2 text-[#2B2B2B] font-semibold rounded-lg hover:bg-[#D4B483]/20 transition-colors">
                Destinations
              </button>
              <button className="px-4 py-2 text-[#2B2B2B] font-semibold rounded-lg hover:bg-[#D4B483]/20 transition-colors">
                Experiences
              </button>
              <button className="px-4 py-2 text-[#2B2B2B] font-semibold rounded-lg hover:bg-[#D4B483]/20 transition-colors">
                Primates
              </button>
              <button className="px-4 py-2 text-[#2B2B2B] font-semibold rounded-lg hover:bg-[#D4B483]/20 transition-colors">
                Sustainable
              </button>
              <button className="px-4 py-2 text-[#2B2B2B] font-semibold rounded-lg hover:bg-[#D4B483]/20 transition-colors">
                Travel Guides
              </button>
              <button className="px-4 py-2 text-[#2B2B2B] font-semibold rounded-lg hover:bg-[#D4B483]/20 transition-colors">
                Wildlife
              </button>
            </nav>
          </div>
        </div>

        {/* Article Grid Section */}
        <div className="max-w-7xl mx-auto py-16 px-4">
          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-8 text-center">
              <p className="text-lg text-[#2B2B2B]/80">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found for "{searchQuery}"
              </p>
            </div>
          )}

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-4xl">
                {filteredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20 hover:shadow-xl transition-all duration-300">
                    {/* Hero Image with Floating Heart */}
                    <div className="relative h-64 overflow-hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${article.image})` }}
                      />
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
                        <svg className="w-4 h-4 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold text-[#2B2B2B]">{article.likes}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative -mt-8 mx-4 bg-white rounded-xl shadow-md p-6 border border-[#D4B483]/20">
                      <h3 className="text-xl font-bold text-[#2B2B2B] mb-2 leading-tight text-center">
                        {article.title}
                      </h3>
                      <p className="text-[#0E7C7B] font-semibold text-sm mb-3 text-center">
                        {article.description}
                      </p>
                      <p className="text-[#2B2B2B]/80 text-sm leading-relaxed text-center">
                        {article.content}
                      </p>
                      <div className="mt-4 pt-4 border-t border-[#D4B483]/20 text-center">
                        <button className="text-[#0E7C7B] font-semibold text-sm hover:text-[#0A5F5E] transition-colors">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // No results message
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <svg className="w-16 h-16 text-[#D4B483] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-2xl font-bold text-[#2B2B2B] mb-2">No articles found</h3>
                <p className="text-[#2B2B2B]/80 mb-6">
                  {searchQuery ? `No articles match "${searchQuery}". Try searching for something else.` : 'No articles available at the moment.'}
                </p>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="px-6 py-2 bg-[#0E7C7B] text-white font-semibold rounded-lg hover:bg-[#0A5F5E] transition-colors"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Three-Column Information Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Column 1 - GOOD FOR */}
              <div className="p-8 text-center">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">
                  GOOD FOR
                </h4>
                <p className="text-gray-600">
                  Primate trekking & wildlife safaris
                </p>
              </div>

              {/* Column 2 - BEST TIME */}
              <div className="p-8 text-center">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">
                  BEST TIME
                </h4>
                <p className="text-gray-600">
                  Jun - Aug
                </p>
              </div>

              {/* Column 3 - BEST WAY */}
              <div className="p-8 text-center">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">
                  BEST WAY
                </h4>
                <p className="text-gray-600">
                  Planned tour package
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
