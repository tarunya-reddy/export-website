import { motion } from 'framer-motion';
import { ChevronDown, ShoppingBag, MessageCircle } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://www.globalseafood.org/wp-content/uploads/2018/12/Thai-prawn-farm_SS_1500.jpg"
          alt="Fresh seafood"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-sky-950/70 to-teal-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      {/* Decorative overlay texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #0ea5e9 0%, transparent 50%), radial-gradient(circle at 80% 20%, #14b8a6 0%, transparent 50%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 backdrop-blur-sm">
            Kakinada, Andhra Pradesh
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4"
        >
          HK{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300">
            EXPORTS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl sm:text-2xl text-sky-100/90 font-light mb-4 max-w-2xl mx-auto leading-relaxed"
        >
          Fresh Fish &amp; Prawns Delivered Across India
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-slate-300/80 text-base mb-10 max-w-lg mx-auto"
        >
          Sourced from the pristine waters of the Bay of Bengal — farm fresh, hygienically processed, and swiftly delivered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-sky-500/30 hover:-translate-y-1 transition-all duration-300 text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </button>
          <button
            onClick={() => scrollTo('#products')}
            className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/25 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 text-base"
          >
            <ShoppingBag className="w-5 h-5" />
            View Products
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: '100%', label: 'Farm Fresh' },
            { value: 'Pan India', label: 'Delivery' },
            { value: 'Bulk', label: 'Orders Accepted' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sky-300/80 text-sm font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 text-white/60"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
