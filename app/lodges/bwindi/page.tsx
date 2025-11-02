import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function BwindiLodges() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bwindi National Park Lodges</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Stay in the heart of gorilla country. Our lodges in Bwindi Impenetrable National Park 
              offer comfort and convenience for your mountain gorilla trekking adventure.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Gorilla Trekking Base</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Bwindi Impenetrable National Park is home to nearly half of the world's mountain gorilla population. 
                  Our lodges provide the perfect base for your once-in-a-lifetime gorilla encounter.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Featured Lodges</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Clouds Mountain Gorilla Lodge:</strong> Luxury accommodation with stunning views
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Buhoma Lodge:</strong> Mid-range option near the park entrance
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Gorilla Safari Lodge:</strong> Comfortable budget-friendly choice
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Silverback Lodge:</strong> Premium lodge with excellent service
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Trekking Sectors</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Buhoma Sector
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Ruhija Sector
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Rushaga Sector
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Nkuringo Sector
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Lodge Features</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Luxury Accommodation</h4>
                    <p className="text-gray-700">Premium lodges with exceptional comfort</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Mountain Views</h4>
                    <p className="text-gray-700">Stunning views of the impenetrable forest</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Trek Preparation</h4>
                    <p className="text-gray-700">Expert guidance for gorilla trekking</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Book Your Gorilla Trek
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
