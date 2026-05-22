import { motion } from 'motion/react';
import { Leaf, Heart, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8 stroke-[1.5]" />,
    title: 'Finest Ingredients',
    description: 'We source the best local and international ingredients to guarantee premium taste in every bite.',
  },
  {
    icon: <Clock className="w-8 h-8 stroke-[1.5]" />,
    title: 'Baked Fresh',
    description: 'No preservatives. All our treats are hand-crafted and baked fresh daily in our bespoke kitchen.',
  },
  {
    icon: <Heart className="w-8 h-8 stroke-[1.5]" />,
    title: 'Made with Love',
    description: 'Every recipe is cherished and crafted with meticulous attention to detail and approachability.',
  },
  {
    icon: <Star className="w-8 h-8 stroke-[1.5]" />,
    title: 'Exceptional Service',
    description: 'From affordable budgets to high-end weddings across Abuja, we ensure a seamless and delightful experience.',
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-[#fffafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 mb-4"
          >
            What Makes Us Different
          </motion.h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Cakes by Kendraville, we pride ourselves on exceptional quality, an unwavering commitment to detail, and staying affordable for every event and celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-accent-500 shadow-sm border border-accent-400/20 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
