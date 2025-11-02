import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function CustomizableSafariIdeas() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Customizable Safari Ideas</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Create your dream safari adventure with our flexible and personalized tour packages. 
              Tailor every aspect of your journey to match your preferences and interests.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Design Your Perfect Safari</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our customizable safari packages give you the freedom to design an itinerary that perfectly matches your travel style, interests, and budget. Whether you're seeking adventure, relaxation, or cultural immersion, we'll help you create the perfect journey.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#2A8F63]">What You Can Customize:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Duration and travel dates
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Accommodation preferences (luxury lodges, eco-camps, etc.)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Wildlife viewing priorities
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Cultural experiences and community visits
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Adventure activities and extensions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Get Started</h3>
                <p className="text-gray-700 mb-6">
                  Contact our safari specialists to discuss your preferences and start planning your customized adventure.
                </p>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block"
                >
                  Contact Us
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
