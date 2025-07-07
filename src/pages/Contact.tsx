import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  // Replace this with your Google Apps Script web app URL
  // const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzarV6NqAdYTkVEYCmeBKW1HsSKKALQdh42q6bGgdizXvKa4Rt3Tvz16vFoOcgyVj_1Fw/exec';
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyrwqE5pBCneMrHAG6O6EKiBJZ1EBZan1hScUfQG0USXT4vU-4ZHYzWCum8mX612YdstQ/exec'; 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Only allow digits
      const digitsOnly = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: digitsOnly,
      });
      setErrors({ ...errors, [name]: '' });
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors: typeof errors = { name: '', email: '', phone: '', service: '', message: '' };
    if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((v) => !v);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitStatus({ isSubmitting: true, isSuccess: false, isError: false, message: '' });
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('service', formData.service);
      form.append('message', formData.message);
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
      });
      const result = await response.json();
      if (result.result === 'success') {
        setSubmitStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
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
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-orange-600" />
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
              
              {/* Status Messages */}
              {submitStatus.isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-600 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-800">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              {submitStatus.isError && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-600 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    <p className="text-red-800">{submitStatus.message}</p>
                  </div>
                </div>
              )}
              
              {/* Form Container */}
              <div className="space-y-6">
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
                    disabled={submitStatus.isSubmitting}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors duration-200 disabled:opacity-50`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
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
                    disabled={submitStatus.isSubmitting}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors duration-200 disabled:opacity-50`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
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
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    disabled={submitStatus.isSubmitting}
                    className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors duration-200 disabled:opacity-50`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
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
                    required
                    disabled={submitStatus.isSubmitting}
                    className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors duration-200 disabled:opacity-50`}
                  >
                    <option value="">Select a service</option>
                    <option value="translation">Translation</option>
                    <option value="language-training">Language Training</option>
                    <option value="book-publication">Book Publication</option>
                    <option value="storytelling">Storytelling & Art</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
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
                    disabled={submitStatus.isSubmitting}
                    rows={6}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors duration-200 disabled:opacity-50`}
                    placeholder="Tell us about your project or requirements..."
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>

                <form onSubmit={handleSubmit}>
                  <button
                    type="submit"
                    disabled={submitStatus.isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus.isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 md:p-12 text-center">
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