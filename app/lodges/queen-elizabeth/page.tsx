import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function QueenElizabethLodges() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Queen Elizabeth National Park Lodges</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Experience Uganda's most popular national park from comfortable lodges. 
              Enjoy game drives, boat safaris, and chimpanzee tracking in this diverse ecosystem.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Diverse Wildlife Experience</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Queen Elizabeth National Park offers incredible biodiversity including tree-climbing lions, 
                  elephants, hippos, and chimpanzees. Our lodges provide perfect access to all park activities.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Featured Lodges</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Mweya Safari Lodge:</strong> Luxury accommodation with crater lake views
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Ishasha Wilderness Camp:</strong> Tented camp in the tree-climbing lion area
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Kyambura Gorge Lodge:</strong> Luxury lodge near chimpanzee tracking
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Enganzi Game Lodge:</strong> Mid-range option with great value
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Park Activities</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Game drives in Kasenyi plains
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Kazinga Channel boat cruise
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Chimpanzee tracking in Kyambura Gorge
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Tree-climbing lion viewing in Ishasha
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Lodge Categories</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Luxury Lodges</h4>
                    <p className="text-gray-700">Premium accommodation with full amenities</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Tented Camps</h4>
                    <p className="text-gray-700">Authentic safari experience in comfortable tents</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Mid-Range Options</h4>
                    <p className="text-gray-700">Comfortable lodges with great facilities</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Book Your Safari
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
