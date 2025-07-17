
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceSchema from '@/components/ui/service-schema';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import WebsiteSchema from '@/components/ui/website-schema';

export default function SandSpringsProcessServer() {
  const sandSpringsQuestions = [
    "How do you serve papers at Sand Springs industrial facilities?",
    "What's your experience with Sand Springs manufacturing companies?",
    "Can you serve documents along the Arkansas River area in Sand Springs?",
    "Do you handle workers compensation cases in Sand Springs?",
    "What's the turnaround time for Sand Springs residential service?"
  ];

  const sandSpringsAnswers = [
    "We have extensive experience serving legal documents at Sand Springs industrial facilities, coordinating with security and management for efficient, compliant service delivery.",
    "Our Sand Springs process servers regularly handle manufacturing and industrial litigation including workplace injury cases, contract disputes, and regulatory compliance documents.",
    "Yes, we provide complete coverage of the Arkansas River corridor in Sand Springs including recreational areas, marinas, and riverside businesses.",
    "We specialize in workers compensation document service throughout Sand Springs industrial district, handling cases with sensitivity and professional discretion.",
    "Residential process serving in Sand Springs typically takes 1-3 business days for standard service, with same-day options available for urgent situations."
  ];

  return (
    <>
      <Helmet>
        <title>Sand Springs Process Server | Industrial & Residential Legal Service OK</title>
        <meta name="description" content="Sand Springs process server specializing in industrial and manufacturing legal documents. Arkansas River area coverage. Professional service. Call (539) 367-6832." />
        <meta name="keywords" content="Sand Springs process server, industrial legal service, manufacturing litigation, Arkansas River legal documents" />
        <link rel="canonical" href="https://justlegalsolutions.org/sand-springs-process-server" />
      </Helmet>

      <ServiceSchema 
        serviceName="Sand Springs Process Server Services"
        serviceDescription="Professional legal document delivery throughout Sand Springs industrial and residential areas"
        serviceArea="Sand Springs, Oklahoma and Arkansas River corridor"
        priceRange="$60-$150"
      />

      <VoiceSearchOptimization 
        primaryQuestions={sandSpringsQuestions}
        conversationalAnswers={sandSpringsAnswers}
        localIntent={true}
      />

      <WebsiteSchema 
        url="https://justlegalsolutions.org/sand-springs-process-server"
        name="Sand Springs Process Server - Just Legal Solutions"
        description="Professional process serving throughout Sand Springs Oklahoma industrial and residential areas"
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sand Springs Process Server | Industrial & Residential Legal Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Specialized process serving throughout Sand Springs industrial district and residential areas. 
              Expert handling of manufacturing litigation and Arkansas River corridor service.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition">
                📞 Call (539) 367-6832
              </a>
              <a href="/pricing" className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition">
                Industrial Pricing
              </a>
            </div>
          </div>
        </div>

        {/* Specialized Services */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Sand Springs Specialized Process Serving
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Industrial Facilities</h3>
                <p className="text-gray-700">Expert service at manufacturing plants, warehouses, and industrial complexes with security coordination.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Arkansas River Area</h3>
                <p className="text-gray-700">Complete coverage of riverside businesses, marinas, and recreational facilities along the Arkansas River.</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Residential Districts</h3>
                <p className="text-gray-700">Professional residential service throughout all Sand Springs neighborhoods and subdivisions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Types */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Sand Springs Document Types We Handle
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">Industrial & Business</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">⚙️</span>
                    <span>Workers compensation claims and litigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">⚙️</span>
                    <span>Manufacturing contract disputes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">⚙️</span>
                    <span>Environmental compliance documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">⚙️</span>
                    <span>OSHA and safety violation notices</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block font-semibold">
                    Business Service Pricing
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-green-800">Personal & Family</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">🏠</span>
                    <span>Divorce and custody documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">🏠</span>
                    <span>Personal injury litigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">🏠</span>
                    <span>Property disputes and evictions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">🏠</span>
                    <span>Small claims and debt collection</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-block font-semibold">
                    Personal Service Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Sand Springs Process Serving Questions
            </h2>
            <div className="space-y-8">
              {sandSpringsQuestions.map((question, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">{question}</h3>
                  <p className="text-gray-700 leading-relaxed">{sandSpringsAnswers[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Sand Springs Process Serving Experts</h2>
            <p className="text-xl mb-8">
              Industrial expertise meets residential professionalism. Serving Sand Springs with specialized knowledge and reliable results.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition">
                📞 Industrial Service: (539) 367-6832
              </a>
              <a href="mailto:info@justlegalsolutions.org" className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition">
                📧 Email for Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
