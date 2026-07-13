import { motion } from 'motion/react';

export default function MenuPage() {
  const FULL_MENU = [
    { category: "Coffee", items: [
      { name: "Cold Brew", desc: "Brewed slowly for a smooth, refreshing taste.", price: "$ 4.00", img: "https://images.unsplash.com/photo-1461023058943-0708ce151689?w=150&h=150&fit=crop" },
      { name: "Latte", desc: "Smooth and creamy, crafted with perfectly steamed milk.", price: "$ 3.15", img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=150&h=150&fit=crop" },
      { name: "Espresso Delight", desc: "A rich and bold espresso shot.", price: "$ 2.95", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=150&h=150&fit=crop" },
      { name: "Americano", desc: "Espresso with hot water for a robust flavor.", price: "$ 2.50", img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=150&h=150&fit=crop" },
      { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and velvety foam.", price: "$ 3.50", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=150&h=150&fit=crop" },
      { name: "Mocha", desc: "Espresso with rich chocolate and steamed milk.", price: "$ 4.25", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=150&h=150&fit=crop" }
    ]},
    { category: "Tea & Others", items: [
      { name: "Matcha Latte", desc: "A creamy and vibrant green tea.", price: "$ 4.80", img: "https://images.unsplash.com/photo-1536412613917-1011833481fa?w=150&h=150&fit=crop" },
      { name: "English Breakfast", desc: "Classic robust black tea.", price: "$ 2.50", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=150&h=150&fit=crop" },
      { name: "Earl Grey", desc: "Black tea infused with bergamot.", price: "$ 2.50", img: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=150&h=150&fit=crop" },
      { name: "Hot Chocolate", desc: "Rich chocolate whisked with steamed milk.", price: "$ 3.00", img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=150&h=150&fit=crop" }
    ]},
    { category: "Food & Pastries", items: [
      { name: "Grilled Cheese", desc: "Classic comfort food with melted cheddar on sourdough.", price: "$ 5.95", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=150&h=150&fit=crop" },
      { name: "Chocolate Cake", desc: "A rich and moist chocolate cake.", price: "$ 4.95", img: "https://images.unsplash.com/photo-1578985545062-69928b1ea38b?w=150&h=150&fit=crop" },
      { name: "Caesar Salad", desc: "Crisp romaine lettuce with house-made Caesar dressing.", price: "$ 6.00", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=150&h=150&fit=crop" },
      { name: "Almond Croissant", desc: "A tender, flaky croissant filled with almond paste.", price: "$ 4.00", img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=150&h=150&fit=crop" },
      { name: "Avocado Toast", desc: "Mashed avocado topped with chili flakes on sourdough.", price: "$ 6.50", img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=150&h=150&fit=crop" }
    ]}
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-transparent py-24"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Menu</h1>
          <p className="opacity-80 max-w-2xl mx-auto">
            Discover our carefully curated selection of handcrafted beverages and delicious treats. Every item is made to order with the finest ingredients.
          </p>
        </div>
        
        <div className="space-y-20">
          {FULL_MENU.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif mb-10 text-center">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {section.items.map((item, j) => (
                  <motion.div 
                    key={j} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-cafe-alt shadow-sm" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-end mb-2">
                        <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                        <div className="hidden sm:block flex-grow border-b-2 border-dotted border-cafe-text/20 mx-3 mb-1.5"></div>
                        <span className="font-bold text-lg mt-0.5 sm:mt-0">{item.price}</span>
                      </div>
                      <p className="text-sm opacity-70 leading-relaxed line-clamp-2 sm:line-clamp-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
