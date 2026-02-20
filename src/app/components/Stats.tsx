import { motion } from "motion/react";

const stats = [
  { value: "20+", label: "Properties Sold" },
  { value: "$30M+", label: "In Transactions" },
  { value: "98%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold"
          >
            Our Impact
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-yellow-600 mx-auto mt-4" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center p-10 border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-colors rounded-sm group"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-medium group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
