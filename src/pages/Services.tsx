import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Users, BookOpen, FileText, Palette, MessageCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const location = useLocation();
  const translationRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const otherRef = useRef<HTMLDivElement>(null);
  const pineArtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (hash === 'translation' && translationRef.current) translationRef.current.scrollIntoView({ behavior: 'smooth' });
      if (hash === 'language-training' && languageRef.current) languageRef.current.scrollIntoView({ behavior: 'smooth' });
      if (hash === 'book-publication' && bookRef.current) bookRef.current.scrollIntoView({ behavior: 'smooth' });
      if (hash === 'other-services' && otherRef.current) otherRef.current.scrollIntoView({ behavior: 'smooth' });
      if (hash === 'pine-art' && pineArtRef.current) pineArtRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  const translationServices = [
    'Market Research Projects',
    'Book Translation (fiction, biographies, devotional, management studies, astrology)',
    'Simultaneous Translation (expert-level for live meetings)',
    'Consecutive Translation',
    'Transcription & Oral Transcription',
    'Report Writing & Content Analysis',
  ];

  const languages = [
    { name: 'Spoken Hindi', description: 'From basic conversation to advanced business communication' },
    { name: 'Spoken English', description: 'Professional English for career advancement' },
    { name: 'Spoken Tamil', description: 'Connect with Tamil culture and heritage' },
    { name: 'Spoken Telugu', description: 'Master Telugu for personal and professional growth' },
  ];

  const bookServices = [
    'Hindi ⇄ Tamil',
    'Hindi ⇄ English',
    'English ⇄ Telugu',
    'Telugu ⇄ English',
    'English ⇄ Tamil',
  ];

  const otherServices = [
    'Translation Coaching',
    'Puranic Content Consulting (Free of Cost)',
    'Proofreading & Copy Editing',
    'Book Reviews',
    'Speech & Case Study Writing',
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive language solutions delivered with deep cultural respect and mathematical precision
          </p>
        </div>

        {/* Translation Services */}
        <section id="translation" ref={translationRef} className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-terracotta-600 to-orange-600 text-white p-8">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-serif font-bold">Translation Services</h2>
              </div>
              <p className="text-lg opacity-90">
                We deliver translation that captures both meaning and soul
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {translationServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-terracotta-100 p-2 rounded-full mr-4 mt-1">
                      <div className="w-2 h-2 bg-terracotta-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-terracotta-50 rounded-lg">
                <p className="text-gray-700 italic text-center">
                  "Translation is done with deep respect for context & culture."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Language Training */}
        <section id="language-training" ref={languageRef} className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-serif font-bold">Language Training</h2>
              </div>
              <p className="text-lg opacity-90">
                Whether you're preparing for travel, a new business venture, or personal growth — 
                our language classes adapt to your unique needs
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {languages.map((language, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{language.name}</h3>
                    <p className="text-gray-600">{language.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">📝 Personalized Modules</h4>
                  <p className="text-gray-700">
                    E.g., a rice merchant wanting to connect with a Punjabi counterpart, 
                    or a young professional needing confidence in English.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">📲 WhatsApp-based Classes</h4>
                  <p className="text-gray-700">
                    Flexible learning with recorded classes for general conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Publication */}
        <section id="book-publication" ref={bookRef} className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-serif font-bold">Book Publication Support</h2>
              </div>
              <p className="text-lg opacity-90">
                We specialize in translating and preparing books for publication
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookServices.map((service, index) => (
                  <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <p className="text-gray-700 italic text-center">
                  Each manuscript is handled with meticulous cultural care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section id="other-services" ref={otherRef} className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-serif font-bold">Other Services</h2>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      {service.startsWith('Puranic Content Consulting') ? (
                        <>
                          Puranic Content Consulting{' '}
                          <span className="inline-block bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded text-xs align-middle ml-1">
                            Free of Cost
                          </span>
                        </>
                      ) : (
                        service
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pine Art & Storytelling */}
        <section id="pine-art" ref={pineArtRef} className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8">
              <div className="flex items-center mb-4">
                <Palette className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-serif font-bold">Pine Art & Storytelling</h2>
              </div>
              <p className="text-lg opacity-90">
                Freestyle sketches and storytelling drawn from the Puranas and world literature
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Freestyle Sketching</h3>
                  <p className="text-gray-700">
                    Artistic expression through traditional and contemporary sketching techniques, 
                    bringing stories to life through visual art.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Cultural Storytelling</h3>
                  <p className="text-gray-700">
                    Stories from the Puranas and world literature, researched and retold 
                    to inspire new audiences with timeless wisdom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-terracotta-600 to-orange-600 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Tell us your needs and let's create something beautiful together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-terracotta-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
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
        </section>
      </div>
    </div>
  );
};

export default Services;

