"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NetworkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* DeepSecure Network Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-[40px] font-bold mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-fin-blue font-normal mb-2 inline-block">DeepSecure™</span> <span className="font-normal mb-2 inline-block">Network</span><br />
              <span className="font-light">Collaborative Fraud Ring Detection & Intelligence Sharing</span>
            </motion.h2>

            <motion.p
              className="text-lg text-black mb-6 text-center leading-relaxed font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Collaborative network detecting fraud rings through secure intelligence sharing across institutions.
            </motion.p>

            <motion.div
              className="w-16 h-px bg-blue-600 mb-8 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Strength in Numbers</h3>
                <p className="text-black">Join a collaborative network to detect and disrupt complex fraud rings with federated learning.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Share Intelligence, Not Member Data</h3>
                <p className="text-black">Securely share fraud insights without compromising sensitive data, strengthening community-wide defenses.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fight Fraud Together</h3>
                <p className="text-black">Leverage collective intelligence to combat sophisticated, multi-institution fraud attacks.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Enhance Community Resilience</h3>
                <p className="text-black">Build a stronger, more secure financial ecosystem for your members and your institution.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Network UI Panel - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full"
        >
          <img
            src="/ui-panel-network.png"
            alt="DeepSecure Network Panel"
            className="w-full h-auto object-cover"
          />
        </motion.div>
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

export default NetworkPage;
