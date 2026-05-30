import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home'); }} className="flex items-center gap-2.5 group">
            {/* <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-sky-200 transition-shadow duration-300">
              <Fish className="w-5 h-5 text-white" strokeWidth={1.8} />
            </div> */}
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-sky-200 transition-shadow duration-300">
                <img
                    src="https://i.pinimg.com/originals/18/4e/c6/184ec6786e08ade9274216a510390008.png"
                    alt="Logo"
                    className="w-full h-full rounded-lg object-cover"
                />
            </div>
            <div className="leading-none">
              <span className={`font-bold text-lg tracking-wide transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                HK EXPORTS
              </span>
              <p className={`text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 ${scrolled ? 'text-teal-600' : 'text-sky-200'}`}>
                Seafood &amp; Aquaculture
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-sky-50 hover:text-sky-600 ${
                  scrolled ? 'text-slate-600' : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:8328481645"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${scrolled ? 'text-slate-600 hover:text-sky-600' : 'text-white/80 hover:text-white'}`}
            >
              {/* <Phone className="w-4 h-4" /> */}
              <span></span>
            </a>
            <button
              onClick={() => handleNav('#contact')}
              className="px-4 py-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="block w-full text-left px-4 py-3 text-slate-700 text-sm font-medium rounded-lg hover:bg-sky-50 hover:text-sky-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-100">
                <a href="tel:8328481645" className="flex items-center gap-2 px-4 py-3 text-slate-600 text-sm">
                  <Phone className="w-4 h-4 text-sky-500" /> 8328481645
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
