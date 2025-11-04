"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LoanApprovalsPage: React.FC = () => {
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
              Secure Loan Approvals
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Loan fraud and identity theft can lead to significant financial losses. Traditional credit scoring methods may not be sufficient to identify high-risk applicants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 mb-6">
                Financial institutions face increasing pressure to approve loans quickly while maintaining robust fraud prevention measures. Traditional credit scoring alone is insufficient to detect sophisticated identity theft and synthetic identities. Manual review processes slow down approvals for legitimate customers and can miss fraudulent applications.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-700 mb-6">
                DeepSecure analyzes applicant data, credit history, and performs voice verification to confirm identity and assess loan risk in real-time. This empowers lenders to make informed decisions and automate approvals for low-risk applications while flagging suspicious patterns for further review.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Key Benefit</h3>
                <p className="text-blue-800">
                  Reduce loan fraud losses by up to 60% and improve loan approval efficiency.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Comprehensive applicant data analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Voice verification for identity confirmation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Real-time risk assessment and scoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Automated approval workflows for low-risk applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Integration with credit bureaus and existing loan systems</span>
                </li>
              </ul>
            </div>

            {/* Right Column - UI Mockup */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h5 className="text-lg font-semibold text-gray-900">Loan Risk Assessment</h5>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-blue-600 font-medium">ANALYZING</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-900">Applicant: Sarah Johnson</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">PROCESSING</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Credit Score</div>
                          <div className="text-lg font-bold text-green-600">742</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Loan Amount</div>
                          <div className="text-lg font-bold text-gray-900">$25,000</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-3">Risk Factors Analysis</div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Identity Verification</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-1">
                              <div className="bg-green-500 h-1 rounded-full w-full"></div>
                            </div>
                            <span className="text-xs font-medium text-green-600">✓</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Credit History</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-1">
                              <div className="bg-green-500 h-1 rounded-full w-4/5"></div>
                            </div>
                            <span className="text-xs font-medium text-green-600">✓</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Voice Authentication</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-1">
                              <div className="bg-blue-500 h-1 rounded-full w-3/4 animate-pulse"></div>
                            </div>
                            <span className="text-xs font-medium text-blue-600">...</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-900">Overall Risk Score</span>
                        <span className="text-sm font-bold text-green-600">LOW RISK</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full w-1/4"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Low</span>
                        <span>Medium</span>
                        <span>High</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                        Pre-Approve
                      </button>
                      <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
                        Manual Review
                      </button>
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

export default LoanApprovalsPage;
