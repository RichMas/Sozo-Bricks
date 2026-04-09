'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const leadData = {
      fullName: formData.get('fullName') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      createdAt: serverTimestamp(),
      status: 'new'
    };

    try {
      await addDoc(collection(db, 'leads'), leadData);
      setFormState('success');
    } catch (error) {
      console.error('Submission error:', error);
      setFormState('error');
      setErrorMessage('There was an error submitting your request. Please try again or contact us directly via WhatsApp.');
      try {
        handleFirestoreError(error, OperationType.WRITE, 'leads');
      } catch (e) {
        // Error already logged
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-red font-montserrat font-extrabold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-montserrat font-extrabold text-4xl text-brand-dark mb-8"
            >
              Let&apos;s Discuss Your <span className="text-brand-blue">Project</span>
            </motion.h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-brand-dark uppercase tracking-wider mb-1">Phone</h4>
                  <p className="font-inter text-gray-600">081 306 8023</p>
                  <p className="text-xs text-brand-red font-bold uppercase tracking-widest mt-1">Available on WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-red flex items-center justify-center shrink-0 shadow-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-brand-dark uppercase tracking-wider mb-1">Email</h4>
                  <p className="font-inter text-gray-600">info@sozobricksaluminium.co.za</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-gold flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="text-brand-dark" size={24} />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-brand-dark uppercase tracking-wider mb-1">Location</h4>
                  <p className="font-inter text-gray-600">Gauteng, South Africa</p>
                  <p className="text-xs text-gray-400 mt-1">Serving all surrounding areas</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-brand-blue text-white shadow-xl">
              <h4 className="font-montserrat font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-brand-gold" />
                Quick Chat
              </h4>
              <p className="font-inter text-sm text-white/70 mb-6">
                Need a quick answer? Chat with us directly on WhatsApp for instant assistance.
              </p>
              <a 
                href="https://wa.me/27813068023" 
                className="inline-block bg-brand-gold text-brand-dark px-6 py-3 font-montserrat font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                Open WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Industrial Texture */}
              <div className="absolute inset-0 bg-industrial opacity-5 pointer-events-none" />
              
              {formState === 'success' ? (
                <div className="py-20 text-center relative z-10">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="font-montserrat font-extrabold text-3xl text-brand-dark mb-4">Message Sent!</h3>
                  <p className="font-inter text-gray-600 mb-8">
                    Thank you for reaching out. One of our specialists will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="bg-brand-blue text-white px-8 py-3 font-montserrat font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10">
                  {formState === 'error' && (
                    <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 flex items-start gap-3 text-red-700">
                      <AlertCircle className="shrink-0" size={20} />
                      <p className="text-sm font-inter">{errorMessage}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label className="font-montserrat font-bold text-xs uppercase tracking-widest text-gray-500">Full Name</label>
                      <input 
                        required
                        name="fullName"
                        type="text" 
                        placeholder="John Doe"
                        suppressHydrationWarning
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 focus:outline-none focus:border-brand-blue transition-colors font-inter"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-montserrat font-bold text-xs uppercase tracking-widest text-gray-500">Phone Number</label>
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        placeholder="081 306 8023"
                        suppressHydrationWarning
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 focus:outline-none focus:border-brand-blue transition-colors font-inter"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label className="font-montserrat font-bold text-xs uppercase tracking-widest text-gray-500">Email Address</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="john@example.com"
                        suppressHydrationWarning
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 focus:outline-none focus:border-brand-blue transition-colors font-inter"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-montserrat font-bold text-xs uppercase tracking-widest text-gray-500">Service Required</label>
                      <select name="service" suppressHydrationWarning className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 focus:outline-none focus:border-brand-blue transition-colors font-inter appearance-none">
                        <option value="Aluminium Windows">Aluminium Windows</option>
                        <option value="Sliding Doors">Sliding Doors</option>
                        <option value="Stacker Doors">Stacker Doors</option>
                        <option value="Shopfronts">Shopfronts</option>
                        <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2 mb-10">
                    <label className="font-montserrat font-bold text-xs uppercase tracking-widest text-gray-500">Your Message</label>
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      suppressHydrationWarning
                      className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 focus:outline-none focus:border-brand-blue transition-colors font-inter resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit"
                    suppressHydrationWarning
                    className="w-full md:w-auto bg-brand-red text-white px-12 py-5 font-montserrat font-bold uppercase tracking-[0.2em] hover:bg-brand-blue transition-all duration-300 flex items-center justify-center gap-3 shadow-xl disabled:opacity-70"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Request'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
