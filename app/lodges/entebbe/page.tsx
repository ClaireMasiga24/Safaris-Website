import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function EntebbeLodges() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entebbe Lodges</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Comfortable accommodations in Uganda's gateway city. Perfect for pre-safari stays and post-safari relaxation 
              near Entebbe International Airport and the shores of Lake Victoria.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Gateway to Your Safari</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Entebbe serves as the perfect starting and ending point for your Uganda safari adventure. 
                  Our carefully selected lodges offer comfort, convenience, and beautiful lake views.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Featured Lodges</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Lake Victoria Hotel:</strong> Luxury accommodation with stunning lake views
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Airport View Lodge:</strong> Convenient location near the international airport
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Botanical Beach Resort:</strong> Lakeside relaxation and botanical gardens
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Entebbe Safari Lodge:</strong> Comfortable mid-range option with pool
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Nearby Attractions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Entebbe Botanical Gardens
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Uganda Wildlife Education Centre
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Lake Victoria beaches
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Ngamba Island Chimpanzee Sanctuary
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Accommodation Options</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Luxury Lodges</h4>
                    <p className="text-gray-700">5-star accommodations with premium amenities</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Mid-Range Hotels</h4>
                    <p className="text-gray-700">Comfortable options with great value</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Budget Accommodations</h4>
                    <p className="text-gray-700">Affordable stays for budget-conscious travelers</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Book Accommodation
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
