'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-105">
                {/* Placeholder for the logo provided by user */}
                <div className="absolute inset-0 bg-brand-blue rounded-sm flex items-center justify-center text-white font-montserrat font-black text-xl md:text-2xl shadow-lg border-b-4 border-brand-red">
                  S
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-montserrat font-extrabold text-xl md:text-2xl leading-none tracking-tighter ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
                  SOZO
                </span>
                <span className={`font-montserrat font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase ${scrolled ? 'text-brand-red' : 'text-brand-gold'}`}>
                  Bricks & Aluminium
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-montserrat font-semibold text-sm uppercase tracking-wider transition-colors hover:text-brand-red ${
                  scrolled ? 'text-brand-dark' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:0813068023"
              className="bg-brand-red text-white px-6 py-2 rounded-none font-montserrat font-bold text-sm uppercase tracking-widest hover:bg-brand-blue transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              suppressHydrationWarning
              className={`${scrolled ? 'text-brand-dark' : 'text-white'} hover:text-brand-red focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-montserrat font-bold text-brand-dark text-lg uppercase tracking-wide hover:text-brand-red"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="tel:0813068023"
                  className="w-full bg-brand-blue text-white px-6 py-3 text-center font-montserrat font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  081 306 8023
                </Link>
                <Link
                  href="https://wa.me/27813068023"
                  className="w-full bg-green-600 text-white px-6 py-3 text-center font-montserrat font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
