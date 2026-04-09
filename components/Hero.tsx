'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, MessageSquare, Shield, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop")',
            backgroundPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-transparent" />
        <div className="absolute inset-0 bg-industrial opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-red text-white px-4 py-1 font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Gauteng&apos;s Trusted Contractor
            </span>
            <h1 className="font-montserrat font-extrabold text-5xl md:text-7xl text-white leading-tight mb-6 text-shadow-md">
              Aluminium <span className="text-brand-gold">Windows & Doors</span> Specialists
            </h1>
            <p className="font-inter text-xl text-gray-200 mb-10 max-w-lg leading-relaxed">
              Built Strong. Installed Right. Premium aluminium installations for residential and commercial projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="group bg-brand-red text-white px-8 py-4 font-montserrat font-bold uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
              >
                Get a Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <div className="flex gap-2">
                <Link
                  href="tel:0813068023"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center justify-center"
                  title="Call Now"
                >
                  <Phone size={24} />
                </Link>
                <Link
                  href="https://wa.me/27813068023"
                  className="bg-green-600 text-white p-4 hover:bg-green-700 transition-all duration-300 flex items-center justify-center shadow-lg"
                  title="WhatsApp Us"
                >
                  <MessageSquare size={24} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
          >
            <div className="flex items-center gap-3 text-white/80">
              <Shield className="text-brand-gold shrink-0" size={20} />
              <span className="text-xs md:text-sm font-montserrat font-bold uppercase tracking-wider">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Clock className="text-brand-gold shrink-0" size={20} />
              <span className="text-xs md:text-sm font-montserrat font-bold uppercase tracking-wider">Fast Installation</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <CheckCircle className="text-brand-gold shrink-0" size={20} />
              <span className="text-xs md:text-sm font-montserrat font-bold uppercase tracking-wider">Free Quotes</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-brand-gold/20 backdrop-blur-sm skew-x-[-30deg] translate-x-12 hidden lg:block" />
    </section>
  );
}
