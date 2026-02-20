import { motion } from "motion/react";
import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about-us" className="py-24 bg-white overflow-hidden relative">
       {/* Background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform translate-x-20 z-0" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-500/30 rounded-sm z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          <img 
            src="https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3NzE1NjU4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Modern Office" 
            className="relative z-10 w-full aspect-[4/3] object-cover shadow-2xl rounded-sm grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
            About Squaretron
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Eight Years of <span className="text-yellow-600 italic">Market Excellence</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 text-justify">
            At Squaretron Realtors Private Limited, we redefine the art of real estate. 
            For over eight years, we have been the trusted partner for Hyderabad's elite, 
            connecting visionary clients with properties that reflect their ambition and success. 
            Our deep market knowledge and unwavering commitment to integrity ensure your journey is seamless.
          </p>
          
          <ul className="space-y-4">
             {["Premium Residential Portfolio", "Expert Market Analysis & Valuation", "Personalized Transaction Management"].map(item => (
               <li key={item} className="flex items-center gap-3 text-slate-800 font-medium">
                 <span className="flex-shrink-0 w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center shadow-md">
                    <Check size={14} strokeWidth={3} />
                 </span>
                 {item}
               </li>
             ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
