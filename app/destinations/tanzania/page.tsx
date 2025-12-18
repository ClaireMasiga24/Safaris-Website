import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function TanzaniaSafaris() {
  // Sample pricing cards data - 9 cards for 3x3 grid
  const pricingCards = [
    {
      id: 1,
      title: "Serengeti Migration Safari",
      badge: "Popular",
      price: "$3,200",
      description: "5-day safari following the Great Migration in Serengeti National Park",
      image: "/images/big5_safari.jpg"
    },
    {
      id: 2,
      title: "Ngorongoro Crater Adventure",
      badge: "Wildlife",
      price: "$2,500",
      description: "3-day safari exploring the world's largest intact volcanic caldera",
      image: "/images/wildlife-viewing-1.jpg"
    },
    {
      id: 3,
      title: "Kilimanjaro Climbing Safari",
      badge: "Adventure",
      price: "$4,800",
      description: "7-day Mount Kilimanjaro climb combined with wildlife safari",
      image: "/images/visit-rwanda-1.jpeg"
    },
    {
      id: 4,
      title: "Tarangire Elephant Safari",
      badge: "Unique",
      price: "$1,800",
      description: "3-day safari focusing on Tarangire's massive elephant herds",
      image: "/images/big-apes-africa-2.jpg"
    },
    {
      id: 5,
      title: "Luxury Northern Circuit",
      badge: "Premium",
      price: "$5,500",
      description: "8-day luxury safari covering Serengeti, Ngorongoro, and Manyara",
      image: "/images/apoka-safari-lodge-1.jpg"
    },
    {
      id: 6,
      title: "Cultural Maasai Experience",
      badge: "Cultural",
      price: "$1,400",
      description: "3-day cultural immersion with Maasai communities",
      image: "/images/WhatsApp-Image-2023-06-22-at-11.12.32.jpeg"
    },
    {
      id: 7,
      title: "Family Safari Adventure",
      badge: "Family",
      price: "$3,800",
      description: "6-day family-friendly safari with educational activities",
      image: "/images/visit-uganda-1.jpeg"
    },
    {
      id: 8,
      title: "Southern Circuit Explorer",
      badge: "Adventure",
      price: "$2,900",
      description: "5-day safari exploring Selous and Ruaha National Parks",
      image: "/images/rafting-jinja-uganda.jpg"
    },
    {
      id: 9,
      title: "Budget Safari Experience",
      badge: "Budget",
      price: "$1,200",
      description: "4-day affordable safari in Lake Manyara and Tarangire",
      image: "/images/user-experience.webp"
    }
  ];

  // Top destinations data
  const topDestinations = [
    {
      id: 1,
      title: "Serengeti National Park",
      description: "Serengeti National Park is Tanzania's oldest and most popular national park, famous for its annual migration of over 1.5 million wildebeest and 250,000 zebra. The park covers 14,750 square kilometers of grassland plains, savanna, riverine forest, and woodlands, hosting the Big Five and over 500 bird species.",
      image: "/images/bwindi-landscape.jpg.webp",
      link: "Explore Serengeti"
    },
    {
      id: 2,
      title: "Ngorongoro Conservation Area",
      description: "The Ngorongoro Conservation Area is a UNESCO World Heritage Site featuring the world's largest intact volcanic caldera. The crater floor is home to approximately 25,000 large animals including lions, elephants, rhinos, and large herds of wildebeest and zebras, making it one of Africa's most spectacular wildlife viewing destinations.",
      image: "/images/kibale-chimps001341.jpg.webp",
      link: "Explore Ngorongoro"
    },
    {
      id: 3,
      title: "Mount Kilimanjaro",
      description: "Mount Kilimanjaro is Africa's highest peak at 5,895 meters and the world's highest free-standing mountain. Located in Kilimanjaro National Park, it offers several climbing routes through five distinct ecological zones. The mountain is a dormant volcano with three volcanic cones and attracts thousands of climbers annually.",
      image: "/images/queen-elizabeth-np-uganda.jpg.webp",
      link: "Explore Kilimanjaro"
    }
  ];

  // Additional places data
  const additionalPlaces = [
    {
      id: 1,
      title: "Lake Manyara National Park",
      description: "Lake Manyara National Park is known for its tree-climbing lions, large elephant herds, and flamingos. The park's groundwater forest, acacia woodland, and alkaline lake create diverse habitats supporting over 400 bird species. It's an excellent first stop on the northern safari circuit.",
      image: "/images/lake-mburo-horseback-safaris.jpg.webp",
      link: "Explore Lake Manyara"
    },
    {
      id: 2,
      title: "Tarangire National Park",
      description: "Tarangire National Park is famous for its massive elephant herds, ancient baobab trees, and diverse wildlife. During the dry season, the Tarangire River attracts thousands of animals, making it one of the best places for wildlife viewing outside the Serengeti ecosystem.",
      image: "/images/murchison-falls.jpg.webp",
      link: "Explore Tarangire"
    },
    {
      id: 3,
      title: "Arusha National Park",
      description: "Arusha National Park offers diverse landscapes including Mount Meru, Ngurdoto Crater, and Momella Lakes. The park is known for its walking safaris, canoeing, and excellent birdwatching opportunities. It's an ideal introduction to Tanzania's northern safari circuit.",
      image: "/images/kampala-city-culture_1-500x333.webp",
      link: "Explore Arusha"
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
                Tanzania Wildlife Safari Tours & Packages
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Experience the ultimate African safari adventure with the Great Migration, Big Five, and Mount Kilimanjaro in Tanzania's legendary national parks
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
              Tailor-made Tanzania Wildlife Safaris
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Tanzania offers some of Africa's most spectacular wildlife experiences, from the Great Migration in Serengeti to the Ngorongoro Crater's wildlife spectacle. Our Tanzania safaris combine luxury accommodations with authentic wildlife encounters, cultural experiences, and breathtaking landscapes. Whether you're seeking the Big Five, climbing Kilimanjaro, or exploring remote wilderness areas, we create personalized journeys that exceed expectations.
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
              You can trust these Tanzania safari experts
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
              We are Tanzania wildlife safari specialists with deep knowledge of the northern and southern circuits. Our team works closely with you to design personalized journeys that provide exceptional wildlife encounters, cultural immersion, and unforgettable memories in Tanzania's most spectacular landscapes.
            </p>

            {/* Red Button */}
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg">
              LETS HELP YOU PLAN
            </button>

            {/* Tanzania Safari Planning Guide */}
            <div className="mt-16 text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C241F] mb-6">
                Tanzania Safari Planning Guide
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Tanzania wildlife safaris offer some of Africa's most iconic experiences, from witnessing the Great Migration in Serengeti to exploring the Ngorongoro Crater's wildlife-rich floor. This East African destination promises spectacular wildlife viewing, breathtaking landscapes, and authentic cultural encounters across its diverse ecosystems.
                </p>
                <p>
                  Tanzania is a premier safari destination with world-renowned national parks and conservation areas. The northern circuit features the Serengeti's endless plains, Ngorongoro's volcanic caldera, and Mount Kilimanjaro's snow-capped peak. The southern circuit offers more remote wilderness experiences in Selous and Ruaha, while the western circuit provides chimpanzee trekking in Mahale Mountains and Gombe Stream National Parks.
                </p>
                <p>
                  Planning a Tanzania safari requires understanding seasonal patterns, migration routes, and regional variations. Our expert team helps you navigate these complexities to create the perfect itinerary that matches your interests, budget, and travel style. From luxury tented camps to budget-friendly options, we ensure your Tanzanian adventure exceeds expectations.
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
                      Great Migration & Big Five safaris
                    </p>
                  </div>

                  {/* Column 2 - BEST TIME */}
                  <div className="p-8 text-center">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">
                      BEST TIME
                    </h4>
                    <p className="text-gray-600">
                      Jun - Oct
                    </p>
                  </div>

                  {/* Column 3 - BEST WAY */}
                  <div className="p-8 text-center">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">
                      BEST WAY
                    </h4>
                    <p className="text-gray-600">
                      Northern circuit safari
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Layout: Tanzania Safari Highlights & Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Tanzania Safari Highlights */}
              <div className="bg-black text-white p-8 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Tanzania Safari Highlights</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Great Migration spectacle:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Witness one of nature's greatest shows as millions of wildebeest and zebras cross the Serengeti plains in their annual migration cycle.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Ngorongoro Crater wildlife:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Descend into the world's largest volcanic caldera to observe dense concentrations of wildlife including the Big Five in a natural amphitheater.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Mount Kilimanjaro climbs:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Conquer Africa's highest peak with various climbing routes offering different challenges and spectacular views across multiple ecological zones.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Big Five encounters:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Excellent opportunities to spot lions, leopards, elephants, buffalo, and rhinos across multiple national parks and conservation areas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8F63] mb-2">Cultural Maasai experiences:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Authentic cultural interactions with Maasai communities, learning about their traditional lifestyle, customs, and connection to the land.
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Tanzania Safari Map</h3>
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
              Top Tanzania Safari Destinations
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
              More Amazing Places in Tanzania
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
