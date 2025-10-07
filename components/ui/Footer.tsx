import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Logo Section */}
                    <div>
                        <div className="mb-6">
                            <span className="text-2xl font-bold">
                                <span className="text-fin-blue">Fin</span>
                                <span className="text-white">Optima Solutions</span>
                            </span>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">
                                    DeepSecure™ Onboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">
                                    DeepSecure™ Shield
                                </Link>
                            </li>
                            <li>
                                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">
                                    DeepSecure™ CheckGuard
                                </Link>
                            </li>
                            <li>
                                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">
                                    DeepSecure™ Network
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">

                            <li>
                                <a href="https://wellfound.com/company/finoptima-solutions" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Terms Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Terms of Use</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            Copyright© 2025 FinOptima Solutions
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;