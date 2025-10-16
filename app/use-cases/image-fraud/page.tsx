"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/ui/Footer';
import Navigation from '@/components/ui/Navigation';

const ImageFraudPage: React.FC = () => {
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
              Protect from Image-Based Fraud
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Community banks and credit unions face a growing threat from sophisticated fraudsters using fake IDs and altered checks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 mb-6">
                Check fraud and identity document forgery are on the rise, with fraudsters using advanced tools to create convincing fakes. Manual review processes are time-consuming, inconsistent, and often miss sophisticated alterations. Financial institutions need automated, accurate solutions to verify identity documents and check images in real-time.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-700 mb-6">
                FinOptima&apos;s DeepSecure™ platform offers a powerful solution, leveraging AI to automatically verify identity documents and check images in real-time during online and mobile transactions. Our technology seamlessly integrates into your existing systems, providing a secure and efficient way to verify identities and checks digitally.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Key Benefit</h3>
                <p className="text-blue-800">
                  DeepSecure™ reduces fraud losses by up to 15% and streamlines operations by cutting manual review efforts by 40%.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Advanced image analysis for check washing detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Identity document verification with hologram and security feature analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Real-time fraud detection during transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Automated alerts for suspicious documents and checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Seamless integration with existing banking systems</span>
                </li>
              </ul>
            </div>

            {/* Right Column - UI Mockup */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h5 className="text-lg font-semibold text-gray-900">Document Scanner</h5>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-yellow-600 font-medium">SCANNING</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg p-6 border-2 border-dashed border-gray-300 text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Driver&apos;s License</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                      <p className="text-xs text-gray-500">Analyzing security features...</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-medium text-green-800">Hologram</span>
                        </div>
                        <p className="text-xs text-green-700">Valid</p>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span className="text-sm font-medium text-yellow-800">Text Quality</span>
                        </div>
                        <p className="text-xs text-yellow-700">Reviewing</p>
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

export default ImageFraudPage;
