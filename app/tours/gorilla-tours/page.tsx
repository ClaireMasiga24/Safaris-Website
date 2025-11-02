import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function GorillaTours() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gorilla Tours in Uganda</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Experience the magic of mountain gorilla trekking in Uganda's pristine rainforests. 
              Encounter these gentle giants in their natural habitat for an unforgettable wildlife adventure.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Mountain Gorilla Trekking</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Uganda is home to nearly half of the world's remaining mountain gorilla population. 
                  Our gorilla trekking tours take you deep into Bwindi Impenetrable National Park and 
                  Mgahinga Gorilla National Park for intimate encounters with these magnificent primates.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#2A8F63]">Tour Highlights:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Guided gorilla trekking with experienced trackers
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      One hour with habituated gorilla families
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      All necessary permits included
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Professional photography guidance
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Cultural community visits
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Tour Packages</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">3-Day Gorilla Trek</h4>
                    <p className="text-gray-700">Perfect for a weekend adventure</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">5-Day Gorilla & Wildlife</h4>
                    <p className="text-gray-700">Combine gorillas with other wildlife viewing</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">7-Day Ultimate Gorilla Experience</h4>
                    <p className="text-gray-700">Comprehensive gorilla and cultural tour</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Book Your Trek
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
