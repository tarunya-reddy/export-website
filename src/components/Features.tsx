import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Leaf } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Farm Fresh Quality',
    desc: 'Directly sourced from aquaculture farms along the Godavari delta — live to table with zero compromise on freshness.',
    color: 'teal',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Processing',
    desc: 'Handled under strict food safety standards ensuring every batch is clean, safe, and ready for consumption.',
    color: 'sky',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'Temperature-controlled logistics across India — your order reaches you at peak freshness, every time.',
    color: 'amber',
  },
];

const galleryImages = [
  'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
  'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
  'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
  'https://images.pexels.com/photos/3296434/pexels-photo-3296434.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
  'https://images.pexels.com/photos/209146/pexels-photo-209146.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
];

const colorMap: Record<string, string> = {
  teal: 'bg-teal-50 border-teal-100 text-teal-600 group-hover:bg-teal-500',
  sky: 'bg-sky-50 border-sky-100 text-sky-600 group-hover:bg-sky-500',
  amber: 'bg-amber-50 border-amber-100 text-amber-600 group-hover:bg-amber-500',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.55 } }),
};

export default function Features() {
  return (
    <>
      {/* Feature Cards */}
      <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2">
              The HK Exports Difference
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              const cls = colorMap[f.color];
              return (
                <motion.div
                  key={f.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-all duration-300 group-hover:text-white ${cls}`}>
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      {/* <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6"
          >
            From Our Waters
          </motion.p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
