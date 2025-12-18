import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function UgandaGorillasPrimates() {
  // Sample pricing cards data - 9 cards for 3x3 grid
  const pricingCards = [
    {
      id: 1,
      title: "Gorilla Trekking Adventure",
      badge: "Popular",
      price: "$1,850",
      description: "3-day gorilla trekking experience in Bwindi Impenetrable Forest",
      image: "/images/big-apes-africa-2.jpg"
    },
    {
      id: 2,
      title: "Chimpanzee Safari",
      badge: "Wildlife",
      price: "$1,200",
      description: "2-day chimpanzee tracking in Kibale Forest National Park",
      image: "/images/big5_safari.jpg"
    },
    {
      id: 3,
      title: "Big Five Safari",
      badge: "Classic",
      price: "$2,500",
      description: "4-day classic safari in Queen Elizabeth National Park",
      image: "/images/wildlife-viewing-1.jpg"
    },
    {
      id: 4,
      title: "Golden Monkey Trek",
      badge: "Unique",
      price: "$950",
      description: "1-day golden monkey trekking in Mgahinga Gorilla Park",
      image: "/images/visit-rwanda-1.jpeg"
    },
    {
      id: 5,
      title: "Luxury Safari Lodge",
      badge: "Premium",
      price: "$3,200",
      description: "5-day luxury safari with premium accommodation",
      image: "/images/apoka-safari-lodge-1.jpg"
    },
    {
      id: 6,
      title: "Cultural Immersion",
      badge: "Cultural",
      price: "$1,100",
      description: "3-day cultural experience with local communities",
      image: "/images/WhatsApp-Image-2023-06-22-at-11.12.32.jpeg"
    },
    {
      id: 7,
      title: "Family Safari",
      badge: "Family",
      price: "$2,800",
      description: "4-day family-friendly safari experience",
      image: "/images/visit-uganda-1.jpeg"
    },
    {
      id: 8,
      title: "Adventure Combo",
      badge: "Adventure",
      price: "$2,100",
      description: "5-day adventure with rafting and wildlife",
      image: "/images/rafting-jinja-uganda.jpg"
    },
    {
      id: 9,
      title: "Budget Safari",
      badge: "Budget",
      price: "$850",
      description: "3-day affordable safari experience",
      image: "/images/user-experience.webp"
    }
  ];

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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section with Image and Text Overlay */}
        <section className="relative h-96 md:h-[500px] bg-gray-900">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/WhatsApp-Image-2023-06-22-at-11.13.03-1.jpeg')" }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Uganda Wildlife Safari Tours & Packages
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Culture-infused, eco-friendly, sustainable, and regenerative mid-range to luxury Uganda wildlife safaris for nature adventurers
              </p>
              <button className="bg-[#2A8F63] text-white px-8 py-4 rounded-lg hover:bg-[#1E6B4A] transition-colors font-semibold text-lg">
                Safari Packages
              </button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C241F] mb-6">
              Tailor-made Uganda Wildlife Safaris
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              If you love nature, wild animals, trekking primates, being in the wilderness, in remote lodges off the grid, Uganda's wildlife safari holidays and tours are just for you. Uganda offers you a combination of all: real, up-close encounters with Africa's iconic animals on safari. To help you plan your trip, here's our list of top eco-friendly and sustainable Uganda wildlife tours.
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-16 bg-[#FBF6EF]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C241F] text-center mb-12">
              Featured Safari Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingCards.map((card) => (
                <div key={card.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20 hover:shadow-xl transition-all duration-300">
                  {/* Card Image with Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#2A8F63] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {card.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2C241F] mb-2">
                      {card.title}
                    </h3>
                    <div className="text-2xl font-bold text-[#2A8F63] mb-3">
                      {card.price}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <button className="w-full bg-[#2A8F63] text-white py-3 rounded-lg hover:bg-[#1E6B4A] transition-colors font-semibold">
                      Book Now
                    </button>
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
            
            {/* Team Photos */}
            <div className="flex justify-center gap-12 mb-12">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/visit-rwanda-1.jpeg')" }}
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/visit-uganda-1.jpeg')" }}
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/WhatsApp-Image-2023-06-22-at-11.13.03-1.jpeg')" }}
                  />
                </div>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-lg text-gray-700 italic mb-8 leading-relaxed max-w-3xl mx-auto">
              We are Uganda wildlife safari specialists who will work closely with you to design a personalized journey that provides an exceptional experience. Traveling to unfamiliar places and dealing with complex logistics can be overwhelming, but with us, it doesn't have to.
            </p>

            {/* Red Button */}
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg">
              LETS HELP YOU PLAN
            </button>

            {/* Zanzibar Safari Planning Guide */}
            <div className="mt-16 text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C241F] mb-6">
                Uganda Safari Planning Guide
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Uganda wildlife safaris feature some of the most unique eco-adventures in Africa, offering more private encounters than celebrated African safari destinations like Kenya and Tanzania. This less-known East African destination promises immersive adventures, discovery, and unforgettable memories with its unique blend of rare wildlife encounters, incredible scenery, cultures, and sustainable experiences.
                </p>
                <p>
                  Uganda is a paradise for nature travelers, a land of diverse and intriguing ecosystems. From lush rainforests to expansive savannah plains and shimmering lakes, the variety is bound to excite you. Within these unique ecosystems, rare safari encounters include icons like the endangered mountain gorillas, chimpanzees, tree-climbing lions, an incredible list of endemic birds and more not commonly seen in other destinations. Top destinations to include on your safari itinerary include Bwindi Impenetrable National Park, particularly famous for its gorilla trekking experiences; Queen Elizabeth National Park for its classic game drives and tranquil boat cruises along the Kazinga Channel; and Kibale Forest National Park for the once-in-a-lifetime chimpanzee trekking experience.
                </p>
                <p>
                  Uganda, being a young destination, planning a Uganda safari holiday requires careful preparation. But with the proper guidance, you can fully enjoy its incredible list of eco-friendly experiences. In this guide, we provide a list of top-rated luxury Uganda safari tours and packages to help you confidently plan your adventure. Our safaris in Uganda feature luxury camps overlooking vast plains and eco-friendly lodges tucked away in rainforests, catering to every traveler's preferences.
                </p>
              </div>
            </div>

            {/* Three-Column Information Section */}
            <div className="mt-16">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
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
          </div>
        </section>

        {/* Two-Column Layout: Uganda Safari Highlights & Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Uganda Safari Highlights */}
              <div className="bg-black text-white p-8 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Uganda Safari Highlights</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Top gorilla encounters:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Trek into the mountains and come face-to-face with the mountain gorillas in the impenetrable tropical jungles and on the slopes of the Virunga mountains.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Best primates experiences:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Awkwardly follow a wild troop of chimpanzees and spend unforgettable moments observing them in their natural habitat on a chimpanzee trekking adventure.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Excellent water safaris:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Cruise the Kazinga Channel or Victoria Nile and get close to elephants, hippos, buffalo, and big game.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Uncrowded safari drives:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Morning or evening game drives with an expert local guide to find the Big Five, tree climbing lions, and other exciting animals in the savannah parks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Top-notch birding spots:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      More than 1000 colorful bird species found within the most accessible national parks and forests.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Map Placeholder */}
              <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-600 text-2xl">🗺️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Uganda Safari Map</h3>
                  <p className="text-gray-600">Interactive map showing all major safari destinations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Destinations Section */}
        <section className="py-16 bg-[#FBF6EF]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C241F] text-center mb-12">
              Top Uganda Safari Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topDestinations.map((destination) => (
                <div key={destination.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2C241F] mb-3">
                      {destination.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {destination.description}
                    </p>
                    <button className="text-[#2A8F63] font-semibold hover:text-[#1E6B4A] transition-colors">
                      {destination.link} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Places Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C241F] text-center mb-12">
              More Amazing Places in Uganda
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalPlaces.map((place) => (
                <div key={place.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4B483]/20 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${place.image})` }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2C241F] mb-3">
                      {place.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {place.description}
                    </p>
                    <button className="text-[#2A8F63] font-semibold hover:text-[#1E6B4A] transition-colors">
                      {place.link} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
