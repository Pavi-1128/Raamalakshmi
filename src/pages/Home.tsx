
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Users,
  Globe,
  Star,
  MessageCircle,
} from 'lucide-react';

import heroImg from '../assets/hero.jpg';
import translationIcon from '../assets/translation.jpg';
import languageIcon from '../assets/language.jpg';
import bookIcon from '../assets/book.jpg';
import artIcon from '../assets/art.jpg';
import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';

// Clients
import unileverLogo from '../assets/Unilever.png';
import pgLogo from '../assets/p&g.png';
import tanishqLogo from '../assets/Tanishq.webp';
import hersheyLogo from '../assets/Hershey.png';
import godrejLogo from '../assets/Godrej.webp';
import kantarLogo from '../assets/kantar.png';
import acNielsenLogo from '../assets/Ac.png';
import ipsosLogo from '../assets/Ipsos.png';
import modulusLogo from '../assets/Modulus.webp';
import quantumLogo from '../assets/Quantum.png';

//service
import { motion } from 'framer-motion';  // Import motion from Framer Motion



const Home: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Translation',
      image: translationIcon,
      description:
        'From market research to complex simultaneous interpretations, we handle projects with exceptional accuracy and cultural insight.',
    },
    {
      icon: Users,
      title: 'Language Training',
      image: languageIcon,
      description:
        'Spoken Hindi, English, Tamil, or Telugu — tailored classes to meet your personal or professional goals.',
    },
    {
      icon: BookOpen,
      title: 'Book Publication',
      image: bookIcon,
      description:
        'Trusted partner for translating books across Hindi, Tamil, Telugu, and English, preserving the true spirit of your work.',
    },
    {
      icon: Star,
      title: 'Storytelling & Art',
      image: artIcon,
      description:
        'Freestyle sketches and timeless tales from the Puranas & world literature, researched and retold for today.',
    },
  ];

  const clients = [
    { name: 'Hindustan Unilever', logo: unileverLogo },
    { name: 'Procter & Gamble', logo: pgLogo },
    { name: 'Tanishq', logo: tanishqLogo },
    { name: "Hershey's", logo: hersheyLogo },
    { name: 'Godrej', logo: godrejLogo },
    { name: 'Kantar IMRB', logo: kantarLogo },
    { name: 'AC Nielsen', logo: acNielsenLogo },
    { name: 'IPSOS', logo: ipsosLogo },
    { name: 'Modulus', logo: modulusLogo },
    { name: 'Quantum Solutions', logo: quantumLogo },
  ];

  const portfolio = [
    { title: 'The Great Rules of Grace (Tamil to English)', image: portfolio1 },
    { title: 'Sri Durga Saptapati (Hindi to Tamil)', image: portfolio2 },
    { title: 'Web Series: Aanda Kai — historical epic on V. Prabhakaran', image: portfolio3 },
    { title: 'Books for Manimekalai Prasuram, Chennai', image: portfolio4 },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terracotta-50 to-cream-100 py-20 lg:py-32">
        <div className="absolute inset-0 bg-pattern-mandala opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative">
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-6">
              Bringing Cultures Together Through{' '}
              <span className="text-terracotta-600">Translation</span> &{' '}
              <span className="text-terracotta-600">Language Mastery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Expert translation, personalized language training, and culturally rooted storytelling that bridges worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/services" className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="bg-white hover:bg-gray-50 text-terracotta-600 px-8 py-4 rounded-lg font-semibold border-2 border-terracotta-600">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={heroImg} alt="Hero" className="max-w-md rounded-xl shadow-lg object-cover " />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
            About Ramaatranslationz
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            At Ramaatranslationz, we believe translation is not merely about words — it's about connecting people, ideas, and cultures. Founded on a journey that spans market research, book translations, and community upliftment, we bring precision, compassion, and deep cultural respect into every service.
          </p>
          <Link to="/about" className="inline-flex items-center text-terracotta-600 font-semibold hover:text-terracotta-700 transition-colors">
            Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
            Nothing Artificial About It
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Human intelligence is an endowment. Trust in our native expertise. Nothing artificial about it.
          </p>
        </div>
      </section>

      {/* Services */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Our Services at a Glance
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Comprehensive language solutions tailored to your unique needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center transition">
                <img src={service.image} alt={service.title} className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
      Our Services at a Glance
    </h2>
    <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
      Comprehensive language solutions tailored to your unique needs
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          className="bg-white p-6 rounded-lg shadow text-center transition"
          whileHover={{
            scale: 1.05,      // Slightly enlarge on hover
            y: -5,            // Move upwards
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'  // Add shadow for depth
          }}
          whileTap={{
            scale: 0.95       // Shrink slightly on click
          }}
          transition={{
            type: 'spring',    // Use spring animation for smooth effect
            stiffness: 300,    // Stiffness to make it more "bouncy"
            damping: 20        // Damping for smoothness
          }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-12 w-12 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-12">
      <Link
        to="/services"
        className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center"
      >
        View All Services <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  </div>
</section>

      {/* Portfolio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Featured Portfolio
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Showcasing our commitment to excellence and cultural preservation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolio.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-terracotta-50 to-cream-50 p-6 rounded-lg border-l-4 border-terracotta-600 flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-20 w-16 object-cover rounded shadow" />
                <p className="text-gray-800 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center">
              Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients - Horizontal Scrolling Carousel */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Our Clients
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Trusted by leading companies and market research agencies across Tamil Nadu and Andhra Pradesh
          </p>
          
          <div className="relative w-full overflow-hidden py-4">
            {/* Gradient fade effects */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
            
            {/* Client logos container */}
            <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
              {[...clients, ...clients].map((client, idx) => (
                <div 
                  key={`${client.name}-${idx}`} 
                  className="inline-flex flex-col items-center justify-center flex-shrink-0"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-16 w-auto object-contain max-w-[120px]"
                  />
                  <p className="mt-2 text-sm text-gray-700 whitespace-normal text-center">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="py-16 bg-terracotta-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Looking for a trusted translation partner or a personal language coach?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's have a conversation about your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-terracotta-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Contact Us <MessageCircle className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center"
            >
              WhatsApp Chat <MessageCircle className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
