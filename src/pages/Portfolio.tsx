import React from 'react';
import { Book, Film, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';


const Portfolio = () => {
  const bookTranslations = [
    {
      title: 'Manimekalai Publications',
      location: 'Chennai',
      description: 'Comprehensive translation services for literary works',
      category: 'Literature',
    },
    {
      title: "Sadguru Sri Reddiapatti Swamigal's Blessed Presentations",
      description: 'Spiritual and devotional content translation',
      category: 'Spiritual',
    },
    {
      title: 'The Great Rules of Grace',
      description: 'Tamil to English translation preserving cultural nuances',
      category: 'Philosophy',
    },
    {
      title: 'Vedic Astrology by Maharshi Institute',
      description: 'Technical translation of astrological texts',
      category: 'Astrology',
    },
    {
      title: 'Sri Durga Saptapati',
      description: 'Hindi to Tamil translation of devotional literature',
      category: 'Devotional',
    },
    {
      title: 'Jharkand Short Story: The True Parent, The True Gardener',
      description: 'Regional literature translation',
      category: 'Literature',
    },
    {
      title: 'Prema Prasuram',
      location: 'Chennai',
      description: 'Literary translations across devotional and regional works.',
      category: 'Literature',
    },
  ];

  const mediaWork = [
    {
      title: 'Web Series: Aanda Kai (The Hand That Ruled)',
      description: 'A true story of V. Prabhakaran, brought to life on screen',
      details: 'Written & directed by Vinson Rajendran',
      type: 'Historical Epic',
    },
  ];

  const bookReviews = [
    {
      title: 'Do Business Like a Monster - Prakash Sreenivasan',
      description: 'Insightful exploration of bold business thinking',
      type: 'Business Strategy',
    },
  ];

  // const categories = [
  //   { name: 'Literature', count: 3, color: 'bg-blue-500' },
  //   { name: 'Spiritual', count: 2, color: 'bg-purple-500' },
  //   { name: 'Philosophy', count: 1, color: 'bg-green-500' },
  //   { name: 'Astrology', count: 1, color: 'bg-yellow-500' },
  //   { name: 'Devotional', count: 1, color: 'bg-pink-500' },
  // ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Portfolio & Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to excellence in translation, cultural preservation, and storytelling
          </p>
        </div>

        {/* Categories Overview */}
        {/* <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 text-center">
              Our Work Spans Multiple Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className={`${category.color} text-white rounded-lg p-4 mb-2`}>
                    <div className="text-2xl font-bold">{category.count}</div>
                    <div className="text-sm">Projects</div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">{category.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Book Translations */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Book className="h-8 w-8 text-terracotta-600 mr-3" />
            <h2 className="text-3xl font-serif font-bold text-gray-800">Book Translations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookTranslations.map((book, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
                whileHover={{ scale: 1.05, y: -5 }}  // This will give the 'come to front' effect
                whileTap={{ scale: 0.95 }}  // Optional: add a tap effect for when clicked
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${book.category === 'Literature'
                          ? 'bg-blue-100 text-blue-800'
                          : book.category === 'Spiritual'
                            ? 'bg-purple-100 text-purple-800'
                            : book.category === 'Philosophy'
                              ? 'bg-green-100 text-green-800'
                              : book.category === 'Astrology'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-pink-100 text-pink-800'
                        }`}
                    >
                      {book.category}
                    </span>
                    <Book className="h-5 w-5 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{book.title}</h3>
                  {book.location && <p className="text-sm text-gray-500 mb-2">{book.location}</p>}
                  <p className="text-gray-600 text-sm">{book.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Media Work */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Film className="h-8 w-8 text-terracotta-600 mr-3" />
            <h2 className="text-3xl font-serif font-bold text-gray-800">Media Work</h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {mediaWork.map((work, index) => (
              <div key={index} className="bg-gradient-to-r from-terracotta-600 to-orange-600 text-white rounded-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-medium">
                    {work.type}
                  </span>
                  <Film className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{work.title}</h3>
                <p className="text-lg mb-2 opacity-90">{work.description}</p>
                <p className="text-sm opacity-80">{work.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Book Reviews */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Star className="h-8 w-8 text-terracotta-600 mr-3" />
            <h2 className="text-3xl font-serif font-bold text-gray-800">Book Reviews</h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {bookReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-terracotta-100 text-terracotta-800 rounded-full text-xs font-medium">
                    {review.type}
                  </span>
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{review.title}</h3>
                <p className="text-gray-600">{review.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial/Quote */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-terracotta-50 to-cream-100 rounded-lg p-8 md:p-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-6">
              "Each project is a bridge between cultures, a testament to the power of language to unite humanity."
            </blockquote>
            <cite className="text-lg text-gray-600">— Ramaatranslationz Philosophy</cite>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">
              Ready to add your project to our portfolio?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help bring your vision to life with cultural authenticity and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                WhatsApp Chat
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;