import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="px-8 pt-12 pb-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col items-start z-10"
      >
        <h1 className="text-6xl md:text-[5.5rem] font-serif leading-[1.05] tracking-tight mb-6">
          The Perfect Blend of <br/>Aroma & Ambiance
        </h1>
        
        <p className="text-lg md:text-xl font-medium opacity-80 mb-8 max-w-md">
          We're committed to ethical sourcing and sustainable practices for a better coffee experience.
        </p>
        
        <Link to="/shop" className="bg-cafe-accent text-cafe-text border border-cafe-text rounded-full px-8 py-4 font-bold text-sm shadow-[3px_3px_0px_0px_#2A332B] hover:shadow-[1px_1px_0px_0px_#2A332B] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-block">
          Explore Our Specials
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-1/2 relative"
      >
        {/* Abstract shapes behind image */}
        <div className="absolute inset-0 border border-cafe-accent rounded-tl-[80px] rounded-br-[80px] translate-x-4 translate-y-4"></div>
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" 
          alt="Coffee and croissant" 
          className="w-full aspect-[4/3] object-cover rounded-tl-[80px] rounded-br-[80px] relative z-10 border border-cafe-text shadow-sm"
        />
      </motion.div>
    </section>
  );
}
