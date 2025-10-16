"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TrustedByCarousel: React.FC = () => {
  const logos = [
    { src: '/logos/LP_startups_logo_aws-activate.png', alt: 'AWS Activate', width: 180, height: 60 },
    { src: '/logos/Google_Cloud_logo.svg', alt: 'Google Cloud', width: 180, height: 60 },
    { src: '/logos/ICBA-Logo-Tagline.svg', alt: 'ICBA', width: 120, height: 40 },
    { src: '/logos/logo-nyu-future-labs.png.webp', alt: 'NYU Future Labs', width: 150, height: 50 },
    { src: '/logos/NV_Inception_Program_Logo_NV_Inception_Logo_H_CMYK.webp', alt: 'NVIDIA Inception', width: 180, height: 60 },
    { src: '/logos/NYUEntrepreneurialInstitute_color.png', alt: 'NYU Entrepreneurial Institute', width: 180, height: 60 },
  ];

  // Duplicate logos multiple times for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Calculate the width of one set of logos (180px width + 96px gap (gap-24 = 6rem = 96px))
  const logoWidth = 180;
  const gapWidth = 96; // gap-24 in pixels
  const totalWidth = logos.length * (logoWidth + gapWidth);

  return (
    <div className="overflow-hidden pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-600 font-extralight">
            Backed by leading organizations and innovation programs
          </p>
        </motion.div>

        {/* Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-24 items-center"
              animate={{
                x: [-totalWidth, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: '180px', height: '80px' }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain max-w-full max-h-full"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full pointer-events-none z-10" style={{ background: 'linear-gradient(to right, rgba(249, 250, 251, 1), rgba(249, 250, 251, 0))' }} />
          <div className="absolute top-0 right-0 w-32 h-full pointer-events-none z-10" style={{ background: 'linear-gradient(to left, rgba(249, 250, 251, 1), rgba(249, 250, 251, 0))' }} />
        </div>
      </div>
    </div>
  );
};

export default TrustedByCarousel;
