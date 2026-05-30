import { motion } from 'framer-motion';
import { Fish, Package, Snowflake, Globe } from 'lucide-react';

const services = [
  {
    icon: Fish,
    title: 'Seafood Supply',
    desc: 'Regular and on-demand supply of fresh fish and prawns for restaurants, retailers, and households across India.',
    color: 'sky',
  },
  {
    icon: Package,
    title: 'Bulk Orders',
    desc: 'Large-volume orders handled with ease. Dedicated support for wholesalers, processors, and institutional buyers.',
    color: 'teal',
  },
  {
    icon: Snowflake,
    title: 'Cold Storage Handling',
    desc: 'Temperature-controlled storage and logistics ensuring freshness is preserved from farm to final delivery point.',
    color: 'blue',
  },
  {
    icon: Globe,
    title: 'Export Support',
    desc: 'End-to-end assistance for exporting seafood with proper packaging, documentation, and compliance support.',
    color: 'amber',
  },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string; hover: string }> = {
  sky:   { bg: 'bg-sky-50',   icon: 'text-sky-600 bg-sky-100',   border: 'border-sky-100',   hover: 'hover:border-sky-300 hover:bg-sky-50/80' },
  teal:  { bg: 'bg-teal-50',  icon: 'text-teal-600 bg-teal-100',  border: 'border-teal-100',  hover: 'hover:border-teal-300 hover:bg-teal-50/80' },
  blue:  { bg: 'bg-blue-50',  icon: 'text-blue-600 bg-blue-100',  border: 'border-blue-100',  hover: 'hover:border-blue-300 hover:bg-blue-50/80' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600 bg-amber-100', border: 'border-amber-100', hover: 'hover:border-amber-300 hover:bg-amber-50/80' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

export default function Services() {
  return (
    <section id="services" className="bg-stone-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2">Our Services</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            From farm-fresh supply to cold-chain logistics and export documentation — we handle it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const cls = colorClasses[s.color];
            return (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`bg-white rounded-2xl p-6 border ${cls.border} ${cls.hover} hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${cls.icon}`}>
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-base">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-teal-500 p-8 sm:p-10 text-center shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to Place an Order?</h3>
          <p className="text-sky-100 text-sm mb-6 max-w-lg mx-auto">
            Reach out to us for pricing, availability, and bulk order inquiries. We respond quickly.
          </p>
          <a
            href="tel:8328481645"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all duration-200 text-sm"
          >
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
