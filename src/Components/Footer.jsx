import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <span className="text-3xl font-black italic tracking-tighter">
              BRILL <span className="text-[#DFFF00]">&</span> NORU
            </span>
            <p className="text-slate-400 leading-relaxed">
              London's premier logistics and removals specialists. We move your world with care and precision.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#DFFF00] hover:text-black transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-[#DFFF00] font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Book Us Now</Link></li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="text-[#DFFF00] font-bold uppercase tracking-widest mb-6">Coverage</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Central London</li>
              <li>North & South London</li>
              <li>East & West London</li>
              <li>Greater London</li>
              <li>UK-Wide Removals</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-[#DFFF00] font-bold uppercase tracking-widest mb-6">Stay Updated</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-800 border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-[#DFFF00] outline-none"
              />
              <button className="absolute right-2 top-2 bg-[#DFFF00] text-black p-2 rounded-md hover:scale-105 transition-transform">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© 2026 Brill & Noru Logistics Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;