import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* 1. Text Content - Slower Slide from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className="text-[#98D63D] font-black tracking-[0.3em] uppercase mb-4 text-sm">Our History</h2>
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">
              Moving London <br/> Since 2008
            </h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              Founded by partners **James Brill and Leo Noru**, our company began with a single van and a commitment to reliable service. Today, we are a trusted name for deliveries and logistics across the capital.
            </p>
            
            {/* Mission Cards - Staggered Slide */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "OUR MISSION", text: "To provide reliable, efficient, and customer-focused transportation services." },
                { title: "OUR CARE", text: "We handle every item as if it were our own, ensuring safety and trust." }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + (i * 0.2) }}
                  className="bg-slate-50 p-6 rounded-xl border-l-4 border-[#98D63D] hover:shadow-md transition-shadow"
                >
                  <h3 className="font-black text-xl mb-2 italic tracking-tight">{card.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{card.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats - Pop up with delay */}
            <div className="flex gap-12">
              {[
                { val: "15+", label: "Years Experience" },
                { val: "10k+", label: "Successful Moves" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 + (i * 0.2) }}
                >
                  <p className="text-5xl font-black text-[#98D63D] italic">{stat.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2. Visual Grid - Slower Slide from Right */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:w-1/2 grid grid-cols-2 gap-4 w-full"
          >
            {/* Top Left: Reliable Block */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="h-64 bg-slate-900 rounded-[2.5rem] flex items-end p-8 shadow-xl"
            >
                <span className="text-[#98D63D] font-black text-3xl italic tracking-tighter">RELIABLE</span>
            </motion.div>

            {/* Top Right: Lime Block */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="h-64 bg-[#98D63D] rounded-[2.5rem] shadow-xl shadow-[#98D63D]/20" 
            />

            {/* Bottom: London Block */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="h-64 bg-slate-100 rounded-[2.5rem] col-span-2 overflow-hidden shadow-inner flex items-center justify-center relative group"
            >
               <div className="w-full h-full flex items-center justify-center font-black text-slate-200 text-6xl md:text-8xl italic tracking-tighter transition-colors group-hover:text-slate-300">
                 LONDON
               </div>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;