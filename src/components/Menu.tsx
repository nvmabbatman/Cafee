import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const MENU_ITEMS = [
  { name: "Cold Brew", desc: "Brewed slowly for a smooth...", price: "$ 4.00", img: "https://images.unsplash.com/photo-1461023058943-0708ce151689?w=150&h=150&fit=crop" },
  { name: "Grilled Cheese", desc: "It is a classic comfort food with melted cheddar...", price: "$ 3.95", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=150&h=150&fit=crop" },
  { name: "Chocolate Cake", desc: "A rich and moist chocolate cake topped with creamy...", price: "$ 2.95", img: "https://images.unsplash.com/photo-1578985545062-69928b1ea38b?w=150&h=150&fit=crop" },
  { name: "Latte", desc: "Smooth and creamy...", price: "$ 2.15", img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=150&h=150&fit=crop" },
  { name: "Caesar Salad", desc: "Crisp romaine lettuce tossed with Caesar dressing...", price: "$ 2.00", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=150&h=150&fit=crop" },
  { name: "Matcha Latte", desc: "A creamy and vibrant green tea...", price: "$ 1.80", img: "https://images.unsplash.com/photo-1536412613917-1011833481fa?w=150&h=150&fit=crop" },
  { name: "Espresso Delight", desc: "A rich and bold espresso shot...", price: "$ 2.95", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=150&h=150&fit=crop" },
  { name: "Almond Croissant", desc: "A tender, flaky croissant filled with a rich almond...", price: "$ 3.00", img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=150&h=150&fit=crop" }
];

export default function Menu() {
  return (
    <section className="relative bg-transparent pb-24 overflow-hidden">
      {/* Top Wave Divider - abstract representation */}
      <div className="w-full h-12 overflow-hidden mb-12">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-cafe-alt">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-8 relative"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-5xl font-serif mb-6">Our Menu</h2>
          <p className="opacity-80">
            Welcome to Nagi! Here, we pride ourselves on offering a diverse selection of beverages and treats that cater to every taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {MENU_ITEMS.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4"
            >
              <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-cafe-alt shadow-sm" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-end mb-1">
                  <h3 className="font-bold text-base leading-tight">{item.name}</h3>
                  <div className="hidden sm:block flex-grow border-b-2 border-dotted border-cafe-text/20 mx-3 mb-1"></div>
                  <span className="font-bold text-sm sm:text-base mt-0.5 sm:mt-0">{item.price}</span>
                </div>
                <p className="text-sm opacity-70 line-clamp-1 sm:truncate">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/menu" className="bg-cafe-accent text-cafe-text border border-cafe-text rounded-full px-8 py-3 font-bold text-sm shadow-[3px_3px_0px_0px_#2A332B] hover:shadow-[1px_1px_0px_0px_#2A332B] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-flex items-center gap-2">
            View Full Menu <span>→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
