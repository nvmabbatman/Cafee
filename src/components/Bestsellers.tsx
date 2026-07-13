import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PRODUCTS = [
  { name: "Ground Coffee Blend", price: "$ 14.99 USD", img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=300&h=400" },
  { name: "English Breakfast Tea", price: "$ 24.00 USD", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=300&h=400" },
  { name: "Premium Ground Coffee", price: "$ 15.99 USD", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=300&h=400" },
  { name: "Espresso Beans", price: "$ 10.99 USD", img: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=300&h=400" }
];

export default function Bestsellers() {
  return (
    <section className="bg-transparent py-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-8"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Our Bestsellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-cafe-text rounded-lg p-4 bg-[#F2ECE4] shadow-[4px_4px_0px_0px_#2A332B] flex flex-col relative"
            >
              {product.tag && (
                <div className="absolute top-4 left-4 z-10 bg-cafe-text text-cafe-bg text-[10px] font-bold px-3 py-1 rounded-full">
                  {product.tag}
                </div>
              )}
              
              <div className="w-full aspect-[3/4] bg-white border border-cafe-text/20 rounded mb-4 overflow-hidden flex items-center justify-center relative">
                {/* Simulated product packaging */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10"></div>
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="font-bold text-lg leading-tight mb-1">{product.name}</h3>
              <p className="text-sm font-semibold">{product.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="bg-transparent text-cafe-text border border-cafe-text rounded-full px-6 py-2 font-bold text-xs hover:bg-cafe-text hover:text-cafe-bg transition-all inline-flex items-center gap-2">
            View in Shop <span className="rotate-45">→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
