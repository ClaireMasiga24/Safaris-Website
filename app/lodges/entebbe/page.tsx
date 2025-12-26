import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function EntebbeLodges() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="relative bg-cover bg-center py-32 text-white min-h-[70vh] flex items-center" style={{ backgroundImage: "url('/images/apoka-safari-lodge-1.jpg')" }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Safari Lodges & Hotels in Entebbe</h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#2C241F] mb-10 text-center">Where to stay in Entebbe</h2>
            {/* Content removed as requested */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
