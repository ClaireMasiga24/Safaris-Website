import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function LakeMburoLodges() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lake Mburo National Park Lodges</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Experience the beauty of Uganda's smallest savannah national park. 
              Stay in comfortable lodges surrounded by wildlife and stunning lake views.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Wildlife Haven</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Lake Mburo National Park offers unique wildlife experiences including walking safaris, 
                  boat trips, and excellent zebra and impala viewing. Our lodges provide the perfect base for exploration.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Featured Lodges</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Mihingo Lodge:</strong> Luxury tented camp with panoramic views
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Lake Mburo Safari Lodge:</strong> Mid-range option with pool and lake views
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Rwakobo Rock:</strong> Eco-friendly lodge with stunning rock formations
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Arcadia Cottages:</strong> Comfortable budget-friendly accommodation
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Park Highlights</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Walking safaris with armed guides
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Boat trips on Lake Mburo
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Zebra and impala herds
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Bird watching opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Accommodation Features</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Luxury Tented Camps</h4>
                    <p className="text-gray-700">Premium tented accommodation with modern amenities</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Eco-Lodges</h4>
                    <p className="text-gray-700">Sustainable stays with minimal environmental impact</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Family-Friendly Options</h4>
                    <p className="text-gray-700">Comfortable lodges suitable for families</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Book Your Stay
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
