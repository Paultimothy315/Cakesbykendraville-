import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data';
import { useCart } from '../context/CartContext';

const tabs = ['All Creations', 'Custom Celebration', 'Kids & Cartoon Themes', 'Weddings', 'Budget Combos'];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('All Creations');
  const { addToCart } = useCart();

  const filteredProducts = products.filter(
    (product) => activeTab === 'All Creations' || product.category === activeTab
  );

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 mb-4"
          >
            Cake Gallery
          </motion.h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From elegant wedding centerpieces to adorable children's character themes, explore some of our finest bakery crafts.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab ? 'bg-brand-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden mb-6 aspect-square bg-gray-50 flex items-center justify-center rounded-lg shadow-sm border border-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        numericPrice: product.numericPrice || 0,
                        image: product.image,
                        quantity: 1
                      });
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-16 group-hover:translate-y-0 bg-white/95 text-brand-800 font-bold px-6 py-3 min-w-[160px] text-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow hover:bg-brand-600 hover:text-white"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="text-center flex-grow flex flex-col justify-end mt-4">
                  <p className="text-xs text-accent-500 mb-2 uppercase tracking-widest font-bold">{product.category}</p>
                  <h3 className="text-xl font-serif text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-brand-800 font-bold font-mono mb-4">{product.price}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        numericPrice: product.numericPrice || 0,
                        image: product.image,
                        quantity: 1
                      });
                    }}
                    className="w-full bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold py-2 px-4 rounded-lg transition-colors border border-brand-100 mt-auto"
                  >
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
