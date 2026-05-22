import { motion } from 'motion/react';

const basePricing = [
  { size: '7 Inches', layers: [ { t: '2 Layers', p: '₦8,000' }, { t: '3 Layers', p: '₦12,000' }, { t: '4 Layers', p: '₦16,000' } ] },
  { size: '8 Inches', layers: [ { t: '2 Layers', p: '₦12,000' }, { t: '3 Layers', p: '₦16,000' }, { t: '4 Layers', p: '₦20,000' } ] },
  { size: '9 Inches', layers: [ { t: '2 Layers', p: '₦14,000' }, { t: '3 Layers', p: '₦18,000' }, { t: '4 Layers', p: '₦22,000' } ] },
  { size: '10 Inches', layers: [ { t: '2 Layers', p: '₦17,000' }, { t: '3 Layers', p: '₦22,000' }, { t: '4 Layers', p: '₦27,000' } ] },
  { size: '12 Inches', layers: [ { t: '2 Layers', p: '₦20,000' }, { t: '3 Layers', p: '₦27,000' }, { t: '4 Layers', p: '₦34,000' } ] },
];

const extras = [
  { name: 'Fruit/Choc Toppings (6-8in)', price: '₦2,500' },
  { name: 'Fruit/Choc Toppings (8-12in)', price: '₦5,000' },
  { name: 'Mini Alcohol Bottles', price: '₦1,200' },
  { name: 'Picture Prints', price: '₦2,500' },
  { name: 'Flowers', price: '₦2,000' },
];

const cupcakes = [
  { name: 'Box of 2', price: '₦1,000' },
  { name: 'Box of 4', price: '₦2,000' },
  { name: 'Box of 6', price: '₦3,000' },
  { name: 'Box of 12', price: '₦6,000' },
  { name: 'Box of 24', price: '₦12,000' },
];

export default function PricingMenu() {
  return (
    <section id="pricing" className="py-24 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 mb-4"
          >
            Menu & Pricing list
          </motion.h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for our delicious standard butter cream cakes and treats. 
            All customized toppers are charged according to size.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif text-brand-600 uppercase tracking-widest mb-8 border-b-2 border-brand-100 pb-4">
              Butter Cream Cakes
            </h3>
            <div className="space-y-8">
              {basePricing.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-bold text-accent-500 mb-3">{item.size}</h4>
                  <ul className="space-y-2">
                    {item.layers.map((layer, lIdx) => (
                      <li key={lIdx} className="flex justify-between items-center text-gray-800 pb-1 border-b border-dashed border-gray-200 last:border-0 hover:bg-white p-1 transition-colors">
                        <span className="font-medium text-sm md:text-base">{layer.t}</span>
                        <span className="font-mono font-medium">{layer.p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-brand-600 mt-6 italic">* Customized bespoke toppers are charged according to size constraints.</p>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-serif text-brand-600 uppercase tracking-widest mb-8 border-b-2 border-brand-100 pb-4">
                Extras & Toppings
              </h3>
              <ul className="space-y-4">
                {extras.map((extra, idx) => (
                  <li key={idx} className="flex justify-between items-center text-gray-800 group">
                    <span className="font-medium">{extra.name}</span>
                    <span className="flex-grow mx-4 border-b border-dotted border-gray-300 md:block hidden relative top-[-4px]"></span>
                    <span className="font-mono font-medium text-brand-600 group-hover:text-brand-800 transition-colors">{extra.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-brand-600 uppercase tracking-widest mb-8 border-b-2 border-brand-100 pb-4">
                Cupcakes
              </h3>
              <ul className="space-y-4">
                {cupcakes.map((cupcake, idx) => (
                  <li key={idx} className="flex justify-between items-center text-gray-800 group">
                    <span className="font-medium">{cupcake.name}</span>
                    <span className="flex-grow mx-4 border-b border-dotted border-gray-300 md:block hidden relative top-[-4px]"></span>
                    <span className="font-mono font-medium text-brand-600 group-hover:text-brand-800 transition-colors">{cupcake.price}</span>
                  </li>
                ))}
                <li className="text-sm text-gray-500 pt-2 italic">With customized toppers and chocolates</li>
              </ul>
            </div>
            
            <div className="mt-12 bg-brand-50 rounded-xl p-8 border border-brand-100 text-center">
              <p className="text-brand-800 font-medium mb-3">Looking for a budget combo?</p>
              <h4 className="text-xl font-bold font-serif mb-4">The Bento & Cupcake Box starts at ₦25,000</h4>
              <a href="#order" className="inline-block px-6 py-2 bg-white text-brand-600 border border-brand-200 rounded-full font-medium hover:bg-brand-600 hover:text-white transition-colors">Order Now</a>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
