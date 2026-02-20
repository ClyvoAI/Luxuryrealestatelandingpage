import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Loader2, MapPin, Phone, Mail, FileText } from "lucide-react";

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      console.log("Form Data:", data);
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Thank you! Your message has been sent successfully.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Let's Discuss Your <span className="text-yellow-600 italic">Sanctuary</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Ready to find your dream property or have questions about the market? 
            Our team of experts is here to guide you every step of the way.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-slate-100 rounded-sm text-slate-900 group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-colors"><MapPin size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Visit Us</h4>
                <p className="text-slate-600 leading-relaxed w-full max-w-xs">
                  13-6-431/6A, LANGER HOUSE,<br/>
                  NEAR PILLAR NO 99, Netaji Nagar,<br/>
                  Hyderabad, Telangana - 500008
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-slate-100 rounded-sm text-slate-900 group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-colors"><Phone size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Call Us</h4>
                <p className="text-slate-600 group-hover:text-yellow-600 transition-colors">
                  <a href="tel:+919177837007">+91 9177837007</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-slate-100 rounded-sm text-slate-900 group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-colors"><Mail size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Email Us</h4>
                <p className="text-slate-600 group-hover:text-yellow-600 transition-colors">
                  <a href="mailto:sqrtron.ai@gmail.com">sqrtron.ai@gmail.com</a>
                </p>
              </div>
            </div>

             <div className="flex items-start gap-4 group">
              <div className="p-3 bg-slate-100 rounded-sm text-slate-900 group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-colors"><FileText size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">GSTIN</h4>
                <p className="text-slate-600 font-mono">
                  36ABPCS8056D1ZY
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-50 p-8 md:p-12 rounded-lg border border-slate-200 shadow-xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Name</label>
                <input 
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{String(errors.name.message)}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Phone</label>
                <input 
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="+91 ..."
                />
                 {errors.phone && <p className="text-red-500 text-xs mt-1">{String(errors.phone.message)}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Email</label>
              <input 
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="john@example.com"
              />
               {errors.email && <p className="text-red-500 text-xs mt-1">{String(errors.email.message)}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Message</label>
              <textarea 
                {...register("message", { required: "Message is required" })}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all resize-none text-slate-900 placeholder:text-slate-400"
                placeholder="I am interested in..."
              />
               {errors.message && <p className="text-red-500 text-xs mt-1">{String(errors.message.message)}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-sm transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest shadow-lg hover:shadow-slate-900/20"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
