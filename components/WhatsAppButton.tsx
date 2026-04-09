'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/27813068023"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      title="Chat on WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-lg shadow-xl font-montserrat font-bold text-xs uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </div>
      <MessageSquare size={28} fill="currentColor" />
      <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></span>
    </motion.a>
  );
}
