import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function WhyTravelWithUs() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Travel With Us</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Discover what sets us apart and makes us Uganda's premier safari company. 
              Experience the difference with our expert team and personalized service.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Our Unique Advantages</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We go beyond just organizing safaris - we create unforgettable experiences that connect 
                  you with Uganda's incredible wildlife, culture, and natural beauty in meaningful ways.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Expert Local Knowledge</h3>
                    <p className="text-gray-700">
                      Our team is born and raised in Uganda, giving us unparalleled local knowledge 
                      of the best wildlife viewing spots, hidden gems, and cultural experiences that 
                      most visitors never discover.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Personalized Service</h3>
                    <p className="text-gray-700">
                      Every safari is customized to your interests, preferences, and travel style. 
                      We take the time to understand what matters most to you and create an itinerary 
                      that exceeds your expectations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Safety & Reliability</h3>
                    <p className="text-gray-700">
                      Your safety is our top priority. We maintain the highest safety standards, 
                      work with experienced guides, and have comprehensive emergency protocols in place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">What You Get</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Expert Guides</h4>
                    <p className="text-gray-700">Professional guides with extensive wildlife knowledge</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Quality Accommodation</h4>
                    <p className="text-gray-700">Carefully selected lodges for comfort and authenticity</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">24/7 Support</h4>
                    <p className="text-gray-700">Round-the-clock assistance throughout your journey</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Value for Money</h4>
                    <p className="text-gray-700">Premium experiences at competitive prices</p>
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
