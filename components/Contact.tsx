import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all fields.");
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      // 1. Submit to Formspree for real email notification
      const formspreeResponse = await fetch('https://formspree.io/f/mgollyzo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.fullName}`
        })
      });

      if (!formspreeResponse.ok) {
        throw new Error('Formspree submission failed');
      }

      // 2. Generate AI-powered acknowledgment for the user
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are the AI Assistant for Lucas Allen, a Web Developer in Toronto. 
                   A client named ${formData.fullName} just sent a message.
                   
                   Write a short (max 2 sentences), professional, and warm acknowledgment. 
                   Mention that Lucas will get back to them within 24 hours. 
                   Address them by their first name.`,
      });

      const text = response.text;
      setAiResponse(text || "Thank you for reaching out! Lucas has received your message and will be in touch shortly.");
      setStatus('sent');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage("Something went wrong while sending your message. Please try again or email Lucas directly.");
      setStatus('error');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="py-32"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-normal mb-6 text-[var(--text-primary)]">Get In Touch</h1>
        <p className="text-xl font-light opacity-60 mb-16 max-w-2xl">
          Have a project in mind or just want to chat? Reach out and I'll get back to you within 24 hours.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[var(--bg-secondary)] border border-green-500/30 rounded-3xl p-10 text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-normal text-[var(--text-primary)]">Message Sent!</h3>
                  <div className="p-6 bg-[var(--bg-primary)] border border-[var(--border)] rounded-2xl italic text-[var(--text-secondary)] font-light leading-relaxed">
                    "{aiResponse}"
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        disabled={status === 'sending'}
                        className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] transition-all font-light disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com" 
                        disabled={status === 'sending'}
                        className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] transition-all font-light disabled:opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="How can I help you?" 
                      disabled={status === 'sending'}
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] transition-all font-light resize-none disabled:opacity-50"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                    >
                      <AlertCircle size={16} />
                      {errorMessage}
                    </motion.div>
                  )}
                  
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center gap-3 px-10 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full text-sm font-semibold hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === 'sending' ? (
                      <>Sending... <Loader2 size={16} className="animate-spin" /></>
                    ) : (
                      <>Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
          
          <div className="space-y-12 lg:pl-12">
            <div className="flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-[var(--text-primary)] font-medium mb-1">Email Address</h4>
                <a href="mailto:lucasallen624@gmail.com" className="text-sm font-light opacity-60 hover:opacity-100 transition-opacity">
                  lucasallen624@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] transition-all duration-300">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-[var(--text-primary)] font-medium mb-1">Phone Number</h4>
                <a href="tel:+16479210042" className="text-sm font-light opacity-60 hover:opacity-100 transition-opacity">
                  647-921-0042
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-[var(--border)]">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-muted)] mb-4">Availability</h4>
              <p className="text-sm font-light leading-relaxed opacity-60">
                Currently taking on select freelance projects for Q1 2026. Weekly availability: 20-30 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;