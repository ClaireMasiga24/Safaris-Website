import { notFound } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { featuredTours } from '@/app/data/featuredTours';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return featuredTours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = featuredTours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96 w-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${tour.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
          <div className="relative z-20 flex items-end justify-center h-full px-4 pb-12">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {tour.title}
              </h1>
              <div className="flex items-center justify-center gap-4">
                <span className="bg-[#8B4513] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {tour.badge}
                </span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-white">({tour.rating}.0)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#2C241F] mb-6">Tour Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {tour.overview}
                </p>

                {/* Highlights */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Tour Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.includes?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8B4513] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Itinerary Placeholder */}
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-[#2C241F] mb-4">Detailed Itinerary</h3>
                  <p className="text-gray-600 mb-4">
                    A detailed day-by-day itinerary will be provided upon booking. This tour includes all activities mentioned, with expert guides and comfortable accommodations throughout.
                  </p>
                  <div className="space-y-4">
                    {[1, 2, 3].map((day) => (
                      <div key={day} className="border-l-4 border-[#8B4513] pl-4 py-2">
                        <h4 className="font-bold text-[#2C241F]">Day {day}: Arrival and Introduction</h4>
                        <p className="text-gray-600">Detailed description of the day's activities will be provided in the full itinerary.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white border border-gray-200 rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-[#2C241F] mb-6">Tour Details</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Duration</h4>
                      <p className="text-xl font-semibold text-[#2C241F]">{tour.duration || 'Custom'}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Price</h4>
                      <p className="text-3xl font-bold text-[#8B4513]">{tour.price || 'Contact for pricing'}</p>
                      <p className="text-gray-600 text-sm mt-1">Per person, based on double occupancy</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Included</h4>
                      <ul className="space-y-2">
                        {tour.includes?.slice(0, 5).map((item, index) => (
                          <li key={index} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-[#8B4513] text-white py-3 rounded-lg hover:bg-[#6B3410] transition-colors font-semibold text-lg">
                      Book This Tour
                    </button>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Need Help?</h4>
                      <p className="text-gray-600 mb-4">Our safari experts are here to answer your questions.</p>
                      <button className="w-full border border-[#8B4513] text-[#8B4513] py-2 rounded-lg hover:bg-[#8B4513] hover:text-white transition-colors font-semibold">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tours */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2C241F] text-center mb-12">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTours
                .filter((t) => t.id !== tour.id)
                .slice(0, 3)
                .map((relatedTour) => (
                  <div key={relatedTour.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${relatedTour.image})` }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#8B4513] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {relatedTour.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#2C241F] mb-2 line-clamp-2">
                        {relatedTour.title}
                      </h3>
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-600">({relatedTour.rating}.0)</span>
                      </div>
                      <a 
                        href={`/tours/${relatedTour.slug}`}
                        className="block w-full bg-[#8B4513] text-white py-2.5 rounded-lg hover:bg-[#6B3410] transition-colors font-semibold text-sm text-center"
                      >
                        VIEW TOUR
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
