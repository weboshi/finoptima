"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const OnboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <Navigation />

      {/* DeepSecure Onboard Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.p
                className="text-blue-600 text-lg mb-4 font-medium text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Products
              </motion.p>

              <motion.h2
                className="text-4xl lg:text-[40px] font-normal mb-6 text-gray-900 text-center lg:text-left leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="text-fin-blue font-normal mb-2 inline-block">DeepSecure™</span> <span className="font-normal mb-2 inline-block">Onboard</span><br />
                <span className="font-light">Intelligent Identity<br />
                  Verification & Secure<br />
                  Onboarding</span>
              </motion.h2>

              <motion.p
                className="text-lg text-black mb-6 text-center lg:text-left leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                AI-powered identity verification detecting synthetic identities and deepfakes at account opening.
              </motion.p>

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
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Stop Fraud at the Start</h3>
                  <p className="text-black">Prevent synthetic identities and deepfake account openings with AI-powered, real-time identity verification.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Seamless, Secure Member Onboarding</h3>
                  <p className="text-black">Streamline account creation while ensuring compliance with advanced check washing detection and robust identity checks.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Build Trust from Day One</h3>
                  <p className="text-black">Enhance member experience with fast, secure onboarding, reducing manual reviews and potential fraud risks.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Reduce Losses, Not Members</h3>
                  <p className="text-black">Prevent costly fraud losses associated with fraudulent accounts and check fraud, protecting your community.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <img
                  src="/onboard-ui-2.png"
                  alt="Onboard UI 2"
                  className="w-[150%] bg-transparent"
                />
                <img
                  src="/onboard-ui-1.png"
                  alt="Onboard UI 1"
                  className="absolute top-40 left-0 w-[150%] bg-transparent"
                />
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
    </div>
  );
};

export default OnboardPage;
