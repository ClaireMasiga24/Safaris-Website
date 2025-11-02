import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Ready to start your Uganda safari adventure? Get in touch with our expert team 
              to plan your perfect itinerary and answer all your questions.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our experienced safari consultants are here to help you create the perfect Uganda safari experience. 
                  Contact us today to start planning your adventure.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Contact Information</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Phone:</strong> +256 700 123 456
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Email:</strong> info@ugandasafaris.com
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Address:</strong> Plot 123, Kampala Road, Kampala, Uganda
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM EAT
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Emergency Contact</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        <strong>24/7 Emergency:</strong> +256 700 789 012
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2A8F63] mr-2">•</span>
                        Available for urgent safari-related matters
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8F63]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8F63]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8F63]"
                      placeholder="+256 700 123 456"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8F63]"
                      placeholder="Tell us about your safari interests, preferred travel dates, and any specific requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
