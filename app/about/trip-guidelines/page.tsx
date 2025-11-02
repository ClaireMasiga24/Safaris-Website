import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function TripGuidelines() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trip Guidelines</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Essential information to help you prepare for your Uganda safari adventure. 
              Everything you need to know for a safe, comfortable, and unforgettable experience.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Preparing for Your Safari</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Proper preparation ensures you get the most out of your Uganda safari experience. 
                  Follow these guidelines to make your journey comfortable, safe, and memorable.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Health & Vaccinations</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Yellow fever vaccination certificate required
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Malaria prophylaxis recommended
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Tetanus and hepatitis A & B vaccinations advised
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Bring personal medications and first aid supplies
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">What to Pack</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Neutral-colored clothing (khaki, green, brown)
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Comfortable walking shoes and hiking boots
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Rain jacket and warm layers for evenings
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Binoculars, camera, and extra memory cards
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">During Your Safari</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Wildlife Viewing</h4>
                    <p className="text-gray-700">Always follow guide instructions and maintain safe distances</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Photography</h4>
                    <p className="text-gray-700">No flash photography with primates, respect wildlife space</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Health & Safety</h4>
                    <p className="text-gray-700">Stay hydrated, use sunscreen, and follow safety protocols</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Cultural Respect</h4>
                    <p className="text-gray-700">Dress modestly and ask permission before taking photos of people</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Get Detailed Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2C241F] mb-12 text-center">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2A8F63] mb-4">Visa Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2A8F63] mr-2">•</span>
                    Most nationalities require a visa
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A8F63] mr-2">•</span>
                    Apply online through Uganda e-visa system
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A8F63] mr-2">•</span>
                    Passport valid for at least 6 months
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A8F63] mr-2">•</span>
                    Allow 2-3 weeks for processing
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2A8F63] mb-4">Gorilla Trekking Rules</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2A8F63] mr-2">•</span>
                    Maximum 8 visitors per gorilla group
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A8F63] mr-2">•</span>
                    Minimum age: 15 years
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A8F63] mr-2">•</span>
                    Maintain 7-meter distance from gorillas
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A8F63] mr-2">•</span>
                    No flash photography
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
