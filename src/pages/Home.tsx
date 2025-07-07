import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Globe, Star, MessageCircle } from 'lucide-react';
import heroImg from '../assets/hero.jpg';
import translationIcon from '../assets/translation.jpg';
import languageIcon from '../assets/language.jpg';
import bookIcon from '../assets/book.jpg';
import artIcon from '../assets/art.jpg';
import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: 'Translation',
      description: 'From market research to complex simultaneous interpretations, we handle projects with exceptional accuracy and cultural insight.',
    },
    {
      icon: Users,
      title: 'Language Training',
      description: 'Spoken Hindi, English, Tamil, or Telugu — tailored classes to meet your personal or professional goals.',
    },
    {
      icon: BookOpen,
      title: 'Book Publication',
      description: 'Trusted partner for translating books across Hindi, Tamil, Telugu, and English, preserving the true spirit of your work.',
    },
    {
      icon: Star,
      title: 'Storytelling & Art',
      description: 'Freestyle sketches and timeless tales from the Puranas & world literature, researched and retold for today.',
    },
  ];

  const portfolio = [
    'The Great Rules of Grace (Tamil to English)',
    'Sri Durga Saptapati (Hindi to Tamil)',
    'Web Series: Aanda Kai — historical epic on V. Prabhakaran',
    'Books for Manimekalai Prasuram, Chennai',
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terracotta-50 to-cream-100 py-20 lg:py-32">
        <div className="absolute inset-0 bg-pattern-mandala opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-6">
              Bringing Cultures Together Through{' '}
              <span className="text-terracotta-600">Translation</span> &{' '}
              <span className="text-terracotta-600">Language Mastery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Expert translation, personalized language training, and culturally rooted storytelling that bridges worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/services"
                className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-50 text-terracotta-600 px-8 py-4 rounded-lg font-semibold border-2 border-terracotta-600 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={heroImg} alt="Cultural translation illustration" className="w-full max-w-md rounded-xl shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              About Ramaatranslationz
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Ramaatranslationz, we believe translation is not merely about words — it's about connecting people, ideas, and cultures. Founded on a journey that spans market research, book translations, and community upliftment, we bring precision, compassion, and deep cultural respect into every service.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 font-semibold transition-colors duration-200"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Our Services at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive language solutions tailored to your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img src={translationIcon} alt="Translation icon" className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Translation</h3>
              <p className="text-gray-600">From market research to complex simultaneous interpretations, we handle projects with exceptional accuracy and cultural insight.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img src={languageIcon} alt="Language training icon" className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Language Training</h3>
              <p className="text-gray-600">Spoken Hindi, English, Tamil, or Telugu — tailored classes to meet your personal or professional goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img src={bookIcon} alt="Book publication icon" className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Book Publication</h3>
              <p className="text-gray-600">Trusted partner for translating books across Hindi, Tamil, Telugu, and English, preserving the true spirit of your work.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img src={artIcon} alt="Storytelling and art icon" className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Storytelling & Art</h3>
              <p className="text-gray-600">Freestyle sketches and timeless tales from the Puranas & world literature, researched and retold for today.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Featured Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Showcasing our commitment to excellence and cultural preservation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-terracotta-50 to-cream-50 p-6 rounded-lg border-l-4 border-terracotta-600 flex items-center gap-4">
              <img src={portfolio1} alt="The Great Rules of Grace book cover" className="h-20 w-16 object-cover rounded shadow" />
              <p className="text-gray-800 font-medium">The Great Rules of Grace (Tamil to English)</p>
            </div>
            <div className="bg-gradient-to-br from-terracotta-50 to-cream-50 p-6 rounded-lg border-l-4 border-terracotta-600 flex items-center gap-4">
              <img src={portfolio2} alt="Sri Durga Saptapati book cover" className="h-20 w-16 object-cover rounded shadow" />
              <p className="text-gray-800 font-medium">Sri Durga Saptapati (Hindi to Tamil)</p>
            </div>
            <div className="bg-gradient-to-br from-terracotta-50 to-cream-50 p-6 rounded-lg border-l-4 border-terracotta-600 flex items-center gap-4">
              <img src={portfolio3} alt="Aanda Kai web series poster" className="h-20 w-16 object-cover rounded shadow" />
              <p className="text-gray-800 font-medium">Web Series: Aanda Kai — historical epic on V. Prabhakaran</p>
            </div>
            <div className="bg-gradient-to-br from-terracotta-50 to-cream-50 p-6 rounded-lg border-l-4 border-terracotta-600 flex items-center gap-4">
              <img src={portfolio4} alt="Manimekalai Prasuram book cover" className="h-20 w-16 object-cover rounded shadow" />
              <p className="text-gray-800 font-medium">Books for Manimekalai Prasuram, Chennai</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="py-16 bg-terracotta-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Looking for a trusted translation partner or a personal language coach?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's have a conversation about your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-terracotta-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Contact Us
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                WhatsApp Chat
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;