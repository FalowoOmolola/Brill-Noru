import React from 'react';
import { Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import HeroImg from '../assets/HeroImg.jpg';
import HeroImg2 from '../assets/HeroImg2.jpg';
import HeroImage from '../assets/HeroImage.jpg';
import {
  Truck,
  Home as HomeIcon,
  BarChart,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Quote,
  ChevronRight
} from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* 1. Hero Section - Slide in from Left */}
      <section className="relative min-h-[650px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg2}
            alt="London Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* The Transparent Flipped "V" Shape */}
        <div
          className="absolute top-0 left-0 w-full h-45 bg-white/40 backdrop-blur-md z-10"
          style={{ clipPath: 'polygon(0 100%, 50% 20%, 100% 100%, 100% 0, 0 0)' }}
        ></div>

        <div className="max-w-7xl mx-auto px-5 md:px-15 sm:px-10 relative z-20 w-full pt-50">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-white pb-24"
          >
            <h1 className="text-4xl md:text-5xl sm:text-4xl font-black leading-[1.1] mb-6 tracking-tight uppercase italic">
              London's Reliable <br />
              Logistics & Moving Partner
            </h1>
            <p className="text-sm md:text-xl sm:text-xl mb-10 opacity-90 font-medium">
              Professional Van Delivery, Home Removals & Logistics <br className="hidden md:block" />
              Services Across London and Beyond.
            </p>
            <Link 
              to="/contact"
              className="bg-[#98D63D] text-black text-sm md:text-lg sm:text-lg px-6 md:px-8 py-3 md:py-4 rounded-md font-black hover:bg-black hover:text-white transition-all shadow-xl uppercase italic">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro & Floating Cards - Staggered Fade Up */}
      <section className="relative bg-white pt-20 pb-24 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left Column Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 pt-8"
            >
              <h2 className="text-4xl font-black mb-8 leading-tight italic uppercase">Your Trusted London <br /> Logistics Partner</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                Brill & Noru Logistics has been delivering excellence in transportation and moving services across London for over 15 years.
              </p>
            </motion.div>

            {/* Right Column: Floating Cards with Hover Lift */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 relative">
              {[
                { title: "Delivery", icon: <Truck size={36} />, desc: "Logistics Removals Services" },
                { title: "Man & Van", icon: <HomeIcon size={36} />, desc: "Removals Home Services" },
                { title: "Logistics", icon: <BarChart size={36} />, desc: "Transport & Logistics" }
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -12 }} // Interactive lift
                  className="bg-white p-10 rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border-b-10 border-[#98D63D] text-center cursor-default"
                >
                  <div className="text-[#98D63D] flex justify-center mb-6">
                    {s.icon}
                  </div>
                  <h3 className="font-black text-2xl mb-2 tracking-tight uppercase italic">{s.title}</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Lime Difference Banner - Scale In */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#98D63D] rounded-2xl p-10 shadow-xl"
        >
          <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-10">
            The Brill & Noru Difference
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-white">
            {[
              { icon: <ShieldCheck size={32} />, head: "Get Your Summary Quote", sub: "Instant & Secure" },
              { icon: <Clock size={32} />, head: "24/7 Availability", sub: "Reliable Service" },
              { icon: <MapPin size={32} />, head: "London Experts", sub: "Local Knowledge" }
            ].map((f, i) => (
              <div key={i} className={`flex items-center gap-4 ${i !== 2 ? 'md:border-r border-white/20' : ''}`}>
                <div className="bg-white/20 p-3 rounded-lg">
                  {f.icon}
                </div>
                <div>
                  <p className="font-black leading-tight uppercase text-sm">{f.head}</p>
                  <p className="text-[10px] opacity-80 font-bold italic uppercase">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. How it Works & Testimonials - Slide from opposite sides */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 overflow-hidden">
          
          {/* Left: How it Works List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black italic mb-10 tracking-tighter uppercase">How It Works</h2>
            <div className="space-y-6">
              {["Ready to Move or Ship?", "Schedule Your Service", "Request Your Quote", "View Our Services"].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 text-xl font-bold border-b border-slate-200 pb-4">
                  <span className="text-[#98D63D]">{idx + 1}.</span>
                  <span>{step}</span>
                  <ChevronRight className="text-slate-300 ml-auto" />
                </div>
              ))}
            </div>
            <Link to="/services" className="bg-[#98D63D] text-black px-8 py-4 rounded-md font-black shadow-lg hover:bg-black hover:text-white transition-all uppercase italic">
              View Our Services
            </Link>
          </motion.div>

          {/* Right: Testimonial Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative"
          >
            <Quote className="absolute top-6 left-6 text-slate-100 rotate-180" size={40} />
            <Quote className="absolute bottom-6 right-6 text-slate-100" size={40} />
            <div className="grid md:grid-cols-2 gap-10 relative z-10 h-full items-center">
              <Testimonial person="Sarah K." role="Business Manager" quote="Professional, efficient, and careful with our equipment." avatar="sarah" />
              <Testimonial person="James W." role="Home Owner" quote="Stress-free move. The team was punctual and handled everything with care." avatar="james" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Simple sub-component for testimonials to keep main code clean
const Testimonial = ({ person, role, quote, avatar }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full border-4 border-[#98D63D] p-1 mb-4">
      <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden">
        <img src={`https://i.pravatar.cc/150?u=${avatar}`} alt={person} className="w-full h-full object-cover" />
      </div>
    </div>
    <h4 className="font-black text-sm uppercase tracking-tighter">{person}</h4>
    <p className="text-[#98D63D] font-bold text-[10px] tracking-widest mb-3 uppercase">{role}</p>
    <p className="text-slate-500 text-xs italic leading-relaxed">"{quote}"</p>
  </div>
);

export default HomePage;