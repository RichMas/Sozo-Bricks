'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Split Color */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-brand-red" />
        <div className="w-full md:w-1/2 bg-brand-blue" />
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-industrial opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-white text-center lg:text-left max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-montserrat font-extrabold text-4xl md:text-6xl mb-6 leading-tight"
            >
              Ready to Start Your <span className="text-brand-gold">Next Project?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-inter text-xl text-white/80 mb-8"
            >
              Get a free, no-obligation quote today. Our experts are ready to help you choose the best aluminium solutions for your space.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-full">
                  <Phone className="text-brand-gold" size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Call Us</p>
                  <p className="font-montserrat font-bold text-lg">081 306 8023</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-full">
                  <Mail className="text-brand-gold" size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Email Us</p>
                  <p className="font-montserrat font-bold text-lg">info@sozobricksaluminium.co.za</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 shadow-2xl w-full lg:w-auto min-w-[320px] border-t-8 border-brand-gold"
          >
            <h3 className="font-montserrat font-extrabold text-2xl text-brand-dark mb-8 uppercase tracking-tight">
              Get a Free Quote
            </h3>
            <div className="space-y-4">
              <Link
                href="https://wa.me/27813068023"
                className="w-full bg-green-600 text-white py-4 px-6 font-montserrat font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-green-700 transition-colors shadow-lg"
              >
                <MessageSquare size={20} />
                WhatsApp Us
              </Link>
              <Link
                href="tel:0813068023"
                className="w-full bg-brand-blue text-white py-4 px-6 font-montserrat font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-dark transition-colors shadow-lg"
              >
                <Phone size={20} />
                Call Now
              </Link>
              <Link
                href="#contact"
                className="w-full border-2 border-brand-red text-brand-red py-4 px-6 font-montserrat font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-red hover:text-white transition-all group"
              >
                Online Request
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
            <p className="mt-6 text-center text-xs text-gray-400 font-inter">
              * Response within 24 hours guaranteed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
