import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-transparent py-24 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-5xl md:text-6xl font-serif text-center mb-16">
          Our Story
        </h1>

        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-serif mb-6">A Passion for Coffee</h2>
            <p className="opacity-80 leading-relaxed mb-6">
              Founded in 2020, Nagi was born out of a shared passion for exceptional coffee and the desire to create a welcoming space for our community. We started as a small cart at the local farmer's market, driven by our love for the craft and a commitment to quality.
            </p>
            <p className="opacity-80 leading-relaxed mb-6">
              Over the years, we've grown into a beloved neighborhood fixture, but our core values remain the same: ethical sourcing, meticulous roasting, and serving every cup with a smile. We believe that coffee is more than just a beverage; it's a ritual, a moment of pause, and a way to connect with others.
            </p>
            <div className="pt-8 border-t border-cafe-text/20 mt-8">
              <h3 className="font-serif text-xl mb-4">Our Values</h3>
              <ul className="space-y-3 opacity-80 list-disc list-inside">
                <li>Ethically Sourced Beans from Direct Trade Partners</li>
                <li>Sustainable & Zero-Waste Practices</li>
                <li>Fostering Community Connection</li>
                <li>Uncompromising Artisanal Craftsmanship</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
             <div className="absolute inset-0 border border-cafe-accent rounded-tl-[80px] rounded-br-[80px] translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop" 
              alt="Pouring coffee" 
              className="w-full aspect-[4/3] object-cover rounded-tl-[80px] rounded-br-[80px] relative z-10 border border-cafe-text shadow-sm"
            />
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
