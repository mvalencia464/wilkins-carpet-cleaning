import React from 'react';
import { Phone, MapPin, Mail, Clock, CheckCircle, Star } from 'lucide-react';
import { useTinaContact } from '../hooks/useTina';
import { contactContent } from '../utils/content';

const Contact = () => {
  const { data: tinaContact, loading } = useTinaContact();

  // Use TinaCMS data if available, otherwise fallback to static content
  const contact = tinaContact || contactContent;

  if (loading) {
    return (
      <section id="contact" className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3 mb-8"></div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                {contact.title}
              </h2>

              <p className="text-xl text-gray-300">
                {contact.subtitle}
              </p>

              <div className="flex items-center space-x-4 bg-blue-700 p-4 rounded-lg border border-blue-600">
                <CheckCircle className="h-8 w-8 text-white flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">FREE Written Estimates</p>
                  <p className="text-blue-200">No hidden fees, no surprises</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Call or Text Anytime</h3>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-2xl font-bold text-blue-300 hover:text-blue-200"
                  >
                    {contact.phone}
                  </a>
                  <p className="text-gray-300 mt-1">Fast response guaranteed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Email Us</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg text-blue-300 hover:text-blue-200"
                  >
                    {contact.email}
                  </a>
                  <p className="text-gray-300 mt-1">Professional written estimates</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Service Area</h3>
                  <p className="text-lg text-gray-300">
                    {contact.address}<br />
                    {contact.city}
                  </p>
                  <p className="text-gray-400 mt-2">
                    Serving Rocky Mount, Wilson, Tarboro, Nashville, Roanoke Rapids, 
                    Louisburg, Springhope, Whitakers, Greenville & surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Flexible Scheduling</h3>
                  <p className="text-lg text-gray-300">
                    Monday - Saturday<br />
                    Emergency service available
                  </p>
                  <p className="text-gray-400 mt-1">No lengthy wait periods</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            {/* Main CTA */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-2xl text-center shadow-xl">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-bold">{contact.rating}</span>
              </div>

              <h3 className="text-3xl font-bold mb-4">{contact.ctaTitle}</h3>
              <p className="text-blue-200 mb-6 text-lg">
                {contact.ctaSubtitle}
              </p>

              <a
                href={`tel:${contact.phone}`}
                className="block w-full bg-yellow-400 text-blue-900 py-4 px-6 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors shadow-xl mb-4"
              >
                <Phone className="inline h-6 w-6 mr-2" />
                Call Now: {contact.phone}
              </a>
              
              <p className="text-sm text-blue-300">
                Or email us at {contact.email}
              </p>
            </div>

            {/* Guarantees */}
            <div className="bg-blue-800 p-6 rounded-xl border border-blue-700">
              <h4 className="font-bold text-xl mb-4 text-center">Our Promise to You</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span>No bait and switch - written estimates honored</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span>Punctual service - we respect your time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span>Licensed, bonded & insured for your protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span>Quality guarantee on all services</span>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-blue-600 p-6 rounded-xl text-center border border-blue-500">
              <h4 className="font-bold text-xl mb-2">Water Damage Emergency?</h4>
              <p className="mb-4">We respond quickly to minimize damage and restore your property</p>
              <a 
                href="tel:252-937-3276" 
                className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Emergency Service: 252-937-3276
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;