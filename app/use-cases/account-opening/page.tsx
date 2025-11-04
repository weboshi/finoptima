"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AccountOpeningPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
              Streamlined Account Opening & Onboarding
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Synthetic identities and fraudulent accounts are on the rise, creating significant risks and costs for financial institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 mb-6">
                Financial institutions face increasing pressure to streamline account opening while maintaining robust fraud prevention measures. Synthetic identities and deepfake technologies have made it easier for fraudsters to create convincing fake accounts, leading to significant financial losses and compliance risks.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-700 mb-6">
                Our multi-layered identity verification analyzes voice patterns, facial features, and document data to ensure that new accounts are legitimate and compliant. This automated approach reduces onboarding time and prevents fraudulent accounts.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Key Benefit</h3>
                <p className="text-blue-800">
                  Reduce fraudulent account openings by up to 80% and accelerate customer onboarding.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Voice pattern analysis for biometric verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Facial recognition technology to prevent deepfakes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Document verification with advanced image analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Real-time compliance checks and alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Seamless integration with existing onboarding workflows</span>
                </li>
              </ul>
            </div>

            {/* Right Column - UI Mockup */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h5 className="text-lg font-semibold text-gray-900">Account Verification</h5>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-blue-600 font-medium">PROCESSING</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Voice Pattern Analysis</div>
                          <div className="text-xs text-gray-600">Biometric verification complete</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Facial Recognition</div>
                          <div className="text-xs text-gray-600">Processing live image</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Document Verification</div>
                          <div className="text-xs text-gray-600">Awaiting document scan</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
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
    </div>
  );
};

export default AccountOpeningPage;
