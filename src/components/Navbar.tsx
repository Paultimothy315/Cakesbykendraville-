import { Menu, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/new_logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, toggleCart } = useCart();
  
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Cakes and Treats by Kendraville" 
                className="h-16 w-auto object-contain rounded-md mix-blend-multiply"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-brand-600 transition-colors text-sm uppercase tracking-wider font-medium">Home</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-brand-600 transition-colors text-sm uppercase tracking-wider font-medium">Cake Gallery</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-brand-600 transition-colors text-sm uppercase tracking-wider font-medium">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-brand-600 transition-colors text-sm uppercase tracking-wider font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-brand-600 transition-colors text-sm uppercase tracking-wider font-medium">Contact</Link>
            
            <button onClick={toggleCart} className="relative p-2 text-gray-600 hover:text-brand-600 transition-colors hover:bg-gray-50 rounded-full">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-brand-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button onClick={toggleCart} className="relative p-2 text-gray-600 hover:text-brand-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-brand-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-800 font-medium">Home</Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-800 font-medium">Cake Gallery</Link>
              <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-800 font-medium">Pricing</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-800 font-medium">About Us</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-800 font-medium">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
