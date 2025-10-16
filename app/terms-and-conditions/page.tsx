'use client';

import React from 'react';
import Footer from '@/components/ui/Footer';
import Navigation from '@/components/ui/Navigation';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-8"><strong>Last Updated: October 15, 2025</strong></p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to FinOptima Solutions ("Company," "we," "our," or "us"). By accessing or using our website located at finoptima.ai (the "Site"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FinOptima Solutions provides information about our AI-powered fraud detection solutions and related services through this marketing website. The Site is intended for informational and marketing purposes only. Any actual services, software, or products must be obtained through a separate written agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of the Site</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Use the Site in any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>Attempt to gain unauthorized access to any portion of the Site or any systems or networks connected to the Site</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
              <li>Use any automated system, including robots, spiders, or scrapers, to access the Site without our prior written consent</li>
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other malicious or technologically harmful material</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Site and its entire contents, features, and functionality, including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof, are owned by FinOptima Solutions, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you submit any content, feedback, suggestions, or materials to us through the Site ("User Content"), you grant FinOptima Solutions a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content for any purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Site may contain links to third-party websites or services that are not owned or controlled by FinOptima Solutions. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. We encourage you to review the terms and conditions and privacy policies of any third-party websites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, FINOPTIMA SOLUTIONS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not warrant that the Site will be uninterrupted, secure, or error-free, or that any defects will be corrected. We make no warranties about the accuracy, reliability, completeness, or timeliness of the content on the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, FINOPTIMA SOLUTIONS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Your access to or use of or inability to access or use the Site</li>
              <li>Any conduct or content of any third party on the Site</li>
              <li>Any content obtained from the Site</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED ONE HUNDRED DOLLARS ($100).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to defend, indemnify, and hold harmless FinOptima Solutions and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If we make material changes to these Terms, we will provide notice by posting the updated Terms on the Site and updating the "Last Updated" date. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within Delaware for the resolution of any disputes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Severability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and FinOptima Solutions regarding the use of the Site and supersede any prior agreements between you and FinOptima Solutions relating to your use of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>FinOptima Solutions</strong><br />
              Email: info@finoptima.ai<br />
              Website: finoptima.ai
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <p className="text-gray-600 italic">
            By using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
