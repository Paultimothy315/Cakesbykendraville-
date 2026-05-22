import { motion } from 'motion/react';
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const text = `Hello Cakes by Kendraville! I would like to book a custom order.

*Name:* ${data.name}
*Phone:* ${data.phone}
*Event Date:* ${data.date}
*Flavor:* ${data.flavor}
*Size:* ${data.size}
*Delivery Zone:* ${data.zone}
*Reference Image:* ${data.reference || 'None'}
*Notes:* ${data.notes || 'None'}`;

    const url = `https://wa.me/2348062968551?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      e.currentTarget.reset();
    }, 500);
  };

  return (
    <section id="order" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 mb-4"
          >
            Book a Custom Order
          </motion.h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to make your dream cake a reality? Fill out the form below with your specifics, and we will get back to you with a confirmation and quote!
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100"
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-20 h-20 text-accent-500" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Request Received!</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                Thank you for choosing Cakes by Kendraville! We've received your order request and will reach out to you via WhatsApp or phone within the next 24 hours to confirm details and pricing.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-brand-50 border border-brand-200 text-brand-800 hover:bg-brand-100 font-bold py-3 px-8 rounded-xl transition-all"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input name="name" required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input name="phone" required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="080... or +234..." />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Event Date</label>
                  <input name="date" required type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Cake Base Flavor</label>
                  <select name="flavor" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all">
                    <option value="">Select Flavor</option>
                    <option value="vanilla">Vanilla Sponge</option>
                    <option value="fruit">Rich Fruit Cake</option>
                    <option value="strawberry">Strawberry Delight</option>
                    <option value="chocolate">Chocolate Drizzle Core</option>
                    <option value="red_velvet">Red Velvet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Serving Size / Dimension</label>
                  <select name="size" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all">
                    <option value="">Select Size</option>
                    <option value="6-inch">6-Inch (Small Batch)</option>
                    <option value="7-inch">7-Inch (Approx 12 Servings)</option>
                    <option value="8-inch">8-Inch (Approx 20 Servings)</option>
                    <option value="10-inch">10-Inch (Approx 38 Servings)</option>
                    <option value="12-inch">12-Inch (Approx 56 Servings)</option>
                    <option value="bento">Bento & Cupcake Combo Box</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Delivery Zone (FCT)</label>
                  <select name="zone" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all">
                    <option value="">Select Zone</option>
                    <option value="utako">Utako</option>
                    <option value="idu">Idu</option>
                    <option value="efab">Efab Global Estate</option>
                    <option value="garki">Garki</option>
                    <option value="wuse">Wuse</option>
                    <option value="pickup">Self Pickup (Idu)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Reference Image Link (Optional)</label>
                <input name="reference" type="url" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="Link to Pinterest, Instagram, etc." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Dietary Notes / Description / Layers</label>
                <textarea name="notes" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-gray-400" placeholder="Tell us more about the celebration! Number of layers, specific cartoon characters, color palette, or extra toppings..."></textarea>
              </div>

              <div className="pt-4">
                <button disabled={isSubmitting} type="submit" className="w-full relative flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 text-lg overflow-hidden">
                  {isSubmitting ? (
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Processing Request...
                    </motion.div>
                  ) : (
                    <span>Submit Order Request</span>
                  )}
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">We will normally reach out via WhatsApp or phone call within 24 hours.</p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-bl-full -z-0 opacity-50 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/5 rounded-tr-full -z-0 opacity-50 pointer-events-none"></div>
    </section>
  );
}
