import { Coffee, Users, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Sustainability() {
  return (
    <section className="bg-cafe-alt py-24 relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180 -translate-y-full">
         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-cafe-alt">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-8"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Our Commitment to Sustainability
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="absolute inset-0 border border-cafe-text rounded-tr-[80px] rounded-bl-[80px] -translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" 
              alt="Baristas making coffee" 
              className="w-full aspect-[4/3] object-cover rounded-tr-[80px] rounded-bl-[80px] relative z-10 border border-cafe-text"
            />
          </motion.div>

          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {[
              { icon: Heart, title: "Cozy Atmosphere", desc: "We are committed to our comedy matches from interior decoration match to our menu style." },
              { icon: Coffee, title: "Artisan Coffee", desc: "Our coffee is sourced from the best regions around the world and roasted to perfection." },
              { icon: Users, title: "Community Engagement", desc: "We believe in giving back to our community through events and local collaboration." },
              { icon: Star, title: "Exceptional Service", desc: "Our friendly and knowledgeable staff are dedicated to providing you with the best service." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full border border-cafe-text bg-cafe-accent flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_#2A332B]">
                  <item.icon size={20} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
