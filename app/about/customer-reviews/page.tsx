import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function CustomerReviews() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Read authentic reviews from our travelers who have experienced the magic of Uganda with us. 
              Their stories speak volumes about the quality of our safaris.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2C241F] mb-12 text-center">What Our Customers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    JS
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">James & Sarah</h3>
                    <p className="text-[#2A8F63] text-sm">United Kingdom</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Our 8-day gorilla safari was absolutely perfect! The attention to detail, 
                  knowledgeable guides, and comfortable lodges made this trip unforgettable. 
                  Seeing the mountain gorillas was a life-changing experience."
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    MP
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">Maria Perez</h3>
                    <p className="text-[#2A8F63] text-sm">Spain</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "As a solo traveler, I was nervous about visiting Uganda, but the team made me feel 
                  completely safe and welcome. The 5-day safari was perfectly paced, and the wildlife 
                  encounters exceeded all expectations."
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    RW
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">Robert Wilson</h3>
                    <p className="text-[#2A8F63] text-sm">United States</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The bird watching opportunities were incredible! Our guide was an expert ornithologist 
                  who helped us spot over 150 species. The combination of wildlife, culture, and natural 
                  beauty made this the trip of a lifetime."
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    LC
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">Lisa Chen</h3>
                    <p className="text-[#2A8F63] text-sm">Canada</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Traveling with our two children was made easy by this amazing team. They customized 
                  the itinerary to keep the kids engaged, and the accommodations were family-friendly. 
                  The boat safari was a highlight for everyone!"
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    AK
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">Anna Kowalski</h3>
                    <p className="text-[#2A8F63] text-sm">Germany</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The chimpanzee trekking experience was absolutely incredible! Our guide's knowledge 
                  of primate behavior made the experience educational and exciting. The lodges were 
                  comfortable and the food was delicious."
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    DT
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">David Thompson</h3>
                    <p className="text-[#2A8F63] text-sm">Australia</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "From the moment we landed in Entebbe to our final goodbye, every detail was handled 
                  professionally. The 12-day primate safari exceeded all expectations. The tree-climbing 
                  lions in Ishasha were a spectacular sight!"
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>
            </div>

            <div className="bg-[#F7F6F2] p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Ready to Share Your Story?</h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Join our community of satisfied travelers and create memories that will last a lifetime. 
                Let us help you experience the magic of Uganda.
              </p>
              <a 
                href="/about/contact" 
                className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block"
              >
                Book Your Safari
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
