'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Residential Windows',
    category: 'Windows',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Commercial Stacker Doors',
    category: 'Doors',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Luxury Sliding Patio Doors',
    category: 'Doors',
    image: 'https://images.unsplash.com/photo-1600607687940-477a63bd399c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Architectural Window Design',
    category: 'Windows',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Retail Shopfront Installation',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Custom Folding Doors',
    category: 'Doors',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Windows', 'Doors', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-red font-montserrat font-extrabold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Our Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-dark"
            >
              Showcasing Our <span className="text-brand-blue">Premium Work</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                suppressHydrationWarning
                className={`px-6 py-2 font-montserrat font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-brand-red text-white' 
                    : 'bg-gray-100 text-gray-500 hover:bg-brand-blue hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden bg-brand-dark"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block bg-brand-gold text-brand-dark px-3 py-1 font-montserrat font-bold text-[10px] uppercase tracking-widest mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-montserrat font-extrabold text-2xl text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 bg-brand-red flex items-center justify-center">
                    <Maximize2 className="text-white" size={20} />
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
