'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* Industrial Texture */}
      <div className="absolute inset-0 bg-industrial opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 bg-brand-blue rounded-sm flex items-center justify-center text-white font-montserrat font-black text-xl shadow-lg border-b-2 border-brand-red">
                  S
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-extrabold text-2xl leading-none text-white">
                  SOZO
                </span>
                <span className="font-montserrat font-bold text-[10px] tracking-widest text-brand-gold uppercase">
                  Bricks & Aluminium
                </span>
              </div>
            </Link>
            <p className="font-inter text-gray-400 text-sm leading-relaxed">
              Premium aluminium windows, doors, and construction specialists. We bring strength, reliability, and modern design to every project in Gauteng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg uppercase tracking-wider mb-8 border-l-4 border-brand-red pl-4">Quick Links</h4>
            <ul className="space-y-4 font-inter text-sm text-gray-400">
              {['Home', 'About Us', 'Our Services', 'Project Gallery', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-red" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg uppercase tracking-wider mb-8 border-l-4 border-brand-gold pl-4">Our Services</h4>
            <ul className="space-y-4 font-inter text-sm text-gray-400">
              {['Aluminium Windows', 'Sliding Doors', 'Stacker Doors', 'Shopfronts', 'Repairs & Maintenance'].map((service) => (
                <li key={service}>
                  <Link href="#services" className="hover:text-brand-gold transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-lg uppercase tracking-wider mb-8 border-l-4 border-brand-blue pl-4">Contact Us</h4>
            <ul className="space-y-6 font-inter text-sm text-gray-400">
              <li className="flex items-start gap-4">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <span>081 306 8023</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <span className="break-all">info@sozobricksaluminium.co.za</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-brand-gold shrink-0" size={18} />
                <span>Gauteng, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-inter text-xs text-gray-500">
            © {new Date().getFullYear()} Sozo Bricks & Aluminium. All Rights Reserved.
          </p>
          <div className="flex gap-8 font-inter text-xs text-gray-500">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-brand-red flex items-center justify-center hover:bg-brand-blue transition-colors shadow-lg"
            title="Back to Top"
            suppressHydrationWarning
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
