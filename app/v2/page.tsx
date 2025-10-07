"use client";

import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
import Link from 'next/link';
import ContactFormSection from '@/components/ui/ContactFormSection';
import Footer from '@/components/ui/Footer';
import NetworkAnimation from '@/components/ui/NetworkAnimation';



interface NavLinkProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, onClick, children }) => (
    <a
        href={href}
        onClick={onClick}
        className="font-medium flex items-center cursor-pointer text-black hover:text-gray-700"
    >
        {children}
    </a>
);

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    metric: string;
    description: string;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    metric,
    description,
    delay
}) => (
    <motion.div
        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
    >
        <div className="bg-fin-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            {icon}
        </div>
        <h3 className="text-xl font-normal text-gray-900 mb-4">{title}</h3>
        <div className="text-3xl font-bold text-fin-blue mb-4">{metric}</div>
        <p className="text-black leading-relaxed">{description}</p>
    </motion.div>
);

const FinOptimaLanding: React.FC = () => {
    const [activeTab, setActiveTab] = useState('voice');

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const tabs = [
        {
            id: 'voice',
            title: 'Streamlined Account Opening & Onboarding',
            subtitle: 'Multi-layered identity verification for legitimate accounts',
            content: {
                title: 'Streamlined Account Opening & Onboarding',
                subtitle: 'Synthetic identities and fraudulent accounts are on the rise, creating significant risks and costs for financial institutions.',
                description: 'Our multi-layered identity verification analyzes voice patterns, facial features, and document data to ensure that new accounts are legitimate and compliant. This automated approach reduces onboarding time and prevents fraudulent accounts.',
                benefit: 'Reduce fraudulent account openings by up to 80% and accelerate customer onboarding.',
                headerIcon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            }
        },
        {
            id: 'check',
            title: 'Protect from Image-Based Fraud',
            subtitle: 'Identity and Check Image verification',
            content: {
                title: 'Protect from Image-Based Fraud - Identity and Check Image',
                subtitle: 'Community banks and credit unions face a growing threat from sophisticated fraudsters using fake IDs and altered checks.',
                description: 'Finoptima&apos;s DeepSecure™ platform offers a powerful solution, leveraging AI to automatically verify identity documents and check images in real-time during online and mobile transactions. Our technology seamlessly integrates into your existing systems, providing a secure and efficient way to verify identities and checks digitally.',
                benefit: 'DeepSecure™ reduces fraud losses by up to 15% and streamlines operations by cutting manual review efforts by 40%.',
                headerIcon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            }
        },
        {
            id: 'network',
            title: 'Enhanced Call Center Security',
            subtitle: 'Secure Your Call Center and Protect Customer Data',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
            content: {
                title: 'Enhanced Call Center Security',
                subtitle: 'Voice phishing and social engineering attacks are increasingly sophisticated, making it difficult to verify callers and protect sensitive customer information.',
                description: 'Our voice authentication technology analyzes unique vocal characteristics to verify callers in real-time, ensuring that customer service representatives are interacting with legitimate account holders.',
                benefit: 'Reduce call center fraud incidents by up to 70% and enhance customer satisfaction with seamless authentication.',
                headerIcon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            }
        },
        {
            id: 'loans',
            title: 'Secure Loan Approvals',
            subtitle: 'Confidently Approve Loans with AI-Powered Risk Assessment',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />,
            content: {
                title: 'Secure Loan Approvals',
                subtitle: 'Loan fraud and identity theft can lead to significant financial losses. Traditional credit scoring methods may not be sufficient to identify high-risk applicants.',
                description: 'DeepSecure analyzes applicant data, credit history, and performs voice verification to confirm identity and assess loan risk in real-time. This empowers lenders to make informed decisions and automate approvals for low-risk applications.',
                benefit: 'Reduce loan fraud losses by up to 60% and improve loan approval efficiency.',
                headerIcon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            }
        }
    ];

    const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Navigation */}
            <nav className="bg-white border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="block">
                                <img
                                    src="/Logo_v2.png"
                                    alt="FinOptima"
                                    className="h-8 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8 px-14 py-3 rounded-md">
                            <NavLink href="#">Home</NavLink>
                            <NavLink onClick={() => scrollToSection('products')}>Products</NavLink>
                            <NavLink onClick={() => scrollToSection('team')}>Meet the Team</NavLink>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-fin-dark-blue hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer"
                        >
                            Request Demo
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                <span className="text-fin-blue">Protect Your Organization</span><br />
                                from Financial Fraud
                            </h1>

                            <p className="text-base sm:text-lg text-black mb-12 leading-relaxed">
                                Advanced AI-powered solutions for banks and credit unions to detect fraud, reduce false positives, and safeguard assets in real-time.
                            </p>

                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-fin-dark-blue hover:bg-blue-800 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors transform cursor-pointer"
                            >
                                Request Free Demo
                            </button>
                        </div>

                        {/* Right Column - Animation */}
                        <div className="h-[600px] flex items-center justify-center">
                            <NetworkAnimation />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Icon icon="line-md:close-circle-filled" className="text-5xl" />}
                            title="Stop Synthetic Losses"
                            metric="$500,000+"
                            description="DeepSecure&apos;s Audio Prevention Agent, stops costly deepfake frauds in real-time for contact centers"
                            delay={0.1}
                        />

                        <FeatureCard
                            icon={<Icon icon="line-md:cog-filled-loop" className="text-5xl" />}
                            title="Reduce Manual Reviews"
                            metric="2000+ Hours"
                            description="Our AI-powered platform automates fraud detection and provides clear explanations for alerts"
                            delay={0.2}
                        />

                        <FeatureCard
                            icon={<Icon icon="line-md:bell-filled-loop" className="text-5xl" />}
                            title="Improve Detection Accuracy"
                            metric="95%+"
                            description="DeepSecure&apos;s Audio Prevention Agent, stops costly deepfake frauds in real-time for contact centers"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Why FinOptima Section */}
            <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                            backgroundSize: '24px 24px'
                        }}>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.p
                            className="text-blue-400 text-xl tracking-wide mb-8 font-thin"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Why FinOptima
                        </motion.p>
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Next-Level AI for Next-Level Threats
                        </motion.h2>
                        <motion.p
                            className="text-lg text-white font-light max-w-4xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Our sophisticated platform provides comprehensive protection against increasingly complex fraud attacks.
                        </motion.p>
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white rounded-2xl p-8 h-full text-gray-900"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                                ease: [0.25, 0.25, 0.25, 1]
                            }}
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-2xl font-medium mb-6 leading-relaxed">
                                    Combat Deepfakes and Synthetic Identities
                                </h3>
                                <p className="text-black font-light leading-relaxed mb-8 flex-grow">
                                    Detect and block advanced fabricated identities that slip past conventional verification systems, preventing fraudulent account openings and financial losses.
                                </p>
                                <div className="mt-auto">
                                    <div className="w-20 h-20 flex items-center justify-flex-start">
                                        <Icon icon="material-symbols:zone-person-urgent" className="text-5xl text-fin-blue" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-2xl p-8 h-full text-gray-900"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                                ease: [0.25, 0.25, 0.25, 1]
                            }}
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-2xl font-medium mb-6 leading-relaxed">
                                    Address Real-Time Fraud with Limited Resources
                                </h3>
                                <p className="text-black font-light leading-relaxed mb-8 flex-grow">
                                    We empower community banks to prevent fraud attacks as they happen without the need for a large in-house team or a custom built in-house solution.
                                </p>
                                <div className="mt-auto">
                                    <div className="w-20 h-20 flex items-center justify-flex-start">
                                        <Icon icon="material-symbols:assured-workload" className="text-5xl text-fin-blue" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-2xl p-8 h-full text-gray-900"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3,
                                ease: [0.25, 0.25, 0.25, 1]
                            }}
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-2xl font-medium mb-6 leading-relaxed">
                                    Navigate Complex Data Privacy Challenges
                                </h3>
                                <p className="text-black font-light leading-relaxed mb-8 flex-grow">
                                    Enables secure fraud intelligence sharing, allowing you to collaborate with other institutions to combat fraud rings without compromising member data privacy.
                                </p>
                                <div className="mt-auto">
                                    <div className="w-20 h-20 flex items-center justify-flex-start">
                                        <Icon icon="material-symbols:encrypted-add" className="text-5xl text-fin-blue" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Platform Section */}
            <section className="bg-gray-100 py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        className="text-left mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.p
                            className="text-blue-600 text-lg mb-4 font-light"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Our platform
                        </motion.p>
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-[52px] font-normal mb-6 leading-tight text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Introducing <span className="text-blue-600">DeepSecure™</span><br />
                            Your Competitive Advantage
                        </motion.h2>
                        <motion.p
                            className="text-lg text-black max-w-4xl leading-relaxed font-light"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            FinOptima&apos;s DeepSecure technology delivers advanced AI-powered fraud detection that outperforms legacy systems with faster response times and greater accuracy.
                        </motion.p>
                    </motion.div>

                    {/* Platform Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white rounded-2xl p-8 shadow-sm"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <Icon icon="material-symbols:siren-check" className="text-5xl text-white" />

                            </div>
                            <h3 className="text-xl font-normal text-blue-600 mb-4">Reduced False Positives</h3>
                            <p className="text-black leading-relaxed font-light">
                                DeepSecure™ reduces false positives by 30% compared to traditional systems, minimizing member disruptions and saving staff time.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-2xl p-8 shadow-sm"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <Icon icon="material-symbols:more-time" className="text-5xl text-white" />

                            </div>
                            <h3 className="text-xl font-normal text-blue-600 mb-4">Faster Fraud Detection</h3>
                            <p className="text-black leading-relaxed font-light">
                                DeepSecure detects and responds to fraud 50% faster than legacy systems, reducing financial losses and protecting member trust.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-2xl p-8 shadow-sm"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <Icon icon="material-symbols:edit-audio-rounded" className="text-5xl text-white" />

                            </div>
                            <h3 className="text-xl font-normal text-blue-600 mb-4">Specialized Deep Audio</h3>
                            <p className="text-black leading-relaxed font-light">
                                DeepSecure™&apos;s AI-driven deep audio detection is 95% accurate in detecting deepfake voice impersonation attempts in contact centers
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DeepSecure Onboard Section */}
            <section id="products" className="bg-white py-20">
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

            {/* DeepSecure CheckGuard Section */}
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
                            <motion.h2
                                className="text-4xl lg:text-[40px] font-normal mb-6 text-gray-900 text-center lg:text-left leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <span className="text-fin-blue font-normal mb-2 inline-block">DeepSecure™</span> <span className="font-normal mb-2 inline-block">CheckGuard</span><br />
                                <span className="font-light">Advanced Check Fraud<br />
                                    Prevention</span>
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
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Real-Time Check Fraud Prevention</h3>
                                    <p className="text-black">Detect check washing and alterations instantly with advanced image analysis, stopping fraud before it happens.</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Protect Your Assets, Protect Your Community</h3>
                                    <p className="text-black">Minimize financial losses from check fraud with robust, AI-powered image analysis.</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Streamline Check Processing</h3>
                                    <p className="text-black">Reduce manual reviews and operational overhead with automated, real-time check fraud detection.</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Build Trust in Every Transaction</h3>
                                    <p className="text-black">Ensure the legitimacy of every check with integrated identity verification and advanced image analysis.</p>
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
                            <div>
                                <img
                                    src="/license1.png"
                                    alt="License 1"
                                    className="w-full bg-transparent"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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
            {/* Platform Features Tabbed Section */}
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
                        <motion.p
                            className="text-blue-600 text-lg mb-4 font-medium"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Use Cases
                        </motion.p>
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-[52px] font-normal mb-6 leading-tight text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            FinOptima&apos;s <span className="text-fin-blue">DeepSecure</span> Solving Real-World Threats

                        </motion.h2>
                    </motion.div>

                    {/* Main Tabbed Interface */}
                    <motion.div
                        className="bg-gray-50 rounded-3xl overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-4">
                            {/* Left Sidebar Tabs */}
                            <div className="lg:col-span-1 bg-white border-r border-gray-200">
                                <div className="p-8 space-y-2">
                                    {tabs.map((tab) => (
                                        <div
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`rounded-2xl p-6 cursor-pointer transition-colors ${activeTab === tab.id
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                                                }`}
                                        >
                                            <h3 className={`font-bold text-base mb-2 ${activeTab === tab.id ? 'text-white' : 'text-gray-900'
                                                }`}>{tab.title}</h3>
                                            <p className={`text-sm leading-relaxed ${activeTab === tab.id ? 'text-blue-100' : 'text-gray-600'
                                                }`}>{tab.subtitle}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Content Area */}
                            <div className="lg:col-span-3 p-8 lg:p-12">
                                <div className="h-full flex flex-col">
                                    {/* Content Header */}
                                    <div className="mb-8">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    {currentTab.content.headerIcon}
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{currentTab.content.title}</h3>
                                                <p className="text-gray-600">{currentTab.content.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Visual Content */}
                                    <div className="flex-1">
                                        <div className="w-full">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                                {/* Left Content - Text */}
                                                <div className="space-y-6">
                                                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                                                        <p className="text-gray-700 leading-relaxed mb-6">{currentTab.content.description}</p>
                                                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                                            <div className="flex items-center space-x-2 mb-2">
                                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                                </svg>
                                                                <span className="font-semibold text-blue-800">Key Benefit</span>
                                                            </div>
                                                            <p className="text-blue-800 font-medium">{currentTab.content.benefit}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right Content - UI Mockup */}
                                                <div className="space-y-6">
                                                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                                                        {activeTab === 'voice' && (
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
                                                        )}

                                                        {activeTab === 'check' && (
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
                                                        )}

                                                        {activeTab === 'network' && (
                                                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                                                                <div className="flex items-center justify-between mb-6">
                                                                    <h5 className="text-lg font-semibold text-gray-900">Call Monitor</h5>
                                                                    <div className="flex items-center space-x-2">
                                                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                                        <span className="text-xs text-green-600 font-medium">LIVE CALL</span>
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-4">
                                                                    <div className="bg-white rounded-lg p-4">
                                                                        <div className="flex items-center justify-between mb-3">
                                                                            <span className="text-sm font-medium text-gray-900">Caller: John Smith</span>
                                                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">VERIFIED</span>
                                                                        </div>
                                                                        <div className="flex items-center space-x-3">
                                                                            <div className="flex-1">
                                                                                <div className="text-xs text-gray-600 mb-1">Voice Pattern Match</div>
                                                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                                                    <div className="bg-green-500 h-2 rounded-full w-[94%]"></div>
                                                                                </div>
                                                                                <div className="text-xs text-gray-600 mt-1">94%</div>
                                                                            </div>
                                                                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="bg-white rounded-lg p-4">
                                                                        <div className="text-sm font-medium text-gray-900 mb-3">Audio Analysis</div>
                                                                        <div className="grid grid-cols-4 gap-2 mb-2">
                                                                            <div className="h-8 bg-green-400 rounded animate-pulse"></div>
                                                                            <div className="h-6 bg-green-400 rounded animate-pulse"></div>
                                                                            <div className="h-10 bg-green-400 rounded animate-pulse"></div>
                                                                            <div className="h-7 bg-green-400 rounded animate-pulse"></div>
                                                                        </div>
                                                                        <div className="text-xs text-gray-600">Real-time voice analysis active</div>
                                                                    </div>

                                                                    <div className="bg-white rounded-lg p-4">
                                                                        <div className="flex items-center justify-between">
                                                                            <span className="text-sm font-medium text-gray-900">Security Level</span>
                                                                            <span className="text-sm font-bold text-green-600">HIGH</span>
                                                                        </div>
                                                                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                                                            <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {activeTab === 'loans' && (
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
                                                        )}
                                                    </div>

                                                    {activeTab === 'voice' && (
                                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                                                            <h5 className="font-semibold text-gray-900 mb-4">3-Step Process</h5>
                                                            <div className="grid grid-cols-3 gap-3">
                                                                <div className="text-center p-3 bg-white rounded-lg">
                                                                    <div className="text-lg font-bold text-blue-600">1</div>
                                                                    <div className="text-xs text-gray-600">Voice Analysis</div>
                                                                </div>
                                                                <div className="text-center p-3 bg-white rounded-lg">
                                                                    <div className="text-lg font-bold text-blue-600">2</div>
                                                                    <div className="text-xs text-gray-600">Facial Recognition</div>
                                                                </div>
                                                                <div className="text-center p-3 bg-white rounded-lg">
                                                                    <div className="text-lg font-bold text-blue-600">3</div>
                                                                    <div className="text-xs text-gray-600">Document Verification</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTab === 'check' && (
                                                        <div className="bg-white rounded-lg p-4 border">
                                                            <div className="flex items-center justify-between mb-4">
                                                                <h5 className="font-semibold text-gray-900">Analysis Status</h5>
                                                                <div className="flex items-center space-x-2">
                                                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                                                    <span className="text-xs text-blue-600 font-medium">ANALYZING</span>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-3">
                                                                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                                                    <span className="text-sm font-medium text-gray-900">ID Document</span>
                                                                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">VERIFIED</span>
                                                                </div>
                                                                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                                                                    <span className="text-sm font-medium text-gray-900">Check Image</span>
                                                                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">REVIEWING</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTab === 'network' && (
                                                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                                                            <h5 className="font-semibold text-gray-900 mb-4">Voice Metrics</h5>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div className="bg-white rounded-lg p-3">
                                                                    <div className="flex items-center space-x-2 mb-2">
                                                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                                                        <span className="text-xs font-medium text-gray-700">Active Call</span>
                                                                    </div>
                                                                    <div className="text-sm font-bold text-green-600">94% Match</div>
                                                                </div>
                                                                <div className="bg-white rounded-lg p-3">
                                                                    <div className="flex items-center space-x-2 mb-2">
                                                                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                                                        <span className="text-xs font-medium text-gray-700">Security</span>
                                                                    </div>
                                                                    <div className="text-sm font-bold text-blue-600">High</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section id="team" className="bg-gray-50 py-20">
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
                            Meet the <span className="text-fin-blue">Team</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-black max-w-3xl mx-auto leading-relaxed font-light"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Our team of fraud detection experts and AI specialists are dedicated to protecting financial institutions with cutting-edge technology and deep industry knowledge.
                        </motion.p>
                    </motion.div>

                    {/* Team Members */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Team Member 1 */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="mb-6">
                                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                                    <img
                                        src="/Anat-Goldstein.jpeg"
                                        alt="Anat Goldstein"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Anat Goldstein</h3>
                            <p className="text-fin-blue font-medium mb-4">Co-Founder & FinTech Strategist</p>
                            <p className="text-black leading-relaxed font-light">
                                FinTech strategist and co-founder with an MS in FinTech from NYU Stern. Background in investment banking (M&A, capital raising), VC/PE, and RegTech innovation. Angel investor and judge in the Most Fundable Companies Competition, bringing global, cross-sector expertise to financial risk and compliance.
                            </p>
                        </motion.div>

                        {/* Team Member 2 */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="mb-6">
                                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                                    <img
                                        src="/Biswajit-Lima.jpeg"
                                        alt="Biswajit Lima"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Biswajit K. Lima</h3>
                            <p className="text-fin-blue font-medium mb-4">Chief Technology Officer</p>
                            <p className="text-black leading-relaxed font-light">
                                Financial services technology leader with 20+ years of global experience building scalable fraud and risk platforms. EMBA from Brown University, Advanced ML/AI from Stanford. Former NASDAQ, Deutsche Bank, Barclays, and Macquarie Bank.
                            </p>
                        </motion.div>

                        {/* Team Member 3 */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="mb-6">
                                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                                    <img
                                        src="/Farook_Photo.jpg"
                                        alt="Farook Sattar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Farook Sattar</h3>
                            <p className="text-fin-blue font-medium mb-4">Senior Researcher and Advisor</p>
                            <p className="text-black leading-relaxed font-light">
                                30+ years of research experience with 150+ publications in signal and image processing, speech/audio, vision, and AI/ML systems. PhD from Lund University. Former engineer, educator, and research scientist.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Thought Leadership Section */}
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

            <ContactFormSection />
            <Footer />
            {/* Mobile Menu Button Hidden on Desktop */}
            <div className="md:hidden fixed bottom-6 right-6">
                <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
                    <Settings className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default FinOptimaLanding;