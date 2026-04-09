'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CloudRain, 
  Sparkles, 
  UserCheck, 
  Building2,
  Check
} from 'lucide-react';

const reasons = [
  {
    title: 'Built for Strength',
    description: 'We use high-grade aluminium and materials to ensure every installation stands the test of time.',
    icon: ShieldCheck
  },
  {
    title: 'Weather Resistant',
    description: 'Our products are designed to withstand South Africa&apos;s harsh weather conditions without corroding.',
    icon: CloudRain
  },
  {
    title: 'Modern Finishes',
    description: 'Sleek, contemporary designs that enhance the aesthetic appeal of any property.',
    icon: Sparkles
  },
  {
    title: 'Reliable Installation',
    description: 'Our team of professionals ensures every job is done right the first time, with no shortcuts.',
    icon: UserCheck
  },
  {
    title: 'Residential & Commercial',
    description: 'From private homes to large business complexes, we handle projects of all scales.',
    icon: Building2
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
      {/* Industrial Texture Overlay */}
      <div className="absolute inset-0 bg-industrial opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold font-montserrat font-extrabold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              The Sozo Advantage
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-montserrat font-extrabold text-4xl md:text-5xl mb-8 leading-tight"
            >
              Why Choose <span className="text-brand-gold">Sozo Bricks & Aluminium?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-inter text-gray-300 text-lg mb-10 leading-relaxed"
            >
              We combine years of industry experience with a commitment to quality that is unmatched. Our focus is on providing durable, beautiful, and functional solutions for every client.
            </motion.p>

            <div className="space-y-4">
              {['Quality Guaranteed', 'Free On-site Quotes', 'Professional Team', 'Competitive Pricing'].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-brand-gold p-1 rounded-full">
                    <Check className="text-brand-blue" size={16} />
                  </div>
                  <span className="font-montserrat font-bold uppercase tracking-widest text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <reason.icon className="text-brand-gold mb-6" size={40} />
                <h3 className="font-montserrat font-bold text-xl mb-3 uppercase tracking-wider">
                  {reason.title}
                </h3>
                <p className="font-inter text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
