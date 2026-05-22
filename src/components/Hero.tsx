import { motion } from 'motion/react';
import { heroImage } from '../data';

export default function Hero() {
  return (
    <div id="home" className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[90vh]">
      <div 
        className="absolute top-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75" />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="items-center flex flex-wrap"
        >
          <div className="w-full lg:w-9/12 xl:w-8/12 ml-auto mr-auto text-center">
            <div className="px-4">
              <span className="text-accent-400 font-bold uppercase tracking-widest text-sm mb-4 block">
                Cakes and Treats by kendraville
              </span>
              <h1 className="text-white font-serif font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 drop-shadow-lg">
                Premium Cakes & Small Chops Crafted for Every Budget in Abuja
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow-md">
                Highly detailed custom cakes, vibrant children's themes, and premium small chops that cater directly to your events. We bake cake and make lasting memories.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#order" className="bg-brand-500 hover:bg-brand-600 text-white font-medium px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5">
                  Book Custom Order
                </a>
                <a href="#pricing" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium px-8 py-4 rounded-full transition-all">
                  View Pricing List
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
