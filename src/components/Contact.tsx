import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2">Contact Us</h2>
          <p className="text-slate-500 mt-3 max-w-md mx-auto text-sm">
            Have a question or ready to order? Reach out and we'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Phone, label: 'Phone', value: '8328481645', href: 'tel:8328481645', color: 'sky' },
              { icon: Mail, label: 'Email', value: 'himakanth072@gmail.com', href: 'mailto:himakanth072@gmail.com', color: 'teal' },
              { icon: MapPin, label: 'Location', value: 'Kakinada, Andhra Pradesh, India', href: null, color: 'amber' },
            ].map((item) => {
              const Icon = item.icon;
              const colorBg: Record<string, string> = { sky: 'bg-sky-50 border-sky-100', teal: 'bg-teal-50 border-teal-100', amber: 'bg-amber-50 border-amber-100' };
              const colorIcon: Record<string, string> = { sky: 'bg-sky-100 text-sky-600', teal: 'bg-teal-100 text-teal-600', amber: 'bg-amber-100 text-amber-600' };
              return (
                <div key={item.label} className={`flex items-start gap-4 p-5 rounded-xl border ${colorBg[item.color]}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorIcon[item.color]}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-700 font-medium text-sm hover:text-sky-600 transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-700 font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm aspect-[4/3] mt-4">
              <iframe
                title="HK Exports Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122085.21887034937!2d82.15989385!3d16.9890625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382226b3b6e9a3%3A0x8419a9a43e14b56f!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-stone-50 rounded-2xl border border-slate-100 p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-slate-800 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your requirements — product, quantity, delivery location..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
