import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function SafariTypes() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Different Safari Types</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Explore Uganda's diverse wildlife and landscapes through our range of safari experiences. 
              From classic game drives to walking safaris, find the perfect adventure for you.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2C241F] mb-8">Our Safari Experiences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#F7F6F2] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A8F63] mb-3">Game Drive Safaris</h3>
                <p className="text-gray-700 mb-4">
                  Classic 4x4 vehicle safaris through Uganda's national parks to spot the Big Five and other wildlife.
                </p>
                <span className="text-sm text-[#2A8F63] font-medium">Available in all major parks</span>
              </div>

              <div className="bg-[#F7F6F2] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A8F63] mb-3">Walking Safaris</h3>
                <p className="text-gray-700 mb-4">
                  Guided walking tours for intimate wildlife encounters and closer connection with nature.
                </p>
                <span className="text-sm text-[#2A8F63] font-medium">Lake Mburo, Kidepo Valley</span>
              </div>

              <div className="bg-[#F7F6F2] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A8F63] mb-3">Boat Safaris</h3>
                <p className="text-gray-700 mb-4">
                  Water-based wildlife viewing on Uganda's lakes and rivers, perfect for bird watching.
                </p>
                <span className="text-sm text-[#2A8F63] font-medium">Kazinga Channel, Nile River</span>
              </div>

              <div className="bg-[#F7F6F2] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A8F63] mb-3">Primate Safaris</h3>
                <p className="text-gray-700 mb-4">
                  Specialized tours focusing on gorilla and chimpanzee trekking experiences.
                </p>
                <span className="text-sm text-[#2A8F63] font-medium">Bwindi, Kibale Forest</span>
              </div>

              <div className="bg-[#F7F6F2] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A8F63] mb-3">Birding Safaris</h3>
                <p className="text-gray-700 mb-4">
                  Expert-led bird watching tours in Uganda's diverse ecosystems and birding hotspots.
                </p>
                <span className="text-sm text-[#2A8F63] font-medium">All national parks</span>
              </div>

              <div className="bg-[#F7F6F2] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A8F63] mb-3">Cultural Safaris</h3>
                <p className="text-gray-700 mb-4">
                  Combine wildlife viewing with authentic cultural experiences and community visits.
                </p>
                <span className="text-sm text-[#2A8F63] font-medium">Various locations</span>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href="/about/contact" 
                className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block"
              >
                Plan Your Safari
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
