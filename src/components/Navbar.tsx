import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `transition-colors duration-200 ${
      isActive 
        ? 'text-black font-extrabold opacity-100' 
        : 'text-cafe-text opacity-70 hover:text-black hover:opacity-100 hover:font-extrabold'
    }`;
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 relative z-50">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="text-cafe-text font-serif text-2xl font-bold tracking-tight">
          Nagi
        </div>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/menu" className={getLinkClass('/menu')}>Menu</Link>
        <Link to="/shop" className={getLinkClass('/shop')}>Shop</Link>
        <Link to="/about" className={getLinkClass('/about')}>About</Link>
      </div>

      <div className="flex items-center gap-6">
        <button 
          className="md:hidden hover:opacity-70 transition-opacity"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-cafe-bg z-[100] flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-end mb-12">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:opacity-70 transition-opacity"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 text-4xl font-serif text-center">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClass('/')}>Home</Link>
              <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClass('/menu')}>Menu</Link>
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClass('/shop')}>Shop</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClass('/about')}>About</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
