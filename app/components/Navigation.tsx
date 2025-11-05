'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menuItem: string) => {
    setActiveDropdown(activeDropdown === menuItem ? null : menuItem);
  };

  const menuItems = [
    { name: 'Home', hasDropdown: false, href: '/' },
    { name: 'Tours', hasDropdown: true, submenu: [
      { name: 'Customizable Safari Ideas', href: '/tours/customizable-safari-ideas' },
      { name: 'Gorilla Tours in Uganda', href: '/tours/gorilla-tours' },
      { name: 'Chimpanzee Trekking Tours', href: '/tours/chimpanzee-trekking' },
      { name: 'Different Safari Types', href: '/tours/safari-types' },
      { name: 'Travel Guides to Inspire You', href: '/tours/travel-guides' }
    ] },
    { name: 'Destinations', hasDropdown: true, submenu: [
      { name: 'Uganda-Gorillas,Primates', href: '/destinations/uganda-gorillas-primates' }
    ] },
    { name: 'Lodges', hasDropdown: true, submenu: [
      { name: 'Entebbe', href: '/lodges/entebbe' },
      { name: 'Lake Mburo NP', href: '/lodges/lake-mburo' },
      { name: 'Bwindi National Park', href: '/lodges/bwindi' },
      { name: 'Queen Elizabeth National Park', href: '/lodges/queen-elizabeth' },
      { name: 'Kibale Forest', href: '/lodges/kibale-forest' }
    ] },
    { name: 'Stories', hasDropdown: false, href: '/stories' },
    { name: 'About Us', hasDropdown: false, href: '/about' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Navigation Bar */}
      <div className="bg-[#F7F6F2] text-[#2C241F] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-6">
              <span className="font-semibold">Contact Us</span>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="#2C241F" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:bigapesafrica@gmail.com" className="hover:text-[#2A8F63] transition-colors">Email:bigapesafrica@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Social Media Icons - X, Instagram, LinkedIn */}
            <a href="#" className="hover:text-[#2A8F63] transition-colors">
              <svg className="w-4 h-4" fill="#2C241F" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-[#2A8F63] transition-colors">
              <svg className="w-4 h-4" fill="#2C241F" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-[#2A8F63] transition-colors">
              <svg className="w-4 h-4" fill="#2C241F" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#2A8F63] text-[#F7F6F2] py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Uganda Safari Company" 
              className="h-12 w-16 object-cover rounded"
            />
            <div className="ml-3 flex flex-col">
              <span className="text-xl font-bold leading-tight">Uganda</span>
              <span className="text-lg font-semibold leading-tight">Safari</span>
              <span className="text-sm font-medium leading-tight">Company</span>
            </div>
          </div>

          {/* Desktop Menu - Centered navigation items */}
          <div className="hidden md:flex items-center flex-1 justify-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href={item.href || '#'} 
                  className="hover:text-[#F58220] transition-colors font-medium flex items-center space-x-1"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <span className="text-xs">▼</span>
                  )}
                </a>
                
                {/* Desktop Dropdown */}
                {item.hasDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white text-[#2C241F] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {item.submenu?.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-[#F7F6F2] hover:text-[#2A8F63] transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Separate from centered menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#" 
              className="bg-[#D4A017] text-[#2C241F] px-6 py-2 rounded-md hover:bg-[#F58220] transition-colors font-medium"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#F7F6F2] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#F7F6F2] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#F7F6F2] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#2A8F63] py-4`}>
          <div className="flex flex-col space-y-4 px-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full hover:text-[#F58220] transition-colors font-medium py-2"
                    >
                      <span>{item.name}</span>
                      <span className={`text-xs transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 hover:text-[#F58220] transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={item.href || '#'} className="hover:text-[#F58220] transition-colors font-medium py-2 block">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <a 
              href="#" 
              className="bg-[#D4A017] text-[#2C241F] px-6 py-2 rounded-md hover:bg-[#F58220] transition-colors font-medium text-center mt-4"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
