import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function UgandaGorillasPrimates() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Uganda - Gorillas & Primates</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Discover the Pearl of Africa, home to magnificent mountain gorillas and diverse primate species. 
              Experience world-class primate trekking in Uganda's pristine rainforests.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Primate Paradise</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Uganda is a premier destination for primate enthusiasts, offering incredible opportunities 
                  to observe mountain gorillas, chimpanzees, and numerous other primate species in their natural habitats.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Key Primate Destinations</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Bwindi Impenetrable National Park:</strong> Home to nearly half of the world's mountain gorilla population
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Mgahinga Gorilla National Park:</strong> Gorilla trekking in the Virunga Mountains
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Kibale Forest National Park:</strong> Chimpanzee capital of East Africa
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Queen Elizabeth National Park:</strong> Chimpanzee tracking in Kyambura Gorge
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Primate Species</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Mountain Gorillas
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Chimpanzees
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Golden Monkeys
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Black and White Colobus Monkeys
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Red-tailed Monkeys
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Plan Your Primate Adventure</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Gorilla Trekking</h4>
                    <p className="text-gray-700">Mountain gorilla encounters in Bwindi and Mgahinga</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Chimpanzee Tracking</h4>
                    <p className="text-gray-700">Chimp experiences in Kibale and Queen Elizabeth</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Golden Monkey Trekking</h4>
                    <p className="text-gray-700">Unique golden monkey encounters in Mgahinga</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Start Planning
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
