import { motion } from 'motion/react';

export default function ShopPage() {
  const PRODUCTS = [
    { name: "Ground Coffee Blend", price: "$ 14.99 USD", img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "English Breakfast Tea", price: "$ 24.00 USD", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Premium Ground Coffee", price: "$ 15.99 USD", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Espresso Beans", price: "$ 10.99 USD", img: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Ceramic Mug", price: "$ 18.00 USD", img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "French Press", price: "$ 35.00 USD", img: "https://images.unsplash.com/photo-1544426543-85b512398418?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Oat Milk 1L", price: "$ 4.50 USD", img: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Coffee Filters", price: "$ 5.00 USD", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=300&h=400" }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-transparent py-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">The Shop</h1>
          <p className="opacity-80 max-w-2xl mx-auto">
            Take the Nagi experience home with our selection of premium beans, brewing equipment, and merchandise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-cafe-text rounded-lg p-4 bg-[#F2ECE4] shadow-[4px_4px_0px_0px_#2A332B] flex flex-col relative"
            >
              {product.tag && (
                <div className="absolute top-4 left-4 z-10 bg-cafe-text text-cafe-bg text-[10px] font-bold px-3 py-1 rounded-full">
                  {product.tag}
                </div>
              )}
              
              <div className="w-full aspect-[3/4] bg-white border border-cafe-text/20 rounded mb-4 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10"></div>
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="font-bold text-lg leading-tight mb-1">{product.name}</h3>
              <p className="text-sm font-semibold">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
