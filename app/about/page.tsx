import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full">
          <div className="flex flex-col lg:flex-row min-h-[70vh]">
            {/* Left Column - Black Background */}
            <div className="bg-black text-white lg:w-[55%] p-8 lg:p-16 flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                  Visit Uganda
                </h1>
                <p className="text-lg lg:text-xl font-sans leading-relaxed opacity-90">
                  We are a Safari Company with operations in Uganda and Rwanda handling Destination management for Tour operators around the world and private or group tailor made life impacting African experiences.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-[45%]">
              <img 
                src="/images/reasons-blade-1.jpeg" 
                alt="Person sitting in safari chair overlooking green landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded with a deep love for Uganda's incredible wildlife and natural beauty, 
                  we've been creating exceptional safari experiences for over 15 years. Our journey 
                  began with a simple mission: to share the magic of Uganda's wilderness with the world.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Our Mission</h3>
                    <p className="text-gray-700">
                      To provide authentic, sustainable, and unforgettable safari experiences that 
                      showcase Uganda's incredible biodiversity while supporting local communities 
                      and conservation efforts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Our Values</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Sustainability:</strong> Committed to eco-friendly tourism practices
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Expertise:</strong> Local knowledge and professional guides
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Community:</strong> Supporting local economies and cultural preservation
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Excellence:</strong> Uncompromising quality in every safari experience
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Local Expertise</h4>
                    <p className="text-gray-700">Born and raised in Uganda, we know the best spots and hidden gems</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Customized Experiences</h4>
                    <p className="text-gray-700">Tailored safaris to match your interests and preferences</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Conservation Focus</h4>
                    <p className="text-gray-700">Supporting wildlife protection and community development</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-[#2A8F63]">Safety First</h4>
                    <p className="text-gray-700">Comprehensive safety protocols and experienced guides</p>
                  </div>
                </div>
                <a 
                  href="/about/contact" 
                  className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block mt-6"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2C241F] mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#2A8F63] text-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  JD
                </div>
                <h3 className="text-xl font-semibold text-[#2C241F] mb-2">John Doe</h3>
                <p className="text-[#2A8F63] font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600">15+ years of safari experience</p>
              </div>
              <div className="text-center">
                <div className="bg-[#2A8F63] text-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  SJ
                </div>
                <h3 className="text-xl font-semibold text-[#2C241F] mb-2">Sarah Johnson</h3>
                <p className="text-[#2A8F63] font-medium mb-2">Head Guide</p>
                <p className="text-gray-600">Wildlife expert and conservationist</p>
              </div>
              <div className="text-center">
                <div className="bg-[#2A8F63] text-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  MK
                </div>
                <h3 className="text-xl font-semibold text-[#2C241F] mb-2">Michael Kato</h3>
                <p className="text-[#2A8F63] font-medium mb-2">Operations Manager</p>
                <p className="text-gray-600">Ensuring seamless safari experiences</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
