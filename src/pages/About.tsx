import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Star, ArrowRight } from 'lucide-react';
import Raamapic from '../assets/Raamapic.jpg';
import cultureImg from '../assets/culture.jpg';
import sketchImg from '../assets/sketch.jpg';

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <img src={Raamapic} alt="Founder portrait" className="w-32 h-32 rounded-full object-cover shadow-lg mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            About Ramaatranslationz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey from homemaker to market researcher, and finally a passionate translator — 
            my story began out of necessity and bloomed into a lifelong calling.
          </p>
        </div>

        {/* Founder's Story */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-terracotta-600 mr-3" />
                <h2 className="text-3xl font-serif font-bold text-gray-800">Founder's Story</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I started by selling Time-Life books, learning the art of studying people and understanding needs. 
                  This led me into Market Research, where I rose to moderate focus group discussions, 
                  decoding the subtleties of human behavior.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  It was here I discovered the power of translation — not just of words, but of contexts, 
                  emotions, and entire cultures. What began as a profession became a passion, 
                  and what started as a passion became a calling to serve humanity.
                </p>
                <blockquote className="border-l-4 border-terracotta-600 pl-6 italic text-gray-600 text-lg">
                  "Translation is not just about converting words from one language to another. 
                  It's about building bridges between hearts, minds, and cultures."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Vision */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-terracotta-50 to-cream-100 rounded-lg p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Star className="h-8 w-8 text-terracotta-600 mr-3" />
              <h2 className="text-3xl font-serif font-bold text-gray-800">Philosophy & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  Translation is the art of building bridges. Being bilingual or multilingual isn't just a skill, 
                  it's a doorway to empathy, understanding, and unity. As a translator and now a coach, 
                  I see every project as a humanitarian service — one that requires compassion and mathematical precision.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Cultural respect and preservation</li>
                  <li>• Precision with compassion</li>
                  <li>• Empowerment through language</li>
                  <li>• Building bridges between communities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Academic & Cultural Pursuits */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-terracotta-600 mr-3" />
                <h2 className="text-3xl font-serif font-bold text-gray-800">Academic & Cultural Pursuits</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-terracotta-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Educational Foundation</h3>
                  <p className="text-gray-700">
                    I graduated from Stella Maris College, Madras with a BA in Economics, earning the College Medal. 
                    Over time, I added postgraduate degrees in Philosophy and Sociology.
                  </p>
                </div>
                <div className="border-l-4 border-terracotta-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Specialized Studies</h3>
                  <p className="text-gray-700">
                    My studies encompass mental health, gerontology, Saiva Siddhanta, Vedanta, Kautilya's Arthashastra, 
                    the Puranas, Upanishads, and Fine Art sketching. I'm also a Praveen Uttarardh in Hindi — 
                    a lifelong student of culture and language.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img src={cultureImg} alt="Cultural event or award" className="w-40 h-40 object-cover rounded shadow" />
              <img src={sketchImg} alt="Sample sketch artwork" className="w-40 h-40 object-cover rounded shadow" />
            </div>
          </div>
        </section>

        {/* Message to Young Women */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-terracotta-600 to-orange-600 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-6">A Message to Young Women</h2>
            <p className="text-lg mb-6 opacity-90">
              As a traditional feminist, inspired by independent thinkers like Seetha Devi, Amba, and Devayani, 
              I urge young women to explore the world of translation and interpretation.
            </p>
            <p className="text-lg opacity-90">
              It's a profession that brings profound fulfillment — far beyond commerce. 
              It's about empowerment, cultural preservation, and building a more connected world.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">
              Interested in collaborating or learning from our programs?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're looking for translation services, language training, or cultural consultation, 
              we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;