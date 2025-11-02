import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Your privacy is important to us. This policy explains how we collect, use, and protect 
              your personal information when you use our services.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Information We Collect</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Personal Information</h3>
                  <p className="text-gray-700 mb-3">
                    We collect information that you provide directly to us when you:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Make a booking or inquiry
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Contact us via email, phone, or contact forms
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Subscribe to our newsletter
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Participate in surveys or promotions
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    This may include your name, email address, phone number, passport details, 
                    dietary requirements, and other information necessary for your safari.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      IP address and browser type
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Pages visited and time spent on our website
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Referring website and search terms
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Device information and operating system
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">How We Use Your Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Process and manage your safari bookings
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Communicate with you about your trip
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Provide customer support and respond to inquiries
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Send marketing communications (with your consent)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Improve our website and services
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Comply with legal obligations
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Information Sharing</h3>
                  <p className="text-gray-700 mb-3">
                    We may share your information with:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Accommodation providers for your bookings
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Uganda Wildlife Authority for park permits
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Transportation companies for transfers
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Professional guides and tour operators
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Legal authorities when required by law
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    We do not sell your personal information to third parties for marketing purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Data Security</h3>
                  <p className="text-gray-700">
                    We implement appropriate security measures to protect your personal information 
                    from unauthorized access, alteration, disclosure, or destruction. These include 
                    encryption, secure servers, and restricted access to personal data.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Your Rights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Access and review your personal information
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Correct inaccurate or incomplete data
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Request deletion of your personal information
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Opt-out of marketing communications
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2A8F63] mr-2">•</span>
                      Withdraw consent for data processing
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Cookies</h3>
                  <p className="text-gray-700">
                    Our website uses cookies to enhance your browsing experience. Cookies help us 
                    understand how visitors use our site and improve our services. You can control 
                    cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#2A8F63] mb-3">Data Retention</h3>
                  <p className="text-gray-700">
                    We retain your personal information for as long as necessary to fulfill the purposes 
                    outlined in this policy, unless a longer retention period is required or permitted by law. 
                    Booking information is typically retained for 7 years for legal and tax purposes.
                  </p>
                </div>

                <div className="bg-[#F7F6F2] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#2C241F] mb-4">Contact Us</h3>
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, 
                    please contact us at:
                  </p>
                  <p className="text-gray-700 mt-2">
                    Email:{' '}
                    <a href="mailto:info@ugandasafari.com" className="text-[#2A8F63] hover:underline">
                      info@ugandasafari.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Phone: +256 700 123 456
                  </p>
                  <p className="text-gray-700 mt-4">
                    This policy was last updated on November 2, 2025. We may update this policy from time to time, 
                    and any changes will be posted on this page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
