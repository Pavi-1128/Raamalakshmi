import React from 'react';
import { Shield, Lock, Eye, Mail } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Privacy Policy & Terms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Privacy Policy */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-terracotta-600 mr-3" />
              <h2 className="text-3xl font-serif font-bold text-gray-800">Privacy Policy</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We collect information that you provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Fill out our contact form</li>
                    <li>Contact us via email or WhatsApp</li>
                    <li>Request our services</li>
                    <li>Engage with our website</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Information shared through our contact forms or WhatsApp is used solely to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Understand your translation and language training requirements</li>
                    <li>Communicate with you about our services</li>
                    <li>Provide personalized quotes and solutions</li>
                    <li>Improve our services based on your feedback</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Protection</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    We do not share your personal data with third parties unless legally required. 
                    Your information is stored securely and accessed only by authorized personnel 
                    for the purpose of providing our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-terracotta-600 mr-3" />
              <h2 className="text-3xl font-serif font-bold text-gray-800">Terms of Service</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Agreement</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    By using our website and contacting us for services, you agree to these terms. 
                    Full terms and conditions will be provided upon project initiation and will 
                    include specific details about:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                    <li>Project scope and deliverables</li>
                    <li>Payment terms and schedules</li>
                    <li>Revision and feedback processes</li>
                    <li>Confidentiality agreements</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Intellectual Property</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    All translation work and original content created by Ramaatranslationz remains 
                    our intellectual property until full payment is received. Upon completion and 
                    payment, rights to the translated work transfer to the client.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Confidentiality</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    We maintain strict confidentiality of all client materials and information. 
                    All projects are treated with the highest level of professional discretion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Questions */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-terracotta-600 to-orange-600 text-white rounded-lg p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 mr-3" />
              <h2 className="text-3xl font-serif font-bold">Questions About Our Policy?</h2>
            </div>
            <p className="text-lg mb-6 opacity-90">
              If you have any questions about our privacy policy or terms of service, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@ramaatranslationz.com"
                className="bg-white hover:bg-gray-100 text-terracotta-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <div className="text-center text-gray-500">
          <p>Last updated: January 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;