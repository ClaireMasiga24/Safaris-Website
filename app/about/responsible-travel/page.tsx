import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function ResponsibleTravel() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Responsible Travel</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Committed to sustainable tourism that protects Uganda's wildlife, supports local communities, 
              and preserves the natural beauty for future generations.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Our Commitment to Sustainability</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We believe that tourism should benefit both visitors and the destinations they explore. 
                  Our responsible travel practices ensure that your safari experience contributes positively 
                  to conservation efforts and local communities.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Wildlife Conservation</h3>
                    <p className="text-gray-700">
                      We partner with national parks and conservation organizations to protect Uganda's 
                      incredible biodiversity. A portion of every safari booking goes directly to wildlife 
                      protection and habitat preservation programs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Community Support</h3>
                    <p className="text-gray-700">
                      We work with local communities to ensure tourism benefits are shared equitably. 
                      This includes employing local guides, sourcing supplies locally, and supporting 
                      community development projects.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Environmental Protection</h3>
                    <p className="text-gray-700">
                      We minimize our environmental impact through eco-friendly practices, waste reduction, 
                      and promoting lodges that follow sustainable tourism principles. Our vehicles are 
                      regularly maintained to reduce emissions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">How You Can Help</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Respect Wildlife</h4>
                    <p className="text-gray-700">Maintain safe distances and follow park guidelines</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Support Local</h4>
                    <p className="text-gray-700">Purchase crafts and products from local artisans</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Reduce Waste</h4>
                    <p className="text-gray-700">Use reusable water bottles and minimize plastic use</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Cultural Respect</h4>
                    <p className="text-gray-700">Learn about and respect local customs and traditions</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2C241F] mb-12 text-center">Our Conservation Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#2A8F63] text-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  UWA
                </div>
                <h3 className="text-xl font-semibold text-[#2C241F] mb-2">Uganda Wildlife Authority</h3>
                <p className="text-gray-600">Supporting national park conservation and management</p>
              </div>
              <div className="text-center">
                <div className="bg-[#2A8F63] text-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  UCT
                </div>
                <h3 className="text-xl font-semibold text-[#2C241F] mb-2">Uganda Community Tourism</h3>
                <p className="text-gray-600">Empowering local communities through tourism</p>
              </div>
              <div className="text-center">
                <div className="bg-[#2A8F63] text-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  GTF
                </div>
                <h3 className="text-xl font-semibold text-[#2C241F] mb-2">Gorilla Trust Foundation</h3>
                <p className="text-gray-600">Protecting mountain gorillas and their habitats</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
