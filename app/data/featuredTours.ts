export interface Tour {
  id: number;
  title: string;
  badge: string;
  rating: number;
  image: string;
  slug: string;
  overview: string;
  duration?: string;
  price?: string;
  includes?: string[];
}

export const featuredTours: Tour[] = [
  {
    id: 1,
    title: "10 Days Gorillas, Chimps & Big 5 Wildlife Safari",
    badge: "Top Choice",
    rating: 5,
    image: "/images/big-apes-africa-2.jpg",
    slug: "10-days-gorillas-chimps-big-5-wildlife-safari",
    overview: "This comprehensive safari combines Uganda's most iconic wildlife experiences. Track mountain gorillas in Bwindi Impenetrable Forest, observe chimpanzees in Kibale National Park, and enjoy classic game drives in Queen Elizabeth National Park to see the Big Five. The itinerary includes comfortable accommodations, expert guides, and immersive cultural interactions.",
    duration: "10 days / 9 nights",
    price: "$3,850",
    includes: ["Gorilla trekking permit", "Chimpanzee tracking", "All park fees", "Full board accommodation", "Professional guide", "Ground transportation"]
  },
  {
    id: 2,
    title: "10 Days Best Of Uganda Safari",
    badge: "Popular Tour",
    rating: 5,
    image: "/images/big5_safari.jpg",
    slug: "10-days-best-of-uganda-safari",
    overview: "Experience the highlights of Uganda in this carefully curated safari. From the tree-climbing lions of Ishasha to the majestic Murchison Falls, this tour showcases Uganda's diverse landscapes and wildlife. Includes gorilla trekking, boat safaris, and cultural visits to local communities.",
    duration: "10 days / 9 nights",
    price: "$3,650",
    includes: ["Gorilla permit", "All game drives", "Boat cruises", "Accommodation", "Meals as per itinerary", "English-speaking guide"]
  },
  {
    id: 3,
    title: "10 Days Best of Uganda Wildlife with Gorillas",
    badge: "Premium Trip",
    rating: 5,
    image: "/images/wildlife-viewing-1.jpg",
    slug: "10-days-best-of-uganda-wildlife-with-gorillas",
    overview: "A perfect blend of primate encounters and classic safari experiences. Track gorillas in Bwindi, search for chimpanzees in Kibale, and enjoy wildlife viewing in Queen Elizabeth and Murchison Falls National Parks. This tour offers excellent photographic opportunities and comfortable lodges throughout.",
    duration: "10 days / 9 nights",
    price: "$4,200",
    includes: ["Gorilla and chimp permits", "All park entry fees", "Luxury lodge accommodation", "Private vehicle", "Professional driver-guide", "All meals"]
  },
  {
    id: 4,
    title: "18 Days Uganda Safari",
    badge: "Best Seller",
    rating: 5,
    image: "/images/visit-rwanda-1.jpeg",
    slug: "18-days-uganda-safari",
    overview: "An extensive exploration of Uganda's natural wonders. This extended safari covers all major national parks including Kidepo Valley, Murchison Falls, Kibale, Bwindi, and Queen Elizabeth. Perfect for travelers who want to experience Uganda's full diversity at a relaxed pace.",
    duration: "18 days / 17 nights",
    price: "$6,800",
    includes: ["All permits and park fees", "Accommodation throughout", "All meals", "Ground transportation", "Domestic flights", "Cultural experiences"]
  },
  {
    id: 5,
    title: "25 Days Uganda Safari",
    badge: "Top Choice",
    rating: 5,
    image: "/images/apoka-safari-lodge-1.jpg",
    slug: "25-days-uganda-safari",
    overview: "The ultimate Uganda adventure for serious safari enthusiasts. This comprehensive itinerary includes gorilla and chimpanzee trekking, wildlife viewing in multiple national parks, cultural immersion with local tribes, and adventure activities like hiking and boat trips. A truly immersive African experience.",
    duration: "25 days / 24 nights",
    price: "$9,500",
    includes: ["All activities and permits", "Luxury accommodation", "All meals and drinks", "Private guide and vehicle", "Internal flights", "Emergency evacuation insurance"]
  },
  {
    id: 6,
    title: "12 Days Best Of Uganda Safari",
    badge: "Popular Tour",
    rating: 5,
    image: "/images/WhatsApp-Image-2023-06-22-at-11.12.32.jpeg",
    slug: "12-days-best-of-uganda-safari",
    overview: "A well-paced safari covering Uganda's highlights. Includes gorilla trekking in Bwindi, chimpanzee tracking in Kibale, wildlife viewing in Queen Elizabeth and Murchison Falls, and relaxation at Lake Bunyonyi. Perfect for those with limited time who want a comprehensive experience.",
    duration: "12 days / 11 nights",
    price: "$4,800",
    includes: ["Gorilla permit", "Chimpanzee tracking", "All park fees", "Accommodation", "Most meals", "Professional guide"]
  },
  {
    id: 7,
    title: "17 Days Uganda Wildlife Culture Safari",
    badge: "Premium Trip",
    rating: 5,
    image: "/images/visit-uganda-1.jpeg",
    slug: "17-days-uganda-wildlife-culture-safari",
    overview: "Combine wildlife viewing with cultural immersion on this unique safari. Visit traditional communities like the Batwa pygmies and Karamojong tribes while exploring Uganda's national parks. Includes gorilla trekking, chimpanzee tracking, and extensive game drives.",
    duration: "17 days / 16 nights",
    price: "$7,200",
    includes: ["All cultural visits", "Gorilla and chimp permits", "All accommodation", "All meals", "Transportation", "English-speaking guide"]
  },
  {
    id: 8,
    title: "3 Days Uganda Gorilla Habituation Tour",
    badge: "Best Seller",
    rating: 5,
    image: "/images/rafting-jinja-uganda.jpg",
    slug: "3-days-uganda-gorilla-habituation-tour",
    overview: "A short but intense gorilla experience perfect for travelers with limited time. Participate in the gorilla habituation process, spending up to four hours with a gorilla family under training. Includes accommodation, meals, and transfers from Kigali or Entebbe.",
    duration: "3 days / 2 nights",
    price: "$1,950",
    includes: ["Gorilla habituation permit", "Accommodation", "All meals", "Ground transfers", "Park fees", "Guide services"]
  },
  {
    id: 9,
    title: "2 Days Gorilla Trekking in Bwindi from Kigali",
    badge: "Top Choice",
    rating: 5,
    image: "/images/user-experience.webp",
    slug: "2-days-gorilla-trekking-in-bwindi-from-kigali",
    overview: "The quickest way to experience mountain gorillas. Cross from Rwanda into Uganda's Bwindi Impenetrable Forest for a single gorilla trekking experience. Perfect as an add-on to a Rwanda safari or for time-pressed travelers.",
    duration: "2 days / 1 night",
    price: "$1,500",
    includes: ["Gorilla permit", "Border crossing assistance", "Accommodation", "Meals", "Transportation", "Guide"]
  },
  {
    id: 10,
    title: "5 Days Queen Elizabeth NP and Bwindi Gorilla Trek Safari",
    badge: "Popular Tour",
    rating: 5,
    image: "/images/bwindi-landscape.jpg.webp",
    slug: "5-days-queen-elizabeth-np-and-bwindi-gorilla-trek-safari",
    overview: "Combine classic wildlife viewing with gorilla trekking. Enjoy game drives and boat cruises in Queen Elizabeth National Park before heading to Bwindi for gorilla trekking. A perfect introduction to Uganda's wildlife diversity.",
    duration: "5 days / 4 nights",
    price: "$2,800",
    includes: ["Gorilla permit", "Park fees", "Accommodation", "All meals", "Game drives", "Boat cruise"]
  },
  {
    id: 11,
    title: "4 Days Mountain Gorillas & Golden Monkeys Safari",
    badge: "Premium Trip",
    rating: 5,
    image: "/images/kibale-chimps001341.jpg.webp",
    slug: "4-days-mountain-gorillas-golden-monkeys-safari",
    overview: "A primate-focused safari in Mgahinga Gorilla National Park. Track both mountain gorillas and golden monkeys in the same park, enjoying the unique volcanic landscape of the Virunga Mountains. Includes cultural visits to local communities.",
    duration: "4 days / 3 nights",
    price: "$2,200",
    includes: ["Gorilla and golden monkey permits", "Park fees", "Accommodation", "All meals", "Guide", "Cultural visit"]
  },
  {
    id: 12,
    title: "4 Days Gorillas, Lake Bunyonyi and Wildlife Safari",
    badge: "Best Seller",
    rating: 5,
    image: "/images/queen-elizabeth-np-uganda.jpg.webp",
    slug: "4-days-gorillas-lake-bunyonyi-and-wildlife-safari",
    overview: "Combine gorilla trekking with relaxation at Africa's most beautiful lake. After tracking gorillas in Bwindi, unwind at Lake Bunyonyi with boat trips and scenic views. Includes a visit to Queen Elizabeth National Park for wildlife viewing.",
    duration: "4 days / 3 nights",
    price: "$2,300",
    includes: ["Gorilla permit", "Lake Bunyonyi boat trip", "Accommodation", "All meals", "Game drive", "Guide"]
  },
  {
    id: 13,
    title: "8 Days Chimps and Wildlife Safari",
    badge: "Top Choice",
    rating: 5,
    image: "/images/lake-mburo.jpg",
    slug: "8-days-chimps-and-wildlife-safari",
    overview: "Focus on chimpanzees and other wildlife without gorilla trekking. Track chimpanzees in Kibale, enjoy game drives in Queen Elizabeth and Murchison Falls, and experience boat safaris on the Nile. Perfect for primate lovers who want variety.",
    duration: "8 days / 7 nights",
    price: "$3,400",
    includes: ["Chimpanzee permits", "All park fees", "Accommodation", "All meals", "Game drives", "Boat safaris"]
  },
  {
    id: 14,
    title: "4 Days Jinja Adventure and Sipi Falls",
    badge: "Popular Tour",
    rating: 5,
    image: "/images/murchison-falls.jpg",
    slug: "4-days-jinja-adventure-and-sipi-falls",
    overview: "An adventure-focused tour combining white-water rafting at the source of the Nile with hiking to beautiful Sipi Falls. Includes cultural visits and scenic viewpoints. Perfect for active travelers looking for adrenaline and natural beauty.",
    duration: "4 days / 3 nights",
    price: "$1,800",
    includes: ["White-water rafting", "Hiking guides", "Accommodation", "All meals", "Transportation", "All activities"]
  },
  {
    id: 15,
    title: "10 Days Gorillas, Chimps (Kibale) & Big 5 Wildlife Safari",
    badge: "Premium Trip",
    rating: 5,
    image: "/images/kampala.jpg",
    slug: "10-days-gorillas-chimps-kibale-big-5-wildlife-safari",
    overview: "A comprehensive primate and wildlife safari. Track gorillas in Bwindi, chimpanzees in Kibale, and search for the Big Five in Queen Elizabeth and Murchison Falls. Includes luxury accommodation and expert guides for a premium experience.",
    duration: "10 days / 9 nights",
    price: "$4,500",
    includes: ["All permits and park fees", "Luxury accommodation", "All meals and drinks", "Private guide", "Game drives", "Boat cruises"]
  },
  {
    id: 16,
    title: "3 Days Uganda Chimpanzee Habituation Experience",
    badge: "Best Seller",
    rating: 5,
    image: "/images/gorilla-trekking-uganda-1.jpg",
    slug: "3-days-uganda-chimpanzee-habituation-experience",
    overview: "Spend extended time with chimpanzees during the habituation process. Accompany researchers and trackers as they work with chimpanzee groups, offering a more in-depth primate experience than standard tracking.",
    duration: "3 days / 2 nights",
    price: "$1,700",
    includes: ["Chimpanzee habituation permit", "Accommodation", "All meals", "Research fees", "Guide", "Transportation"]
  },
];
