import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Truck, Home as HomeIcon, User, BarChart, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Removals',
    collectionPostcode: '',
    deliveryPostcode: '',
    description: '',
    preferredDate: '',
    heardAboutUs: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request Submitted:', formData);
    // Here you would typically send data to a backend or an email service
    alert('Thank you for choosing us! We will be in touch shortly.');
    // Reset form or redirect
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white italic tracking-tighter"
        >
          GET IN <span className="text-[#98D63D]">TOUCH</span>
        </motion.h1>
      </section>

      {/* Contact Details & Form */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">
        
        {/* Contact Information Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 space-y-10"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight wrap-break-word">Your Journey Starts Here.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Ready to book a service or have questions? Our friendly team is here to help you every step of the way.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border w-[95%] sm:w-full border-slate-100">
              <div className="bg-[#98D63D] p-3 rounded-full text-black mt-1 shadow-md">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-1">CALL US</p>
                <a href="tel:02081234567" className="font-black text-2xl hover:text-[#98D63D] transition-colors">020 8123 4567</a>
              </div>
            </div>
            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border w-[95%] sm:w-full border-slate-100">
              <div className="bg-[#98D63D] p-3 rounded-full text-black mt-1 shadow-md">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-1">EMAIL US</p>
                <a href="mailto:info@brillnorulogistics.co.uk" className="font-black text-lg hover:text-[#98D63D] transition-colors">info@brillnorulogistics.co.uk</a>
              </div>
            </div>
            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border w-[95%] sm:w-full border-slate-100">
              <div className="bg-[#98D63D] p-3 rounded-full text-black mt-1 shadow-md">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-1">VISIT US</p>
                <address className="font-black text-lg not-italic">Unit 12, Riverside Business Park, London, E16 1TY</address>
              </div>
            </div>
            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border w-[95%] sm:w-full border-slate-100">
              <div className="bg-[#98D63D] p-3 rounded-full text-black mt-1 shadow-md">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-1">OPERATING HOURS</p>
                <p className="font-black text-lg">Mon-Sun, 7:00 AM - 10:00 PM</p>
                <p className="text-sm text-slate-500">(Emergency services available)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote Request Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2"
        >
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-[95%] sm:w-full border-t-8 border-[#98D63D]">
            <h3 className="text-3xl font-black mb-10 leading-snug">Book Your Move Today!</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-600">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#98D63D] focus:border-transparent outline-none transition-colors" 
                />
              </div>
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-600">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#98D63D] focus:border-transparent outline-none transition-colors" 
                />
              </div>
              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate-600">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#98D63D] focus:border-transparent outline-none transition-colors" 
                />
              </div>
              {/* Service Type */}
              <div className="space-y-2">
                <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-widest text-slate-600">Service Type</label>
                <select 
                  id="serviceType" 
                  name="serviceType" 
                  value={formData.serviceType} 
                  onChange={handleChange} 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#98D63D] focus:border-transparent outline-none appearance-none transition-colors cursor-pointer"
                >
                  <option value="Removals">Home & Office Removals</option>
                  <option value="Delivery">Van Delivery Services</option>
                  <option value="Man & Van">Man & Van Hire</option>
                  <option value="Logistics">Business Logistics Solutions</option>
                </select>
              </div>
              {/* Collection Postcode */}
              <div className="space-y-2">
                <label htmlFor="collectionPostcode" className="text-xs font-bold uppercase tracking-widest text-slate-600">Collection Postcode</label>
                <input 
                  type="text" 
                  id="collectionPostcode" 
                  name="collectionPostcode" 
                  value={formData.collectionPostcode} 
                  onChange={handleChange} 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#98D63D] focus:border-transparent outline-none transition-colors" 
                />
              </div>
              {/* Delivery Postcode */}
              <div className="space-y-2">
                <label htmlFor="deliveryPostcode" className="text-xs font-bold uppercase tracking-widest text-slate-600">Delivery Postcode (if different)</label>
                <input 
                  type="text" 
                  id="deliveryPostcode" 
                  name="deliveryPostcode" 
                  value={formData.deliveryPostcode} 
                  onChange={handleChange} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#98D63D] focus:border-transparent outline-none transition-colors" 
                />
              </div>
              {/* Preferred Date */}
              <div className="space-y-2">
                <label htmlFor="preferredDate" className="text-xs font-bold uppercase tracking-widest text-slate-600">Preferred Date</label>
                <input 
                  type="date" 
                  id="preferredDate" 
                  name="preferredDate" 
                  value={formData.preferredDate} 
                  onChange={handleChange} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#98D63D] focus:border-transparent outline-none transition-colors" 
                />
              </div>
              {/* How you heard about us */}
              <div className="space-y-2">
                <label htmlFor="heardAboutUs" className="text-xs font-bold uppercase tracking-widest text-slate-600">How did you hear about us?</label>
                <select 
                  id="heardAboutUs" 
                  name="heardAboutUs" 
                  value={formData.heardAboutUs} 
                  onChange={handleChange} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#98D63D] focus:border-transparent outline-none appearance-none transition-colors cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="Google">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Recommendation">Recommendation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Description */}
              <div className="md:col-span-2 space-y-2">
                <label htmlFor="description" className="text-xs font-bold uppercase tracking-widest text-slate-600">Tell us about your items/service needed</label>
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  rows="5" 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#98D63D] focus:border-transparent outline-none transition-colors resize-y"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="md:col-span-2 w-full bg-[#98D63D] py-5 rounded-xl font-black text-xl text-black uppercase hover:bg-black hover:text-white transition-all transform hover:scale-[1.01] shadow-lg shadow-[#98D63D]/30"
            >
              SEND QUOTE REQUEST
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;