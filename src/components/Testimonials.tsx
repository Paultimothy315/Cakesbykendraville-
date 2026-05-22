import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Amina Bello',
    role: 'Event Planner',
    feedback: "The cake for my client\'s daughter\'s birthday was absolutely stunning! The attention to detail on the cartoon characters was flawless, and it tasted even better than it looked. Highly recommend Kendraville!",
    rating: 5,
  },
  {
    name: 'Tunde & Sarah',
    role: 'Newlyweds',
    feedback: "Thank you so much for the magnificent wedding cake. The elegant sugar flowers matched our theme perfectly. Everyone at the reception kept asking who the baker was!",
    rating: 5,
  },
  {
    name: 'Chukwudi N.',
    role: 'Loyal Customer',
    feedback: "Ordered the Bento & Cupcake combo for a quick anniversary surprise. Delivery was on time to Wuse, and my wife absolutely loved it! The cupcakes were ridiculously moist.",
    rating: 5,
  },
  {
    name: 'Halima Yusuf',
    role: 'Birthday Celebrant',
    feedback: "Kendraville has the best packages in Abuja without compromising on taste or quality. The signature pink custom cake I ordered was simply beautiful and so delicious.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full border-[20px] border-brand-100 opacity-50 point-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border-[20px] border-accent-400/10 opacity-50 point-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 mb-4"
          >
            Customer Testimonials
          </motion.h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what some of our wonderful clients have to say about their Kendraville experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 relative group hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-100 group-hover:text-brand-200 transition-colors" />
              
              <div className="flex gap-1 mb-6 mt-2 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              
              <p className="text-gray-700 italic leading-relaxed mb-8 relative z-10 text-lg">
                "{testimonial.feedback}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-800 font-serif font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
