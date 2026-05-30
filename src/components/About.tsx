import { motion } from 'framer-motion';
import { Target, Eye, MapPin, Award } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.55 } }),
};

export default function About() {
  return (
    <section id="about" className="bg-stone-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://www.deccanchronicle.com/h-upload/2026/02/21/2013873-20rdc6.webp"
                alt="Aquaculture farm"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Most Trusted</p>
                  <p className="text-xs text-slate-500">Kakinada, AP</p>
                </div>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-full -z-10 opacity-60" />
          </motion.div>

          {/* Text column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 leading-tight">
                Rooted in Kakinada,<br />Reaching Across India
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-2 text-slate-500"
            >
              <MapPin className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Kakinada, Andhra Pradesh — the heart of India's aquaculture coast</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-600 leading-relaxed"
            >
              HK Exports is a dedicated seafood supply and export business specializing in fresh fish and prawns.
              Operating from the rich aquaculture belt of Andhra Pradesh, we source directly from trusted local farms
              along the Godavari delta to ensure peak freshness in every order.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 text-sm leading-relaxed"
            >
              We supply both retail and wholesale customers across India, with a strong commitment to quality,
              hygiene, and timely delivery. Whether you need a small order or a large bulk shipment, we deliver with the same care and consistency.
            </motion.p>

            {/* Mission & Vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  desc: 'To deliver the freshest seafood from farm to consumer with transparency, quality, and care.',
                  color: 'sky',
                },
                {
                  icon: Eye,
                  title: 'Our Vision',
                  desc: 'To become a leading seafood export name trusted by buyers across India and beyond.',
                  color: 'teal',
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`p-5 rounded-xl border ${card.color === 'sky' ? 'bg-sky-50 border-sky-100' : 'bg-teal-50 border-teal-100'}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${card.color === 'sky' ? 'bg-sky-100 text-sky-600' : 'bg-teal-100 text-teal-600'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-1">{card.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
