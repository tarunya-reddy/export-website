import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const products = [
  {
    name: 'Fresh Fish',
    tagline: 'Straight from the sea',
    desc: 'A wide variety of fresh-caught and farm-raised fish including Rohu, Catla, Tilapia, and more. Available whole or cleaned on request.',
    img: 'https://t4.ftcdn.net/jpg/01/85/38/17/360_F_185381723_iLyNfQRVZg6Sk8FsZjst1pZtY6dYaPZ9.jpg',
    badge: 'Best Seller',
    badgeColor: 'bg-sky-500',
  },
  {
    name: 'Prawns (Shrimps)',
    tagline: 'Premium aquaculture harvested',
    desc: 'Fresh Tiger Prawns and Vannamei Shrimp sourced directly from our partner farms in the Kakinada coastal belt. Available in multiple sizes.',
    img: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&dpr=1',
    badge: 'Popular',
    badgeColor: 'bg-teal-500',
  },
  {
    name: 'Frozen Seafood',
    tagline: 'IQF processed & export-ready',
    desc: 'Individually Quick Frozen seafood for longer shelf life. Ideal for restaurants, retailers, and export buyers requiring quality frozen produce.',
    img: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&dpr=1',
    badge: 'Export Grade',
    badgeColor: 'bg-amber-500',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.55 } }),
};

export default function Products() {
  const openWhatsApp = (product: string) => {
    const msg = encodeURIComponent(`Hi, I'm interested in ${product} from HK Exports. Could you please share more details and pricing?`);
    window.open(`https://wa.me/918328481645?text=${msg}`, '_blank');
  };

  return (
    <section id="products" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">Our Products</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2">What We Offer</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Premium quality seafood from the Bay of Bengal coast, available for bulk and retail orders across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
                  {p.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-teal-500 font-medium mb-1">{p.tagline}</p>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{p.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                {/* <button
                  onClick={() => openWhatsApp(p.name)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-sky-50 to-teal-50 text-sky-700 border border-sky-100 text-sm font-semibold hover:from-sky-500 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Inquiry
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
