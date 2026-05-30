import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsApp() {
  const [hovered, setHovered] = useState(false);

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi! I'm interested in your seafood products from HK Exports. Could you please share more details?");
    window.open(`https://wa.me/918328481645?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 max-w-[200px]"
          >
            <p className="text-slate-700 text-xs font-semibold">Chat with us!</p>
            <p className="text-slate-400 text-xs mt-0.5">We typically reply instantly</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={openWhatsApp}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-300/40 hover:shadow-xl hover:shadow-green-300/50 transition-shadow duration-300 relative"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
      </motion.button>
    </div>
  );
}
