import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-[#2A8F63] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
            <p className="text-xl text-[#F7F6F2] max-w-3xl">
              Hear from our satisfied travelers about their unforgettable Uganda safari experiences. 
              Real stories from real people who trusted us with their African adventure.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2C241F] mb-12 text-center">What Our Travelers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    EM
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">Emma & Mark</h3>
                    <p className="text-[#2A8F63] text-sm">United Kingdom</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Our gorilla trekking experience was absolutely incredible! The guides were knowledgeable, 
                  the accommodation was perfect, and seeing the mountain gorillas up close was a dream come true. 
                  Thank you for making our honeymoon unforgettable!"
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    RS
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">Robert Smith</h3>
                    <p className="text-[#2A8F63] text-sm">United States</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "As a wildlife photographer, I've been on many safaris, but Uganda stands out. 
                  The diversity of wildlife, from chimpanzees to tree-climbing lions, was breathtaking. 
                  The team's attention to detail and local knowledge made all the difference."
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    LJ
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">Lisa Johnson</h3>
                    <p className="text-[#2A8F63] text-sm">Canada</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Traveling with my family to Uganda was the best decision we ever made. The kids loved 
                  the boat safari on Kazinga Channel, and we all enjoyed the cultural experiences. 
                  Everything was perfectly organized from start to finish."
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    DW
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">David & Wendy</h3>
                    <p className="text-[#2A8F63] text-sm">Australia</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The 12-day primate safari exceeded all expectations. From the moment we landed in Entebbe 
                  to our final goodbye, every detail was handled professionally. The lodges were amazing, 
                  and our guide's wildlife spotting skills were incredible."
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    MK
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">Maria Kowalski</h3>
                    <p className="text-[#2A8F63] text-sm">Germany</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I was nervous about traveling solo, but the team made me feel completely safe and welcome. 
                  The customized 8-day safari was perfect for my interests, and I met wonderful people along the way. 
                  Uganda's beauty is truly unmatched."
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2A8F63] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    TC
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C241F]">Thomas Chen</h3>
                    <p className="text-[#2A8F63] text-sm">Singapore</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The bird watching opportunities in Uganda are world-class! Our guide was an expert ornithologist 
                  who helped us spot over 200 species. The combination of wildlife, culture, and natural beauty 
                  made this the trip of a lifetime."
                </p>
                <div className="mt-4 text-yellow-500">
                  ★★★★★
                </div>
              </div>
            </div>

            <div className="bg-[#F7F6F2] p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Ready to Create Your Own Story?</h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied travelers who have experienced the magic of Uganda with us. 
                Let us help you create memories that will last a lifetime.
              </p>
              <a 
                href="/about/contact" 
                className="bg-[#2A8F63] text-white px-8 py-3 rounded-md hover:bg-[#1E6B4A] transition-colors font-medium inline-block"
              >
                Start Your Adventure
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
