'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-none overflow-hidden shadow-2xl border-l-8 border-brand-red">
              <Image 
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop" 
                alt="Construction Site" 
                width={600} 
                height={800}
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative boxes */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-blue -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-brand-gold -z-0" />
            
            <div className="absolute bottom-12 -right-12 bg-white p-8 shadow-xl hidden md:block z-20 max-w-xs">
              <p className="font-montserrat font-extrabold text-4xl text-brand-red mb-1">10+</p>
              <p className="font-montserrat font-bold text-sm text-brand-dark uppercase tracking-widest">Years of Excellence in Construction</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-brand-red font-montserrat font-extrabold uppercase tracking-[0.3em] text-sm mb-4 block">
              Who We Are
            </span>
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-dark mb-8 leading-tight">
              Trusted Experts in <span className="text-brand-blue">Aluminium & Construction</span>
            </h2>
            <div className="space-y-6 font-inter text-gray-600 text-lg leading-relaxed">
              <p>
                Sozo Bricks & Aluminium is a premier South African construction company dedicated to delivering high-quality aluminium installations and construction services. Based in Gauteng, we have built a reputation for strength, reliability, and premium workmanship.
              </p>
              <p>
                Whether it&apos;s a modern residential home or a large-scale commercial building, our team of detail-oriented installers ensures every project is executed with precision. We don&apos;t just install windows and doors; we build lasting value for your property.
              </p>
              <p className="font-bold text-brand-dark">
                We position ourselves as your trusted partner for all aluminium and construction needs, combining industrial strength with modern aesthetics.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-brand-gold pl-4">
                <h4 className="font-montserrat font-bold text-brand-dark uppercase tracking-wider mb-1">Residential</h4>
                <p className="text-sm text-gray-500">Custom solutions for your dream home.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-4">
                <h4 className="font-montserrat font-bold text-brand-dark uppercase tracking-wider mb-1">Commercial</h4>
                <p className="text-sm text-gray-500">Robust installations for business spaces.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
