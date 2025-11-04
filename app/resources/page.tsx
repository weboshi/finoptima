"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Fraud Defense Insights Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-[52px] font-normal mb-6 leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-fin-blue">Fraud Defense Insights</span>
            </motion.h2>
            <motion.p
              className="text-lg text-black max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Stay informed with our latest insights on fraud detection, AI innovation, and financial security trends.
            </motion.p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Featured Article */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-fin-blue w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-fin-blue uppercase tracking-wide">Featured Article</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">Introducing DeepSecure™: Next-Generation Fraud Defense Infrastructure</h3>
                  <p className="text-black leading-relaxed font-light mb-4">
                    Our proprietary and patented next-generation fraud defense platform for Community Banks and Credit Unions, specifically designed to counter evolving and sophisticated threats.
                  </p>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7325890050854985729/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-fin-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Articles Grid */}
            <div className="space-y-6">
              {/* Article 1 */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-xs font-semibold text-fin-blue uppercase tracking-wide">Article</span>
                <h4 className="text-lg font-bold text-gray-900 mt-2 mb-2">The Illusion of Coverage: Why &apos;One Tool for Every Problem&apos; Isn&apos;t Working</h4>
                <p className="text-black text-sm leading-relaxed font-light mb-3">
                  Discover why fragmented fraud prevention tools create dangerous gaps and how integrated systems detect coordinated fraud attempts.
                </p>
                <a href="https://www.linkedin.com/pulse/illusion-coverage-why-one-tool-every-problem-isnt-buswf/?trackingId=mpIXa5F4l1o2l7%2FidlDOyA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-fin-blue font-medium text-sm hover:underline">Read More →</a>
              </motion.div>

              {/* Article 2 */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-xs font-semibold text-fin-blue uppercase tracking-wide">Article</span>
                <h4 className="text-lg font-bold text-gray-900 mt-2 mb-2">How Modern Fraud Prevention Can Boost Community Banks&apos; ROI</h4>
                <p className="text-black text-sm leading-relaxed font-light mb-3">
                  Discover how fraud prevention transforms from a cost center to a strategic opportunity, potentially saving community banks $145K+ annually.
                </p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7353170039383977985/" target="_blank" rel="noopener noreferrer" className="text-fin-blue font-medium text-sm hover:underline">Read More →</a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
