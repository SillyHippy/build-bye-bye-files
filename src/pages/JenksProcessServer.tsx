
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceSchema from '@/components/ui/service-schema';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import WebsiteSchema from '@/components/ui/website-schema';

export default function JenksProcessServer() {
  const jenksQuestions = [
    "What makes Jenks process serving different from other areas?",
    "How quickly can you serve documents in Jenks school district?",
    "Do you serve papers at Jenks Riverwalk Crossing?",
    "Can you handle process serving for Jenks business disputes?",
    "What's the cost for emergency service in Jenks Oklahoma?"
  ];

  const jenksAnswers = [
    "Jenks process serving benefits from our deep knowledge of the Riverwalk district and local business community, ensuring efficient service to both residential and commercial locations.",
    "We provide same-day process serving throughout the Jenks school district area, typically completing service within 2-4 hours during business hours.",
    "Yes, we regularly serve legal documents at Jenks Riverwalk Crossing shopping and entertainment district with professional discretion.",
    "Our Jenks process servers handle all types of business litigation documents including contract disputes, partnership dissolutions, and commercial evictions with expertise.",
    "Emergency process serving in Jenks starts at $150 for same-day service, with 2-hour rush service available for critical legal deadlines."
  ];

  return (
    <>
      <Helmet>
        <title>Jenks Process Server | Professional Legal Document Service Oklahoma</title>
        <meta name="description" content="Professional process server in Jenks OK. Same-day service at Riverwalk Crossing and throughout Jenks. Licensed, insured, reliable. Call (539) 367-6832." />
        <meta name="keywords" content="Jenks process server, legal document delivery Jenks, Riverwalk process serving, Jenks Oklahoma legal service" />
        <link rel="canonical" href="https://justlegalsolutions.org/jenks-process-server" />
      </Helmet>

      <ServiceSchema 
        serviceName="Jenks Process Server Services"
        serviceDescription="Professional legal document delivery throughout Jenks, Oklahoma including Riverwalk Crossing district"
        serviceArea="Jenks, Oklahoma and surrounding Tulsa County areas"
        priceRange="$60-$150"
      />

      <VoiceSearchOptimization 
        primaryQuestions={jenksQuestions}
        conversationalAnswers={jenksAnswers}
        localIntent={true}
      />

      <WebsiteSchema 
        url="https://justlegalsolutions.org/jenks-process-server"
        name="Jenks Process Server - Just Legal Solutions"
        description="Professional process serving and legal document delivery throughout Jenks, Oklahoma"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jenks Process Server | Professional Legal Document Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Expert process serving throughout Jenks, Oklahoma including Riverwalk Crossing district. 
              Same-day service available with professional, discreet legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition">
                📞 Call (539) 367-6832
              </a>
              <a href="/pricing" className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition">
                View Pricing
              </a>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Jenks Process Serving Coverage Areas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Riverwalk Crossing</h3>
                <p className="text-gray-700">Shopping, dining, and entertainment district process serving with professional discretion.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Jenks Residential</h3>
                <p className="text-gray-700">Complete residential area coverage including all Jenks neighborhoods and subdivisions.</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Business District</h3>
                <p className="text-gray-700">Professional service to Jenks businesses, offices, and commercial properties.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Offerings */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Jenks Process Serving Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">Standard Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Divorce and family court documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Civil litigation papers and summons</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Small claims court documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Eviction notices and landlord documents</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block font-semibold">
                    See Standard Pricing
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-red-800">Rush & Emergency</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold">⚡</span>
                    <span>Same-day service (within 8 hours)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold">⚡</span>
                    <span>2-hour emergency service available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold">⚡</span>
                    <span>Weekend and holiday service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold">⚡</span>
                    <span>Court deadline compliance assistance</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/pricing" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg inline-block font-semibold">
                    Rush Service Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jenks-Specific FAQ */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Jenks Process Serving FAQ
            </h2>
            <div className="space-y-8">
              {jenksQuestions.map((question, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">{question}</h3>
                  <p className="text-gray-700 leading-relaxed">{jenksAnswers[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Professional Jenks Process Serving?</h2>
            <p className="text-xl mb-8">
              Serving Jenks, Riverwalk Crossing, and surrounding Tulsa County areas with professional legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition">
                📞 Call Now (539) 367-6832
              </a>
              <a href="mailto:info@justlegalsolutions.org" className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition">
                📧 Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
