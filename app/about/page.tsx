import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Uganda Safari Company",
    "description": "Uganda Safari Company offers authentic safari experiences in Uganda and Rwanda, specializing in destination management for tour operators worldwide and private or group tailor-made African adventures.",
    "url": "https://ugandasafaricompany.com/about",
    "telephone": "+256-XXX-XXXXXX",
    "email": "bigapesafrica@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Uganda"
    },
    "areaServed": ["Uganda", "Rwanda"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safari Tours",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gorilla Trekking Tours"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimpanzee Trekking Tours"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Safari Experiences"
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>About Uganda Safari Company - Authentic African Safari Experiences</title>
        <meta 
          name="description" 
          content="Learn about Uganda Safari Company - your trusted partner for authentic safari experiences in Uganda and Rwanda. 15+ years of expertise in destination management and tailor-made African adventures." 
        />
        <meta 
          name="keywords" 
          content="Uganda safari company, African safari tours, gorilla trekking Uganda, chimpanzee trekking, Rwanda safaris, destination management Uganda, custom safari experiences, wildlife tours Africa" 
        />
        <meta property="og:title" content="About Uganda Safari Company - Authentic African Safari Experiences" />
        <meta property="og:description" content="Discover our story and expertise in creating unforgettable safari experiences in Uganda and Rwanda. 15+ years of authentic African adventures." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ugandasafaricompany.com/about" />
        <meta property="og:image" content="/images/reasons-blade-1.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Uganda Safari Company" />
        <meta name="twitter:description" content="Your trusted partner for authentic safari experiences in Uganda and Rwanda" />
        <link rel="canonical" href="https://ugandasafaricompany.com/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="w-full" itemScope itemType="https://schema.org/AboutPage">
            <div className="flex flex-col lg:flex-row min-h-[80vh]">
              {/* Left Column - Black Background */}
              <div className="bg-[#000000] text-white lg:w-[60%] p-8 lg:p-16 flex items-center">
                <div className="max-w-2xl">
                  <h1 className="text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight" itemProp="headline">
                    Visit Uganda
                  </h1>
                  <p className="text-xl font-sans leading-relaxed text-white opacity-100" style={{ lineHeight: '1.6', fontSize: '20px' }} itemProp="description">
                    We are a Safari Company with operations in Uganda and Rwanda handling Destination management for Tour operators around the world and private or group tailor made life impacting African experiences.
                  </p>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="lg:w-[40%]">
                <img 
                  src="/images/reasons-blade-1.jpeg" 
                  alt="Person sitting in safari chair overlooking green landscape in Uganda - authentic African safari experience"
                  className="w-full h-full object-cover"
                  itemProp="image"
                />
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Our Story</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Founded with a deep love for Uganda's incredible wildlife and natural beauty, 
                    we've been creating exceptional safari experiences for over 15 years. Our journey 
                    began with a simple mission: to share the magic of Uganda's wilderness with the world.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Our Mission</h3>
                      <p className="text-gray-700">
                        To provide authentic, sustainable, and unforgettable safari experiences that 
                        showcase Uganda's incredible biodiversity while supporting local communities 
                        and conservation efforts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Our Values</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-[#2A8F63] mr-2">•</span>
                          <strong>Sustainability:</strong> Committed to eco-friendly tourism practices
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#2A8F63] mr-2">•</span>
                          <strong>Expertise:</strong> Local knowledge and professional guides
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#2A8F63] mr-2">•</span>
                          <strong>Community:</strong> Supporting local economies and cultural preservation
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#2A8F63] mr-2">•</span>
                          <strong>Excellence:</strong> Uncompromising quality in every safari experience
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F7F6F2] p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Why Choose Uganda Safari Company?</h3>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-[#2A8F63]">Local Expertise</h4>
                      <p className="text-gray-700">Born and raised in Uganda, we know the best spots and hidden gems for gorilla trekking and wildlife viewing</p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-[#2A8F63]">Customized Experiences</h4>
                      <p className="text-gray-700">Tailored safaris to match your interests and preferences for the perfect African adventure</p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-[#2A8F63]">Conservation Focus</h4>
                      <p className="text-gray-700">Supporting wildlife protection and community development in Uganda and Rwanda</p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-[#2A8F63]">Safety First</h4>
                      <p className="text-gray-700">Comprehensive safety protocols and experienced guides for all Uganda safari tours</p>
                    </div>
                  </div>
                  <a 
                    href="/about/contact" 
                    className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                    aria-label="Contact Uganda Safari Company for safari inquiries"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#2C241F] mb-12 text-center">Our Expert Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-[#2A8F63] text-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    JD
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C241F] mb-2">John Doe</h3>
                  <p className="text-[#2A8F63] font-medium mb-2">Founder & CEO</p>
                  <p className="text-gray-600">15+ years of Uganda safari experience and wildlife conservation</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#2A8F63] text-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    SJ
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C241F] mb-2">Sarah Johnson</h3>
                  <p className="text-[#2A8F63] font-medium mb-2">Head Guide</p>
                  <p className="text-gray-600">Wildlife expert and conservationist specializing in Uganda gorilla trekking</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#2A8F63] text-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    MK
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C241F] mb-2">Michael Kato</h3>
                  <p className="text-[#2A8F63] font-medium mb-2">Operations Manager</p>
                  <p className="text-gray-600">Ensuring seamless safari experiences across Uganda and Rwanda</p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO-Optimized Content Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#2C241F] mb-8 text-center">Uganda Safari Company - Your Trusted African Adventure Partner</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  As a premier <strong>Uganda safari company</strong>, we specialize in creating unforgettable <strong>African safari experiences</strong> that showcase the best of Uganda and Rwanda's wildlife and natural beauty. Our expertise in <strong>destination management</strong> ensures that every tour operator and individual traveler receives exceptional service.
                </p>
                
                <h3 className="text-2xl font-semibold text-[#2A8F63] mb-4">Why Choose Our Uganda Safari Tours?</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li><strong>Authentic Experiences:</strong> We focus on genuine cultural and wildlife encounters that go beyond typical tourist attractions</li>
                  <li><strong>Local Knowledge:</strong> Our team's deep understanding of Uganda's ecosystems ensures you see the best wildlife viewing spots</li>
                  <li><strong>Sustainable Tourism:</strong> We're committed to conservation and supporting local communities through responsible tourism practices</li>
                  <li><strong>Custom Itineraries:</strong> Whether you're interested in gorilla trekking, chimpanzee encounters, or general wildlife safaris, we create personalized experiences</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#2A8F63] mb-4">Our Safari Destinations</h3>
                <p className="text-gray-700 mb-4">
                  We operate throughout <strong>Uganda</strong> and <strong>Rwanda</strong>, offering access to world-renowned national parks including Bwindi Impenetrable Forest for gorilla trekking, Queen Elizabeth National Park for classic safaris, and Kibale Forest for chimpanzee tracking.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
