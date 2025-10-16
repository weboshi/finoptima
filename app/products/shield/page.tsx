"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/ui/Footer';
import Navigation from '@/components/ui/Navigation';

const ShieldPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <Navigation />

      {/* DeepSecure Shield Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Audio Guard Images */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="space-y-6">
                <div>
                  <img
                    src="/audioguard-1.png"
                    alt="Audio Guard 1"
                    className="w-full bg-transparent"
                  />
                </div>
                <div className="flex items-start">
                  <img
                    src="/audioguard-3.png"
                    alt="Audio Guard 2"
                    className="w-1/2 bg-transparent"
                  />
                  <img
                    src="/audioguard-2.png"
                    alt="Audio Guard 3"
                    className="w-1/2 bg-transparent"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.h2
                className="text-4xl lg:text-[40px] font-normal mb-6 text-gray-900 text-center lg:text-left leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="text-fin-blue font-normal mb-2 inline-block">DeepSecure™</span> <span className="font-normal mb-2 inline-block">Shield</span><br />
                <span className="font-light">Real-Time Account &<br />
                  Transaction Protection,<br />
                  Including Voice Fraud</span>
              </motion.h2>

              <motion.div
                className="w-16 h-px bg-blue-600 mb-8 mx-auto lg:mx-0"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Real-Time Protection, Real Member Trust</h3>
                  <p className="text-black">Stop account takeovers and fraudulent transactions with AI-driven behavioral analysis and anomaly detection.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Fortify Your Contact Center</h3>
                  <p className="text-black">Detect deepfake voice impersonation with DeepSecure™ VoiceGuard, preventing social engineering and protecting member interactions.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Reduce Fraud Losses, Maximize Security</h3>
                  <p className="text-black">Minimize financial and reputational damage with proactive, AI-powered fraud prevention.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Stay Ahead of Fraudsters</h3>
                  <p className="text-black">Continuously adapt to evolving fraud tactics with real-time monitoring and adaptive authentication.</p>
                </motion.div>
              </div>
            </motion.div>
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

export default ShieldPage;
