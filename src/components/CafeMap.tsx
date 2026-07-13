import { motion } from 'motion/react';

export default function CafeMap() {
  return (
    <section className="bg-transparent py-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-8"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
          Find Us Here
        </h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full relative border border-cafe-text shadow-[6px_6px_0px_0px_#2A332B] rounded-xl overflow-hidden h-[500px]"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246110996!2d-87.65330368455856!3d41.89985957922129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33583597b1b%3A0x6b77242131faec98!2sIntelligentsia%20Coffee%20Wicker%20Park%20Coffeebar!5e0!3m2!1sen!2sus!4v1620921431718!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy">
          </iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}
