import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Home as HomeIcon, CheckCircle } from 'lucide-react';
import DeliveryServices from '../assets/DeliveryServices.jpg';
import Mover1 from '../assets/Mover1.jpg';

const Services = () => {
  const detailedServices = [
    {
      title: "Delivery Services",
      desc: "Reliable van delivery for parcels, packages, and goods of all sizes. We offer same-day and scheduled deliveries across London with business-to-business and business-to-client solutions.",
      features: ["Same-day delivery", "Parcel & Pallet", "Route Planning", "Real-time Tracking"],
      icon: <Truck size={48} />,
      img: DeliveryServices,
      side: 'right'
    },
    {
      title: "Removals & Home Movers",
      desc: "Stress-free home and office removals handled by professional teams. We provide expert packing, transportation, and unpacking services for local, national, and international moves.",
      features: ["Full Packing Service", "Fragile Item Care", "Furniture Assembly", "Storage Solutions"],
      icon: <HomeIcon size={48} />,
      img: Mover1,
      side: 'left'
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* 1. Page Header - Slower Entrance */}
      <section className="bg-slate-900 py-32 text-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }} // Increased from 0.8
          className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase relative z-10"
        >
          OUR <span className="text-[#98D63D]">SERVICES</span>
        </motion.h1>
      </section>

      {/* 2. Services Breakdown */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        {detailedServices.map((service, i) => (
          <div 
            key={i} 
            className={`flex flex-col lg:flex-row items-center gap-16 mb-40 ${
              service.side === 'left' ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content - Slower Slide */}
            <motion.div 
              initial={{ opacity: 0, x: service.side === 'right' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }} // Increased duration
              className="lg:w-1/2"
            >
              <div className="text-[#98D63D] mb-6">{service.icon}</div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none">
                {service.title}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                {service.desc}
              </p>
              
              {/* Features - Kept Staggering but slowed the individual fade */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {service.features.map((feat, idx) => (
                  <motion.div 
                    key={feat}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // Staggering kept, but the animation itself is slightly longer
                    transition={{ delay: 0.5 + (idx * 0.15), duration: 0.6 }} 
                    viewport={{ once: true }}
                    className="flex items-center gap-2 font-black text-xs uppercase tracking-tight text-slate-800"
                  >
                    <CheckCircle size={18} className="text-[#98D63D] flex-shrink-0" />
                    {feat}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Container - Slower Scale and Fade */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: service.side === 'right' ? 100 : -100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }} // Matches the text timing
              className="lg:w-1/2 w-full h-[300px] md:h-[450px] bg-slate-100 rounded-[2rem] overflow-hidden relative group shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#98D63D]/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <motion.img
                src={service.img}
                alt={service.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }} // Slower hover zoom
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;