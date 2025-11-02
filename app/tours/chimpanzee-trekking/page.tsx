import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function ChimpanzeeTrekking() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Chimpanzee Trekking Tours</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Discover the fascinating world of chimpanzees in Uganda's lush forests. 
              Experience close encounters with our closest primate relatives in their natural habitat.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Chimpanzee Adventures</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Kibale Forest National Park offers some of the best chimpanzee trekking experiences in Africa. 
                  Join us for an unforgettable journey through tropical rainforests to observe these intelligent primates.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#2A8F63]">Experience Includes:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Guided chimpanzee trekking in Kibale Forest
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Chimpanzee habituation experience
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Bird watching and forest exploration
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Community and cultural interactions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Available Tours</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">2-Day Chimpanzee Trek</h4>
                    <p className="text-gray-700">Quick chimpanzee experience</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">4-Day Primate Adventure</h4>
                    <p className="text-gray-700">Chimps and other primates</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Book Now
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
