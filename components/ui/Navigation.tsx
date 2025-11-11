"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Icon } from "@iconify/react";
import Link from 'next/link';

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

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [useCasesDropdownOpen, setUseCasesDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const products = [
    {
      name: 'DeepSecure™ Onboard',
      description: 'Intelligent Identity Verification',
      href: '/products/onboard',
      icon: 'material-symbols:how-to-reg'
    },
    {
      name: 'DeepSecure™ Shield',
      description: 'Real-Time Account Protection',
      href: '/products/shield',
      icon: 'material-symbols:shield-locked'
    },
    {
      name: 'DeepSecure™ CheckGuard',
      description: 'Advanced Check Fraud Prevention',
      href: '/products/checkguard',
      icon: 'material-symbols:check-circle'
    },
    {
      name: 'DeepSecure™ Network',
      description: 'Collaborative Fraud Detection',
      href: '/products/network',
      icon: 'material-symbols:hub'
    }
  ];

  const useCases = [
    {
      name: 'Account Opening & Onboarding',
      description: 'Multi-layered identity verification',
      icon: 'material-symbols:person-add',
      href: '/use-cases/account-opening'
    },
    {
      name: 'Image-Based Fraud Protection',
      description: 'Identity and Check Image verification',
      icon: 'material-symbols:document-scanner',
      href: '/use-cases/image-fraud'
    },
    {
      name: 'Call Center Security',
      description: 'Voice authentication and fraud prevention',
      icon: 'material-symbols:headset-mic',
      href: '/use-cases/call-center'
    },
    {
      name: 'Secure Loan Approvals',
      description: 'AI-powered risk assessment',
      icon: 'material-symbols:payments',
      href: '/use-cases/loan-approvals'
    }
  ];

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="block">
              <img
                src="/Logo_v5.png"
                alt="FinOptima"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 px-14 py-3 rounded-md">
            <NavLink href="/">Home</NavLink>

            {/* Products Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button className="font-medium flex items-center cursor-pointer text-black hover:text-gray-700 py-2">
                Products
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {/* Invisible bridge to prevent gap */}
              {productsDropdownOpen && (
                <div className="absolute left-0 right-0 h-8 top-full" />
              )}
            </div>

            {/* Use Cases Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setUseCasesDropdownOpen(true)}
              onMouseLeave={() => setUseCasesDropdownOpen(false)}
            >
              <button className="font-medium flex items-center cursor-pointer text-black hover:text-gray-700 py-2">
                Use Cases
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {/* Invisible bridge to prevent gap */}
              {useCasesDropdownOpen && (
                <div className="absolute left-0 right-0 h-8 top-full" />
              )}
            </div>

            <NavLink href="/resources">Resources</NavLink>
            <NavLink href="/#team">Meet the Team</NavLink>
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="/#contact"
            className="hidden md:block bg-fin-dark-blue hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer"
          >
            Request Free Demo
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Products Mega Menu Dropdown - Outside nav structure */}
        {productsDropdownOpen && (
          <div
            className="absolute left-0 right-0 top-full w-full bg-white z-40 pt-8"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
              <div className="grid grid-cols-2 gap-2">
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <Icon icon={product.icon} className="text-2xl text-fin-blue" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-light text-black mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600 font-light">{product.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Use Cases Mega Menu Dropdown - Outside nav structure */}
        {useCasesDropdownOpen && (
          <div
            className="absolute left-0 right-0 top-full w-full bg-white z-40 pt-8"
            onMouseEnter={() => setUseCasesDropdownOpen(true)}
            onMouseLeave={() => setUseCasesDropdownOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
              <div className="grid grid-cols-2 gap-2">
                {useCases.map((useCase, index) => (
                  <Link
                    key={index}
                    href={useCase.href}
                    className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <Icon icon={useCase.icon} className="text-2xl text-fin-blue" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-light text-black mb-1">{useCase.name}</h3>
                      <p className="text-sm text-gray-600 font-light">{useCase.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-black hover:text-gray-700 px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className="font-medium text-black hover:text-gray-700 px-4 py-2 text-left w-full flex items-center justify-between"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsDropdownOpen && (
                  <div className="mt-2 space-y-2 bg-gray-50 rounded-lg p-2">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-fin-blue rounded-lg flex items-center justify-center">
                            <Icon icon={product.icon} className="text-xl text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-gray-900">{product.name}</h3>
                          <p className="text-xs text-gray-600">{product.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Use Cases Dropdown */}
              <div>
                <button
                  onClick={() => setUseCasesDropdownOpen(!useCasesDropdownOpen)}
                  className="font-medium text-black hover:text-gray-700 px-4 py-2 text-left w-full flex items-center justify-between"
                >
                  Use Cases
                  <ChevronDown className={`w-4 h-4 transition-transform ${useCasesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {useCasesDropdownOpen && (
                  <div className="mt-2 space-y-2 bg-gray-50 rounded-lg p-2">
                    {useCases.map((useCase, index) => (
                      <Link
                        key={index}
                        href={useCase.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setUseCasesDropdownOpen(false);
                        }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-fin-blue rounded-lg flex items-center justify-center">
                            <Icon icon={useCase.icon} className="text-xl text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-gray-900">{useCase.name}</h3>
                          <p className="text-xs text-gray-600">{useCase.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/resources"
                className="font-medium text-black hover:text-gray-700 px-4 py-2 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>

              <Link
                href="/#team"
                className="font-medium text-black hover:text-gray-700 px-4 py-2 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Meet the Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
