import { Fish, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              {/* <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Fish className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div> */}
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-sky-200 transition-shadow duration-300">
                <img
                    src="/dist/assets/neww.png"
                    alt="Logo"
                    className="w-full h-full rounded-lg object-cover"
                />
            </div>
              <div>
                <p className="font-bold text-white text-base tracking-wide">HK EXPORTS</p>
                <p className="text-[10px] text-teal-400 tracking-widest uppercase font-medium">Seafood &amp; Aquaculture</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Fresh fish and prawns delivered across India. Sourced from the pristine coastal farms of Kakinada, Andhra Pradesh.
            </p>
            {/* <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 text-sm hover:text-sky-400 transition-colors hover:translate-x-0.5 inline-flex items-center gap-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact Details</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <a href="tel:8328481645" className="text-slate-400 text-sm hover:text-sky-400 transition-colors">
                  8328481645
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:himakanth072@gmail.com" className="text-slate-400 text-sm hover:text-teal-400 transition-colors break-all">
                  himakanth072@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Kakinada, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} HK Exports. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Kakinada, Andhra Pradesh — India
          </p>
        </div>
      </div>
    </footer>
  );
}
