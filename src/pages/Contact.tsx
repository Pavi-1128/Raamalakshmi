import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred form handling service
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a translation project, need personalized language training, or want to publish your book with cultural fidelity? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
              Get in Touch
            </h2>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-terracotta-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-terracotta-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@ramaatranslationz.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">Quick response available</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">Available for consultations</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Prefer instant messaging?
              </h3>
              <p className="text-gray-600 mb-4">
                Chat with us directly on WhatsApp for quick responses and personalized service.
              </p>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta-600 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta-600 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="translation">Translation</option>
                    <option value="language-training">Language Training</option>
                    <option value="book-publication">Book Publication</option>
                    <option value="storytelling">Storytelling & Art</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-br from-terracotta-50 to-cream-100 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">
            Why Choose Ramaatranslationz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cultural Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of cultural nuances and contexts in every translation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Service</h3>
              <p className="text-gray-600">
                Tailored solutions that meet your specific needs and requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Excellence</h3>
              <p className="text-gray-600">
                Years of experience with a commitment to precision and quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;