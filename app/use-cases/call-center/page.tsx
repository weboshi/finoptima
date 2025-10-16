"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/ui/Footer';
import Navigation from '@/components/ui/Navigation';

const CallCenterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <Navigation />

      {/* Content Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-blue-600 text-lg mb-4 font-medium">Use Case</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Enhanced Call Center Security
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Voice phishing and social engineering attacks are increasingly sophisticated, making it difficult to verify callers and protect sensitive customer information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 mb-6">
                Call centers are prime targets for sophisticated fraud attacks. Deepfake voice technology and social engineering tactics make it increasingly difficult for customer service representatives to verify caller identities. Traditional knowledge-based authentication methods are vulnerable to data breaches and social engineering attacks.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-700 mb-6">
                Our voice authentication technology analyzes unique vocal characteristics to verify callers in real-time, ensuring that customer service representatives are interacting with legitimate account holders. The system provides instant verification without disrupting the customer experience.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Key Benefit</h3>
                <p className="text-blue-800">
                  Reduce call center fraud incidents by up to 70% and enhance customer satisfaction with seamless authentication.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Real-time voice biometric authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Deepfake voice detection with 95% accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Instant verification alerts for customer service representatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Seamless integration with existing call center systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Continuous monitoring and adaptive authentication</span>
                </li>
              </ul>
            </div>

            {/* Right Column - UI Mockup */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h5 className="text-lg font-semibold text-gray-900">Call Monitor</h5>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">LIVE CALL</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-900">Caller: John Smith</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">VERIFIED</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1">
                          <div className="text-xs text-gray-600 mb-1">Voice Pattern Match</div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full w-[94%]"></div>
                          </div>
                          <div className="text-xs text-gray-600 mt-1">94%</div>
                        </div>
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-3">Audio Analysis</div>
                      <div className="grid grid-cols-4 gap-2 mb-2">
                        <div className="h-8 bg-green-400 rounded animate-pulse"></div>
                        <div className="h-6 bg-green-400 rounded animate-pulse"></div>
                        <div className="h-10 bg-green-400 rounded animate-pulse"></div>
                        <div className="h-7 bg-green-400 rounded animate-pulse"></div>
                      </div>
                      <div className="text-xs text-gray-600">Real-time voice analysis active</div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Security Level</span>
                        <span className="text-sm font-bold text-green-600">HIGH</span>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fin-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            See how DeepSecure™ helps your institution
          </h2>
          <Link
            href="/#contact"
            className="inline-block bg-white text-fin-blue px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request a Demo →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallCenterPage;
