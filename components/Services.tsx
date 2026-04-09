'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Square, 
  Maximize, 
  Layers, 
  Store, 
  Wrench, 
  PenTool,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    title: 'Aluminium Windows',
    description: 'High-quality windows in all sizes, designed for durability and modern aesthetics.',
    icon: Square,
    benefit: 'Energy Efficient'
  },
  {
    title: 'Sliding Doors',
    description: 'Smooth-operating sliding doors that seamlessly connect your indoor and outdoor spaces.',
    icon: Maximize,
    benefit: 'Space Saving'
  },
  {
    title: 'Folding / Stacker Doors',
    description: 'Premium folding doors for wide openings, perfect for entertainment areas and patios.',
    icon: Layers,
    benefit: 'Wide Openings'
  },
  {
    title: 'Shopfronts',
    description: 'Professional aluminium shopfronts for commercial properties and retail stores.',
    icon: Store,
    benefit: 'Business Ready'
  },
  {
    title: 'Repairs & Installations',
    description: 'Expert repair services and professional installations for all aluminium products.',
    icon: Wrench,
    benefit: 'Expert Care'
  },
  {
    title: 'Custom Designs',
    description: 'Bespoke aluminium solutions tailored to your specific architectural requirements.',
    icon: PenTool,
    benefit: 'Unique Style'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-industrial opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-montserrat font-extrabold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-dark mb-6"
          >
            Premium <span className="text-brand-blue">Aluminium Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-inter text-gray-600 text-lg"
          >
            We specialize in a wide range of aluminium and construction services, ensuring every installation is built to last.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-b-4 border-transparent hover:border-brand-red relative overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-blue/10 flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors duration-500">
                  <service.icon className="text-brand-blue group-hover:text-white transition-colors duration-500" size={32} />
                </div>
                
                <h3 className="font-montserrat font-extrabold text-2xl text-brand-dark mb-4 group-hover:text-brand-blue transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="font-inter text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-brand-gold">
                    {service.benefit}
                  </span>
                  <ArrowUpRight className="text-brand-red opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
