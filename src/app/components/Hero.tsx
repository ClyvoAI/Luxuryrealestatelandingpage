import { motion } from "motion/react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1759412954551-107b6be24dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMG1hbnNpb24lMjBzdW5zZXQlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxNTYzNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold tracking-tight mb-6 drop-shadow-2xl">
            Find Your <span className="text-yellow-500 italic font-light">Sanctuary</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-200 max-w-3xl mb-12 font-light leading-relaxed drop-shadow-md"
        >
          Experience the pinnacle of luxury living. Squaretron Realtors connects you with Hyderabad's most exclusive properties.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={scrollToContact}
          className="bg-yellow-600 hover:bg-yellow-500 text-white text-lg font-semibold px-12 py-4 rounded-sm shadow-xl hover:shadow-yellow-500/20 transition-all uppercase tracking-widest border border-yellow-500/50"
        >
          Begin Your Journey
        </motion.button>
      </div>
    </section>
  );
}
