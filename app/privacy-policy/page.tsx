'use client';

import React from 'react';
import Footer from '@/components/ui/Footer';
import Navigation from '@/components/ui/Navigation';

export default function PrivacyPolicy() {

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8"><strong>Last Updated: October 6, 2025</strong></p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            FinOptima Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered fraud prevention services, visit our website, or engage with our platform.
          </p>
          <p className="text-gray-700 mb-4">
            Please read this Privacy Policy carefully. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide to Us</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Account Information</strong>: Name, email address, phone number, company name, job title, and login credentials</li>
            <li><strong>Business Information</strong>: Company details, business identification numbers, and billing information</li>
            <li><strong>Communications</strong>: Information you provide when contacting our support team or participating in surveys</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Information Collected Automatically</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Transaction Data</strong>: Financial transaction details, payment information, transaction patterns, and related metadata necessary for fraud detection</li>
            <li><strong>Device Information</strong>: IP address, browser type, operating system, device identifiers, and mobile network information</li>
            <li><strong>Usage Data</strong>: Pages visited, features used, time spent on our platform, clickstream data, and interaction patterns</li>
            <li><strong>Cookies and Similar Technologies</strong>: We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Information from Third Parties</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Client Data</strong>: Transaction and user behavior data provided by our clients for fraud analysis</li>
            <li><strong>Data Partners</strong>: Information from fraud databases, credit bureaus, identity verification services, and other third-party data providers</li>
            <li><strong>Public Sources</strong>: Publicly available information relevant to fraud prevention</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Fraud Prevention Services</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Detecting, preventing, and analyzing fraudulent transactions and activities</li>
            <li>Training and improving our AI and machine learning models</li>
            <li>Generating fraud risk scores and assessments</li>
            <li>Identifying patterns and anomalies indicative of fraudulent behavior</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Service Delivery and Improvement</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Providing, maintaining, and improving our services</li>
            <li>Developing new features and functionality</li>
            <li>Personalizing user experience</li>
            <li>Conducting research and analysis to enhance our fraud detection capabilities</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Communication</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Responding to inquiries and providing customer support</li>
            <li>Sending service updates, security alerts, and administrative messages</li>
            <li>Providing technical notices and policy updates</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.4 Legal and Security</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Complying with legal obligations and regulations</li>
            <li>Protecting against security threats and unauthorized access</li>
            <li>Enforcing our terms of service and other agreements</li>
            <li>Resolving disputes and investigating complaints</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Share Your Information</h2>
          <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 With Client Organizations</h3>
          <p className="text-gray-700 mb-4">
            We share fraud detection results and risk assessments with our clients who have engaged our services to protect their platforms.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Service Providers</h3>
          <p className="text-gray-700 mb-4">We engage third-party service providers who perform services on our behalf, including:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Cloud infrastructure providers</li>
            <li>Data analytics services</li>
            <li>Customer support platforms</li>
            <li>Payment processors</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Legal Requirements</h3>
          <p className="text-gray-700 mb-4">We may disclose information when required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Comply with applicable laws or respond to valid legal processes</li>
            <li>Protect the rights, property, or safety of FinOptima Solutions, our clients, or the public</li>
            <li>Detect, prevent, or address fraud, security, or technical issues</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.4 Business Transfers</h3>
          <p className="text-gray-700 mb-4">
            In connection with any merger, acquisition, restructuring, or sale of assets, your information may be transferred to the acquiring entity.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.5 With Your Consent</h3>
          <p className="text-gray-700 mb-4">
            We may share information with third parties when you have given us explicit consent to do so.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-4">We implement appropriate technical and organizational measures to protect your information, including:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and audits</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Network security and monitoring systems</li>
            <li>Employee training on data protection and security</li>
          </ul>
          <p className="text-gray-700 mb-4">
            However, no method of transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <p className="text-gray-700 mb-4">We retain personal information for as long as necessary to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Fulfill the purposes outlined in this Privacy Policy</li>
            <li>Comply with legal, regulatory, or contractual obligations</li>
            <li>Resolve disputes and enforce our agreements</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Transaction data used for fraud detection may be retained for extended periods to improve our AI models and maintain historical fraud pattern databases.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights and Choices</h2>
          <p className="text-gray-700 mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.1 Access and Correction</h3>
          <p className="text-gray-700 mb-4">
            You may request access to your personal information and request corrections to inaccurate data.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.2 Data Portability</h3>
          <p className="text-gray-700 mb-4">
            You may request a copy of your personal information in a structured, commonly used format.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.3 Deletion</h3>
          <p className="text-gray-700 mb-4">
            You may request deletion of your personal information, subject to legal and contractual retention requirements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.4 Opt-Out</h3>
          <p className="text-gray-700 mb-4">
            You may opt out of receiving marketing communications by following the unsubscribe instructions in our emails or contacting us directly.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.5 Cookie Preferences</h3>
          <p className="text-gray-700 mb-4">
            You can manage cookie preferences through your browser settings, though disabling cookies may limit functionality.
          </p>

          <p className="text-gray-700 mb-4">
            To exercise these rights, please contact us using the information provided in Section 12.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International Data Transfers</h2>
          <p className="text-gray-700 mb-4">
            FinOptima Solutions operates globally. Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable data protection laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Children&apos;s Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Third-Party Links</h2>
          <p className="text-gray-700 mb-4">
            Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">We may update this Privacy Policy from time to time. We will notify you of material changes by:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Posting the updated policy on our website</li>
            <li>Updating the &quot;Last Updated&quot; date</li>
            <li>Sending email notifications for significant changes</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Your continued use of our services after changes become effective constitutes acceptance of the revised policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>FinOptima Solutions</strong><br />
            Email: info@finoptima.ai<br />

          </p>
          <p className="text-gray-700 mb-4">
            For data protection inquiries in specific jurisdictions, you may also contact our Data Protection Officer at: info@finoptima.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Jurisdiction-Specific Rights</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.1 For European Economic Area (EEA) Residents</h3>
          <p className="text-gray-700 mb-4">
            Under the General Data Protection Regulation (GDPR), you have additional rights including the right to object to processing, restrict processing, and lodge complaints with supervisory authorities.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.2 For California Residents</h3>
          <p className="text-gray-700 mb-4">
            Under the California Consumer Privacy Act (CCPA), you have the right to know what personal information is collected, request deletion, and opt out of the sale of personal information. We do not sell personal information.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.3 For Other Jurisdictions</h3>
          <p className="text-gray-700 mb-4">
            Additional rights may apply based on your location. Please contact us to learn more about rights specific to your jurisdiction.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
