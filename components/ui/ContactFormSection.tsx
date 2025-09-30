"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    company: string;
    email: string;
}

interface ContactFormSectionProps {
    onSubmit?: (formData: FormData) => void;
    className?: string;
    lambdaEndpoint?: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
    onSubmit,
    className = "",
    lambdaEndpoint = process.env.NEXT_PUBLIC_LAMBDA_ENDPOINT || ""
}) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        email: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Reset status when user starts typing again
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle');
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();

        // Validate required fields
        if (!formData.name || !formData.company || !formData.email) {
            setSubmitStatus('error');
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // Call custom onSubmit handler if provided
            if (onSubmit) {
                onSubmit(formData);
            }

            // Submit to AWS Lambda endpoint
            if (lambdaEndpoint) {
                const requestBody = {
                    name: formData.name,
                    company_name: formData.company,
                    email: formData.email,
                };

                const response = await fetch(lambdaEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('Form submission successful:', result);

                setSubmitStatus('success');
                // Reset form after successful submission
                setFormData({
                    name: '',
                    company: '',
                    email: ''
                });
            } else {
                console.log('Form submitted locally:', formData);
                setSubmitStatus('success');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'An error occurred while submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className={`bg-gray-900 py-20 relative overflow-hidden ${className}`}>
            {/* Dotted Background Pattern */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Contact Us
                        </motion.h2>

                        <motion.div
                            className="space-y-6 text-lg text-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <p className="leading-relaxed">
                                For a demo, get in touch with us through our contact form or email us directly at{' '}
                                <a href="mailto:info@finoptima.ai" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                                    info@finoptima.ai
                                </a>
                            </p>

                            <p className="leading-relaxed">
                                We will get back to you soon.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-2xl">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-500 text-black"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company*
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-500 text-black"
                                        placeholder="Company Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address*
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-500 text-black"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>


                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                                        }`}
                                    type="submit"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="text-green-600 text-sm text-center bg-green-50 border border-green-200 rounded-lg p-3">
                                        ✓ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-lg p-3">
                                        ✗ {errorMessage}
                                    </div>
                                )}

                                <p className="text-sm text-gray-600 text-center">
                                    We value your privacy. To learn more, visit our{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                                        Privacy Statement
                                    </a>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;