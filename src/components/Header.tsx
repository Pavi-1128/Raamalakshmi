import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeout = useRef<number | null>(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Translation', path: '/services#translation' },
        { name: 'Language Training', path: '/services#language-training' },
        { name: 'Book Publication', path: '/services#book-publication' },
        { name: 'Other Services', path: '/services#other-services' },
      ],
    },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy', path: '/privacy' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Languages className="h-8 w-8 text-terracotta-600" />
            <span className="text-2xl font-serif font-bold text-gray-800">
             Ramaatranslationz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
                    setServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 100);
                  }}
                  onFocus={() => setServicesOpen(true)}
                  onBlur={() => setServicesOpen(false)}
                >
                  <button
                    className={`text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium font-serif flex items-center ${isActive(item.path) ? 'text-terracotta-600 border-b-2 border-terracotta-600' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onClick={e => {
                      e.preventDefault();
                      setServicesOpen((open) => !open);
                    }}
                  >
                    {item.name}
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 transition-opacity ${servicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onMouseEnter={() => {
                      if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
                      setServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      servicesTimeout.current = setTimeout(() => setServicesOpen(false), 100);
                    }}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-terracotta-50 hover:text-terracotta-600 font-sans"
                        onClick={() => setServicesOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium font-serif ${isActive(item.path) ? 'text-terracotta-600 border-b-2 border-terracotta-600' : ''}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-terracotta-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 bg-white rounded-b-lg shadow-lg">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="mb-2">
                  <span className="block px-4 py-2 text-gray-700 font-serif font-semibold">{item.name}</span>
                  {item.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.path} className="block px-8 py-2 text-gray-700 hover:bg-terracotta-50 hover:text-terracotta-600 font-sans" onClick={() => setIsMenuOpen(false)}>{sub.name}</Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 px-4 text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-serif ${isActive(item.path) ? 'text-terracotta-600 font-medium' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;